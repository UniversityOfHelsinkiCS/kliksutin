import React from 'react'
import { TextField } from '@mui/material'

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

export const ContentTextField = ({
  value,
  onChange,
}: {
  value: string
  onChange: OnChange
}) => (
  <TextField multiline rows={20} fullWidth value={value} onChange={onChange} />
)
