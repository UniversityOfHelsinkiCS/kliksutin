/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { Box, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'

import { Locales } from '@backend/types'

import {
  useDeleteRecommendationMutation,
  useEditRecommendationMutation,
} from '../../../hooks/useRecommendationMutation'

import DeleteDialog from '../DeleteDialog'

import { Recommendation } from '../../../types'
import { UpdatedRecommendation } from '../../../../validators/recommendations'

const RecommendationItem = ({
  language,
  recommendation,
}: {
  language: keyof Locales
  recommendation: Recommendation
}) => {
  const { t } = useTranslation()
  const mutation = useEditRecommendationMutation(recommendation.id)
  const [recommendationTitle, setRecommendationTitle] = useState<
    string | undefined
  >(recommendation.title[language])
  const [recommendationText, setRecommendationText] = useState<
    string | undefined
  >(recommendation.text[language])

  useEffect(() => {
    setRecommendationTitle(recommendation.title[language])
    setRecommendationText(recommendation.text[language])
  }, [language, recommendation])

  const handleSave = async () => {
    const updatedRecommendation: UpdatedRecommendation = {
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
          {t('admin:recommendationTitle')}
          <Typography ml={1}>{language}</Typography>
        </Typography>
        <MDEditor
          data-color-mode="light"
          height={200}
          value={recommendationTitle}
          onChange={setRecommendationTitle}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography sx={{ display: 'flex', mb: 2 }} variant="h6">
          {t('admin:recommendationText')}
          <Typography ml={1}>{language}</Typography>
        </Typography>
        <MDEditor
          data-color-mode="light"
          height={400}
          value={recommendationText}
          onChange={setRecommendationText}
        />
      </Box>

      <Button variant="outlined" onClick={handleSave}>
        {t('admin:save')}
      </Button>
    </Box>
  )
}

const EditRecommendation = ({
  language,
  recommendation,
  onDelete,
}: {
  language: keyof Locales
  recommendation: Recommendation
  onDelete: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { t } = useTranslation()
  const [openAlert, setOpenAlert] = useState(false)
  const mutation = useDeleteRecommendationMutation(recommendation.id)

  const handleDelete = async () => {
    try {
      await mutation.mutateAsync()
      enqueueSnackbar(t('admin:deleteSuccess'), { variant: 'success' })
      setOpenAlert(false)
      onDelete('') // callback to reset the selected recommendation ID
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
        {t('admin:recommendationRemove', {
          recommendationName: recommendation.label,
        })}
      </Button>
      <DeleteDialog
        open={openAlert}
        title={t('admin:recommendationRemoveRecommendationInfo', {
          recommendationName: recommendation.label,
        })}
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
          language={language}
          recommendation={recommendation}
        />
      </Box>
    </>
  )
}

export default EditRecommendation
