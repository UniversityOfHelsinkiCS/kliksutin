import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { InputProps, Locales, Question } from '../../types'
import styles from './styles'
import MultiChoice from '../Choices/MultiChoice'
import SingleChoice from '../Choices/SingleChoice'
import DimensionSelect from '../Choices/DimensionSelect'
import Markdown from '../Common/Markdown'
import ShowMore from '../Common/ShowMore'

const classes = styles.cardStyles

const QuestionText = ({
  question,
  language,
}: {
  question: Question
  language: keyof Locales
}) => {
  if (question.optionData.type === 'info')
    return (
      <Typography component="span">
        {question.title[language]}
        <ShowMore text={question.text[language as keyof Locales]} />
      </Typography>
    )

  return (
    <>
      <Markdown>{question.title[language]}</Markdown>
      <Box sx={classes.content}>
        <Markdown>{question.text[language]}</Markdown>
      </Box>
    </>
  )
}

const RenderQuestions = ({
  control,
  watch,
  question,
  questions,
  language,
}: InputProps) => {
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
      <QuestionText question={question} language={language as keyof Locales} />
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
