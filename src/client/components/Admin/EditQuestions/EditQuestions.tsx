/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import {
  Box,
  SelectChangeEvent,
  TextField,
  Typography,
  Button,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import { ChoiceType, Locales } from '../../../types'
import useSurvey from '../../../hooks/useSurvey'
import { LanguageSelect, QuestionSelect } from '../EditResults/Select'

type Option<A> = A extends readonly (infer T)[] ? T : never

const OptionItem = ({
  language,
  option,
}: {
  language: keyof Locales
  option: Option<ChoiceType>
}) => {
  const { t } = useTranslation()
  const [optionTitle, setOptionTitle] = useState(option.title[language])
  const [optionData, setOptionData] = useState('')

  useEffect(() => {
    if ('data' in option && !('text' in option)) {
      setOptionData(option.data[language]) // Type narrow the multichoice type
    }
  }, [language])

  return (
    <Box m={1} width="50%">
      <Typography display="inline" mb={1} variant="h5">
        {option.title[language]}
      </Typography>
      <Typography display="inline" ml={1}>
        {language}
      </Typography>
      <TextField
        fullWidth
        value={optionTitle}
        onChange={(event) => setOptionTitle(event.target.value)}
      />
      {optionData && (
        <TextField
          multiline
          rows={20}
          fullWidth
          value={optionData}
          onChange={(event) => setOptionData(event.target.value)}
        />
      )}
    </Box>
  )
}

const EditOptions = ({
  language,
  option,
}: {
  language: keyof Locales
  option: Option<ChoiceType>
}) => (
  <Box mb={5} display="flex">
    <OptionItem language={'fi' as keyof Locales} option={option} />
    <OptionItem language={language} option={option} />
  </Box>
)

const EditQuestions = () => {
  const [questionId, setQuestionId] = useState('')
  const handleQuestionChange = (event: SelectChangeEvent) => {
    setQuestionId(event.target.value)
  }

  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as keyof Locales)
  }

  const { survey, isLoading } = useSurvey()

  if (isLoading) return null

  const selectedQuestion = survey.Questions.find(
    ({ id }) => id === (questionId as unknown as number)
  )
  const options = selectedQuestion?.optionData.options || []

  return (
    <Box my={5} mx={10}>
      <Box mb={3} width="90vw" display="flex">
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
      <Box width="100%" flexWrap="wrap">
        {options.map((option) => (
          <EditOptions
            key={option.id}
            language={selectedLanguage}
            option={option}
          />
        ))}
      </Box>
    </Box>
  )
}

export default EditQuestions
