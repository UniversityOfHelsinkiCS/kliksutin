import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Paper, Container, Typography } from '@mui/material'
import { UseFormWatch, FieldValues } from 'react-hook-form'

import styles from '../styles'
import InfoBox from './InfoBox'
import CourseCompletion from './CourseCompletion'
import DimensionCompletion from './DimensionCompletion'

const classes = styles.cardStyles

const Openai = ({ watch }: { watch: UseFormWatch<FieldValues> }) => {
  const { t } = useTranslation()

  return (
    <Paper sx={classes.outerBox}>
      <Box p={2}>
        <Container sx={{ mt: 2, mb: 2 }}>
          <Typography variant="h5" sx={classes.heading} component="div">
            {t('openai:title')}
          </Typography>
        </Container>
        <InfoBox />
        <Box px={1} pt={4}>
          <CourseCompletion />
          <DimensionCompletion watch={watch} />
        </Box>
      </Box>
    </Paper>
  )
}

export default Openai
