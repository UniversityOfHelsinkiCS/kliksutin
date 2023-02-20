import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { useMemo } from 'react'
import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles'

const themeOptions: ThemeOptions = {
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

  shape: {
    borderRadius: 0,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        outlined: {
          borderWidth: '2px',
          ':hover': {
            borderWidth: '2px',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
  },
}

const useTheme = () => {
  const theme = useMemo(
    () => responsiveFontSizes(createTheme(themeOptions)),
    []
  )

  return theme
}

export default useTheme
