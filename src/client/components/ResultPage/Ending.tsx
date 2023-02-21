import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import styles from './styles'

const Ending = () => {
  const { t } = useTranslation()
  const [openMailPrompt, setOpenMailPrompt] = useState(false)
  const classes = styles.cardStyles

  return (
    <Box>
      <Container sx={{ mt: 12 }}>
        <Typography variant="h6" sx={classes.heading} component="div">
          {t('results:proceedTitle')}
        </Typography>
        {openMailPrompt && (
          <Typography variant="body2" sx={classes.content}>
            {t('results:proceedEmailInfoText')}
          </Typography>
        )}
      </Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginY={4}
      >
        <Stack textAlign="center" direction="row" spacing={2}>
          {!openMailPrompt ? (
            <>
              <Button
                sx={classes.stackButton}
                variant="outlined"
                onClick={() => setOpenMailPrompt(true)}
              >
                {t('results:proceedToExit')}
              </Button>
              <Button sx={classes.stackButton} variant="contained">
                {t('results:proceedToConsultation')}
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h6" sx={classes.heading} component="div">
                {t('results:proceedEnterMail')}
              </Typography>
              <TextField
                label="email"
                defaultValue=""
                placeholder="opettaja@helsinki.fi"
                size="small"
              />
            </>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default Ending
