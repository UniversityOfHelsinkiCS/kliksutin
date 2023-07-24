/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
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

import DimensionChip from '../Chip/DimensionChip'

import { languages } from './config'

import { Recommendation } from '../../types'

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

export const LanguageSelect = ({
  selectedLanguage,
  handleChange,
}: {
  selectedLanguage: keyof Locales
  handleChange: HandleChange
}) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales

  return (
    <Box sx={{ width: '20vw' }}>
      <FormControl fullWidth>
        <FormLabel>{t('admin:selectLanguage')}</FormLabel>
        <RadioGroup defaultValue="en" onChange={handleChange} row>
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

export const DimensionSelect = ({
  dimensionId,
  dimensions,
  handleChange,
}: {
  dimensionId: string
  dimensions: DimensionSelectionData[]
  handleChange: HandleChange
}) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales

  return (
    <SelectWrapper
      label={t('admin:selectDimension')}
      value={dimensionId}
      handleChange={handleChange}
    >
      {dimensions.map(({ id, title }) => (
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

export const QuestionSelect = ({
  questionId,
  questions,
  handleChange,
}: {
  questionId: string
  questions: Question[]
  handleChange: HandleChange
}) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales

  const filteredQuestions = questions.filter(
    ({ optionData }) => !['dimensions'].includes(optionData.type)
  )
  const sortedQuestions = sortQuestions(filteredQuestions, language)

  return (
    <SelectWrapper
      label={t('admin:selectQuestion')}
      value={questionId}
      handleChange={handleChange}
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
