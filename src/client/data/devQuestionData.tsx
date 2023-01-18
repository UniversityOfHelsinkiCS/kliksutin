const getQuestionData = () => [
  {
    id: 1,
    heading: {
      label: 'Kurssin koko',
      value: 'osallistuja_lkm',
    },
    text: [
      'Isolle kurssille sopii hyvin alustaksi Moodle. Voit lisätä vuorovaikutusmahdollisuuksia luonnoilla Presemon avulla.',
      'Mikäli haluat toteuttaa kurssisi MOOC-muodossa, katso tästä tarkemmat ohjeet.',
    ],
    options: [
      {
        label: '< 50',
        value: 'alle_50',
      },
      {
        label: '> 50',
        value: 'yli_50',
      },
    ],
  },
  {
    id: 2,
    heading: {
      label: 'Opetusmuoto',
      value: 'opetusmuoto',
    },
    text: [''],
    options: [
      {
        label: 'Luennot',
        value: 'luennot',
      },
      {
        label: 'Demot',
        value: 'demot',
      },
    ],
  },
  {
    id: 3,
    heading: {
      label: 'Osallistuminen',
      value: 'osallistuminen',
    },
    text: [''],
    options: [
      {
        label: 'Live',
        value: 'live_tyoskentely',
      },
      {
        label: 'Hybridi',
        value: 'hybridi_tyoskentely',
      },
      {
        label: 'Etä',
        value: 'eta_tyoskentely',
      },
    ],
  },
  {
    id: 4,
    heading: {
      label: 'Tallennus',
      value: 'tallennus',
    },
    text: [''],
    options: [
      {
        label: 'Kyllä',
        value: 'tallennetaan',
      },
      {
        label: 'Ei',
        value: 'ei_tallenneta',
      },
    ],
  },
  {
    id: 5,
    heading: {
      label: 'Arviointi',
      value: 'arviointi',
    },
    text: [''],
    options: [
      {
        label: 'Ennen',
        value: 'ennen',
      },
      {
        label: 'Jälkeen',
        value: 'jalkeen',
      },
      {
        label: 'Aikana',
        value: 'kurssin_aikana',
      },
    ],
  },
]

export default getQuestionData
