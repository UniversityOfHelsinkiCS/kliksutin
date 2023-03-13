import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Alert } from '@mui/material'

import Markdown from '../../Common/Markdown'

const InfoBox = () => {
  const { t } = useTranslation()

  return (
    <Box px={3}>
      <Alert severity="info" variant="outlined">
        <Markdown>{t('openai:infoBoxText')}</Markdown>
      </Alert>
    </Box>
  )
}

export default InfoBox
