import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Typography, TextField } from '@mui/material'

import useOpenaiCompletion from '../../../hooks/useOpenaiCompletion'
import LoadingProgress from './LoadingProgress'
import styles from '../styles'

const classes = styles.cardStyles

const CompletionResult = ({ courseName }: { courseName: string }) => {
  const { t } = useTranslation()
  const prompt = t('openai:courseCompletionPrompt', { courseName })

  const { completion, isLoading } = useOpenaiCompletion(prompt)

  if (isLoading) return <LoadingProgress />

  return (
    <Box sx={classes.outerBox}>
      <Typography variant="body1" p={1} whiteSpace="pre-line">
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
    <Box px={3}>
      <Typography variant="body2">{t('openai:giveCourseInfoText')}</Typography>
      <TextField
        required
        size="small"
        margin="dense"
        value={courseName}
        onChange={({ target }) => setCourseName(target.value)}
        sx={{ width: 400 }}
      />
      <Box mt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowCompletion(true)}
          disabled={showCompletion || courseName.length < 5}
        >
          {t('openai:send')}
        </Button>
      </Box>
      {showCompletion && <CompletionResult courseName={courseName} />}
    </Box>
  )
}

export default CourseCompletion
