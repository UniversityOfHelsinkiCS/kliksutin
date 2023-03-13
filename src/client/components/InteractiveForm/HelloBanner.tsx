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
    fi: '## Tervetuloa Curreen',
    sv: '## Tervetuloa Curreen',
    en: '## Tervetuloa Curreen',
  },
  text: {
    fi: '### Curre auttaa sinua digipedagogisissa valinnoissa. Voit käyttää Currea tukena kun haluat ideoida uusia mahdollisuuksia hyödyntää digitalisaatiota osana opetusta ja oppimista kurssillasi. Sinun ei tarvitse etukäteen tietää millaista ohjelmistoa tai digitaalista alustaa on etsimässä, täytä muutama ennakkotieto kurssiisi liittyen ja anna Curren hoitaa loput!  \n \nCurre kuratoi Digitaalisen opetuksen ja jatkuvan oppimisen palveluiden (DOJO) palvelutarjonnan opetuksesi tueksi. Curre on DOJO:n lahja opettajille [opetuksen juhlavuonna 2023.](https://www.helsinki.fi/fi/hakeminen-ja-opetus/opetus/opetuksen-juhlavuosi-2022-2023) Curren sisältöjä kehitetään jatkuvasti käyttäjäpalautteen pohjalta.  \n \nCurren ohella [tarjoamme edelleen koulutusta](https://flamma.helsinki.fi/fi/group/opetuksen-tuki/opetusteknologiakoulutus) Helsingin yliopiston opettajille virallisesti tuetuista digiopetuksen välineistä.  \nTorstaisin järjestämme [Digipedakahvilan](https://flamma.helsinki.fi/fi/group/ajankohtaista/uutinen/-/uutinen/digipedakahvila-torstaisin-zoomissa---tule-kysymaan-kuulemaanvinkkejaja-vaihtamaan-kuulumisia-opetukseen-liittyen/24122898) Zoomin välityksellä, tervetuloa mukaan!',
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
