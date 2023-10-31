import React from 'react'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Box, FormControl, Checkbox, Tooltip } from '@mui/material'

import { DimensionSelectionData, Locales } from '@backend/types'

import DimensionChip from '../Chip/DimensionChip'

import { InputProps } from '../../types'

const DimensionSelect = ({ control, question }: InputProps) => {
  const { i18n } = useTranslation()
  const { language } = i18n

  if (!question) return null

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {(question.optionData.options as DimensionSelectionData[]).map(
        (choice: DimensionSelectionData) => (
          <Controller
            key={choice.id}
            name={`${question.id}.${choice.id}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControl>
                <Box>
                  <Tooltip
                    title={choice.text[language as keyof Locales]}
                    placement='bottom'
                    arrow
                  >
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
                          color={choice.color}
                          compact={false}
                        />
                      }
                      value={choice.id}
                      checked={field.value}
                    />
                  </Tooltip>
                </Box>
              </FormControl>
            )}
          />
        )
      )}
    </Box>
  )
}

export default DimensionSelect
