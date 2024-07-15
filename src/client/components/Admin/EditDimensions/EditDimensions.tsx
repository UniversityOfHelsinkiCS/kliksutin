import React, { useEffect, useState } from 'react'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { Box, Button, Typography } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import { useEditDimensionMutation } from '../../../hooks/useDimensionMutation'

import EditDimension from './EditDimension'
import { ColorSelect } from '../Select'

import { getDimensions } from '../../../util/dimensions'

const EditDimensions = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { dimensionId } = useParams()
  const [searchParams] = useSearchParams()
  const { survey } = useSurvey()
  const [color, setColor] = useState('000000')

  const dimensions = getDimensions(survey)
  const selectedDimension = dimensions.find(
    (dimension) => dimension.id === dimensionId
  )

  useEffect(() => {
    if (!selectedDimension) return

    setColor(selectedDimension.color)
  }, [selectedDimension])

  const mutation = useEditDimensionMutation(dimensionId as string)

  const selectedLanguage = searchParams.get('transLang') as keyof Locales

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

  const handleDimensionDeletion = () => {
    navigate({
      pathname: '/admin/edit-dimensions',
      search: location.search,
    })
  }

  return (
    <Box width='100%' flexWrap='wrap'>
      {selectedDimension ? (
        <Box sx={{ my: 4 }}>
          <Typography sx={{ my: 4, pl: 1 }} variant='h4'>
            {t('admin:dimensionViewDimensionColorEdit')}
          </Typography>
          <Box sx={{ mx: 4 }}>
            <ColorSelect
              label={t('admin:dimensionNewDimensionColorLabel')}
              value={color}
              setValue={handleColorChange}
            />
            <Button variant='outlined' onClick={handleColorSave}>
              {t('admin:save')}
            </Button>
          </Box>
          <Typography sx={{ my: 4, pl: 1 }} variant='h4'>
            {t('admin:dimensionViewDimensionEdit')}
          </Typography>
          <EditDimension
            language={selectedLanguage}
            dimension={selectedDimension}
            onDelete={handleDimensionDeletion}
          />
        </Box>
      ) : (
        <Typography sx={{ my: 4, pl: 1 }} variant='h4'>
          {t('admin:dimensionViewInfo')}
        </Typography>
      )}
    </Box>
  )
}

export default EditDimensions
