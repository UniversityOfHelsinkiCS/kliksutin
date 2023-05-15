import React, { useState, useEffect } from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { ChoiceType, Locales } from '../../../types'

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

  const handleSave = async () => console.log('saved')

  return (
    <Box sx={{ m: 2, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h5">
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
