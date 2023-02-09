import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, FormControl, Checkbox } from '@mui/material'
import { MultipleChoiceType, Question } from '../../types'
import DimensionChip from '../Chip/DimensionChip'

const CheckboxSelect: React.FC<{
  control: any
  question: Question
  language: string
}> = ({ control, question, language }) => (
  <>
    {question.optionData.options.map((choice: MultipleChoiceType) => (
      <Controller
        key={choice.id}
        name={`${question.id}.${choice.id}`}
        control={control}
        defaultValue
        render={({ field }) => (
          <FormControl sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.3 }}>
              <Checkbox {...field} value={choice.id} checked={field.value} />
              <DimensionChip
                key={choice.id}
                choice={choice}
                language={language}
                compact={false}
              />
            </Box>
          </FormControl>
        )}
      />
    ))}
  </>
)

export default CheckboxSelect
