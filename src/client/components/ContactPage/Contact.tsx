import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'
import styles from './styles'
import Ticket from './Ticket'

const classes = styles.cardStyles

const Contact = () => {
  const { t } = useTranslation()
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [contactMethod, setContactMethod] = useState('email')

  const components: { [key: string]: () => JSX.Element } = {
    email: Ticket,
  }

  const ContactComponent = components[contactMethod]

  if (!ContactComponent) return null

  return (
    <Box sx={{ m: 2, maxWidth: 1080, border: 1, borderColor: 'grey.300' }}>
      <Container sx={{ mt: 2 }}>
        <Typography variant="h5" sx={classes.heading} component="div">
          {t('contact:title')}
        </Typography>
        <Typography sx={classes.content} variant="body2">
          {t('contact:contactMessage')}
        </Typography>

        <ContactComponent />
      </Container>
    </Box>
  )
}

export default Contact
