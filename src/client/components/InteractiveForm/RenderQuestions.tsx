import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { InputProps, Locales } from '../../types'
import styles from './styles'
import MultiChoice from '../Choices/MultiChoice'
import SingleChoice from '../Choices/SingleChoice'
import DimensionSelect from '../Choices/DimensionSelect'

const RenderQuestions = ({
  control,
  watch,
  question,
  questions,
  language,
}: InputProps) => {
  const classes = styles.cardStyles

  if (question.visibility?.options) {
    const [...options] = question.visibility.options

    const parent = watch(question.parentId.toString())

    if (!options.includes(parent)) return null
  }

  const components: { [key: string]: (...args: InputProps[]) => JSX.Element } =
    {
      singleChoice: SingleChoice,
      multipleChoice: MultiChoice,
      dimensions: DimensionSelect,
      info: SingleChoice,
    }

  const Choice = components[question.optionData.type]

  if (!Choice) return null

  const childQuestions = questions.filter(
    (childQuestion) => question.id === childQuestion.parentId
  )

  return (
    <Container sx={classes.questionsContainer}>
      <Typography variant="h5" style={classes.heading} component="div">
        {question.title[language as keyof Locales]}
      </Typography>
      <Box sx={classes.content}>
        <Typography variant="body2">
          {question.text[language as keyof Locales]}
        </Typography>
      </Box>

      <Choice
        key={question.id as unknown as string}
        control={control}
        watch={watch}
        question={question}
        language={language}
      >
        {childQuestions &&
          childQuestions.map((children) => (
            <RenderQuestions
              key={children.id as any}
              control={control}
              watch={watch}
              question={children}
              questions={childQuestions}
              language={language}
            />
          ))}
      </Choice>
    </Container>
  )
}

export default RenderQuestions
