import React from 'react'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Box, FormControl, Checkbox, Tooltip } from '@mui/material'

import DimensionChip from '../Chip/DimensionChip'

import { InputProps, DimensionSelectionData, Locales } from '../../types'

import styles from '../../styles'

const DimensionSelect = ({ control, question }: InputProps) => {
  const { i18n } = useTranslation()
  const { language } = i18n

  const { formStyles } = styles

  return (
    <>
      {(question.optionData.options as DimensionSelectionData[]).map(
        (choice: DimensionSelectionData) => (
          <Controller
            key={choice.id}
            name={`${question.id}.${choice.id}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControl sx={formStyles.formControl}>
                <Box sx={formStyles.choiceBox}>
                  <Tooltip
                    title={choice.text[language as keyof Locales]}
                    placement="right"
                    arrow
                  >
                    <div>
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
                    </div>
                  </Tooltip>
                </Box>
              </FormControl>
            )}
          />
        )
      )}
    </>
  )
}

export default DimensionSelect
