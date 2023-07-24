import React from 'react'
import { Box, Stack } from '@mui/material'

import ResetForm from './ResetForm'

import { InputProps } from '../../types'
import styles from '../../styles'

const SurveyButtons = ({ children }: InputProps) => {
  const { formStyles } = styles

  return (
    <Box sx={formStyles.stackBoxWrapper}>
      <Stack sx={formStyles.stack} direction="row">
        {children}

        <ResetForm />
      </Stack>
    </Box>
  )
}

export default SurveyButtons
