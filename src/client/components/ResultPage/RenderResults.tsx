import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import { DimensionSelectionData, Locales } from '@backend/types'

import useSurvey from '../../hooks/useSurvey'
import useResults from '../../hooks/useResults'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import ResultElement from './ResultElement'

import { useResultData } from '../../contexts/ResultDataContext'

interface RenderResultProps {
  resultArray: string[][]
  dimensionSelections: DimensionSelectionData[] | null
}

const RenderResults = ({
  resultArray,
  dimensionSelections,
}: RenderResultProps) => {
  const { i18n } = useTranslation()
  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)
  const refCallback = useResultRefCallback()

  const { resultData } = useResultData()
  const { language } = i18n

  if (!survey || !resultsFetched || !resultData || !dimensionSelections)
    return null

  return (
    <Box ref={refCallback}>
      {resultArray.map((resultLabels) =>
        resultLabels.map((resultLabel) => (
          <ResultElement
            key={JSON.stringify(resultLabel)}
            language={language as keyof Locales}
            resultData={results?.find(
              (result: { optionLabel: string }) =>
                result.optionLabel === resultLabel
            )}
            dimensionSelections={dimensionSelections}
          />
        ))
      )}
    </Box>
  )
}

export default RenderResults
