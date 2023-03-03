import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, FormControl, Checkbox } from '@mui/material'
import { InputProps, DimensionSelectionData } from '../../types'
import DimensionChip from '../Chip/DimensionChip'
import colors from '../../util/colors'

const DimensionSelect = ({ control, question }: InputProps) => (
  <>
    {(question.optionData.options as DimensionSelectionData[]).map(
      (choice: DimensionSelectionData) => (
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
                  data-cy={`dimension-select-${choice.id}`}
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
                      color={colors[choice.id]}
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
      )
    )}
  </>
)

export default DimensionSelect
