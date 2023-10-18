import { UseFormWatch, FieldValues } from 'react-hook-form'

import { FormValues, DimensionSelectionData } from '@backend/types'

import { Survey } from '../types'

const getDimensionQuestion = (survey: Survey) => {
  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  return dimensionQuestion
}

export const getDimensions = (
  survey: Survey | undefined
): DimensionSelectionData[] => {
  if (!survey) return []

  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  return dimensionQuestion?.optionData.options as DimensionSelectionData[]
}

export const getSelectedDimensionsFromWatch = (
  survey: Survey,
  watch: UseFormWatch<FieldValues>
) => {
  const dimensionQuestion = getDimensionQuestion(survey)

  if (!dimensionQuestion) return null

  const dimensionSelections = watch(dimensionQuestion.id.toString())

  if (!dimensionSelections) return null

  const selectedDimensions = (
    dimensionQuestion.optionData.options as DimensionSelectionData[]
  ).filter(({ id }) => dimensionSelections[id])

  return selectedDimensions
}

export const getSelectedDimensionsFromResultData = (
  survey: Survey,
  resultData: FormValues
) => {
  const dimensionQuestion = getDimensionQuestion(survey)

  if (!dimensionQuestion) return null

  const dimensionSelections = resultData[dimensionQuestion.id]

  if (!dimensionSelections) return null

  const selectedDimensions = (
    dimensionQuestion.optionData.options as DimensionSelectionData[]
  ).filter(({ id }) => dimensionSelections[id])

  return selectedDimensions
}
