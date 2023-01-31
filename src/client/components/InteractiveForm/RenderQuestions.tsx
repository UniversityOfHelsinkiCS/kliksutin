import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Question } from '../../types'
import styles from './styles'
import MultiChoise from './MultiChoise'
import SingleChoise from './SingleChoise'

const RenderQuestions: React.FC<{
  control: any
  watch: any
  questions: Question[]
  question: Question
}> = ({ control, watch, question, questions }) => {
  const classes = styles.cardStyles

  // Check if the option has visibility relations
  if (question.visibility?.options) {
    const [...options] = question.visibility.options

    const parent = watch(question.parentId.toString())

    if (!options.includes(parent)) return null
  }

  return (
    <Box sx={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" style={classes.heading} component="div">
            {question.title.en}
          </Typography>
          <Box sx={classes.content}>
            <Typography variant="body2">{question.text.en}</Typography>
          </Box>
        </CardContent>
      </Card>

      {question.optionData.type === 'singleChoice' ? (
        <SingleChoise
          key={question.id as any}
          control={control}
          watch={watch}
          question={question}
          childQuestions={questions.filter(
            (childQuestion) => question.id === childQuestion.parentId
          )}
        />
      ) : (
        <MultiChoise
          key={question.id as any}
          control={control}
          question={question}
          childQuestions={questions.filter(
            (childQuestion) => question.id === childQuestion.parentId
          )}
        />
      )}
    </Box>
  )
}

export default RenderQuestions
