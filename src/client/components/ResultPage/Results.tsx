import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'
import getResultData from '../../../server/db/seeders/data/devResultData'
import styles from './styles'
import { FormValues } from '../../types'
/* eslint-disable @typescript-eslint/no-unused-vars */

const Results = ({ formResultData }: { formResultData: FormValues }) => {
  const { t } = useTranslation()

  if (!formResultData) return null

  const dimensionsId = 1
  const completionId = 4

  const classes = styles.cardStyles

  const resultData = getResultData()

  const allDimensions: boolean = Object.values(
    formResultData[dimensionsId]
  ).every((dimension) => dimension)

  const selectedCompletionMethods = Object.keys(
    formResultData[completionId]
  ).filter((method) => formResultData[completionId][method])

  const resultObject = {
    ...formResultData,
    1: allDimensions
      ? 'all'
      : Object.keys(formResultData[dimensionsId]).filter(
          (dimension) => formResultData[dimensionsId][dimension]
        ),
    4: selectedCompletionMethods,
  }

  console.log('RESULTS:', resultObject)

  return (
    <Box sx={{ m: 2, maxWidth: 1080, border: 1, borderColor: 'grey.300' }}>
      <Container sx={{ mt: 2 }}>
        <Typography variant="h5" sx={classes.heading} component="div">
          {t('results:title')}
        </Typography>
        <Box sx={classes.content}>
          <Typography variant="body2">{t('results:resultsMessage')}</Typography>
        </Box>
      </Container>

      {Object.values(formResultData)
        .slice(1)
        .map((result: any) => (
          <Container sx={classes.resultContainer}>
            <Typography variant="h5" sx={classes.heading} component="div">
              {resultData[result]?.isSelected.fi}
            </Typography>
          </Container>
        ))}
    </Box>
  )
}

export default Results
