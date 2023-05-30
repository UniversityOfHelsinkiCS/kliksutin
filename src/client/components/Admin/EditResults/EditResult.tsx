import React, { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import { useEditResultMutation } from '../../../hooks/useResultMutation'

import DeleteDialog from '../DeleteDialog'
import { ContentTextField, TitleTextField } from '../TextField'

import { Locales, Result, ChoiceType } from '../../../types'

const ResultItem = ({
  dimensionId,
  language,
  options,
  result,
}: {
  dimensionId: string
  language: keyof Locales
  options: ChoiceType
  result: Result
}) => {
  const { t } = useTranslation()
  const mutation = useEditResultMutation(result.id)

  const { isSelected, optionLabel, data } = result
  const resultData = data[dimensionId]
  const optionData = options.find(({ label }) => label === optionLabel)

  const [selected, setSelected] = useState(isSelected[language])
  const [value, setValue] = useState(resultData[language])

  useEffect(() => {
    setValue(resultData[language])
  }, [language, resultData])

  useEffect(() => {
    setSelected(isSelected[language])
  }, [language, isSelected])

  const handleSave = async () => {
    data[dimensionId][language] = value
    isSelected[language] = selected

    try {
      await mutation.mutateAsync({ data, isSelected })
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <Box sx={{ my: 2, mx: 4, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h6">
          {t('admin:option')} {optionData.title[language]}
        </Typography>
        <Typography display="inline" ml={1}>
          {language}
        </Typography>
      </Box>

      <TitleTextField
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      />
      <ContentTextField
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={handleSave}>{t('admin:save')}</Button>
    </Box>
  )
}

const EditResult = ({
  dimensionId,
  selectedLanguage,
  options,
  result,
}: {
  dimensionId: string
  selectedLanguage: keyof Locales
  options: ChoiceType
  result: Result
}) => {
  const { t } = useTranslation()
  // const mutation = useDeleteRecommendationMutation(recommendation.id)
  const [openAlert, setOpenAlert] = useState(false)

  const handleDelete = async () => {
    try {
      console.log('del')
      enqueueSnackbar(t('admin:deleteSuccess'), { variant: 'success' })
      setOpenAlert(false)
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <>
      <Button
        sx={{
          ml: 4,
          alignSelf: 'center',
        }}
        variant="outlined"
        color="error"
        onClick={() => setOpenAlert(!openAlert)}
      >
        {t('admin:resultRemove')}
      </Button>
      <DeleteDialog
        open={openAlert}
        title={t('admin:resultRemoveResultInfo')}
        content={t('admin:resultRemoveResultContent')}
        setOpen={setOpenAlert}
        onSubmit={handleDelete}
      />
      <Box mb={5} display="flex">
        <ResultItem
          dimensionId={dimensionId}
          language={'fi' as keyof Locales}
          options={options}
          result={result}
        />
        <ResultItem
          dimensionId={dimensionId}
          language={selectedLanguage}
          options={options}
          result={result}
        />
      </Box>
    </>
  )
}

export default EditResult
