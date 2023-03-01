import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Typography, CircularProgress } from '@mui/material'

import useOpenaiCompletion from '../../hooks/useOpenaiCompletion'
import styles from './styles'

const classes = styles.cardStyles

const LoadingProgress = () => (
  <Box px={3} pt={2}>
    <CircularProgress />
  </Box>
)

const CompletionResult = () => {
  const { completion, isLoading } = useOpenaiCompletion('Say this is a test.')

  if (isLoading) return <LoadingProgress />

  return (
    <Box sx={classes.outerBox}>
      <Typography variant="body1" p={1} whiteSpace="pre-line">
        {completion.trim()}
      </Typography>
    </Box>
  )
}

const OpenaiCompletion = () => {
  const { t } = useTranslation()
  const [showCompletion, setShowCompletion] = useState(false)

  return (
    <Box>
      <Box px={3} pt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowCompletion(true)}
          disabled={showCompletion}
        >
          {t('results:openaiButton')}
        </Button>
      </Box>
      {showCompletion && <CompletionResult />}
    </Box>
  )
}

export default OpenaiCompletion
