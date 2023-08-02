import React from 'react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Question } from '@backend/types'

import { UpdatedQuestionLocation } from '../../../../validators/questions'

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
  const { t } = useTranslation()
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
      {isEnding
        ? t('admin:moveToEnd')
        : t('admin:moveToPriorityNumber', { priority })}
    </Button>
  )
}

export default MoveHereButton
