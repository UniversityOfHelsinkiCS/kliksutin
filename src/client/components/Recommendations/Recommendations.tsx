import React from 'react'
import { Container, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import styles from './styles'
import { MultipleChoiceType } from '../../types'

const language = localStorage.getItem('language') || 'en'

const Dimension: React.FC<{ dimension: MultipleChoiceType }> = ({
  dimension,
}) => (
  <>
    <Typography variant="h6" sx={{ mt: 1 }} gutterBottom>
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

  if (!dimensions) return null

  return (
    <Container sx={classes.recommendationContainer}>
      <Typography variant="h5" sx={classes.heading} component="div">
        <Trans i18nKey="recommendations:title" />
      </Typography>

      {dimensions.map((dimension: string) => {
        const dimensionJSON: MultipleChoiceType = JSON.parse(dimension)
        return <Dimension key={dimensionJSON.id} dimension={dimensionJSON} />
      })}
    </Container>
  )
}

export default Recommendations
