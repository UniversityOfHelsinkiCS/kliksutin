import React, { useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { Link } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import { Box, Button, Stack, TextField } from '@mui/material'

import useLoggedInUser from '../../hooks/useLoggedInUser'

import ContactEmailTemplate from '../../templates/ContactEmailTemplate'

import styles from '../../styles'
import sendEmail from '../../util/mailing'

const ticketEmail = 'opetusteknologia@helsinki.fi'

const SendContactTicket = () => {
  const { t } = useTranslation()
  const [isSent, setIsSent] = useState(false)
  const { user, isLoading } = useLoggedInUser()

  const { formStyles } = styles

  const resultHTML = sessionStorage.getItem('curre-session-resultHTML')

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      content: '',
    },
  })

  if (isLoading || !user) return null

  const onSubmit = async ({ content }: { content: string }) => {
    const contactEmailTemplate = ReactDOMServer.renderToString(
      <ContactEmailTemplate user={user} content={content} />
    )

    const subject = 'Curre contact ticket'
    const targets = [ticketEmail]
    const text = `
        ${contactEmailTemplate}
        
        ${resultHTML}
    `

    sendEmail(targets, text, subject)
      .then(() => {
        setIsSent(true)
        enqueueSnackbar(t('contact:sendSuccess'), {
          variant: 'success',
        })
      })
      .catch(() => {
        enqueueSnackbar(t('contact:pateErrorMessage'), { variant: 'error' })
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            data-cy="contact-ticket-textfield"
            size="small"
            name="content"
            label={t('contact:contactTicketContentLabel')}
            fullWidth
            multiline
            rows={20}
            margin="dense"
            disabled={isSent}
            error={!!errors?.content}
            helperText={errors?.content && errors.content.message}
          />
        )}
      />
      <Box sx={formStyles.stackBoxWrapper}>
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
            disabled={isSent}
            sx={formStyles.stackButton}
            variant="contained"
          >
            {t('contact:contactTicketSend')}
          </Button>
        </Stack>
      </Box>
    </form>
  )
}

export default SendContactTicket
