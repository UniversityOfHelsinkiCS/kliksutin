import { UseFormWatch, FieldValues } from 'react-hook-form'
import { Survey, DimensionSelectionData, InfoType } from '../types'

export const getDimensions = (survey: Survey): InfoType[] => {
  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  return dimensionQuestion.optionData.options
}

export const getSelectedDimensions = (
  survey: Survey,
  watch: UseFormWatch<FieldValues>
) => {
  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const dimensionSelections: { [x: string]: boolean } = watch(
    dimensionQuestion.id.toString()
  )

  if (!dimensionSelections) return null

  const selectedDimensions = (
    dimensionQuestion.optionData.options as DimensionSelectionData[]
  ).filter(({ id }) => dimensionSelections[id])

  return selectedDimensions
}
