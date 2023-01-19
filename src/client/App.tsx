import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'

import useTheme from './theme'
import Form from './components/Form/Form'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign="center">
        <NavBar />
        <Form />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
