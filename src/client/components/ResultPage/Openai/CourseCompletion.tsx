import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Typography, TextField } from '@mui/material'
import { enqueueSnackbar } from 'notistack'

import useOpenaiCompletion from '../../../hooks/useOpenaiCompletion'
import LoadingProgress from './LoadingProgress'
import styles from '../../../styles'

const { cardStyles } = styles

const CompletionResult = ({
  courseName,
  setShowCompletion,
}: {
  courseName: string
  setShowCompletion: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t } = useTranslation()
  const prompt = t('openai:courseCompletionPrompt', { courseName })

  const { completion, isLoading } = useOpenaiCompletion(prompt, 'course')

  if (isLoading) return <LoadingProgress />

  if (!completion) {
    enqueueSnackbar(t('openai:apiErrorMessage'), { variant: 'error' })
    setShowCompletion(false)

    return null
  }

  return (
    <Box sx={cardStyles.answerBox}>
      <Typography variant="body1" sx={cardStyles.content} whiteSpace="pre-line">
        {completion.trim()}
      </Typography>
    </Box>
  )
}

const CourseCompletion = () => {
  const { t } = useTranslation()
  const [courseName, setCourseName] = useState('')
  const [showCompletion, setShowCompletion] = useState(false)

  return (
    <Box sx={cardStyles.nestedSubSection}>
      <Typography variant="body2">{t('openai:giveCourseInfoText')}</Typography>
      <Box sx={cardStyles.content}>
        <TextField
          sx={cardStyles.inputField}
          required
          size="small"
          value={courseName}
          onChange={({ target }) => setCourseName(target.value)}
          disabled={showCompletion}
        />
        <Box sx={{ my: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowCompletion(true)}
            disabled={showCompletion || courseName.length < 5}
          >
            {t('openai:send')}
          </Button>
        </Box>
        {showCompletion && (
          <CompletionResult
            courseName={courseName}
            setShowCompletion={setShowCompletion}
          />
        )}
      </Box>
    </Box>
  )
}

export default CourseCompletion
