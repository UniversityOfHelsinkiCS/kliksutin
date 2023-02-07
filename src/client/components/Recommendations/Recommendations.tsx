import React from 'react'
import { Container, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import useSurvey from '../../hooks/useSurvey'
import styles from './styles'
import getDimensionData from '../../../server/db/seeders/data/devDimensionTools'
import { DimensionData, MultipleChoiceType, Question } from '../../types'

/* eslint-disable @typescript-eslint/no-unused-vars */

const language = localStorage.getItem('language') || 'en'

const mapSelectedToDimensions = (question: Question, dimensionSelections) => {
  const selectedDimensions = Object.keys(dimensionSelections).filter(
    (key) => dimensionSelections[key]
  )

  const selectionBasedQuestions = question.optionData.options.filter((q) =>
    selectedDimensions.includes(q.id)
  )

  return selectionBasedQuestions
}

const Dimension: React.FC<{ dimension: MultipleChoiceType }> = ({
  dimension,
}) => (
  <>
    <Typography variant="h6" sx={{ mt: 1 }} gutterBottom>
      {dimension.label[language]}
    </Typography>
    {dimension.data.map((tool) => (
      <Typography key={tool} sx={{ ml: 1, mb: 0.5 }} color="text.secondary">
        {tool}
      </Typography>
    ))}
  </>
)

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

  const selection = mapSelectedToDimensions(
    dimensionQuestion,
    dimensionSelection
  )

  return (
    <Container sx={classes.recommendationContainer}>
      <Typography variant="h5" sx={classes.heading} component="div">
        <Trans i18nKey="recommendations:title" />
      </Typography>

      {dimensionData.map((dimensionObject) => (
        <div key={dimensionObject.id}>
          <Typography variant="h6" sx={classes.heading} component="div">
            {dimensionObject.title[language]}
          </Typography>
          <Typography sx={{ ml: 1, mb: 0.5 }} color="text.secondary">
            {dimensionObject.text[language]}
          </Typography>
        </div>
      ))}

      {Object.keys(dimensionSelection).map((dimension: string) => (
        <div key={dimension}>{dimension}</div>
      ))}
    </Container>
  )
}

export default Recommendations
