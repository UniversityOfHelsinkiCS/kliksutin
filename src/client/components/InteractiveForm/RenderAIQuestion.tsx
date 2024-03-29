import React from 'react'
import { Box, FormControlLabel, Switch, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import styles from '../../styles'
import Markdown from '../Common/Markdown'

import { InputProps } from '../../types'

const { cardStyles } = styles

const RenderAIQuestion = ({ control }: InputProps) => {
  const { t } = useTranslation()
  const location = useLocation()

  const defaultValue = {
    value: false,
    content: '',
  }

  if (location.pathname === '/public') return null

  return (
    <Box sx={cardStyles.questionsContainer}>
      <Markdown>{t('AIquestion:title')}</Markdown>
      <Box sx={cardStyles.content}>
        <Markdown>{t('AIquestion:text')}</Markdown>
      </Box>
      <Controller
        control={control}
        name='useAI'
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Box justifyContent='center'>
            <FormControlLabel
              control={
                <Switch
                  checked={value.value}
                  onChange={(e) =>
                    onChange({ ...value, value: e.target.checked })
                  }
                />
              }
              label={t('AIquestion:label')}
            />
            {value.value && (
              <TextField
                label={t('AIquestion:textFieldLabel')}
                sx={cardStyles.textField}
                required
                fullWidth
                multiline
                rows={10}
                value={value.content}
                onChange={(e) =>
                  onChange({ ...value, content: e.target.value })
                }
              />
            )}
          </Box>
        )}
      />
    </Box>
  )
}

export default RenderAIQuestion
