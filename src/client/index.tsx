import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import { PUBLIC_URL } from '../config'
import App from './App'
import initializeSentry from './util/sentry'
import initializeI18n from './util/il18n'

initializeSentry()
initializeI18n()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </BrowserRouter>
  </React.StrictMode>
)
