import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import { inProduction, inStaging } from '../config'
import useTheme from './theme'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import InteractiveForm from './components/InteractiveForm/InteractiveForm'
import Form from './components/Form/Form'

const App = () => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign="center">
        <NavBar />
        {inProduction || inStaging ? <Form /> : <InteractiveForm />}
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
