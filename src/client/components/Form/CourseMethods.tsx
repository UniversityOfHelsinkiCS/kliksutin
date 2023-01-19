import React from 'react'
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  CardContent,
  Typography,
  Card,
  Box,
  Button,
  CardActions,
  List,
  ListItem,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import styles from './styles'
import { InputProps } from '../../types'

const CourseMethods: React.FC<InputProps> = ({ control, watch }) => {
  const exam = watch('courseCompletionMethod')
  const classes = styles.cardStyles

  return (
    <Box sx={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={classes.heading} component="div">
            Suoritusmuoto
          </Typography>
        </CardContent>
      </Card>

      <Controller
        control={control}
        name="courseCompletionMethod"
        defaultValue=""
        render={({ field }) => (
          <Box display="flex" justifyContent="center">
            <RadioGroup {...field} row>
              <FormControlLabel
                value="hasExam"
                label="Tentti"
                control={<Radio />}
              />
              <FormControlLabel
                value="noExam"
                label="Muu"
                control={<Radio />}
              />
            </RadioGroup>
          </Box>
        )}
      />

      {exam === 'hasExam' && exam && (
        <Box>
          <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
            <ListItem>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Examinarium
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Jotain löpinää examinarium liittyen
                  </Typography>
                  <Typography variant="body2">
                    Examinarium on jees jees
                  </Typography>
                  <CardActions>
                    <Button size="small">Lue lisää</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Moodle
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Tiesitkö että voit myös pitää tentin suoraan Moodlessa?
                  </Typography>
                  <Typography variant="body2">
                    Moodle tentti säästää paljon aikaa ja on opiskelijoiden
                    painajainen
                  </Typography>
                  <CardActions>
                    <Button size="small">Lue lisää</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Moodle salitentti
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Moodle salitentti
                  </Typography>
                  <Typography variant="body2">Moodle salitentti</Typography>
                  <CardActions>
                    <Button size="small">Lue lisää</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </ListItem>
          </List>
        </Box>
      )}

      {exam === 'noExam' && exam && (
        <Box>
          <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
            <ListItem>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    E-Portfolio
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    E-Portfolio
                  </Typography>
                  <Typography variant="body2">E-Portfolio</Typography>
                  <CardActions>
                    <Button size="small">Lue lisää</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Moodlen vertaisarviointi ja laskarit
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Moodlen vertaisarviointi ja laskarit
                  </Typography>
                  <Typography variant="body2">
                    Moodlen vertaisarviointi ja laskarit
                  </Typography>
                  <CardActions>
                    <Button size="small">Lue lisää</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Turnitin
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Turnitin
                  </Typography>
                  <Typography variant="body2">Turnitin</Typography>
                  <CardActions>
                    <Button size="small">Lue lisää</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </ListItem>
          </List>
        </Box>
      )}
    </Box>
  )
}

export default CourseMethods
