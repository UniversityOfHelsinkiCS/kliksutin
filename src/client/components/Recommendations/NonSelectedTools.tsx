import React from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Markdown from '../Common/Markdown'
import styles from './styles'
import { Locales, SelectedTools } from '../../types'

const NonSelectedTools = ({ mergedRecommendationData }: SelectedTools) => {
  const { i18n } = useTranslation()

  const classes = styles.cardStyles
  const { language } = i18n

  return (
    <>
      {mergedRecommendationData
        .filter((recommendation) => recommendation.dimensions.length === 0)
        .map((recommendation) => (
          <Box key={recommendation.id} sx={classes.recommendationItemContainer}>
            <Box display="flex" alignItems="center">
              <Box sx={classes.notSelected}>
                <Markdown>
                  {recommendation.title[language as keyof Locales]}
                </Markdown>
              </Box>
            </Box>
            <Box sx={classes.notSelected}>
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
