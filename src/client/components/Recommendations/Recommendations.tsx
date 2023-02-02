import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import styles from './styles'
import { MultipleChoiceType } from '../../types'

const language = localStorage.getItem('language') || 'en'

const Dimension: React.FC<{ dimension: MultipleChoiceType }> = ({
  dimension,
}) => (
  <>
    <Typography variant="h6" gutterBottom>
      {dimension.label[language]}
    </Typography>
    {dimension.data.map((tool) => (
      <Typography key={tool} sx={{ ml: 1, mb: 0.5 }} color="text.secondary">
        {tool}
      </Typography>
    ))}
  </>
)

const Recommendations: React.FC<{
  watch: any
}> = ({ watch }) => {
  useTranslation()
  const classes = styles.cardStyles

  const dimensions = watch('1')

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

          {dimensions.map((dimension: string) => {
            const dimensionJSON: MultipleChoiceType = JSON.parse(dimension)
            return (
              <Dimension key={dimensionJSON.id} dimension={dimensionJSON} />
            )
          })}
        </CardContent>
      </Card>
    </Box>
  )
}

export default Recommendations
