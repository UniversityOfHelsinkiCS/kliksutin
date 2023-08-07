import React from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Container, Typography } from '@mui/material'

import { Course, Locales } from '@backend/types'

import useEntry from '../../hooks/useEntry'
import useSurvey from '../../hooks/useSurvey'
import { useCourse } from '../../hooks/useCourses'

import RenderResults from '../ResultPage/RenderResults'
import CompactDimensionChips from '../Chip/CompactDimensionChips'

import { getCourseName } from '../../util/courses'
import { getResultArray } from '../../util/results'
import { getSelectedDimensionsFromResultData } from '../../util/dimensions'

import styles from '../../styles'

const { cardStyles, resultStyles } = styles

interface CourseInfoProps {
  course: Course | undefined
}

const CourseInfo = ({ course }: CourseInfoProps) => {
  const { i18n } = useTranslation()

  const language = i18n.language as keyof Locales

  if (!course) return null

  const courseName = getCourseName(course, language)

  return <Container sx={{ mt: 4 }}>{courseName[language]}</Container>
}

const Viewer = () => {
  const { t } = useTranslation()
  const { entryId } = useParams()
  const { survey } = useSurvey()
  const { entry, isLoading } = useEntry(entryId)
  const { course } = useCourse(entry?.data.course)

  if (!survey || isLoading || !entry) return null

  const { data: resultData } = entry

  const dimensionSelections = getSelectedDimensionsFromResultData(
    survey,
    resultData
  )

  const resultArrays = getResultArray(resultData)

  // Dimensions are the first of the selections
  const dimensions = resultArrays[0]

  // Rest of the selections and empty values filtered
  const resultArray = resultArrays.slice(1).filter(([x]) => x !== '')

  return (
    <Box sx={cardStyles.outerBox}>
      <Box sx={resultStyles.resultWrapper}>
        <CourseInfo course={course} />
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
      </Box>
    </Box>
  )
}

export default Viewer
