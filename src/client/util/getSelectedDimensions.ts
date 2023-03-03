import { UseFormWatch, FieldValues } from 'react-hook-form'
import { Survey, DimensionSelectionData } from '../types'

const getSelectedDimensions = (
  survey: Survey,
  watch: UseFormWatch<FieldValues>
) => {
  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const dimensionSelections: { [x: string]: boolean } = watch(
    dimensionQuestion.id.toString()
  )

  const selectedDimensions = (
    dimensionQuestion.optionData.options as DimensionSelectionData[]
  ).filter(({ id }) => dimensionSelections[id])

  return selectedDimensions
}

export default getSelectedDimensions
