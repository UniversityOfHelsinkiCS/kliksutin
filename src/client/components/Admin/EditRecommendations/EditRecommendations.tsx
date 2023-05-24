import React, { useState } from 'react'
import { Box, Button, SelectChangeEvent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import useSurvey from '../../../hooks/useSurvey'
import useRecommendations from '../../../hooks/useRecommendations'

import EditRecommendation from './EditRecommendation'
import NewRecommendationForm from './NewRecommendationForm'
import { LanguageSelect, RecommendationSelect } from '../Select'

import { Locales } from '../../../types'
import DeleteDialog from './DeleteDialog'

const EditRecommendations = () => {
  const { t } = useTranslation()

  const { survey } = useSurvey()
  const { recommendations, isSuccess } = useRecommendations(survey?.id)

  const [recommendationId, setRecommendationId] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')
  const [openForm, setOpenForm] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  const handleQuestionChange = (event: SelectChangeEvent) => {
    setRecommendationId(event.target.value)
  }

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as keyof Locales)
  }

  const handleDelete = async () => {
    try {
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
      setOpenAlert(false)
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  if (!isSuccess) return null

  const selectedRecommendation = recommendations.find(
    ({ id }) => id === (recommendationId as unknown as number)
  )

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
        <RecommendationSelect
          recommendationId={recommendationId}
          recommendations={recommendations}
          handleChange={handleQuestionChange}
        />
        <LanguageSelect
          selectedLanguage={selectedLanguage}
          handleChange={handleLanguageChange}
        />
        <Button
          sx={{ position: 'absolute', right: 0, mr: 2, alignSelf: 'center' }}
          variant="contained"
          onClick={() => setOpenForm(!openForm)}
        >
          {t('admin:recommendationAddNew')}
        </Button>
      </Box>

      <Box width="100%" flexWrap="wrap">
        {recommendationId ? (
          <Box sx={{ my: 4 }}>
            <Button
              sx={{
                position: 'absolute',
                right: 0,
                mr: 4,
                alignSelf: 'center',
              }}
              variant="outlined"
              color="error"
              onClick={() => setOpenAlert(!openAlert)}
            >
              {t('admin:recommendationRemove')}
            </Button>
            <Typography sx={{ my: 4, pl: 1 }} variant="h4">
              {t('admin:recommendationViewRecommendationEdit')}
            </Typography>
            <EditRecommendation
              language={selectedLanguage}
              recommendation={selectedRecommendation}
            />
          </Box>
        ) : (
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:recommendationViewInfo')}
          </Typography>
        )}
      </Box>

      <NewRecommendationForm open={openForm} setOpen={setOpenForm} />
      <DeleteDialog
        open={openAlert}
        title={t('admin:recommendationRemoveRecommendationInfo')}
        content={t('admin:recommendationRemoveRecommendationContent')}
        setOpen={setOpenAlert}
        onSubmit={handleDelete}
      />
    </Box>
  )
}

export default EditRecommendations
