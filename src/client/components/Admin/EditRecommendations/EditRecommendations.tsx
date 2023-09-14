import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

import { DimensionSelectionData, Locales } from '@backend/types'

import useSurvey from '../../../hooks/useSurvey'
import useRecommendations from '../../../hooks/useRecommendations'

import EditRecommendation from './EditRecommendation'
import { MultiDimensionSelect } from '../Select'

const EditRecommendations = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { recommendationId } = useParams()
  const [searchParams] = useSearchParams()
  const { survey } = useSurvey()
  const { recommendations } = useRecommendations(survey?.id)
  const [dimensionSelection, setDimensionSelection] = useState({})

  const selectedLanguage = searchParams.get('transLang') as keyof Locales

  const selectedRecommendation = recommendations?.find(
    ({ id }) => id === Number(recommendationId)
  )
  const dimensionQuestion = survey?.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  useEffect(() => {
    if (!dimensionQuestion) return

    const dimensionQuestionOptions = dimensionQuestion?.optionData
      .options as unknown as DimensionSelectionData[]

    const oldDimensions = dimensionQuestionOptions.filter((dimension) =>
      dimension?.data?.some(
        (dataItem) =>
          dataItem.recommendationLabel === selectedRecommendation?.label
      )
    )

    const selectedDimensions = oldDimensions.reduce((result, dimension) => {
      // eslint-disable-next-line no-param-reassign
      result[dimension.id] = true
      return result
    }, {} as Record<string, boolean>)

    setDimensionSelection(selectedDimensions)
  }, [survey, selectedRecommendation, dimensionQuestion])

  const handleRecommendationDeletion = () => {
    navigate({
      pathname: '/admin/edit-recommendations',
      search: location.search,
    })
  }

  return (
    <Box width='100%' flexWrap='wrap'>
      {recommendationId && selectedRecommendation ? (
        <Box sx={{ my: 4 }}>
          <Typography sx={{ my: 4, pl: 1 }} variant='h4'>
            {t('admin:recommendationViewDimensionEdit')}
          </Typography>
          <Box sx={{ mx: 4 }}>
            <MultiDimensionSelect
              label={t('admin:recommendationNewDimensions')}
              dimensionQuestion={dimensionQuestion}
              value={dimensionSelection}
              setValue={setDimensionSelection}
            />
            <Button variant='outlined' onClick={() => {}}>
              {t('admin:save')}
            </Button>
          </Box>
          <Typography sx={{ my: 4, pl: 1 }} variant='h4'>
            {t('admin:recommendationViewRecommendationEdit')}
          </Typography>
          <EditRecommendation
            language={selectedLanguage}
            recommendation={selectedRecommendation}
            onDelete={handleRecommendationDeletion}
          />
        </Box>
      ) : (
        <Typography sx={{ my: 4, pl: 1 }} variant='h4'>
          {t('admin:recommendationViewInfo')}
        </Typography>
      )}
    </Box>
  )
}

export default EditRecommendations
