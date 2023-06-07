import React, { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import {
  useDeleteOptionMutation,
  useEditOptionMutation,
} from '../../../hooks/useChoiceMutation'

import DeleteDialog from '../DeleteDialog'
import { ContentTextField, TitleTextField } from '../TextField'

import { ChoiceType, Locales, Question } from '../../../types'
import { OptionUpdates } from '../../../../server/types'

type Option<A> = A extends readonly (infer T)[] ? T : never

const OptionItem = ({
  option,
  optionNumber,
  question,
  language,
}: {
  option: Option<ChoiceType>
  optionNumber: number
  question: Question
  language: keyof Locales
}) => {
  const { t } = useTranslation()
  const mutation = useEditOptionMutation(question.id, option.id)
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

    try {
      await mutation.mutateAsync(updatedOption)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <Box sx={{ my: 2, mx: 4, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h6">
          {t('admin:option')} {optionNumber}
        </Typography>
        <Typography ml={1}>{language}</Typography>
      </Box>
      <TitleTextField
        value={optionTitle}
        onChange={(event) => setOptionTitle(event.target.value)}
      />
      {optionData && (
        <ContentTextField
          value={optionData}
          onChange={(event) => setOptionData(event.target.value)}
        />
      )}
      <Button onClick={handleSave}>{t('admin:save')}</Button>
    </Box>
  )
}

const EditOptions = ({
  option,
  optionNumber,
  question,
  language,
}: {
  option: Option<ChoiceType>
  optionNumber: number
  question: Question
  language: keyof Locales
}) => {
  const { t } = useTranslation()
  const mutation = useDeleteOptionMutation(question.id, option.id)
  const [openAlert, setOpenAlert] = useState(false)

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync()
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
        {t('admin:optionRemove')}
      </Button>
      <DeleteDialog
        open={openAlert}
        title={t('admin:optionRemoveOptionInfo')}
        content={t('admin:optionRemoveOptionContent')}
        setOpen={setOpenAlert}
        onSubmit={handleDelete}
      />
      <Box mb={5} display="flex">
        <OptionItem
          option={option}
          optionNumber={optionNumber}
          question={question}
          language={'fi' as keyof Locales}
        />
        <OptionItem
          option={option}
          optionNumber={optionNumber}
          question={question}
          language={language}
        />
      </Box>
    </>
  )
}

export default EditOptions
