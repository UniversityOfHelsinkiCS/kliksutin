import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'
import styles from './styles'
import ShowMore from '../Common/ShowMore'

const classes = styles.cardStyles

const HelloBanner = () => {
  const { t, i18n } = useTranslation()
  const { language } = i18n

  console.log(language)

  return (
    <Box id="hello-component" sx={classes.outerBox}>
      <Container sx={{ my: 1, display: 'flex', flexWrap: 'wrap', gap: 0.3 }}>
        <Typography variant="h5" sx={classes.heading} component="div">
          {t('info:infoTitle')}
        </Typography>
        <ShowMore text={t('facultySelect:introMessage')} />
      </Container>
    </Box>
  )
}

export default HelloBanner
