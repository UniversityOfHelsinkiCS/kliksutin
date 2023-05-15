import React, { useState, useEffect } from 'react'
import {
  Box,
  SelectChangeEvent,
  TextField,
  Typography,
  Button,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import { ChoiceType, Locales, Question } from '../../../types'
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

  const handleSave = async () => console.log('saved')

  return (
    <Box sx={{ m: 2, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h5">
          {t('admin:option')} {option.title[language]}
        </Typography>
        <Typography ml={1}>{language}</Typography>
      </Box>
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
      <Button onClick={handleSave}>{t('admin:save')}</Button>
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

const QuestionItem = ({
  language,
  question,
}: {
  language: keyof Locales
  question: Question
}) => {
  const { t } = useTranslation()
  const [questionTitle, setQuestionTitle] = useState(question.title[language])
  const [questionText, setQuestionText] = useState(question.text[language])

  const handleSave = async () => console.log('saved')

  return (
    <Box sx={{ m: 2, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h5">
          {t('admin:question')} {question.title[language]}
        </Typography>
        <Typography ml={1}>{language}</Typography>
      </Box>
      <TextField
        fullWidth
        value={questionTitle}
        onChange={(event) => setQuestionTitle(event.target.value)}
      />

      <TextField
        multiline
        rows={20}
        fullWidth
        value={questionText}
        onChange={(event) => setQuestionText(event.target.value)}
      />
      <Button onClick={handleSave}>{t('admin:save')}</Button>
    </Box>
  )
}

const EditQuestion = ({
  language,
  question,
}: {
  language: keyof Locales
  question: Question
}) => (
  <Box mb={5} display="flex">
    <QuestionItem language={'fi' as keyof Locales} question={question} />
    <QuestionItem language={language} question={question} />
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
  const { t } = useTranslation()

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
      {selectedQuestion && (
        <Box width="100%" flexWrap="wrap">
          <Box sx={{ my: 8 }}>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:questionViewInfo')}
            </Typography>
            <EditQuestion
              language={selectedLanguage}
              question={selectedQuestion}
            />
          </Box>
          <Box sx={{ my: 8 }}>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:questionOptionViewInfo')}
            </Typography>
            {options.map((option) => (
              <EditOptions
                key={option.id}
                language={selectedLanguage}
                option={option}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default EditQuestions
