import React, { BaseSyntheticEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Stack } from '@mui/material'
import useSurvey from '../../hooks/useSurvey'
import { InputProps } from '../../types'
import SelectFaculty from './SelectFaculty'
import RenderQuestions from './RenderQuestions'
import { getSelectedDimensions } from '../../util/dimensions'
import { FORM_DATA_KEY } from '../../../config'
import styles from './styles'

const RenderSurvey = ({ control, watch, handleSubmit }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { survey, isLoading } = useSurvey()
  const classes = styles.cardStyles
  const savedData = sessionStorage.getItem(FORM_DATA_KEY)
  const [showQuestions, setShowQuestions] = useState(
    savedData && savedData !== '{}'
  )

  const { language } = i18n

  const dimensions = getSelectedDimensions(survey, watch)

  const isAllowedToProceed = () => {
    const isFacultySelected = watch('faculty') !== ''

    return isFacultySelected && dimensions.length > 0
  }

  const submitFormData = (event: BaseSyntheticEvent) => {
    handleSubmit(event)
  }

  if (isLoading) return null

  const questions = survey.Questions

  const resetForm = () => {
    sessionStorage.removeItem(FORM_DATA_KEY)
    window.location.reload()
  }

  return (
    <Box sx={{ mx: 2, maxWidth: 1080, border: 1, borderColor: 'grey.300' }}>
      <SelectFaculty control={control} />
      <Box sx={classes.card} justifyContent="center">
        {questions.map((question) => (
          <div key={question.id}>
            {question.parentId === null && question.priority === 0 && (
              <RenderQuestions
                control={control}
                watch={watch}
                question={question}
                questions={questions}
                language={language}
              />
            )}

            {showQuestions &&
              question.parentId === null &&
              question.priority !== 0 && (
                <RenderQuestions
                  control={control}
                  watch={watch}
                  question={question}
                  questions={questions}
                  language={language}
                />
              )}
          </div>
        ))}

        <Box textAlign="center">
          {!showQuestions ? (
            <Button
              data-cy="open-form-button"
              disabled={dimensions && !isAllowedToProceed()}
              onClick={() => setShowQuestions(true)}
            >
              {t('openForm')}
            </Button>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginY={4}
            >
              <Stack textAlign="center" direction="row" spacing={2}>
                <Button
                  type="submit"
                  data-cy="submit-form-button"
                  variant="contained"
                  onClick={submitFormData}
                >
                  {t('submit')}
                </Button>
                <Button
                  type="button"
                  data-cy="reset-form-button"
                  onClick={resetForm}
                >
                  {t('reset')}
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RenderSurvey
