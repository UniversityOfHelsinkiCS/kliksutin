import React, { useEffect } from 'react'
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'

import * as Sentry from '@sentry/browser'

const ErrorPage = () => {
  const error = useRouteError() as any
  const navigate = useNavigate()

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      Sentry.captureException(error.error)
    } else {
      Sentry.captureException(error)
    }
  }, [error])

  return (
    <Box
      sx={{
        my: 8,
        minHeight: '100vh',
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ my: 4, fontWeight: 'bold' }}>
          SOMETHING WENT WRONG (404)
        </Typography>
        <Typography variant="h6">
          Sorry, but something unexpected went wrong loading your page. We are
          looking into the issue.
        </Typography>
        <Button
          sx={{ mt: 4 }}
          variant="contained"
          onClick={() => navigate('/')}
        >
          Back Home
        </Button>
      </Container>
    </Box>
  )
}

export default ErrorPage
