import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

const Unauthorized = () => {
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
          UNAUTHORIZED (401)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6">
              Sorry, but you do not have the needed access to this page.
            </Typography>
            <Button
              sx={{ mt: 4 }}
              variant="contained"
              onClick={() => navigate('/')}
            >
              Back Home
            </Button>
          </Grid>
          {error?.response && error.response?.data && (
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

export default Unauthorized
