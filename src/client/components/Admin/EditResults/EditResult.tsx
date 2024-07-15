/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { Box, Typography, Button } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import { Locales, Result, ChoiceType, SingleChoiceType } from '@backend/types'

import {
  useDeleteResultMutation,
  useEditResultMutation,
} from '../../../hooks/useResultMutation'

import DeleteDialog from '../DeleteDialog'

const ResultItem = ({
  dimensionId,
  language,
  optionData,
  result,
}: {
  dimensionId: string
  language: keyof Locales
  optionData: SingleChoiceType | undefined
  result: Result
}) => {
  const { t, i18n } = useTranslation()
  const mutation = useEditResultMutation(result.id)

  const selectedLanguage = i18n.language

  const { isSelected, data } = result

  const resultData = data[dimensionId]

  const [resultIsSelected, setResultIsSelected] = useState<any>('')
  const [resultContent, setResultContent] = useState<any>('')

  useEffect(() => {
    if (!resultData) {
      setResultContent('')
      return
    }

    setResultContent(resultData[language])
  }, [language, resultData])

  useEffect(() => {
    setResultIsSelected(isSelected[language])
  }, [language, isSelected])

  const handleSave = async () => {
    if (!data[dimensionId]) {
      data[dimensionId] = {
        en: '',
        fi: '',
        sv: '',
      }
    }
    isSelected[language] = resultIsSelected
    data[dimensionId][language] = resultContent

    try {
      await mutation.mutateAsync({ data, isSelected })
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  if (!optionData || !resultIsSelected) return null

  return (
    <Box
      sx={{
        p: 2,
        my: 4,
        mx: 4,
        width: '50%',
        '&:hover': {
          border: 1,
          borderColor: '#0288d1',
        },
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ display: 'flex', mb: 2 }} variant='h6'>
          {t('admin:resultTitle')}{' '}
          {`'${optionData.title[selectedLanguage as keyof Locales]}'`}
          <Typography ml={1}>{language}</Typography>
        </Typography>
        <MDEditor
          data-color-mode='light'
          height={200}
          value={resultIsSelected}
          onChange={setResultIsSelected}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography sx={{ display: 'flex', mb: 2 }} variant='h6'>
          {t('admin:resultText')}{' '}
          {`'${optionData.title[selectedLanguage as keyof Locales]}'`}
          <Typography ml={1}>{language}</Typography>
        </Typography>
        <MDEditor
          data-color-mode='light'
          height={400}
          value={resultContent}
          onChange={setResultContent}
        />
      </Box>

      <Button variant='outlined' onClick={handleSave}>
        {t('admin:save')}
      </Button>
    </Box>
  )
}

const EditResult = ({
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
  const { t, i18n } = useTranslation()
  const mutation = useDeleteResultMutation(result.id)
  const [openAlert, setOpenAlert] = useState(false)

  const selectedLanguage = i18n.language

  const option = options.find(({ label }) => label === result.optionLabel)
  const optionTitle = `${option?.title[selectedLanguage as keyof Locales]}`

  if (!option) return null

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync()
      enqueueSnackbar(t('admin:deleteSuccess'), { variant: 'success' })
      setOpenAlert(false)
    } catch (error: any) {
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
        variant='outlined'
        color='error'
        onClick={() => setOpenAlert(!openAlert)}
      >
        {t('admin:resultRemove')} {`'${optionTitle}'`}
      </Button>
      <DeleteDialog
        open={openAlert}
        title={`${t('admin:resultRemoveResultInfo')} '${optionTitle}'`}
        content={t('admin:resultRemoveResultContent')}
        setOpen={setOpenAlert}
        onSubmit={handleDelete}
      />
      <Box mb={5} display='flex'>
        <ResultItem
          dimensionId={dimensionId}
          language={'fi' as keyof Locales}
          optionData={option}
          result={result}
        />
        <ResultItem
          dimensionId={dimensionId}
          language={language}
          optionData={option}
          result={result}
        />
      </Box>
    </>
  )
}

export default EditResult
