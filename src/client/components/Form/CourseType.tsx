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
import styles from './styles'
import { InputProps } from '../../types'

const CourseType: React.FC<InputProps> = ({ control }) => {
  const classes = styles.cardStyles

  return (
    <Box sx={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" style={classes.heading} component="div">
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
}

export default CourseType
