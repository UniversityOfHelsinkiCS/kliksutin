import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResults from '../../hooks/useResults'
import styles from '../../styles'
import SendSummaryEmail from './SendSummaryEmail'
import Markdown from '../Common/Markdown'
import colors from '../../util/colors'
import {
  DimensionSelectionData,
  InputProps,
  Locales,
  Result,
} from '../../types'
import { getSelectedDimensions } from '../../util/dimensions'
import DimensionChip from '../Chip/DimensionChip'
import useFindQuestion from '../../hooks/useFindQuestion'

const { cardStyles, resultStyles, recommendationStyles } = styles

const CompactDimensionChips = ({
  dimensions,
  dimensionSelections,
}: {
  dimensions: string[]
  dimensionSelections: DimensionSelectionData[]
}) => (
  <Box sx={recommendationStyles.recommendationChipsContainer}>
    {dimensions.map((aDimension) => {
      const chipData = dimensionSelections.find(
        (selectedDimension) => selectedDimension.id === aDimension
      )
      return (
        <DimensionChip
          key={chipData.id}
          choice={chipData}
          color={colors[chipData.id]}
          compact
        />
      )
    })}
  </Box>
)

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

const Results = ({ formResultData, watch }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { survey } = useSurvey()
  const navigate = useNavigate()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)
  const { language } = i18n

  const dimensionQuestionId = useFindQuestion('dimensions')
  const courseAttendanceId = useFindQuestion('Osallistuminen')
  const courseCompletionMethodId = useFindQuestion('Suoritusmuoto')

  if (!resultsFetched || !formResultData) return null

  const dimensionSelections = getSelectedDimensions(survey, watch)

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

  return (
    <Box sx={cardStyles.outerBox}>
      <Box sx={resultStyles.resultWrapper}>
        <Box id="result-component">
          <Container sx={{ mt: 2 }}>
            <Typography variant="h5" sx={resultStyles.heading} component="div">
              {t('results:title')}
            </Typography>
            <CompactDimensionChips
              dimensions={multipleChoiceObjectToArray(dimensionQuestionId)}
              dimensionSelections={dimensionSelections}
            />
          </Container>

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

        <Button sx={{ m: 4 }} onClick={() => navigate('/')}>
          {'<'} {t('results:backToMessage')}
        </Button>
      </Box>
    </Box>
  )
}

export default Results
