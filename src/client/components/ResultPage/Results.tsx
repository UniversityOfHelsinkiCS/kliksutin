import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Typography } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'

import RenderResults from './RenderResults'
import SurveyButtons from '../Common/SurveyButtons'
import SendSummaryEmail from './SendSummaryEmail'
import ProceedToContact from './ProceedToContact'
import Openai from '../Openai/Openai'
import CompactDimensionChips from '../Chip/CompactDimensionChips'

import { useResultData } from '../../contexts/ResultDataContext'

import { getResultArray } from '../../util/results'
import { getSelectedDimensionsFromResultData } from '../../util/dimensions'
import styles from '../../styles'

const { cardStyles, resultStyles } = styles

const Results = ({
  setShowResults,
}: {
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const location = useLocation()
  const { t } = useTranslation()
  const { survey } = useSurvey()
  const { resultData } = useResultData()

  if (!survey || !resultData) return null

  const dimensionSelections = getSelectedDimensionsFromResultData(
    survey,
    resultData
  )

  const resultArrays = getResultArray(resultData)

  // Dimensions are the first of the selections
  const dimensions = resultArrays[0]

  // Rest of the selections and empty values filtered
  const resultArray = resultArrays.slice(1).filter(([x]) => x !== '')

  const onNavigateBack = () => {
    sessionStorage.setItem('curre-session-location', 'form')
    setShowResults(false)

    document
      ?.getElementById('curre-main-section')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box>
      <Box sx={cardStyles.outerBox}>
        <Box sx={resultStyles.resultWrapper}>
          <Container sx={{ mt: 4 }}>
            <Typography
              data-cy="result-section-title"
              variant="h5"
              sx={resultStyles.heading}
              component="div"
            >
              {t('results:title')}
            </Typography>
            <CompactDimensionChips
              dimensions={dimensions}
              dimensionSelections={dimensionSelections}
            />
          </Container>

          <RenderResults
            resultArray={resultArray}
            dimensionSelections={dimensionSelections}
          />

          <SendSummaryEmail />

          <SurveyButtons>
            <Button data-cy="back-to-selections" onClick={onNavigateBack}>
              {'<'} {t('results:backToMessage')}
            </Button>
          </SurveyButtons>
        </Box>
      </Box>

      {location.pathname !== '/public' && (
        <Box>
          <Openai />
          <ProceedToContact />
        </Box>
      )}
    </Box>
  )
}

export default Results
