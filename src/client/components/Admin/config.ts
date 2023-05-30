import { DimensionSelectionData, InfoType, Locales } from '../../types'

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

export const allSelection: DimensionSelectionData = {
  id: 'allDimensions',
  label: 'allDimensions',
  title: {
    fi: 'Kaikki',
    sv: 'All',
    en: 'All',
  },
  text: {
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

export const questionTypes: InfoType[] = [
  {
    id: 'singleChoice',
    title: {
      fi: 'Yksittäis valinta',
      sv: 'Yksittäis valinta',
      en: 'Yksittäis valinta',
    },
  },
  {
    id: 'multiChoice',
    title: {
      fi: 'Monivalinta',
      sv: 'Monivalinta',
      en: 'Monivalinta',
    },
  },
  {
    id: 'dimensions',
    title: {
      fi: 'Oppimismuoto',
      sv: 'Oppimismuoto',
      en: 'Oppimismuoto',
    },
  },
  {
    id: 'info',
    title: {
      fi: 'Infokenttä',
      sv: 'Infokenttä',
      en: 'Infokenttä',
    },
  },
]

export const sortDimensions = (
  dimensions: DimensionSelectionData[],
  language: keyof Locales
) => {
  const sortedDimensions = dimensions.sort((a, b) => {
    if (a.title[language] > b.title[language]) return 1
    if (a.title[language] < b.title[language]) return -1

    return 0
  })

  return sortedDimensions
}
