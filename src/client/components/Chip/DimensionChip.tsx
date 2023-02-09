import React from 'react'
import { Chip, Tooltip } from '@mui/material'
import { MultipleChoiceType } from '../../types'

const generateColors = (id) => {
  const stringUniqueHash = [...id].reduce(
    (acc, char) =>
      char.charCodeAt(0) + ((acc << 30) - acc), // eslint-disable-line no-bitwise
    0
  )
  return `hsl(${stringUniqueHash % 360}, 90%, 70%)`
}

const DimensionChip: React.FC<{
  choice: MultipleChoiceType
  compact: boolean
}> = ({ choice, compact = false }) => {
  const color = generateColors(choice.id)
  const style = {
    backgroundColor: color,
    margin: '1px',
  }

  return compact ? (
    <Tooltip title={choice.label.en} arrow>
      <Chip label={choice.label.en.substring(0, 3)} size="small" sx={style} />
    </Tooltip>
  ) : (
    <Chip label={choice.label.en} sx={style} />
  )
}

export default DimensionChip
