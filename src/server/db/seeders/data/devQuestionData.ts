import { v4 as uuidv4 } from 'uuid'

const getQuestionData = () => [
  {
    id: 1,
    surveyId: 0,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Dimensiot',
      sv: 'Dimensiot',
      en: 'Dimensiot',
    },
    text: {
      fi: 'Mitä oppimisen dimensioita haluat painottaa kurssillasi? Klikkaa alla olevia tekstejä valitaksesi dimensioita',
      sv: 'Mitä oppimisen dimensioita haluat painottaa kurssillasi? Klikkaa alla olevia tekstejä valitaksesi dimensioita',
      en: 'Mitä oppimisen dimensioita haluat painottaa kurssillasi? Klikkaa alla olevia tekstejä valitaksesi dimensioita',
    },
    optionData: {
      type: 'dimensions',
      options: [
        {
          id: uuidv4(),
          label: {
            fi: 'Tiedon omaksuminen',
            sv: 'Tiedon omaksuminen',
            en: 'Investication',
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
            en: 'Production',
          },
          data: ['flinga', 'presemo', 'thinglink', 'moodle'],
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Yhteistyö',
            sv: 'Yhteistyö',
            en: 'Collaboration',
          },
          data: ['zoom', 'flinga', 'thinglink', 'eportfolio', 'moodle'],
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Keskustelu',
            sv: 'Keskustelu',
            en: 'Discussion',
          },
          data: ['zoom', 'presemo', 'eportfolio', 'moodle', 'H5P'],
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Tutkimusperustainen oppiminen',
            sv: 'Tutkimusperustainen oppiminen',
            en: 'Acquisition',
          },
          data: ['flinga'],
        },
        {
          id: uuidv4(),
          label: {
            fi: 'Harjoittelu',
            sv: 'Harjoittelu',
            en: 'Practice',
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
    parentId: null,
    priority: 2,
    title: {
      fi: 'Kurssin koko',
      sv: 'Kurssin koko',
      en: 'Kurssin koko',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseSizeSmall',
          label: {
            fi: '< 50',
            sv: '< 50',
            en: '< 50',
          },
        },
        {
          id: 'courseSizeBig',
          label: {
            fi: '>= 50',
            sv: '>= 50',
            en: '>= 50',
          },
        },
        {
          id: 'courseSizeUnlimited',
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
    parentId: null,
    priority: 3,
    title: {
      fi: 'Osallistuminen',
      sv: 'Osallistuminen',
      en: 'Osallistuminen',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseAttendancePresent',
          label: {
            fi: 'Läsnä',
            sv: 'Läsnä',
            en: 'Läsnä',
          },
        },
        {
          id: 'courseAttendanceHybrid',
          label: {
            fi: 'Hybridi',
            sv: 'Hybridi',
            en: 'Hybridi',
          },
        },
        {
          id: 'courseAttendanceRemote',
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
    parentId: null,
    priority: 4,
    title: {
      fi: 'Suoritusmuoto',
      sv: 'Suoritusmuoto',
      en: 'Suoritusmuoto',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: 'courseCompletionMethodExam',
          label: {
            fi: 'Tentti',
            sv: 'Tentti',
            en: 'Tentti',
          },
        },
        {
          id: 'courseCompletionMethodDemo',
          label: {
            fi: 'Demot/osasuoritukset',
            sv: 'Demot/osasuoritukset',
            en: 'Demot/osasuoritukset',
          },
        },
        {
          id: 'courseCompletionMethodDiary',
          label: {
            fi: 'Välitehtävät/oppimispäiväkirja',
            sv: 'Välitehtävät/oppimispäiväkirja',
            en: 'Välitehtävät/oppimispäiväkirja',
          },
        },
        {
          id: 'courseCompletionMethodAssignment',
          label: {
            fi: 'Lopputyö',
            sv: 'Lopputyö',
            en: 'Lopputyö',
          },
        },
        {
          id: 'courseCompletionMethodParticipation',
          label: {
            fi: 'Osallistuminen opetukseen',
            sv: 'Osallistuminen opetukseen',
            en: 'Osallistuminen opetukseen',
          },
        },
        {
          id: 'courseCompletionMethodOther',
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
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsRecorded',
          label: {
            fi: 'Kyllä',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotRecorded',
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
    parentId: 4,
    priority: 0,
    title: {
      fi: 'Ennen',
      sv: 'Ennen',
      en: 'Ennen',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'info',
      options: [],
    },
    visibility: {},
  },
  {
    id: 8,
    surveyId: 0,
    parentId: 4,
    priority: 0,
    title: {
      fi: 'Jälkeen',
      sv: 'Jälkeen',
      en: 'Jälkeen',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'info',
      options: [],
    },
    visibility: {},
  },
  {
    id: 9,
    surveyId: 0,
    parentId: 4,
    priority: 0,
    title: {
      fi: 'Aikana',
      sv: 'Aikana',
      en: 'Aikana',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'info',
      options: [],
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
          id: 'courseIsMooc',
          label: {
            fi: 'Kyllä',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotMooc',
          label: {
            fi: 'Ei',
            sv: 'Ei',
            en: 'Ei',
          },
        },
      ],
    },
    visibility: {
      options: ['courseSizeBig'],
    },
  },
  {
    id: 10,
    surveyId: 0,
    parentId: null,
    priority: 1,
    title: {
      fi: 'Onko opetus avointa?',
      sv: 'Onko opetus avointa?',
      en: 'Onko opetus avointa?',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsOpenUniversity',
          label: {
            fi: 'Kyllä',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotOpenUniversity',
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
]

export default getQuestionData
