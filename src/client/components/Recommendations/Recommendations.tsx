import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useRecommendations from '../../hooks/useRecommendations'
import useSurvey from '../../hooks/useSurvey'
import DimensionChip from '../Chip/DimensionChip'
import Markdown from '../Common/Markdown'
import colors from '../../util/colors'
import getSelectedDimensions from '../../util/getSelectedDimensions'
import styles from './styles'
import {
  RecommendationData,
  Locales,
  DimensionSelectionData,
  InputProps,
  ToolType,
} from '../../types'

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
  const { survey } = useSurvey()
  const { recommendations, isSuccess: recommendationsFetched } =
    useRecommendations(survey?.id)

  const classes = styles.cardStyles
  const { language } = i18n

  if (!recommendationsFetched) return null

  const rawRecommendationData: RecommendationData[] =
    recommendations.sort(sortRecommendations)

  const dimensionSelections = getSelectedDimensions(survey, watch)

  const recommendationsData = getRecommendationsData(
    rawRecommendationData,
    dimensionSelections
  )

  const extractSubtools = (toolName: string) => {
    const extractedSubtools: string[] = dimensionSelections
      .map((aSelection: DimensionSelectionData) =>
        aSelection.data.filter((aTool: ToolType) => aTool.name === toolName)
      )
      .map((aTool: ToolType[]) => aTool[0].subtools)
      .flat(1) // flatted the arrays into one array

    return Array.from(new Set(extractedSubtools))
  }

  const mergedRecommendationData = rawRecommendationData.map((item) => ({
    ...item,
    ...recommendationsData.find((i) => i.name === item.label),
    subtools: item.label === 'moodle' && extractSubtools(item.label),
  }))

  return (
    <Box sx={classes.recommendationContainer}>
      <Typography variant="h5" sx={classes.heading} component="div">
        {t('recommendations:title')}
      </Typography>

      {mergedRecommendationData
        .filter((recommendation) => recommendation.dimensions.length > 0)
        .map((recommendation) => (
          <Box key={recommendation.id} sx={classes.recommendationItemContainer}>
            <Box display="flex" alignItems="center">
              <Markdown>
                {recommendation.title[language as keyof Locales]}
              </Markdown>
              <Box sx={classes.recommendationChipsContainer}>
                {recommendation.dimensions.map((aDimension) => {
                  const chipData = dimensionSelections.find(
                    (selectedDimension) => selectedDimension.id === aDimension
                  )
                  return (
                    <DimensionChip
                      key={chipData.id}
                      choice={chipData}
                      color={colors[chipData.id]}
                      compact
                    />
                  )
                })}
              </Box>
            </Box>
            <Typography variant="body2" sx={classes.subtoolText}>
              {recommendation.subtools && recommendation.subtools.join(', ')}
            </Typography>
            <Markdown>
              {recommendation.text[language as keyof Locales]}
            </Markdown>
          </Box>
        ))}

      {mergedRecommendationData
        .filter((recommendation) => recommendation.dimensions.length === 0)
        .map((recommendation) => (
          <Box key={recommendation.id} sx={classes.recommendationItemContainer}>
            <Box display="flex" alignItems="center">
              <Box sx={classes.notSelected}>
                <Markdown>
                  {recommendation.title[language as keyof Locales]}
                </Markdown>
              </Box>
            </Box>
            <Box sx={classes.notSelected}>
              <Markdown>
                {recommendation.text[language as keyof Locales]}
              </Markdown>
            </Box>
          </Box>
        ))}
    </Box>
  )
}

export default Recommendations
