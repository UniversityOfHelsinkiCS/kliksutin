import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

const NotFound = () => {
  const error = useRouteError() as any
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        my: 8,
        minHeight: '100vh',
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ my: 4, fontWeight: 'bold' }}>
          NOT FOUND (404)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6">
              Sorry, but the page cannot be found. The page may have been moved
              or deleted.
            </Typography>
            <Button
              sx={{ mt: 4 }}
              variant="contained"
              onClick={() => navigate('/')}
            >
              Back Home
            </Button>
          </Grid>
          {error.response && error.response.data && (
            <Grid item xs={6}>
              <Typography variant="h6">
                Error details:
                <Typography variant="body2" whiteSpace="pre-wrap">
                  {JSON.stringify(error.response.data, null, 2)}
                </Typography>
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default NotFound
