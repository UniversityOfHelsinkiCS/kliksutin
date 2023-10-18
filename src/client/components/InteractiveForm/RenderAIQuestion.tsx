import React from 'react'
import {
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import Markdown from '../Common/Markdown'

import { InputProps } from '../../types'

const { cardStyles } = styles

const RenderAIQuestion = ({ control }: InputProps) => {
  const { t } = useTranslation()

  return (
    <Container sx={cardStyles.questionsContainer}>
      <Markdown>{t('AIquestion:title')}</Markdown>
      <Box sx={cardStyles.content}>
        <Markdown>{t('AIquestion:text')}</Markdown>
      </Box>
      <Controller
        control={control}
        name='useAI'
        defaultValue={false}
        render={({ field }) => (
          <Box justifyContent='center'>
            <FormGroup {...field}>
              <FormControlLabel
                data-cy='AI-question-select'
                control={<Switch />}
                label={t('AIquestion:label')}
              />
            </FormGroup>
          </Box>
        )}
      />
    </Container>
  )
}

export default RenderAIQuestion
