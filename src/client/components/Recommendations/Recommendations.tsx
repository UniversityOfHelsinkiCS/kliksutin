import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import styles from './styles'

const Recommendations = () => {
  useTranslation()
  const classes = styles.cardStyles

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={classes.heading} component="div">
            <Trans i18nKey="recommendations:title" />
          </Typography>
          <Box sx={classes.content}>
            <Typography variant="body2">
              <Trans i18nKey="recommendations:recommendationMessage" />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Recommendations
