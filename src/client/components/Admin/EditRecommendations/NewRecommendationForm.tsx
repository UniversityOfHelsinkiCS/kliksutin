import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { MenuItem } from '@mui/material'

import { useCreateRecommendationMutation } from '../../../hooks/useEditRecommendationMutation'

import NewItemDialog from '../NewItemDialog'
import { DialogSelect } from '../Select'
import { DialogLocalesField, DialogTextField } from '../TextField'
import {
  NewRecommendation,
  RecommendationZod,
} from '../../../validators/recommendations'

import { Locales } from '../../../types'
import { recommendationTypes } from '../config'

const NewRecommendationForm = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t, i18n } = useTranslation()
  const mutation = useCreateRecommendationMutation()
  const language = i18n.language as keyof Locales

  const { handleSubmit, control } = useForm<NewRecommendation>({
    mode: 'onBlur',
    shouldUnregister: true,
    resolver: zodResolver(RecommendationZod),
    defaultValues: {
      label: '',
      type: 'teaching',
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
    try {
      await mutation.mutateAsync(data)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
      setOpen(false)
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <form>
      <NewItemDialog
        open={open}
        title={t('admin:recommendationNewRecommendationInfo')}
        content={t('admin:recommendationNewRecommendationContent')}
        onSubmit={handleSubmit(onSubmit)}
        onClose={() => setOpen(!open)}
      >
        <DialogTextField
          value="label"
          inputlabel={t('admin:recommendationNewRecommendationLabel')}
          control={control}
        />
        <DialogSelect
          label={t('admin:selectRecommendationType')}
          value="type"
          control={control}
        >
          {recommendationTypes.map(({ id, title }) => (
            <MenuItem key={id} value={id}>
              {title[language]}
            </MenuItem>
          ))}
        </DialogSelect>

        <DialogLocalesField
          value="title"
          inputlabel={t('admin:recommendationNewRecommendationTitleLabel')}
          control={control}
        />
        <DialogLocalesField
          value="text"
          inputlabel={t('admin:recommendationNewRecommendationContentLabel')}
          control={control}
        />
      </NewItemDialog>
    </form>
  )
}

export default NewRecommendationForm
