/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Box, Button, InputLabel, Typography } from '@mui/material'
import { Locales, Question } from '@backend/types'

interface QuestionsProps {
  question: Question
  language: keyof Locales
  inEditMode: boolean
  setInEditMode: React.Dispatch<React.SetStateAction<boolean>>
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
  // eslint-disable-next-line react/require-default-props
  isEnding?: boolean
  question: Question
  childQuestions: Question[]
  inEditMode: boolean
  selectedQuestion: Question | undefined
}

const MoveHereButton = ({
  isEnding = false,
  question,
  childQuestions,
  inEditMode,
  selectedQuestion,
}: MoveHereButtonProps) => {
  if (!inEditMode || question?.id === selectedQuestion?.id || !selectedQuestion)
    return null

  const lastChildQuestion = childQuestions.slice(-1)[0]

  let { priority } = question

  if (isEnding && lastChildQuestion) {
    priority = lastChildQuestion.priority + 1
  } else if (isEnding && !lastChildQuestion) priority = 0

  const handleEndPositionChange = () => {
    const destination = {
      parentId: isEnding ? question?.id : question.parentId,
      priority,
    }

    console.log(destination)
  }

  return (
    <Button
      sx={{
        border: 1,
        borderColor: '#0288d1',
        borderStyle: 'dashed',
        width: '100%',
      }}
      onClick={handleEndPositionChange}
    >
      Move to {isEnding ? 'end' : `priority ${priority}`}
    </Button>
  )
}

const QuestionItem = ({
  question,
  language,
  inEditMode,
  setInEditMode,
  setSelectedQuestion,
}: QuestionsProps) => {
  const borderColor = inEditMode ? 'grey.300' : 'grey.400'
  const textColor = inEditMode ? 'grey.400' : 'black'

  const handleStartPositionChange = () => {
    setSelectedQuestion(question)
    setInEditMode(true)
  }

  return (
    <Box
      key={question.id}
      sx={{
        p: 2,
        my: 4,
        border: 1,
        borderColor,
        color: textColor,
        position: 'relative',
        ...(inEditMode
          ? {} // Empty object when inEditMode is true, so no additional styles are applied
          : {
              '&:hover': {
                border: 1,
                borderColor: '#0288d1',
              },
            }),
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
          color: textColor,
        }}
      >
        {question.title[language]}
      </InputLabel>
      <Box>
        <Button
          variant="outlined"
          sx={{ position: 'absolute', top: 4, right: 4 }}
          onClick={handleStartPositionChange}
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
      <MoveHereButton
        question={question}
        childQuestions={childQuestions}
        inEditMode={inEditMode}
        selectedQuestion={selectedQuestion}
      />
      <QuestionItem
        question={question}
        language={language}
        inEditMode={inEditMode}
        setInEditMode={setInEditMode}
        setSelectedQuestion={setSelectedQuestion}
      />

      <>
        {childQuestions.map((children) => (
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
        {selectedQuestion?.parentId !== question.id && (
          <Box sx={{ ml: 4, mb: 4 }}>
            <MoveHereButton
              isEnding
              question={question}
              childQuestions={childQuestions}
              inEditMode={inEditMode}
              selectedQuestion={selectedQuestion}
            />
          </Box>
        )}
      </>
    </Box>
  )
}

export default RenderQuestions
