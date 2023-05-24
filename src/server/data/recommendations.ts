import { Recommendation } from '../types'

const getRecommendationsData = (): Recommendation[] => [
  {
    surveyId: 1,
    label: 'zoom',
    type: 'teaching',
    title: {
      fi: '[Zoom](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4533)',
      sv: '[Zoom](https://teaching.helsinki.fi/instruktioner/artikel/undervisningsvideor-och-direktuppspelning-av-forelasningar#paragraph-4533)',
      en: '[Zoom](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-4533)',
    },
    text: {
      fi: 'Zoom on monipuolinen videoviestintäohjelma, jolla voidaan toteuttaa moninaisia opetustilanteita sekä tallentaa opetustasi materiaaleineen.',
      sv: 'Zoom är ett mångsidigt videokommunikationsprogram som möjliggör att en mängd olika undervisningstillfällen kan förverkligas och bandas, inklusive materialet som visas',
      en: 'Zoom is a versatile video communication program, that can be used to implement a range of teaching situations and record your teaching with materials',
    },
  },
  {
    surveyId: 1,
    label: 'unitube',
    type: 'teaching',
    title: {
      fi: '[Unitube](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-3937)',
      sv: '[Unitube](https://teaching.helsinki.fi/instruktioner/artikel/undervisningsvideor-och-direktuppspelning-av-forelasningar#paragraph-3937)',
      en: '[Unitube](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-3937)',
    },
    text: {
      fi: 'Unitube -palvelut pitävät sisällään luentojen tallennustilat, itsepalvelustudiot sekä videoiden julkaisu- ja katsomoalustan.',
      sv: 'Unitubes tjänster omfattar tjänster för inspelning av föreläsningar, självbetjäningsstudior och en plattform för att publicera – och titta på videor',
      en: 'Unitubes services include lecture recording facilities, self-service studios and a platform for publishing - and viewing videos.',
    },
  },
  {
    surveyId: 1,
    label: 'flinga',
    type: 'teaching',
    title: {
      fi: '[Flinga](https://teaching.helsinki.fi/ohjeet/artikkeli/flinga)',
      sv: '[Flinga](https://teaching.helsinki.fi/instruktioner/artikel/flinga)',
      en: '[Flinga](https://teaching.helsinki.fi/instructions/article/flinga)',
    },
    text: {
      fi: 'Flinga on eräänlainen verkkopohjainen valkotaulu, joka soveltuu erityisen hyvin esimerkiksi yhteisölliseen tiedonrakentamiseen ja opiskelijoiden aktivointiin opetustapahtuman aikana.',
      sv: 'Flinga är en typ av webbaserad whiteboard, som särskilt lämpar sig för t.ex. gemensam kunskapsbyggnad och aktivering av elever under ett undervisningstillfälle',
      en: 'Flinga is a type of web-based whiteboard that is particularly suitable for e.g., knowledge building activies and activation of students during a teaching event.',
    },
  },
  {
    surveyId: 1,
    label: 'presemo',
    type: 'teaching',
    title: {
      fi: '[Presemo](https://teaching.helsinki.fi/ohjeet/artikkeli/presemo)',
      sv: '[Presemo](https://teaching.helsinki.fi/instruktioner/artikel/presemo)',
      en: '[Presemo](https://teaching.helsinki.fi/instruktioner/artikel/presemo)',
    },
    text: {
      fi: 'Presemo on opetuksen aktivointityökalu, joka sopii opiskelijoiden aktivointiin esimerkiksi luennolla kysymyksin, äänestyksin tai keskusteluin.',
      sv: 'Presemo är ett aktiveringsverktyg för undervisning, den lämpar sig för att aktivera studeranden under t.ex. föreläsningar, med frågor, omröstningar eller diskussioner',
      en: 'Presemo is a activation tool used in teaching, it is suitable for activating students during e.g., a lecture with questions, polls or discussions.',
    },
  },
  {
    surveyId: 1,
    label: 'thinglink',
    type: 'teaching',
    title: {
      fi: '[Thinglink](https://teaching.helsinki.fi/ohjeet/artikkeli/muut-opetustyota-tukevat-valineet#paragraph-6844)',
      sv: '[Thinglink]( https://teaching.helsinki.fi/instruktioner/artikel/andra-verktyg-som-stoder-undervisningsarbetet#paragraph-6844)',
      en: '[Thinglink](https://teaching.helsinki.fi/instructions/article/other-supporting-tools-teaching-activities#paragraph-6844)',
    },
    text: {
      fi: 'Thinglinkillä voidaan luoda interaktiivista kuva- ja videomateriaalia tuomalla niihin esimerkiksi havainnointia ja oppimista tukevaa lisäinformaatiota (esim. kuvia, videota, tekstiä, ääntä tai verkkolinkkejä).',
      sv: 'Med hjälp av Thinklink kan man skapa interaktiva bild- och videomaterial genom att införa t.ex. observationer och annan information som stödjer lärandet (t.ex. bilder, videon, text, ljud eller webblänkar)',
      en: 'Thinglink can be used to create interactive images and video materials by adding e.g., observation and other type of information that supports learning (e.g. images, videos, text, audio or web links).',
    },
  },
  {
    surveyId: 1,
    label: 'eportfolio',
    type: 'teaching',
    title: {
      fi: '[Eportfolio](https://teaching.helsinki.fi/ohjeet/artikkeli/muut-opetustyota-tukevat-valineet#paragraph-6489)',
      sv: '[Eportfolio]( https://teaching.helsinki.fi/instruktioner/artikel/andra-verktyg-som-stoder-undervisningsarbetet#paragraph-6489)',
      en: '[Eportfolio](https://teaching.helsinki.fi/instructions/article/other-supporting-tools-teaching-activities#paragraph-6489)',
    },
    text: {
      fi: 'Helsingin yliopistolla on kursseille käytössä kurssiportfoliotyöhön Pebblepad-ohjelma.',
      sv: 'I sina kurser använder Helsingfors universitet Pebblepad för portfolioarbeten.',
      en: 'The University of Helsinki uses the Pebblepad program for course portfolio work.',
    },
  },
  {
    surveyId: 1,
    label: 'moodle',
    type: 'teaching',
    title: {
      fi: '[Moodle](https://teaching.helsinki.fi/ohjeet/artikkeli/moodle-ohjeet-ja-tuki)',
      sv: '[Moodle](https://teaching.helsinki.fi/instruktioner/artikel/instruktioner-och-stod-till-moodle)',
      en: '[Moodle](https://teaching.helsinki.fi/instructions/article/moodle-instructions-and-support)',
    },
    text: {
      fi: 'Moodle on Helsingin yliopiston monipuolisin verkko-oppimisympäristö.',
      sv: 'Moodle är Helsingfors universitets mångsidigaste inlärningsplattform på nätet.',
      en: 'Moodle is the University of Helsinki&lsquo;s most versatile online learning environment.',
    },
  },
  {
    surveyId: 1,
    label: 'screencast-o-matic',
    type: 'teaching',
    title: {
      fi: '[Screencast-o-Matic](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4568)',
      sv: '[Screencast-o-Matic](https://teaching.helsinki.fi/instruktioner/artikel/undervisningsvideor-och-direktuppspelning-av-forelasningar#paragraph-4568)',
      en: '[Screencast-o-Matic](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-4568)',
    },
    text: {
      fi: 'Screencast-O-Matic sopii mm. ruudunkaappausvideoiden ja videomuotoisten tehtävien tekoon sekä kevyeen videoiden editointiin, äänitykseen ja tekstitykseen.',
      sv: 'Screencast-O-Matic passar bl.a. för skärminspelningar och för uppgifter som görs i videoformat, samt för lätt videoredigering, ljudinspelningar och textning.',
      en: 'Screencast-O-Matic is suitable for e.g. for making screen capture videos and assignments that done in video format, as well as light video editing, recording and subtitling.',
    },
  },
]

export default getRecommendationsData
