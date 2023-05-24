import { Survey } from '../models'

const surveyName = 'testSurvey'

const survey = {
  id: 1,
  name: surveyName,
  title: {
    fi: '## Tervetuloa Curreen',
    sv: '## Välkommen till Curre',
    en: '## Welcome to Curre',
  },
  text: {
    fi: '### Curre auttaa sinua digipedagogisissa valinnoissa. Voit käyttää Currea tukena kun haluat ideoida uusia mahdollisuuksia hyödyntää digitalisaatiota osana opetusta ja oppimista kurssillasi. Sinun ei tarvitse etukäteen tietää millaista ohjelmistoa tai digitaalista alustaa on etsimässä, täytä muutama ennakkotieto kurssiisi liittyen ja anna Curren hoitaa loput!  \n \nCurre kuratoi Helsingin yliopiston digipedagogisen palvelutarjonnan opetuksesi tueksi. Curre on Digitaalisen opetuksen ja jatkuvan oppimisen palveluiden (DOJO) lahja opettajille [opetuksen juhlavuonna 2023.](https://www.helsinki.fi/fi/hakeminen-ja-opetus/opetus/opetuksen-juhlavuosi-2022-2023) Curren sisältöjä kehitetään jatkuvasti käyttäjäpalautteen pohjalta.  \n \nCurren ohella [tarjoamme edelleen koulutusta](https://flamma.helsinki.fi/fi/group/opetuksen-tuki/opetusteknologiakoulutus) opettajille Helsingin yliopiston virallisesti tuetuista digiopetuksen välineistä.  \nTorstaisin järjestämme [Digipedakahvilan](https://flamma.helsinki.fi/fi/group/ajankohtaista/uutinen/-/uutinen/digipedakahvila-torstaisin-zoomissa---tule-kysymaan-kuulemaanvinkkejaja-vaihtamaan-kuulumisia-opetukseen-liittyen/24122898) Zoomin välityksellä, tervetuloa mukaan!  \n \n[Kerrothan mielipiteesi Curresta lyhyen palautelomakkeen muodossa.](https://forms.office.com/e/TWvNdLb48z)',
    sv: '### Curre hjälper dig med digipedagogiska val. Man kan använda Curre som stöd för att bolla nya idéer över hur man kan utnyttja digitalisering som en del av undervisningen och lärandet på kursen. Du behöver inte på förväg veta vilken typ av program – eller digital plattform du är ute efter. Fyll i några förhandsuppgifter angående kursen och låt Curre sköta resten! \n \n  Curre filtrerar Helsingfors universitets digipedagogiska tjänsteutbud, för att stödja din undervisning. Curre är en present av tjänster för digital undervisning och kontinuerligt lärande (DOJO) till lärarna [undervisningens år 2023.]( https://www.helsinki.fi/sv/utbildning-och-undervisning/undervisning/undervisningens-ar-2022-2023). Curres innehåll utvecklas ständigt baserat på feedback från användare. \n \n Utöver Curre [erbjuder vi ännu utbildning]( https://flamma.helsinki.fi/sv/group/opetuksen-tuki/undervisningsteknologiservicens-kurser) för lärare i digitala hjälpmedel som officiellt stödjs av Helsingfors Universitet. \n På torsdagar ordnar vi [Digipeda-cafét]( https://flamma.helsinki.fi/sv/group/ajankohtaista/nyhet/-/uutinen/digipedakahvila-torstaisin-zoomissa---tule-kysymaan-kuulemaanvinkkejaja-vaihtamaan-kuulumisia-opetukseen-liittyen/24122898) via Zoom, välkommen med!   \n \n  [Ge gärna din åsikt om Curre, via det korta feedbackformuläret.](https://forms.office.com/e/TWvNdLb48z)',
    en: '### Curre helps you in digital pedagogical choices. You can use Curre as a support when you want to brainstorm new opportunities to utilize digitalization as a part of teaching and learning in your course. You do not need to know in advance what kind of software or digital platform you are looking for, just answer a few questions related to your course and let Curre handle the rest!  \n \n Curre curates the digital pedagogical service support and documents of the University of Helsinki to support your teaching. Curre is a gift to teachers from the Services for Digital Education and Continuous Learning (DOJO) to [celebrate teaching during tha academic year 2022 - 2023.](https://www.helsinki.fi/en/admissions-and-education/education/celebrating-teaching-2022-2023)  The contents in Curre are constantly developed based on user feedback. \n \n  In addition to Curre, we [continue to provide training for teachers](https://flamma.helsinki.fi/en/group/opetuksen-tuki/educational-technology-training) for officially supported digital teaching tools at the University of Helsinki. Every Thursday, we hold [Digipeda Cafe via Zoom](https://flamma.helsinki.fi/en/group/ajankohtaista/news/-/uutinen/digipedakahvila-torstaisin-zoomissa---tule-kysymaan-kuulemaanvinkkejaja-vaihtamaan-kuulumisia-opetukseen-liittyen/24122898), welcome to join! Please share your opinion on Curre by filling out a brief [feedback form.](https://forms.office.com/e/TWvNdLb48z)',
  },
}

const seedSurveys = async () => {
  await Survey.upsert({
    ...survey,
  })
}

export default seedSurveys
