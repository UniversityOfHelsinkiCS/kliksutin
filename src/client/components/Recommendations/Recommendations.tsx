import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useSurvey from '../../hooks/useSurvey'
import DimensionChip from '../Chip/DimensionChip'
import colors from '../../util/colors'
import styles from './styles'
import useRecommendations from '../../hooks/useRecommendations'
import {
  DimensionData,
  Locales,
  DimensionSelectionData,
  InputProps,
  ToolType,
} from '../../types'

const Recommendations = ({ watch }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { survey } = useSurvey()
  const { recommendations, isSuccess: recommendationsFetched } =
    useRecommendations(survey?.id)

  const classes = styles.cardStyles
  const { language } = i18n

  if (!recommendationsFetched) return null

  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const dimensionSelections: { [x: string]: boolean } = watch(
    dimensionQuestion.id.toString()
  )

  if (!dimensionSelections) return null

  /* eslint-disable no-nested-ternary */
  const sortRecommendations = (a: DimensionData, b: DimensionData) =>
    a.label > b.label ? 1 : b.label > a.label ? -1 : 0

  const dimensionSelectionData = () => {
    const arrayOfSelectedDimensions: string[] = Object.keys(
      dimensionSelections
    ).filter((key) => dimensionSelections[key])

    const result: DimensionSelectionData[] =
      dimensionQuestion.optionData.options.map((q: DimensionSelectionData) =>
        arrayOfSelectedDimensions.includes(q.id)
          ? { ...q, selected: true }
          : { ...q, selected: false }
      )

    return result
  }

  const recommendationsData = () => {
    const selectedTools = dimensionSelectionData()
      .filter((q) => q.selected)
      .map((aSelection: DimensionSelectionData) => ({
        optionId: aSelection.id,
        dimensions: aSelection.data,
      }))

    const result = recommendations.map((recommendation) => ({
      name: recommendation.label,
      dimensions: [],
    }))

    selectedTools.forEach((tool) => {
      result.forEach((rec) => {
        if (
          tool.dimensions.some((aTool: ToolType) => aTool.name === rec.name)
        ) {
          rec.dimensions.push(tool.optionId)
        }
      })
    })

    return result
  }

  const rawRecommendationData: DimensionData[] =
    recommendations.sort(sortRecommendations)

  const extractSubtools = (toolName: string) => {
    const extractedSubtools: string[] = dimensionSelectionData()
      .filter((q) => q.selected)
      .map((aSelection) =>
        aSelection.data.filter((aTool: ToolType) => aTool.name === toolName)
      )
      .map((aTool: ToolType) => aTool[0].subtools)
      .flat(1) // flatted the arrays into one array

    return Array.from(new Set(extractedSubtools))
  }

  const mergedRecommendationData = rawRecommendationData.map((item) => ({
    ...item,
    ...recommendationsData().find((i) => i.name === item.label),
    subtools: item.label === 'moodle' && extractSubtools(item.label),
  }))

  console.log(recommendations)

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
              <Typography variant="h6" sx={classes.heading} component="div">
                {recommendation.title[language as keyof Locales]}
              </Typography>
              <Box sx={classes.recommendationChipsContainer}>
                {recommendation.dimensions.map((dimension) => {
                  const chipData = dimensionSelectionData().find(
                    (question) => question.id === dimension
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
            <Typography variant="body2" color="text.secondary">
              {recommendation.text[language as keyof Locales]}
            </Typography>
          </Box>
        ))}

      {mergedRecommendationData
        .filter((recommendation) => recommendation.dimensions.length === 0)
        .map((recommendation) => (
          <Box key={recommendation.id} sx={classes.recommendationItemContainer}>
            <Box display="flex" alignItems="center">
              <Typography variant="h6" sx={classes.notSelected} component="div">
                {recommendation.title[language as keyof Locales]}
              </Typography>
            </Box>
            <Typography variant="body2" sx={classes.notSelected}>
              {recommendation.text[language as keyof Locales]}
            </Typography>
          </Box>
        ))}
    </Box>
  )
}

export default Recommendations
