import { DimensionSelectionData, Locales, Question } from '@backend/types'
import { Control, UseFormWatch, UseFormRegister } from 'react-hook-form'

export interface Faculty {
  code: string
  name: Locales
}

export interface InputProps {
  control?: Control<any>
  watch?: UseFormWatch<any>
  register?: UseFormRegister<any>
  question?: Question
  children?: React.ReactNode
  language?: string
  questions?: Question[]
  isSubmitted?: boolean
}

export interface FormValues {
  [key: number]: Record<string, { [key: string]: boolean }>
  course: string
  faculty: string
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

export interface CourseUnit {
  id: string
  code: string
  responsibilityInfos: {
    text: string | null
    roleUrn: string
    personId: string
    validityPeriod: {}
  }[]
  name: Locales
  validityPeriod: {
    startDate: Date
  }
}

export interface Course {
  id: string
  code: string
  name: Locales
  nameSpecifier: Locales
  assessmentItemIds?: string[]
  activityPeriod?: {
    endDate: Date
    startDate: Date
  }
  courseUnitRealisationTypeUrn?: string
  responsibilityInfos?: any[]
  courseUnits?: CourseUnit[]
}
