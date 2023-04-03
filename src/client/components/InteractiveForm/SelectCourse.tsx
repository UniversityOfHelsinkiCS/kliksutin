import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box } from '@mui/material'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styles from '../../styles'
import { Course, InputProps, Locales } from '../../types'
import Markdown from '../Common/Markdown'
import useUserCourses from '../../hooks/useUserCourses'

const SelectCourse = ({ control }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const [course, setCourse] = useState('')
  const { userCourses } = useUserCourses()

  const handleChange = (event: SelectChangeEvent) => {
    setCourse(event.target.value)
  }

  const { cardStyles, formStyles } = styles

  return (
    <Box sx={cardStyles.card}>
      <Box sx={cardStyles.content}>
        <Markdown>{t('courseSelect:introMessage')}</Markdown>
      </Box>

      <Controller
        control={control}
        name="course"
        defaultValue=""
        render={({ field }) => (
          <FormControl sx={formStyles.formControl}>
            <InputLabel>{t('courseSelect:inputLabel')}</InputLabel>
            <Select
              data-cy="course-select"
              value={course}
              label={t('courseSelect:inputLabel')}
              onChange={handleChange}
              {...field}
            >
              {(userCourses || []).map((c: Course) => (
                <MenuItem
                  data-cy={`course-option-${c.id}`}
                  key={c.id}
                  value={c.id}
                >
                  {c.name[language as keyof Locales]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
    </Box>
  )
}

export default SelectCourse
