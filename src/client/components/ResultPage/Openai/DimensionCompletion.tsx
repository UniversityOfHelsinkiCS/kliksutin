import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { UseFormWatch, FieldValues } from 'react-hook-form'
import useOpenaiCompletion from '../../../hooks/useOpenaiCompletion'
import useSurvey from '../../../hooks/useSurvey'
import LoadingProgress from './LoadingProgress'
import { getSelectedDimensions } from '../../../util/dimensions'
import styles from '../styles'
import { DimensionSelectionData, Locales } from '../../../types'

const classes = styles.cardStyles

const CompletionResult = ({
  dimension,
}: {
  dimension: DimensionSelectionData
}) => {
  const { t, i18n } = useTranslation()

  const { label, data } = dimension

  const recommendationNames = data.map(
    ({ name }) => name.charAt(0).toUpperCase() + name.slice(1)
  )
  const recommendations = recommendationNames.join(t('openai:or'))

  const dimensionName = label[i18n.language as keyof Locales].toLowerCase()

  const prompt = t('openai:dimensionCompletionPrompt', {
    dimensionName,
    recommendations,
  })

  const { completion, isLoading } = useOpenaiCompletion(prompt, 'dimension')

  if (isLoading) return <LoadingProgress />

  return (
    <Box sx={classes.outerBox}>
      <Typography variant="body1" p={3} whiteSpace="pre-line">
        {completion.trim()}
      </Typography>
    </Box>
  )
}

const DimensionCompletion = ({
  watch,
}: {
  watch: UseFormWatch<FieldValues>
}) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const [dimensionId, setdimensionId] = useState('')
  const [showCompletion, setShowCompletion] = useState(false)
  const { survey, isLoading } = useSurvey()

  if (isLoading) return null

  const dimensions = getSelectedDimensions(survey, watch)

  return (
    <Box mt={2}>
      <Typography variant="body2">
        {t('openai:selectDimensionInfoText')}
      </Typography>
      <FormControl sx={{ mt: 1 }}>
        <InputLabel>{t('openai:dimensionSelect')}</InputLabel>
        <Select
          data-cy="dimension-completion-select"
          value={dimensionId}
          label={t('openai:dimensionSelect')}
          onChange={({ target }) => setdimensionId(target.value)}
          sx={{ width: 400 }}
        >
          {dimensions.map((d) => (
            <MenuItem
              data-cy={`dimension-option-${d.id}`}
              key={d.id}
              value={d.id}
            >
              {d.label[language as keyof Locales]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box mt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowCompletion(true)}
          disabled={showCompletion || dimensionId.length === 0}
        >
          {t('openai:send')}
        </Button>
      </Box>
      {showCompletion && (
        <CompletionResult
          dimension={dimensions.find(({ id }) => id === dimensionId)}
        />
      )}
    </Box>
  )
}

export default DimensionCompletion
