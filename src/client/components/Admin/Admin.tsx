import React from 'react'
import { Navigate } from 'react-router-dom'

import { Typography } from '@mui/material'
import useLoggedInUser from '../../hooks/useLoggedInUser'

const Admin = () => {
  const { user, isLoading } = useLoggedInUser()

  if (isLoading) return null

  if (!user.isAdmin) return <Navigate to="/" />

  return <Typography>Admin stuff</Typography>
}
export default Admin
