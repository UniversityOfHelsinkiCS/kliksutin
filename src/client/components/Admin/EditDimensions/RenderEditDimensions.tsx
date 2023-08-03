import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button } from '@mui/material'

import NewDimensionForm from './NewDimensionForm'
import { LanguageSelect, DimensionSelect } from '../Select'

const RenderEditDimensions = () => {
  const { t } = useTranslation()

  const [openNewDimension, setOpenNewDimension] = useState(false)

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

      <Outlet />

      <NewDimensionForm open={openNewDimension} setOpen={setOpenNewDimension} />
    </Box>
  )
}

export default RenderEditDimensions
