import React, { useState } from 'react'
import { Box, SelectChangeEvent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import useSurvey from '../../../hooks/useSurvey'

import { LanguageSelect, QuestionSelect } from '../EditResults/Select'
import EditOptions from './EditOptions'
import EditQuestion from './EditQuestion'

import { Locales } from '../../../types'

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
    <Box sx={{ mx: 2, mt: 8 }}>
      <Box sx={{ display: 'flex', my: 4, justifyContent: 'space-evenly' }}>
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
            {options.map((option, index) => (
              <EditOptions
                key={option.id}
                language={selectedLanguage}
                option={option}
                optionNumber={index + 1}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default EditQuestions
