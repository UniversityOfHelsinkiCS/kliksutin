import {
  Recommendation,
  DimensionSelectionData,
  RecommendationData,
  ToolType,
} from '../types'

/* eslint-disable no-nested-ternary */
export const sortRecommendations = (a: Recommendation, b: Recommendation) =>
  a.label > b.label ? 1 : b.label > a.label ? -1 : 0

export const getRecommendationsData = (
  rawRecommendations: Recommendation[],
  dimensionSelections: DimensionSelectionData[]
): RecommendationData[] => {
  const selectedTools = dimensionSelections.map(
    (aSelection: DimensionSelectionData) => ({
      optionId: aSelection.id,
      dimensions: aSelection.data,
    })
  )

  const result: RecommendationData[] = rawRecommendations.map(
    (aRecommendation) => ({
      label: aRecommendation.label,
      dimensions: [],
    })
  )

  selectedTools.forEach((tool) => {
    result.forEach((aRecommendation) => {
      if (
        tool.dimensions?.some(
          (aTool: ToolType) =>
            aTool.recommendationLabel === aRecommendation.label
        )
      ) {
        aRecommendation.dimensions.push(tool.optionId)
      }
    })
  })

  return result
}
