/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { Box, Button, SelectChangeEvent, Typography } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import useResults from '../../../hooks/useResults'

import { DimensionSelect, QuestionSelect, LanguageSelect } from '../Select'
import EditResult from './EditResult'
import NewResultForm from './NewResultForm'

import { sortDimensions, allSelection } from '../config'
import { getDimensions } from '../../../util/dimensions'

const EditResults = () => {
  const [searchParams] = useSearchParams()
  const { t, i18n } = useTranslation()
  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)

  const [openForm, setOpenForm] = useState(false)
  const [dimensionId, setDimensionId] = useState('allDimensions')
  const handleDimensionChange = (event: SelectChangeEvent) => {
    setDimensionId(event.target.value)
  }

  const [questionId, setQuestionId] = useState('')
  const handleQuestionChange = (event: SelectChangeEvent) => {
    setQuestionId(event.target.value)
  }

  const language = i18n.language as keyof Locales
  const selectedLanguage = searchParams.get('language') as keyof Locales

  if (!resultsFetched || !results || !survey) return null

  const dimensions = getDimensions(survey)

  const selectedQuestion = survey.Questions.find(
    ({ id }) => id === (questionId as unknown as number)
  )
  const options = selectedQuestion?.optionData.options || []
  const optionIds = options.map(({ id }) => id)

  const filteredResults = results.filter(({ optionLabel }) =>
    optionIds.includes(optionLabel)
  )

  const sortedDimensions = sortDimensions(dimensions, language)
  const dimensionSelections = [allSelection].concat(sortedDimensions)

  const nonSelectedOptions = options.filter((option) => {
    const filteredOptionLabels = filteredResults.map((res) => res.optionLabel)
    return !filteredOptionLabels.includes(option.label)
  })

  return (
    <Box sx={{ mx: 2, mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          my: 4,
          justifyContent: 'flex-start',
        }}
      >
        <DimensionSelect
          dimensionId={dimensionId}
          dimensions={dimensionSelections}
          handleChange={handleDimensionChange}
        />
        <QuestionSelect
          questionId={questionId}
          questions={survey.Questions}
          handleChange={handleQuestionChange}
        />

        <LanguageSelect />

        {!!nonSelectedOptions.length && (
          <Button
            sx={{
              position: 'absolute',
              right: 0,
              mr: 4,
              alignSelf: 'center',
            }}
            variant="contained"
            onClick={() => setOpenForm(!openForm)}
          >
            {t('admin:resultAddNew')}
          </Button>
        )}
      </Box>
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
      ) : selectedQuestion ? (
        <Typography sx={{ my: 4, pl: 1 }} variant="h4">
          {t('admin:resultViewResultsNotFound')}
        </Typography>
      ) : (
        <Typography sx={{ my: 4, pl: 1 }} variant="h4">
          {t('admin:resultViewInfo')}
        </Typography>
      )}

      <NewResultForm
        open={openForm}
        setOpen={setOpenForm}
        dimensions={dimensionSelections}
        options={nonSelectedOptions}
      />
    </Box>
  )
}

export default EditResults
