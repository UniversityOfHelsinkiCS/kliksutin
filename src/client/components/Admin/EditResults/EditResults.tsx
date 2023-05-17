/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { Box, SelectChangeEvent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import useSurvey from '../../../hooks/useSurvey'
import useResults from '../../../hooks/useResults'

import { DimensionSelect, QuestionSelect, LanguageSelect } from '../Select'
import EditResult from './EditResult'

import { getDimensions } from '../../../util/dimensions'
import { Locales } from '../../../types'

const EditResults = () => {
  const [dimensionId, setDimensionId] = useState('allDimensions')
  const handleDimensionChange = (event: SelectChangeEvent) => {
    setDimensionId(event.target.value)
  }

  const [questionId, setQuestionId] = useState('')
  const handleQuestionChange = (event: SelectChangeEvent) => {
    setQuestionId(event.target.value)
  }

  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as keyof Locales)
  }

  const { survey } = useSurvey()
  const { t } = useTranslation()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)

  if (!resultsFetched) return null

  const dimensions = getDimensions(survey)

  const selectedQuestion = survey.Questions.find(
    ({ id }) => id === (questionId as unknown as number)
  )
  const options = selectedQuestion?.optionData.options || []
  const optionIds = options.map(({ id }) => id)
  const filteredResults = results.filter(({ optionLabel }) =>
    optionIds.includes(optionLabel)
  )

  return (
    <Box sx={{ mx: 2, mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          my: 4,
          justifyContent: 'space-around',
        }}
      >
        <DimensionSelect
          dimensionId={dimensionId}
          dimensions={dimensions}
          handleChange={handleDimensionChange}
        />
        <QuestionSelect
          questionId={questionId}
          questions={survey.Questions}
          handleChange={handleQuestionChange}
        />
        <LanguageSelect
          selectedLanguage={selectedLanguage}
          handleChange={handleLanguageChange}
        />
      </Box>
      {filteredResults.length > 0 ? (
        <Box sx={{ my: 8 }}>
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:resultViewResultEdit')}
          </Typography>
          {filteredResults.map((result) => (
            <EditResult
              key={result.id}
              dimensionId={dimensionId}
              language={selectedLanguage}
              options={options}
              result={result}
            />
          ))}
        </Box>
      ) : selectedQuestion ? (
        <Typography sx={{ my: 4, pl: 1 }} variant="h4">
          {t('admin:resultViewResultsNotFound')}
        </Typography>
      ) : (
        <Typography sx={{ my: 4, pl: 1 }} variant="h4">
          {t('admin:resultViewInfo')}
        </Typography>
      )}
    </Box>
  )
}

export default EditResults
