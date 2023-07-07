/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import {
  useDeleteDimensionMutation,
  useEditDimensionMutation,
} from '../../../hooks/useDimensionMutation'

import DeleteDialog from '../DeleteDialog'

import { DimensionSelectionData, Locales } from '../../../types'

const DimensionItem = ({
  language,
  dimension,
}: {
  language: keyof Locales
  dimension: DimensionSelectionData
}) => {
  const { t } = useTranslation()
  const mutation = useEditDimensionMutation(dimension.id)
  const [dimensionTitle, setDimensionTitle] = useState<string | undefined>(
    dimension.title[language]
  )
  const [dimensionText, setDimensionText] = useState<string | undefined>(
    dimension.text[language]
  )

  useEffect(() => {
    setDimensionTitle(dimension.title[language])
    setDimensionText(dimension.text[language])
  }, [language, dimension])

  const handleSave = async () => {
    const updatedDimension = {
      title: {
        ...dimension.title,
        [language]: dimensionTitle,
      },
      text: {
        ...dimension.text,
        [language]: dimensionText,
      },
    }

    try {
      await mutation.mutateAsync(updatedDimension)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <Box
      sx={{
        p: 2,
        my: 4,
        mx: 4,
        width: '50%',
        '&:hover': {
          border: 1,
          borderColor: '#0288d1',
        },
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ display: 'flex', mb: 2 }} variant="h6">
          {t('admin:dimensionTitle')}
          <Typography ml={1}>{language}</Typography>
        </Typography>
        <MDEditor
          data-color-mode="light"
          height={200}
          value={dimensionTitle}
          onChange={setDimensionTitle}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography sx={{ display: 'flex', mb: 2 }} variant="h6">
          {t('admin:dimensionText')}
          <Typography ml={1}>{language}</Typography>
        </Typography>
        <MDEditor
          data-color-mode="light"
          height={400}
          value={dimensionText}
          onChange={setDimensionText}
        />
      </Box>

      <Button variant="outlined" onClick={handleSave}>
        {t('admin:save')}
      </Button>
    </Box>
  )
}

const EditDimension = ({
  language,
  dimension,
  onDelete,
}: {
  language: keyof Locales
  dimension: DimensionSelectionData
  onDelete: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { t, i18n } = useTranslation()
  const [openAlert, setOpenAlert] = useState(false)
  const mutation = useDeleteDimensionMutation(dimension.id)

  const selectedLanguage = i18n.language

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync()
      enqueueSnackbar(t('admin:deleteSuccess'), { variant: 'success' })
      setOpenAlert(false)
      onDelete('') // callback to reset the selected dimension ID
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <>
      <Button
        sx={{
          ml: 4,
          alignSelf: 'center',
        }}
        variant="outlined"
        color="error"
        onClick={() => setOpenAlert(!openAlert)}
      >
        {t('admin:dimensionRemove', {
          dimensionName: dimension.title[selectedLanguage as keyof Locales],
        })}
      </Button>
      <DeleteDialog
        open={openAlert}
        title={t('admin:dimensionRemoveDimensionInfo', {
          dimensionName: dimension.title[selectedLanguage as keyof Locales],
        })}
        content={t('admin:dimensionRemoveDimensionContent')}
        setOpen={setOpenAlert}
        onSubmit={handleDelete}
      />
      <Box mb={5} display="flex">
        <DimensionItem language={'fi' as keyof Locales} dimension={dimension} />
        <DimensionItem language={language} dimension={dimension} />
      </Box>
    </>
  )
}

export default EditDimension
