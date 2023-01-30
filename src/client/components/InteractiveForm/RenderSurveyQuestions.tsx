import React from 'react'
import { Box } from '@mui/material'
import useSurvey from '../../hooks/useSurvey'
import { InputProps } from '../../types'
import SingleChoise from './SingleChoise'
import SelectFaculty from '../Form/SelectFaculty'

const RenderSurveyQuestions: React.FC<InputProps> = ({ control }) => {
  const survey = useSurvey()

  if (!survey) return null

  return (
    <Box sx={{ maxWidth: 640 }}>
      <SelectFaculty control={control} />
      <Box justifyContent="center">
        {survey.Questions.map((question) => (
          <SingleChoise
            key={question.id as any}
            question={question}
            control={control}
          />
        ))}
      </Box>
    </Box>
  )
}

export default RenderSurveyQuestions
