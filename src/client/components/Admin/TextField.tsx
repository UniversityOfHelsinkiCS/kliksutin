import React from 'react'
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form'
import { Box, InputLabel, TextField } from '@mui/material'
import { Locales } from '../../types'

// This component is used inside RHF form element
export const DialogLocalesField = ({
  value,
  inputlabel,
  control,
  error,
}: {
  value: string
  inputlabel: string
  control: Control<any>
  error: Merge<FieldError, FieldErrorsImpl<Locales>> | undefined
}) => (
  <Box sx={{ my: 4 }}>
    <InputLabel>{inputlabel}</InputLabel>
    {['fi', 'sv', 'en'].map((language) => (
      <Controller
        key={`${value}.${language}`}
        name={`${value}.${language}`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={error && language in error}
            helperText={
              error && language in error
                ? error[language as keyof Locales]?.message
                : ''
            }
            sx={{ mt: 2 }}
            multiline
            label={language.toUpperCase()}
            fullWidth
          />
        )}
      />
    ))}
  </Box>
)

export const DialogTextField = ({
  value,
  inputlabel,
  control,
  error,
}: {
  value: string
  inputlabel: string
  control: Control<any>
  error: FieldError | undefined
}) => (
  <Box sx={{ my: 4 }}>
    <InputLabel>{inputlabel}</InputLabel>
    <Controller
      name={`${value}`}
      control={control}
      render={({ field }) => (
        <TextField
          error={!!error}
          helperText={error ? error.message : ''}
          sx={{ mt: 2 }}
          multiline
          label={value.toUpperCase()}
          fullWidth
          {...field}
        />
      )}
    />
  </Box>
)
