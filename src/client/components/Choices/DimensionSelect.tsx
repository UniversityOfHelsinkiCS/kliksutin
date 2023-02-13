import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, FormControl, Checkbox } from '@mui/material'
import { MultipleChoiceType, InputProps } from '../../types'
import DimensionChip from '../Chip/DimensionChip'
import generateColor from '../../util/generateColor'

const DimensionSelect = ({ control, question }: InputProps) => (
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
              <Checkbox
                {...field}
                icon={
                  <DimensionChip
                    key={choice.id}
                    choice={choice}
                    color={undefined}
                    compact={false}
                  />
                }
                checkedIcon={
                  <DimensionChip
                    key={choice.id}
                    choice={choice}
                    color={generateColor(choice.id)}
                    compact={false}
                  />
                }
                value={choice.id}
                checked={field.value}
              />
            </Box>
          </FormControl>
        )}
      />
    ))}
  </>
)

export default DimensionSelect
