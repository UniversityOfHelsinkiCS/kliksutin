import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Stack, Typography } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResults from '../../hooks/useResults'
import useFindQuestion from '../../hooks/useFindQuestion'
import styles from '../../styles'
import SendSummaryEmail from './SendSummaryEmail'
import Markdown from '../Common/Markdown'
import ResetForm from '../Common/ResetForm'
import CompactDimensionChips from '../Common/CompactDimensionChips'
import colors from '../../util/colors'
import { getSelectedDimensions } from '../../util/dimensions'
import { InputProps, Locales, Result } from '../../types'

const { cardStyles, resultStyles, formStyles } = styles

const ResultElement = ({
  language,
  resultData,
  dimensions,
}: {
  language: keyof Locales
  resultData: Result
  dimensions: string[]
}) => {
  if (!resultData || !dimensions) return null

  return (
    <Container sx={resultStyles.resultElementWrapper}>
      <Markdown>{resultData.isSelected[language]}</Markdown>
      <Box sx={resultStyles.resultElementContent}>
        {dimensions.map((dimension: string) => {
          const color = colors[dimension] || null
          return (
            <Box
              data-cy={`result-wrapper-${resultData.optionLabel}-${dimension}`}
              key={`${JSON.stringify(resultData)}.${dimension}`}
              sx={{ m: 2, px: 2, borderLeft: 6, borderColor: color }}
            >
              <Markdown>{resultData.data[dimension][language]}</Markdown>
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
  const { t, i18n } = useTranslation()
  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)
  const { language } = i18n

  const dimensionQuestionId = useFindQuestion('dimensions')
  const courseAttendanceId = useFindQuestion('Osallistuminen')
  const courseCompletionMethodId = useFindQuestion('Suoritusmuoto')

  const dimensionSelections = getSelectedDimensions(survey, watch)

  if (!resultsFetched || !formResultData) return null

  const multipleChoiceObjectToArray = (aChoiceId: number): string[] =>
    Object.keys(formResultData[aChoiceId]).filter(
      (index) => formResultData[aChoiceId][index]
    )

  const attendanceToArray = () => {
    const attendances = multipleChoiceObjectToArray(courseAttendanceId)
    return attendances.length === 2 ? ['courseAttendanceHybrid'] : attendances
  }

  const modifiedResultObject = {
    ...formResultData,
    [dimensionQuestionId]: ['allDimensions'].concat(
      multipleChoiceObjectToArray(dimensionQuestionId)
    ),
    [courseAttendanceId]: attendanceToArray(),
    [courseCompletionMethodId]: multipleChoiceObjectToArray(
      courseCompletionMethodId
    ),
  }

  const resultArray: string[][] = Object.values(modifiedResultObject)
    .slice(1)
    .filter((x) => x !== '')
    .map((result: string | Array<string>) =>
      typeof result === 'string' ? [result] : result
    )

  const onNavigateBack = () => {
    sessionStorage.setItem('curre-session-location', 'form')
    setShowResults(false)

    document
      .getElementById('curre-main-section')
      .scrollIntoView({ behavior: 'smooth' })
  }

  return (
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
            dimensions={multipleChoiceObjectToArray(dimensionQuestionId)}
            dimensionSelections={dimensionSelections}
          />
        </Container>

        <Box id="result-component">
          {resultArray.map((resultLabels) =>
            resultLabels.map((resultLabel) => (
              <ResultElement
                key={JSON.stringify(resultLabel)}
                language={language as keyof Locales}
                resultData={results.find(
                  (result: { optionLabel: string }) =>
                    result.optionLabel === resultLabel
                )}
                dimensions={
                  modifiedResultObject[dimensionQuestionId] as string[]
                }
              />
            ))
          )}
        </Box>

        <SendSummaryEmail />

        <Box sx={formStyles.stackBoxWrapper}>
          <Stack sx={formStyles.stack} direction="row">
            <Button
              data-cy="back-to-selections"
              sx={{ m: 4 }}
              onClick={onNavigateBack}
            >
              {'<'} {t('results:backToMessage')}
            </Button>

            <ResetForm />
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Results
