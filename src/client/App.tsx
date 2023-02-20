import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import useTheme from './theme'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import InteractiveForm from './components/InteractiveForm/InteractiveForm'

const App = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar />
        <InteractiveForm />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
