import React, { useState, useEffect } from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { ChoiceType, Locales } from '../../../types'
import { OptionUpdates } from '../../../../server/types'

type Option<A> = A extends readonly (infer T)[] ? T : never

const OptionItem = ({
  language,
  option,
}: {
  language: keyof Locales
  option: Option<ChoiceType>
}) => {
  const { t } = useTranslation()
  const [optionTitle, setOptionTitle] = useState(option.title[language])
  const [optionData, setOptionData] = useState('')

  useEffect(() => {
    if ('data' in option && !('text' in option)) {
      setOptionData(option.data[language]) // Type narrow the multichoice type
    }
    setOptionTitle(option.title[language])
  }, [language, option])

  const handleSave = async () => {
    let updatedOption: OptionUpdates = {
      title: {
        ...option.title,
        [language]: optionTitle,
      },
    }
    if ('data' in option && !('text' in option)) {
      updatedOption = {
        data: {
          ...option.data,
          [language]: optionData,
        },
        ...updatedOption,
      }
    }

    console.log(updatedOption)
  }

  return (
    <Box sx={{ my: 2, mx: 4, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h6">
          {t('admin:option')} {option.title[language]}
        </Typography>
        <Typography ml={1}>{language}</Typography>
      </Box>
      <TextField
        fullWidth
        value={optionTitle}
        onChange={(event) => setOptionTitle(event.target.value)}
      />
      {optionData && (
        <TextField
          multiline
          rows={20}
          fullWidth
          value={optionData}
          onChange={(event) => setOptionData(event.target.value)}
        />
      )}
      <Button onClick={handleSave}>{t('admin:save')}</Button>
    </Box>
  )
}

const EditOptions = ({
  language,
  option,
}: {
  language: keyof Locales
  option: Option<ChoiceType>
}) => (
  <Box mb={5} display="flex">
    <OptionItem language={'fi' as keyof Locales} option={option} />
    <OptionItem language={language} option={option} />
  </Box>
)

export default EditOptions
