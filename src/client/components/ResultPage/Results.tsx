import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import getResultData from '../../../server/db/seeders/data/devResultData'
import styles from './styles'
import { FormValues } from '../../types'

const classes = styles.cardStyles

const ResultElement = ({ result, dimensions }: any) => {
  if (!result) return null

  const language = localStorage.getItem('language') || 'en'

  return (
    <Container sx={classes.resultContainer}>
      <Typography variant="h6" sx={classes.heading} component="div">
        {result.isSelected[language]}
      </Typography>
      <Box sx={classes.content}>
        {dimensions.map((dimension: string) => (
          <Typography
            key={`${JSON.stringify(result)}.${dimension}`}
            variant="body2"
          >
            {result[dimension][language]}
          </Typography>
        ))}
      </Box>
    </Container>
  )
}

const Results = ({ formResultData }: { formResultData: FormValues }) => {
  const { t } = useTranslation()

  if (!formResultData) return null

  const dimensionsId = 1
  const completionId = 4

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
      ? ['allDimensions']
      : Object.keys(formResultData[dimensionsId]).filter(
          (dimension) => formResultData[dimensionsId][dimension]
        ),
    4: selectedCompletionMethods,
  }

  const resultValues = Object.values(resultObject)
    .slice(1)
    .filter((x) => x !== '')
    .map((result: string | Array<string>) =>
      typeof result === 'string' ? [result] : result
    )

  return (
    <Box sx={{ m: 2, maxWidth: 1080, border: 1, borderColor: 'grey.300' }}>
      <Container sx={{ mt: 2 }}>
        <Typography variant="h5" sx={classes.heading} component="div">
          {t('results:title')}
        </Typography>
      </Container>

      {resultValues.map((results) =>
        results.map((res) => (
          <ResultElement
            key={JSON.stringify(res)}
            result={resultData[res]}
            dimensions={resultObject[1]}
          />
        ))
      )}

      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack textAlign="center" direction="row" spacing={2}>
          <Button sx={classes.stackButton} variant="outlined">
            {t('results:proceedToExit')}
          </Button>

          <Button sx={classes.stackButton} variant="contained">
            {t('results:proceedToConsultation')}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Results
