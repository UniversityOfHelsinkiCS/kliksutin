import React, { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import {
  useDeleteRecommendationMutation,
  useEditRecommendationMutation,
} from '../../../hooks/useRecommendationMutation'

import DeleteDialog from '../DeleteDialog'
import { ContentTextField, TitleTextField } from '../TextField'

import { Locales, Recommendation } from '../../../types'
import { RecommendationUpdates } from '../../../../server/types'

const RecommendationItem = ({
  language,
  recommendation,
}: {
  language: keyof Locales
  recommendation: Recommendation
}) => {
  const { t } = useTranslation()
  const mutation = useEditRecommendationMutation(recommendation.id)
  const [recommendationTitle, setRecommendationTitle] = useState(
    recommendation.title[language]
  )
  const [recommendationText, setRecommendationText] = useState(
    recommendation.text[language]
  )

  useEffect(() => {
    setRecommendationTitle(recommendation.title[language])
    setRecommendationText(recommendation.text[language])
  }, [language, recommendation])

  const handleSave = async () => {
    const updatedRecommendation: RecommendationUpdates = {
      title: {
        ...recommendation.title,
        [language]: recommendationTitle,
      },
      text: {
        ...recommendation.text,
        [language]: recommendationText,
      },
    }

    try {
      await mutation.mutateAsync(updatedRecommendation)
      enqueueSnackbar(t('admin:saveSuccess'), { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <Box sx={{ my: 2, mx: 4, width: '50%' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h6">{t('admin:recommendation')}</Typography>
        <Typography ml={1}>{language}</Typography>
      </Box>
      <TitleTextField
        value={recommendationTitle}
        onChange={(event) => setRecommendationTitle(event.target.value)}
      />

      <ContentTextField
        value={recommendationText}
        onChange={(event) => setRecommendationText(event.target.value)}
      />
      <Button onClick={handleSave}>{t('admin:save')}</Button>
    </Box>
  )
}

const EditRecommendation = ({
  selectedLanguage,
  recommendation,
  onDelete,
}: {
  selectedLanguage: keyof Locales
  recommendation: Recommendation
  onDelete: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { t } = useTranslation()
  const mutation = useDeleteRecommendationMutation(recommendation.id)
  const [openAlert, setOpenAlert] = useState(false)

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync()
      enqueueSnackbar(t('admin:deleteSuccess'), { variant: 'success' })
      setOpenAlert(false)
      onDelete('') // callback to reset the selected recommendation ID
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
        {t('admin:recommendationRemove')}
      </Button>
      <DeleteDialog
        open={openAlert}
        title={t('admin:recommendationRemoveRecommendationInfo')}
        content={t('admin:recommendationRemoveRecommendationContent')}
        setOpen={setOpenAlert}
        onSubmit={handleDelete}
      />
      <Box mb={5} display="flex">
        <RecommendationItem
          language={'fi' as keyof Locales}
          recommendation={recommendation}
        />
        <RecommendationItem
          language={selectedLanguage}
          recommendation={recommendation}
        />
      </Box>
    </>
  )
}

export default EditRecommendation
