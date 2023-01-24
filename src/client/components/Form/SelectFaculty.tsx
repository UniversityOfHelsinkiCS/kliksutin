import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import { Trans, useTranslation } from 'react-i18next'
import styles from './styles'
import { InputProps } from '../../types'

const SelectFaculty: React.FC<InputProps> = ({ control }) => {
  useTranslation()
  const [faculty, setFaculty] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setFaculty(event.target.value)
  }

  const classes = styles.cardStyles

  return (
    <Box sx={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={classes.heading} component="div">
            <Trans i18nKey="facultySelect:welcomeMessage" />
          </Typography>
          <Box sx={classes.content}>
            <Typography variant="body2">
              <Trans i18nKey="facultySelect:introMessage" />
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Controller
        control={control}
        name="faculty"
        defaultValue=""
        render={({ field }) => (
          <Box display="flex" justifyContent="center">
            <FormControl sx={{ m: 1, minWidth: 480 }}>
              <InputLabel>
                <Trans i18nKey="facultySelect:inputLabel" />
              </InputLabel>
              <Select
                value={faculty}
                label={<Trans i18nKey="facultySelect:inputLabel" />}
                onChange={handleChange}
                {...field}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Matemaattis-luonnontieteellinen">
                  Matlu
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}
      />
    </Box>
  )
}

export default SelectFaculty
