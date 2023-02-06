import React from 'react'
import { Box } from '@mui/material'
import { InputProps, Question } from '../../types'
import SelectFaculty from './SelectFaculty'
import RenderQuestions from './RenderQuestions'
import styles from './styles'
import CheckboxSelect from './CheckboxSelect'

const RenderSurvey: React.FC<InputProps & { questions: Question[] }> = ({
  control,
  watch,
  questions,
}) => {
  const classes = styles.cardStyles
  if (!questions) return null

  const language = localStorage.getItem('language') || 'en'

  console.log(questions)

  return (
    <Box sx={{ mx: 2, maxWidth: 1080, border: 1, borderColor: 'grey.300' }}>
      <SelectFaculty control={control} />
      <Box sx={classes.card} justifyContent="center">
        {questions.map((question) => (
          <div key={question.id as any}>
            {question.parentId === null && question.priority === 0 && (
              <CheckboxSelect
                control={control}
                question={question}
                language={language}
              />
            )}

            {question.parentId === null && question.priority !== 0 && (
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
      </Box>
    </Box>
  )
}

export default RenderSurvey
