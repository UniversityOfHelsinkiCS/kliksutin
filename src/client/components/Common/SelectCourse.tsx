import React from 'react'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { Locales, Course } from '@backend/types'

import { useUserCourses } from '../../hooks/useCourses'

import Markdown from './Markdown'

import { getCourseName, otherCourse, sortCourses } from '../../util/courses'

import styles from '../../styles'

import { InputProps } from '../../types'

const SelectCourse = ({ control }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { userCourses, isLoading } = useUserCourses()

  const { language } = i18n

  if (isLoading || !userCourses || userCourses.length === 0) return null

  const { cardStyles, formStyles } = styles

  const filteredCourses: Course[] = userCourses.map((course) => {
    const name = getCourseName(course, language as keyof Locales)

    return { ...course, name }
  })

  const sortedCourses = sortCourses(filteredCourses).concat(otherCourse)

  return (
    <Box sx={cardStyles.card}>
      <Box sx={cardStyles.content}>
        <Markdown>{t('courseSelect:introMessage')}</Markdown>
      </Box>

      <Controller
        control={control}
        name='course'
        defaultValue=''
        render={({ field }) => (
          <FormControl sx={formStyles.formControl}>
            <InputLabel>{t('courseSelect:inputLabel')}</InputLabel>
            <Select
              sx={cardStyles.inputField}
              data-cy='course-select'
              label={t('courseSelect:inputLabel')}
              {...field}
            >
              {sortedCourses.map((c: Course) => {
                const courseCode = c.courseUnits ? c.courseUnits[0]?.code : ''
                return (
                  <MenuItem
                    data-cy={`course-option-${c.id}`}
                    key={c.id}
                    value={c.id}
                  >
                    {courseCode} {c.name[language as keyof Locales]}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        )}
      />
    </Box>
  )
}

export default SelectCourse
