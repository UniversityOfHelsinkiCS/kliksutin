import React, { useState } from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import useSurvey from '../../../hooks/useSurvey'

import { LanguageSelect } from '../EditResults/Select'

import { Locales, Recommendation } from '../../../types'
import useRecommendations from '../../../hooks/useRecommendations'

type HandleChange = (event: SelectChangeEvent) => void

const RecommendationSelect = ({
  recommendationId,
  recommendations,
  handleChange,
}: {
  recommendationId: string
  recommendations: Recommendation[]
  handleChange: HandleChange
}) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales

  return (
    <Box sx={{ width: '20vw' }}>
      <FormControl fullWidth>
        <InputLabel>{t('admin:selectQuestion')}</InputLabel>
        <Select
          label={t('admin:selectQuestion')}
          value={recommendationId}
          onChange={handleChange}
        >
          {recommendations.map(({ id, title }) => (
            <MenuItem key={id} value={id}>
              {title[language]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

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
      {recommendationId && (
        <Box width="100%" flexWrap="wrap">
          <Box sx={{ my: 8 }}>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:questionViewInfo')}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default EditRecommendations
