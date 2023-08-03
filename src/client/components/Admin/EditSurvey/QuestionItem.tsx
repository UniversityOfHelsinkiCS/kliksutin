import React from 'react'
import { Badge, Box, Chip, InputLabel, Tooltip } from '@mui/material'

import FingerprintIcon from '@mui/icons-material/Fingerprint'
import LowPriorityIcon from '@mui/icons-material/LowPriority'
import ChildCareIcon from '@mui/icons-material/ChildCare'

import { Locales, Question } from '@backend/types'
import QuestionItemMenu from './QuestionItemMenu'

interface QuestionsProps {
  question: Question
  language: keyof Locales
  inEditMode: boolean
  handleStartPositionChange: () => void
}

const QuestionItem = ({
  question,
  language,
  inEditMode,
  handleStartPositionChange,
}: QuestionsProps) => {
  const borderColor = inEditMode ? 'grey.300' : 'grey.400'
  const textColor = inEditMode ? 'grey.400' : 'black'

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
      <Box sx={{ mt: 1 }}>
        <QuestionItemMenu
          question={question}
          handleStartPositionChange={handleStartPositionChange}
        />
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
              color: textColor,
            }}
            label={`Priority: ${question.priority}`}
            color="primary"
            variant="outlined"
            size="small"
            icon={<LowPriorityIcon sx={{ color: textColor }} />}
          />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default QuestionItem
