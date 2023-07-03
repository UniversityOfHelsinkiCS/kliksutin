/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Box, Button, SelectChangeEvent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import useSurvey from '../../../hooks/useSurvey'

import { DimensionSelect, LanguageSelect } from '../Select'
import EditDimension from './EditDimension'

import { getDimensions } from '../../../util/dimensions'

import { Locales } from '../../../types'

const EditDimensions = () => {
  const { t } = useTranslation()
  const { survey } = useSurvey()

  const [dimensionId, setDimensionId] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')

  const [openNewDimension, setOpenNewDimension] = useState(false)

  const handleDimensionChange = (event: SelectChangeEvent) => {
    setDimensionId(event.target.value)
  }

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as keyof Locales)
  }

  if (!survey) return null

  const dimensions = getDimensions(survey)

  const selectedDimension = dimensions.find(
    (dimension) => dimension.id === dimensionId
  )

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
        <DimensionSelect
          dimensionId={dimensionId}
          dimensions={dimensions}
          handleChange={handleDimensionChange}
        />
        <LanguageSelect
          selectedLanguage={selectedLanguage}
          handleChange={handleLanguageChange}
        />
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
    </Box>
  )
}

export default EditDimensions
