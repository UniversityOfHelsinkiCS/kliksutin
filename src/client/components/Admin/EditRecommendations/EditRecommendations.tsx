import React, { useState } from 'react'
import { Box, SelectChangeEvent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import useSurvey from '../../../hooks/useSurvey'

import { LanguageSelect, RecommendationSelect } from '../EditResults/Select'

import { Locales } from '../../../types'
import useRecommendations from '../../../hooks/useRecommendations'
import EditRecommendation from './EditRecommendation'

const EditRecommendations = () => {
  const { t } = useTranslation()
  const { survey } = useSurvey()
  const { recommendations, isSuccess } = useRecommendations(survey?.id)

  const [recommendationId, setRecommendationId] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')

  const handleQuestionChange = (event: SelectChangeEvent) => {
    setRecommendationId(event.target.value)
  }

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as keyof Locales)
  }

  if (!isSuccess) return null

  const selectedRecommendation = recommendations.find(
    ({ id }) => id === (recommendationId as unknown as number)
  )

  return (
    <Box sx={{ mx: 2, mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          my: 4,
          justifyContent: 'space-around',
        }}
      >
        <RecommendationSelect
          recommendationId={recommendationId}
          recommendations={recommendations}
          handleChange={handleQuestionChange}
        />
        <LanguageSelect
          selectedLanguage={selectedLanguage}
          handleChange={handleLanguageChange}
        />
      </Box>
      <Box width="100%" flexWrap="wrap">
        {recommendationId ? (
          <Box sx={{ my: 8 }}>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:recommendationViewRecommendationEdit')}
            </Typography>
            <EditRecommendation
              language={selectedLanguage}
              recommendation={selectedRecommendation}
            />
          </Box>
        ) : (
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:recommendationViewInfo')}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default EditRecommendations
