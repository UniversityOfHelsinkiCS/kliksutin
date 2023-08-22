import React, { useEffect, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { Controller, useForm } from 'react-hook-form'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from '@mui/material'

import useLoggedInUser from '../../hooks/useLoggedInUser'

import SummaryEmailTemplate from '../../templates/SummaryEmailTemplate'

import styles from '../../styles'
import sendEmail from '../../util/mailing'

import { ShareResultEmails, ShareResultsZod } from '../../../validators/emails'

const SendSummaryEmail = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [notes, setNotes] = useState('')
  const [isSent, setIsSent] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const { user, isLoading } = useLoggedInUser()

  const { cardStyles } = styles

  const resultHTML = sessionStorage.getItem('curre-session-resultHTML')

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(ShareResultsZod),
    defaultValues: {
      emails: [''],
    },
  })

  useEffect(() => {
    setIsSent(false)
  }, [resultHTML])

  useEffect(() => {
    if (user?.email) reset({ emails: [user?.email] })
  }, [reset, user])

  const onSubmit = ({ emails }: ShareResultEmails) => {
    if (errors?.emails || emails.length === 0) return

    const summaryEmailTemplate = ReactDOMServer.renderToString(
      <SummaryEmailTemplate showNotes={showNotes} notes={notes} />
    )

    const subject = t('results:summaryEmailSubject')
    const text = `
    ${summaryEmailTemplate}

    ${resultHTML}
    `

    sendEmail(emails, text, subject)
      .then(() => {
        setIsSent(true)
        enqueueSnackbar(t('results:sendSuccess'), {
          variant: 'success',
        })
      })
      .catch(() => {
        enqueueSnackbar(t('contact:pateErrorMessage'), { variant: 'error' })
      })
  }

  if (isLoading || !user?.email || location.pathname === '/public') return null

  return (
    <Box sx={cardStyles.nestedSubSection}>
      <Typography variant="body2">
        {t('results:proceedEmailInfoText')}
      </Typography>
      <Box sx={cardStyles.content}>
        <Box>
          <FormControlLabel
            control={
              <Switch
                onChange={() => setShowNotes(!showNotes)}
                disabled={isSent}
              />
            }
            label={t('results:showSummaryNotes')}
          />
          {showNotes && (
            <TextField
              sx={cardStyles.inputField}
              required
              size="small"
              value={notes}
              fullWidth
              multiline
              rows={10}
              placeholder={t('results:summaryMailNotesPlaceholder') ?? ''}
              onChange={({ target }) => setNotes(target.value)}
              disabled={isSent}
            />
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="emails"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  data-cy="share-results"
                  size="small"
                  multiple
                  options={[]}
                  freeSolo
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  disabled={isSent}
                  onChange={(_, data) => field.onChange(data)}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        data-cy={`share-results-chip-${option}`}
                        key={option as unknown as string}
                        variant="outlined"
                        label={option}
                        color={
                          errors.emails && errors?.emails[index]
                            ? 'error'
                            : 'success'
                        }
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      data-cy="share-results-input"
                      size="small"
                      margin="dense"
                      variant="outlined"
                      placeholder={
                        t('results:summaryEmailSharePlaceholder') ?? ''
                      }
                      error={!!errors?.emails}
                      disabled={isSent}
                    />
                  )}
                />
              )}
            />
            <Button
              data-cy="summary-email-button"
              variant="contained"
              type="submit"
              sx={{ mt: 2 }}
              disabled={!user?.email || isSent}
            >
              {t('results:sendSummaryMail')}
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default SendSummaryEmail
