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
import useFaculty from '../../hooks/useFaculty'

const SelectFaculty: React.FC<InputProps> = ({
  control
}) => {
  useTranslation()
  const language = localStorage.getItem('language') || 'en'
  const [faculty, setFaculty] = useState('')
  const faculties = useFaculty()

  const handleChange = (event: SelectChangeEvent) => {
    setFaculty(event.target.value)
  }

  const classes = styles.cardStyles

  if (!faculties) return <h1>Loading...</h1>

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
          <FormControl sx={{ m: 1, width: 480, maxWidth: '80%' }}>
            <InputLabel>
              <Trans i18nKey="facultySelect:inputLabel" />
            </InputLabel>
            <Select
              value={faculty}
              label={<Trans i18nKey="facultySelect:inputLabel" />}
              onChange={handleChange}
              {...field}
            >
              {faculties.map((f) => (
                <MenuItem key={f.fi} value={f.fi}>
                  {f[language]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
    </Box>
  )
}

export default SelectFaculty
