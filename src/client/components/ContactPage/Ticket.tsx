import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

const Ticket = () => {
  const { t } = useTranslation()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      content: '',
    },
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <Box px={3} py={2}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
