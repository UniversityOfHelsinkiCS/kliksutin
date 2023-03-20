import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import Markdown from '../../Common/Markdown'

const InfoBox = () => {
  const { t } = useTranslation()

  return (
    <Box sx={{ m: 4 }}>
      <Markdown>{t('openai:infoBoxText')}</Markdown>
    </Box>
  )
}

export default InfoBox
