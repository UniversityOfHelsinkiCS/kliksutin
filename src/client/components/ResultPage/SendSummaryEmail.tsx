import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, Box, Button, Grid, Typography } from '@mui/material'

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
      subject: t('results:summaryEmailSubject'),
    })
  }

  const onSubmit = async () => {
    const targets = [user?.email]
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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt={4}
      >
        <Grid item xs={12} sm={12}>
          <Typography variant="h6">
            {user?.email ? user.email : 'User not found'}
          </Typography>
          <Box mt={1} textAlign="center">
            {!isSent ? (
              <Button
                variant="contained"
                color="primary"
                disabled={!user?.email}
                onClick={onSubmit}
              >
                {t('results:sendSummaryMail')}
              </Button>
            ) : (
              <Alert sx={{ maxWidth: 600 }} severity="success">
                {t('results:sendSuccess')}
              </Alert>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SendSummaryEmail
