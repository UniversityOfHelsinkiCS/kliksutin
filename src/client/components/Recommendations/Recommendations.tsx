import React from 'react'
import { Container, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import styles from './styles'
import getDimensionData from '../../../server/db/seeders/data/devDimensionTools'
import { DimensionData, MultipleChoiceType } from '../../types'

const language = localStorage.getItem('language') || 'en'

/* eslint-disable @typescript-eslint/no-unused-vars */
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
/* eslint-enable @typescript-eslint/no-unused-vars */

const Recommendations: React.FC<{
  watch: any
}> = ({ watch }) => {
  useTranslation()
  const classes = styles.cardStyles

  const dimensionSelection = watch('1')

  const dimensionData: DimensionData[] = getDimensionData()

  return (
    <Container sx={classes.recommendationContainer}>
      <Typography variant="h5" sx={classes.heading} component="div">
        <Trans i18nKey="recommendations:title" />
      </Typography>

      {dimensionData.map((dimensionObject) => (
        <div key={dimensionObject.id}>
          <Typography variant="h6" sx={classes.heading} component="div">
            {dimensionObject.title[language]}
          </Typography>
          <Typography sx={{ ml: 1, mb: 0.5 }} color="text.secondary">
            {dimensionObject.text[language]}
          </Typography>
        </div>
      ))}

      {Object.keys(dimensionSelection).map((dimension: string) => (
        <div key={dimension}>{dimension}</div>
      ))}
    </Container>
  )
}

export default Recommendations
