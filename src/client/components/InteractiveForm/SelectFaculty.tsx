import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styles from './styles'
import { InputProps, Faculty, Locales } from '../../types'
import useFaculties from '../../hooks/useFaculties'
import useUserFaculties from '../../hooks/useUserFaculties'

const sortFaculties = (faculties: Faculty[], language: keyof Locales) => {
  const sortedFaculties = faculties.sort((a, b) => {
    if (a.name[language] > b.name[language]) return 1
    if (a.name[language] < b.name[language]) return -1

    return 0
  })

  return sortedFaculties
}

const SelectFaculty: React.FC<InputProps> = ({ control }) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const [faculty, setFaculty] = useState('')
  const { faculties, isLoading } = useFaculties()
  const { userFaculties = [] } = useUserFaculties()

  const handleChange = (event: SelectChangeEvent) => {
    setFaculty(event.target.value)
  }

  const classes = styles.cardStyles

  if (isLoading) return null

  const sortedFaculties = sortFaculties(faculties, language as keyof Locales)

  return (
    <Box sx={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={classes.heading} component="div">
            {t('facultySelect:welcomeMessage')}
          </Typography>
          <Box sx={classes.content}>
            <Typography variant="body2">
              {t('facultySelect:introMessage')}
            </Typography>
          </Box>
        </CardContent>

        <Controller
          control={control}
          name="faculty"
          defaultValue={userFaculties[0]?.code || ''}
          render={({ field }) => (
            <FormControl sx={{ width: '100%' }}>
              <InputLabel>{t('facultySelect:inputLabel')}</InputLabel>
              <Select
                data-cy="faculty-select"
                value={faculty}
                label={t('facultySelect:inputLabel')}
                onChange={handleChange}
                {...field}
              >
                {sortedFaculties.map((f: Faculty) => (
                  <MenuItem
                    data-cy={`faculty-option-${f.code}`}
                    key={f.code}
                    value={f.code}
                  >
                    {f.name[language as keyof Locales]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Card>
    </Box>
  )
}

export default SelectFaculty
