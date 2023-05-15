import React from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'

import { Box, Tab, Tabs } from '@mui/material'
import useLoggedInUser from '../../hooks/useLoggedInUser'

const Admin = () => {
  const location = useLocation()
  const { user, isLoading } = useLoggedInUser()

  if (isLoading) return null

  if (!user.isAdmin) return <Navigate to="/" />

  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={location.pathname}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab component={Link} to="." label="Admin" value="/admin" />
        <Tab
          component={Link}
          to="./edit-questions"
          label="Edit Questions"
          value="/admin/edit-questions"
        />
        <Tab
          component={Link}
          to="./edit-results"
          label="Edit Results"
          value="/admin/edit-results"
        />
      </Tabs>
      <Outlet />
    </Box>
  )
}
export default Admin
