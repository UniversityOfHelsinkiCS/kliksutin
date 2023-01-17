import React from 'react'
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  CardContent,
  Typography,
  Card,
  Box,
} from '@mui/material'
import { Controller } from 'react-hook-form'

interface InputProps {
  control: any
  options: {
    label: string
    value: string
  }[]
}

const FormOptionBox: React.FC<InputProps> = ({ control, options }) => {
  const generateOptions = () =>
    options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.value}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ))
  return (
    <Box sx={{ maxWidth: 1080 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Choise #
          </Typography>
          <Typography variant="h5" component="div">
            Heading of the choise
          </Typography>
          <Typography variant="body2">
            This is where the main text of the select comes to
          </Typography>
        </CardContent>
      </Card>

      <Controller
        control={control}
        name="checkbox"
        defaultValue=""
        render={({ field }) => (
          <Box display="flex" justifyContent="center">
            <RadioGroup {...field} row>
              {generateOptions()}
            </RadioGroup>
          </Box>
        )}
      />
    </Box>
  )
}

export default FormOptionBox
