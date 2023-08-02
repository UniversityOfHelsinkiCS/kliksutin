import React from 'react'
import { Box, Button } from '@mui/material'

import { Locales, Question } from '@backend/types'

import QuestionItem from './QuestionItem'

import { useEditQuestionPriorityMutation } from '../../../hooks/useQuestionMutation'
import { UpdatedQuestionLocation } from '../../../../validators/questions'

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
  childQuestions: Question[]
  inEditMode: boolean
  selectedQuestion: Question | undefined
  handleEndPositionChange: (
    destinationData: UpdatedQuestionLocation
  ) => Promise<void>
  // eslint-disable-next-line react/require-default-props
  isEnding?: boolean
}

const MoveHereButton = ({
  question,
  childQuestions,
  selectedQuestion,
  inEditMode,
  handleEndPositionChange,
  isEnding = false,
}: MoveHereButtonProps) => {
  if (!inEditMode || question?.id === selectedQuestion?.id || !selectedQuestion)
    return null

  const lastChildQuestion = childQuestions.slice(-1)[0]

  let { priority } = question

  if (isEnding && lastChildQuestion) {
    priority = lastChildQuestion.priority + 1
  } else if (isEnding && !lastChildQuestion) priority = 0

  const destinationData = {
    parentId: isEnding ? question?.id : question.parentId,
    priority,
  }

  return (
    <Button
      sx={{
        border: 1,
        borderColor: '#0288d1',
        borderStyle: 'dashed',
        width: '100%',
      }}
      onClick={() => handleEndPositionChange(destinationData)}
    >
      Move to {isEnding ? 'end' : `priority ${priority}`}
    </Button>
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
  const mutation = useEditQuestionPriorityMutation(selectedQuestion?.id)

  if (!question || !questions) return null

  const childQuestions = questions.filter(
    (childQuestion) => question.id === childQuestion.parentId
  )

  const handleStartPositionChange = () => {
    setSelectedQuestion(question)
    setInEditMode(true)
  }

  const handleEndPositionChange = async (
    destinationData: UpdatedQuestionLocation
  ) => {
    try {
      await mutation.mutateAsync(destinationData)
      setInEditMode(false)
      setSelectedQuestion(undefined)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <Box sx={{ ml: 4 }}>
      <MoveHereButton
        question={question}
        childQuestions={childQuestions}
        inEditMode={inEditMode}
        selectedQuestion={selectedQuestion}
        handleEndPositionChange={handleEndPositionChange}
      />
      <QuestionItem
        question={question}
        language={language}
        inEditMode={inEditMode}
        handleStartPositionChange={handleStartPositionChange}
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
              handleEndPositionChange={handleEndPositionChange}
            />
          </Box>
        )}
      </>
    </Box>
  )
}

export default RenderQuestions
