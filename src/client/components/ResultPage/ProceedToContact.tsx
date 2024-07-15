import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Stack, Typography, Alert } from '@mui/material'

import styles from '../../styles'

const ProceedToContact = () => {
  const { t } = useTranslation()
  const [showEndMessage, setShowEndMessage] = useState(false)

  const { cardStyles, formStyles, resultStyles, common } = styles

  const endSession = () => {
    setShowEndMessage(true)
    sessionStorage.clear()
  }

  return (
    <Box>
      <Container sx={resultStyles.contactStackWrapper}>
        <Typography variant='h6' sx={cardStyles.heading} component='div'>
          {t('results:proceedTitle')}
        </Typography>
      </Container>
      <Box sx={formStyles.stackBoxWrapper}>
        {showEndMessage ? (
          <Alert
            data-cy='form-close-success-alert'
            sx={common.alertStyle}
            severity='success'
          >
            {t('results:endMessage')}
          </Alert>
        ) : (
          <Stack sx={formStyles.stack} direction='row' spacing={2}>
            <Button
              data-cy='button-of-happiness'
              sx={formStyles.stackButton}
              variant='contained'
              onClick={endSession}
            >
              {t('results:proceedToExit')}
            </Button>
            <Button
              data-cy='button-of-confusion'
              sx={formStyles.stackButton}
              variant='outlined'
              component={Link}
              to='/contact'
            >
              {t('results:proceedToConsultation')}
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  )
}

export default ProceedToContact
