const getQuestionData = (): any => [
  {
    id: 1,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Oppimismuodot',
      sv: 'Oppimismuodot',
      en: 'Oppimismuodot',
    },
    text: {
      fi: 'Valitse yksi tai useampi oppimismuoto, jota haluat tukea digitaalisten työvälineden avulla kurssillasi. Oppimismuotojen valinnassa on noudateltu [ABC-työpajoista](https://teaching.helsinki.fi/ohjeet/artikkeli/koulutus-ja-patevoityminen#paragraph-4166) tuttua [ABC-oppimismuotoilun menetelmää, joka on kehitetty University College London:n toimesta](https://blogs.ucl.ac.uk/abc-ld/).',
      sv: 'Valitse yksi tai useampi oppimismuoto, jota haluat tukea digitaalisten työvälineden avulla kurssillasi.',
      en: 'Valitse yksi tai useampi oppimismuoto, jota haluat tukea digitaalisten työvälineden avulla kurssillasi.',
    },
    optionData: {
      type: 'dimensions',
      options: [
        {
          id: 'acquisition',
          label: {
            fi: 'Tiedonhankinta',
            sv: 'Tiedonhankinta',
            en: 'Acquisition',
          },
          text: {
            fi: 'Opiskelija oppii omaksumalla ja hankkimalla tietoa esimerkiksi silloin, kun hän aktiivisesti seuraa luentoa, lukee kirjallisuutta tai verkkosivuja, katsoo videota tai kuuntelee podcasteja.',
            sv: '',
            en: '',
          },
          data: [
            { name: 'zoom', subtools: [] },
            { name: 'unitube', subtools: [] },
            { name: 'presemo', subtools: [] },
            { name: 'thinglink', subtools: [] },
            {
              name: 'moodle',
              subtools: [
                {
                  label: 'aineistot',
                  title: {
                    fi: '[Aineistot](https://docs.moodle.org/4x/fi/Aineistot)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'h5p',
                  title: {
                    fi: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
              ],
            },
            { name: 'screencast-o-matic', subtools: [] },
          ],
        },
        {
          id: 'production',
          label: {
            fi: 'Tuottaminen',
            sv: 'Tuottaminen',
            en: 'Production',
          },
          text: {
            fi: 'Tuottamisen kautta tapahtuvan oppimisen avulla opiskelija käsittelee, yhdistelee ja demonstroi oppimaansa. Näin hän osoittaa sen, mitä on oppinut, miten hän sillä hetkellä ymmärtää kurssiin liittyviä käsitteitä ja kuinka hän soveltaa niitä käytäntöön.',
            sv: '',
            en: '',
          },
          data: [
            { name: 'zoom', subtools: [] },
            { name: 'unitube', subtools: [] },
            { name: 'flinga', subtools: [] },
            { name: 'thinglink', subtools: [] },
            { name: 'eportfolio', subtools: [] },
            {
              name: 'moodle',
              subtools: [
                {
                  label: 'tehtävä',
                  title: {
                    fi: '[Tehtävä](https://docs.moodle.org/4x/fi/Teht%C3%A4v%C3%A4)',
                    sv: '',
                    en: '',
                  },
                  visibility: {
                    options: [
                      'courseCompletionMethodExam',
                      'courseCompletionMethodDiary',
                      'courseCompletionMethodAssignment',
                    ],
                  },
                },
                {
                  label: 'wiki',
                  title: {
                    fi: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'sanasto',
                  title: {
                    fi: '[Sanasto](https://docs.moodle.org/4x/fi/Sanasto)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'tietokanta',
                  title: {
                    fi: '[Tietokanta](https://docs.moodle.org/4x/fi/Tietokanta)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
              ],
            },
            { name: 'screen-cast-o-matic', subtools: [] },
          ],
        },
        {
          id: 'collaboration',
          label: {
            fi: 'Yhteistyö',
            sv: 'Yhteistyö',
            en: 'Collaboration',
          },
          text: {
            fi: 'Edellyttää opiskelijoiden työskentelyä pienryhmissä yhteisen tavoitteen saavuttamiseksi. Yhteistyöllä oppiminen sisältää keskustelun, harjoittelun ja tuottamisen elementtejä.',
            sv: '',
            en: '',
          },
          data: [
            { name: 'zoom', subtools: [] },
            { name: 'flinga', subtools: [] },
            { name: 'thinglink', subtools: [] },
            { name: 'eportfolio', subtools: [] },
            {
              name: 'moodle',
              subtools: [
                {
                  label: 'keskustelualue',
                  title: {
                    fi: '[Keskustelualue](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'wiki',
                  title: {
                    fi: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'työpaja',
                  title: {
                    fi: '[Työpaja](https://docs.moodle.org/4x/fi/Ty%C3%B6paja)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
              ],
            },
          ],
        },
        {
          id: 'discussion',
          label: {
            fi: 'Keskustelu',
            sv: 'Keskustelu',
            en: 'Discussion',
          },
          text: {
            fi: 'Oppija ilmaisee ajatuksensa ja kysymyksensä sekä haastaa opettajan ja/tai vertaistensa ajatukset ja kysymykset ja vastaa niihin.',
            sv: '',
            en: '',
          },
          data: [
            { name: 'zoom', subtools: [] },
            { name: 'presemo', subtools: [] },
            {
              name: 'moodle',
              subtools: [
                {
                  label: 'keskustelualue',
                  title: {
                    fi: '[Keskustelualue](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'chat',
                  title: {
                    fi: '[Chat](https://docs.moodle.org/4x/fi/Chat-aktiviteetti)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
              ],
            },
          ],
        },
        {
          id: 'investication',
          label: {
            fi: 'Tutkiminen',
            sv: 'Tutkiminen',
            en: 'Investigation',
          },
          text: {
            fi: 'Ohjaa opiskelijoita etsimään ja vertailemaan tietoa sekä esittämään kritiikkiä ja soveltamaan tekstejä, dokumentteja ja muita materiaaleja, jotka liittyvät opetettavan aiheen ja kurssin sisälötihin ja käsitteisiin.',
            sv: '',
            en: '',
          },
          data: [
            { name: 'flinga', subtools: [] },
            { name: 'eportfolio', subtools: [] },
            {
              name: 'moodle',
              subtools: [
                {
                  label: 'keskustelualue',
                  title: {
                    fi: '[Keskustelualue](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'wiki',
                  title: {
                    fi: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'tietokanta',
                  title: {
                    fi: '[Tietokanta](https://docs.moodle.org/4x/fi/Tietokanta)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
              ],
            },
          ],
        },
        {
          id: 'practice',
          label: {
            fi: 'Harjoittelu',
            sv: 'Harjoittelu',
            en: 'Practice',
          },
          text: {
            fi: 'Mahdollistaa tiedon soveltamisen kontekstissa. Oppija toimii tehtävän mukaan ja käyttää saamaansa palautetta oman osaamisensa kehittämisessä. Palaute voi tulla itsereflektiosta, vertaisilta, opettajalta tai toiminnan tuloksista.',
            sv: '',
            en: '',
          },
          data: [
            { name: 'thinglink', subtools: [] },
            {
              name: 'moodle',
              subtools: [
                {
                  label: 'h5p',
                  title: {
                    fi: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'tentti',
                  title: {
                    fi: 'Tentti',
                    sv: '',
                    en: '',
                  },
                  visibility: {
                    options: ['courseCompletionMethodExam'],
                  },
                },
                {
                  label: 'työpaja',
                  title: {
                    fi: 'Työpaja',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'oppitunti',
                  title: {
                    fi: 'Oppitunti',
                    sv: '',
                    en: '',
                  },
                  visibility: {},
                },
              ],
            },
          ],
        },
      ],
    },
    visibility: {},
  },
  {
    id: 2,
    surveyId: 1,
    parentId: null,
    priority: 2,
    title: {
      fi: 'Kurssin koko',
      sv: 'Kurssin koko',
      en: 'Kurssin koko',
    },
    text: {
      fi: 'Valitse onko kurssi osallistujamäärältään pieni (<50), suuri (>=50) vai rajoittamaton.',
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
    surveyId: 1,
    parentId: null,
    priority: 3,
    title: {
      fi: 'Osallistuminen',
      sv: 'Osallistuminen',
      en: 'Osallistuminen',
    },
    text: {
      fi: 'Sisältääkö kurssi vain lähiopetusta, [vain etäopetusta](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422) vai molempia? Mikäli opetukseen osallistuu samanaikaisesti oppijoita paikan päällä opetustilassa ja etänä, on kyse [hybridiopetuksesta.](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422) Valitse tällöin molemmat vaihtoehdot.',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'multipleChoice',
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
    surveyId: 1,
    parentId: null,
    priority: 4,
    title: {
      fi: 'Suoritusmuoto',
      sv: 'Suoritusmuoto',
      en: 'Suoritusmuoto',
    },
    text: {
      fi: 'Valitse kaikki ne suoritusmuodot, jotka parhaiten kuvaavat kurssilla käytössä olevia [suoritustapoja](https://teaching.helsinki.fi/ohjeet/artikkeli/suoritustavat).',
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
          data: {
            fi: '[Tentin](https://teaching.helsinki.fi/ohjeet/artikkeli/tentit-ja-niiden-jarjestaminen) voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
            sv: 'Tentin voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
            en: 'Tentin voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
          },
        },
        {
          id: 'courseCompletionMethodSmallGroup',
          label: {
            fi: 'Pienryhmätyöskentely',
            sv: 'Pienryhmätyöskentely',
            en: 'Pienryhmätyöskentely',
          },
          data: {
            fi: '[Ryhmätyöt](https://teaching.helsinki.fi/ohjeet/artikkeli/erilaisia-arviointitapoja#paragraph-6551) perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
            sv: 'Ryhmätyöt perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
            en: 'Ryhmätyöt perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
          },
        },
        {
          id: 'courseCompletionMethodDiary',
          label: {
            fi: 'Välitehtävät',
            sv: 'Välitehtävät',
            en: 'Välitehtävät',
          },
          data: {
            fi: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
            sv: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
            en: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
          },
        },
        {
          id: 'courseCompletionMethodLaboratory',
          label: {
            fi: 'Laboratoriotyöt ja simulaatioharjoitukset',
            sv: 'Laboratoriotyöt ja simulaatioharjoitukset',
            en: 'Laboratoriotyöt ja simulaatioharjoitukset',
          },
          data: {
            fi: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
            sv: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
            en: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
          },
        },
        {
          id: 'courseCompletionMethodAssignment',
          label: {
            fi: 'Kirjallinen tehtävä',
            sv: 'Kirjallinen tehtävä',
            en: 'Kirjallinen tehtävä',
          },
          data: {
            fi: 'Kaikki oppimisen eri vaiheessa (ennen, aikana tai lopuksi) laadittavat kirjalliset tehtävät, kuten esseet, oppimispäiväkirjat, ja erilaiset raportit edistävät tiedon soveltamista, analysointia ja uuden tiedon luomista ja tukevat täten oppimistavoitteiden saavuttamista.',
            sv: 'Kaikki oppimisen eri vaiheessa (ennen, aikana tai lopuksi) laadittavat kirjalliset tehtävät, kuten esseet, oppimispäiväkirjat, ja erilaiset raportit edistävät tiedon soveltamista, analysointia ja uuden tiedon luomista ja tukevat täten oppimistavoitteiden saavuttamista.',
            en: 'Kaikki oppimisen eri vaiheessa (ennen, aikana tai lopuksi) laadittavat kirjalliset tehtävät, kuten esseet, oppimispäiväkirjat, ja erilaiset raportit edistävät tiedon soveltamista, analysointia ja uuden tiedon luomista ja tukevat täten oppimistavoitteiden saavuttamista.',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 5,
    surveyId: 1,
    parentId: 3,
    priority: 0,
    title: {
      fi: 'Opetustilanteiden tallennus?',
      sv: 'Tallennus',
      en: 'Tallennus',
    },
    text: {
      fi: 'Tallennetaanko kurssin aikana esimerkiksi luentoja, jotka tuodaan opiskelijoiden käyttöön myöhemmin? Muistathan huomioida [opetusvideoissa saavutettavuuden](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksen-digitaalinen-saavutettavuus#paragraph-5245).',
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
    surveyId: 1,
    parentId: 4,
    priority: 0,
    title: {
      fi: 'Katso tästä ideoita arviointiin liittyen',
      sv: 'Arviointi',
      en: 'Arviointi',
    },
    text: {
      fi: '[Oppimisen arviointi](https://teaching.helsinki.fi/ohjeet/oppimisen-ja-osaamisen-arviointi) voi olla formatiivista eli kurssin aikana tapahtuvaa ja oppimisen tukemiseen tähtäävää (esim. palaute kurssin aikana) tai summatiivista eli opintojakson päätteeksi tapahtuvaa (esim. lopputentti). Laadukkaassa opetuksessa on hyvä käyttää [erilaisia formatiivisen arvioinnin muotoja](https://teaching.helsinki.fi/ohjeet/artikkeli/erilaisia-arviointitapoja), sillä silloin voidaan parhaiten ohjata ja suunnata opiskelijoiden oppimista. Myös diagnostinen arviointi eli ennakkotietojen arviointi ennen kurssia tai kurssin alussa on tärkeää, koska opiskelijoiden ennakko-osaaminen vaikuttavaa paljon siihen, miten opiskelijat oppivat. Diagnostista arviointia voidaan käyttää opetuksen suunnittelun lähtökohtana, sillä sen avulla opettaja voi tunnistaa mahdollisia puutteita tai virhekäsityksiä opiskelijoiden tiedoissa.',
      sv: 'Oppimisen arviointi voi olla formatiivista eli kurssin aikana tapahtuvaa ja oppimisen tukemiseen tähtäävää (esim. palaute kurssin aikana) tai summatiivista eli opintojakson päätteeksi tapahtuvaa (esim. lopputentti). Laadukkaassa opetuksessa on hyvä käyttää erilaisia formatiivisen arvioinnin muotoja, sillä silloin voidaan parhaiten ohjata ja suunnata opiskelijoiden oppimista. Myös diagnostinen arviointi eli ennakkotietojen arviointi ennen kurssia tai kurssin alussa on tärkeää, koska opiskelijoiden ennakko-osaaminen vaikuttavaa paljon siihen, miten opiskelijat oppivat. Diagnostista arviointia voidaan käyttää opetuksen suunnittelun lähtökohtana, sillä sen avulla opettaja voi tunnistaa mahdollisia puutteita tai virhekäsityksiä opiskelijoiden tiedoissa.',
      en: 'Oppimisen arviointi voi olla formatiivista eli kurssin aikana tapahtuvaa ja oppimisen tukemiseen tähtäävää (esim. palaute kurssin aikana) tai summatiivista eli opintojakson päätteeksi tapahtuvaa (esim. lopputentti). Laadukkaassa opetuksessa on hyvä käyttää erilaisia formatiivisen arvioinnin muotoja, sillä silloin voidaan parhaiten ohjata ja suunnata opiskelijoiden oppimista. Myös diagnostinen arviointi eli ennakkotietojen arviointi ennen kurssia tai kurssin alussa on tärkeää, koska opiskelijoiden ennakko-osaaminen vaikuttavaa paljon siihen, miten opiskelijat oppivat. Diagnostista arviointia voidaan käyttää opetuksen suunnittelun lähtökohtana, sillä sen avulla opettaja voi tunnistaa mahdollisia puutteita tai virhekäsityksiä opiskelijoiden tiedoissa.',
    },
    optionData: {
      type: 'info',
      options: [],
    },
    visibility: {},
  },
  {
    id: 8,
    surveyId: 1,
    parentId: 4,
    priority: 0,
    title: {
      fi: 'This question is not in use as of 16.2.2023',
      sv: 'This question is not in use as of 16.2.2023',
      en: 'This question is not in use as of 16.2.2023',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'info',
      options: [],
    },
    visibility: {
      options: ['out-of-use'],
    },
  },
  {
    id: 9,
    surveyId: 1,
    parentId: 4,
    priority: 0,
    title: {
      fi: 'This question is not in use as of 16.2.2023',
      sv: 'This question is not in use as of 16.2.2023',
      en: 'This question is not in use as of 16.2.2023',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'info',
      options: [],
    },
    visibility: {
      options: ['out-of-use'],
    },
  },
  {
    id: 7,
    surveyId: 1,
    parentId: 2,
    priority: 0,
    title: {
      fi: 'Onko kurssi tarkoitus järjestää kaikille avoimena verkkokurssina (Massive Open Online Course, eli MOOC)?',
      sv: 'Haluatko pitää kurssi MOOCina?',
      en: 'Haluatko pitää kurssi MOOCina?',
    },
    text: {
      fi: 'Katso [tästä](https://teaching.helsinki.fi/ohjeet/artikkeli/mooc-kurssien-kriteerit-ja-ohjeet) MOOC-kurssien kriteerit ja ohjeet.',
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
      options: ['courseSizeUnlimited'],
    },
  },
  {
    id: 10,
    surveyId: 1,
    parentId: null,
    priority: 1,
    title: {
      fi: 'Kenelle kurssi on suunnattu?',
      sv: 'Onko opetus avointa?',
      en: 'Onko opetus avointa?',
    },
    text: {
      fi: 'Onko kurssi suunnattu vain perustutkinto-opiskelijoille vai tarjolla myös [avoimina yliopisto-opintoina](https://teaching.helsinki.fi/ohjeet/artikkeli/jatkuva-oppiminen-ja-avoin-yliopisto-opetus)?',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsOpenUniversity',
          label: {
            fi: 'Kurssi on kaikille avoin',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotOpenUniversity',
          label: {
            fi: 'Perustutkinto-opiskelijoille',
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
