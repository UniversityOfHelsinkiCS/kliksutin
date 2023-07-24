import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import { MenuItem } from '@mui/material'

import {
  DimensionSelectionData,
  Locales,
  ChoiceType,
  MultipleChoiceType,
  SingleChoiceType,
} from '@backend/types'

import { useCreateResultMutation } from '../../../hooks/useResultMutation'

import { DialogSelect } from '../Select'
import { DialogLocalesField } from '../TextField'
import NewItemDialog from '../NewItemDialog'

import {
  NewResultFormType,
  NewResultFormZod,
} from '../../../../validators/results'

const NewResultForm = ({
  open,
  setOpen,
  dimensions,
  options,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  dimensions: DimensionSelectionData[]
  options: ChoiceType
}) => {
  const { t, i18n } = useTranslation()
  const mutation = useCreateResultMutation()
  const language = i18n.language as keyof Locales

  const [selectedOption, setSelectedOption] = useState<
    MultipleChoiceType | DimensionSelectionData | SingleChoiceType | null
  >(null)

  const defaultValue = {
    fi: '',
    sv: '',
    en: '',
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewResultFormType>({
    mode: 'onBlur',
    shouldUnregister: true,
    resolver: zodResolver(NewResultFormZod),
    defaultValues: {
      optionLabel: '',
      isSelected: defaultValue,
    },
  })

  const onClose = () => {
    setSelectedOption(null)
    setOpen(!open)
  }

  const onSubmit = async (data: NewResultFormType) => {
    const resultDataField = Object.fromEntries(
      dimensions.map((dimension) => [dimension.id, defaultValue])
    )
    const newResult = {
      ...data,
      data: resultDataField,
    }

    try {
      await mutation.mutateAsync(newResult)
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
        title={t('admin:resultNewResultInfo')}
        content={t('admin:resultNewResultContent')}
        onSubmit={handleSubmit(onSubmit)}
        onClose={onClose}
      >
        <DialogSelect
          label={t('admin:selectResultOption')}
          value="optionLabel"
          control={control}
        >
          {options.map((aOption) => (
            <MenuItem
              onClick={() => setSelectedOption(aOption)}
              key={aOption.id}
              value={aOption.label}
            >
              {aOption.title[language]}
            </MenuItem>
          ))}
        </DialogSelect>

        {selectedOption && (
          <DialogLocalesField
            error={errors.isSelected}
            value="isSelected"
            inputlabel={`${t('admin:resultNewResultTitleLabel')}: ${
              selectedOption.title[language]
            }`}
            control={control}
          />
        )}
      </NewItemDialog>
    </form>
  )
}

export default NewResultForm
