import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material'
import useLoggedInUser from '../../hooks/useLoggedInUser'
import apiClient from '../../util/apiClient'
import styles from '../../styles'

const ticketEmail = 'opetusteknologia@helsinki.fi'

const SendContactTicket = () => {
  const { t } = useTranslation()
  const { state } = useLocation()
  const [isSent, setIsSent] = useState(false)
  const { user, isLoading } = useLoggedInUser()

  const { cardStyles, common } = styles

  const sendResultsToEmail = async (targets: string[], text: string) => {
    apiClient.post('/summary', {
      targets,
      text,
      subject: 'Curre contact ticket',
    })
  }

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

  const onSubmit = async ({ content }: { content: string }) => {
    const targets = [ticketEmail]
    const text = `


    ${t('contact:contactTicketSenderEmail')} ${user.email} 
    ${t('contact:contactTicketSenderFullname')} ${user.firsName} ${
      user.lastName
    } 

    ${t('contact:contactTicketUserMessage')}
    ============================

    ${content}

    ==============

    ${t('contact:contactTicketUserSummary')}

    ============================
    
    ${state.resultHTML}

    ==============
    `

    try {
      await sendResultsToEmail(targets, text)
      setIsSent(true)
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) return null

  return (
    <Box sx={cardStyles.gridBox}>
      <Grid container sx={cardStyles.gridContainer}>
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
              {!isSent ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  {t('contact:contactTicketSend')}
                </Button>
              ) : (
                <Alert sx={common.alertStyle} severity="success">
                  {t('contact:sendSuccess')}
                </Alert>
              )}
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SendContactTicket
