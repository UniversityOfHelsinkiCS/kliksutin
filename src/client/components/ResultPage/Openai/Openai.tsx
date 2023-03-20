import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'
import { UseFormWatch, FieldValues } from 'react-hook-form'

import styles from '../../../styles'
import InfoBox from './InfoBox'
import CourseCompletion from './CourseCompletion'
import DimensionCompletion from './DimensionCompletion'

const { cardStyles, resultStyles } = styles

const Openai = ({ watch }: { watch: UseFormWatch<FieldValues> }) => {
  const { t } = useTranslation()

  return (
    <Box sx={resultStyles.resultWrapper}>
      <Box sx={{ p: 2 }}>
        <Container sx={{ mt: 2 }}>
          <Typography variant="h5" sx={cardStyles.heading} component="div">
            {t('openai:title')}
          </Typography>
        </Container>
        <InfoBox />
        <Box>
          <CourseCompletion />
          <DimensionCompletion watch={watch} />
        </Box>
      </Box>
    </Box>
  )
}

export default Openai
