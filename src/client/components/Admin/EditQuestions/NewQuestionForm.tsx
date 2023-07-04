import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { Box, Button, MenuItem } from '@mui/material'

import { useCreateQuestionMutation } from '../../../hooks/useQuestionMutation'

import NewItemDialog from '../NewItemDialog'
import { DialogSelect } from '../Select'
import { DialogLocalesField } from '../TextField'

import { NewQuestion, QuestionZod } from '../../../../validators/questions'

import { questionTypes } from '../config'
import { Locales } from '../../../types'

const NewQuestionForm = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t, i18n } = useTranslation()
  const mutation = useCreateQuestionMutation()
  const language = i18n.language as keyof Locales

  const [selectedQuestionType, setSelectedQuestionType] = useState('')

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<NewQuestion>({
    mode: 'onBlur',
    resolver: zodResolver(QuestionZod),
    defaultValues: {
      parentId: null,
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
      optionData: {
        type: 'singleChoice',
        options: [],
      },
      visibility: {},
    },
  })

  const { fields, append, remove } = useFieldArray({
    name: 'optionData.options',
    control,
  })

  const handleAppend = () => {
    const newOption = {
      title: {
        fi: '',
        sv: '',
        en: '',
      },
      ...(selectedQuestionType === 'multipleChoice' && {
        data: {
          fi: '',
          sv: '',
          en: '',
        },
      }),
    }

    append(newOption)
  }

  const onSubmit = async (data: any) => {
    try {
      await mutation.mutateAsync(data)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
      setOpen(false)
      reset()
    } catch (error: any) {
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
        <DialogSelect
          label={t('admin:selectQuestionType')}
          value="optionData.type"
          control={control}
        >
          {questionTypes.map(({ id, title }) => (
            <MenuItem
              key={id}
              value={id}
              onClick={() => setSelectedQuestionType(id)}
            >
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
        {fields.map((item, index) => (
          <Box key={item.id} sx={{ mb: 8 }}>
            <Box sx={{ position: 'relative' }}>
              <Button
                sx={{ zIndex: 20, position: 'absolute', right: 0, top: -4 }}
                variant="outlined"
                color="error"
                onClick={() => remove(index)}
              >
                {t('admin:questionRemoveOption', { number: index + 1 })}
              </Button>
            </Box>
            <DialogLocalesField
              value={`optionData.options.${index}.title`}
              inputlabel={t('admin:questionNewOptionTitleLabel', {
                number: index + 1,
              })}
              control={control}
              error={(errors.optionData?.options as any)[index]?.title}
            />
            {item.data && (
              <DialogLocalesField
                value={`optionData.options.${index}.data`}
                inputlabel={t('admin:questionNewOptionDataLabel', {
                  number: index + 1,
                })}
                control={control}
                error={(errors.optionData?.options as any)[index]?.data}
              />
            )}
          </Box>
        ))}
        {selectedQuestionType !== 'info' && (
          <Button variant="outlined" fullWidth onClick={handleAppend}>
            {t('admin:questionAddNewOption')}
          </Button>
        )}
      </NewItemDialog>
    </form>
  )
}

export default NewQuestionForm
