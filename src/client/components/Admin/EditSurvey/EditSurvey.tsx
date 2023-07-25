import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'

import RenderQuestions from './RenderQuestions'

const EditSurvey = () => {
  const { i18n } = useTranslation()
  const { survey, isLoading } = useSurvey()

  if (!survey || isLoading) return null

  const { language } = i18n
  const questions = survey.Questions.sort((a, b) => a.priority - b.priority)

  return (
    <Box>
      {questions.map((question) => (
        <div key={question.id}>
          {question.parentId === null && (
            <RenderQuestions
              question={question}
              questions={questions}
              language={language as keyof Locales}
            />
          )}
        </div>
      ))}
    </Box>
  )
}

export default EditSurvey
