/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Box, Button, InputLabel, Typography } from '@mui/material'
import { Locales, Question } from '@backend/types'

interface QuestionsProps {
  question: Question
  language: keyof Locales
  inEditMode: boolean
  setInEditMode: React.Dispatch<React.SetStateAction<boolean>>
  selectedQuestion: Question | undefined
  setSelectedQuestion: React.Dispatch<
    React.SetStateAction<Question | undefined>
  >
}

interface RenderQuestionsProps {
  question: Question
  questions: Question[]
  language: keyof Locales
  inEditMode: boolean
  setInEditMode: React.Dispatch<React.SetStateAction<boolean>>
  selectedQuestion: Question | undefined
  setSelectedQuestion: React.Dispatch<
    React.SetStateAction<Question | undefined>
  >
}

interface MoveHereButtonProps {
  question: Question
  inEditMode: boolean
  selectedQuestion: Question | undefined
}

const MoveHereButton = ({
  inEditMode,
  question,
  selectedQuestion,
}: MoveHereButtonProps) => {
  if (!inEditMode || question.id !== selectedQuestion?.id) return null

  return (
    <Button
      sx={{
        border: 1,
        borderColor: '#0288d1',
        borderStyle: 'dashed',
        width: '100%',
      }}
    >
      Move to priority {question.priority}
    </Button>
  )
}

const QuestionItem = ({
  question,
  language,
  inEditMode,
  setInEditMode,
  selectedQuestion,
  setSelectedQuestion,
}: QuestionsProps) => {
  const handleChangePosition = () => {
    setSelectedQuestion(question)
    setInEditMode(true)
  }

  return (
    <>
      <MoveHereButton
        question={question}
        inEditMode={inEditMode}
        selectedQuestion={selectedQuestion}
      />
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
          <Button
            variant="outlined"
            sx={{ position: 'absolute', top: 4, right: 4 }}
            onClick={handleChangePosition}
            disabled={inEditMode}
          >
            Change Position
          </Button>
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
    </>
  )
}

const RenderQuestions = ({
  question,
  questions,
  language,
  inEditMode,
  setInEditMode,
  selectedQuestion,
  setSelectedQuestion,
}: RenderQuestionsProps) => {
  if (!question || !questions) return null

  const childQuestions = questions.filter(
    (childQuestion) => question.id === childQuestion.parentId
  )

  return (
    <Box sx={{ ml: 4 }}>
      <QuestionItem
        question={question}
        language={language}
        inEditMode={inEditMode}
        setInEditMode={setInEditMode}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
      />

      {childQuestions &&
        childQuestions.map((children) => (
          <RenderQuestions
            key={children.id}
            question={children}
            questions={questions}
            language={language}
            inEditMode={inEditMode}
            setInEditMode={setInEditMode}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
          />
        ))}
    </Box>
  )
}

export default RenderQuestions
