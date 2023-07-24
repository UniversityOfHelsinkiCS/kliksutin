import React from 'react'
import { Box } from '@mui/material'
import { DimensionSelectionData } from '@backend/types'

import DimensionChip from './DimensionChip'

import styles from '../../styles'

const { recommendationStyles } = styles

const CompactDimensionChips = ({
  dimensions,
  dimensionSelections,
}: {
  dimensions: string[]
  dimensionSelections: DimensionSelectionData[] | undefined | null
}) => {
  if (!dimensions || !dimensionSelections) return null

  return (
    <Box sx={recommendationStyles.recommendationChipsContainer}>
      {dimensions.map((aDimension) => {
        const chipData = dimensionSelections.find(
          (selectedDimension) => selectedDimension.id === aDimension
        )
        if (!chipData) return null

        return (
          <DimensionChip
            key={chipData.id}
            choice={chipData}
            color={chipData.color}
            compact
          />
        )
      })}
    </Box>
  )
}

export default CompactDimensionChips
