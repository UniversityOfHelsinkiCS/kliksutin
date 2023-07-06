import express from 'express'

import { Op } from 'sequelize'

import { Question, Recommendation, Survey } from '../db/models'

import {
  UpdatedRecommendationZod,
  NewRecommendationZod,
} from '../../validators/recommendations'

import {
  DimensionSelectionData,
  MultipleChoiceType,
  RequestWithUser,
  SingleChoiceType,
} from '../types'

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

recommendationRouter.put('/:id', async (req: RequestWithUser, res: any) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const recommendation = await Recommendation.findByPk(id)
  if (!recommendation) throw new Error('Recommendation not found')

  const request = UpdatedRecommendationZod.safeParse(req.body)

  if (!request.success) throw new Error('Validation failed')
  const body = request.data

  Object.assign(recommendation, body)

  await recommendation.save()

  return res.status(200).send(recommendation)
})

recommendationRouter.post(
  '/:surveyId',
  async (req: RequestWithUser, res: any) => {
    const { surveyId } = req.params
    const { isAdmin } = req.user

    const request = NewRecommendationZod.safeParse(req.body)

    if (!request.success) throw new Error('Validation failed')
    const body = request.data

    if (!isAdmin) throw new Error('Unauthorized')

    const survey = await Survey.findByPk(surveyId)
    if (!survey) throw new Error('Survey not found')

    const recommendation = await Recommendation.create({
      surveyId: Number(surveyId),
      label: body.label,
      type: body.type,
      title: body.title,
      text: body.text,
    })

    const dimensionQuestion = await Question.findOne({
      where: {
        optionData: {
          type: {
            [Op.eq]: 'dimensions',
          },
        },
      },
    })

    // Concat the new recommendation to the selected dimensions
    if (dimensionQuestion) {
      const newDimensionTool = {
        recommendationLabel: body.label,
        subtools: [],
      }

      // Map the dimension question options and concat the options.data array to
      // include the new recommendation if the dimension was selected
      const updatedDimensionQuestion = dimensionQuestion.optionData.options.map(
        (
          option: SingleChoiceType | MultipleChoiceType | DimensionSelectionData
        ) => {
          if (
            body.dimensions[option.id] &&
            'data' in option &&
            Array.isArray(option.data)
          ) {
            const newOptionData = [...option.data, newDimensionTool]
            return { ...option, data: newOptionData }
          }
          return option
        }
      )

      Object.assign(
        dimensionQuestion.optionData.options,
        updatedDimensionQuestion
      )

      dimensionQuestion.changed('optionData', true)

      await dimensionQuestion.save()
    }

    return res.status(201).send(recommendation)
  }
)

recommendationRouter.delete('/:id', async (req: RequestWithUser, res: any) => {
  const { id } = req.params
  const { isAdmin } = req.user

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
      (option) => {
        if ('data' in option && Array.isArray(option.data)) {
          const updatedData = option.data.filter(
            (aRecommendation) =>
              aRecommendation.recommendationLabel !== recommendation.label
          )
          return { ...option, data: updatedData }
        }
        return option
      }
    )

    Object.assign(
      dimensionQuestion.optionData.options,
      updatedDimensionQuestion
    )
    dimensionQuestion.changed('optionData', true)

    await dimensionQuestion.save()
  }

  await recommendation.destroy()

  return res.sendStatus(204)
})

export default recommendationRouter
