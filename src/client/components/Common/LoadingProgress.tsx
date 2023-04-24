import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, CircularProgress, Typography } from '@mui/material'

const LoadingProgress = () => {
  const { t } = useTranslation()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
      <CircularProgress />
      <Typography sx={{ ml: 4 }}>{t('openai:spinnerMessage')}</Typography>
    </Box>
  )
}

export default LoadingProgress
