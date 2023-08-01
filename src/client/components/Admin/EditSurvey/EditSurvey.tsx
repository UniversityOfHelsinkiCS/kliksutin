/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import { Locales, Question } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'

import RenderQuestions from './RenderQuestions'

const EditSurvey = () => {
  const { i18n } = useTranslation()
  const { survey, isLoading } = useSurvey()
  const [inEditMode, setInEditMode] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<
    Question | undefined
  >()

  if (!survey || isLoading) return null

  const { language } = i18n
  const questions = survey.Questions.sort((a, b) => a.priority - b.priority)

  return (
    <Box sx={{ mr: 4 }}>
      {questions.map((question) => (
        <div key={question.id}>
          {question.parentId === null && (
            <RenderQuestions
              question={question}
              questions={questions}
              language={language as keyof Locales}
              inEditMode={inEditMode}
              setInEditMode={setInEditMode}
              selectedQuestion={selectedQuestion}
              setSelectedQuestion={setSelectedQuestion}
            />
          )}
        </div>
      ))}
    </Box>
  )
}

export default EditSurvey
