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

const CourseSize: React.FC<InputProps> = ({ control, watch }) => {
  const largeSize = watch('courseAttendants')
  const mooc = watch('isMooc')

  const classes = styles.cardStyles

  console.log(mooc)

  return (
    <Box sx={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" style={classes.heading} component="div">
            Kurssin koko
          </Typography>
          <Box sx={classes.content}>
            <Typography variant="body2">
              Isolle kurssille sopii hyvin alustaksi Moodle. Voit lisätä
              vuorovaikutusmahdollisuuksia luonnoilla Presemon avulla.
            </Typography>
            <Typography variant="body2">
              Mikäli haluat toteuttaa kurssisi MOOC-muodossa, katso tästä
              tarkemmat ohjeet.
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Controller
        control={control}
        name="courseAttendants"
        defaultValue=""
        render={({ field }) => (
          <Box display="flex" justifyContent="center">
            <RadioGroup {...field} row>
              <FormControlLabel
                value="smallSize"
                label="< 50"
                control={<Radio />}
              />
              <FormControlLabel
                value="largeSize"
                label="> 50"
                control={<Radio />}
              />
            </RadioGroup>
          </Box>
        )}
      />

      {largeSize !== 'largeSize' && largeSize && (
        <Typography variant="body2">
          Suosittelemme valitsemaan Moodlen alustaksi.
        </Typography>
      )}

      {largeSize === 'largeSize' && (
        <Box>
          <Typography sx={classes.question}>
            Haluatko pitää kurssin MOOCina?
          </Typography>

          <Controller
            control={control}
            name="isMooc"
            defaultValue=""
            render={({ field }) => (
              <Box display="flex" justifyContent="center">
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="true"
                    label="Kyllä"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="false"
                    label="Ei"
                    control={<Radio />}
                  />
                </RadioGroup>
              </Box>
            )}
          />

          {mooc === 'true' && (
            <Typography sx={classes.recommendation}>
              Suosittelemme valitsemaan DigiCapuksen tai KumpulaMoocin
              alustaksi.
            </Typography>
          )}

          {mooc === 'false' && (
            <Typography sx={classes.recommendation}>
              Suosittelemme valitsemaan Moodlen alustaksi.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  )
}

export default CourseSize
