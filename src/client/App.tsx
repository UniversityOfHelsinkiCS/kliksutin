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
        <Box
          flexGrow={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Router />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
