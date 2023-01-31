import React from 'react'
import { Controller } from 'react-hook-form'
import { RadioGroup, FormControlLabel, Radio, Box } from '@mui/material'
import RenderQuestions from './RenderQuestions'
import { Question } from '../../types'

const SingleChoise: React.FC<{
  control: any
  watch: any
  question: Question
  childQuestions: Question[]
}> = ({ control, watch, question, childQuestions }) => {
  // Check if the option has visibility relations
  if (question.visibility?.options) {
    const [...options] = question.visibility.options

    const parent = watch(question.parentId.toString())

    if (!options.includes(parent)) return null
  }

  return (
    <>
      <Controller
        control={control}
        name={question.id.toString()}
        defaultValue=""
        render={({ field }) => (
          <Box justifyContent="center">
            <RadioGroup {...field} row>
              {question.optionData.options.map((singleOption) => (
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

      {/* Render the child questions recursively is this even legal? */}
      {childQuestions &&
        childQuestions.map((children) => (
          <RenderQuestions
            key={children.id as any}
            control={control}
            watch={watch}
            question={children}
            questions={childQuestions}
          />
        ))}
    </>
  )
}

export default SingleChoise
