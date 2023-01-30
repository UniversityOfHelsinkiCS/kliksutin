import React from 'react'
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  CardContent,
  Typography,
  Card,
  Box,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { Survey } from '../../types'

const SingleChoise: React.FC<{ control: any; survey: Survey }> = ({
  control,
  survey,
}) => {
  const generateOptions = () =>
    survey.questions.map((singleOption) => (
      <FormControlLabel
        key={singleOption.id}
        value={singleOption.id}
        label={singleOption.title.en}
        control={<Radio />}
      />
    ))
  return (
    <Box sx={{ maxWidth: 1080 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Survey # {JSON.stringify(survey.id)}
          </Typography>
        </CardContent>
      </Card>

      <Controller
        control={control}
        name={survey.name as string}
        defaultValue=""
        render={({ field }) => (
          <Box display="flex" justifyContent="center">
            <RadioGroup {...field} row>
              {generateOptions()}
            </RadioGroup>
          </Box>
        )}
      />
    </Box>
  )
}

export default SingleChoise
