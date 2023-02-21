import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'

import useTheme from './theme'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import Router from './Router'

const App = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar />
        <Box flexGrow={1}>
          <Router />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
