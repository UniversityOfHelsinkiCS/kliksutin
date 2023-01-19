import React from 'react'
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  CardContent,
  Typography,
  Card,
  Box,
  List,
  ListItem,
  Button,
  CardActions,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import styles from './styles'
import { InputProps } from '../../types'

const CourseAttendance: React.FC<InputProps> = ({ control, watch }) => {
  const typeOfAttendance = watch('courseAttendanceType')

  const classes = styles.cardStyles

  return (
    <Box sx={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" style={classes.heading} component="div">
            Osallistumismuoto
          </Typography>
          <Box sx={classes.content}>
            <Typography variant="body2">
              Lue ensin tilojen opetusteknologian käyttöohjeet täältä.
            </Typography>
            <Typography variant="body2">
              Näistä palveluista voi olla hyötyä opetuksessasi
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Controller
        control={control}
        name="courseAttendanceType"
        defaultValue=""
        render={({ field }) => (
          <Box display="flex" justifyContent="center">
            <RadioGroup {...field} row>
              <FormControlLabel
                value="campusAttendance"
                label="Läsnä"
                control={<Radio />}
              />
              <FormControlLabel
                value="remoteAttendance"
                label="Etänä"
                control={<Radio />}
              />
              <FormControlLabel
                value="hybridAttendance"
                label="Hybridi"
                control={<Radio />}
              />
            </RadioGroup>
          </Box>
        )}
      />
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {typeOfAttendance !== 'campusAttendance' && typeOfAttendance && (
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Zoom
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Here more info about Zoom
              </Typography>
              <Typography variant="body2">
                Zoom is this and that and great tool.
              </Typography>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </CardContent>
          </Card>
        )}

        {typeOfAttendance === 'campusAttendance' && typeOfAttendance && (
          <Box>
            <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
              <ListItem>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Unitube
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Here more info about Unitube
                    </Typography>
                    <Typography variant="body2">
                      Unitube is this and that and great tool.
                    </Typography>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </ListItem>
              <ListItem>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Flinga
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Here more info about Flinga
                    </Typography>
                    <Typography variant="body2">
                      Flinga is this and that and great tool.
                    </Typography>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </ListItem>
              <ListItem>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Presemo
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Here more info about Presemo
                    </Typography>
                    <Typography variant="body2">
                      Presemo is this and that and great tool.
                    </Typography>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </ListItem>
            </List>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default CourseAttendance
