/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import useQuestions from '../../../hooks/useQuestions'

import RenderQuestions from './RenderQuestions'
import EditSurveyInfo from './EditSurvey'
import { LanguageSelect } from '../Select'

const RenderEditSurvey = () => {
  const { t, i18n } = useTranslation()
  const [searchParams] = useSearchParams()
  const { survey, isLoading: surveyIsLoading } = useSurvey()
  const { questions, isLoading: questionsIsLoading } = useQuestions(survey?.id)

  if (!survey || surveyIsLoading || !questions || questionsIsLoading)
    return null

  const selectedLanguage = searchParams.get('transLang') as keyof Locales

  const { language } = i18n

  const sortedQuestions = questions.sort((a, b) => a.priority - b.priority)

  return (
    <Box width="100%" flexWrap="wrap">
      <Box sx={{ mx: 4, mt: 8 }}>
        <LanguageSelect />
      </Box>
      <Box sx={{ mx: 2, my: 4 }}>
        <Typography sx={{ my: 4, pl: 1 }} variant="h4">
          {t('admin:questionViewQuestionEdit')}
        </Typography>
        <EditSurveyInfo language={selectedLanguage} survey={survey} />
      </Box>
      <Box sx={{ mr: 4 }}>
        {sortedQuestions.map((question) => (
          <div key={question.id}>
            {question.parentId === null && (
              <RenderQuestions
                question={question}
                questions={sortedQuestions}
                language={language as keyof Locales}
              />
            )}
          </div>
        ))}
      </Box>
    </Box>
  )
}

export default RenderEditSurvey
