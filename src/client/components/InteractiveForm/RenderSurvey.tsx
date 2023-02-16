import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { InputProps } from '../../types'
import SelectFaculty from './SelectFaculty'
import RenderQuestions from './RenderQuestions'
import styles from './styles'

const RenderSurvey: React.FC<InputProps> = ({
  control,
  watch,
  questions,
  handleSubmit,
}) => {
  const { t } = useTranslation()
  const classes = styles.cardStyles
  const [showQuestions, setShowQuestions] = useState(false)

  if (!questions) return null

  const language = localStorage.getItem('language') || 'en'

  return (
    <Box sx={{ mx: 2, maxWidth: 1080, border: 1, borderColor: 'grey.300' }}>
      <SelectFaculty control={control} />
      <Box sx={classes.card} justifyContent="center">
        {questions.map((question) => (
          <div key={question.id as any}>
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
              id="open-form-button"
              onClick={() => setShowQuestions(true)}
            >
              {t('openForm')}
            </Button>
          ) : (
            <Button id="submit-form-button" onClick={handleSubmit}>
              {t('submit')}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RenderSurvey
