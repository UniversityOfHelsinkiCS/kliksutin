import React from 'react'
import { Box, Container } from '@mui/material'

import { DimensionSelectionData, Locales, Result } from '@backend/types'

import Markdown from '../Common/Markdown'

const ResultElement = ({
  language,
  resultData,
  dimensionSelections,
}: {
  language: keyof Locales
  resultData: Result | undefined
  dimensionSelections: DimensionSelectionData[] | undefined | null
}) => {
  if (!resultData || !dimensionSelections) return null

  const allDimensions: DimensionSelectionData = {
    id: 'allDimensions',
    label: 'allDimensions',
    color: '#000000',
    title: {
      fi: 'Kaikki',
      sv: 'All',
      en: 'All',
    },
    text: {
      fi: 'Kaikki',
      sv: 'All',
      en: 'All',
    },
  }

  const dimensions = [allDimensions, ...dimensionSelections]

  return (
    <Container
      style={{
        margin: '2rem 0 2rem 0',
        borderLeft: 'solid',
        borderColor: '#9ca3af',
        borderWidth: '1px',
      }}
    >
      <Box style={{ margin: '2rem 0 2rem 1rem' }}>
        <Markdown>{resultData.isSelected[language]}</Markdown>
      </Box>
      <Box
        style={{
          margin: '2rem 0 2rem 0',
        }}
      >
        {dimensions.map((dimension) => {
          const color = dimension.color ?? null

          if (!resultData.data[dimension.id]) return null

          return (
            <Box
              data-cy={`result-wrapper-${resultData.optionLabel}-${dimension.id}`}
              key={`${JSON.stringify(resultData)}.${dimension.id}`}
              style={{
                margin: '1rem',
                padding: '0 2rem 0 2rem ',
                borderLeft: 'solid',
                borderColor: color,
                borderWidth: '6px',
              }}
            >
              <Markdown>{resultData.data[dimension.id][language]}</Markdown>
            </Box>
          )
        })}
      </Box>
    </Container>
  )
}

export default ResultElement
