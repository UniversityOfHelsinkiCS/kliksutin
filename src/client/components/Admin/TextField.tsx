import React from 'react'
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

export const LocalesTextField = ({
  value,
  inputlabel,
  onChange,
}: {
  value: Locales
  inputlabel: string
  onChange: any
}) => (
  <Box sx={{ my: 4 }}>
    <InputLabel>{inputlabel}</InputLabel>
    <TextField
      sx={{ mt: 2 }}
      multiline
      label="FI"
      fullWidth
      value={value.fi}
      onChange={(event) => onChange({ ...onChange, fi: event.target.value })}
    />
    <TextField
      sx={{ mt: 2 }}
      multiline
      label="SV"
      fullWidth
      value={value.sv}
      onChange={(event) => onChange({ ...onChange, sv: event.target.value })}
    />
    <TextField
      sx={{ mt: 2 }}
      multiline
      label="EN"
      fullWidth
      value={value.en}
      onChange={(event) => onChange({ ...onChange, en: event.target.value })}
    />
  </Box>
)
