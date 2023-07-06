import { Question } from '../types'

const getQuestionData = (): Question[] => [
  {
    id: 1,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Oppimismuodot',
      sv: 'Inlärningsform',
      en: 'Form of learning',
    },
    text: {
      fi: 'Valitse yksi tai useampi oppimismuoto, jota haluat tukea digitaalisten työvälineden avulla kurssillasi. Oppimismuotojen valinnassa on noudateltu [ABC-työpajoista](https://teaching.helsinki.fi/ohjeet/artikkeli/koulutus-ja-patevoityminen#paragraph-4166) tuttua [ABC-oppimismuotoilun menetelmää, joka on kehitetty University College London:n toimesta](https://blogs.ucl.ac.uk/abc-ld/).',
      sv: 'Välj en eller fler inlärningsformer som du vill stödja med hjälp av digitala verktyg, på kursen. I val av inlärningsform har ett bekant tillvägagångssätt,  [ABC-workshops](https://teaching.helsinki.fi/instruktioner/artikel/utbildning-och-att-skaffa-behorighet#paragraph-4166) tillämpas. [ABC-inlärningsmetoden har utvecklats av University College, London](https://blogs.ucl.ac.uk/abc-ld/).',
      en: 'Choose one or more forms of learning that you want to support with digital tools in your course. In the selection of learning formats the familiar [ABC-workshops](https://teaching.helsinki.fi/instructions/article/education-and-qualifications#paragraph-4166) have been applied, the [ABC learning method, has been developed by University College London](https://blogs.ucl.ac.uk/abc-ld/).',
    },
    optionData: {
      type: 'dimensions',
      options: [
        {
          id: 'acquisition',
          label: 'acquisition',
          color: '#f18235',
          title: {
            fi: 'Tiedonhankinta',
            sv: 'Informationssökning',
            en: 'Infomration acquisition',
          },
          text: {
            fi: 'Opiskelija oppii omaksumalla ja hankkimalla tietoa esimerkiksi silloin, kun hän aktiivisesti seuraa luentoa, lukee kirjallisuutta tai verkkosivuja, katsoo videota tai kuuntelee podcasteja.',
            sv: 'En studerande lär sig och tar till sig information genom att aktivt följa med på föreläsningar, läsa litteratur eller webbsidor, titta på en videor eller lyssna på podcasts.',
            en: 'The student learns and acquires information, for example, when they actively follows a lecture, reads literature or text from websites, watches videos or listens to podcasts.',
          },
          data: [
            { recommendationLabel: 'zoom', subtools: [] },
            { recommendationLabel: 'unitube', subtools: [] },
            { recommendationLabel: 'presemo', subtools: [] },
            { recommendationLabel: 'thinglink', subtools: [] },
            {
              recommendationLabel: 'moodle',
              subtools: [
                {
                  label: 'aineistot',
                  title: {
                    fi: '[Aineistot](https://docs.moodle.org/4x/fi/Aineistot)',
                    sv: '[Material](https://docs.moodle.org/4x/fi/Aineistot)',
                    en: '[Material](https://docs.moodle.org/4x/fi/Aineistot)',
                  },
                  visibility: {},
                },
                {
                  label: 'h5p',
                  title: {
                    fi: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                    sv: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                    en: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                  },
                  visibility: {},
                },
              ],
            },
            { recommendationLabel: 'screencast-o-matic', subtools: [] },
          ],
        },
        {
          id: 'production',
          label: 'production',
          color: '#afd255',
          title: {
            fi: 'Tuottaminen',
            sv: 'Producera',
            en: 'Production',
          },
          text: {
            fi: 'Tuottamisen kautta tapahtuvan oppimisen avulla opiskelija käsittelee, yhdistelee ja demonstroi oppimaansa. Näin hän osoittaa sen, mitä on oppinut, miten hän sillä hetkellä ymmärtää kurssiin liittyviä käsitteitä ja kuinka hän soveltaa niitä käytäntöön.',
            sv: 'Inlärning genom att producera, möjliggör att studerande kan kombinera och demonstrera vad den lärt sig. På så sätt visar hen vad hen har lärt sig, hur hen för tillfället förstår begrepp relaterade till kursen och hur hen tillämpar dem i praktiken.',
            en: 'The student can combine and demonstrats what they have learnt, via learning through production. In this way, they demonstrates what they have learnt, to what extent they currently understand the concepts related to the course and how they can apply it in practice.',
          },
          data: [
            { recommendationLabel: 'zoom', subtools: [] },
            { recommendationLabel: 'unitube', subtools: [] },
            { recommendationLabel: 'flinga', subtools: [] },
            { recommendationLabel: 'thinglink', subtools: [] },
            { recommendationLabel: 'eportfolio', subtools: [] },
            {
              recommendationLabel: 'moodle',
              subtools: [
                {
                  label: 'tehtävä',
                  title: {
                    fi: '[Tehtävä](https://docs.moodle.org/4x/fi/Teht%C3%A4v%C3%A4)',
                    sv: '[Uppgift](https://docs.moodle.org/4x/fi/Teht%C3%A4v%C3%A4)',
                    en: '[Assignment](https://docs.moodle.org/4x/fi/Teht%C3%A4v%C3%A4)',
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
                    en: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                  },
                  visibility: {},
                },
                {
                  label: 'sanasto',
                  title: {
                    fi: '[Sanasto](https://docs.moodle.org/4x/fi/Sanasto)',
                    sv: '[Vokabulär](https://docs.moodle.org/4x/fi/Wiki)',
                    en: '[Vokabulary](https://docs.moodle.org/4x/fi/Wiki)',
                  },
                  visibility: {},
                },
                {
                  label: 'tietokanta',
                  title: {
                    fi: '[Tietokanta](https://docs.moodle.org/4x/fi/Tietokanta)',
                    sv: '[Databas](https://docs.moodle.org/4x/fi/Tietokanta)',
                    en: '[Database](https://docs.moodle.org/4x/fi/Tietokanta)',
                  },
                  visibility: {},
                },
              ],
            },
            { recommendationLabel: 'screen-cast-o-matic', subtools: [] },
          ],
        },
        {
          id: 'collaboration',
          label: 'collaboration',
          color: '#8261a1',
          title: {
            fi: 'Yhteistyö',
            sv: 'Samarbete',
            en: 'Collaboration',
          },
          text: {
            fi: 'Edellyttää opiskelijoiden työskentelyä pienryhmissä yhteisen tavoitteen saavuttamiseksi. Yhteistyöllä oppiminen sisältää keskustelun, harjoittelun ja tuottamisen elementtejä.',
            sv: 'Förutsätter att eleverna arbetar i små grupper för att nå det gemensamma målet. Kollaborativt lärande innefattar element av diskussion, praktik och produktion.',
            en: 'Requires students to work in small groups to achieve a common goal. Collaborative learning includes elements of discussion, practice and production.',
          },
          data: [
            { recommendationLabel: 'zoom', subtools: [] },
            { recommendationLabel: 'flinga', subtools: [] },
            { recommendationLabel: 'thinglink', subtools: [] },
            { recommendationLabel: 'eportfolio', subtools: [] },
            {
              recommendationLabel: 'moodle',
              subtools: [
                {
                  label: 'keskustelualue',
                  title: {
                    fi: '[Keskustelualue](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    sv: '[Diskussionsplattform](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    en: '[Discussion area](https://docs.moodle.org/4x/fi/Keskustelualue)',
                  },
                  visibility: {},
                },
                {
                  label: 'wiki',
                  title: {
                    fi: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    sv: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    en: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                  },
                  visibility: {},
                },
                {
                  label: 'työpaja',
                  title: {
                    fi: '[Työpaja](https://docs.moodle.org/4x/fi/Ty%C3%B6paja)',
                    sv: '[Workshop](https://docs.moodle.org/4x/fi/Ty%C3%B6paja)',
                    en: '[Workshop](https://docs.moodle.org/4x/fi/Ty%C3%B6paja)',
                  },
                  visibility: {},
                },
              ],
            },
          ],
        },
        {
          id: 'discussion',
          label: 'discussion',
          color: '#23439b',
          title: {
            fi: 'Keskustelu',
            sv: 'Diskussion',
            en: 'Discussion',
          },
          text: {
            fi: 'Oppija ilmaisee ajatuksensa ja kysymyksensä sekä haastaa opettajan ja/tai vertaistensa ajatukset ja kysymykset ja vastaa niihin.',
            sv: 'Den studerande uttrycker sina tankar och frågor samt utmanar lärarens och/ eller sina kamraters tankar och funderingar och svarar på dem.',
            en: 'The student expresses their thoughts and questions and challenges the teacher and/or their peers ideas and the question and answer them.',
          },
          data: [
            { recommendationLabel: 'zoom', subtools: [] },
            { recommendationLabel: 'presemo', subtools: [] },
            {
              recommendationLabel: 'moodle',
              subtools: [
                {
                  label: 'keskustelualue',
                  title: {
                    fi: '[Keskustelualue](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    sv: '[Diskussionsplattform](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    en: '[Discussion area](https://docs.moodle.org/4x/fi/Keskustelualue)',
                  },
                  visibility: {},
                },
                {
                  label: 'chat',
                  title: {
                    fi: '[Chat](https://docs.moodle.org/4x/fi/Chat-aktiviteetti)',
                    sv: '[Chat](https://docs.moodle.org/4x/fi/Chat-aktiviteetti)',
                    en: '[Chat](https://docs.moodle.org/4x/fi/Chat-aktiviteetti)',
                  },
                  visibility: {},
                },
              ],
            },
          ],
        },
        {
          id: 'investication',
          label: 'investication',
          color: '#199995',
          title: {
            fi: 'Tutkiminen',
            sv: 'Att forska',
            en: 'To research',
          },
          text: {
            fi: 'Ohjaa opiskelijoita etsimään ja vertailemaan tietoa sekä esittämään kritiikkiä ja soveltamaan tekstejä, dokumentteja ja muita materiaaleja, jotka liittyvät opetettavan aiheen ja kurssin sisälötihin ja käsitteisiin.',
            sv: 'Guidar studeranden till att leta och jämföra information och att framföra kritik och tillämpa texter, dokument samt annat material som tillhör det undervisade ämnet och kursens innehåll och begrepp.',
            en: 'Guides the student to look for - and compare information and to present criticism and apply texts, documents and other materials that belong to the course subject and the content and concepts of the course.',
          },
          data: [
            { recommendationLabel: 'flinga', subtools: [] },
            { recommendationLabel: 'eportfolio', subtools: [] },
            {
              recommendationLabel: 'moodle',
              subtools: [
                {
                  label: 'keskustelualue',
                  title: {
                    fi: '[Keskustelualue](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    sv: '[Diskussionsplattform](https://docs.moodle.org/4x/fi/Keskustelualue)',
                    en: '[Discussion area](https://docs.moodle.org/4x/fi/Keskustelualue)',
                  },
                  visibility: {},
                },
                {
                  label: 'wiki',
                  title: {
                    fi: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    sv: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                    en: '[Wiki](https://docs.moodle.org/4x/fi/Wiki)',
                  },
                  visibility: {},
                },
                {
                  label: 'tietokanta',
                  title: {
                    fi: '[Tietokanta](https://docs.moodle.org/4x/fi/Tietokanta)',
                    sv: '[Databas](https://docs.moodle.org/4x/fi/Tietokanta)',
                    en: '[Database](https://docs.moodle.org/4x/fi/Tietokanta)',
                  },
                  visibility: {},
                },
              ],
            },
          ],
        },
        {
          id: 'practice',
          label: 'practice',
          color: '#ed1975',
          title: {
            fi: 'Harjoittelu',
            sv: 'Harjoittelu',
            en: 'Practice',
          },
          text: {
            fi: 'Mahdollistaa tiedon soveltamisen kontekstissa. Oppija toimii tehtävän mukaan ja käyttää saamaansa palautetta oman osaamisensa kehittämisessä. Palaute voi tulla itsereflektiosta, vertaisilta, opettajalta tai toiminnan tuloksista.',
            sv: 'Möjliggör tillämpning av information i rätt sammanhang. Studerande arbetar enligt uppgiften och använder den feedback hen får för att utveckla sin egen inlärning. Feedbacken kan vara självreflektion, från andra studenter, läraren eller baserat på resultat från aktiviteter.',
            en: 'Enables the application of knowledge in context. The student acts according to the task and uses the feedback they receive to develop their competence. Feedback can come from self-reflection, peers, the teacher, or results from activities.',
          },
          data: [
            { recommendationLabel: 'thinglink', subtools: [] },
            {
              recommendationLabel: 'moodle',
              subtools: [
                {
                  label: 'h5p',
                  title: {
                    fi: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                    sv: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                    en: '[H5P](https://docs.moodle.org/4x/fi/H5P)',
                  },
                  visibility: {},
                },
                {
                  label: 'tentti',
                  title: {
                    fi: '[Tentti](https://docs.moodle.org/4x/fi/Tentti)',
                    sv: '[Tentamen](https://docs.moodle.org/4x/fi/Tentti)',
                    en: '[Examination](https://docs.moodle.org/4x/fi/Tentti)',
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
                    en: '[Workshop](https://docs.moodle.org/4x/fi/Ty%C3%B6paja)',
                  },
                  visibility: {},
                },
                {
                  label: 'oppitunti',
                  title: {
                    fi: '[Oppitunti](https://docs.moodle.org/4x/fi/Oppitunti)',
                    sv: '[Lektion](https://docs.moodle.org/4x/fi/Oppitunti)',
                    en: '[Lesson](https://docs.moodle.org/4x/fi/Oppitunti)',
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
      en: 'Course size',
    },
    text: {
      fi: 'Valitse onko kurssi osallistujamäärältään pieni (<50), suuri (>=50) vai rajoittamaton.',
      sv: 'Välj om kursens deltagarantal är liten (<50), stor (>=50) eller obegränsad.',
      en: 'Choose whether the number of course participants is small (<50), large (>=50) or unlimited.',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseSizeSmall',
          label: 'courseSizeSmall',
          title: {
            fi: '< 50',
            sv: '< 50',
            en: '< 50',
          },
        },
        {
          id: 'courseSizeBig',
          label: 'courseSizeBig',
          title: {
            fi: '>= 50',
            sv: '>= 50',
            en: '>= 50',
          },
        },
        {
          id: 'courseSizeUnlimited',
          label: 'courseSizeUnlimited',
          title: {
            fi: 'rajoittamaton',
            sv: 'obegränsad',
            en: 'unlimited',
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
      en: 'Participation',
    },
    text: {
      fi: 'Sisältääkö kurssi vain lähiopetusta, [vain etäopetusta](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422) vai molempia? Mikäli opetukseen osallistuu samanaikaisesti oppijoita paikan päällä opetustilassa ja etänä, on kyse [hybridiopetuksesta.](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422) Valitse tällöin molemmat vaihtoehdot.',
      sv: 'Innefattar kursen enbart närundervisning, [enbart distansundervisning](https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning#paragraph-5422) eller båda? Ifall studeranden deltar såväl på plats i undervisningslokalen, som på distans är det frågan om [hybridundervisning.](https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning#paragraph-5422) Välj i detta fall båda alternativen.',
      en: 'Does the course include only contact teaching, [only distance teaching]( https://teaching.helsinki.fi/instructions/article/teaching-facilities#paragraph-5422) or both? If students participate in the teaching at the same time on-site in teaching facilities and remotely, it is [hybrid teaching](https://teaching.helsinki.fi/instructions/article/teaching-facilities#paragraph-5422). In that case, select both options.',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: 'courseAttendancePresent',
          label: 'courseAttendancePresent',
          title: {
            fi: 'Läsnä',
            sv: 'Närvarande',
            en: 'Present',
          },
        },
        {
          id: 'courseAttendanceRemote',
          label: 'courseAttendanceRemote',
          title: {
            fi: 'Etä',
            sv: 'Distans',
            en: 'Distance',
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
      en: 'Type of performance',
    },
    text: {
      fi: 'Valitse kaikki ne suoritusmuodot, jotka parhaiten kuvaavat kurssilla käytössä olevia [suoritustapoja](https://teaching.helsinki.fi/ohjeet/artikkeli/suoritustavat).',
      sv: 'Välj alla prestationstyper som bäst beskriver kursens [prestationssätt]( https://teaching.helsinki.fi/instruktioner/artikel/prestationssatt).',
      en: 'Select all types of performance that describes the [methods of completeting studies](https://teaching.helsinki.fi/instructions/article/methods-completing-studies) used in the course.',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: 'courseCompletionMethodExam',
          label: 'courseCompletionMethodExam',
          title: {
            fi: 'Tentti',
            sv: 'Tentamen',
            en: 'Examination',
          },
          data: {
            fi: '[Tentin](https://teaching.helsinki.fi/ohjeet/artikkeli/tentit-ja-niiden-jarjestaminen) voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
            sv: '[Tentamen]( https://teaching.helsinki.fi/instruktioner/artikel/tentamina-och-ordnande-av-dem) kan anordnas antingen en viss dag eller under en längre tentamensperiod, i universitets elektroniska tentamensutrymmen, som distans – eller saltentamen. Tentamen är ett sätt att bedöma studentens kunnande och hur kursens inlärningsmål har uppnåtts. Deltentamen och förhör är också bra sätt att stödja studerandes inlärning under kursens gång.',
            en: '[Examination](https://teaching.helsinki.fi/instructions/article/exams-and-related-arrangements) can be organized either on a specific day or during a longer examination period, in the university&lsquo;s electronic exam facilities, as a remote - or classroom exam. Examination is one way to assess the student&lsquo;s skills and how the learning goals of the course have been achieved. Mid-term exams and tests are also a good way to support the student&lsquo;s learning during the course.',
          },
        },
        {
          id: 'courseCompletionMethodSmallGroup',
          label: 'courseCompletionMethodSmallGroup',
          title: {
            fi: 'Pienryhmätyöskentely',
            sv: 'Smågruppsarbete',
            en: 'Group work in small groups',
          },
          data: {
            fi: '[Ryhmätyöt](https://teaching.helsinki.fi/ohjeet/artikkeli/erilaisia-arviointitapoja#paragraph-6551) perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
            sv: '[Grupparbete] (https://teaching.helsinki.fi/ohjeet/artikkeli/erilaisia-arviointitapoja#paragraph-6551)  bygger på diskussion och att arbeta tillsammans. Grupparbeten främjar interaktion mellan studeranden och ökar samarbetsförmågan. Diskussioner mellan studeranden och genom att göra uppgifter tillsammans ger en djupare förståelse för ämnet.',
            en: '[Group work](https://teaching.helsinki.fi/instructions/node/3142#paragraph-6551) are based on working together and discussing. Group work promotes interaction between students and teaches cooperation skills. Discussions between students and doing tasks together deepen the understanding of the subject.',
          },
        },
        {
          id: 'courseCompletionMethodDiary',
          label: 'courseCompletionMethodDiary',
          title: {
            fi: 'Välitehtävät',
            sv: 'Deluppgifter',
            en: 'Low stake assignment',
          },
          data: {
            fi: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
            sv: 'Mindre uppgifterna som utförs under kursens gång främjar och stöder lärandet och uppnåendet av utsatta mål för kursen. Dessa är t.ex. självutvärderingstest, räkneövningar, diskussionsuppgifter och peer feedback-uppgifter.',
            en: 'Low stake assignments completed during the course promotes and supports learning and the achievement of the learning goals set for the course. Types of tasks are e.g. self-assessment tests, calculation exercises, discussion tasks, peer feedback tasks.',
          },
        },
        {
          id: 'courseCompletionMethodLaboratory',
          label: 'courseCompletionMethodLaboratory',
          title: {
            fi: 'Laboratoriotyöt ja simulaatioharjoitukset',
            sv: 'Arbete i laboratorium och simuleringsövningar.',
            en: 'Laboratory work and simulation exercises',
          },
          data: {
            fi: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
            sv: 'Arbete i laboratorium och simuleringsövningar stödjer autentiskt inlärning, lär praktiska färdigheter och främjar en konkret utveckling av expert- och problemlösningsförmåga.',
            en: 'Laboratory work and simulation exercises support authentic learning, teaches practical skills and promotes concrete development of expert and problem-solving skills.',
          },
        },
        {
          id: 'courseCompletionMethodAssignment',
          label: 'courseCompletionMethodAssignment',
          title: {
            fi: 'Kirjallinen tehtävä',
            sv: 'Skriftlig uppgift',
            en: 'Written assignment',
          },
          data: {
            fi: 'Kaikki oppimisen eri vaiheessa (ennen, aikana tai lopuksi) laadittavat kirjalliset tehtävät, kuten esseet, oppimispäiväkirjat, ja erilaiset raportit edistävät tiedon soveltamista, analysointia ja uuden tiedon luomista ja tukevat täten oppimistavoitteiden saavuttamista.',
            sv: 'Alla skriftliga uppgifter som görs i inlärningens olika skeden (före, under eller efter), såsom uppsatser, inlärningsdagböcker och olika typer av rapporter, främjar tillämpningen av kunskap, analys samt skapandet av ny information, vilket i sin tur stödjer målet med inlärningen.',
            en: 'All written assignments prepared at different stages of learning (before, during or at the end), such as essays, learning diaries, and various reports promote the application of knowledge, analysis and the creation of new knowledge and thus support the achievement of set learning goals.',
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
    priority: 1,
    title: {
      fi: 'Opetustilanteiden tallennus?',
      sv: 'Bandning av undervisningssituationer?',
      en: 'The recording of a teaching situations?',
    },
    text: {
      fi: 'Tallennetaanko kurssin aikana esimerkiksi luentoja, jotka tuodaan opiskelijoiden käyttöön myöhemmin? Muistathan huomioida [opetusvideoissa saavutettavuuden](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksen-digitaalinen-saavutettavuus#paragraph-5245).',
      sv: 'Kommer t.ex. föreläsningar att bandas under kursens gång och göras tillgängliga för studeranden i ett senare skede? Kom ihåg att beakta [undervisningsvideornas tillgänglighet](https://teaching.helsinki.fi/instruktioner/artikel/digital-tillganglighet-i-undervisningen#paragraph-5245).',
      en: 'Are lectures, for example, recorded during the course and made available to students at a later point? Please remember to consider the [accessibility of teaching videos]( https://teaching.helsinki.fi/instructions/article/digital-accessibility-teaching#paragraph-5245).',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsRecorded',
          label: 'courseIsRecorded',
          title: {
            fi: 'Kyllä',
            sv: 'Ja',
            en: 'Yes',
          },
        },
        {
          id: 'courseIsNotRecorded',
          label: 'courseIsNotRecorded',
          title: {
            fi: 'Ei',
            sv: 'Nej',
            en: 'No',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 6,
    surveyId: 1,
    parentId: null,
    priority: 5,
    title: {
      en: 'Miten kurssi arvioidaan?',
      fi: 'Miten kurssi arvioidaan?',
      sv: 'Miten kurssi arvioidaan?',
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
          id: 'courseGradingPassFail',
          label: 'courseGradingPassFail',
          title: {
            fi: 'Hyväksytty-Hylätty',
            sv: 'Underkänd-Godkänd',
            en: 'Pass-Fail',
          },
        },
        {
          id: 'courseGradingGeneralScale',
          label: 'courseGradingGeneralScale',
          title: {
            fi: 'Yleinen asteikko, 0-5',
            sv: 'Allmän skala, 0-5',
            en: 'General scale, 0-5',
          },
        },
      ],
    },
    visibility: {
      // options: ['out-of-use'],
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
      en: 'Is the course intended to be organized as an online course open to everyone (Massive Open Online Course, i.e. MOOC)?',
    },
    text: {
      fi: 'Katso [tästä](https://teaching.helsinki.fi/ohjeet/artikkeli/mooc-kurssien-kriteerit-ja-ohjeet) MOOC-kurssien kriteerit ja ohjeet.',
      sv: ' Se [här](https://teaching.helsinki.fi/instruktioner/artikel/mooc-kriterier-och-stod) kriterier och instruktioner för MOOC-kurser.',
      en: 'See [here](https://teaching.helsinki.fi/instructions/article/mooc-criteria-and-support) for criterias and instructions for MOOC courses.',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsMooc',
          label: 'courseIsMooc',
          title: {
            fi: 'Kyllä',
            sv: 'Ja',
            en: 'Yes',
          },
        },
        {
          id: 'courseIsNotMooc',
          label: 'courseIsNotMooc',
          title: {
            fi: 'Ei',
            sv: 'Nej',
            en: 'No',
          },
        },
      ],
    },
    visibility: {
      options: ['courseSizeUnlimited'],
    },
  },
  {
    id: 8,
    surveyId: 1,
    parentId: 3,
    priority: 0,
    title: {
      fi: 'Monimuoto-opetus',
      sv: 'Flerformsutbildning',
      en: 'Multiform teaching',
    },
    text: {
      fi: 'Lähi- ja etäopetusta sisältävän kurssin opetus on usein käytännössä [sulautuvaa opetusta](https://wiki.helsinki.fi/display/ZO/1.+Sulautuva+opetus). Mikäli kurssilla on toteutetaan opetusta, jossa osa opiskelijoista osallistuu lähiopetukseen toisten osallistuessa samanaikaisesti etäyhteyksien välityksellä, on kyse [hybridiopetuksesta](https://teaching.helsinki.fi/ohjeet/artikkeli/linjakas-opetus-ja-opetuksen-suunnittelun-10-vaihetta#paragraph-6852).',
      sv: 'Undervisningen av en kurs som inkluderar både när- och distansundervisning är ofta i praktiken [blandad undervisning](https://wiki.helsinki.fi/display/ZO/1.+Sulautuva+opetus). Om kursen har undervisning där några av eleverna deltar i undervisning på plats medan andra deltar på distans så är det [hybridundervisning]( https://teaching.helsinki.fi/instruktioner/artikel/planering-av-konstruktivt-samordnad-undervisning-tio-steg#paragraph-6852).',
      en: 'Teaching that includes contact- and distance learning is often in practice [blended teaching](https://wiki.helsinki.fi/display/ZO/1.+Sulautuva+opetus). If the course has teaching in which some students participate on site while others participate simultaneously remotely, it is [hybrid teaching]( https://teaching.helsinki.fi/instructions/article/constructive-alignment-teaching-and-10-steps-course-design#paragraph-6852).',
    },
    optionData: {
      type: 'singleChoice',
      options: [],
    },
    visibility: {
      options: ['courseAttendancePresent', 'courseAttendanceRemote'],
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
      en: 'Who is the course aimed at?',
    },
    text: {
      fi: 'Onko kurssi suunnattu vain perustutkinto-opiskelijoille vai tarjolla myös [avoimina yliopisto-opintoina](https://teaching.helsinki.fi/ohjeet/artikkeli/jatkuva-oppiminen-ja-avoin-yliopisto-opetus)?',
      sv: 'Riktar sig kursen enbart till studeranden på grundnivå eller erbjuds den även som studier på [öppna universitet](https://teaching.helsinki.fi/instruktioner/artikel/kontinuerligt-larande-och-oppen-universitetsundervisning)?',
      en: 'Is the course only aimed at undergraduate students or is it also offered as [open university studies]( https://teaching.helsinki.fi/instructions/article/continuous-learning-and-open-university-teaching)?',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsOpenUniversity',
          label: 'courseIsOpenUniversity',
          title: {
            fi: 'Kurssi on kaikille avoin',
            sv: 'Kursen är tillgänglig för alla.',
            en: 'This course is open to everyone',
          },
        },
        {
          id: 'courseIsNotOpenUniversity',
          label: 'courseIsNotOpenUniversity',
          title: {
            fi: 'Perustutkinto-opiskelijoille',
            sv: 'För studerande på grundnivå',
            en: 'For undergraduate students',
          },
        },
      ],
    },
    visibility: {},
  },
]

export default getQuestionData
