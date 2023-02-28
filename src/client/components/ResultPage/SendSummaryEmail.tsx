import React, { useState } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material'

import apiClient from '../../util/apiClient'
import useLoggedInUser from '../../hooks/useLoggedInUser'

const SendSummaryEmail = () => {
  const { t } = useTranslation()
  const [isSent, setIsSent] = useState(false)
  const { user, isLoading } = useLoggedInUser()

  const resultHTML = document.getElementById('result-component')

  const sendResultsToEmail = async (targets: string[], text: string) => {
    apiClient.post('/summary', {
      targets,
      text,
    })
  }

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
      email: user?.email || '',
    },
  })

  const onSubmit = async ({ email }: { email: string }) => {
    const targets = [email]
    const text = resultHTML.outerHTML

    try {
      await sendResultsToEmail(targets, text)
      setIsSent(true)
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) return null

  return (
    <Box px={3} py={2}>
      <Typography variant="body2">
        {t('results:proceedEmailInfoText')}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              size="small"
              name="email"
              label="Email"
              margin="dense"
              sx={{ width: 300 }}
              {...register('email')}
              error={errors.email ? true : false} // eslint-disable-line no-unneeded-ternary
            />
            {errors.email && (
              <Typography variant="body2">{errors.email?.message}</Typography>
            )}
            <Box mt={1}>
              {!isSent ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  {t('results:sendSummaryMail')}
                </Button>
              ) : (
                <Alert sx={{ width: 600 }} severity="success">
                  {t('results:sendSuccess')}
                </Alert>
              )}
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SendSummaryEmail
