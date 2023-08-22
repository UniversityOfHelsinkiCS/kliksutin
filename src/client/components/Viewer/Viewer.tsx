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
import CrunchingProgress from '../Common/CrunchingProgress'

const { cardStyles, resultStyles } = styles

interface CourseInfoProps {
  course: Course | undefined
}

const CourseInfo = ({ course }: CourseInfoProps) => {
  const { t, i18n } = useTranslation()

  const language = i18n.language as keyof Locales

  if (!course) return null

  const courseName = getCourseName(course, language)

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="body2" sx={cardStyles.question}>
        {t('viewer:entryViewCourse')}: {courseName[language]} - {course.id}
      </Typography>
    </Container>
  )
}

const EntryInfo = ({ entry }: any) => {
  const { t } = useTranslation()

  if (!entry) return null

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        data-cy="viewer-entryInfo-section-title"
        variant="h5"
        sx={resultStyles.heading}
        component="div"
      >
        {t('viewer:entryInfoTitle')}
      </Typography>
      <Box>
        <Typography variant="body2" sx={cardStyles.question}>
          {t('viewer:entryViewSurvey')}: {t(`common:appName`)}
        </Typography>
        <Typography variant="body2" sx={cardStyles.question}>
          {t('viewer:entryViewFaculty')}: {entry.data.faculty}
        </Typography>
        <Typography variant="body2" sx={cardStyles.question}>
          {t('viewer:entryViewCreated')}:{' '}
          {new Date(entry.createdAt).toLocaleString()}
        </Typography>
        <Typography variant="body2" sx={cardStyles.question}>
          {t('viewer:entryViewUpdated')}:{' '}
          {new Date(entry.updatedAt).toLocaleString()}
        </Typography>
      </Box>
    </Container>
  )
}

const Viewer = () => {
  const { t } = useTranslation()
  const { entryId } = useParams()
  const { survey, isLoading: surveyIsLoading } = useSurvey()
  const { entry, isLoading: entryIsLoading } = useEntry(entryId)
  const { course, isLoading: courseIsLoading } = useCourse(entry?.data.course)

  if (
    !survey ||
    !entry ||
    !course ||
    surveyIsLoading ||
    entryIsLoading ||
    courseIsLoading
  )
    return <CrunchingProgress />

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
        <EntryInfo entry={entry} />
        <CourseInfo course={course} />
        <Container sx={{ mt: 4 }}>
          <Typography
            data-cy="viewer-results-section-title"
            variant="h5"
            sx={resultStyles.heading}
            component="div"
          >
            {t('viewer:entryViewTitle')}
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
