import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResults from '../../hooks/useResults'
import styles from '../../styles'
import { FormValues, Locales, Result } from '../../types'
import SendSummaryEmail from './SendSummaryEmail'
import Markdown from '../Common/Markdown'

const { cardStyles, resultStyles } = styles

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
        {dimensions.map((dimension: string) => (
          <Box key={`${JSON.stringify(resultData)}.${dimension}`} sx={{ m: 2 }}>
            <Markdown>{resultData.data[dimension][language]}</Markdown>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

const Results = ({ formResultData }: { formResultData: FormValues }) => {
  const { t, i18n } = useTranslation()
  const { survey } = useSurvey()
  const navigate = useNavigate()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)
  const { language } = i18n

  if (!resultsFetched || !formResultData) return null

  const findQuestion = (param: string) => {
    const foundByType = survey.Questions.find(
      (question) => question.optionData.type === param
    )

    const foundByFinnishTitle = survey.Questions.find(
      (question) => question.title.fi === param
    )

    if (!foundByType && !foundByFinnishTitle)
      throw new Error('Question not found, check search params')

    return foundByType ? foundByType.id : foundByFinnishTitle.id
  }

  const dimensionQuestionId = findQuestion('dimensions')
  const courseAttendanceId = findQuestion('Osallistuminen')
  const courseCompletionMethodId = findQuestion('Suoritusmuoto')

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
