import React from 'react'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Box } from '@mui/material'
import useUserCourses from '../../hooks/useUserCourses'
import Markdown from '../Common/Markdown'
import otherCourse from '../../util/courses'
import styles from '../../styles'
import { Course, InputProps, Locales } from '../../types'

const sortCourses = (courses: Course[]) => {
  const sortedCourses = courses.sort((a, b) => {
    if (
      !a?.courseUnits ||
      !b?.courseUnits ||
      a.courseUnits.length === 0 ||
      b.courseUnits.length === 0
    )
      return -1

    const aCode = a.courseUnits ? a.courseUnits[0]?.code : ''
    const bCode = b.courseUnits ? b.courseUnits[0]?.code : ''
    if (aCode > bCode) return 1
    if (aCode < bCode) return -1

    return 0
  })

  return sortedCourses
}

const SelectCourse = ({ control }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { userCourses, isLoading } = useUserCourses()

  const { language } = i18n

  if (isLoading || userCourses.length === 0) return null

  const { cardStyles, formStyles } = styles

  const filteredCourses: Course[] = userCourses.map((c: Course) => {
    const name =
      c.name[language as keyof Locales].length >
      c.nameSpecifier[language as keyof Locales].length
        ? c.name
        : c.nameSpecifier

    return { ...c, name }
  })

  const sortedCourses = sortCourses(filteredCourses).concat(otherCourse)

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
              sx={cardStyles.inputField}
              data-cy="course-select"
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
