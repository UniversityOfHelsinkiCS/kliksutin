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

const CourseGrading: React.FC<InputProps> = ({ control }) => {
  const classes = styles.cardStyles

  return (
    <Box sx={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={classes.heading} component="div">
            Arviointi
          </Typography>
        </CardContent>
      </Card>

      <Controller
        control={control}
        name="courseGrading"
        defaultValue=""
        render={({ field }) => (
          <Box display="flex" justifyContent="center">
            <RadioGroup {...field} row>
              <FormControlLabel
                value="before"
                label="Ennen"
                control={<Radio />}
              />
              <FormControlLabel
                value="during"
                label="Aikana"
                control={<Radio />}
              />
              <FormControlLabel
                value="after"
                label="Jälkeen"
                control={<Radio />}
              />
            </RadioGroup>
          </Box>
        )}
      />
    </Box>
  )
}

export default CourseGrading
