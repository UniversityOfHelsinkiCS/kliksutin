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
import { InputProps } from '../../types'

const CourseType: React.FC<InputProps> = ({ control }) => (
  <Box sx={{ maxWidth: 1080 }}>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Opetusmuoto
        </Typography>
      </CardContent>
    </Card>

    <Controller
      control={control}
      name="lectureType"
      defaultValue=""
      render={({ field }) => (
        <Box display="flex" justifyContent="center">
          <RadioGroup {...field} row>
            <FormControlLabel
              value="hasLectures"
              label="Luennot"
              control={<Radio />}
            />
            <FormControlLabel
              value="hasDemos"
              label="Demot"
              control={<Radio />}
            />
          </RadioGroup>
        </Box>
      )}
    />
  </Box>
)

export default CourseType
