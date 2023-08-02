/* eslint-disable no-nested-ternary */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, useSearchParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import useResults from '../../../hooks/useResults'

import EditResult from './EditResult'

const EditResults = () => {
  const { t } = useTranslation()
  const { questionId, dimensionId } = useParams()
  const [searchParams] = useSearchParams()

  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)

  const selectedLanguage = searchParams.get('transLang') as keyof Locales

  if (!resultsFetched || !results || !survey) return null

  const selectedQuestion = survey.Questions.find(
    (question) => question.id === Number(questionId)
  )

  const options = selectedQuestion?.optionData.options || []
  const optionIds = options.map(({ id }) => id)

  const filteredResults = results.filter(({ optionLabel }) =>
    optionIds.includes(optionLabel)
  )

  if (!dimensionId) return null

  return (
    <Box>
      {filteredResults.length > 0 ? (
        <Box sx={{ my: 4 }}>
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
      ) : (
        <Typography sx={{ my: 4, pl: 1 }} variant="h4">
          {t('admin:resultViewResultsNotFound')}
        </Typography>
      )}
    </Box>
  )
}

export default EditResults
