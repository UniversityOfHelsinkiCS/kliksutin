import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'

import { useTheme } from './theme'

import { ResultDataProvider } from './contexts/ResultDataContext'

import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider preventDuplicate>
        <ResultDataProvider>
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <NavBar />
            <Box
              flexGrow={1}
              display='flex'
              justifyContent='center'
              alignItems='center'
              minHeight='100vh'
            >
              <Outlet />
            </Box>
            <Footer />
          </Box>
        </ResultDataProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
