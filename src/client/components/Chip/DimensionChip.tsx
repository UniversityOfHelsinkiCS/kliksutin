import React from 'react'
import { Chip, Tooltip } from '@mui/material'
import { MultipleChoiceType } from '../../types'

const generateColors = (id: string) => {
  const stringUniqueHash = [...id].reduce(
    (acc, char) => char.charCodeAt(0) + ((acc << 30) - acc), // eslint-disable-line no-bitwise
    0
  )
  return `hsl(${stringUniqueHash % 360}, 90%, 70%)`
}

const DimensionChip: React.FC<{
  choice: MultipleChoiceType
  language: string | 'en'
  compact: boolean
}> = ({ choice, language = 'en', compact = false }) => {
  const color = generateColors(choice.id)
  const style = {
    backgroundColor: color,
    margin: '1px',
  }

  return compact ? (
    <Tooltip title={choice.label.en} arrow>
      <Chip
        label={choice.label[language].substring(0, 3)}
        size="small"
        sx={style}
      />
    </Tooltip>
  ) : (
    <Chip label={choice.label[language]} size="small" sx={style} />
  )
}

export default DimensionChip
