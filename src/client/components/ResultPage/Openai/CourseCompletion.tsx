import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Typography, TextField, Stack } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import { UseFormWatch, FieldValues } from 'react-hook-form'

import useOpenaiCompletion from '../../../hooks/useOpenaiCompletion'
import useUserCourses from '../../../hooks/useUserCourses'
import CompletionResultBox from './CompletionResultBox'
import LoadingProgress from '../../Common/LoadingProgress'
import styles from '../../../styles'
import { Locales } from '../../../types'

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

const CourseCompletion = ({ watch }: { watch: UseFormWatch<FieldValues> }) => {
  const { t, i18n } = useTranslation()
  const [name, setName] = useState('')
  const [showCompletion, setShowCompletion] = useState(false)

  const { userCourses, isLoading } = useUserCourses()

  if (isLoading) return null

  const courseId = watch('course')
  const selectedCourse = userCourses.find(({ id }) => id === courseId)
  const courseName = selectedCourse?.name[i18n.language as keyof Locales]

  const save = sessionStorage.getItem(
    `curre-openAI-course-${courseName || name}`
  )

  return (
    <Box sx={cardStyles.nestedSubSection}>
      <Box sx={cardStyles.content}>
        {courseName ? (
          <>
            <Typography variant="body2">
              {t('openai:courseInfoText')}
            </Typography>
            <Typography variant="body1" sx={cardStyles.content}>
              {courseName}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body2">
              {t('openai:giveCourseInfoText')}
            </Typography>
            <TextField
              sx={cardStyles.inputField}
              required
              size="small"
              value={name}
              onChange={({ target }) => setName(target.value)}
              disabled={showCompletion}
            />
          </>
        )}

        {!save ? (
          <>
            <Stack sx={formStyles.stack} direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowCompletion(true)}
                disabled={showCompletion || (!courseName && name.length < 5)}
              >
                {t('openai:send')}
              </Button>

              {courseId === 'OTHER' && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setName('')
                    setShowCompletion(false)
                  }}
                  disabled={name.length === 0}
                >
                  {t('openai:zero')}
                </Button>
              )}
            </Stack>

            {showCompletion && (
              <CompletionResult
                courseName={name || courseName}
                setShowCompletion={setShowCompletion}
              />
            )}
          </>
        ) : (
          <CompletionResultBox result={save} />
        )}
      </Box>
    </Box>
  )
}

export default CourseCompletion
