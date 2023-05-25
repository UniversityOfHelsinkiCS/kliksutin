import express from 'express'

import { Op } from 'sequelize'

import { Question, Recommendation, Survey } from '../db/models'

import { RecommendationUpdates, RequestWithUser, ToolType } from '../types'

const recommendationRouter = express.Router()

recommendationRouter.get('/:surveyId', async (req, res) => {
  const { surveyId } = req.params

  try {
    const recommendations = await Recommendation.findAll({
      where: {
        surveyId,
      },
    })

    if (!recommendations.length)
      return res
        .status(404)
        .send('Did not find recommendations for this survey')

    return res.status(200).send(recommendations)
  } catch (error) {
    return res.status(400).send('Could not fetch recommendations')
  }
})

recommendationRouter.put('/:id', async (req: RequestWithUser, res) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  try {
    const recommendation = await Recommendation.findByPk(id)
    if (!recommendation)
      return res.status(404).send('Invalid recommendation id')

    const updates: RecommendationUpdates = req.body

    Object.assign(recommendation, updates)

    await recommendation.save()

    return res.status(200).send(recommendation)
  } catch (error) {
    return res.status(400).send('Could not update recommendation')
  }
})

recommendationRouter.post('/:surveyId', async (req: RequestWithUser, res) => {
  const { surveyId } = req.params
  const { isAdmin } = req.user
  const data = req.body

  if (!isAdmin) throw new Error('Unauthorized')

  try {
    const survey = await Survey.findByPk(surveyId)

    if (!survey) return res.status(404).send('Invalid survey id')

    const recommendation = await Recommendation.create({
      surveyId: Number(surveyId),
      ...data,
    })

    return res.status(201).send(recommendation)
  } catch (error) {
    return res.status(400).send('Could not create new recommendation')
  }
})

recommendationRouter.delete('/:id', async (req: RequestWithUser, res) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  try {
    const recommendation = await Recommendation.findByPk(id)
    if (!recommendation)
      return res.status(404).send('Invalid recommendation id')

    const dimensionQuestion = await Question.findOne({
      where: {
        optionData: {
          type: {
            [Op.eq]: 'dimensions',
          },
        },
      },
    })

    // Delete the recommendation association from the dimension question
    // recommendation associations are in the question.optionData.options.data array

    if (dimensionQuestion) {
      const updatedDimensionQuestion = dimensionQuestion.optionData.options.map(
        (option) =>
          option.data.filter(
            (aRecommendation: ToolType) =>
              aRecommendation.recommendationLabel !== recommendation.label
          )
      )
      Object.assign(dimensionQuestion.optionData.options, {
        data: updatedDimensionQuestion,
      })
      dimensionQuestion.changed('optionData', true)

      await dimensionQuestion.save()
    }

    await recommendation.destroy()

    return res.sendStatus(204)
  } catch (error) {
    return res.status(400).send('Could not delete recommendation')
  }
})

export default recommendationRouter
