import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Locales, Question } from '@backend/types'

interface RenderQuestionsProps {
  question: Question
  questions: Question[]
  language: keyof Locales
}

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
    <Container>
      <Box
        key={question.id}
        sx={{
          p: 2,
          my: 1,
          ml: 4,
          border: 1,
          borderColor: 'grey.400',
          position: 'relative',
          '&:hover': {
            border: 1,
            borderColor: '#0288d1',
          },
        }}
      >
        <Typography variant="body2">
          {question.title[language as keyof Locales]}
        </Typography>
      </Box>

      {childQuestions &&
        childQuestions.map((children) => (
          <RenderQuestions
            key={children.id}
            question={children}
            questions={questions}
            language={language}
          />
        ))}
    </Container>
  )
}

export default RenderQuestions
