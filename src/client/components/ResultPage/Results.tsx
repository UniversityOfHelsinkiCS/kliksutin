import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Stack, Typography } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../hooks/useSurvey'
import useResults from '../../hooks/useResults'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import ResultElement from './ResultElement'
import SendSummaryEmail from './SendSummaryEmail'
import ProceedToContact from './ProceedToContact'
import Openai from '../Openai/Openai'
import ResetForm from '../Common/ResetForm'
import CompactDimensionChips from '../Chip/CompactDimensionChips'

import { useResultData } from '../../contexts/ResultDataContext'

import { getSelectedDimensionsFromResultData } from '../../util/dimensions'
import styles from '../../styles'
import { InputProps } from '../../types'

const { cardStyles, resultStyles, formStyles } = styles

const Results = ({ setShowResults }: InputProps & { setShowResults: any }) => {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)
  const refCallback = useResultRefCallback()

  const { resultData } = useResultData()
  const { language } = i18n

  if (!survey || !resultsFetched || !resultData) return null

  const dimensionSelections = getSelectedDimensionsFromResultData(
    survey,
    resultData
  )

  const objectToArray = (aChoiceId: number): string[] =>
    Object.keys(resultData[aChoiceId]).filter(
      (index) => resultData[aChoiceId][index]
    )

  const resultObjectsToArrays = (): string[][] => {
    const entries = Object.entries(resultData)
    return entries.map(([key, value]) => {
      if (typeof value === 'object') {
        const selections = objectToArray(Number(key))

        // Hacky way: if the courseattendance is considered to be hybrid
        // eg. the courseAttendancePresent and courseAttendanceRemote are both selected
        if (
          selections.includes('courseAttendancePresent') &&
          selections.length === 2
        ) {
          return ['courseAttendanceHybrid']
        }
        return objectToArray(Number(key))
      }
      return [value]
    })
  }

  const resultArrays = resultObjectsToArrays()

  // Dimensions are the first of the selections
  const dimensions = resultArrays[0]

  // Rest of the selections and empty values filtered
  const resultArray = resultArrays.slice(1).filter(([x]) => x !== '')

  const onNavigateBack = () => {
    sessionStorage.setItem('curre-session-location', 'form')
    setShowResults(false)

    document
      ?.getElementById('curre-main-section')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box>
      <Box sx={cardStyles.outerBox}>
        <Box sx={resultStyles.resultWrapper}>
          <Container sx={{ mt: 4 }}>
            <Typography
              data-cy="result-section-title"
              variant="h5"
              sx={resultStyles.heading}
              component="div"
            >
              {t('results:title')}
            </Typography>
            <CompactDimensionChips
              dimensions={dimensions}
              dimensionSelections={dimensionSelections}
            />
          </Container>

          <Box ref={refCallback}>
            {resultArray.map((resultLabels) =>
              resultLabels.map((resultLabel) => (
                <ResultElement
                  key={JSON.stringify(resultLabel)}
                  language={language as keyof Locales}
                  resultData={results?.find(
                    (result: { optionLabel: string }) =>
                      result.optionLabel === resultLabel
                  )}
                  dimensionSelections={dimensionSelections}
                />
              ))
            )}
          </Box>

          <SendSummaryEmail />

          <Box sx={formStyles.stackBoxWrapper}>
            <Stack sx={formStyles.stack} direction="row">
              <Button
                data-cy="back-to-selections"
                sx={{ m: 1 }}
                onClick={onNavigateBack}
              >
                {'<'} {t('results:backToMessage')}
              </Button>

              <ResetForm />
            </Stack>
          </Box>
        </Box>
      </Box>

      {location.pathname !== '/public' && (
        <Box>
          <Openai />
          <ProceedToContact />
        </Box>
      )}
    </Box>
  )
}

export default Results
