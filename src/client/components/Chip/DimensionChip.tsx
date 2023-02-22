import React from 'react'
import { Chip, Tooltip } from '@mui/material'
import { Locales, MultipleChoiceType } from '../../types'

const DimensionChip: React.FC<{
  choice: MultipleChoiceType
  color: string | undefined
  compact: boolean
}> = ({ choice, color, compact = false }) => {
  const style = {
    backgroundColor: color,
    marginX: '0.1rem',
    fontWeight: 'normal',
  }
  const language = localStorage.getItem('language') || 'en'

  return compact ? (
    <Tooltip title={choice.label[language as keyof Locales]} arrow>
      <Chip
        label={choice.label[language as keyof Locales].substring(0, 3)}
        size="small"
        sx={style}
      />
    </Tooltip>
  ) : (
    <Chip
      label={choice.label[language as keyof Locales]}
      size="small"
      sx={style}
    />
  )
}

export default DimensionChip
