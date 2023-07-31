/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button
              sx={{ mt: 4 }}
              variant="contained"
              onClick={() => navigate('/')}
            >
              Back Home
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h1">404</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default NotFound
