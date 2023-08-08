import React from 'react'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import {
  Badge,
  Box,
  Chip,
  IconButton,
  InputLabel,
  Tooltip,
} from '@mui/material'

import FingerprintIcon from '@mui/icons-material/Fingerprint'
import LowPriorityIcon from '@mui/icons-material/LowPriority'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { Locales, Question } from '@backend/types'

import { useEditQuestionPriorityMutation } from '../../../hooks/useQuestionMutation'

import QuestionItemMenu from './QuestionItemMenu'

import { UpdatedQuestionLocation } from '../../../../validators/questions'

interface MoveHandleProps {
  question: Question
  questions: Question[]
}

interface QuestionsProps {
  question: Question
  questions: Question[]
  language: keyof Locales
}

const MoveHandles = ({ question, questions }: MoveHandleProps) => {
  const { t } = useTranslation()
  const mutation = useEditQuestionPriorityMutation(question.id)

  const parentChildQuestions = questions.filter(
    (q) => q.parentId === question.parentId
  )

  const handleChangePosition = async (
    destinationData: UpdatedQuestionLocation
  ) => {
    try {
      await mutation.mutateAsync(destinationData)

      enqueueSnackbar(t('admin:rePrioritizeSuccess'), { variant: 'success' })
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  if (parentChildQuestions.length <= 1) return null

  return (
    <Box sx={{ mr: 2 }}>
      {question.priority !== 0 && (
        <IconButton
          size="small"
          onClick={() =>
            handleChangePosition({
              parentId: question.parentId,
              priority: question.priority - 1,
            })
          }
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
      {question.priority < parentChildQuestions.length - 1 && (
        <IconButton
          size="small"
          onClick={() =>
            handleChangePosition({
              parentId: question.parentId,
              priority: question.priority + 1,
            })
          }
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      )}
    </Box>
  )
}

const QuestionItem = ({ question, questions, language }: QuestionsProps) => (
  <Box
    key={question.id}
    sx={{
      p: 2,
      my: 4,
      border: 1,
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
    <Box sx={{ mt: 1, display: 'flex' }}>
      <MoveHandles question={question} questions={questions} />
      {/* <QuestionItemMenu
          question={question}
          handleStartPositionChange={handleStartPositionChange}
        /> */}
      <Tooltip title="The number represents the unique ID of the question">
        <Badge sx={{ mr: 1 }} badgeContent={question.id} color="primary">
          <FingerprintIcon />
        </Badge>
      </Tooltip>
      {question.parentId && (
        <Tooltip title="This badge represents that the question is a child question. The number represents the ID number of the parent question">
          <Badge
            sx={{ mr: 1 }}
            badgeContent={question.parentId}
            color="primary"
          >
            <ChildCareIcon />
          </Badge>
        </Tooltip>
      )}
      <Tooltip title="Priority determines the order in which the questions appear on the survey. 0 being the first question. Child question priorities starts from 0 but their priorities are only valid inside the child tree">
        <Chip
          sx={{
            mx: 2,
            px: '0.3rem',
            fontWeight: 'normal',
            borderRadius: '1rem',
          }}
          label={`Priority: ${question.priority}`}
          color="primary"
          variant="outlined"
          size="small"
          icon={<LowPriorityIcon />}
        />
      </Tooltip>
    </Box>
  </Box>
)

export default QuestionItem
