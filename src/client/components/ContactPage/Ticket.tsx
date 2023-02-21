import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

import styles from './styles'

const Ticket = () => {
  const { t } = useTranslation()

  const classes = styles.cardStyles

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      content: '',
    },
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <Box px={3} py={2}>
      <Typography variant="body2" sx={classes.heading}>
        {t('contact:contactTicketText')}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              size="small"
              name="title"
              label={t('contact:contactTicketTitleLabel')}
              fullWidth
              margin="dense"
              {...register('title')}
              error={errors.title ? true : false} // eslint-disable-line no-unneeded-ternary
            />
            {errors.title && (
              <Typography variant="body2">{errors.title?.message}</Typography>
            )}

            <TextField
              required
              size="small"
              name="content"
              label={t('contact:contactTicketContentLabel')}
              fullWidth
              multiline
              rows={10}
              margin="dense"
              {...register('content')}
              error={errors.content ? true : false} // eslint-disable-line no-unneeded-ternary
            />
            {errors.content && (
              <Typography variant="body2">{errors.content?.message}</Typography>
            )}
            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                {t('contact:contactTicketSend')}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Ticket
