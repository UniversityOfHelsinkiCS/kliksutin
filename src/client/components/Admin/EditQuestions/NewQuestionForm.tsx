/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { MenuItem } from '@mui/material'

import { useCreateRecommendationMutation } from '../../../hooks/useRecommendationMutation'

import NewItemDialog from '../NewItemDialog'
import { DialogSelect } from '../Select'
import { DialogLocalesField, DialogTextField } from '../TextField'
import {
  NewRecommendation,
  RecommendationZod,
} from '../../../validators/recommendations'

import { Locales } from '../../../types'
import { questionTypes } from '../config'

const NewQuestionForm = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t, i18n } = useTranslation()
  const mutation = useCreateRecommendationMutation()
  const language = i18n.language as keyof Locales

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
    defaultValues: {
      type: 'singleChoice',
      title: {
        fi: '',
        sv: '',
        en: '',
      },
      text: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  })

  const onSubmit = async (data: NewRecommendation) => {
    console.log(data)
    try {
      // await mutation.mutateAsync(data)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
      // setOpen(false)
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  console.log(language)

  return (
    <form>
      <NewItemDialog
        open={open}
        title={t('admin:questionNewQuestionInfo')}
        content={t('admin:questionNewQuestionContent')}
        onSubmit={handleSubmit(onSubmit)}
        onClose={() => setOpen(!open)}
      >
        <DialogSelect
          label={t('admin:selectRecommendationType')}
          value="type"
          control={control}
        >
          {questionTypes.map(({ id, title }) => (
            <MenuItem key={id} value={id}>
              {title[language]}
            </MenuItem>
          ))}
        </DialogSelect>

        <DialogLocalesField
          error={errors.title}
          value="title"
          inputlabel={t('admin:questionNewQuestionTitleLabel')}
          control={control}
        />
        <DialogLocalesField
          error={errors.text}
          value="text"
          inputlabel={t('admin:questionNewQuestionContentLabel')}
          control={control}
        />
      </NewItemDialog>
    </form>
  )
}

export default NewQuestionForm
