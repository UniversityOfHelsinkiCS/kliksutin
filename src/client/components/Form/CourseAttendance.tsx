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

const CourseSize: React.FC<InputProps> = ({ control, watch }) => {
  const largeSize = watch('courseAttendants')
  const mooc = watch('isMooc')

  return (
    <Box sx={{ maxWidth: 1080 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Kurssin koko
          </Typography>
          <Box>
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
                name="smallSize"
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
          <Typography variant="body2">
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
                    name="mooc"
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
          {mooc === 'true' ? (
            <Typography variant="body2">
              Suosittelemme valitsemaan DigiCapuksen tai KumpulaMoocin
              alustaksi.
            </Typography>
          ) : (
            <Typography variant="body2">
              Suosittelemme valitsemaan Moodlen alustaksi.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  )
}

export default CourseSize
