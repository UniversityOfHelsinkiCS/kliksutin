import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from '@mui/material'

import useLoggedInUser from '../../hooks/useLoggedInUser'

import summaryEmailHTML from '../../templates/summaryEmail'

import styles from '../../styles'
import sendEmail from '../../util/mailing'

const SendSummaryEmail = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const { user, isLoading } = useLoggedInUser()
  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState('')
  const [isSent, setIsSent] = useState(false)

  const { cardStyles, common } = styles

  if (isLoading || !user?.email || location.pathname === '/public') return null

  const resultHTML = sessionStorage.getItem('curre-session-resultHTML')

  const onSubmit = () => {
    const subject = t('results:summaryEmailSubject')
    const targets = [user.email]
    const text = `\
      ${summaryEmailHTML} \
      ${
        notes &&
        `<p>
          <strong> \
            Muistiinpanosi Curressa tekemist&auml;si valinnoista:
          </strong> \
        </p> \
        <i>
          ${notes}
        </i>`
      }
      <p>
        <strong> \
          Kooste Curressa tekemist&auml;si valinnoista ja k&auml;ytett&auml;viss&auml; olevista sovelluksista:
        </strong> \
      </p> \
      ${resultHTML} \
      `

    sendEmail(targets, text, subject)
      .then(() => setIsSent(true))
      .catch(() => {
        enqueueSnackbar(t('contact:pateErrorMessage'), { variant: 'error' })
      })
  }

  return (
    <Box sx={cardStyles.subHeading}>
      <Typography variant="body2">
        {t('results:proceedEmailInfoText')}
      </Typography>
      <Box sx={cardStyles.content}>
        {!isSent ? (
          <Box>
            <Box>
              <FormControlLabel
                control={<Switch onChange={() => setShowNotes(!showNotes)} />}
                label={t('results:showSummaryNotes')}
              />
            </Box>
            {showNotes && (
              <TextField
                sx={cardStyles.inputField}
                required
                size="small"
                value={notes}
                fullWidth
                multiline
                rows={10}
                placeholder={t('results:summaryMailPlaceholder') ?? ''}
                onChange={({ target }) => setNotes(target.value)}
              />
            )}
            <Button
              data-cy="summary-email-button"
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
              disabled={!user?.email}
              onClick={onSubmit}
            >
              {t('results:sendSummaryMail')}
            </Button>
          </Box>
        ) : (
          <Alert
            data-cy="summary-email-success-alert"
            sx={common.alertStyle}
            severity="success"
          >
            {t('results:sendSuccess')}
          </Alert>
        )}
      </Box>
    </Box>
  )
}

export default SendSummaryEmail
