import React from 'react'
import { Box } from '@mui/material'
import { InputProps, Question } from '../../types'
import SelectFaculty from './SelectFaculty'
import RenderQuestions from './RenderQuestions'
import styles from './styles'

const RenderSurvey: React.FC<InputProps & { questions: Question[] }> = ({
  control,
  watch,
  questions,
}) => {
  const classes = styles.cardStyles
  if (!questions) return null

  return (
    <Box sx={{ mx: 2, maxWidth: 1080, border: 1, borderColor: 'grey.300' }}>
      <SelectFaculty control={control} />
      <Box sx={classes.card} justifyContent="center">
        {questions.map((question) => (
          <div key={question.id as any}>
            {question.parentId === null && (
              <RenderQuestions
                control={control}
                watch={watch}
                question={question}
                questions={questions}
              />
            )}
          </div>
        ))}
      </Box>
    </Box>
  )
}

export default RenderSurvey
