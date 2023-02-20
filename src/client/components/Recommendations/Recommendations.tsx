import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useSurvey from '../../hooks/useSurvey'
import DimensionChip from '../Chip/DimensionChip'
import generateColor from '../../util/generateColor'
import styles from './styles'
import getDimensionData from '../../../server/db/seeders/data/devDimensionTools'
import useRecommendations from '../../hooks/useRecommendations'
import { DimensionData, MultipleChoiceType, Question } from '../../types'

/* eslint-disable no-nested-ternary */
const sortRecommendations = (a: DimensionData, b: DimensionData) =>
  a.label > b.label ? 1 : b.label > a.label ? -1 : 0

const mapSelectedQuestions = (
  question: Question,
  dimensionSelections: { [x: string]: boolean }
) => {
  const selectedDimensions = Object.keys(dimensionSelections).filter(
    (key) => dimensionSelections[key]
  )

  const selectedQuestions = question.optionData.options.filter((q) =>
    selectedDimensions.includes(q.id)
  )

  return selectedQuestions as MultipleChoiceType[]
}

const mapRecommendations = (
  recommendationsData: DimensionData[],
  selectedQuestionsData: MultipleChoiceType[]
) => {
  const selectedTools = selectedQuestionsData.map(
    (question: { id: string; data: string[] }) => ({
      optionId: question.id,
      dimensions: question.data,
    })
  )

  const recommendations = recommendationsData.map((recommendation) => ({
    name: recommendation.label,
    dimensions: [],
  }))

  selectedTools.map(
    (tool: { dimensions: string | string[]; optionId: string }) =>
      recommendations.forEach((rec) => {
        if (tool.dimensions.includes(rec.name)) {
          rec.dimensions.push(tool.optionId)
        }
      })
  )

  return recommendations
}

const Recommendations: React.FC<{
  watch: any
}> = ({ watch }) => {
  const { t } = useTranslation()
  const survey = useSurvey()
  const recommendations = useRecommendations()

  const language = localStorage.getItem('language') || 'en'

  if (!survey || !recommendations) return null

  const classes = styles.cardStyles

  const dimensionSelection = watch('1')

  if (!dimensionSelection) return null

  const dimensionData: DimensionData[] =
    getDimensionData().sort(sortRecommendations)

  const dimensionQuestion = survey.Questions.find(
    (question) => question.id === 1
  )

  const selectedQuestions = mapSelectedQuestions(
    dimensionQuestion,
    dimensionSelection
  )

  const recommendationsData = mapRecommendations(
    recommendations,
    selectedQuestions
  )

  return (
    <Box sx={classes.recommendationContainer}>
      <Typography variant="h5" sx={classes.heading} component="div">
        {t('recommendations:title')}
      </Typography>

      {dimensionData.map((dimensionObject) =>
        recommendationsData.map((recommendation) => {
          if (
            recommendation.name === dimensionObject.label &&
            recommendation.dimensions.length > 0
          ) {
            return (
              <Box
                key={dimensionObject.id}
                sx={classes.recommendationItemContainer}
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" sx={classes.heading} component="div">
                    {dimensionObject.title[language]}
                  </Typography>
                  <Box sx={classes.recommendationChipsContainer}>
                    {recommendation.dimensions.map((dimension) => {
                      const chipData = selectedQuestions.find(
                        (question) => question.id === dimension
                      )
                      return (
                        <DimensionChip
                          key={chipData.id}
                          choice={chipData}
                          color={generateColor(chipData.id)}
                          compact
                        />
                      )
                    })}
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {dimensionObject.text[language]}
                </Typography>
              </Box>
            )
          }
          return null
        })
      )}
    </Box>
  )
}

export default Recommendations
