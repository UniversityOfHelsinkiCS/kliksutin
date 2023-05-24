import React from 'react'
import { useForm } from 'react-hook-form'
import { MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

import NewItemDialog from '../NewItemDialog'
import { DialogLocalesField, DialogTextField } from '../TextField'
import { DialogSelect } from '../Select'

import { Locales, NewRecommendation } from '../../../types'
import { recommendationTypes } from '../config'

const NewRecommendationForm = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales

  const { handleSubmit, control } = useForm<NewRecommendation>({
    mode: 'onBlur',
    shouldUnregister: true,
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

  const onSubmit = (data: any) => {
    console.log(data)

    setOpen(false)
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
