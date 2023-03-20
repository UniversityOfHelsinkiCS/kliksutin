import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import DimensionChip from '../Chip/DimensionChip'
import Markdown from '../Common/Markdown'
import colors from '../../util/colors'
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
              <Box sx={recommendationStyles.recommendationChipsContainer}>
                {recommendation.dimensions.map((aDimension) => {
                  const chipData = dimensionSelections.find(
                    (selectedDimension) => selectedDimension.id === aDimension
                  )
                  return (
                    <DimensionChip
                      key={chipData.id}
                      choice={chipData}
                      color={colors[chipData.id]}
                      compact
                    />
                  )
                })}
              </Box>
            </Box>
            <Typography variant="body2" sx={recommendationStyles.subtoolText}>
              {recommendation.subtools && recommendation.subtools.join(', ')}
            </Typography>
            <Markdown>
              {recommendation.text[language as keyof Locales]}
            </Markdown>
          </Box>
        ))}
    </>
  )
}

export default CurrentlySelectedTools
