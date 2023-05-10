import {
  Control,
  UseFormWatch,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

export interface Faculty {
  code: string
  name: Locales
}

export interface User {
  id: string
  username: string
  firstName?: string
  lastName?: string
  email?: string
  language?: string
  isAdmin: boolean
  iamGroups: string[]
  newUser: boolean
}

export interface InputProps {
  control?: Control<FieldValues>
  watch?: UseFormWatch<FieldValues>
  register?: UseFormRegister<FieldValues>
  question?: Question
  children?: React.ReactNode
  language?: string
  questions?: Question[]
  isSubmitted?: boolean
  formResultData?: FormValues
}

export interface FormValues {
  [key: number]: Record<string, { [key: string]: boolean }>
  faculty: string
}

export interface PersistForm {
  value: FormValues
  sessionStorageKey: string
}

export type Locales = {
  en: string
  fi: string
  sv: string
}

export interface InfoType {
  id: string
  title?: Locales
  label: Locales
}

export type SingleChoiceType = {
  id: string
  label: Locales
  title: Locales
}

export interface MultipleChoiceType extends SingleChoiceType {
  data: Locales
}

export type ChoiceType =
  | SingleChoiceType[]
  | MultipleChoiceType[]
  | DimensionSelectionData[]

export type PossibleChoiceTypes =
  | 'singleChoice'
  | 'multipleChoice'
  | 'dimensions'
  | 'info'

export interface OptionData {
  type: string
  options: ChoiceType
}

/** List of question selection id's that controls the visibility of a tool */
export type Visibility = {
  options: string[]
}

/** Represents a subtool of a tool. Visibility controls when to render a subtool based on a question selection id eg. "isCourseMooc" */
export interface Subtool {
  label: string
  title: Locales
  visibility: Visibility
}

/** Represents a tool that has a common name eg. "moodle" and alse subtools that link to this type of tool. Subtools may be empty and they are rendered based on the visibility field */
export interface ToolType {
  label: string
  subtools: Subtool[]
}

/** Represents the dimension data that has the dimensions common name as id, label and texts are for visible rendering as Locales and data includes tools eg. "moodle" and their respective subtools */
export interface DimensionSelectionData {
  id: string
  title: Locales
  label: Locales
  text: Locales
  data: ToolType[]
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
  title: Locales
  text: Locales
  dimensions?: string[]
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
  createdAt: Date
  updatedAt: Date
  Questions: Question[]
}

export interface Question {
  id: number
  surveyId: number
  parentId: number
  priority: number
  title: Locales
  text: Locales
  optionData: OptionData
  visibility: Visibility
  createdAt: Date
  updatedAt: Date
}

export interface Result {
  id: number
  surveyId: number
  optionLabel: string
  isSelected: Locales
  createdAt: Date
  updatedAt: Date
  data: {
    [key: string]: Locales
  }
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
  nameSpecifier?: Locales
  assessmentItemIds?: string[]
  activityPeriod?: {
    endDate: Date
    startDate: Date
  }
  courseUnitRealisationTypeUrn?: string
  responsibilityInfos?: any[]
  courseUnits?: CourseUnit[]
}
