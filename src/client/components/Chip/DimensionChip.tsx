import React from 'react'
import { Chip, Tooltip } from '@mui/material'
import { MultipleChoiceType } from '../../types'

const DimensionChip: React.FC<{
  choice: MultipleChoiceType
  color: string | undefined
  language: string
  compact: boolean
}> = ({ choice, language, color, compact = false }) => {
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
