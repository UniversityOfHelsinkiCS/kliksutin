import { v4 as uuidv4 } from 'uuid'

const bigCourseOption: string = uuidv4()

const getQuestionData = () => [
  {
    surveyId: 0,
    priority: 0,
    title: {
      fi: 'Dimensiot',
      sv: 'Dimensiot',
      en: 'Dimensiot',
    },
    text: {
      fi: 'Mitä oppimisen dimensioita haluat painottaa kurssillasi?',
      sv: 'Mitä oppimisen dimensioita haluat painottaa kurssillasi?',
      en: 'Mitä oppimisen dimensioita haluat painottaa kurssillasi?',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: uuidv4(),
          label: 'Tiedon omaksuminen',
          tools: [
            'zoom',
            'unitube',
            'thinglink',
            'moodle',
            'screen-cast-o-matic',
          ],
        },
        {
          id: uuidv4(),
          label: 'Tuottaminen',
          tools: ['flinga', 'presemo', 'thinglink', 'moodle'],
        },
        {
          id: uuidv4(),
          label: 'Yhteistyö',
          tools: ['zoom', 'flinga', 'thinglink', 'eportfolio', 'moodle'],
        },
        {
          id: uuidv4(),
          label: 'Keskustelu',
          tools: ['zoom', 'presemo', 'eportfolio', 'moodle', 'H5P'],
        },
        {
          id: uuidv4(),
          label: 'Tutkimusperustainen oppiminen',
          tools: ['flinga'],
        },
        {
          id: uuidv4(),
          label: 'Harjoittelu',
          tools: ['thinglink', 'eportfolio', 'moodle', 'H5P'],
        },
      ],
    },
    visibility: {},
  },
  {
    surveyId: 0,
    priority: 1,
    title: {
      fi: 'Kurssin koko',
      sv: 'Kurssin koko',
      en: 'Kurssin koko',
    },
    text: {
      fi: 'Isolle kurssille sopii hyvin alustaksi Moodle. Voit lisätä vuorovaikutusmahdollisuuksia luonnoilla Presemon avulla.\nMikäli haluat toteuttaa kurssisi MOOC-muodossa, katso tästä tarkemmat ohjeet.',
      sv: 'Isolle kurssille sopii hyvin alustaksi Moodle. Voit lisätä vuorovaikutusmahdollisuuksia luonnoilla Presemon avulla.\nMikäli haluat toteuttaa kurssisi MOOC-muodossa, katso tästä tarkemmat ohjeet.',
      en: 'Isolle kurssille sopii hyvin alustaksi Moodle. Voit lisätä vuorovaikutusmahdollisuuksia luonnoilla Presemon avulla.\nMikäli haluat toteuttaa kurssisi MOOC-muodossa, katso tästä tarkemmat ohjeet.',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: uuidv4(),
          label: '< 50',
        },
        {
          id: bigCourseOption,
          label: '>= 50',
        },
      ],
    },
    visibility: {},
  },
  {
    surveyId: 0,
    priority: 2,
    title: {
      fi: 'Opetusmuoto',
      sv: 'Opetusmuoto',
      en: 'Opetusmuoto',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: uuidv4(),
          label: 'Luennot',
        },
        {
          id: uuidv4(),
          label: 'Demot',
        },
      ],
    },
    visibility: {},
  },
  {
    surveyId: 0,
    priority: 3,
    title: {
      fi: 'Osallistuminen',
      sv: 'Osallistuminen',
      en: 'Osallistuminen',
    },
    text: {
      fi: 'Lue ensin tilojen opetusteknologian käyttöohjeet täältä. Näistä palveluista voi olla hyötyä opetuksessasi',
      sv: 'Lue ensin tilojen opetusteknologian käyttöohjeet täältä. Näistä palveluista voi olla hyötyä opetuksessasi',
      en: 'Lue ensin tilojen opetusteknologian käyttöohjeet täältä. Näistä palveluista voi olla hyötyä opetuksessasi',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: uuidv4(),
          label: 'Live',
        },
        {
          id: uuidv4(),
          label: 'Hybridi',
        },
        {
          id: uuidv4(),
          label: 'Etä',
        },
      ],
    },
    visibility: {},
  },
  {
    surveyId: 0,
    parentId: 3,
    priority: 0,
    title: {
      fi: 'Tallennus',
      sv: 'Tallennus',
      en: 'Tallennus',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: uuidv4(),
          label: 'Kyllä',
        },
        {
          id: uuidv4(),
          label: 'Ei',
        },
      ],
    },
    visibility: {},
  },
  {
    surveyId: 0,
    priority: 4,
    title: {
      fi: 'Arviointi',
      sv: 'Arviointi',
      en: 'Arviointi',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: uuidv4(),
          label: 'Ennen',
        },
        {
          id: uuidv4(),
          label: 'Jälkeen',
        },
        {
          id: uuidv4(),
          label: 'Aikana',
        },
      ],
    },
    visibility: {},
  },
  {
    surveyId: 0,
    parentId: 2,
    priority: 0,
    title: {
      fi: 'Haluatko pitää kurssi MOOCina?',
      sv: 'Haluatko pitää kurssi MOOCina?',
      en: 'Haluatko pitää kurssi MOOCina?',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: uuidv4(),
          label: 'Kyllä',
        },
        {
          id: uuidv4(),
          label: 'Ei',
        },
      ],
    },
    visibility: {
      options: [bigCourseOption],
    },
  },
]

export default getQuestionData
