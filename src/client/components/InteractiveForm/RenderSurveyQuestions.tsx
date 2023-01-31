import React from 'react'
import { Box } from '@mui/material'
import { InputProps, Question } from '../../types'
import SingleChoise from './SingleChoise'
import SelectFaculty from '../Form/SelectFaculty'

const RenderSurveyQuestions: React.FC<
  InputProps & { questions: Question[] }
> = ({ control, watch, questions }) => {
  if (!questions) return null

  return (
    <Box sx={{ maxWidth: 1080 }}>
      <SelectFaculty control={control} />
      <Box justifyContent="center">
        {questions.map((question) => (
          <div key={question.id as any}>
            {question.parentId === null && (
              <SingleChoise
                key={question.id as any}
                control={control}
                watch={watch}
                question={question}
                childQuestions={questions.filter(
                  (childQuestion) => question.id === childQuestion.parentId
                )}
              />
            )}
          </div>
        ))}
      </Box>
    </Box>
  )
}

export default RenderSurveyQuestions
