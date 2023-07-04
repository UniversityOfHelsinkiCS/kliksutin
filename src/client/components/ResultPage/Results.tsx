import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Stack, Typography } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResults from '../../hooks/useResults'

import SendSummaryEmail from './SendSummaryEmail'
import ProceedToContact from './ProceedToContact'
import Openai from '../Openai/Openai'
import Markdown from '../Common/Markdown'
import ResetForm from '../Common/ResetForm'
import CompactDimensionChips from '../Chip/CompactDimensionChips'

import { getSelectedDimensions } from '../../util/dimensions'

import styles from '../../styles'
import {
  DimensionSelectionData,
  InputProps,
  Locales,
  Result,
} from '../../types'

const { cardStyles, resultStyles, formStyles } = styles

const ResultElement = ({
  language,
  resultData,
  dimensionSelections,
}: {
  language: keyof Locales
  resultData: Result
  dimensionSelections: DimensionSelectionData[]
}) => {
  if (!resultData) return null

  const allDimensions: DimensionSelectionData = {
    id: 'allDimensions',
    label: 'allDimensions',
    color: '#000000',
    title: {
      fi: 'Kaikki',
      sv: 'All',
      en: 'All',
    },
    text: {
      fi: 'Kaikki',
      sv: 'All',
      en: 'All',
    },
  }

  const dimensions = [allDimensions, ...dimensionSelections]

  return (
    <Container
      style={{
        margin: '2rem 0 2rem 0',
        borderLeft: 'solid',
        borderColor: '#9ca3af',
        borderWidth: '1px',
      }}
    >
      <Box style={{ margin: '2rem 0 2rem 1rem' }}>
        <Markdown>{resultData.isSelected[language]}</Markdown>
      </Box>
      <Box
        style={{
          margin: '2rem 0 2rem 0',
        }}
      >
        {dimensions.map((dimension) => {
          const color = dimension.color ?? null
          return (
            <Box
              data-cy={`result-wrapper-${resultData.optionLabel}-${dimension.id}`}
              key={`${JSON.stringify(resultData)}.${dimension.id}`}
              style={{
                margin: '1rem',
                padding: '0 2rem 0 2rem ',
                borderLeft: 'solid',
                borderColor: color,
                borderWidth: '6px',
              }}
            >
              <Markdown>{resultData.data[dimension.id][language]}</Markdown>
            </Box>
          )
        })}
      </Box>
    </Container>
  )
}

const Results = ({
  formResultData,
  watch,
  setShowResults,
}: InputProps & { setShowResults: any }) => {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const { survey } = useSurvey()
  const resultRef = useRef(null)
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)
  const { language } = i18n

  const dimensionSelections = getSelectedDimensions(survey, watch)

  if (!resultsFetched || !formResultData) return null

  const objectToArray = (aChoiceId: number): string[] =>
    Object.keys(formResultData[aChoiceId]).filter(
      (index) => formResultData[aChoiceId][index]
    )

  const multipleChoiceObjectsToArrays = (): string[][] => {
    const entries = Object.entries(formResultData)
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

  const dimensions = multipleChoiceObjectsToArrays()[0]

  const resultArray = multipleChoiceObjectsToArrays()
    .slice(1)
    .filter(([x]) => x !== '')

  const onNavigateBack = () => {
    sessionStorage.setItem('curre-session-location', 'form')
    setShowResults(false)

    document
      .getElementById('curre-main-section')
      .scrollIntoView({ behavior: 'smooth' })
  }

  sessionStorage.setItem(
    'curre-session-resultHTML',
    resultRef.current?.innerHTML
  )

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

          <Box ref={resultRef}>
            {resultArray.map((resultLabels) =>
              resultLabels.map((resultLabel) => (
                <ResultElement
                  key={JSON.stringify(resultLabel)}
                  language={language as keyof Locales}
                  resultData={results.find(
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
          <Openai watch={watch} />
          <ProceedToContact />
        </Box>
      )}
    </Box>
  )
}

export default Results
