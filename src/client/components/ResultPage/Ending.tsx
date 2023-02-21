import React, { useState } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import styles from './styles'

const classes = styles.cardStyles

const EmailForm = () => {
  const { t } = useTranslation()

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <Box px={3} py={2}>
      <Typography variant="h6" sx={classes.heading} component="div">
        {t('results:proceedEnterMail')}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              size="small"
              name="email"
              label="Email"
              fullWidth
              margin="dense"
              {...register('email')}
              error={errors.email ? true : false} // eslint-disable-line no-unneeded-ternary
            />
            {errors.email && (
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            )}

            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Lähetä
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

const Ending = () => {
  const { t } = useTranslation()
  const [openMailPrompt, setOpenMailPrompt] = useState(false)

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
            <EmailForm />
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default Ending
