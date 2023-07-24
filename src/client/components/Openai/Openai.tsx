import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'

import styles from '../../styles'
import InfoBox from './InfoBox'
import CourseCompletion from './CourseCompletion'
import DimensionCompletion from './DimensionCompletion'

const { cardStyles, resultStyles } = styles

const Openai = () => {
  const { t } = useTranslation()

  return (
    <Box sx={cardStyles.outerBox}>
      <Box sx={resultStyles.resultWrapper}>
        <Container sx={{ mt: 4 }}>
          <Typography variant="h5" sx={resultStyles.heading} component="div">
            {t('openai:title')}
          </Typography>
          <InfoBox />
        </Container>
        <Box>
          <CourseCompletion />
          <DimensionCompletion />
        </Box>
      </Box>
    </Box>
  )
}

export default Openai
