import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useRecommendations from '../../hooks/useRecommendations'
import useSurvey from '../../hooks/useSurvey'
import getSelectedDimensions from '../../util/getSelectedDimensions'
import styles from './styles'
import {
  RecommendationData,
  DimensionSelectionData,
  InputProps,
  ToolType,
  Subtool,
  Locales,
} from '../../types'
import SelectedTools from './SelectedTools'
import NonSelectedTools from './NonSelectedTools'
import ShowMore from '../Common/ShowMore'

/* eslint-disable no-nested-ternary */
const sortRecommendations = (a: RecommendationData, b: RecommendationData) =>
  a.label > b.label ? 1 : b.label > a.label ? -1 : 0

const getRecommendationsData = (
  rawRecommendations: RecommendationData[],
  dimensionSelections: DimensionSelectionData[]
) => {
  const selectedTools = dimensionSelections.map(
    (aSelection: DimensionSelectionData) => ({
      optionId: aSelection.id,
      dimensions: aSelection.data,
    })
  )

  const result = rawRecommendations.map((aRecommendation) => ({
    name: aRecommendation.label,
    dimensions: [],
  }))

  selectedTools.forEach((tool) => {
    result.forEach((aRecommendation) => {
      if (
        tool.dimensions.some(
          (aTool: ToolType) => aTool.name === aRecommendation.name
        )
      ) {
        aRecommendation.dimensions.push(tool.optionId)
      }
    })
  })

  return result
}

const Recommendations = ({ watch }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const { survey } = useSurvey()
  const { recommendations, isSuccess: recommendationsFetched } =
    useRecommendations(survey?.id)

  const classes = styles.cardStyles

  if (!recommendationsFetched) return null

  const rawRecommendationData: RecommendationData[] =
    recommendations.sort(sortRecommendations)

  const dimensionSelections = getSelectedDimensions(survey, watch)

  if (!dimensionSelections) return null

  const recommendationsData = getRecommendationsData(
    rawRecommendationData,
    dimensionSelections
  )

  const extractSubtools = (toolName: string) => {
    const extractedSubtoolObjects: Subtool[] = dimensionSelections
      .map((aSelection: DimensionSelectionData) =>
        aSelection.data.filter((aTool: ToolType) => aTool.name === toolName)
      )
      .map((aTool: ToolType[]) => aTool[0].subtools)
      .flat(1) // flatten the arrays into one array

    // at the moment only the Suoritusmuoto selections will affect
    // visible Moodle subtools.
    const courseCompletionMethodQuestion = watch('4')

    const extractedSubtools = extractedSubtoolObjects.map((aSubtool) => {
      // if subtool has the visibility options, check if it should be rendered or not
      if (aSubtool.visibility.options) {
        if (!courseCompletionMethodQuestion) return null

        const [...options] = aSubtool.visibility.options
        const selectedCompletionMethods = Object.keys(
          courseCompletionMethodQuestion
        ).filter((key) => courseCompletionMethodQuestion[key])

        if (
          !options.some((option) => selectedCompletionMethods.includes(option))
        )
          return null
      }

      return aSubtool.title[language as keyof Locales]
    })

    return Array.from(new Set(extractedSubtools.sort()))
  }

  const mergedRecommendationData = rawRecommendationData.map((aToolData) => ({
    ...aToolData,
    ...recommendationsData.find((aTool) => aTool.name === aToolData.label),
    subtools: aToolData.label === 'moodle' && extractSubtools(aToolData.label),
  }))

  return (
    <Box sx={classes.recommendationContainer}>
      <Typography variant="h5" sx={classes.heading} component="span">
        {t('recommendations:title')}
        <ShowMore text={t('recommendations:infoBoxText')} />
      </Typography>

      <SelectedTools
        mergedRecommendationData={mergedRecommendationData}
        dimensionSelections={dimensionSelections}
      />
      <NonSelectedTools mergedRecommendationData={mergedRecommendationData} />
    </Box>
  )
}

export default Recommendations
