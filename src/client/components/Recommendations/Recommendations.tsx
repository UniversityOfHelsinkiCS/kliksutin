import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import {
  DimensionSelectionData,
  ToolType,
  Subtool,
  Locales,
} from '@backend/types'

import useRecommendations from '../../hooks/useRecommendations'
import useSurvey from '../../hooks/useSurvey'

import SelectedTools from './SelectedTools'
import NonSelectedTools from './NonSelectedTools'
import AdministativeTools from './AdministrativeTools'
import ShowMore from '../Common/ShowMore'

import { getSelectedDimensionsFromWatch } from '../../util/dimensions'
import {
  sortRecommendations,
  getRecommendationsData,
} from '../../util/recommendations'

import styles from '../../styles'

import {
  InputProps,
  MergedRecommendationData,
  Recommendation,
} from '../../types'

const Recommendations = ({ watch }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const { survey } = useSurvey()
  const { recommendations, isSuccess: recommendationsFetched } =
    useRecommendations(survey?.id)

  const { recommendationStyles, cardStyles } = styles

  if (!recommendationsFetched || !recommendations || !survey || !watch)
    return null

  const teachingRecommendations = recommendations.filter(
    (rec) => rec.type === 'teaching'
  )
  const administrativeRecommendations = recommendations.filter(
    (rec) => rec.type === 'administration'
  )

  const rawRecommendationData: Recommendation[] =
    teachingRecommendations.sort(sortRecommendations)

  const dimensionSelections = getSelectedDimensionsFromWatch(survey, watch)

  if (!dimensionSelections) return null

  const recommendationsData = getRecommendationsData(
    rawRecommendationData,
    dimensionSelections
  )

  const extractSubtools = (toolLabel: string) => {
    const extractedSubtoolObjects: Subtool[] = dimensionSelections
      .map((aSelection: DimensionSelectionData) =>
        (aSelection.data as ToolType[]).filter(
          (aTool: ToolType) => aTool.recommendationLabel === toolLabel
        )
      )
      .map((aTool: ToolType[]) => aTool[0]?.subtools)
      .flat(1) // flatten the arrays into one array

    // at the moment only the Suoritusmuoto selections will affect
    // visible Moodle subtools.
    const courseCompletionMethodQuestion = watch('4')

    const extractedSubtools = extractedSubtoolObjects.map((aSubtool) => {
      // if subtool has the visibility options, check if it should be rendered or not
      if (aSubtool?.visibility.options) {
        if (!courseCompletionMethodQuestion) return null

        const [...options] = aSubtool.visibility.options
        const selectedCompletionMethods = Object.keys(
          courseCompletionMethodQuestion
        ).filter((key) => courseCompletionMethodQuestion[key])

        if (
          !options.some((option) => selectedCompletionMethods.includes(option))
        )
          return null
      }

      return aSubtool?.title[language as keyof Locales]
    })

    return Array.from(new Set(extractedSubtools.sort()))
  }

  const mergedRecommendationData = rawRecommendationData.map(
    (aRawTool): MergedRecommendationData => {
      const subtools = extractSubtools(aRawTool.label) as string[]

      return {
        ...aRawTool,
        ...recommendationsData.find((aTool) => aTool.label === aRawTool.label),
        subtools,
      }
    }
  )

  return (
    <Box sx={recommendationStyles.recommendationContainer}>
      <Typography
        data-cy="recommendation-section-title"
        variant="h5"
        sx={cardStyles.heading}
        component="span"
      >
        {t('recommendations:title')}
        <ShowMore text={t('recommendations:infoBoxText')} />
      </Typography>

      <SelectedTools
        mergedRecommendationData={mergedRecommendationData}
        dimensionSelections={dimensionSelections}
      />
      <NonSelectedTools mergedRecommendationData={mergedRecommendationData} />
      <AdministativeTools
        administrativeRecommendations={administrativeRecommendations}
      />
    </Box>
  )
}

export default Recommendations
