import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Stack, Typography } from '@mui/material'

import styles from './styles'

const Ending = () => {
  const { t } = useTranslation()
  const classes = styles.cardStyles

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
        marginBottom={4}
      >
        <Stack textAlign="center" direction="row" spacing={2}>
          <Button sx={classes.stackButton} variant="outlined">
            {t('results:proceedToExit')}
          </Button>

          <Button sx={classes.stackButton} variant="contained">
            {t('results:proceedToConsultation')}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Ending
