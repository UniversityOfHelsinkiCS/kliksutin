import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import { useCreateOptionMutation } from '../../../hooks/useOptionMutation'

import NewItemDialog from '../NewItemDialog'
import { DialogLocalesField } from '../TextField'

import { NewOption, OptionZod } from '../../../validators/options'
import { Question } from '../../../types'

const NewOptionForm = ({
  open,
  setOpen,
  question,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  question: Question
}) => {
  const { t } = useTranslation()
  const mutation = useCreateOptionMutation(question.id)

  const { type } = question.optionData

  const defaultValue = {
    title: {
      fi: '',
      sv: '',
      en: '',
    },
    ...(type === 'multipleChoice' && {
      data: {
        fi: '',
        sv: '',
        en: '',
      },
    }),
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<NewOption>({
    mode: 'onBlur',
    resolver: zodResolver(OptionZod),
    defaultValues: defaultValue,
    shouldUnregister: true,
  })

  const onSubmit = async (data: NewOption) => {
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
        title={t('admin:optionNewOptionInfo')}
        content={t('admin:optionNewOptionContent')}
        onSubmit={handleSubmit(onSubmit)}
        onClose={() => setOpen(!open)}
      >
        <DialogLocalesField
          error={errors.title}
          value="title"
          inputlabel={t('admin:optionNewOptionTitleLabel')}
          control={control}
        />
        {defaultValue.data && (
          <DialogLocalesField
            error={errors.data}
            value="data"
            inputlabel={t('admin:optionNewOptionDataLabel')}
            control={control}
          />
        )}
      </NewItemDialog>
    </form>
  )
}

export default NewOptionForm
