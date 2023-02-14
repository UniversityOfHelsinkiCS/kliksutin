import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'
import styles from './styles'
import { FormValues } from '../../types'

const Results = ({ resultData }: { resultData: FormValues }) => {
  const { t } = useTranslation()

  if (!resultData) return null

  const classes = styles.cardStyles

  return (
    <Box sx={{ m: 2, maxWidth: 1080, border: 1, borderColor: 'grey.300' }}>
      <Container sx={classes.resultContainer}>
        <Typography variant="h5" sx={classes.heading} component="div">
          {t('results:title')}
        </Typography>
        <Box sx={classes.content}>
          <Typography variant="body2">{t('results:resultsMessage')}</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Results
