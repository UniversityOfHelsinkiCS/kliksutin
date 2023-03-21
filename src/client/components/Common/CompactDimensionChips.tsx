import React from 'react'
import { Box } from '@mui/material'
import colors from '../../util/colors'
import styles from '../../styles'
import { DimensionSelectionData } from '../../types'

import DimensionChip from '../Chip/DimensionChip'

const { recommendationStyles } = styles

const CompactDimensionChips = ({
  dimensions,
  dimensionSelections,
}: {
  dimensions: string[]
  dimensionSelections: DimensionSelectionData[]
}) => (
  <Box sx={recommendationStyles.recommendationChipsContainer}>
    {dimensions.map((aDimension) => {
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
)

export default CompactDimensionChips
