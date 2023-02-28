import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useSurvey from '../../hooks/useSurvey'
import DimensionChip from '../Chip/DimensionChip'
import colors from '../../util/colors'
import styles from './styles'
import getDimensionData from '../../../server/data/dimensions'
import useRecommendations from '../../hooks/useRecommendations'
import {
  DimensionData,
  Locales,
  DimensionSelectionData,
  InputProps,
} from '../../types'

/* eslint-disable no-nested-ternary */

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
      .map((question: DimensionSelectionData) => ({
        optionId: question.id,
        dimensions: question.data,
      }))

    const result = recommendations.map((recommendation) => ({
      name: recommendation.label,
      dimensions: [],
    }))

    selectedTools.forEach((tool) => {
      result.forEach((rec) => {
        if (
          tool.dimensions.includes(rec.name) ||
          tool.dimensions.some((aTool) => aTool.name === rec.name)
        ) {
          rec.dimensions.push(tool.optionId)
        }
      })
    })

    return result
  }

  const dimensionData: DimensionData[] =
    getDimensionData().sort(sortRecommendations)

  const mergedDimensioData = dimensionData.map((item) => ({
    ...item,
    ...recommendationsData().find((i) => i.name === item.label),
  }))

  console.log(mergedDimensioData)

  return (
    <Box sx={classes.recommendationContainer}>
      <Typography variant="h5" sx={classes.heading} component="div">
        {t('recommendations:title')}
      </Typography>

      {dimensionData.map((dimensionObject) =>
        recommendationsData()
          .filter(
            (rec) =>
              rec.dimensions.length > 0 && rec.name === dimensionObject.label
          )
          .map((recommendation) => (
            <Box
              key={dimensionObject.id}
              sx={classes.recommendationItemContainer}
            >
              <Box display="flex" alignItems="center">
                <Typography variant="h6" sx={classes.heading} component="div">
                  {dimensionObject.title[language as keyof Locales]}
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
              <Typography variant="body2" color="text.secondary">
                {dimensionObject.text[language as keyof Locales]}
              </Typography>
            </Box>
          ))
      )}

      {dimensionData.map((dimensionObject) =>
        recommendationsData()
          .filter(
            (rec) =>
              rec.dimensions.length === 0 && rec.name === dimensionObject.label
          )
          .map((recommendation) => {
            if (recommendation.name === dimensionObject.label)
              return (
                <Box
                  key={`disabled-${dimensionObject.id}`}
                  sx={classes.recommendationItemContainer}
                >
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="h6"
                      sx={classes.notSelected}
                      component="div"
                    >
                      {dimensionObject.title[language as keyof Locales]}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={classes.notSelected}>
                    {dimensionObject.text[language as keyof Locales]}
                  </Typography>
                </Box>
              )

            return null
          })
      )}
    </Box>
  )
}

export default Recommendations
