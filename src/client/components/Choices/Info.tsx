import React from 'react'
import { Box, Typography } from '@mui/material'
import styles from './styles'
import { InputProps, InfoType } from '../../types'

const Info = ({ watch, question, children }: InputProps) => {
  const classes = styles.cardStyles

  if (question.visibility?.options) {
    const [...options] = question.visibility.options

    const parent = watch(question.parentId.toString())

    if (!options.includes(parent)) return null
  }

  return (
    <>
      <Box justifyContent="center">
        {question.optionData.options.map((singleInfo: InfoType) => (
          <Box key={singleInfo.id} sx={classes.content}>
            <Typography variant="h6" style={classes.heading} component="div">
              {singleInfo.title.fi}
            </Typography>
            <Typography variant="body2">{singleInfo.label.fi}</Typography>
          </Box>
        ))}
      </Box>

      {children}
    </>
  )
}

export default Info
