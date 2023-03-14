import React, { useState } from 'react'
import { Box, SelectChangeEvent, TextField, Typography } from '@mui/material'

import { Locales, Result, ChoiceType } from '../../../types'
import useSurvey from '../../../hooks/useSurvey'
import useResults from '../../../hooks/useResults'
import { getDimensions } from '../../../util/dimensions'
import { DimensionSelect, QuestionSelect, LanguageSelect } from './Select'

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
}) => {
  const { optionLabel, data } = result

  const dimensionData = data[dimensionId]
  const optionData = options.find(({ id }) => id === optionLabel)

  return (
    <Box mb={5}>
      <Typography mb={1} variant="h5">
        {optionData.label[language]}
      </Typography>
      <TextField
        multiline
        minRows={8}
        fullWidth
        value={dimensionData[language]}
      />
    </Box>
  )
}

const EditResults = () => {
  const [dimensionId, setDimensionId] = useState('allDimensions')
  const handleDimensionChange = (event: SelectChangeEvent) => {
    setDimensionId(event.target.value)
  }

  const [questionId, setQuestionId] = useState('')
  const handleQuestionChange = (event: SelectChangeEvent) => {
    setQuestionId(event.target.value)
  }

  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('fi')
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as keyof Locales)
  }

  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)

  if (!resultsFetched) return null

  const dimensions = getDimensions(survey)
  // const selectedDimension = dimensions.find(({ id }) => id === dimensionId)

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
      <Box mb={3} display="flex">
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
      <Box flexWrap="wrap">
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
