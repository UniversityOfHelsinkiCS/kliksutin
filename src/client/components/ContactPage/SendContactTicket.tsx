import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material'

import useLoggedInUser from '../../hooks/useLoggedInUser'

import styles from '../../styles'
import sendEmail from '../../util/mailing'

const ticketEmail = 'opetusteknologia@helsinki.fi'

const SendContactTicket = () => {
  const { t } = useTranslation()
  const [isSent, setIsSent] = useState(false)
  const { user, isLoading } = useLoggedInUser()

  const { formStyles, common } = styles

  const resultHTML = sessionStorage.getItem('curre-session-resultHTML')

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
    const subject = 'Curre contact ticket'
    const targets = [ticketEmail]
    const text = ` \
    <div> \
      <h3> \
        <strong> \
          Curre Contact Ticket
        </strong> \
      </h3> \
      <p> \
        **********
        <strong>
          ${t('contact:contactTicketSenderEmail')} ${user?.email} \
        </strong> \
        <strong>
          ${t('contact:contactTicketSenderFullname')} ${user?.firstName} ${
      user?.lastName
    } \
        </strong> \
      </p> \
      <p> \
        **********
        <strong>
          ${t('contact:contactTicketUserMessage')} \
        </strong> \
        ${content} \
      </p> \
      <p> \
        **********
        <strong>
          ${t('contact:contactTicketUserSummary')} \
        </strong> \
        ${resultHTML} \
      </p> \
    </div> \
    `

    sendEmail(targets, text, subject)
      .then(() => setIsSent(true))
      .catch(() => {
        enqueueSnackbar(t('contact:pateErrorMessage'), { variant: 'error' })
      })
  }

  if (isLoading) return null

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        data-cy="contact-ticket-textfield"
        required
        size="small"
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
              type="submit"
              sx={formStyles.stackButton}
              variant="contained"
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
  )
}

export default SendContactTicket
