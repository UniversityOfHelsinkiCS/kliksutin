import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import CssBaseline from '@mui/material/CssBaseline'

import { PUBLIC_URL } from '../config'
import queryClient from './util/queryClient'
import App from './App'
import initializeSentry from './util/sentry'
import initializeI18n from './util/il18n'

initializeSentry()
initializeI18n()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
