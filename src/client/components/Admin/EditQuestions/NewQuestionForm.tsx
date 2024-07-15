/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { Box, Button, FormControlLabel, MenuItem, Switch } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import { useCreateQuestionMutation } from '../../../hooks/useQuestionMutation'

import NewItemDialog from '../NewItemDialog'
import { DialogSelect } from '../Select'
import { DialogLocalesField } from '../TextField'

import { NewQuestion, NewQuestionZod } from '../../../../validators/questions'

import { questionTypes } from '../config'

const NewQuestionForm = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t, i18n } = useTranslation()
  const { survey, isLoading } = useSurvey()
  const mutation = useCreateQuestionMutation()

  const [isChild, setIsChild] = useState(false)
  const [selectedQuestionType, setSelectedQuestionType] = useState('')

  const language = i18n.language as keyof Locales
  const questions = survey?.Questions

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    unregister,
  } = useForm<NewQuestion>({
    mode: 'onBlur',
    resolver: zodResolver(NewQuestionZod),
    defaultValues: {
      parentId: undefined,
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

  const onSubmit = async (data: NewQuestion) => {
    try {
      await mutation.mutateAsync(data)

      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })

      setOpen(false)
      setIsChild(false)

      reset()
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  if (!survey || isLoading) return null

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
          value='optionData.type'
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

        <Box sx={{ my: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={isChild}
                onChange={() => {
                  setIsChild(!isChild)
                  unregister('parentId')
                }}
              />
            }
            label='Kysymys on alikysymys'
          />
        </Box>

        {isChild && questions?.length && (
          <DialogSelect
            label='Valitse mille kysymykselle luodaan alikysymys'
            value='parentId'
            control={control}
          >
            {survey.Questions.map((question) => (
              <MenuItem key={question.id} value={question.id}>
                {question.title[language]}
              </MenuItem>
            ))}
          </DialogSelect>
        )}

        <DialogLocalesField
          error={errors.title}
          value='title'
          inputlabel={t('admin:questionNewQuestionTitleLabel')}
          control={control}
        />
        <DialogLocalesField
          error={errors.text}
          value='text'
          inputlabel={t('admin:questionNewQuestionContentLabel')}
          control={control}
        />
        {fields.map((item, index) => (
          <Box key={item.id} sx={{ mb: 8 }}>
            <Box sx={{ position: 'relative' }}>
              <Button
                sx={{
                  zIndex: 20,
                  position: 'absolute',
                  right: '1rem',
                  top: '1rem',
                }}
                variant='outlined'
                color='error'
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
              error={
                errors.optionData?.options
                  ? errors.optionData?.options[index]?.title
                  : undefined
              }
            />
            {item.data && (
              <DialogLocalesField
                value={`optionData.options.${index}.data`}
                inputlabel={t('admin:questionNewOptionDataLabel', {
                  number: index + 1,
                })}
                control={control}
                error={
                  errors.optionData?.options
                    ? errors.optionData?.options[index]?.title
                    : undefined
                }
              />
            )}
          </Box>
        ))}
        {selectedQuestionType !== 'info' && (
          <Button variant='outlined' fullWidth onClick={handleAppend}>
            {t('admin:questionAddNewOption')}
          </Button>
        )}
      </NewItemDialog>
    </form>
  )
}

export default NewQuestionForm
