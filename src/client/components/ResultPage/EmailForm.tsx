import React from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

import styles from './styles'

const EmailForm = () => {
  const { t } = useTranslation()

  const classes = styles.cardStyles

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('results:emailIsRequired'))
      .email(t('results:emailIsIncorrect')),
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
      <Typography variant="body2" sx={classes.heading} component="div">
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
                {t('results:sendSummaryMail')}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EmailForm
