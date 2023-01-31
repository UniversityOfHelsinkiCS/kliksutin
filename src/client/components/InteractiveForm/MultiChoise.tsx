import React, { useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import { Box, Card, CardContent, Typography } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { MultipleChoice, Question } from '../../types'
import styles from './styles'

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

function getStyles(name: string, itemName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      itemName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const MultiChoise: React.FC<{
  control: any
  watch: any
  question: Question
  childQuestions: Question[]
}> = ({ control, watch, question, childQuestions }) => {
  const theme = useTheme()
  const [item, setItem] = useState<string[]>([])

  const classes = styles.cardStyles

  const handleChange = (event: SelectChangeEvent<typeof item>) => {
    const {
      target: { value },
    } = event
    setItem(typeof value === 'string' ? value.split(',') : value)
  }

  console.log(control, watch, childQuestions)

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

      <FormControl sx={{ m: 1, width: 480, maxWidth: '80%' }}>
        <InputLabel id={`multiple-choise-label-${question.id}`}>
          {question.title.en}
        </InputLabel>
        <Select
          labelId={`multiple-choise-label-${question.id}`}
          multiple
          value={item}
          onChange={handleChange}
          input={<OutlinedInput label={question.title.en} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {question.optionData.options.map((choise: MultipleChoice) => (
            <MenuItem
              key={choise.id}
              value={choise.label}
              style={getStyles(choise.label, item, theme)}
            >
              {choise.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default MultiChoise
