import { v4 as uuidv4 } from 'uuid'

const bigCourseOption: string = uuidv4()

const getQuestionData = () => [
  {
    id: 1,
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
          label: {
            fi: 'Tiedon omaksuminen',
            sv: 'Tiedon omaksuminen',
            en: 'Tiedon omaksuminen',
          },
          data: [
            'zoom',
            'unitube',
            'thinglink',
            'moodle',
            'screen-cast-o-matic',
          ],
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Tuottaminen',
            sv: 'Tuottaminen',
            en: 'Tuottaminen',
          },
          data: ['flinga', 'presemo', 'thinglink', 'moodle'],
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Yhteistyö',
            sv: 'Yhteistyö',
            en: 'Yhteistyö',
          },
          data: ['zoom', 'flinga', 'thinglink', 'eportfolio', 'moodle'],
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Keskustelu',
            sv: 'Keskustelu',
            en: 'Keskustelu',
          },
          data: ['zoom', 'presemo', 'eportfolio', 'moodle', 'H5P'],
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Tutkimusperustainen oppiminen',
            sv: 'Tutkimusperustainen oppiminen',
            en: 'Tutkimusperustainen oppiminen',
          },
          data: ['flinga'],
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Harjoittelu',
            sv: 'Harjoittelu',
            en: 'Harjoittelu',
          },
          data: ['thinglink', 'eportfolio', 'moodle', 'H5P'],
        },
      ],
    },
    visibility: {},
  },
  {
    id: 2,
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
          label: {
            fi: '< 50',
            sv: '< 50',
            en: '< 50',
          },
        },
        {
          id: bigCourseOption,
          label: {
            fi: '>= 50',
            sv: '>= 50',
            en: '>= 50',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'rajoittamaton',
            sv: 'rajoittamaton',
            en: 'rajoittamaton',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 3,
    surveyId: 0,
    priority: 2,
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
          label: {
            fi: 'Läsnä',
            sv: 'Läsnä',
            en: 'Läsnä',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Hybridi',
            sv: 'Hybridi',
            en: 'Hybridi',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Etä',
            sv: 'Etä',
            en: 'Etä',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 4,
    surveyId: 0,
    priority: 3,
    title: {
      fi: 'Suoritusmuoto',
      sv: 'Suoritusmuoto',
      en: 'Suoritusmuoto',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: uuidv4(),
          label: {
            fi: 'Tentti',
            sv: 'Tentti',
            en: 'Tentti',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Demot/osasuoritukset',
            sv: 'Demot/osasuoritukset',
            en: 'Demot/osasuoritukset',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Välitehtävät/oppimispäiväkirja',
            sv: 'Välitehtävät/oppimispäiväkirja',
            en: 'Välitehtävät/oppimispäiväkirja',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Lopputyö',
            sv: 'Lopputyö',
            en: 'Lopputyö',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Osallistuminen opetukseen',
            sv: 'Osallistuminen opetukseen',
            en: 'Osallistuminen opetukseen',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Muu',
            sv: 'Muu',
            en: 'Muu',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 5,
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
          label: {
            fi: 'Kyllä',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Ei',
            sv: 'Ei',
            en: 'Ei',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 6,
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
          label: {
            fi: 'Ennen',
            sv: 'Ennen',
            en: 'Ennen',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Jälkeen',
            sv: 'Jälkeen',
            en: 'Jälkeen',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Aikana',
            sv: 'Aikana',
            en: 'Aikana',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 7,
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
          label: {
            fi: 'Kyllä',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Ei',
            sv: 'Ei',
            en: 'Ei',
          },
        },
      ],
    },
    visibility: {
      options: [bigCourseOption],
    },
  },
]

export default getQuestionData
