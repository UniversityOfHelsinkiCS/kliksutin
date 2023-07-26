import React from 'react'
import { Box, InputLabel, Typography } from '@mui/material'
import { Locales, Question } from '@backend/types'

interface QuestionsProps {
  question: Question
  language: keyof Locales
}

interface RenderQuestionsProps {
  question: Question
  questions: Question[]
  language: keyof Locales
}

const QuestionItem = ({ question, language }: QuestionsProps) => (
  <Box
    key={question.id}
    sx={{
      p: 2,
      my: 4,
      border: 1,
      borderColor: 'grey.400',
      position: 'relative',
      '&:hover': {
        border: 1,
        borderColor: '#0288d1',
      },
    }}
  >
    <InputLabel
      sx={{
        mt: '-1.75em',
        px: '0.5em',
        zIndex: 2,
        width: 'full',
        backgroundColor: 'white',
        position: 'absolute',
      }}
    >
      {question.title[language]}
    </InputLabel>
    <Box>
      <Typography variant="body2">ID: {question.id}</Typography>
      <Typography variant="body2">
        Järjestysnumero: {question.priority}
      </Typography>
      <Typography variant="body2">
        Isäntäkysymys: {question.parentId}
      </Typography>
      <Typography variant="body2">
        Sisältö: {question.text[language]}
      </Typography>
    </Box>
  </Box>
)

const RenderQuestions = ({
  question,
  questions,
  language,
}: RenderQuestionsProps) => {
  if (!question || !questions) return null

  const childQuestions = questions.filter(
    (childQuestion) => question.id === childQuestion.parentId
  )

  return (
    <Box sx={{ ml: 4 }}>
      <QuestionItem question={question} language={language} />

      {childQuestions &&
        childQuestions.map((children) => (
          <RenderQuestions
            key={children.id}
            question={children}
            questions={questions}
            language={language}
          />
        ))}
    </Box>
  )
}

export default RenderQuestions
