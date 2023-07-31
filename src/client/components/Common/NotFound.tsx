import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

const NotFound = () => {
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
          PAGE NOT FOUND (404)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} margin="auto">
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
          <Grid item xs={6}>
            <Typography variant="h6">
              If you want, you can also give us{' '}
              <a href="mailto:opetusteknologia@helsinki.fi">feedback</a>.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default NotFound
