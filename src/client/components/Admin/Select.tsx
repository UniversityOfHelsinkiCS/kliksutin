/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { Control, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { HexColorInput, HexColorPicker } from 'react-colorful'
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Tooltip,
} from '@mui/material'

import { DimensionSelectionData, Locales, Question } from '@backend/types'

import useSurvey from '../../hooks/useSurvey'
import useQuestions from '../../hooks/useQuestions'

import DimensionChip from '../Chip/DimensionChip'

import { allSelection, languages, sortDimensions } from './config'

import { Recommendation } from '../../types'
import { getDimensions } from '../../util/dimensions'

type HandleChange = (event: SelectChangeEvent) => void

const SelectWrapper = ({
  label,
  value,
  handleChange,
  children,
}: {
  label: string
  value: string
  handleChange: HandleChange
  children: React.ReactNode
}) => (
  <Box sx={{ width: '20vw', mx: 4 }}>
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={value} onChange={handleChange}>
        {children}
      </Select>
    </FormControl>
  </Box>
)

export const DialogSelect = ({
  label,
  value,
  control,
  children,
}: {
  label: string
  value: string
  control: Control<any>
  children: React.ReactNode
}) => (
  <Controller
    control={control}
    name={value}
    defaultValue=""
    render={({ field }) => (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select {...field} size="medium" label={label}>
          {children}
        </Select>
      </FormControl>
    )}
  />
)

export const LanguageSelect = () => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')

  useEffect(() => {
    const persistLanguage = searchParams.get('transLang')

    if (persistLanguage) setSelectedLanguage(persistLanguage as keyof Locales)

    if (!persistLanguage) setSearchParams({ transLang: selectedLanguage })
  }, [searchParams, selectedLanguage, setSearchParams])

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as keyof Locales

    setSelectedLanguage(newLanguage)
    setSearchParams({ language: newLanguage })
  }

  return (
    <Box sx={{ width: '20vw' }}>
      <FormControl fullWidth>
        <FormLabel>{t('admin:selectLanguage')}</FormLabel>
        <RadioGroup defaultValue="en" onChange={handleLanguageChange} row>
          {languages.map(({ id, title }) => (
            <FormControlLabel
              key={id}
              value={id}
              control={<Radio />}
              label={title[language]}
              checked={selectedLanguage === id}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export const DialogDimensionSelect = ({
  label,
  control,
  dimensionQuestion,
}: {
  label: string
  control: Control<any>
  dimensionQuestion: Question | undefined
}) => {
  const { i18n } = useTranslation()
  const { language } = i18n

  if (!dimensionQuestion) return null

  return (
    <Box sx={{ my: 4 }}>
      <InputLabel>{label}</InputLabel>
      <Box sx={{ mt: 2 }}>
        {(dimensionQuestion.optionData.options as DimensionSelectionData[]).map(
          (choice: DimensionSelectionData) => (
            <Controller
              key={choice.id}
              name={`dimensions.${choice.id}`}
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControl>
                  <Box>
                    <Tooltip
                      title={choice.text[language as keyof Locales]}
                      placement="bottom"
                      arrow
                    >
                      <div>
                        <Checkbox
                          {...field}
                          icon={
                            <DimensionChip
                              key={choice.id}
                              choice={choice}
                              color={undefined}
                              compact={false}
                            />
                          }
                          checkedIcon={
                            <DimensionChip
                              key={choice.id}
                              choice={choice}
                              color={choice.color}
                              compact={false}
                            />
                          }
                          value={choice.id}
                          checked={field.value}
                        />
                      </div>
                    </Tooltip>
                  </Box>
                </FormControl>
              )}
            />
          )
        )}
      </Box>
    </Box>
  )
}

export const DimensionSelect = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { dimensionId: persistDimensionId } = useParams()

  const { survey, isLoading } = useSurvey()

  const [dimensionId, setDimensionId] = useState('')

  useEffect(() => {
    if (persistDimensionId) setDimensionId(persistDimensionId)
  }, [persistDimensionId])

  const handleDimensionChange = (event: SelectChangeEvent) => {
    setDimensionId(event.target.value)

    navigate({
      pathname: `./${event.target.value}`,
      search: location.search,
    })
  }

  const language = i18n.language as keyof Locales

  if (isLoading) return null

  const dimensions = getDimensions(survey)

  if (!dimensions) return null

  const sortedDimensions = sortDimensions(dimensions, language)

  return (
    <SelectWrapper
      label={t('admin:selectDimension')}
      value={dimensionId}
      handleChange={handleDimensionChange}
    >
      {sortedDimensions.map(({ id, title }) => (
        <MenuItem key={id} value={id}>
          {title[language]}
        </MenuItem>
      ))}
    </SelectWrapper>
  )
}

export const ResultDimensionSelect = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { questionId, dimensionId: persistDimensionId } = useParams()

  const { survey } = useSurvey()

  const [dimensionId, setDimensionId] = useState('allDimensions')

  useEffect(() => {
    if (persistDimensionId) setDimensionId(persistDimensionId)

    if (questionId && !persistDimensionId) {
      navigate({
        pathname: `./${questionId}/${dimensionId}`,
        search: location.search,
      })
    }
  }, [dimensionId, location.search, navigate, persistDimensionId, questionId])

  const handleDimensionChange = (event: SelectChangeEvent) => {
    setDimensionId(event.target.value)

    navigate({
      pathname: `./${questionId}/${event.target.value}`,
      search: location.search,
    })
  }

  const language = i18n.language as keyof Locales

  const dimensions = getDimensions(survey)

  if (!dimensions || !questionId) return null

  const sortedDimensions = sortDimensions(dimensions, language)
  const dimensionSelections = [allSelection].concat(sortedDimensions)

  return (
    <SelectWrapper
      label={t('admin:selectDimension')}
      value={dimensionId}
      handleChange={handleDimensionChange}
    >
      {dimensionSelections.map(({ id, title }) => (
        <MenuItem key={id} value={id}>
          {title[language]}
        </MenuItem>
      ))}
    </SelectWrapper>
  )
}

