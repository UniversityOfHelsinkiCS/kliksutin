import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Locales } from '@backend/types'

import Markdown from '../Common/Markdown'

import styles from '../../styles'

import { Recommendation } from '../../types'

const AdministativeTools = ({
  administrativeRecommendations,
}: {
  administrativeRecommendations: Recommendation[]
}) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n

  const { recommendationStyles, cardStyles } = styles

  if (administrativeRecommendations.length === 0) return null

  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        data-cy='recommendation-administration-section-title'
        variant='h5'
        sx={cardStyles.heading}
        component='span'
      >
        {t('recommendations:administrationTitle')}
      </Typography>
      {administrativeRecommendations.map((recommendation) => (
        <Box
          key={recommendation.id}
          sx={recommendationStyles.recommendationBox}
        >
          <Box sx={recommendationStyles.recommendationChipWrapper}>
            <Markdown>
              {recommendation.title[language as keyof Locales]}
            </Markdown>
          </Box>
          <Box sx={recommendationStyles.recommendationChipWrapper}>
            <Markdown>
              {recommendation.text[language as keyof Locales]}
            </Markdown>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default AdministativeTools
