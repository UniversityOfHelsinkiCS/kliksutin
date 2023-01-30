import React from 'react'
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import { Question } from '../../types'
import styles from './styles'

const SingleChoise: React.FC<{ field: any; question: Question }> = ({
  field,
  question,
}) => {
  const classes = styles.cardStyles
  console.log('Question:', question)
  const generateOptions = () =>
    question.optionData.options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.id as any}
        value={singleOption.id}
        label={singleOption.label}
        control={<Radio />}
      />
    ))
  return (
    <Box sx={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" style={classes.heading} component="div">
            {question.title.en}
          </Typography>
          <Box sx={classes.content}>
            <Typography variant="body2">{question.text.en}</Typography>
          </Box>
        </CardContent>
      </Card>

      <RadioGroup {...field} row>
        {generateOptions()}
      </RadioGroup>
    </Box>
  )
}

export default SingleChoise
