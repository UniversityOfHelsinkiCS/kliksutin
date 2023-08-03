/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useParams } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import useResults from '../../../hooks/useResults'

import {
  ResultDimensionSelect,
  QuestionSelect,
  LanguageSelect,
} from '../Select'
import NewResultForm from './NewResultForm'

import { sortDimensions, allSelection } from '../config'
import { getDimensions } from '../../../util/dimensions'

const RenderEditResults = () => {
  const { t, i18n } = useTranslation()
  const { questionId } = useParams()
  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)

  const [openForm, setOpenForm] = useState(false)

  const language = i18n.language as keyof Locales

  if (!resultsFetched || !results || !survey) return null

  const dimensions = getDimensions(survey)

  const selectedQuestion = survey.Questions.find(
    (question) => question.id === Number(questionId)
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
        <QuestionSelect />

        <ResultDimensionSelect />

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

      <Outlet />

      <NewResultForm
        open={openForm}
        setOpen={setOpenForm}
        dimensions={dimensionSelections}
        options={nonSelectedOptions}
      />
    </Box>
  )
}

export default RenderEditResults
