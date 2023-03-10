import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import styles from './styles'
import ShowMore from '../Common/ShowMore'
import Markdown from '../Common/Markdown'
import { Locales } from '../../types'

const classes = styles.cardStyles

const helloMessages = {
  title: {
    fi: '## Tervetuloa Curreen  --- Curre julkaistaan virallisesti maanantaina 13.3.',
    sv: '## Tervetuloa Curreen',
    en: '## Tervetuloa Curreen',
  },
  text: {
    fi: '### Curre auttaa opettajaa digipedagogisissa valinnoissa. Voit käyttää Currea tukena kun haluat ideoida uusia mahdollisuuksia hyödyntää digitalisaatiota osana opetusta ja oppimista kurssillasi.',
    sv: '### Curre auttaa opettajaa digipedagogisissa valinnoissa. Voit käyttää Currea tukena kun haluat ideoida uusia mahdollisuuksia hyödyntää digitalisaatiota osana opetusta ja oppimista kurssillasi.',
    en: '### Curre auttaa opettajaa digipedagogisissa valinnoissa. Voit käyttää Currea tukena kun haluat ideoida uusia mahdollisuuksia hyödyntää digitalisaatiota osana opetusta ja oppimista kurssillasi.',
  },
}
const HelloBanner = () => {
  const { i18n } = useTranslation()
  const { language } = i18n

  return (
    <Box id="hello-component" sx={classes.helloBox}>
      <Box sx={{ my: 2, mx: 2, display: 'flex', flexWrap: 'wrap', gap: 0.3 }}>
        <Markdown>{helloMessages.title[language as keyof Locales]}</Markdown>
        <ShowMore text={helloMessages.text[language as keyof Locales]} />
      </Box>
    </Box>
  )
}

export default HelloBanner
