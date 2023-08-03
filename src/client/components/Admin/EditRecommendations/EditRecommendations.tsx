import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import useRecommendations from '../../../hooks/useRecommendations'

import EditRecommendation from './EditRecommendation'

const EditRecommendations = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { recommendationId } = useParams()
  const [searchParams] = useSearchParams()
  const { survey } = useSurvey()
  const { recommendations, isSuccess } = useRecommendations(survey?.id)

  if (!isSuccess || !recommendations) return null

  const selectedLanguage = searchParams.get('transLang') as keyof Locales

  const selectedRecommendation = recommendations.find(
    ({ id }) => id === Number(recommendationId)
  )

  const handleRecommendationDeletion = () => {
    navigate({
      pathname: '/admin/edit-recommendations',
      search: location.search,
    })
  }

  return (
    <Box width="100%" flexWrap="wrap">
      {recommendationId && selectedRecommendation ? (
        <Box sx={{ my: 4 }}>
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:recommendationViewRecommendationEdit')}
          </Typography>
          <EditRecommendation
            language={selectedLanguage}
            recommendation={selectedRecommendation}
            onDelete={handleRecommendationDeletion}
          />
        </Box>
      ) : (
        <Typography sx={{ my: 4, pl: 1 }} variant="h4">
          {t('admin:recommendationViewInfo')}
        </Typography>
      )}
    </Box>
  )
}

export default EditRecommendations
