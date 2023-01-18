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
import { InputProps } from '../../types'

const CourseRecord: React.FC<InputProps> = ({ control, watch }) => {
  const recorded = watch('lectureRecording')

  return (
    <Box sx={{ maxWidth: 1080 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Nauhoitus
          </Typography>
        </CardContent>
      </Card>

      <Controller
        control={control}
        name="lectureRecording"
        defaultValue=""
        render={({ field }) => (
          <Box display="flex" justifyContent="center">
            <RadioGroup {...field} row>
              <FormControlLabel
                value="hasRecording"
                label="Kyllä"
                control={<Radio />}
              />
              <FormControlLabel
                value="noRecording"
                label="Ei"
                control={<Radio />}
              />
            </RadioGroup>
          </Box>
        )}
      />

      {recorded === 'noRecording' && recorded && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              Miksi olisi hyvä nauhoittaa luennot?
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Luennot ovat hyvä nauhoittaa, koska opiskelija voi nukkua
              pidempään.
            </Typography>
            <Typography variant="body2">
              Tässä voi olla lisää juttuja liittyen asiaan.
            </Typography>
            <CardActions>
              <Button size="small">Lue lisää</Button>
            </CardActions>
          </CardContent>
        </Card>
      )}

      {recorded === 'hasRecording' && recorded && (
        <Box>
          <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
            <ListItem>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Unitube
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Unitube on laitoksen oma youtube
                  </Typography>
                  <Typography variant="body2">
                    Lataisitko sinäkin tallenteet Unitubeen?
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
                    Zoom
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Tiesitkö että Zoomissa on tätä ja tuota?
                  </Typography>
                  <Typography variant="body2">
                    Voit myös nauhoittaa luennot Zoomissa.
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
                    Screencast-o-matic
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Here more info about Screencast
                  </Typography>
                  <Typography variant="body2">
                    Screencast is this and that and great tool.
                  </Typography>
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

export default CourseRecord
