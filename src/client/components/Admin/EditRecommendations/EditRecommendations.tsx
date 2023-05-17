import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, SelectChangeEvent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import useSurvey from '../../../hooks/useSurvey'
import useRecommendations from '../../../hooks/useRecommendations'

import EditRecommendation from './EditRecommendation'
import { LanguageSelect, RecommendationSelect } from '../Select'
import NewItemDialog from './NewItemDialog'

import { Locales, NewRecommendation } from '../../../types'
import { LocalesTextField } from '../TextField'

const EditRecommendations = () => {
  const { t } = useTranslation()
  const { survey } = useSurvey()
  const { recommendations, isSuccess } = useRecommendations(survey?.id)

  const [recommendationId, setRecommendationId] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')
  const [showModal, setShowModal] = useState(false)

  const { handleSubmit, control } = useForm<NewRecommendation>({
    mode: 'onBlur',
    shouldUnregister: true,
    defaultValues: {
      type: 'teaching',
      title: {
        fi: '',
        sv: '',
        en: '',
      },
      text: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  })

  const handleQuestionChange = (event: SelectChangeEvent) => {
    setRecommendationId(event.target.value)
  }

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as keyof Locales)
  }

  const onSubmit = (data: any) => {
    console.log(data)

    setShowModal(false)
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
          onClick={() => setShowModal(!showModal)}
        >
          {t('admin:recommendationAddNew')}
        </Button>
      </Box>
      <form>
        <NewItemDialog
          open={showModal}
          title={t('admin:recommendationNewRecommendationInfo')}
          content={t('admin:recommendationNewRecommendationContent')}
          onSubmit={handleSubmit(onSubmit)}
          onClose={() => setShowModal(!showModal)}
        >
          <LocalesTextField
            value="title"
            inputlabel={t('admin:recommendationNewRecommendationTitleLabel')}
            control={control}
          />
          <LocalesTextField
            value="text"
            inputlabel={t('admin:recommendationNewRecommendationContentLabel')}
            control={control}
          />
        </NewItemDialog>
      </form>
      <Box width="100%" flexWrap="wrap">
        {recommendationId ? (
          <Box sx={{ my: 4 }}>
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
    </Box>
  )
}

export default EditRecommendations
