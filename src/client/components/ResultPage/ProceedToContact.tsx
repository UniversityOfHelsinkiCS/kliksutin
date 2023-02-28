import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Stack, Typography } from '@mui/material'

import styles from './styles'

const ProceedToContact = () => {
  const { t } = useTranslation()

  const classes = styles.cardStyles

  const resultHTML = document.getElementById('result-component')

  if (!resultHTML) return null

  return (
    <Box>
      <Container sx={{ mt: 12 }}>
        <Typography variant="h6" sx={classes.heading} component="div">
          {t('results:proceedTitle')}
        </Typography>
      </Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginY={4}
      >
        <Stack textAlign="center" direction="row" spacing={2}>
          <Button
            sx={classes.stackButton}
            variant="contained"
            component={Link}
            state={{ resultHTML: resultHTML.outerHTML }}
            to="/contact"
          >
            {t('results:proceedToConsultation')}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default ProceedToContact
