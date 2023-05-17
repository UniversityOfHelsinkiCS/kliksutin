import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { Box, InputLabel, TextField } from '@mui/material'

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
}: {
  value: string
  inputlabel: string
  control: Control<any>
}) => (
  <Box sx={{ my: 4 }}>
    <InputLabel>{inputlabel}</InputLabel>
    <Controller
      name={`${value}.fi`}
      control={control}
      render={({ field }) => (
        <TextField
          sx={{ mt: 2 }}
          multiline
          label="FI"
          fullWidth
          value={field.value.fi}
          {...field}
        />
      )}
    />
    <Controller
      name={`${value}.sv`}
      control={control}
      render={({ field }) => (
        <TextField
          sx={{ mt: 2 }}
          multiline
          label="SV"
          fullWidth
          value={field.value.sv}
          {...field}
        />
      )}
    />
    <Controller
      name={`${value}.en`}
      control={control}
      render={({ field }) => (
        <TextField
          sx={{ mt: 2 }}
          multiline
          label="EN"
          fullWidth
          value={field.value.en}
          {...field}
        />
      )}
    />
  </Box>
)
