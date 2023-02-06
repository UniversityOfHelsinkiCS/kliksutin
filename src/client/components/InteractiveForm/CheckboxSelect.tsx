import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, FormControl, Checkbox } from '@mui/material'
import Chip from '@mui/material/Chip'
import { MultipleChoiceType, Question } from '../../types'

const CheckboxSelect: React.FC<{
  control: any
  question: Question
  children: any
  language: string
}> = ({ control, question, language }) => (
  <>
    {question.optionData.options.map((choice: MultipleChoiceType) => (
      <Controller
        key={choice.id}
        name={`${question.id}.${choice.id}`}
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControl sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.3 }}>
              <Checkbox {...field} value={choice.id} checked={field.value} />
              <Chip label={choice.label[language]} />
            </Box>
          </FormControl>
        )}
      />
    ))}
  </>
)

export default CheckboxSelect
