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

type OnChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void

export const TitleTextField = ({
  value,
  onChange,
}: {
  value: string
  onChange: OnChange
}) => <TextField fullWidth multiline value={value} onChange={onChange} />

// ContentTextField causes MUI rendering issue if rows are not defined
// more information: https://github.com/mui/material-ui/issues/33081
export const ContentTextField = ({
  value,
  onChange,
}: {
  value: string
  onChange: OnChange
}) => (
  <TextField multiline rows={20} fullWidth value={value} onChange={onChange} />
)

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
  error: Merge<FieldError, FieldErrorsImpl<Locales>>
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
            error={error && language in error}
            helperText={
              error && language in error
                ? error[language as keyof Locales].message
                : ''
            }
            sx={{ mt: 2 }}
            multiline
            label={language.toUpperCase()}
            fullWidth
            value={field.value.language}
            {...field}
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
}: {
  value: string
  inputlabel: string
  control: Control<any>
}) => (
  <Box sx={{ my: 4 }}>
    <InputLabel>{inputlabel}</InputLabel>
    <Controller
      name={`${value}`}
      control={control}
      render={({ field }) => (
        <TextField
          sx={{ mt: 2 }}
          multiline
          label={value.toUpperCase()}
          fullWidth
          value={field.value}
          {...field}
        />
      )}
    />
  </Box>
)
