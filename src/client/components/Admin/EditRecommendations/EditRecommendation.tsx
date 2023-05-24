import React, { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import { useEditRecommendationMutation } from '../../../hooks/useEditRecommendationMutation'

import { ContentTextField, TitleTextField } from '../TextField'

import { Locales, Recommendation } from '../../../types'
import { RecommendationUpdates } from '../../../../server/types'

const RecommendationItem = ({
  language,
  recommendation,
}: {
  language: keyof Locales
  recommendation: Recommendation
}) => {
  const { t } = useTranslation()
  const mutation = useEditRecommendationMutation(recommendation.id)
  const [recommendationTitle, setRecommendationTitle] = useState(
    recommendation.title[language]
  )
  const [recommendationText, setRecommendationText] = useState(
    recommendation.text[language]
  )

  useEffect(() => {
    setRecommendationTitle(recommendation.title[language])
    setRecommendationText(recommendation.text[language])
  }, [language, recommendation])

  const handleSave = async () => {
    const updatedRecommendation: RecommendationUpdates = {
      title: {
        ...recommendation.title,
        [language]: recommendationTitle,
      },
      text: {
        ...recommendation.text,
        [language]: recommendationText,
      },
    }

    try {
      await mutation.mutateAsync(updatedRecommendation)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <Box sx={{ my: 2, mx: 4, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h6">{t('admin:recommendation')}</Typography>
        <Typography ml={1}>{language}</Typography>
      </Box>
      <TitleTextField
        value={recommendationTitle}
        onChange={(event) => setRecommendationTitle(event.target.value)}
      />

      <ContentTextField
        value={recommendationText}
        onChange={(event) => setRecommendationText(event.target.value)}
      />
      <Button onClick={handleSave}>{t('admin:save')}</Button>
    </Box>
  )
}

const EditRecommendation = ({
  language,
  recommendation,
}: {
  language: keyof Locales
  recommendation: Recommendation
}) => (
  <Box mb={5} display="flex">
    <RecommendationItem
      language={'fi' as keyof Locales}
      recommendation={recommendation}
    />
    <RecommendationItem language={language} recommendation={recommendation} />
  </Box>
)

export default EditRecommendation
