import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button, Stack } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'

import SelectCourse from './SelectCourse'
import SelectFaculty from './SelectFaculty'
import RenderQuestions from './RenderQuestions'
import ResetForm from '../Common/ResetForm'

import { getSelectedDimensionsFromWatch } from '../../util/dimensions'
import { FORM_DATA_KEY } from '../../../config'

import { InputProps } from '../../types'
import styles from '../../styles'

const RenderSurvey = ({ control, watch, isSubmitted }: InputProps) => {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const { survey, isLoading } = useSurvey()

  const savedData = sessionStorage.getItem(FORM_DATA_KEY)
  const [showQuestions, setShowQuestions] = useState(
    savedData && savedData !== '{}'
  )

  if (!survey || !watch) return null

  const { cardStyles, formStyles } = styles

  const { language } = i18n

  if (isLoading) return null

  const questions = survey.Questions
  const dimensions = getSelectedDimensionsFromWatch(survey, watch)

  const isAllowedToProceed = () => {
    const isFacultySelected = watch('faculty') !== ''

    if (!dimensions) return false

    return isFacultySelected && dimensions.length > 0
  }

  return (
    <Box sx={cardStyles.outerBox}>
      <SelectFaculty control={control} />
      {location.pathname !== '/public' && <SelectCourse control={control} />}
      <Box sx={cardStyles.card}>
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

        <Box sx={formStyles.stackBox}>
          {!showQuestions ? (
            <Button
              data-cy="open-form-button"
              disabled={!!dimensions && !isAllowedToProceed()}
              onClick={() => setShowQuestions(true)}
            >
              {t('openForm')}
            </Button>
          ) : (
            <Box sx={formStyles.stackBoxWrapper}>
              <Stack sx={formStyles.stack} direction="row">
                <Button
                  sx={formStyles.stackButton}
                  type="submit"
                  data-cy="submit-form-button"
                  variant="contained"
                >
                  {isSubmitted ? t('updateSubmit') : t('submit')}
                </Button>
                <ResetForm />
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RenderSurvey
