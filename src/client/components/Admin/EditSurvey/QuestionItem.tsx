import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, InputLabel, Typography } from '@mui/material'

import { Locales, Question } from '@backend/types'

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
  const { t } = useTranslation()
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
      <Box>
        <Button
          variant="outlined"
          sx={{ position: 'absolute', top: 4, right: 4 }}
          onClick={handleStartPositionChange}
          disabled={inEditMode}
        >
          {t('admin:rePrioritizeButton')}
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

export default QuestionItem
