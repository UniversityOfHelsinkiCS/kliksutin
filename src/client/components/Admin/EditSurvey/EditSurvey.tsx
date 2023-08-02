/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import { Locales, Question } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import useQuestions from '../../../hooks/useQuestions'

import RenderQuestions from './RenderQuestions'
import EditModeControls from './EditModeControls'

const EditSurvey = () => {
  const { i18n } = useTranslation()
  const { survey, isLoading: surveyIsLoading } = useSurvey()
  const { questions, isLoading: questionsIsLoading } = useQuestions(survey?.id)
  const [inEditMode, setInEditMode] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<
    Question | undefined
  >()

  if (!survey || surveyIsLoading || !questions || questionsIsLoading)
    return null

  const { language } = i18n

  const sortedQuestions = questions.sort((a, b) => a.priority - b.priority)

  const onCancel = () => {
    setInEditMode(false)
    setSelectedQuestion(undefined)
  }

  return (
    <Box sx={{ mr: 4 }}>
      {sortedQuestions.map((question) => (
        <div key={question.id}>
          {question.parentId === null && (
            <RenderQuestions
              question={question}
              questions={sortedQuestions}
              language={language as keyof Locales}
              inEditMode={inEditMode}
              setInEditMode={setInEditMode}
              selectedQuestion={selectedQuestion}
              setSelectedQuestion={setSelectedQuestion}
            />
          )}
        </div>
      ))}

      <EditModeControls
        questionName={selectedQuestion?.title[language as keyof Locales]}
        isOpen={inEditMode}
        onClose={onCancel}
      />
    </Box>
  )
}

export default EditSurvey