const sortQuestions = (questions: Question[], language: keyof Locales) => {
  const sortedQuestions = questions.sort((a, b) => {
    if (a.title[language] > b.title[language]) return 1
    if (a.title[language] < b.title[language]) return -1

    return 0
  })

  return sortedQuestions
}

export const QuestionSelect = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { questionId: persistQuestionId } = useParams()

  const { survey } = useSurvey()
  const { questions, isSuccess } = useQuestions(survey?.id)

  const [questionId, setQuestionId] = useState('')

  useEffect(() => {
    if (persistQuestionId) setQuestionId(persistQuestionId)
  }, [persistQuestionId])

  const handleQuestionChange = (event: SelectChangeEvent) => {
    setQuestionId(event.target.value)

    navigate({
      pathname: `./${event.target.value}`,
      search: location.search,
    })
  }

  const language = i18n.language as keyof Locales

  if (!isSuccess || !questions) return null

  const filteredQuestions = questions.filter(
    ({ optionData }) => !['dimensions'].includes(optionData.type)
  )
  const sortedQuestions = sortQuestions(filteredQuestions, language)

  return (
    <SelectWrapper
      label={t('admin:selectQuestion')}
      value={questionId}
      handleChange={handleQuestionChange}
    >
      {sortedQuestions.map(({ id, title }) => (
        <MenuItem key={id} value={id}>
          {title[language]}
        </MenuItem>
      ))}
    </SelectWrapper>
  )
}

export const RecommendationSelect = ({
  recommendationId,
  recommendations,
  handleChange,
}: {
  recommendationId: string
  recommendations: Recommendation[]
  handleChange: HandleChange
}) => {
  const { t } = useTranslation()

  return (
    <SelectWrapper
      label={t('admin:selectRecommendation')}
      value={recommendationId}
      handleChange={handleChange}
    >
      {recommendations.map(({ id, label }) => (
        <MenuItem key={id} value={id}>
          {label}
        </MenuItem>
      ))}
    </SelectWrapper>
  )
}

export const ColorSelect = ({
  label,
  value,
  setValue,
}: {
  label: string
  value: string
  setValue: (newColor: string) => void
}) => (
  <Box sx={{ my: 4 }}>
    <InputLabel>{label}</InputLabel>
    <Box sx={{ mt: 2 }}>
      <HexColorPicker color={value} onChange={setValue} />
      <HexColorInput color={value} onChange={setValue} />
    </Box>
  </Box>
)
