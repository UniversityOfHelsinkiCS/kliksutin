import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import styles from './styles'

const Dimension: React.FC<{ dimension: string }> = ({ dimension }) => (
  <>
    <Typography variant="h6" gutterBottom>
      {dimension}
    </Typography>
    <Typography sx={{ ml: 1, mb: 1.5 }} color="text.secondary">
      describes the heading
    </Typography>
  </>
)

const Recommendations: React.FC<{
  watch: any
}> = ({ watch }) => {
  useTranslation()
  const classes = styles.cardStyles

  const dimensions = watch('1')

  console.log(dimensions)

  return (
    <Box sx={classes.recommendationCard}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" sx={classes.heading} component="div">
            <Trans i18nKey="recommendations:title" />
          </Typography>
          <Box sx={classes.content}>
            <Typography variant="body2">
              <Trans i18nKey="recommendations:recommendationMessage" />
            </Typography>
          </Box>

          {dimensions.map((dimension: string) => (
            <Dimension key={dimension} dimension={dimension} />
          ))}
        </CardContent>
      </Card>
    </Box>
  )
}

export default Recommendations
