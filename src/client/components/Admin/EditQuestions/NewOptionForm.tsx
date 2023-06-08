import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import NewItemDialog from '../NewItemDialog'
import { DialogLocalesField } from '../TextField'

import { NewOption, OptionZod } from '../../../validators/options'

const NewOptionForm = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t } = useTranslation()
  // const mutation = useCreateQuestionMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<NewOption>({
    mode: 'onBlur',
    resolver: zodResolver(OptionZod),
    defaultValues: {
      title: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  })

  const onSubmit = async (data: any) => {
    try {
      // await mutation.mutateAsync(data)
      console.log(data)
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
        title={t('admin:questionNewQuestionInfo')}
        content={t('admin:questionNewQuestionContent')}
        onSubmit={handleSubmit(onSubmit)}
        onClose={() => setOpen(!open)}
      >
        <DialogLocalesField
          error={errors.title}
          value="title"
          inputlabel={t('admin:questionNewQuestionTitleLabel')}
          control={control}
        />
      </NewItemDialog>
    </form>
  )
}

export default NewOptionForm
