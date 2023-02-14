import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'
import getResultData from '../../../server/db/seeders/data/devResultData'
import styles from './styles'
import { FormValues } from '../../types'
/* eslint-disable @typescript-eslint/no-unused-vars */

const classes = styles.cardStyles

const ResultElement = ({ result, dimensions }: any) => {
  if (!result) return null

  return (
    <Container key={result} sx={classes.resultContainer}>
      <Typography variant="h6" sx={classes.heading} component="div">
        {result.isSelected.fi}
      </Typography>
      <Box sx={classes.content}>
        {dimensions.map((dimension) => (
          <Typography variant="body2">{result[dimension].fi}</Typography>
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

      {Object.values(resultObject)
        .slice(1)
        .map((result: string | Array<string>) => {
          if (typeof result === 'string') {
            return (
              <ResultElement
                result={resultData[result]}
                dimensions={resultObject[1]}
              />
            )
          }
          if (Array.isArray(result)) {
            return (
              <>
                {result.map((res) => (
                  <ResultElement
                    result={resultData[res]}
                    dimensions={resultObject[1]}
                  />
                ))}
              </>
            )
          }
          return null
        })}
    </Box>
  )
}

export default Results
