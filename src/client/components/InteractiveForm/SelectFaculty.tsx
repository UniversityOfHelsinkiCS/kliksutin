/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Box, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import useFaculties from '../../hooks/useFaculties'
import useUserFaculties from '../../hooks/useUserFaculties'
import Markdown from '../Common/Markdown'
import ShowMore from '../Common/ShowMore'

import { extraOrganisations, organisationInfos } from '../../util/organisations'

import styles from '../../styles'
import { InputProps, Faculty, Locales } from '../../types'

const sortFaculties = (faculties: Faculty[], language: keyof Locales) => {
  const sortedFaculties = faculties.sort((a, b) => {
    if (a.name[language] > b.name[language]) return 1
    if (a.name[language] < b.name[language]) return -1

    return 0
  })

  return sortedFaculties
}

const { cardStyles, formStyles } = styles

const FacultyInfo = ({ faculty }: { faculty: Faculty }) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n

  const facultyInfo = organisationInfos.find(
    (info) => info.code === faculty?.code
  )

  if (!facultyInfo) return null

  return (
    <Box sx={cardStyles.content}>
      <Typography component="div">
        {t('facultySelect:infoMessage')}
        <ShowMore text={facultyInfo.info[language as keyof Locales]} />
      </Typography>
    </Box>
  )
}

const SelectFaculty = ({ control }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const [faculty, setFaculty] = useState<Faculty>()
  const { faculties, isLoading: facultiesLoading } = useFaculties()
  const { userFaculties, isLoading: userFacultiesLoading } = useUserFaculties()

  useEffect(() => {
    if (userFacultiesLoading) return

    setFaculty(userFaculties[0])
  }, [userFaculties, userFacultiesLoading])

  if (facultiesLoading || userFacultiesLoading) return null

  const sortedFaculties = sortFaculties(faculties, language as keyof Locales)
  const organisations = sortedFaculties.concat(extraOrganisations)

  return (
    <Box sx={cardStyles.card}>
      <Typography variant="h5" sx={cardStyles.heading} component="div">
        {t('facultySelect:welcomeMessage')}
      </Typography>
      <Box sx={cardStyles.content}>
        <Markdown>{t('facultySelect:introMessage')}</Markdown>
      </Box>

      <Controller
        control={control}
        name="faculty"
        defaultValue={userFaculties[0]?.code || ''}
        render={({ field }) => (
          <FormControl sx={formStyles.formControl}>
            <InputLabel>{t('facultySelect:inputLabel')}</InputLabel>
            <Select
              sx={cardStyles.inputField}
              data-cy="faculty-select"
              label={t('facultySelect:inputLabel')}
              {...field}
            >
              {organisations.map((f: Faculty) => (
                <MenuItem
                  data-cy={`faculty-option-${f.code}`}
                  key={f.code}
                  value={f.code}
                  onClick={() => setFaculty(f)}
                >
                  {f.name[language as keyof Locales]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <FacultyInfo faculty={faculty} />
    </Box>
  )
}

export default SelectFaculty
