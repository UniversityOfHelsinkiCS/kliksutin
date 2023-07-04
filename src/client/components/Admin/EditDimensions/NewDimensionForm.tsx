/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import { useCreateDimensionMutation } from '../../../hooks/useDimensionMutation'

import NewItemDialog from '../NewItemDialog'
import { DialogLocalesField } from '../TextField'

import { NewDimension, DimensionZod } from '../../../validators/options'

const NewDimensionForm = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t } = useTranslation()
  const mutation = useCreateDimensionMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<NewDimension>({
    mode: 'onBlur',
    resolver: zodResolver(DimensionZod),
    defaultValues: {
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
      data: [],
    },
  })

  const onSubmit = async (data: NewDimension) => {
    try {
      await mutation.mutateAsync(data)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
      setOpen(false)
      reset()
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <form>
      <NewItemDialog
        open={open}
        title={t('admin:dimensionNewDimensionInfo')}
        content={t('admin:dimensionNewDimensionContent')}
        onSubmit={handleSubmit(onSubmit)}
        onClose={() => setOpen(!open)}
      >
        <DialogLocalesField
          error={errors.title}
          value="title"
          inputlabel={t('admin:dimensionNewDimensionTitleLabel')}
          control={control}
        />
        <DialogLocalesField
          error={errors.text}
          value="text"
          inputlabel={t('admin:dimensionNewDimensionContentLabel')}
          control={control}
        />
      </NewItemDialog>
    </form>
  )
}

export default NewDimensionForm
