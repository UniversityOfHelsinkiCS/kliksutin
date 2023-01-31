import React from 'react'
import { Controller } from 'react-hook-form'
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

const SingleChoise: React.FC<{
  control: any
  watch: any
  question: Question
  childQuestions: Question[]
}> = ({ control, watch, question, childQuestions }) => {
  const classes = styles.cardStyles

  function generateOptions(questionData: Question) {
    return (
      <Controller
        control={control}
        name={questionData.id.toString()}
        defaultValue=""
        render={({ field }) => (
          <Box justifyContent="center">
            <RadioGroup {...field} row>
              {questionData.optionData.options.map((singleOption) => (
                <FormControlLabel
                  key={singleOption.id as any}
                  value={singleOption.id}
                  label={singleOption.label}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          </Box>
        )}
      />
    )
  }

  // Check if the option has visibility relations
  if (question.visibility?.options) {
    const [...options] = question.visibility.options

    const parent = watch(question.parentId.toString())

    if (!options.includes(parent)) return null
  }

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

      {generateOptions(question)}

      {/* Render the child questions recursively */}
      {childQuestions &&
        childQuestions.map((children) => (
          <SingleChoise
            key={children.id as any}
            control={control}
            watch={watch}
            question={children}
            childQuestions={null}
          />
        ))}
    </Box>
  )
}

export default SingleChoise
