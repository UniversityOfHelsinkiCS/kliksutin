const getQuestionData = (): any => [
  {
    id: 1,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Oppimismuodot',
      sv: 'Inlärningsform',
      en: 'Oppimismuodot',
    },
    text: {
      fi: 'Valitse yksi tai useampi oppimismuoto, jota haluat tukea digitaalisten työvälineden avulla kurssillasi. Oppimismuotojen valinnassa on noudateltu [ABC-työpajoista](https://teaching.helsinki.fi/ohjeet/artikkeli/koulutus-ja-patevoityminen#paragraph-4166) tuttua [ABC-oppimismuotoilun menetelmää, joka on kehitetty University College London:n toimesta](https://blogs.ucl.ac.uk/abc-ld/).',
      sv: 'Välj en eller fler inlärningsformer som du vill stödja med hjälp av digitala verktyg, på kursen. I val av inlärningsform har ett bekant tillvägagångssätt,  [ABC-workshops](https://teaching.helsinki.fi/instruktioner/artikel/utbildning-och-att-skaffa-behorighet#paragraph-4166) tillämpas. [ABC-inlärningsmetoden har utvecklats av University College, London](https://blogs.ucl.ac.uk/abc-ld/).',
      en: 'Valitse yksi tai useampi oppimismuoto, jota haluat tukea digitaalisten työvälineden avulla kurssillasi.',
    },
    optionData: {
      type: 'dimensions',
      options: [
        {
          id: 'acquisition',
          label: {
            fi: 'Tiedonhankinta',
            sv: 'Informationssökning',
            en: 'Acquisition',
          },
          text: {
            fi: 'Opiskelija oppii omaksumalla ja hankkimalla tietoa esimerkiksi silloin, kun hän aktiivisesti seuraa luentoa, lukee kirjallisuutta tai verkkosivuja, katsoo videota tai kuuntelee podcasteja.',
            sv: 'En studerande lär sig och tar till sig information genom att aktivt följa med på föreläsningar, läsa litteratur eller webbsidor, titta på en videor eller lyssna på podcasts.',
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
                    sv: '[Material](https://docs.moodle.org/4x/fi/Aineistot)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'h5p',
                  title: {
                    fi: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                    sv: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
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
            sv: 'Producera',
            en: 'Production',
          },
          text: {
            fi: 'Tuottamisen kautta tapahtuvan oppimisen avulla opiskelija käsittelee, yhdistelee ja demonstroi oppimaansa. Näin hän osoittaa sen, mitä on oppinut, miten hän sillä hetkellä ymmärtää kurssiin liittyviä käsitteitä ja kuinka hän soveltaa niitä käytäntöön.',
            sv: 'Inlärning genom att producera, kombinera och demonstrera visar studeranden vad den lärt sig. På så sätt visar hen vad hen har lärt sig, hur hen för tillfället förstår begrepp relaterade till kursen och hur hen tillämpar dem i praktiken.',
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
                    sv: '[Uppgift](https://docs.moodle.org/4x/fi/Teht%C3%A4v%C3%A4)',
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
                    sv: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'sanasto',
                  title: {
                    fi: '[Sanasto](https://docs.moodle.org/4x/fi/Sanasto)',
                    sv: '[Vokabulär](https://docs.moodle.org/4x/fi/Wiki)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'tietokanta',
                  title: {
                    fi: '[Tietokanta](https://docs.moodle.org/4x/fi/Tietokanta)',
                    sv: '[Databas](https://docs.moodle.org/4x/fi/Tietokanta)',
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
            sv: 'Samarbete',
            en: 'Collaboration',
          },
          text: {
            fi: 'Edellyttää opiskelijoiden työskentelyä pienryhmissä yhteisen tavoitteen saavuttamiseksi. Yhteistyöllä oppiminen sisältää keskustelun, harjoittelun ja tuottamisen elementtejä.',
            sv: 'Förutsätter att eleverna arbetar i små grupper för att nå det gemensamma målet. Kollaborativt lärande innefattar element av diskussion, praktik och produktion.',
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
                    sv: '[Diskussionsplattform](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'wiki',
                  title: {
                    fi: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    sv: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'työpaja',
                  title: {
                    fi: '[Työpaja](https://docs.moodle.org/4x/fi/Ty%C3%B6paja)',
                    sv: '[Workshop](https://docs.moodle.org/4x/fi/Ty%C3%B6paja)',
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
            sv: 'Diskussion',
            en: 'Discussion',
          },
          text: {
            fi: 'Oppija ilmaisee ajatuksensa ja kysymyksensä sekä haastaa opettajan ja/tai vertaistensa ajatukset ja kysymykset ja vastaa niihin.',
            sv: 'Den studerande uttrycker sina tankar och frågor samt utmanar lärarens och/ eller sina kamraters tankar och funderingar och svarar på dem.',
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
                    sv: '[Diskussionsplattform](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'chat',
                  title: {
                    fi: '[Chat](https://docs.moodle.org/4x/fi/Chat-aktiviteetti)',
                    sv: '[Chat](https://docs.moodle.org/4x/fi/Chat-aktiviteetti)',
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
            sv: 'Att forska',
            en: 'Investigation',
          },
          text: {
            fi: 'Ohjaa opiskelijoita etsimään ja vertailemaan tietoa sekä esittämään kritiikkiä ja soveltamaan tekstejä, dokumentteja ja muita materiaaleja, jotka liittyvät opetettavan aiheen ja kurssin sisälötihin ja käsitteisiin.',
            sv: 'Guidar studeranden till att leta och jämföra information och att framföra kritik och tillämpa texter, dokument samt annat material som tillhör det undervisade ämnet och kursens innehåll och begrepp.',
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
                    sv: '[Diskussionsplattform](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'wiki',
                  title: {
                    fi: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    sv: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'tietokanta',
                  title: {
                    fi: '[Tietokanta](https://docs.moodle.org/4x/fi/Tietokanta)',
                    sv: '[Databas](https://docs.moodle.org/4x/fi/Tietokanta)',
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
            sv: 'Möjliggör tillämpning av information i rätt sammanhang. Studerande arbetar enligt uppgiften och använder den feedback hen får för att utveckla sin egen inlärning. Feedbacken kan vara självreflektion, från andra studenter, läraren eller baserat på resultat från aktiviteter.',
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
                    sv: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'tentti',
                  title: {
                    fi: '[Tentti](https://docs.moodle.org/4x/fi/Tentti)',
                    sv: '[Tentamen](https://docs.moodle.org/4x/fi/Tentti)',
                    en: '',
                  },
                  visibility: {
                    options: ['courseCompletionMethodExam'],
                  },
                },
                {
                  label: 'työpaja',
                  title: {
                    fi: '[Työpaja](https://docs.moodle.org/4x/fi/Ty%C3%B6paja)',
                    sv: '[Workshop](https://docs.moodle.org/4x/fi/Ty%C3%B6paja)',
                    en: '',
                  },
                  visibility: {},
                },
                {
                  label: 'oppitunti',
                  title: {
                    fi: '[Oppitunti](https://docs.moodle.org/4x/fi/Oppitunti)',
                    sv: '[Lektion](https://docs.moodle.org/4x/fi/Oppitunti)',
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
      sv: 'Storlek på kursen',
      en: 'Kurssin koko',
    },
    text: {
      fi: 'Valitse onko kurssi osallistujamäärältään pieni (<50), suuri (>=50) vai rajoittamaton.',
      sv: 'Välj om kursens deltagarantal är liten (<50), stor (>=50) eller obegränsad.',
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
            sv: 'obegränsad',
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
      sv: 'Deltagande',
      en: 'Osallistuminen',
    },
    text: {
      fi: 'Sisältääkö kurssi vain lähiopetusta, [vain etäopetusta](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422) vai molempia? Mikäli opetukseen osallistuu samanaikaisesti oppijoita paikan päällä opetustilassa ja etänä, on kyse [hybridiopetuksesta.](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422) Valitse tällöin molemmat vaihtoehdot.',
      sv: 'Innefattar kursen enbart närundervisning, [enbart distansundervisning](https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning#paragraph-5422) eller båda? Ifall studeranden deltar såväl på plats i undervisningslokalen, som på distans är det frågan om [hybridundervisning.](https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning#paragraph-5422) Välj i detta fall båda alternativen.',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: 'courseAttendancePresent',
          label: {
            fi: 'Läsnä',
            sv: 'Närvarande',
            en: 'Läsnä',
          },
        },
        {
          id: 'courseAttendanceRemote',
          label: {
            fi: 'Etä',
            sv: 'Distans',
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
      sv: 'Prestationstyp',
      en: 'Suoritusmuoto',
    },
    text: {
      fi: 'Valitse kaikki ne suoritusmuodot, jotka parhaiten kuvaavat kurssilla käytössä olevia [suoritustapoja](https://teaching.helsinki.fi/ohjeet/artikkeli/suoritustavat).',
      sv: 'Välj alla prestationstyper som bäst beskriver kursens [prestationssätt]( https://teaching.helsinki.fi/instruktioner/artikel/prestationssatt).',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: 'courseCompletionMethodExam',
          label: {
            fi: 'Tentti',
            sv: 'Tentamen',
            en: 'Tentti',
          },
          data: {
            fi: '[Tentin](https://teaching.helsinki.fi/ohjeet/artikkeli/tentit-ja-niiden-jarjestaminen) voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
            sv: '[Tentamen]( https://teaching.helsinki.fi/instruktioner/artikel/tentamina-och-ordnande-av-dem) kan anordnas antingen en viss dag eller under en längre tentamensperiod, i universitets elektroniska tentamensutrymmen, som distans – eller saltentamen. Tentamen är ett sätt att bedöma studentens kunnande och hur kursens inlärningsmål har uppnåtts. Deltentamen och förhör är också bra sätt att stödja studerandes inlärning under kursens gång.',
            en: 'Tentin voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
          },
        },
        {
          id: 'courseCompletionMethodSmallGroup',
          label: {
            fi: 'Pienryhmätyöskentely',
            sv: 'Smågruppsarbete',
            en: 'Pienryhmätyöskentely',
          },
          data: {
            fi: '[Ryhmätyöt](https://teaching.helsinki.fi/ohjeet/artikkeli/erilaisia-arviointitapoja#paragraph-6551) perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
            sv: '[Grupparbete] (https://teaching.helsinki.fi/ohjeet/artikkeli/erilaisia-arviointitapoja#paragraph-6551)  bygger på diskussion och att arbeta tillsammans. Grupparbeten främjar interaktion mellan studeranden och ökar samarbetsförmågan. Diskussioner mellan studeranden och genom att göra uppgifter tillsammans ger en djupare förståelse för ämnet.',
            en: 'Ryhmätyöt perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
          },
        },
        {
          id: 'courseCompletionMethodDiary',
          label: {
            fi: 'Välitehtävät',
            sv: 'Deluppgifter',
            en: 'Välitehtävät',
          },
          data: {
            fi: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
            sv: 'Mindre uppgifterna som utförs under kursens gång främjar och stöder lärandet och uppnåendet av utsatta mål för kursen. Dessa är t.ex. självutvärderingstest, räkneövningar, diskussionsuppgifter och peer feedback-uppgifter.',
            en: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
          },
        },
        {
          id: 'courseCompletionMethodLaboratory',
          label: {
            fi: 'Laboratoriotyöt ja simulaatioharjoitukset',
            sv: 'Arbete i laboratorium och simuleringsövningar.',
            en: 'Laboratoriotyöt ja simulaatioharjoitukset',
          },
          data: {
            fi: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
            sv: 'Arbete i laboratorium och simuleringsövningar stödjer autentiskt inlärning, lär praktiska färdigheter och främjar en konkret utveckling av expert- och problemlösningsförmåga.',
            en: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
          },
        },
        {
          id: 'courseCompletionMethodAssignment',
          label: {
            fi: 'Kirjallinen tehtävä',
            sv: 'Skriftlig uppgift',
            en: 'Kirjallinen tehtävä',
          },
          data: {
            fi: 'Kaikki oppimisen eri vaiheessa (ennen, aikana tai lopuksi) laadittavat kirjalliset tehtävät, kuten esseet, oppimispäiväkirjat, ja erilaiset raportit edistävät tiedon soveltamista, analysointia ja uuden tiedon luomista ja tukevat täten oppimistavoitteiden saavuttamista.',
            sv: 'Alla skriftliga uppgifter som görs i inlärningens olika skeden (före, under eller efter), såsom uppsatser, inlärningsdagböcker och olika typer av rapporter, främjar tillämpningen av kunskap, analys samt skapandet av ny information, vilket i sin tur stödjer målet med inlärningen.',
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
      sv: 'Bandning av undervisningssituationer?',
      en: 'Tallennus',
    },
    text: {
      fi: 'Tallennetaanko kurssin aikana esimerkiksi luentoja, jotka tuodaan opiskelijoiden käyttöön myöhemmin? Muistathan huomioida [opetusvideoissa saavutettavuuden](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksen-digitaalinen-saavutettavuus#paragraph-5245).',
      sv: 'Kommer t.ex. föreläsningar att bandas under kursens gång och göras tillgängliga för studeranden i ett senare skede? Kom ihåg att beakta [undervisningsvideornas tillgänglighet](https://teaching.helsinki.fi/instruktioner/artikel/digital-tillganglighet-i-undervisningen#paragraph-5245).',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsRecorded',
          label: {
            fi: 'Kyllä',
            sv: 'Ja',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotRecorded',
          label: {
            fi: 'Ei',
            sv: 'Nej',
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
      sv: 'Idéer för bedömningen, kan ses här.',
      en: 'Arviointi',
    },
    text: {
      fi: '[Oppimisen arviointi](https://teaching.helsinki.fi/ohjeet/oppimisen-ja-osaamisen-arviointi) voi olla formatiivista eli kurssin aikana tapahtuvaa ja oppimisen tukemiseen tähtäävää (esim. palaute kurssin aikana) tai summatiivista eli opintojakson päätteeksi tapahtuvaa (esim. lopputentti). Laadukkaassa opetuksessa on hyvä käyttää [erilaisia formatiivisen arvioinnin muotoja](https://teaching.helsinki.fi/ohjeet/artikkeli/erilaisia-arviointitapoja), sillä silloin voidaan parhaiten ohjata ja suunnata opiskelijoiden oppimista. Myös diagnostinen arviointi eli ennakkotietojen arviointi ennen kurssia tai kurssin alussa on tärkeää, koska opiskelijoiden ennakko-osaaminen vaikuttavaa paljon siihen, miten opiskelijat oppivat. Diagnostista arviointia voidaan käyttää opetuksen suunnittelun lähtökohtana, sillä sen avulla opettaja voi tunnistaa mahdollisia puutteita tai virhekäsityksiä opiskelijoiden tiedoissa.',
      sv: '[Bedömning av inlärning]( https://teaching.helsinki.fi/instruktioner/bedomning-av-larande-och-kunskap) kan vara formativt d.v.s. ske under kursen och syfta till att stödja lärandet (t.ex. feedback under kursen) eller den kan det vara summativt, d.v.s. ske i slutet av kursen (t.ex. sluttentamen). I högklassig undervisning är det bra att använda [olika typer av formativ bedömning](https://teaching.helsinki.fi/instruktioner/node/3142), för då kan man bäst leda och styra studerandens inlärning. Även diagnostisk bedömning, d.v.s. bedömning av förhandsinformation innan – eller i början av kursen är viktig. Detta för att elevernas förhandskunskap har stor inverkan på hur eleverna lär sig. Diagnostisk bedömning kan användas som utgångspunkt för planeringen av undervisningen. Eftersom mha. den kan en lärare identifiera möjliga brister eller missuppfattningar i en studerandes kunskaper.',
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
      sv: 'Är det meningen att anordna kursen, så att den är en öppen online kurs, tillgänglig för alla (Massive Open Online Course, eli MOOC)?',
      en: 'Haluatko pitää kurssi MOOCina?',
    },
    text: {
      fi: 'Katso [tästä](https://teaching.helsinki.fi/ohjeet/artikkeli/mooc-kurssien-kriteerit-ja-ohjeet) MOOC-kurssien kriteerit ja ohjeet.',
      sv: ' Se [här](https://teaching.helsinki.fi/instruktioner/artikel/mooc-kriterier-och-stod) kriterier och instruktioner för MOOC-kurser.',
      en: '',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsMooc',
          label: {
            fi: 'Kyllä',
            sv: 'Ja',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotMooc',
          label: {
            fi: 'Ei',
            sv: 'Nej',
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
      sv: 'Vem är kursen riktad till?',
      en: 'Onko opetus avointa?',
    },
    text: {
      fi: 'Onko kurssi suunnattu vain perustutkinto-opiskelijoille vai tarjolla myös [avoimina yliopisto-opintoina](https://teaching.helsinki.fi/ohjeet/artikkeli/jatkuva-oppiminen-ja-avoin-yliopisto-opetus)?',
      sv: 'Riktar sig kursen enbart till studeranden på grundnivå eller erbjuds den även som studier på [öppna universitet](https://teaching.helsinki.fi/instruktioner/artikel/kontinuerligt-larande-och-oppen-universitetsundervisning)?',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsOpenUniversity',
          label: {
            fi: 'Kurssi on kaikille avoin',
            sv: 'Kursen är tillgänglig för alla.',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotOpenUniversity',
          label: {
            fi: 'Perustutkinto-opiskelijoille',
            sv: 'För studerande på grundnivå',
            en: 'Ei',
          },
        },
      ],
    },
    visibility: {},
  },
]

export default getQuestionData
