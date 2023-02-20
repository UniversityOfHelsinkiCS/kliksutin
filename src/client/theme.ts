import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { useMemo } from 'react'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const useTheme = () => {
  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          typography: {
            fontFamily: [
              '"Open Sans"',
              '"Helvetica"',
              '"Arial"',
              '"sans-serif"',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
          palette: {
            primary: {
              main: '#107eab',
            },
          },
        })
      ),
    []
  )

  return theme
}

export default useTheme
