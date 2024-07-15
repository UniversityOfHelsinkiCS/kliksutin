import React from 'react'
import { Box, Typography } from '@mui/material'

import styles from '../../styles'

const { cardStyles } = styles

const CompletionResultBox = ({ result }: { result: string }) => (
  <Box sx={cardStyles.answerBox}>
    <Typography variant='body1' sx={cardStyles.content} whiteSpace='pre-line'>
      {result.trim()}
    </Typography>
  </Box>
)

export default CompletionResultBox
