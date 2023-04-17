/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  Alert,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import useLoggedInUser from '../../hooks/useLoggedInUser'
import apiClient from '../../util/apiClient'
import styles from '../../styles'

const ticketEmail = 'opetusteknologia@helsinki.fi'

const SendContactTicket = () => {
  const { t } = useTranslation()
  const { state } = useLocation()
  const [isSent, setIsSent] = useState(false)
  const { user, isLoading } = useLoggedInUser()

  const { formStyles, common } = styles

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
    <Box sx={formStyles.contactForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          data-cy="contact-ticket-textfield"
          required
          size="small"
          name="content"
          label={t('contact:contactTicketContentLabel')}
          fullWidth
          multiline
          rows={20}
          margin="dense"
          {...register('content')}
          error={errors.content ? true : false} // eslint-disable-line no-unneeded-ternary
        />
        {errors.content && (
          <Typography variant="body2">{errors.content?.message}</Typography>
        )}
        <Box sx={formStyles.stackBoxWrapper}>
          {!isSent ? (
            <Stack sx={formStyles.stack} direction="row">
              <Button
                data-cy="back-to-questions"
                sx={formStyles.stackButton}
                component={Link}
                to="/"
              >
                {'<'} {t('results:backToMessage')}
              </Button>
              <Button
                data-cy="send-contact-ticket-button"
                sx={formStyles.stackButton}
                onClick={handleSubmit(onSubmit)}
              >
                {t('contact:contactTicketSend')}
              </Button>
            </Stack>
          ) : (
            <Alert
              data-cy="contact-ticket-success-alert"
              sx={common.alertStyle}
              severity="success"
            >
              {t('contact:sendSuccess')}
            </Alert>
          )}
        </Box>
      </form>
    </Box>
  )
}

export default SendContactTicket
