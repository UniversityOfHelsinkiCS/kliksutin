import React from 'react'
import { Navigate } from 'react-router-dom'

import { Box } from '@mui/material'
import useLoggedInUser from '../../hooks/useLoggedInUser'
import EditResults from './EditResults/EditResults'

const Admin = () => {
  const { user, isLoading } = useLoggedInUser()

  if (isLoading) return null

  if (!user.isAdmin) return <Navigate to="/" />

  return (
    <Box alignSelf="flex-start">
      <EditResults />
    </Box>
  )
}
export default Admin
