import React from 'react'
import { CardContent, Typography, Card, Box } from '@mui/material'
import { Controller } from 'react-hook-form'
import useSurvey from '../../hooks/useSurvey'
import { InputProps } from '../../types'
import SingleChoise from './SingleChoise'

const RenderSurveyQuestions: React.FC<InputProps> = ({ control }) => {
  const survey = useSurvey()

  if (!survey) return null
  console.log(survey)
  return (
    <Box sx={{ maxWidth: 1080 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Survey # {JSON.stringify(survey.id)}
          </Typography>
        </CardContent>

        <Controller
          control={control}
          name={survey.name as string}
          defaultValue=""
          render={({ field }) => (
            <Box display="flex" justifyContent="center">
              {survey.Questions.map((question) => (
                <SingleChoise
                  key={question.id as any}
                  field={field}
                  question={question}
                />
              ))}
            </Box>
          )}
        />
      </Card>
    </Box>
  )
}

export default RenderSurveyQuestions
