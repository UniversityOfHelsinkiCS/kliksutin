import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { Box, Button, Typography, TextField, Stack } from '@mui/material'

import { Locales } from '@backend/types'

import useOpenaiCompletion from '../../hooks/useOpenaiCompletion'
import useUserCourses from '../../hooks/useUserCourses'

import CompletionResultBox from './CompletionResultBox'
import LoadingProgress from '../Common/LoadingProgress'

import styles from '../../styles'
import { useResultData } from '../../contexts/ResultDataContext'

const { cardStyles, formStyles } = styles

const CompletionResult = ({
  courseName,
  setShowCompletion,
}: {
  courseName: string
  setShowCompletion: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t } = useTranslation()
  const prompt = t('openai:courseCompletionPrompt', { courseName })

  const { completion, isLoading } = useOpenaiCompletion(
    prompt,
    `course-${courseName}`
  )

  if (isLoading) return <LoadingProgress />

  if (!completion) {
    enqueueSnackbar(t('openai:apiErrorMessage'), { variant: 'error' })
    setShowCompletion(false)

    return null
  }

  return <CompletionResultBox result={completion} />
}

const CourseCompletion = () => {
  const { t, i18n } = useTranslation()
  const [name, setName] = useState('')
  const [showCompletion, setShowCompletion] = useState(false)

  const { userCourses, isLoading } = useUserCourses()
  const { resultData } = useResultData()

  const { language } = i18n

  const courseId = resultData?.course || ''

  useEffect(() => {
    if (isLoading || !userCourses) return

    const selectedCourse = userCourses.find(({ id }) => id === courseId)

    if (!selectedCourse) {
      setName('')
      return
    }

    const courseName =
      selectedCourse.name[language as keyof Locales].length >
      selectedCourse.nameSpecifier[language as keyof Locales].length
        ? selectedCourse?.name[language as keyof Locales]
        : selectedCourse?.nameSpecifier[language as keyof Locales]

    setName(courseName)
  }, [courseId, isLoading, language, userCourses])

  if (isLoading) return null

  const save = sessionStorage.getItem(`curre-openAI-course-${name}`)

  return (
    <Box sx={cardStyles.nestedSubSection}>
      <Typography variant="body2">{t('openai:giveCourseInfoText')}</Typography>
      <Box sx={cardStyles.content}>
        <TextField
          sx={cardStyles.inputField}
          required
          size="small"
          value={name}
          onChange={({ target }) => setName(target.value)}
          disabled={showCompletion}
        />

        <Stack sx={formStyles.stack} direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowCompletion(true)}
            disabled={!!save || showCompletion || name?.length < 5}
          >
            {t('openai:send')}
          </Button>

          <Button
            color="primary"
            onClick={() => {
              setName('')
              setShowCompletion(false)
            }}
            disabled={name?.length === 0}
          >
            {t('openai:zero')}
          </Button>
        </Stack>

        {!save && showCompletion && (
          <CompletionResult
            courseName={name}
            setShowCompletion={setShowCompletion}
          />
        )}

        {save && <CompletionResultBox result={save} />}
      </Box>
    </Box>
  )
}

export default CourseCompletion
