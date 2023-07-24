import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'

import SelectCourse from './SelectCourse'
import SelectFaculty from './SelectFaculty'

import { InputProps } from '../../types'

const RenderSelections = ({ control }: InputProps) => {
  const location = useLocation()

  return (
    <Box>
      <SelectFaculty control={control} />
      {location.pathname !== '/public' && <SelectCourse control={control} />}
    </Box>
  )
}

export default RenderSelections
