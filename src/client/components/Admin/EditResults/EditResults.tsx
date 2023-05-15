import React, { useState, useEffect } from 'react'
import {
  Box,
  SelectChangeEvent,
  TextField,
  Typography,
  Button,
} from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import { Locales, Result, ChoiceType } from '../../../types'
import useSurvey from '../../../hooks/useSurvey'
import useResults from '../../../hooks/useResults'
import useEditResultMutation from '../../../hooks/useEditResultMutation'
import { getDimensions } from '../../../util/dimensions'
import { DimensionSelect, QuestionSelect, LanguageSelect } from './Select'

const ResultItem = ({
  dimensionId,
  language,
  options,
  result,
}: {
  dimensionId: string
  language: keyof Locales
  options: ChoiceType
  result: Result
}) => {
  const { t } = useTranslation()
  const mutation = useEditResultMutation(result.id)

  const { isSelected, optionLabel, data } = result
  const resultData = data[dimensionId]
  const optionData = options.find(({ label }) => label === optionLabel)

  const [selected, setSelected] = useState(isSelected[language])
  const [value, setValue] = useState(resultData[language])

  useEffect(() => {
    setValue(resultData[language])
  }, [language, resultData])

  useEffect(() => {
    setSelected(isSelected[language])
  }, [language, isSelected])

  const handleSave = async () => {
    data[dimensionId][language] = value
    isSelected[language] = selected

    try {
      await mutation.mutateAsync({ data, isSelected })
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <Box sx={{ m: 2, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h5">
          {t('admin:option')} {optionData.title[language]}
        </Typography>
        <Typography display="inline" ml={1}>
          {language}
        </Typography>
      </Box>

      <TextField
        fullWidth
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      />
      <TextField
        multiline
        rows={20}
        fullWidth
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={handleSave}>{t('admin:save')}</Button>
    </Box>
  )
}

const EditResult = ({
  dimensionId,
  language,
  options,
  result,
}: {
  dimensionId: string
  language: keyof Locales
  options: ChoiceType
  result: Result
}) => (
  <Box mb={5} display="flex">
    <ResultItem
      dimensionId={dimensionId}
      language={'fi' as keyof Locales}
      options={options}
      result={result}
    />
    <ResultItem
      dimensionId={dimensionId}
      language={language}
      options={options}
      result={result}
    />
  </Box>
)

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
    <Box my={5} mx={10}>
      <Box mb={3} width="90vw" display="flex">
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
      <Box sx={{ my: 8 }}>
        {selectedQuestion && (
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:resultViewInfo')}
          </Typography>
        )}
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
    </Box>
  )
}

export default EditResults
