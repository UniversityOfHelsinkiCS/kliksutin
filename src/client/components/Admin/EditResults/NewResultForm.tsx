/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import NewItemDialog from '../NewItemDialog'
import { DialogLocalesField } from '../TextField'

import { NewResult, ResultZod } from '../../../validators/results'

import { Locales, Question } from '../../../types'

const NewResultForm = ({
  open,
  setOpen,
  selectedQuestion,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedQuestion: Question
}) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales

  const defaultValue = {
    isSelected: {
      fi: '',
      sv: '',
      en: '',
    },
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewResult>({
    mode: 'onBlur',
    shouldUnregister: true,
    resolver: zodResolver(ResultZod),
    defaultValues: Object.fromEntries(
      selectedQuestion.optionData.options.map((k) => [k.label, defaultValue])
    ),
  })

  const onSubmit = async (data: NewResult) => {
    try {
      console.log(data)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
      setOpen(false)
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  console.log(errors)

  return (
    <form>
      <NewItemDialog
        open={open}
        title={t('admin:resultNewResultInfo')}
        content={t('admin:resultNewResultContent')}
        onSubmit={handleSubmit(onSubmit)}
        onClose={() => setOpen(!open)}
      >
        {selectedQuestion.optionData.options.map((aOption) => (
          <DialogLocalesField
            key={aOption.id}
            error={errors[aOption.label]?.isSelected}
            value={`${aOption.label}.isSelected`}
            inputlabel={`${t('admin:resultNewResultTitleLabel')}: ${
              aOption.title[language]
            }`}
            control={control}
          />
        ))}
      </NewItemDialog>
    </form>
  )
}

export default NewResultForm
