import React from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Markdown from '../Common/Markdown'
import styles from '../../styles'
import { Locales, SelectedTools } from '../../types'

const NonSelectedTools = ({ mergedRecommendationData }: SelectedTools) => {
  const { i18n } = useTranslation()
  const { language } = i18n

  const { recommendationStyles } = styles

  return (
    <>
      {mergedRecommendationData
        .filter((recommendation) => recommendation.dimensions.length === 0)
        .map((recommendation) => (
          <Box
            key={recommendation.id}
            sx={recommendationStyles.recommendationBox}
          >
            <Box sx={recommendationStyles.notSelected}>
              <Markdown>
                {recommendation.title[language as keyof Locales]}
              </Markdown>
            </Box>
            <Box sx={recommendationStyles.notSelected}>
              <Markdown>
                {recommendation.text[language as keyof Locales]}
              </Markdown>
            </Box>
          </Box>
        ))}
    </>
  )
}

export default NonSelectedTools
