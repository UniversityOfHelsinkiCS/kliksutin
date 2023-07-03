import React, { useState, useEffect } from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
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
  const [dimensionTitle, setDimensionTitle] = useState(
    dimension.title[language]
  )
  const [dimensionText, setDimensionText] = useState(dimension.text[language])

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
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <Box sx={{ my: 2, mx: 4, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h6">{t('admin:dimension')}</Typography>
        <Typography ml={1}>{language}</Typography>
      </Box>
      <TextField
        fullWidth
        value={dimensionTitle}
        onChange={(event) => setDimensionTitle(event.target.value)}
      />

      <TextField
        multiline
        rows={20}
        fullWidth
        value={dimensionText}
        onChange={(event) => setDimensionText(event.target.value)}
      />
      <Button onClick={handleSave}>{t('admin:save')}</Button>
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
  const { t } = useTranslation()
  const mutation = useDeleteDimensionMutation(dimension.id)
  const [openAlert, setOpenAlert] = useState(false)

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync()
      enqueueSnackbar(t('admin:deleteSuccess'), { variant: 'success' })
      setOpenAlert(false)
      onDelete('') // callback to reset the selected dimension ID
    } catch (error) {
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
        {t('admin:dimensionRemove')}
      </Button>
      <DeleteDialog
        open={openAlert}
        title={t('admin:dimensionRemoveDimensionInfo')}
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
