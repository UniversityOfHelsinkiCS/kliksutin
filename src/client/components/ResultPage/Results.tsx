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
            {result.data[dimension][language]}
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
  const courseCompletionMethodId = 4

  const resultData = getResultData()

  const allDimensionsSelected: boolean = Object.values(
    formResultData[dimensionsId]
  ).every((dimension) => dimension)

  const selectedCompletionMethods = Object.keys(
    formResultData[courseCompletionMethodId]
  ).filter((method) => formResultData[courseCompletionMethodId][method])

  const mapResultsToObject = {
    ...formResultData,
    1: allDimensionsSelected
      ? ['allDimensions']
      : Object.keys(formResultData[dimensionsId]).filter(
          (dimension) => formResultData[dimensionsId][dimension]
        ),
    4: selectedCompletionMethods,
  }

  const mapResultsToList = Object.values(mapResultsToObject)
    .slice(1)
    .filter((x) => x !== '')
    .map((result: string | Array<string>) =>
      typeof result === 'string' ? [result] : result
    )

  console.log(mapResultsToList)

  return (
    <Box sx={{ m: 2, maxWidth: 1080, border: 1, borderColor: 'grey.300' }}>
      <Container sx={{ mt: 2 }}>
        <Typography variant="h5" sx={classes.heading} component="div">
          {t('results:title')}
        </Typography>
      </Container>

      {mapResultsToList.map((results) =>
        results.map((res) => (
          <ResultElement
            key={JSON.stringify(res)}
            result={resultData.find((r) => r.optionLabel === res)}
            dimensions={mapResultsToObject[dimensionsId]}
          />
        ))
      )}

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginY={4}
      >
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
