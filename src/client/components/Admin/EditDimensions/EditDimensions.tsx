import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { Box, Button, Typography } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import { useEditDimensionMutation } from '../../../hooks/useDimensionMutation'

import EditDimension from './EditDimension'
import NewDimensionForm from './NewDimensionForm'
import { ColorSelect, DimensionSelect, LanguageSelect } from '../Select'

import { getDimensions } from '../../../util/dimensions'

const EditDimensions = () => {
  const { t } = useTranslation()
  const { survey } = useSurvey()
  const [searchParams] = useSearchParams()

  const [color, setColor] = useState('000000')
  const [dimensionId, setDimensionId] = useState('')
  const [openNewDimension, setOpenNewDimension] = useState(false)

  const mutation = useEditDimensionMutation(dimensionId)

  const selectedLanguage = searchParams.get('transLang') as keyof Locales

  const dimensions = getDimensions(survey)
  const selectedDimension = dimensions.find(
    (dimension) => dimension.id === dimensionId
  )

  const handleColorChange = (newColor: string) => {
    setColor(newColor)
  }

  const handleColorSave = async () => {
    const updateColor = {
      color,
    }
    try {
      await mutation.mutateAsync(updateColor)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  useEffect(() => {
    if (!selectedDimension) return

    setColor(selectedDimension.color)
  }, [selectedDimension])

  return (
    <Box sx={{ mx: 2, mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          my: 4,
          justifyContent: 'flex-start',
        }}
      >
        <DimensionSelect />

        <LanguageSelect />

        <Button
          sx={{ position: 'absolute', right: 0, mr: 4, alignSelf: 'center' }}
          variant="contained"
          onClick={() => setOpenNewDimension(!openNewDimension)}
        >
          {t('admin:dimensionAddNew')}
        </Button>
      </Box>
      <Box width="100%" flexWrap="wrap">
        {selectedDimension ? (
          <Box sx={{ my: 4 }}>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:dimensionViewDimensionColorEdit')}
            </Typography>
            <Box sx={{ mx: 4 }}>
              <ColorSelect
                label={t('admin:dimensionNewDimensionColorLabel')}
                value={color}
                setValue={handleColorChange}
              />
              <Button variant="outlined" onClick={handleColorSave}>
                {t('admin:save')}
              </Button>
            </Box>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:dimensionViewDimensionEdit')}
            </Typography>
            <EditDimension
              language={selectedLanguage}
              dimension={selectedDimension}
              onDelete={setDimensionId}
            />
          </Box>
        ) : (
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:dimensionViewInfo')}
          </Typography>
        )}
      </Box>

      <NewDimensionForm open={openNewDimension} setOpen={setOpenNewDimension} />
    </Box>
  )
}

export default EditDimensions
