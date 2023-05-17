import { InfoType } from '../../types'

export const recommendationTypes: InfoType[] = [
  {
    id: 'teaching',
    title: {
      fi: 'Opetus',
      sv: 'Opetus',
      en: 'Teaching',
    },
  },
  {
    id: 'administration',
    title: {
      fi: 'Hallinto',
      sv: 'Hallinto',
      en: 'Adminisitration',
    },
  },
]

export const allSelection: InfoType = {
  id: 'allDimensions',
  title: {
    fi: 'Kaikki',
    sv: 'All',
    en: 'All',
  },
}

export const languages: InfoType[] = [
  {
    id: 'en',
    title: {
      fi: 'englanti',
      sv: 'engelska',
      en: 'English',
    },
  },
  {
    id: 'sv',
    title: {
      fi: 'ruotsi',
      sv: 'svenska',
      en: 'Swedish',
    },
  },
]
