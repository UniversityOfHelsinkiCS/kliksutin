import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Alert, Box, Button, Typography } from '@mui/material'

import apiClient from '../../util/apiClient'
import useLoggedInUser from '../../hooks/useLoggedInUser'

import summaryEmailHTML from '../../templates/summaryEmail'

import styles from '../../styles'

const SendSummaryEmail = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const { user, isLoading } = useLoggedInUser()
  const [isSent, setIsSent] = useState(false)

  const { cardStyles, common } = styles

  const resultHTML = document.getElementById('result-component')

  const sendResultsToEmail = async (targets: string[], text: string) => {
    apiClient.post('/summary', {
      targets,
      text,
      subject: t('results:summaryEmailSubject'),
    })
  }

  const onSubmit = async () => {
    const targets = [user?.email]
    const text = `
        ${summaryEmailHTML}
        ${resultHTML.outerHTML}
    `

    try {
      await sendResultsToEmail(targets, text)
      setIsSent(true)
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading || !user?.email || location.pathname === '/public') return null

  return (
    <Box sx={cardStyles.subHeading}>
      <Typography variant="body2">
        {t('results:proceedEmailInfoText')}
      </Typography>
      <Box sx={cardStyles.content}>
        {!isSent ? (
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
