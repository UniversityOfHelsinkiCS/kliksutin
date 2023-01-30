import React from 'react'
import { CardContent, Typography, Card, Box } from '@mui/material'
import useSurvey from '../../hooks/useSurvey'

const RenderSurveyQuestions: React.FC<{ control: any; watch: any }> = ({
  control,
  watch,
}) => {
  const survey = useSurvey()

  console.log(control, watch)

  if (!survey) return null

  return (
    <Box sx={{ maxWidth: 1080 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Survey # {JSON.stringify(survey.id)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default RenderSurveyQuestions
