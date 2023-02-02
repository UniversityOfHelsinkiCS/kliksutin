import React from 'react'
import { Controller } from 'react-hook-form'
import {
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material'
import Chip from '@mui/material/Chip'
import { MultipleChoice, Question } from '../../types'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const MultiChoice: React.FC<{
  control: any
  watch: any
  question: Question
  children: any
}> = ({ control, question, children }) => (
  <>
    <Controller
      name={question.id.toString()}
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id={`multiple-choise-label-${question.id}`}>
            {question.title.en}
          </InputLabel>
          <Select
            labelId={`multiple-choise-label-${question.id}`}
            multiple
            value={field.value}
            input={<OutlinedInput label={question.title.en} />}
            {...field}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((selectedChoise) => {
                  const parsedChoise = JSON.parse(selectedChoise)
                  return (
                    <Chip key={parsedChoise.id} label={parsedChoise.label} />
                  )
                })}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {question.optionData.options.map((choise: MultipleChoice) => (
              <MenuItem key={choise.id} value={JSON.stringify(choise)}>
                {choise.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />

    {children}
  </>
)

export default MultiChoice
