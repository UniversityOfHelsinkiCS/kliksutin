import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import {
  Box,
  FormControl,
  Checkbox,
  FormControlLabel,
  IconButton,
  Collapse,
  Typography,
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { MultipleChoiceType, InputProps } from '../../types'

const ShowMore = ({ text }: { text: string }) => {
  const [expand, setExpand] = useState(false)

  return (
    <>
      <IconButton onClick={() => setExpand(!expand)}>
        {!expand ? <ExpandMore /> : <ExpandLess />}
      </IconButton>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <Typography paragraph>{text}</Typography>
      </Collapse>
    </>
  )
}

const MultiChoice = ({ control, question, children, language }: InputProps) => (
  <>
    {question.optionData.options.map((choice: MultipleChoiceType) => (
      <Controller
        key={choice.id}
        name={`${question.id}.${choice.id}`}
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControl sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    value={choice.id}
                    checked={field.value}
                  />
                }
                label={choice.label[language]}
              />
              <ShowMore text={choice.data[language]} />
            </Box>
          </FormControl>
        )}
      />
    ))}

    {children}
  </>
)

export default MultiChoice
