import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

import { Box, Tab, Tabs } from '@mui/material'
import useLoggedInUser from '../../hooks/useLoggedInUser'

const Admin = () => {
  const { user, isLoading } = useLoggedInUser()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

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
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab component={Link} to="./edit-questions" label="Edit Questions" />
        <Tab component={Link} to="./edit-results" label="Edit Results" />
      </Tabs>
      <Outlet />
    </Box>
  )
}
export default Admin
