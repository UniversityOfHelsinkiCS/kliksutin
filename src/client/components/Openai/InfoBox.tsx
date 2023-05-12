import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import Markdown from '../Common/Markdown'

import styles from '../../styles'

const { resultStyles } = styles

const InfoBox = () => {
  const { t } = useTranslation()

  return (
    <Box sx={resultStyles.infoWrapper}>
      <Markdown>{t('openai:infoBoxText')}</Markdown>
    </Box>
  )
}

export default InfoBox
