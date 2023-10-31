import {
  DimensionSelectionData,
  FormValues,
  Locales,
  Question,
} from '@backend/types'
import { SxProps } from '@mui/material'
import { Control, UseFormWatch, UseFormRegister } from 'react-hook-form'

export interface Faculty {
  code: string
  name: Locales
}

export interface InputProps {
  sx?: SxProps
  control?: Control<any>
  watch?: UseFormWatch<any>
  register?: UseFormRegister<any>
  question?: Question
  children?: React.ReactNode
  language?: string
  questions?: Question[]
  isSubmitted?: boolean
}

export type SurveySave = 'curre_local_save'

export interface PersistForm {
  value: FormValues
  sessionStorageKey: SurveySave
}

/** Represents the recommendation data that has rawRecommendationdata and Recommendationdata by tool names eg. "moodle" into one bigger entity that has all the subtools, dimensions and texts needed */
export interface MergedRecommendationData {
  subtools: string[]
  dimensions: string[]
  id: number
  label: string
  title: Locales
  text: Locales
}

/** Represents the recommendation data that is processed and ready to be used */
export interface RecommendationData {
  label: string
  dimensions: string[]
}

/** Represents the recommendation data that is fetched form database API /recommendations/{surveyID} */
export interface Recommendation {
  id: number
  label: string
  type: string
  title: Locales
  text: Locales
  dimensions: string[]
}

/** List of selected tools or non selected tools if no dimensionSelection is provided */
export interface SelectedTools {
  mergedRecommendationData: MergedRecommendationData[]
  dimensionSelections?: DimensionSelectionData[]
}

export interface Survey {
  id: number
  name: string
  title: Locales
  text: Locales
  Questions: Question[]
  createdAt?: Date
  updatedAt?: Date
}

export interface Entry {
  id: number
  surveyId: number
  userId: string
  data: FormValues
  sessionToken: string
  reminderSent: boolean
  SurveyId: number
  UserId: string
}
