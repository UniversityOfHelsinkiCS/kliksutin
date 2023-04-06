import React from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Markdown from '../Common/Markdown'
import CompactDimensionChips from '../Common/CompactDimensionChips'
import styles from '../../styles'
import { Locales, SelectedTools } from '../../types'

const CurrentlySelectedTools = ({
  mergedRecommendationData,
  dimensionSelections,
}: SelectedTools) => {
  const { i18n } = useTranslation()
  const { language } = i18n

  const { recommendationStyles } = styles

  return (
    <>
      {mergedRecommendationData
        .filter((recommendation) => recommendation.dimensions.length > 0)
        .map((recommendation) => (
          <Box
            key={recommendation.id}
            sx={recommendationStyles.recommendationBox}
          >
            <Box sx={recommendationStyles.recommendationChipWrapper}>
              <Markdown>
                {recommendation.title[language as keyof Locales]}
              </Markdown>

              <CompactDimensionChips
                dimensions={recommendation.dimensions}
                dimensionSelections={dimensionSelections}
              />
            </Box>
            <Box sx={recommendationStyles.subtoolWrapper}>
              {recommendation.subtools &&
                recommendation.subtools.map((subtool) => (
                  <Box key={subtool} sx={recommendationStyles.subtoolItem}>
                    <Markdown>{subtool}</Markdown>
                  </Box>
                ))}
            </Box>
            <Markdown>
              {recommendation.text[language as keyof Locales]}
            </Markdown>
          </Box>
        ))}
    </>
  )
}

export default CurrentlySelectedTools
