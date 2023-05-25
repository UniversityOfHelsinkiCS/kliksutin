import express from 'express'

import { Op } from 'sequelize'

import { Question, Recommendation, Survey } from '../db/models'

import { RecommendationUpdates, RequestWithUser, ToolType } from '../types'

const recommendationRouter = express.Router()

recommendationRouter.get('/:surveyId', async (req, res) => {
  const { surveyId } = req.params

  const recommendations = await Recommendation.findAll({
    where: {
      surveyId,
    },
  })

  if (!recommendations.length) throw new Error('Recommendation not found')

  return res.status(200).send(recommendations)
})

recommendationRouter.put('/:id', async (req: RequestWithUser, res) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const recommendation = await Recommendation.findByPk(id)
  if (!recommendation) throw new Error('Recommendation not found')

  const updates: RecommendationUpdates = req.body

  Object.assign(recommendation, updates)

  await recommendation.save()

  return res.status(200).send(recommendation)
})

recommendationRouter.post('/:surveyId', async (req: RequestWithUser, res) => {
  const { surveyId } = req.params
  const { isAdmin } = req.user
  const data = req.body

  if (!isAdmin) throw new Error('Unauthorized')

  const survey = await Survey.findByPk(surveyId)
  if (!survey) throw new Error('Survey not found')

  const recommendation = await Recommendation.create({
    surveyId: Number(surveyId),
    ...data,
  })

  return res.status(201).send(recommendation)
})

recommendationRouter.delete('/:id', async (req: RequestWithUser, res) => {
  const { id } = req.params
  // const { isAdmin } = req.user

  const isAdmin: null = null

  if (!isAdmin) throw new Error('Unauthorized')

  const recommendation = await Recommendation.findByPk(id)
  if (!recommendation) throw new Error('Recommendation not found')

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
})

export default recommendationRouter
