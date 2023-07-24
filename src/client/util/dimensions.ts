import { UseFormWatch, FieldValues } from 'react-hook-form'

import { DimensionSelectionData } from '@backend/types'

import { FormValues, Survey } from '../types'

export const getDimensions = (
  survey: Survey | undefined
): DimensionSelectionData[] => {
  if (!survey) return []

  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  return dimensionQuestion?.optionData.options as DimensionSelectionData[]
}

export const getSelectedDimensions = (
  survey: Survey,
  watch: UseFormWatch<FieldValues>
) => {
  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  if (!dimensionQuestion) return null

  const dimensionSelections: { [x: string]: boolean } = watch(
    dimensionQuestion.id.toString()
  )

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
  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  if (!dimensionQuestion) return null

  const dimensionSelections = resultData[dimensionQuestion.id]

  if (!dimensionSelections) return null

  const selectedDimensions = (
    dimensionQuestion.optionData.options as DimensionSelectionData[]
  ).filter(({ id }) => dimensionSelections[id])

  return selectedDimensions
}
