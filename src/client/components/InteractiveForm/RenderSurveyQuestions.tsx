import React from 'react'
import { Box } from '@mui/material'
import { InputProps, Question } from '../../types'
import SingleChoise from './SingleChoise'
import SelectFaculty from '../Form/SelectFaculty'

const RenderSurveyQuestions: React.FC<
  InputProps & { questions: Question[] }
> = ({ control, questions }) => {
  if (!questions) return null

  return (
    <Box sx={{ maxWidth: 1080 }}>
      <SelectFaculty control={control} />
      <Box justifyContent="center">
        {questions.map((question) => (
          <div>
            {question.parentId === null && (
              <SingleChoise
                key={question.id as any}
                question={question}
                control={control}
              >
                {questions
                  .filter(
                    (childQuestion) => question.id === childQuestion.parentId
                  )
                  .map((q) => (
                    <div>{JSON.stringify(q)}</div>
                  ))}
              </SingleChoise>
            )}
          </div>
        ))}
      </Box>
    </Box>
  )
}

export default RenderSurveyQuestions
