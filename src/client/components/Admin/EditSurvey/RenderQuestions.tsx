import React from 'react'
import { Box } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import { Locales, Question } from '@backend/types'

import QuestionItem from './QuestionItem'
import MoveHereButton from './MoveHereButton'

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

const RenderQuestions = ({
  question,
  questions,
  language,
  inEditMode,
  setInEditMode,
  selectedQuestion,
  setSelectedQuestion,
}: RenderQuestionsProps) => {
  const { t } = useTranslation()
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

      enqueueSnackbar(t('admin:rePrioritizeSuccess'), { variant: 'success' })
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
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
