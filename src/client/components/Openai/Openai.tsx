import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'

import styles from '../../styles'
import InfoBox from './InfoBox'

const { cardStyles, resultStyles } = styles

const Openai = () => {
  const { t } = useTranslation()

  return (
    <Box sx={cardStyles.outerBox}>
      <Box sx={resultStyles.resultWrapper}>
        <Container sx={{ mt: 4 }}>
          <Typography variant='h5' sx={resultStyles.heading} component='div'>
            {t('openai:title')}
          </Typography>
          <InfoBox />
        </Container>
      </Box>
    </Box>
  )
}

export default Openai
