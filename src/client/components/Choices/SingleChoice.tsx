import React from 'react'
import { Controller } from 'react-hook-form'
import { RadioGroup, FormControlLabel, Radio, Box } from '@mui/material'

import { Locales, SingleChoiceType } from '@backend/types'

import { InputProps } from '../../types'

const SingleChoice = ({
  control,
  question,
  children,
  language,
}: InputProps) => {
  if (!question) return null

  return (
    <>
      <Controller
        control={control}
        name={question.id.toString()}
        defaultValue=""
        render={({ field }) => (
          <Box justifyContent="center">
            <RadioGroup {...field} row>
              {question.optionData.options.map(
                (singleOption: SingleChoiceType) => (
                  <FormControlLabel
                    data-cy={`choice-select-${singleOption.id}`}
                    key={singleOption.id as string}
                    value={singleOption.id}
                    label={singleOption.title[language as keyof Locales]}
                    control={<Radio />}
                  />
                )
              )}
            </RadioGroup>
          </Box>
        )}
      />

      {children}
    </>
  )
}

export default SingleChoice
