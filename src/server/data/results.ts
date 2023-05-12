import { Result } from '../types'

const getResultData = (): Result[] => [
  {
    id: 1,
    surveyId: 1,
    optionLabel: 'courseSizeSmall',
    isSelected: {
      fi: 'Olet valinnut kurssillesi osallistujamääräksi < 50 opiskelijaa.',
      sv: 'Du har valt < 50 studenter som antal deltagare för din kurs.',
      en: 'You have selected < 50 students as the number of participants for your course.',
    },
    data: {
      allDimensions: {
        fi: 'Kurssin suunnittelussa ja opetusmateriaalissa on hyvä huomioida [linjakkaan opetuksen periaatteet](https://teaching.helsinki.fi/ohjeet/artikkeli/linjakas-opetus-ja-opetuksen-suunnittelun-10-vaihetta) sekä opetukseen liittyvät [tekijänoikeudet](https://teaching.helsinki.fi/ohjeet/artikkeli/avoin-opetus-ja-tekijanoikeudet#paragraph-3918).',
        sv: 'I planeringsskedet av kursen och läromedel är det bra att ta hänsyn till [principerna för konstruktiv samordnad](https://teaching.helsinki.fi/instruktioner/artikel/planering-av-konstruktivt-samordnad-undervisning-tio-steg) och [upphovsrättigheter]( https://teaching.helsinki.fi/instruktioner/artikel/oppen-undervisning-och-upphovsratt#paragraph-3918) relaterade till undervisning.',
        en: 'When planning the course and teaching materials, it is good to consider [the principle of constructive alignment](https://teaching.helsinki.fi/instructions/article/constructive-alignment-teaching-and-10-steps-course-design) and [copyright](https://teaching.helsinki.fi/instructions/article/open-teaching-and-copyright#paragraph-3918) related to teaching.',
      },
      investication: {
        fi: '[Helka-kirjastojen haun](https://helka.helsinki.fi/) kautta opiskelijat voivat etsiä vertaisarvioituja artikkeleita ja tieteellistä kirjallisuutta syventääkseen osaamistaan kurssin aiheista.',
        sv: 'Genom [Helka bibliotekssökning](https://helka.helsinki.fi/) kan studeranden söka efter artiklar som har blivit peer-reviewed och vetenskaplig litteratur för att fördjupa sina kunskaper om kursämnen.',
        en: 'Through [Helka library search](https://helka.helsinki.fi/), students can search for peer-reviewed articles and scientific literature to deepen their knowledge of the course topics.',
      },
      production: {
        fi: 'Ideoiden ja sisältöjen tuottamiseen soveltuu esim. [Flinga](https://teaching.helsinki.fi/ohjeet/artikkeli/flinga), jonne opettaja voi luoda kaikille yhteisen tai ryhmäkohtaisia alueita. Opiskelija tai pieni ryhmä voi myös tuottaa yhteisen [Thinglink](https://teaching.helsinki.fi/ohjeet/artikkeli/muut-opetustyota-tukevat-valineet#paragraph-6844)-esityksen tai [Screencast-O-Maticilla](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4568) videon [Unitubeen](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-3937).',
        sv: '[Flinga](https://teaching.helsinki.fi/instruktioner/artikel/flinga), lämpar sig för att skapa idéer och innehåll, där läraren kan skapa en gemensam eller gruppspecifik plattform. En elev eller en liten grupp kan också tillsammans skapa en presentation med hjälp av [Thinglink](https://teaching.helsinki.fi/instruktioner/artikel/andra-verktyg-som-stoder-undervisningsarbetet#paragraph-6844) eller en video via [Screencast-O-Maticilla](https://teaching.helsinki.fi/instruktioner/artikel/undervisningsvideor-och-direktuppspelning-av-forelasningar#paragraph-4568) till [Unitube]( https://teaching.helsinki.fi/instruktioner/artikel/undervisningsvideor-och-direktuppspelning-av-forelasningar#paragraph-3937).',
        en: 'A platform suitable for generating ideas and content is e.g. [Flinga](https://teaching.helsinki.fi/instructions/article/flinga), where the teacher can create common- or group-specific areas. A student or a small group can also produce a joint [Thinglink](https://teaching.helsinki.fi/instructions/article/other-supporting-tools-teaching-activities#paragraph-6844) presentation or use [Screencast-O-Matic](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-4568) to produce a video to [Unitube](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-3937).',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää esimerkiksi [Moodlen keskustelualuetta.](https://docs.moodle.org/3x/fi/Keskustelualue)',
        sv: 'Du kan till exempel använda [Moodles diskussionsområde](https://docs.moodle.org/3x/fi/Keskustelualue), för diskussion som varar hela kursen eller som är relaterad till en deluppgift.',
        en: '[Moodle&lsquo;s communication tools](https://docs.moodle.org/3x/fi/Keskustelualue) can e.g., be used for discussions lasting the entire course or related to partial assignments.',
      },
      acquisition: {
        fi: 'Voit myös tehdä kirjastolle [hanktintaehdotuksen](https://libraryguides.helsinki.fi/opetuksentuki/aineistot), mikäli haluamaasi aineistoa ei löydy valikoimista tai sitä ei ole tarpeeksi kurssin opiskelijoiden tarpeisiin.',
        sv: 'Du kan även göra ett [upphandlingsförslag](https://libraryguides.helsinki.fi/opetuksentuki/aineistot) till biblioteket, om det material du vill ha inte finns i urvalet eller om det inte finns en tillräcklig mängd för att uppfylla kursens behov.',
        en: 'You can also make a [procurement proposal](https://libraryguides.helsinki.fi/opetuksentuki/aineistot) to the library, if the desired material is not currently found in the selection or if there is not enough of it to meet the needs of the students of the course.',
      },
      practice: {
        fi: 'Opiskelija voi harjoitella ja saada palautetta osaamisestaan esimerkiksi [Moodlen tehtävien](https://docs.moodle.org/3x/fi/Teht%C3%A4v%C3%A4) avulla. Moodlesta löytyvä [työpaja-aktiviteetti](https://docs.moodle.org/3x/fi/Ty%C3%B6paja) tarjoaa mahdollisuuden vertais- ja itsearvioinnin toteuttamiseksi kurssilla.  \n \nMoodlen [H5P-työkalun](https://docs.moodle.org/3x/fi/H5P) avulla voit luoda monipuolisia tehtäviä ja liittää ne osaksi Moodle-aluetta.  \n \n[Thinglink](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4691)-skenaarioilla voidaan harjoitella simuloiduissa tilanteissa.  \n \nKaikissa digitaalisissa tehtävätyypeissä kannattaa mahdollisuuksien mukaan hyödyntää automaattinen palautteen antaminen ja tehtävien tarkastaminen omien resurssien säästämiseksi.',
        sv: 'Studerande kan öva och få feedback på sin kunskap, till exempel genom [uppgifter på Moodle](https://docs.moodle.org/3x/fi/Teht%C3%A4v%C3%A4). [Workshop aktiviteterna](https://docs.moodle.org/3x/fi/Ty%C3%B6paja) som hittas på Moodle erbjuder möjligheten för självutvärdering och utvärdering av kurskamrater. Med hjälp av Moodles [H5P-verktyg](https://docs.moodle.org/3x/fi/H5P) kan du skapa mångsidiga uppgifter och inkludera dem till Moodle området. [Thinglink](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4691) erbjuder möjligheter att öva i simulerade förhållanden. I alla former av digitala uppgifter lönar det sig att i mån av möjlighet att använda automatiserad feedback och rättning av uppgifter, detta för att spara ens egna resurser.',
        en: 'Students can practice and get feedback on their skills, for example through [Moodle assignments](https://docs.moodle.org/401/en/Assignment_activity). The [workshop activity](https://docs.moodle.org/401/en/Workshop_activity) on Moodle provides an opportunity for peer and self-assessment in the course. Moodle&lsquo;s [H5P tool](https://docs.moodle.org/401/en/H5P_activity) allows you to create a wide range of assignments and integrate them into the Moodle area. The [Thinglink](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-4691) scenarios can be used to practice in simulated situations. For all types of digital tasks, it is advisable to make use of automatic feedback and checking of tasks where possible to save your own resources.',
      },
    },
  },
  {
    id: 2,
    surveyId: 1,
    optionLabel: 'courseSizeBig',
    isSelected: {
      fi: 'Olet valinnut kurssillesi osallistujamääräksi >= 50 opiskelijaa.',
      sv: 'Du har valt >= 50 studerande som deltagarantal för din kurs',
      en: 'You have selected >= 50 students as number of participants for your course.',
    },
    data: {
      allDimensions: {
        fi: 'Kurssin suunnittelussa ja opetusmateriaalissa on hyvä huomioida [linjakkaan opetuksen periaatteet](https://teaching.helsinki.fi/ohjeet/artikkeli/linjakas-opetus-ja-opetuksen-suunnittelun-10-vaihetta) sekä opetukseen liittyvät [tekijänoikeudet](https://teaching.helsinki.fi/ohjeet/artikkeli/avoin-opetus-ja-tekijanoikeudet#paragraph-3918). Opettajan työmäärä pysyy kohtuullisena kurssin aikana, kun kurssilla on selkeät toimintaohjeet ja sillä hyödynnetään automaattisesti arvioituvia tehtäviä.',
        sv: 'I planeringsskedet av kursen och läromedel är det bra att ta hänsyn till [principerna för konstruktiv samordnad](https://teaching.helsinki.fi/instruktioner/artikel/planering-av-konstruktivt-samordnad-undervisning-tio-steg) och [upphovsrättigheter]( https://teaching.helsinki.fi/instruktioner/artikel/oppen-undervisning-och-upphovsratt#paragraph-3918) relaterade till undervisning. Lärares arbetsmängd hålls rimlig under kursen, då kursen har tydliga riktlinjer och tillämpar automatiskt bedömda uppgifter.',
        en: 'When planning the course and teaching materials, it is good to consider [the principle of constructive alignment](https://teaching.helsinki.fi/instructions/article/constructive-alignment-teaching-and-10-steps-course-design) and [copyright](https://teaching.helsinki.fi/instructions/article/open-teaching-and-copyright#paragraph-3918) related to teaching. The teachers workload remains reasonable throughout the course, when the course has clear guidelines and makes use of automatically assessed tasks.',
      },
      investication: {
        fi: '[Helka-kirjastojen haun](https://helka.helsinki.fi/) kautta opiskelijat voivat etsiä vertaisarvioituja artikkeleita ja tieteellistä kirjallisuutta syventääkseen osaamistaan kurssin aiheista.',
        sv: 'Genom [Helka bibliotekssökning](https://helka.helsinki.fi/) kan studeranden söka efter artiklar som har blivit peer-reviewed och vetenskaplig litteratur för att fördjupa sina kunskaper om kursämnen.',
        en: 'Through [Helka library search](https://helka.helsinki.fi/), students can search for peer-reviewed articles and scientific literature to deepen their knowledge of the course topics.',
      },
      production: {
        fi: 'Ideoiden ja sisältöjen tuottamiseen soveltuu esim. [Flinga](https://teaching.helsinki.fi/ohjeet/artikkeli/flinga), jonne opettaja voi luoda kaikille yhteisen tai ryhmäkohtaisia alueita. Opiskelija tai pieni ryhmä voi myös tuottaa yhteisen [Thinglink](https://teaching.helsinki.fi/ohjeet/artikkeli/muut-opetustyota-tukevat-valineet#paragraph-6844)-esityksen tai [Screencast-O-Maticilla](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4568) videon [Unitubeen](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-3937).',
        sv: '[Flinga](https://teaching.helsinki.fi/instruktioner/artikel/flinga), lämpar sig för att skapa idéer och innehåll, där läraren kan skapa en gemensam eller gruppspecifik plattform. En elev eller en liten grupp kan också tillsammans skapa en presentation på [Thinglink](https://teaching.helsinki.fi/instruktioner/artikel/andra-verktyg-som-stoder-undervisningsarbetet#paragraph-6844) eller en video via [Screencast-O-Maticilla](https://teaching.helsinki.fi/instruktioner/artikel/undervisningsvideor-och-direktuppspelning-av-forelasningar#paragraph-4568) till [Unitube]( https://teaching.helsinki.fi/instruktioner/artikel/undervisningsvideor-och-direktuppspelning-av-forelasningar#paragraph-3937).',
        en: 'A platform suitable for generating ideas and content is e.g. [Flinga](https://teaching.helsinki.fi/instructions/article/flinga), where the teacher can create common- or group-specific areas. A student or a small group can also produce a joint [Thinglink](https://teaching.helsinki.fi/instructions/article/other-supporting-tools-teaching-activities#paragraph-6844) presentation or use [Screencast-O-Matic](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-4568) to produce a video to [Unitube](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-3937).',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää esimerkiksi [Moodlen keskustelualuetta](https://docs.moodle.org/3x/fi/Keskustelualue). Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
        sv: 'Du kan till exempel använda [Moodles diskussionsområde](https://docs.moodle.org/3x/fi/Keskustelualue), för diskussion som varar hela kursen eller som är relaterad till en deluppgift. I öppna kurser eller kurser som har många deltagare kan det vara omöjligt för läraren att följa med eller delta i det flesta diskussionerna.',
        en: '[Moodle&lsquo;s communication tools](https://docs.moodle.org/3x/fi/Keskustelualue) can e.g., be used for discussions lasting the entire course or related to partial assignments. In open university - and large courses, it may be impossible for the teacher to follow or participate in most discussions.',
      },
      acquisition: {
        fi: 'Voit myös tehdä kirjastolle [hanktintaehdotuksen](https://libraryguides.helsinki.fi/opetuksentuki/aineistot), mikäli haluamaasi aineistoa ei löydy valikoimista tai sitä ei ole tarpeeksi kurssin opiskelijoiden tarpeisiin.',
        sv: 'Du kan även göra ett [upphandlingsförslag](https://libraryguides.helsinki.fi/opetuksentuki/aineistot) till biblioteket, om det material du vill ha inte finns i urvalet eller om det inte finns en tillräcklig mängd för att uppfylla kursens behov.',
        en: 'You can also make a [procurement proposal](https://libraryguides.helsinki.fi/opetuksentuki/aineistot) to the library, if the desired material is not currently found in the selection or if there is not enough of it to meet the needs of the students of the course.',
      },
      practice: {
        fi: 'Opiskelija voi harjoitella ja saada palautetta osaamisestaan esimerkiksi [Moodlen tehtävien](https://docs.moodle.org/3x/fi/Teht%C3%A4v%C3%A4) avulla. Moodlesta löytyvä [työpaja-aktiviteetti](https://docs.moodle.org/3x/fi/Ty%C3%B6paja) tarjoaa mahdollisuuden vertais- ja itsearvioinnin toteuttamiseksi kurssilla.  \n \nMoodlen [H5P-työkalun](https://docs.moodle.org/3x/fi/H5P) avulla voit luoda monipuolisia tehtäviä ja liittää ne osaksi Moodle-aluetta.  \n \n[Thinglink](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4691)-skenaarioilla voidaan harjoitella simuloiduissa tilanteissa.  \n \nKaikissa digitaalisissa tehtävätyypeissä kannattaa mahdollisuuksien mukaan hyödyntää automaattinen palautteen antaminen ja tehtävien tarkastaminen omien resurssien säästämiseksi.',
        sv: 'Studerande kan öva och få feedback på sin kunskap, till exempel genom [uppgifter på Moodle](https://docs.moodle.org/3x/fi/Teht%C3%A4v%C3%A4). [Workshop aktiviteterna](https://docs.moodle.org/3x/fi/Ty%C3%B6paja) som hittas på Moodle erbjuder möjligheten för självutvärdering och utvärdering av kurskamrater. Med hjälp av Moodles [H5P-verktyg](https://docs.moodle.org/3x/fi/H5P) kan du skapa mångsidiga uppgifter och inkludera dem till Moodle området. [Thinglink](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4691) erbjuder möjligheter att öva i simulerade förhållanden. I alla former av digitala uppgifter lönar det sig att i mån av möjlighet att använda automatiserad feedback och rättning av uppgifter, detta för att spara ens egna resurser.',
        en: 'Students can practice and get feedback on their skills, for example through [Moodle assignments](https://docs.moodle.org/401/en/Assignment_activity). The [workshop activity](https://docs.moodle.org/401/en/Workshop_activity) on Moodle provides an opportunity for peer and self-assessment in the course. Moodle&lsquo;s [H5P tool](https://docs.moodle.org/401/en/H5P_activity) allows you to create a wide range of assignments and integrate them into the Moodle area. The [Thinglink](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-4691) scenarios can be used to practice in simulated situations. For all types of digital tasks, it is advisable to make use of automatic feedback and checking of tasks where possible to save your own resources.',
      },
    },
  },
  {
    id: 3,
    surveyId: 1,
    optionLabel: 'courseSizeUnlimited',
    isSelected: {
      fi: 'Kurssin osallistujamäärä on erittäin suuri tai rajoittamaton.',
      sv: 'Antalet kursdeltagare är mycket stort eller obegränsat.',
      en: 'The number of course participants is very large or unlimited.',
    },
    data: {
      allDimensions: {
        fi: 'Avoimet verkkokurssit (MOOC), joiden osallistujamäärää ei ennalta tiedetä tai pystytä ennakoimaan, voidaan järjestää korkeakoulujen yhteisessä [DigiCampus-oppimisympäristössä](http://www.digicampus.fi/). Rajoittamaton osallistujamäärä on tärkeää huomioida kurssin pedagogisten ratkaisuiden ja arvioinnin suunnittelussa. Laajoille kursseille on tyypillistä itseopiskelupainotteisuus, sillä ohjaukseen ja vuorovaikutuksen on yleensä rajallisemmat mahdollisuudet kuin pienemmillä ryhmillä. Opettajan työmäärän on pysyttävä kohtuullisena.',
        sv: 'Öppna onlinekurser (MOOC), vars deltagarantal man inte vet i förväg eller kan förutsägas, kan anordnas i högskolornas gemensamma [DigiCampus-inlärningsmiljö](http://www.digicampus.fi/). Det obegränsade deltagarantalet är viktigt att notera vid planeringen av det pedagogiska lösningarna och utvärderingen av kursen. Kurser med stort deltagarantal kännetecknas ofta av att tyngdpunkten ligger på självstudier, då det oftast finns mer begränsade möjligheter till handledning och interaktion, jämfört med mindre grupper. Lärarens arbetsbörda måste förbli rimlig.',
        en: 'Open online courses (MOOC), where number of participants is not known in advanced or cannot be predicted, can be organized in the joint [learning environment, DigiCampus](http://www.digicampus.fi/). The unlimited number of participants is important to consider when planning pedagogical methods and forms of evaluation to be used on the course. Large courses are characterized by an emphasis on self-study, as there are usually more limited opportunities for guidance and interaction, compared to smaller groups. The teacher&lsquo;s workload must remain reasonable.',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää esimerkiksi [Moodlen keskustelualuetta](https://docs.moodle.org/3x/fi/Keskustelualue). Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
        sv: 'Du kan till exempel använda [Moodles diskussionsområde](https://docs.moodle.org/3x/fi/Keskustelualue), för diskussion som varar hela kursen eller som är relaterad till en deluppgift.',
        en: '[Moodle&lsquo;s communication tools](https://docs.moodle.org/3x/fi/Keskustelualue) can e.g., be used for discussions lasting the entire course or related to partial assignments.',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: 'Opiskelija voi harjoitella ja saada palautetta osaamisestaan esimerkiksi [Moodlen tehtävien](https://docs.moodle.org/3x/fi/Teht%C3%A4v%C3%A4) avulla. Moodlesta löytyvä [työpaja-aktiviteetti](https://docs.moodle.org/3x/fi/Ty%C3%B6paja) tarjoaa mahdollisuuden vertais- ja itsearvioinnin toteuttamiseksi kurssilla.  \n \nMoodlen [H5P-työkalun](https://docs.moodle.org/3x/fi/H5P) avulla voit luoda monipuolisia tehtäviä ja liittää ne osaksi Moodle-aluetta.  \n \n[Thinglink](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4691)-skenaarioilla voidaan harjoitella simuloiduissa tilanteissa.  \n \nKaikissa digitaalisissa tehtävätyypeissä kannattaa mahdollisuuksien mukaan hyödyntää automaattinen palautteen antaminen ja tehtävien tarkastaminen omien resurssien säästämiseksi.',
        sv: 'Studerande kan öva och få feedback på sin kunskap, till exempel genom [uppgifter på Moodle](https://docs.moodle.org/3x/fi/Teht%C3%A4v%C3%A4). [Workshop aktiviteterna](https://docs.moodle.org/3x/fi/Ty%C3%B6paja) som hittas på Moodle erbjuder möjligheten för självutvärdering och utvärdering av kurskamrater. Med hjälp av Moodles [H5P-verktyg](https://docs.moodle.org/3x/fi/H5P) kan du skapa mångsidiga uppgifter och inkludera dem till Moodle området. [Thinglink](https://teaching.helsinki.fi/ohjeet/artikkeli/zoom-suoratoisto-ja-opetusvideot#paragraph-4691) erbjuder möjligheter att öva i simulerade förhållanden. I alla former av digitala uppgifter lönar det sig att i mån av möjlighet att använda automatiserad feedback och rättning av uppgifter, detta för att spara ens egna resurser.',
        en: 'Students can practice and get feedback on their skills, for example through [Moodle assignments](https://docs.moodle.org/401/en/Assignment_activity). The [workshop activity](https://docs.moodle.org/401/en/Workshop_activity) on Moodle provides an opportunity for peer and self-assessment in the course. Moodles [H5P tool](https://docs.moodle.org/401/en/H5P_activity) allows you to create a wide range of assignments and integrate them into the Moodle area. The [Thinglink](https://teaching.helsinki.fi/instructions/article/educational-videos-and-streaming-your-lectures#paragraph-4691) scenarios can be used to practice in simulated situations. For all types of digital tasks, it is advisable to make use of automatic feedback and checking of tasks where possible to save your own resources.',
      },
    },
  },
  {
    id: 4,
    surveyId: 1,
    optionLabel: 'courseIsMooc',
    isSelected: {
      fi: 'Olet valinnut kurssin MOOC-kurssiksi',
      sv: 'Du har valt att kursen är en MOOC-kurs.',
      en: 'You have selected that the course is a MOOC course.',
    },
    data: {
      allDimensions: {
        fi: 'Katso [tästä](https://teaching.helsinki.fi/ohjeet/artikkeli/mooc-kurssien-kriteerit-ja-ohjeet) MOOC-kurssien kriteerit ja ohjeet.',
        sv: 'Se [här](https://teaching.helsinki.fi/instruktioner/artikel/mooc-kriterier-och-stod) kriterier och instruktioner för MOOC-kurser.',
        en: 'See [here](https://teaching.helsinki.fi/instructions/article/mooc-criteria-and-support) for instructions and criteria for MOOC courses.',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 5,
    surveyId: 1,
    optionLabel: 'courseIsNotMooc',
    isSelected: {
      fi: 'Olet valinnut ettei kurssi ole MOOC-kurssi.',
      sv: 'Du har valt att kursen inte är en MOOC kurs. ',
      en: 'You have selected that the course is not a MOOC course.',
    },
    data: {
      allDimensions: {
        fi: 'Mikäli kurssin osallistujamäärää ei ole rajattu, voisi kurssin todennäköisesti järjestää myös MOOC-kurssina. Katso [tästä](https://teaching.helsinki.fi/ohjeet/artikkeli/mooc-kurssien-kriteerit-ja-ohjeet) MOOC-kurssien kriteerit ja ohjeet.',
        sv: 'Om deltagarantalet på kursen inte är begränsat, skulle kursen troligtvis kunna ordnas som en MOOC-kurs. Se [här]( https://teaching.helsinki.fi/instruktioner/artikel/mooc-kriterier-och-stod) för kriterier och instruktioner för MOOC-kurser.',
        en: 'If number of participants is not limited, the course could probably also be organized as a MOOC course. See [here](https://teaching.helsinki.fi/instructions/article/mooc-criteria-and-support) for instructions and criteria for MOOC courses.',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 6,
    surveyId: 1,
    optionLabel: 'courseAttendancePresent',
    isSelected: {
      fi: 'Olet valinnut kurssillesi opetusmuodoksi lähiopetuksen.',
      sv: 'Du har valt närundervisning som inlärningsform för kursen.',
      en: 'You have chosen contact teaching as the teaching method for your course.',
    },
    data: {
      allDimensions: {
        fi: 'Lähiopetuksessa [opetukseen käytettävät tilat](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat) voivat mahdollistaa erilaisten digitaalitsen työvälineiden käytön opetuksen ja oppimisen tukena.',
        sv: '[De avsedda utrymmena]( https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning) för närundervisning kan möjliggöra användningen av olika verktyg för undervisningen och stödjande av lärandet.',
        en: 'In contact teaching [teaching facilities](https://teaching.helsinki.fi/instructions/article/teaching-facilities) can enable the use of various digital tools to support teaching and learning.',
      },
      investication: {
        fi: '[Flingan](https://teaching.helsinki.fi/ohjeet/artikkeli/flinga) avulla voidaan dokumentoida esimerkiksi learning café -tyylinen ryhmätyöskentely niin, että kaikki ryhmät näkevät myös toistensa tuotokset.',
        sv: 'Med hjälp av [Flinga](https://teaching.helsinki.fi/instruktioner/artikel/flinga) kan man dokumentera till exempel grupparbeten i learning caféstil så att alla grupper även kan se varandras resultat.',
        en: '[Flinga](https://teaching.helsinki.fi/instructions/article/flinga) can be used to document, for example group work in learning café-format, so that all groups can view each others creations.',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: 'Lähiopetuksessa opiskelijoiden osallistamiseen voidaan hyödyntää digitaalisia ohjelmistoja, kuten [Presemoa](https://teaching.helsinki.fi/ohjeet/artikkeli/muut-opetustyota-tukevat-valineet#paragraph-3961) tai [Flingaa](https://teaching.helsinki.fi/ohjeet/artikkeli/muut-opetustyota-tukevat-valineet#paragraph-3962).',
        sv: 'Digital programvara såsom [Presemo](https://teaching.helsinki.fi/ohjeet/artikkeli/muut-opetustyota-tukevat-valineet#paragraph-3961) eller [Flinga](https://teaching .helsinki.fi/ ohjeet/artikkeli/muut-opetustyota-tukevat-valineet#paragraph-3962) kan användas för att engagera studeranden i närundervisningen.',
        en: 'Digital software can be used to involve students in contact teaching, such as [Presemo](https://teaching.helsinki.fi/instructions/article/other-supporting-tools-teaching-activities#paragraph-3961) or [Flinga](https://teaching.helsinki.fi/instructions/article/other-supporting-tools-teaching-activities#paragraph-3962).',
      },
      discussion: {
        fi: 'Lähiopetuksessa voit käyttää keskustelun tukena esimerkiksi [Presemon](https://wiki.helsinki.fi/display/presemo/Keskustelu) tai [Flingan](https://www.helsinki.fi/fi/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) keskusteluseinää.',
        sv: '[Presemos](https://wiki.helsinki.fi/display/presemo/Keskustelu) eller [Flingas](https://www.helsinki.fi/fi/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) chattvägg kan till exempel användas för diskussion inom närundervisning.',
        en: '[Presemo](https://wiki.helsinki.fi/display/presemo/Keskustelu) or [Flinga](https://www.helsinki.fi/sv/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) can be used to support discussion in contact teaching.',
      },
      acquisition: {
        fi: 'Tiedonhankintaa kontaktiopetuksessa voidaan tukea monimuotoisilla opetusmateriaaleilla. Voit tarjota opiskelijoille mahdollisuuden katsoa esimerkiksi luennot uudestaan kotona, mikäli tallennat luennot esimerkiksi [UniTube -palveluun tätä tukevassa opetustilassa](https://helpdesk.it.helsinki.fi/ohjeet/yhteydenpito-ja-julkaiseminen/unitube/unitube-luentotallennustilat).',
        sv: 'Informationssökning i närundervisningen kan stödjas genom mångsidiga läromedel. Du kan erbjuda studeranden möjligheten att se föreläsningarna senare, om du till exempel bandar dem och publicerar dem på [UniTube](https://helpdesk.it.helsinki.fi/ohjeet/yhteydenpito-ja-julkaiseminen/unitube/unitube-luentotallennustilat), detta i en undervisningssal som stödjer inbanding.',
        en: 'Information acquisition in contact teaching can be supported by diverse teaching materials. You can offer students the opportunity to rewatch the lectures later, for example if you record the lectures to [UniTube](https://helpdesk.it.helsinki.fi/en/instructions/collaboration-and-publication/unitube/unitube-lecture-recording-rooms), the recording must be done in a teaching environment that supports this.',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 7,
    surveyId: 1,
    optionLabel: 'courseAttendanceHybrid',
    isSelected: {
      fi: 'Kurssilla toteutetaan lähi- ja etäopetusta.',
      sv: 'Kursen innefattar när- och distansundervisning.',
      en: 'The course implements contact- and distance teaching.',
    },
    data: {
      allDimensions: {
        fi: 'Lähi- ja etäopetusta sisältävän kurssin opetus on usein käytännössä [sulautuvaa opetusta](https://wiki.helsinki.fi/display/ZO/1.+Sulautuva+opetus).  \nMikäli kurssilla on toteutetaan opetusta, jossa osa opiskelijoista osallistuu lähiopetukseen toisten osallistuessa samanaikaisesti etäyhteyksien välityksellä, on kyse [hybridiopetuksesta](https://teaching.helsinki.fi/ohjeet/artikkeli/linjakas-opetus-ja-opetuksen-suunnittelun-10-vaihetta#paragraph-6852). Järjestely on opettajalle usein haasteellinen, koska huomion jakaminen kahteen suuntaan ja kaikkien kohtelu tasapuolisesti vaatii keskittymistä ja huolellista etukäteissuunnittelua. Opiskelijoiden aktivointi ja vuorovaikutuksen ylläpitäminen [asettaa myös käytettävälle opetustilalle ja välineille teknisiä vaatimuksia](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422), jotka on tärkeää huomioida näiden valinnassa.',
        sv: 'Kurser som innefattar både när- och distansundervisning är ofta i praktiken [integrerad undervisning](https://wiki.helsinki.fi/display/ZO/1.+Sulautuva+opetus). \nOm kursen möjliggör att  vissa elever kan delta i undervisning på plats och andra på distans, är det ett fall av [hybrid undervisning]( https://teaching.helsinki.fi/instruktioner/artikel/planering-av-konstruktivt-samordnad-undervisning-tio-steg#paragraph-6852). Denna typ av arrangemang är ofta utmanande för läraren, eftersom att dela uppmärksamheten i två riktningar och behandla alla lika kräver koncentration och noggrann planering. Aktivering av elever och upprätthållande av interaktion [ställer även tekniska krav på undervisningsutrymmet och utrustningen som används]( https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning#paragraph-5422), som är viktiga att tänka på när att välja dessa.',
        en: 'The teaching of a course that includes contact- and distance teaching is often in practice [integrated teaching](https://wiki.helsinki.fi/display/ZO/1.+Sulautuva+opetus). \nIf the course implements teaching were some students participate in contact teaching while others participate, simultaneously, remotely, it is a case of [hybrid teaching]( https://teaching.helsinki.fi/instructions/article/constructive-alignment-teaching-and-10-steps-course-design#paragraph-6852). This type of arrangement is often challenging for the teacher, because dividing attention in two directions and treating everyone equally requires concentration and careful planning. Activating students and maintaining interaction [also sets technical requirements for the teaching space and equipment used]( https://teaching.helsinki.fi/instructions/article/teaching-facilities#paragraph-5422), which are important to consider when choosing these.',
      },
      investication: {
        fi: '[Flingan](https://teaching.helsinki.fi/ohjeet/artikkeli/flinga) avulla voidaan dokumentoida esimerkiksi learning café -tyylinen ryhmätyöskentely niin, että kaikki ryhmät näkevät myös toistensa tuotokset. Hybridiopetuksessa [Flingan](https://teaching.helsinki.fi/ohjeet/artikkeli/flinga) avulla tätä työskentelyä voidaan toteuttaa joustavasti lähi- ja etäryhmien kesken.',
        sv: 'Med hjälp av [Flinga](https://teaching.helsinki.fi/instruktioner/artikel/flinga) kan man dokumentera till exempel grupparbeten i learning caféstil så att alla grupper även kan se varandras resultat. I hybridundervisning möjliggör [Flinga](https://teaching.helsinki.fi/instruktioner/artikel/flinga) flexibelt sammanbet  emellan grupper som arbetar på plats och på distans.',
        en: '[Flinga](https://teaching.helsinki.fi/instructions/article/flinga) can be used to document, for example group work in learning café-format, so that all groups can view each others creations. In hybrid teaching [Flinga](https://teaching.helsinki.fi/instructions/article/flinga) enables that work can be carried out flexibly between groups working on site and remotely. ',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: 'Sulautuvassa opetuksessa keskustelua voidaan lähiopetuksen jälkeen jatkaa esimerkiksi [Flingan](https://www.helsinki.fi/fi/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) keskusteluseinällä tai [Moodlen keskustelualueella](https://docs.moodle.org/3x/fi/Keskustelualue).  \nHybridiopetuksessa voit käyttää keskustelun tukena esimerkiksi [Presemon](https://wiki.helsinki.fi/display/presemo/Keskustelu) tai [Flingan](https://www.helsinki.fi/fi/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) keskusteluseinää, sekä [Zoomin chat-työkalua](https://wiki.helsinki.fi/display/ZO/Chat). [Zoomin ryhmähuoneet](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823) mahdollistavat pienten keskusteluryhmien muodostamisen.',
        sv: 'I kombinerad undervisning kan diskussionen fortsätta efter närundervisningen, till exempel med hjälp av [Flingas](https://www.helsinki.fi/sv/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) diskussionsvägg eller [Moodles diskussionsområde]( https://docs.moodle.org/3x/fi/Keskustelualue). \nI hybridundervisning kan du till exempel använda [Presemo](https://wiki.helsinki.fi/display/presemo/Keskustelu) eller [Flinga]( https://www.helsinki.fi/sv/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) chattvägg och [Zooms chattverktyg](https://wiki.helsinki.fi/display/ZO/Chat). [Zooms breakout rooms](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823) möjliggör bildandet av små diskussionsgrupper.',
        en: 'In blended learning, the discussion can be continued after contact teaching, for example, on a [Flinga “whiteboard”](https://www.helsinki.fi/en/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) or in the [Moodle discussion area]( https://docs.moodle.org/3x/fi/Keskustelualue) \nIn hybrid teaching you can use, for example, [Presemo](https://wiki.helsinki.fi/display/presemo/Keskustelu) or [Flinga](https://www.helsinki.fi/fi/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) and [Zoom&lsquo;s chat tool](https://wiki.helsinki.fi/display/ZO/Chat). [Zoom&lsquo;s breakout rooms](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823) enables formation of small groups.',
      },
      acquisition: {
        fi: 'Sulautuvassa opetuksessa tiedonhankintaa voidaan tukea esimerkiksi tuomalla kaikki materiaali ja tallennetut luennot [Moodlen](https://teaching.helsinki.fi/ohjeet/artikkeli/moodle-ohjeet-ja-tuki) kautta opiskelijoiden saataville.  \nHybridiopetuksessa on tärkeää huomioida tiedon omaksumisen tasapuoliset mahdollisuudet läsnäoleville ja etäosallistuville opiskelijoille. Huomioi esimerkiksi laadukas puheäänen välitys etäosallistujille. Hyviä vinkkejä hybridi- ja etäopetukseen löydät [opetustyön ohjeista.](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422)',
        sv: 'I kombinerad undervisning kan kunskapsinhämtning stödjas, till exempel genom att göra allt material och inspelade föreläsningar tillgängliga för studenter via [Moodle]( https://teaching.helsinki.fi/instruktioner/artikel/instruktioner-och-stod-till-moodle) . \nI hybridundervisning är det viktigt att ta hänsyn till allas lika möjligheter att införskaffa sig kunskap, både för studerande som deltar i närundervisningen och studeranden som deltar på distans. Var uppmärksam på till exempel högkvalitativ röstöverföring till distansstuderanden. Bra tips för hybrid- och distansundervisning hittar du i [undervisningsanvisngarna.](https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning#paragraph-5422).',
        en: 'In blended learning, knowledge acquisition can be supported, for example, by making all materials and recorded lectures available to students through [Moodle]( https://teaching.helsinki.fi/instructions/article/moodle-instructions-and-support). \nIn hybrid teaching, it is important to take into account the equal opportunities for acquiring knowledge for students attending and participating remotely. Pay attention to, for example, high-quality audio (spoken) to remote participants. You can find good tips for hybrid- and distance teaching in the [teaching instructions.]( https://teaching.helsinki.fi/instructions/article/teaching-facilities#paragraph-5422).',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 8,
    surveyId: 1,
    optionLabel: 'courseAttendanceRemote',
    isSelected: {
      fi: 'Olet valinnut kurssillesi opetusmuodoksi etäopetuksen.',
      sv: 'Du har valt distansundervisning som inlärningsform för kursen.',
      en: 'You have chosen distance learning as the teaching method for your course.',
    },
    data: {
      allDimensions: {
        fi: 'Etäopetus mahdollistaa suurten opiskelijamäärien osallistumisen joustavasti, mutta vaatii [huolellista opetuksen ja oppimisprosessin suunnittelua.](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422) Opiskelijoiden työskentely on ohjeistettava tarkasti, aktiivisuuden ylläpitoon on panostettava, ohjauksen ja vuorovaikutuksen toteuttaminen edellyttää [käytettävien välineiden hyvää tuntemusta](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422) ja oppimistehtävissä on huomioitava etäopiskelijoiden "näkymättömyys" opettajalle. Etäopiskelu voidaan järjestää ryhmän koosta riippuen itseopiskelua tai yhteisöllistä työskentelyä painottaen.',
        sv: 'Distansundervisning möjliggör att ett stort antal elever kan delta flexibelt, men kräver [noggrann planering av undervisnings- och inlärningsprocessen.](https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning#paragraph-5422) Studerande bör ges exakta instruktioner för sitt arbete, man bör satsa på att uppehålla aktiviteten, för att handledning och interaktioner ska förverkligas förutsätts god [kännedom om de verktyg som används]( https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning#paragraph-5422).  Distansstuderandes ”osynlighet” och dess möjliga påverkan på läraren bör också beaktas. Distansundervisning kan förverkligas beroende på gruppens storlek, som antingen självstudier eller genom att betona samarbete.',
        en: 'Distance learning allows for a large number of students to participate flexibly, but requires [careful planning of the teaching and learning process](https://teaching.helsinki.fi/instructions/article/teaching-facilities#paragraph-5422). Students must be given clear guidelines,  invest in maintaining activity on the course,  guidance and interaction requires [good know-how of the tools used](https://teaching.helsinki.fi/instructions/article/teaching-facilities#paragraph-5422) and the "invisibility" of remote students to the teacher must be taken into account. Distance learning can be organized, depending on the size of the group, either with the emphasise on self-study or community work.',
      },
      investication: {
        fi: '[Flingan](https://teaching.helsinki.fi/ohjeet/artikkeli/flinga) avulla voidaan dokumentoida esimerkiksi learning café -tyylinen ryhmätyöskentely etäopetuksessa niin, että kaikki ryhmät näkevät myös toistensa tuotokset. Tällaisessa tilanteessa etäosallistujat voi jakaa esimerkiksi [Zoom-ryhmähuoneisiin](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823).',
        sv: 'Med hjälp av [Flinga](https://teaching.helsinki.fi/instruktioner/artikel/flinga) kan man dokumentera till exempel grupparbeten i learning caféstil så att alla grupper även kan se varandras resultat. I sådana här situationer kan distansstuderanden delas in i till exempel [Zooms breakout rooms](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823).',
        en: '[Flinga](https://teaching.helsinki.fi/instructions/article/flinga) can be used to document for example group work in distance learning, in learning café-format, so that all groups can view each others creations. In a situation like this, remote participants can be placed into, for example [Zoom breakout rooms](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823).',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: 'Ryhmäytymiseen etäopetuksen aikana voi käyttää esimerkiksi [Zoom-ryhmähuoneita](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823).',
        sv: 'Man kan till exempel använda [Zooms breakout room](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823) för att bilda smågrupper i distansundervisningen.',
        en: 'For examples [Zoom breakout rooms](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823) can be used to form groups during distance learning.',
      },
      discussion: {
        fi: 'Etäopetuksessa voit käyttää keskusteluun esimerkiksi [Flingan](https://www.helsinki.fi/fi/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) keskusteluseinää sekä [Zoomin chat-työkalua](https://wiki.helsinki.fi/display/ZO/Chat). [Zoom-ryhmähuoneet](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823) mahdollistavat pienten keskusteluryhmien muodostamisen.',
        sv: 'I distansundervisning kan [Flingas](https://www.helsinki.fi/fi/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) chattvägg eller [Zooms chatverktyg](https://wiki.helsinki.fi/display/ZO/Chat) tillämpas. [Zooms-rumindelning](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823) möjliggör gruppering och diskussion i smågrupper.',
        en: '[Flingas](https://www.helsinki.fi/fi/unitube/video/2fcdd4fd-505c-40c7-8858-7c94d7bffa0b) or [Zooms chat tool](https://wiki. helsinki.fi/display/ZO/Chat) can  be used for discussion in distance teaching. [Zoom breakout rooms](https://wiki.helsinki.fi/pages/viewpage.action?pageId=367927823) allows for formation of small discussion groups.',
      },
      acquisition: {
        fi: 'Etäopetuksessa tiedon omaksuminen tapahtuu usein videon välityksellä, jolloin saavutettavuuden huomioiminen on erittäin tärkeää. Huomaathan että joidenkin materiaalien [etäkäyttöön on hyvä ohjeistaa opiskelijaa](https://www.helsinki.fi/fi/helsingin-yliopiston-kirjasto/asioi-kirjastossa/usein-kysyttyja-kysymyksia-ukk/ukk-e-kirjat-lehdet-ja-tietokannat). Hyviä vinkkejä hybridi- ja etäopetukseen löydät [opetustyön ohjeista.](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksessa-kaytettavat-tilat#paragraph-5422)',
        sv: 'I distansundervisning sker inlärningen ofta via video, vilket gör tillgängligheten mycket viktig. Notera, att det är bra att instruera studerande skilt, [gällande vissa material] (https://www.helsinki.fi/sv/helsingfors-universitets-bibliotek/bibliotekets-tjanster/vanliga-fragor/vanliga-fragor-e-bocker-elektroniska-tidskrifter-och-databaser), när det fråga om distansundervisning. Tips för hybrid – och distansundervisning hittar du i [undervisningsanvisningarna]( https://teaching.helsinki.fi/instruktioner/artikel/lokaler-undervisning#paragraph-5422).',
        en: 'In distance teaching, the learning process often takes place via video, making accessibility very important. Note that it is good to provide students with [instructions on the usage of some materials and their remote use](https://www.helsinki.fi/en/helsinki-university-library/welcome-library/faq-frequently-asked-questions/faq-electronic-books-journals-and-databases). Tips on hybrid- and distance teaching can be found from the [teaching instructions](https://teaching.helsinki.fi/instructions/article/teaching-facilities#paragraph-5422).',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 9,
    surveyId: 1,
    optionLabel: 'courseIsRecorded',
    isSelected: {
      fi: 'Olet valinnut nauhoittaa kurssin luennot.',
      sv: 'Du har valt att banda kursens föreläsningar.',
      en: 'You have chosen to record the course lectures.',
    },
    data: {
      allDimensions: {
        fi: 'Kiinnitäthän huomiota [opetuksen digitaaliseen saavutettavuuteen](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksen-digitaalinen-saavutettavuus).',
        sv: 'Komihåg att uppmärksamma [undervisningens digitala tillgänglighet]( https://teaching.helsinki.fi/instruktioner/artikel/digital-tillganglighet-i-undervisningen).',
        en: 'Pay attention to the [digital accessibility of teaching](https://teaching.helsinki.fi/instructions/article/digital-accessibility-teaching).',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 10,
    surveyId: 1,
    optionLabel: 'courseIsNotRecorded',
    isSelected: {
      fi: 'Olet valinnut ettei luentoja nauhoiteta.',
      sv: 'Du har valt att föreläsningar inte kommer att bandas.',
      en: 'You have chosen not to record the course lectures.',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 11,
    surveyId: 1,
    optionLabel: 'courseCompletionMethodExam',
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi tentin.',
      sv: 'Du har valt tentamen för kursen.',
      en: 'You have chosen an exam for you course.',
    },
    data: {
      allDimensions: {
        fi: '[Tentin](https://teaching.helsinki.fi/ohjeet/artikkeli/tentit-ja-niiden-jarjestaminen) voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
        sv: '[Tentamen](https://teaching.helsinki.fi/instruktioner/artikel/tentamina-och-ordnande-av-dem) kan anordnas antingen en viss dag eller under en längre tentamensperiod, i universitets elektroniska tentamensutrymmen, som distans – eller saltentamen. Tentamen är ett sätt att bedöma studentens kunnande och hur kursens inlärningsmål har uppnåtts. Deltentamen och förhör är också bra sätt att stödja studerandes inlärning under kursens gång.',
        en: '[An exam](https://teaching.helsinki.fi/instructions/article/exams-and-related-arrangements) can be arranged either on a specific day or over a longer exam period, in the university&lsquo;s electronic exam facilities, as a remote- or on-site examination. An exam is one way of assessing student&lsquo;s knowledge and how learning goals set for the course has been achieved. Mid-term exams or quizzes are also good ways to support the student&lsquo;s learning during the course.',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: 'Tentti [sähköisen tenttimisen tiloissa](https://teaching.helsinki.fi/ohjeet/artikkeli/sahkoiset-tentit-ja-arviointi#paragraph-3908) on aina yksilösuoritus. Yhteistyötä [kotitentissä](https://teaching.helsinki.fi/ohjeet/artikkeli/sahkoiset-tentit-ja-arviointi#paragraph-3909) ei voida käytännössä valvoa tai estää, mikä kannattaa ottaa huomioon esim. kysymyksiä laadittaessa.',
        sv: 'Tentamen [i elektroniska tentamenslokaler](https://teaching.helsinki.fi/instruktioner/artikel/elektroniska-tentamina-och-bedomning-av-dem#paragraph-3908) är alltid en individuell prestation. Samarbete [i hemtentamen](https://teaching.helsinki.fi/instruktioner/artikel/elektroniska-tentamina-och-bedomning-av-dem#paragraph-3909) kan i praktiken inte kontrolleras eller förhindras, vilket bör beaktas vid t.ex. val av frågor.',
        en: 'An exam [in the electronic exam facilities](https://teaching.helsinki.fi/ohjeet/artikkeli/sahkoiset-tentit-ja-arviointi#paragraph-3908) is always an individual performance. Possible collaboration [in home exams](https://teaching.helsinki.fi/instructions/article/electronic-exams-and-assessment#paragraph-3909) cannot be controlled or prevented in practice, which should be taken into account when e.g. preparing the questions.',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 12,
    surveyId: 1,
    optionLabel: 'courseCompletionMethodSmallGroup',
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi pienryhmätyöskentelyn.',
      sv: 'Du har valt smågruppsarbete för kursen. ',
      en: 'You have chosen group work for your course.',
    },
    data: {
      allDimensions: {
        fi: '[Ryhmätyöt](https://teaching.helsinki.fi/ohjeet/artikkeli/erilaisia-arviointitapoja#paragraph-6551) perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
        sv: '[Grupparbete](https://teaching.helsinki.fi/instruktioner/node/3142#paragraph-6551) bygger på arbete tillsammans och diskussion. Grupparbete främjar interaktion mellan studeranden och lär samarbetsförmåga. Diskussion mellan studeranden och att göra uppgifter tillsammans bidrar till en djupare förståelse av ämnet.',
        en: '[Group work](https://teaching.helsinki.fi/instructions/node/3142#paragraph-6551) is based on working together and discussion. Group work fosters interaction between students and teaches cooperation skills. Discussions between students and doing the tasks together deepens the understanding of the subject.',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 13,
    surveyId: 1,
    optionLabel: 'courseCompletionMethodDiary',
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi välitehtävät.',
      sv: 'Du har valt deluppgifter för kursen.',
      en: 'You have chosen low stake assignments for your course.',
    },
    data: {
      allDimensions: {
        fi: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
        sv: 'Mindre uppgifterna som utförs under kursens gång främjar och stöder lärandet och uppnåendet av utsatta mål för kursen. Dessa är t.ex. självutvärderingstest, räkneövningar, diskussionsuppgifter och peer feedback-uppgifter.',
        en: 'Low stake assignments completed throughout the course promote and support learning and the achievement of set learning goals. Examples are e.g. self-assessment tests, calculation exercises, discussion tasks, peer feedback tasks.',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 14,
    surveyId: 1,
    optionLabel: 'courseCompletionMethodLaboratory',
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi laboratorio ja simulaatioharjoitukset.',
      sv: 'Du har valt laboratorie- och simuleringsövningar för kursen.',
      en: 'You have chosen laboratory work and simulation exercises for your course.',
    },
    data: {
      allDimensions: {
        fi: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
        sv: 'aboratorie- och simuleringsövningar stödjer autentiskt lärande, lär ut praktiska färdigheter och främjar konkret utveckling av expert- och problemlösningsförmåga.',
        en: 'aboratory work and simulation exercises support authentic learning, teaches practical skills and promote concrete development of expert and problem-solving skills.',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 15,
    surveyId: 1,
    optionLabel: 'courseCompletionMethodAssignment',
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi kirjallisen tehtävän.',
      sv: 'Du har valt skriftliga uppgifter för kursen.',
      en: 'You have chosen a written assignment for your course.',
    },
    data: {
      allDimensions: {
        fi: 'Kaikki oppimisen eri vaiheessa (ennen, aikana tai lopuksi) laadittavat kirjalliset tehtävät, kuten esseet, oppimispäiväkirjat, ja erilaiset raportit edistävät tiedon soveltamista, analysointia ja uuden tiedon luomista ja tukevat täten oppimistavoitteiden saavuttamista.',
        sv: 'Alla skriftliga uppgifter som görs i inlärningens olika skeden (före, under eller efter), såsom uppsatser, inlärningsdagböcker och olika typer av rapporter, främjar tillämpningen av kunskap, analys samt skapandet av ny information, vilket i sin tur stödjer målet med inlärningen.',
        en: 'All written assignments prepared at different stages of learning (before, during or at the end), such as essays, learning diaries, and various reports advances the application of knowledge, analysis and the creation of new knowledge and thus support the achievement of set learning goals.',
      },
      investication: {
        fi: '',
        sv: '',
        en: '',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: '',
        sv: '',
        en: '',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 16,
    surveyId: 1,
    optionLabel: 'courseIsOpenUniversity',
    isSelected: {
      fi: 'Osallistuminen kurssillesi on avointa kaikille.',
      sv: 'Deltagandet på din kurs är öppen för alla.',
      en: 'Participation in your course is open to everyone.',
    },
    data: {
      allDimensions: {
        fi: 'Yliopistoa laajemmalle yleisölle tarkoitetut kurssit suositellaan järjestettäväksi Avoimen yliopiston kautta. Tutustu [avointen verkkokurssien (MOOC) vaatimuksiin](https://teaching.helsinki.fi/ohjeet/artikkeli/mooc-kurssien-kriteerit-ja-ohjeet). Avoimella verkkokurssilla oppimateriaalien tulee olla julkisia, jolloin myös niiden [saavutettavuuteen](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksen-digitaalinen-saavutettavuus) tulee kiinnittää erityistä huomiota. MOOC-alustana Helsingin yliopistolla toimii [DigiCampus](https://dc-help.digicampus.fi/fi/support/home).',
        sv: 'Kurser avsedda för en bredare publik än endast universitet, rekommenderas att anordnas som studier inom det öppna universitetet. Bekanta dig med kraven för [onlinekurser på det öppna universitet (MOOC)]( https://teaching.helsinki.fi/instruktioner/artikel/mooc-kriterier-och-stod). I en öppen onlinekurs bör läromedlen vara offentliga, vilket även innebär att dess  [tillgänglighet](https://teaching.helsinki.fi/instruktioner/artikel/digital-tillganglighet-i-undervisningen) bör uppmärksammas. [DigiCPampus](https://dc-help.digicampus.fi/sv-SE/support/home) fungerar som MOOC-plattform för kurser vid Helsingfors universitet.',
        en: 'Courses aimed for a larger audience are recommended to be organized at the open university. Make yourself familiar with the [requirements for online courses at the open university (MOOC)](https://teaching.helsinki.fi/instructions/article/mooc-criteria-and-support). In open online courses the learning material must be public, meaning that special attention must be paid to the [accessibility](https://teaching.helsinki.fi/instructions/article/digital-accessibility-teaching) of the used material. [DigiCampus](https://dc-help.digicampus.fi/fi/support/home) operates as a MOOC platform at the University of Helsinki.',
      },
      investication: {
        fi: '[Flingan aktiviteettien](https://teaching.helsinki.fi/ohjeet/artikkeli/flinga) pedagogiset käsikirjoitukset, kuten Flinga Discover ja Flinga Explore tukevat yhteisöllistä ongelmanratkaisua ja teidonrakenteltua. Flinga ei vaadi opiskelijoilta kirjautumista.',
        sv: '[Flingaaktiviteter](https://teaching.helsinki.fi/instruktioner/artikel/flinga) har utformade pedagogiska manus, så som Flinga Discovery och Flinga Explore, som stödjer problemlösning och kunskapsbyggandet i grupparbete. Flinga kräver inte att studerande loggar in.',
        en: 'The pedagogical scripts of [Flinga activities](https://teaching.helsinki.fi/instructions/article/flinga), such as Flinga Discover and Flinga Explore, support community problem solving and knowledge-building. Flinga does not require students to log in.',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: 'Voit käyttää avoimella verkkokurssilla tiedonhankinnan tueksi oppimateriaaleina aineistoja, jotka ovat julkisina verkossa ja [saavutettavia](https://teaching.helsinki.fi/ohjeet/artikkeli/opetuksen-digitaalinen-saavutettavuus). Voit tarjota linkkejä esim. tutkimusartikkeleihin tai [Unitubessa](https://www.helsinki.fi/fi/ajankohtaista/unitube) oleviin videoihin.  \n[Kirjaston oppaista](https://libraryguides.helsinki.fi/) opiskelija löytää kattavat ohjeet tiedonhankintaan. Mikäli kurssin osallistujilla ei ole käytössään Helsingin yliopiston käyttäjätunnusta, eivät he välttämättä pääse käsiksi kaikkiin aineistoihin.  \nTiedonhankinnan tueksi on tarjolla myös [itseopiskelikursseja](https://www.helsinki.fi/fi/helsingin-yliopiston-kirjasto/kayta-kokoelmia/kurssit-ja-tyopajat/opiskele-tiedonhankintaa-itsenaisesti).',
        sv: 'För öppna online kurser kan [offentligt tillgängliga(https://teaching.helsinki.fi/instruktioner/artikel/digital-tillganglighet-i-undervisningen) material användas. Du kan använda länkar till t.ex.  forskningsartiklar eller videor tillgängliga på [Unitube](https://www.helsinki.fi/sv/aktuellt/unitube). [I bibliotekets guide](https://libraryguides.helsinki.fi/) hittar studerande utförliga instruktioner för informationshämtning. Om kursdeltagarna inte har tillgång till användar-ID för Helsingfors universitet kanske det inte kan komma åt allt material.  Det finns även [självstudiekurser](https://www.helsinki.fi/sv/helsingfors-universitets-bibliotek/anvand-samlingarna/kurser-och-workshoppar/studera-informationssokning-pa-egen-hand) tillgängliga för att stödja informationshämtningen.',
        en: 'In open online courses, you can make use of materials that public and [accessible](https://teaching.helsinki.fi/instructions/article/digital-accessibility-teaching) as learning materials to support knowledge acquisition.  You can provide links to e.g. research articles or videos available on [Unitube](https://www.helsinki.fi/en/news/unitube). [In the library guide](https://libraryguides.helsinki.fi/) students will find comprehensive instructions for acquiring information. If course participants don´t have a University of Helsinki user ID, they may not be able to access all the materials. There are also [self study](https://www.helsinki.fi/en/helsinki-university-library/using-collections/courses-and-workshops/study-information-seeking-independently) courses available to support information acquisition.',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 17,
    surveyId: 1,
    optionLabel: 'courseIsNotOpenUniversity',
    isSelected: {
      fi: 'Osallistuminen kurssillesi ei ole avointa kaikille.',
      sv: 'Deltagandet på din kurs är inte öppen för alla.',
      en: 'Participation in your course is not open to everyone.',
    },
    data: {
      allDimensions: {
        fi: 'Lähtökohtaisesti [kaikki Helsingin yliopiston sovellukset](https://teaching.helsinki.fi/ohjeet/sovelluksien-kayttoohjeita) ovat perustutkinto-opiskelijoiden käytössä ja voit hyödyntää niitä kurssillasi. Yliopiston [strategisissa valinnoissa](https://www.helsinki.fi/fi/tutustu-meihin/strategia-talous-ja-laatu/strategia-2021-2030/strategiset-valinnat) on linjattu, että tiede ja oppiminen kuuluvat kaikille. Voisiko kurssi olla jatkossa toteutettavissa myös [avoimina yliopisto-opintoina](https://teaching.helsinki.fi/ohjeet/artikkeli/jatkuva-oppiminen-ja-avoin-yliopisto-opetus)?',
        sv: 'I princip är [alla Helsingfors universitets applikationer]( https://teaching.helsinki.fi/instruktioner/instruktioner-system-som-anvands-i-undervisningen) tillgängliga för studerande på grundnivå och du kan använda dem på dina kurser. I universitetets [strategiska val](https://www.helsinki.fi/sv/om-oss/strategi-ekonomi-och-kvalitet/strategi-2021-2030/strategiska-val) har det fastslagits att vetenskap och lärande tillhör alla. Skulle kursen i framtiden vara möjlig att även genomföras som [studier på det öppna universitetet] (https://teaching.helsinki.fi/instruktioner/artikel/kontinuerligt-larande-och-oppen-universitetsundervisning)?',
        en: 'Essentially, [all applications supported by the university of Helsinki](https://teaching.helsinki.fi/instructions/instructions-used-systems) are available for students and you can make use of them in your courses.  It has been stated in the university&lsquo;s [strategic choices](https://www.helsinki.fi/en/about-us/strategy-economy-and-quality/strategic-plan-2021-2030/strategic-choices) that science and learning belongs to everyone. Could you course in the future also be implemented at [the open university](https://teaching.helsinki.fi/instructions/article/continuous-learning-and-open-university-teaching).',
      },
      investication: {
        fi: '[Flingan aktiviteettien](https://teaching.helsinki.fi/ohjeet/artikkeli/flinga) pedagogiset käsikirjoitukset, kuten Flinga Discover ja Flinga Explore tukevat yhteisöllistä ongelmanratkaisua ja teidonrakenteltua. Flinga ei vaadi opiskelijoilta kirjautumista.',
        sv: '[Flingaaktiviteter](https://teaching.helsinki.fi/instruktioner/artikel/flinga) har utformade pedagogiska manus, så som Flinga Discovery och Flinga Explore, som stödjer problemlösning och kunskapsbyggandet i grupparbete. Flinga kräver inte att studerande loggar in.',
        en: 'The pedagogical scripts of [Flinga activities](https://teaching.helsinki.fi/instructions/article/flinga), such as Flinga Discover and Flinga Explore, support community problem solving and knowledge-building. Flinga does not require students to log in.',
      },
      production: {
        fi: '',
        sv: '',
        en: '',
      },
      collaboration: {
        fi: '',
        sv: '',
        en: '',
      },
      discussion: {
        fi: '',
        sv: '',
        en: '',
      },
      acquisition: {
        fi: 'Voit tarjota tiedonhankinnan tueksi monipuolisesti erilaisia aineistoja, joihin [Helsingin yliopiston opiskelijoilla on pääsy](https://www.helsinki.fi/fi/helsingin-yliopiston-kirjasto/kayta-kokoelmia/e-kirjat-ja-lehdet/e-aineistojen-etakaytto).  \n[Kirjaston oppaista](https://libraryguides.helsinki.fi/) opiskelija löytää kattavat ohjeet tiedonhankintaan. Tiedonhankinnan tueksi on tarjolla myös [itseopiskelikursseja](https://www.helsinki.fi/fi/helsingin-yliopiston-kirjasto/kayta-kokoelmia/kurssit-ja-tyopajat/opiskele-tiedonhankintaa-itsenaisesti).',
        sv: 'För att stödja informationshämtning kan man även erbjuda ett mångsidigt utbud av material som [studeranden vid Helsingfors universitet har tillgång till]( https://www.helsinki.fi/sv/helsingfors-universitets-bibliotek/anvand-samlingarna/e-bocker-och-tidskrifter/distansanvandning-av-e-material).  [I bibliotekets guide](https://libraryguides.helsinki.fi/) hittar studerande utförliga instruktioner för informationshämtning. Det finns även [självstudiekurser](https://www.helsinki.fi/sv/helsingfors-universitets-bibliotek/anvand-samlingarna/kurser-och-workshoppar/studera-informationssokning-pa-egen-hand) tillgängliga för att stödja informationshämtningen.',
        en: 'To support information acquisition, you can offer a wide variety of materials to which [Helsinki University students have access to](https://www.helsinki.fi/en/helsinki-university-library/using-collections/e-books-and-journals/remote-access-electronic-resources). [In the library guide](https://libraryguides.helsinki.fi/) students will find comprehensive instructions for acquiring information. There are also [self study](https://www.helsinki.fi/en/helsinki-university-library/using-collections/courses-and-workshops/study-information-seeking-independently) courses available to support information acquisition.',
      },
      practice: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
]

export default getResultData
