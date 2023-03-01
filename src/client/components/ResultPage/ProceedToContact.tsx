import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Stack, Typography, Alert } from '@mui/material'

import styles from './styles'

const ProceedToContact = () => {
  const { t } = useTranslation()
  const [showEndMessage, setShowEndMessage] = useState(false)

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
            onClick={() => setShowEndMessage(true)}
          >
            {t('results:proceedToExit')}
          </Button>
          <Button
            sx={classes.stackButton}
            variant="outlined"
            component={Link}
            state={{ resultHTML: resultHTML.outerHTML }}
            to="/contact"
          >
            {t('results:proceedToConsultation')}
          </Button>
        </Stack>
      </Box>
      {showEndMessage && (
        <Alert sx={{ ml: 3, width: 400 }} severity="success">
          {t('results:endMessage')}
        </Alert>
      )}
    </Box>
  )
}

export default ProceedToContact
