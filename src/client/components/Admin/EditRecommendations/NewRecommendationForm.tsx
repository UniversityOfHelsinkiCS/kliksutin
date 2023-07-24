/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { MenuItem } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import { useCreateRecommendationMutation } from '../../../hooks/useRecommendationMutation'

import NewItemDialog from '../NewItemDialog'
import { DialogDimensionSelect, DialogSelect } from '../Select'
import { DialogLocalesField, DialogTextField } from '../TextField'

import {
  NewRecommendation,
  NewRecommendationZod,
} from '../../../../validators/recommendations'

import { recommendationTypes } from '../config'

const NewRecommendationForm = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { survey, isLoading } = useSurvey()
  const { t, i18n } = useTranslation()
  const mutation = useCreateRecommendationMutation()
  const language = i18n.language as keyof Locales

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewRecommendation>({
    mode: 'onBlur',
    shouldUnregister: true,
    resolver: zodResolver(NewRecommendationZod),
    defaultValues: {
      label: '',
      type: 'teaching',
      dimensions: {},
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

  if (isLoading || !survey) return null

  const dimensionQuestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const onSubmit = async (data: NewRecommendation) => {
    try {
      await mutation.mutateAsync(data)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
      setOpen(false)
    } catch (error: any) {
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
          error={errors.label}
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

        <DialogDimensionSelect
          label={t('admin:selectRecommendationDimensions')}
          control={control}
          dimensionQuestion={dimensionQuestion}
        />

        <DialogLocalesField
          error={errors.title}
          value="title"
          inputlabel={t('admin:recommendationNewRecommendationTitleLabel')}
          control={control}
        />
        <DialogLocalesField
          error={errors.text}
          value="text"
          inputlabel={t('admin:recommendationNewRecommendationContentLabel')}
          control={control}
        />
      </NewItemDialog>
    </form>
  )
}

export default NewRecommendationForm
