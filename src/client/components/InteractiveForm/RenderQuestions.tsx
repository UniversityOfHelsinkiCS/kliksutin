import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Question } from '../../types'
import styles from './styles'
import MultiChoice from './MultiChoice'
import SingleChoice from './SingleChoice'

const RenderQuestions: React.FC<{
  control: any
  watch: any
  questions: Question[]
  question: Question
}> = ({ control, watch, question, questions }) => {
  const classes = styles.cardStyles

  const components = {
    singleChoice: SingleChoice,
    multipleChoice: MultiChoice,
  }

  // Check if the option has visibility relations
  if (question.visibility?.options) {
    const [...options] = question.visibility.options

    const parent = watch(question.parentId.toString())

    if (!options.includes(parent)) return null
  }

  // Render the correct XxxxxxChoice component based on the question options type
  const Choice = components[question.optionData.type]

  if (!Choice) return null

  const childQuestions = questions.filter(
    (childQuestion) => question.id === childQuestion.parentId
  )

  return (
    <Container sx={classes.questionsContainer}>
      <Typography variant="h5" style={classes.heading} component="div">
        {question.title.en}
      </Typography>
      <Box sx={classes.content}>
        <Typography variant="body2">{question.text.en}</Typography>
      </Box>

      <Choice
        key={question.id as any}
        control={control}
        watch={watch}
        question={question}
      >
        {childQuestions &&
          childQuestions.map((children) => (
            <RenderQuestions
              key={children.id as any}
              control={control}
              watch={watch}
              question={children}
              questions={childQuestions}
            />
          ))}
      </Choice>
    </Container>
  )
}

export default RenderQuestions
