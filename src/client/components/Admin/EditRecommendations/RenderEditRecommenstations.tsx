import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import NewRecommendationForm from './NewRecommendationForm'
import { LanguageSelect, RecommendationSelect } from '../Select'

const RenderEditRecommendations = () => {
  const { t } = useTranslation()

  const [openForm, setOpenForm] = useState(false)

  return (
    <Box sx={{ mx: 2, mt: 8 }}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          my: 4,
          justifyContent: 'flex-start',
        }}
      >
        <RecommendationSelect />

        <LanguageSelect />

        <Button
          sx={{ position: 'absolute', right: 0, mr: 2, alignSelf: 'center' }}
          variant="contained"
          onClick={() => setOpenForm(!openForm)}
        >
          {t('admin:recommendationAddNew')}
        </Button>
      </Box>

      <Outlet />

      <NewRecommendationForm open={openForm} setOpen={setOpenForm} />
    </Box>
  )
}

export default RenderEditRecommendations
