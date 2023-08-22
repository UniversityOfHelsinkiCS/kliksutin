import { Op } from 'sequelize'
import { Question, Recommendation, Survey } from '../db/models'

import {
  NewRecommendation,
  NewRecommendationZod,
  UpdatedRecommendation,
  UpdatedRecommendationZod,
} from '../../validators/recommendations'

import NotFoundError from '../errors/NotFoundError'
import ZodValidationError from '../errors/ValidationError'

import {
  DimensionSelectionData,
  MultipleChoiceType,
  SingleChoiceType,
} from '../types'

export const getRecommendations = async (
  surveyId: string
): Promise<Recommendation[]> => {
  const recommendations = await Recommendation.findAll({
    where: {
      surveyId,
    },
  })

  if (!recommendations.length)
    throw new NotFoundError('Recommendations not found')

  return recommendations
}

export const updateRecommendation = async (
  recommendationId: string,
  updatedRecommendationValues: UpdatedRecommendation
): Promise<Recommendation> => {
  const recommendation = await Recommendation.findByPk(recommendationId)
  if (!recommendation)
    throw new NotFoundError('Recommendation to update not found')

  const request = UpdatedRecommendationZod.safeParse(
    updatedRecommendationValues
  )

  if (!request.success)
    throw new ZodValidationError(
      'Validation of the recommendation update values failed',
      request.error.issues
    )

  const { data } = request

  Object.assign(recommendation, data)

  await recommendation.save()

  return recommendation
}

export const createRecommendation = async (
  surveyId: string,
  newRecommendationValues: NewRecommendation
): Promise<Recommendation> => {
  const survey = await Survey.findByPk(surveyId)

  if (!survey)
    throw new NotFoundError(
      'Survey not found while creating a new recommendation'
    )

  const request = NewRecommendationZod.safeParse(newRecommendationValues)

  if (!request.success) throw new Error('Validation failed')
  const body = request.data

  const newRecommendation = await Recommendation.create({
    surveyId: Number(surveyId),
    label: body.label,
    type: body.type,
    title: body.title,
    text: body.text,
  })

  // find the dimension question
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

  return newRecommendation
}

export const deleteRecommendation = async (
  recommendationId: string
): Promise<Recommendation> => {
  const recommendation = await Recommendation.findByPk(recommendationId)
  if (!recommendation)
    throw new NotFoundError('Recommendation to delete not found')

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

  return recommendation
}
