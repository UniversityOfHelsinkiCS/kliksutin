import React from 'react'
import { Box } from '@mui/material'
import { InputProps, Question } from '../../types'
import SelectFaculty from '../Form/SelectFaculty'
import RenderQuestions from './RenderQuestions'

const RenderSurvey: React.FC<InputProps & { questions: Question[] }> = ({
  control,
  watch,
  questions,
}) => {
  if (!questions) return null

  return (
    <Box sx={{ maxWidth: 1080 }}>
      <SelectFaculty control={control} />
      <Box justifyContent="center">
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
