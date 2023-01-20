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

const Recommend: React.FC<{ recommendation: string }> = ({
  recommendation,
}) => {
  const classes = styles.cardStyles
  return <Typography sx={classes.recommendation}>{recommendation}</Typography>
}

const CourseSize: React.FC<InputProps> = ({ control, watch }) => {
  const largeSize = watch('courseAttendants.size')
  const mooc = watch('courseIsMooc')

  const classes = styles.cardStyles

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
        name="courseAttendants.size"
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
        <Recommend recommendation="Suosittelemme valitsemaan Moodlen alustaksi." />
      )}

      {largeSize === 'largeSize' && (
        <Box>
          <Typography sx={classes.question}>
            Haluatko pitää kurssin MOOCina?
          </Typography>

          <Controller
            control={control}
            name="courseAttendants.courseIsMooc"
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
            <Recommend
              recommendation="
              Suosittelemme valitsemaan DigiCapuksen tai KumpulaMoocin
              alustaksi."
            />
          )}

          {mooc === 'false' && (
            <Recommend recommendation="Suosittelemme valitsemaan Moodlen alustaksi." />
          )}
        </Box>
      )}
    </Box>
  )
}

export default CourseSize
