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

interface Option {
  label: string
  value: string
}

interface QuestionData {
  id: Number
  heading: {
    label: String
    value: String
  }
  text: String[]
  options: Option[]
}

interface InputProps {
  control: any
  questionData: QuestionData
}

const FormOptionBox: React.FC<InputProps> = ({ control, questionData }) => {
  const generateOptions = () =>
    questionData.options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.value}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ))
  return (
    <Box sx={{ maxWidth: 1080 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Choise # {JSON.stringify(questionData.id)}
          </Typography>
          <Typography variant="h5" component="div">
            {questionData.heading.label}
          </Typography>
          <Box>
            {questionData.text.map((singleText) => (
              <Typography variant="body2">{singleText}</Typography>
            ))}
          </Box>
        </CardContent>
      </Card>

      <Controller
        control={control}
        name={questionData.heading.value as string}
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

export default FormOptionBox
