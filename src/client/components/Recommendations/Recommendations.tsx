import React from 'react'
import { Container, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import useSurvey from '../../hooks/useSurvey'
import DimensionChip from '../Chip/DimensionChip'
import styles from './styles'
import getDimensionData from '../../../server/db/seeders/data/devDimensionTools'
import { DimensionData, MultipleChoiceType, Question } from '../../types'

const language = localStorage.getItem('language') || 'en'

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

const mapRecommendations = (selectedQuestionsData: MultipleChoiceType[]) => {
  const dimensionData: DimensionData[] = getDimensionData()

  const selectedTools = selectedQuestionsData.map(
    (question: { id: string; data: string[] }) => ({
      optionId: question.id,
      dimensions: question.data,
    })
  )

  const recommendations = dimensionData.map((dimension) => ({
    name: dimension.id,
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
  useTranslation()
  const survey = useSurvey()

  if (!survey) return null

  const classes = styles.cardStyles

  const dimensionSelection = watch('1')

  const dimensionData: DimensionData[] = getDimensionData()

  const dimensionQuestion = survey.Questions.find(
    (question) => question.id === 1
  )

  const selectedQuestions = mapSelectedQuestions(
    dimensionQuestion,
    dimensionSelection
  )

  const recommendationsData = mapRecommendations(selectedQuestions)

  return (
    <Container sx={classes.recommendationContainer}>
      <Typography variant="h5" sx={classes.heading} component="div">
        <Trans i18nKey="recommendations:title" />
      </Typography>

      {dimensionData.map((dimensionObject) =>
        recommendationsData.map((recommendation) => {
          if (
            recommendation.name === dimensionObject.id &&
            recommendation.dimensions.length > 0
          ) {
            return (
              <div key={dimensionObject.id}>
                <Typography variant="h6" sx={classes.heading} component="div">
                  {dimensionObject.title[language]}
                  {recommendation.dimensions.map((dimension) => {
                    const chipData = selectedQuestions.find(
                      (question) => question.id === dimension
                    )
                    return (
                      <DimensionChip
                        key={chipData.id}
                        choice={chipData}
                        compact
                      />
                    )
                  })}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dimensionObject.text[language]}
                </Typography>
              </div>
            )
          }
          return null
        })
      )}
    </Container>
  )
}

export default Recommendations
