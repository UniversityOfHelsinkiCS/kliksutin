import React, { useState } from 'react'
import { Box, SelectChangeEvent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import useSurvey from '../../../hooks/useSurvey'
import useQuestions from '../../../hooks/useQuestions'

import { LanguageSelect, QuestionSelect } from '../Select'
import EditOptions from './EditOptions'
import EditQuestion from './EditQuestion'

import { Locales } from '../../../types'

const EditQuestions = () => {
  const { t } = useTranslation()
  const { survey } = useSurvey()
  const { questions, isSuccess } = useQuestions(survey?.id)

  const [questionId, setQuestionId] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')

  const handleQuestionChange = (event: SelectChangeEvent) => {
    setQuestionId(event.target.value)
  }

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as keyof Locales)
  }

  if (!isSuccess) return null

  const selectedQuestion = questions.find(
    ({ id }) => id === (questionId as unknown as number)
  )

  const options = selectedQuestion?.optionData.options || []

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
        <QuestionSelect
          questionId={questionId}
          questions={questions}
          handleChange={handleQuestionChange}
        />
        <LanguageSelect
          selectedLanguage={selectedLanguage}
          handleChange={handleLanguageChange}
        />
      </Box>
      <Box width="100%" flexWrap="wrap">
        {selectedQuestion ? (
          <Box sx={{ my: 4 }}>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:questionViewQuestionEdit')}
            </Typography>
            <EditQuestion
              language={selectedLanguage}
              question={selectedQuestion}
            />
          </Box>
        ) : (
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:questionViewInfo')}
          </Typography>
        )}
        {options.length > 0 && (
          <Box sx={{ my: 8 }}>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:questionOptionViewInfo')}
            </Typography>

            {options.map((option, index) => (
              <EditOptions
                key={option.id}
                option={option}
                optionNumber={index + 1}
                question={selectedQuestion}
                language={selectedLanguage}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default EditQuestions
