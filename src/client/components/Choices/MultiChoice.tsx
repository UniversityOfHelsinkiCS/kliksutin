import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, FormControl, Checkbox, FormControlLabel } from '@mui/material'
import { MultipleChoiceType, InputProps } from '../../types'

const MultiChoice = ({ control, question, children, language }: InputProps) => (
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
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    value={choice.id}
                    checked={field.value}
                  />
                }
                label={choice.label[language]}
              />
            </Box>
          </FormControl>
        )}
      />
    ))}

    {children}
  </>
)

export default MultiChoice
