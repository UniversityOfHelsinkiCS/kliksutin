const getResultData = () => ({
  courseSizeSmall: {
    id: 1,
    isSelected: {
      fi: 'Olet valinnut kurssillesi osallistujamääräksi < 50 opiskelijaa.',
      sv: 'Olet valinnut kurssillesi osallistujamääräksi < 50 opiskelijaa.',
      en: 'Olet valinnut kurssillesi osallistujamääräksi < 50 opiskelijaa.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseSizeBig: {
    id: 2,
    isSelected: {
      fi: 'Olet valinnut kurssillesi osallistujamääräksi >= 50 opiskelijaa.',
      sv: 'Olet valinnut kurssillesi osallistujamääräksi >= 50 opiskelijaa.',
      en: 'Olet valinnut kurssillesi osallistujamääräksi >= 50 opiskelijaa.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Avoimilla ja suurilla kursseilla on eritysen tärkeää kiinnittää huomiota yhteistyön organisointiin.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Avoimilla ja suurilla kursseilla on eritysen tärkeää kiinnittää huomiota yhteistyön organisointiin.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Avoimilla ja suurilla kursseilla on eritysen tärkeää kiinnittää huomiota yhteistyön organisointiin.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on. Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on. Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on. Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
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
  courseSizeUnlimited: {
    id: 3,
    isSelected: {
      fi: 'Kurssillesi ei ole määritelty maksimi opiskelijamäärää.',
      sv: 'Kurssillesi ei ole määritelty maksimi opiskelijamäärää.',
      en: 'Kurssillesi ei ole määritelty maksimi opiskelijamäärää.',
    },
    data: {
      allDimensions: {
        fi: 'Avoimet verkkokurssit (MOOC), joiden osallistujamäärää ei ennalta tiedetä tai pystytä ennakoimaan, voidaan järjestää korkeakoulujen yhteisessä DigiCampus-oppimisympäristössä. Rajoittamaton osallistujamäärä on tärkeää huomioida kurssin pedagogisten ratkaisuiden ja arvioinnin suunnittelussa. Laajoille kursseille on tyypillistä itseopiskelupainotteisuus, sillä ohjaukseen ja vuorovaikutuksen on yleensä rajallisemmat mahdollisuudet kuin pienemmillä ryhmillä. Opettajan työmäärän on pysyttävä kohtuullisena.',
        sv: 'Avoimet verkkokurssit (MOOC), joiden osallistujamäärää ei ennalta tiedetä tai pystytä ennakoimaan, voidaan järjestää korkeakoulujen yhteisessä DigiCampus-oppimisympäristössä. Rajoittamaton osallistujamäärä on tärkeää huomioida kurssin pedagogisten ratkaisuiden ja arvioinnin suunnittelussa. Laajoille kursseille on tyypillistä itseopiskelupainotteisuus, sillä ohjaukseen ja vuorovaikutuksen on yleensä rajallisemmat mahdollisuudet kuin pienemmillä ryhmillä. Opettajan työmäärän on pysyttävä kohtuullisena.',
        en: 'Avoimet verkkokurssit (MOOC), joiden osallistujamäärää ei ennalta tiedetä tai pystytä ennakoimaan, voidaan järjestää korkeakoulujen yhteisessä DigiCampus-oppimisympäristössä. Rajoittamaton osallistujamäärä on tärkeää huomioida kurssin pedagogisten ratkaisuiden ja arvioinnin suunnittelussa. Laajoille kursseille on tyypillistä itseopiskelupainotteisuus, sillä ohjaukseen ja vuorovaikutuksen on yleensä rajallisemmat mahdollisuudet kuin pienemmillä ryhmillä. Opettajan työmäärän on pysyttävä kohtuullisena.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Avoimilla ja suurilla kursseilla on eritysen tärkeää kiinnittää huomiota yhteistyön organisointiin.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Avoimilla ja suurilla kursseilla on eritysen tärkeää kiinnittää huomiota yhteistyön organisointiin.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Avoimilla ja suurilla kursseilla on eritysen tärkeää kiinnittää huomiota yhteistyön organisointiin.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on. Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on. Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on. Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
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
  courseIsMooc: {
    id: 4,
    isSelected: {
      fi: 'Olet valinnut kurssin MOOC-kurssiksi',
      sv: 'Olet valinnut kurssin MOOC-kurssiksi',
      en: 'Olet valinnut kurssin MOOC-kurssiksi',
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
  courseIsNotMooc: {
    id: 5,
    isSelected: {
      fi: 'Olet valinnut ettei kurssi ole MOOC-kurssi.',
      sv: 'Olet valinnut ettei kurssi ole MOOC-kurssi.',
      en: 'Olet valinnut ettei kurssi ole MOOC-kurssi.',
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
  courseAttendancePresent: {
    id: 6,
    isSelected: {
      fi: 'Olet valinnut kurssillesi opetusmuodoksi lähiopetuksen.',
      sv: 'Olet valinnut kurssillesi opetusmuodoksi lähiopetuksen.',
      en: 'Olet valinnut kurssillesi opetusmuodoksi lähiopetuksen.',
    },
    data: {
      allDimensions: {
        fi: 'Lähiopetuksessa on mahdollista osallistaa opiskelijoita hyödyntämällä aktivointiin ja yhteistyöskentelyyn soveltuvia välineitä, kuten Presemoa ja Flingaa.',
        sv: 'Lähiopetuksessa on mahdollista osallistaa opiskelijoita hyödyntämällä aktivointiin ja yhteistyöskentelyyn soveltuvia välineitä, kuten Presemoa ja Flingaa.',
        en: 'Lähiopetuksessa on mahdollista osallistaa opiskelijoita hyödyntämällä aktivointiin ja yhteistyöskentelyyn soveltuvia välineitä, kuten Presemoa ja Flingaa.',
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
        fi: 'Lähiopetukseen soveltuvia yhteistyövälineitä ovat mm. Presemo ja Flinga (?)',
        sv: 'Lähiopetukseen soveltuvia yhteistyövälineitä ovat mm. Presemo ja Flinga (?)',
        en: 'Lähiopetukseen soveltuvia yhteistyövälineitä ovat mm. Presemo ja Flinga (?)',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseAttendanceHybrid: {
    id: 7,
    isSelected: {
      fi: 'Olet valinnut kurssillesi opetusmuodoksi hybridiopetuksen.',
      sv: 'Olet valinnut kurssillesi opetusmuodoksi hybridiopetuksen.',
      en: 'Olet valinnut kurssillesi opetusmuodoksi hybridiopetuksen.',
    },
    data: {
      allDimensions: {
        fi: 'Hybridiopetuksessa osa kurssin opiskelijoista on opettajan kanssa samassa tilassa kampuksella ja osa samanaikaisesti etänä verkkoyhteyden päässä. Järjestely on opettajalle usein haasteellinen, koska huomion jakaminen kahteen suuntaan ja kaikkien kohtelu tasapuolisesti vaatii keskittymistä ja huolellista etukäteissuunnittelua. Opiskelijoiden aktivointi ja vuorovaikutuksen ylläpitäminen asettaa myös käytettävälle opetustilalle ja välineille teknisiä vaatimuksia, jotka on tärkeää huomioida näiden valinnassa.',
        sv: 'Hybridiopetuksessa osa kurssin opiskelijoista on opettajan kanssa samassa tilassa kampuksella ja osa samanaikaisesti etänä verkkoyhteyden päässä. Järjestely on opettajalle usein haasteellinen, koska huomion jakaminen kahteen suuntaan ja kaikkien kohtelu tasapuolisesti vaatii keskittymistä ja huolellista etukäteissuunnittelua. Opiskelijoiden aktivointi ja vuorovaikutuksen ylläpitäminen asettaa myös käytettävälle opetustilalle ja välineille teknisiä vaatimuksia, jotka on tärkeää huomioida näiden valinnassa.',
        en: 'Hybridiopetuksessa osa kurssin opiskelijoista on opettajan kanssa samassa tilassa kampuksella ja osa samanaikaisesti etänä verkkoyhteyden päässä. Järjestely on opettajalle usein haasteellinen, koska huomion jakaminen kahteen suuntaan ja kaikkien kohtelu tasapuolisesti vaatii keskittymistä ja huolellista etukäteissuunnittelua. Opiskelijoiden aktivointi ja vuorovaikutuksen ylläpitäminen asettaa myös käytettävälle opetustilalle ja välineille teknisiä vaatimuksia, jotka on tärkeää huomioida näiden valinnassa.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Lähiopetukseen soveltuvia yhteistyövälineitä ovat mm. Presemo ja Flinga (?)',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Lähiopetukseen soveltuvia yhteistyövälineitä ovat mm. Presemo ja Flinga (?)',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Lähiopetukseen soveltuvia yhteistyövälineitä ovat mm. Presemo ja Flinga (?)',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseAttendanceRemote: {
    id: 8,
    isSelected: {
      fi: 'Olet valinnut kurssillesi opetusmuodoksi etäopetuksen.',
      sv: 'Olet valinnut kurssillesi opetusmuodoksi etäopetuksen.',
      en: 'Olet valinnut kurssillesi opetusmuodoksi etäopetuksen.',
    },
    data: {
      allDimensions: {
        fi: 'Etäopetus mahdollistaa suurten opiskelijamäärien osallistumisen joustavasti, mutta vaatii huolellista opetuksen ja oppimisprosessin suunnittelua. Opiskelijoiden työskentely on ohjeistettava tarkasti, aktiivisuuden ylläpitoon on panostettava, ohjauksen ja vuorovaikutuksen toteuttaminen edellyttää käytettävien välineiden hyvää tuntemusta ja oppimistehtävissä on huomioitava etäopiskelijoiden “näkymättömyys” opettajalle. Etäopiskelu voidaan järjestää ryhmän koosta riippuen itseopiskelua tai yhteisöllistä työskentelyä painottaen.',
        sv: 'Etäopetus mahdollistaa suurten opiskelijamäärien osallistumisen joustavasti, mutta vaatii huolellista opetuksen ja oppimisprosessin suunnittelua. Opiskelijoiden työskentely on ohjeistettava tarkasti, aktiivisuuden ylläpitoon on panostettava, ohjauksen ja vuorovaikutuksen toteuttaminen edellyttää käytettävien välineiden hyvää tuntemusta ja oppimistehtävissä on huomioitava etäopiskelijoiden “näkymättömyys” opettajalle. Etäopiskelu voidaan järjestää ryhmän koosta riippuen itseopiskelua tai yhteisöllistä työskentelyä painottaen.',
        en: 'Etäopetus mahdollistaa suurten opiskelijamäärien osallistumisen joustavasti, mutta vaatii huolellista opetuksen ja oppimisprosessin suunnittelua. Opiskelijoiden työskentely on ohjeistettava tarkasti, aktiivisuuden ylläpitoon on panostettava, ohjauksen ja vuorovaikutuksen toteuttaminen edellyttää käytettävien välineiden hyvää tuntemusta ja oppimistehtävissä on huomioitava etäopiskelijoiden “näkymättömyys” opettajalle. Etäopiskelu voidaan järjestää ryhmän koosta riippuen itseopiskelua tai yhteisöllistä työskentelyä painottaen.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Ryhmäytymiseen etäopetuksen iakna voi käyttää esim. Zoomin pienryhmiä.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Ryhmäytymiseen etäopetuksen iakna voi käyttää esim. Zoomin pienryhmiä.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Ryhmäytymiseen etäopetuksen iakna voi käyttää esim. Zoomin pienryhmiä.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseIsRecorded: {
    id: 9,
    isSelected: {
      fi: 'Olet valinnut nauhoittaa kurssin luennot.',
      sv: 'Olet valinnut nauhoittaa kurssin luennot.',
      en: 'Olet valinnut nauhoittaa kurssin luennot.',
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
  courseIsNotRecorded: {
    id: 10,
    isSelected: {
      fi: 'Olet valinnut ettei luentoja nauhoiteta.',
      sv: 'Olet valinnut ettei luentoja nauhoiteta.',
      en: 'Olet valinnut ettei luentoja nauhoiteta.',
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
  courseCompletionMethodExam: {
    id: 11,
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi tentin.',
      sv: 'Olet valinnut kurssillesi suoritusmuodoksi tentin.',
      en: 'Olet valinnut kurssillesi suoritusmuodoksi tentin.',
    },
    data: {
      allDimensions: {
        fi: 'Perinteisen tentin voi järjestää joko tiettynä päivänä tai pidemmällä aikavälillä, yliopiston sähköisen tenttimisen tiloissa tai kotitenttinä. Tenttiä kannattaa hyödyntää myös oppimistilanteena ja ottaa kysymyksiä laatiessa huomioon opiskelijoiden mahdollisuus käyttää apunaan erilaisia materiaaleja.',
        sv: 'Perinteisen tentin voi järjestää joko tiettynä päivänä tai pidemmällä aikavälillä, yliopiston sähköisen tenttimisen tiloissa tai kotitenttinä. Tenttiä kannattaa hyödyntää myös oppimistilanteena ja ottaa kysymyksiä laatiessa huomioon opiskelijoiden mahdollisuus käyttää apunaan erilaisia materiaaleja.',
        en: 'Perinteisen tentin voi järjestää joko tiettynä päivänä tai pidemmällä aikavälillä, yliopiston sähköisen tenttimisen tiloissa tai kotitenttinä. Tenttiä kannattaa hyödyntää myös oppimistilanteena ja ottaa kysymyksiä laatiessa huomioon opiskelijoiden mahdollisuus käyttää apunaan erilaisia materiaaleja.',
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
        fi: 'Tentti sähköisen tenttimisen tiloissa on aina yksilösuoritus. Yhteistyötä kotitentissä ei voida käytännössä valvoa tai estää, mikä kannattaa ottaa huomioon esim. kysymyksiä laadittaessa.',
        sv: 'Tentti sähköisen tenttimisen tiloissa on aina yksilösuoritus. Yhteistyötä kotitentissä ei voida käytännössä valvoa tai estää, mikä kannattaa ottaa huomioon esim. kysymyksiä laadittaessa.',
        en: 'Tentti sähköisen tenttimisen tiloissa on aina yksilösuoritus. Yhteistyötä kotitentissä ei voida käytännössä valvoa tai estää, mikä kannattaa ottaa huomioon esim. kysymyksiä laadittaessa.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseCompletionMethodDemo: {
    id: 12,
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi demot.',
      sv: 'Olet valinnut kurssillesi suoritusmuodoksi demot.',
      en: 'Olet valinnut kurssillesi suoritusmuodoksi demot.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseCompletionMethodDiary: {
    id: 13,
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi oppimispäiväkirjan.',
      sv: 'Olet valinnut kurssillesi suoritusmuodoksi oppimispäiväkirjan.',
      en: 'Olet valinnut kurssillesi suoritusmuodoksi oppimispäiväkirjan.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseCompletionMethodAssignment: {
    id: 14,
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi lopputyön.',
      sv: 'Olet valinnut kurssillesi suoritusmuodoksi lopputyön.',
      en: 'Olet valinnut kurssillesi suoritusmuodoksi lopputyön.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseCompletionMethodParticipation: {
    id: 15,
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi osallistumisen opetukseen.',
      sv: 'Olet valinnut kurssillesi suoritusmuodoksi osallistumisen opetukseen.',
      en: 'Olet valinnut kurssillesi suoritusmuodoksi osallistumisen opetukseen.',
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
        fi: 'Lähiopetukseen soveltuvia yhteistyövälineitä ovat mm. Presemo ja Flinga (?)',
        sv: 'Lähiopetukseen soveltuvia yhteistyövälineitä ovat mm. Presemo ja Flinga (?)',
        en: 'Lähiopetukseen soveltuvia yhteistyövälineitä ovat mm. Presemo ja Flinga (?)',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseCompletionMethodOther: {
    id: 16,
    isSelected: {
      fi: 'Olet valinnut kurssillesi suoritusmuodoksi muun tavan.',
      sv: 'Olet valinnut kurssillesi suoritusmuodoksi muun tavan.',
      en: 'Olet valinnut kurssillesi suoritusmuodoksi muun tavan.',
    },
    data: {
      allDimensions: {
        fi: 'Verkko-opetus mahdollistaa monenlaisia, myös perinteisistä käytännöistä poikkeavia suoritus- ja arviointitapoja. Tähän liittyvissä suunnitemissa kannatta konsultoida opetusteknologian asiantuntijoita sopivien työkalujen ja käytäntöjen kartoittamiseksi.',
        sv: 'Verkko-opetus mahdollistaa monenlaisia, myös perinteisistä käytännöistä poikkeavia suoritus- ja arviointitapoja. Tähän liittyvissä suunnitemissa kannatta konsultoida opetusteknologian asiantuntijoita sopivien työkalujen ja käytäntöjen kartoittamiseksi.',
        en: 'Verkko-opetus mahdollistaa monenlaisia, myös perinteisistä käytännöistä poikkeavia suoritus- ja arviointitapoja. Tähän liittyvissä suunnitemissa kannatta konsultoida opetusteknologian asiantuntijoita sopivien työkalujen ja käytäntöjen kartoittamiseksi.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
  courseIsOpenUniversity: {
    id: 17,
    isSelected: {
      fi: 'Osallistuminen kurssillesi on avointa kaikille.',
      sv: 'Osallistuminen kurssillesi on avointa kaikille.',
      en: 'Osallistuminen kurssillesi on avointa kaikille.',
    },
    data: {
      allDimensions: {
        fi: 'Yliopistoa laajemmalle yleisölle tarkoitetut kurssit suositellaan järjestettäväksi Avoimen yliopiston kautta. Tutustu avointen verkkokurssien (MOOC) vaatimuksiin ja DigiCampus-oppimisympäristöön. Avoimella verkkokurssilla oppimateriaalien tulee olla julkisia, jolloin myös niiden saavutettavuuteen tulee kiinnittää erityistä huomiota.',
        sv: 'Yliopistoa laajemmalle yleisölle tarkoitetut kurssit suositellaan järjestettäväksi Avoimen yliopiston kautta. Tutustu avointen verkkokurssien (MOOC) vaatimuksiin ja DigiCampus-oppimisympäristöön. Avoimella verkkokurssilla oppimateriaalien tulee olla julkisia, jolloin myös niiden saavutettavuuteen tulee kiinnittää erityistä huomiota.',
        en: 'Yliopistoa laajemmalle yleisölle tarkoitetut kurssit suositellaan järjestettäväksi Avoimen yliopiston kautta. Tutustu avointen verkkokurssien (MOOC) vaatimuksiin ja DigiCampus-oppimisympäristöön. Avoimella verkkokurssilla oppimateriaalien tulee olla julkisia, jolloin myös niiden saavutettavuuteen tulee kiinnittää erityistä huomiota.',
      },
      investication: {
        fi: 'Voit käyttää avoimella verkkokurssilla oppimateriaaleina aineistoja, jotka ovat julkisina verkossa ja saavutettavia. Voit tarjota linkkejä esim. tutkimusartikkeleihin tai Unitubessa oleviin videoihin oppimisalustalla tai koostaa niitä esim. Thinglink-palveluun. Oppimisalustalla voit rakentaa testejä, tenttejä ja H5P-aktiviteetilla interaktiivisia aineistoja.',
        sv: 'Voit käyttää avoimella verkkokurssilla oppimateriaaleina aineistoja, jotka ovat julkisina verkossa ja saavutettavia. Voit tarjota linkkejä esim. tutkimusartikkeleihin tai Unitubessa oleviin videoihin oppimisalustalla tai koostaa niitä esim. Thinglink-palveluun. Oppimisalustalla voit rakentaa testejä, tenttejä ja H5P-aktiviteetilla interaktiivisia aineistoja.',
        en: 'Voit käyttää avoimella verkkokurssilla oppimateriaaleina aineistoja, jotka ovat julkisina verkossa ja saavutettavia. Voit tarjota linkkejä esim. tutkimusartikkeleihin tai Unitubessa oleviin videoihin oppimisalustalla tai koostaa niitä esim. Thinglink-palveluun. Oppimisalustalla voit rakentaa testejä, tenttejä ja H5P-aktiviteetilla interaktiivisia aineistoja.',
      },
      production: {
        fi: 'Opiskelijat voivat tuottaa tietoa kirjoittamalla ajatuksiaan oppimisalustan keskustelualueelle ja tuoda sinne liitteenä tiedostoja. Flinga-palvelu mahdollistaa esim. Aivoriihityöskentelyn. (Blogi? Wiki? Presemo? EPortfolio? Miro?)',
        sv: 'Opiskelijat voivat tuottaa tietoa kirjoittamalla ajatuksiaan oppimisalustan keskustelualueelle ja tuoda sinne liitteenä tiedostoja. Flinga-palvelu mahdollistaa esim. Aivoriihityöskentelyn. (Blogi? Wiki? Presemo? EPortfolio? Miro?)',
        en: 'Opiskelijat voivat tuottaa tietoa kirjoittamalla ajatuksiaan oppimisalustan keskustelualueelle ja tuoda sinne liitteenä tiedostoja. Flinga-palvelu mahdollistaa esim. Aivoriihityöskentelyn. (Blogi? Wiki? Presemo? EPortfolio? Miro?)',
      },
      collaboration: {
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Avoimilla ja suurilla kursseilla on eritysen tärkeää kiinnittää huomiota yhteistyön organisointiin.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Avoimilla ja suurilla kursseilla on eritysen tärkeää kiinnittää huomiota yhteistyön organisointiin.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista. Avoimilla ja suurilla kursseilla on eritysen tärkeää kiinnittää huomiota yhteistyön organisointiin.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on. Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on. Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on. Avoimissa ja suurissa kursseissa opettajan voi olla mahdotonta seurata tai osallistua useimpiin keskusteluihin.',
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
  courseIsNotOpenUniversity: {
    id: 18,
    isSelected: {
      fi: 'Osallistuminen kurssillesi ei ole avointa kaikille.',
      sv: 'Osallistuminen kurssillesi ei ole avointa kaikille.',
      en: 'Osallistuminen kurssillesi ei ole avointa kaikille.',
    },
    data: {
      allDimensions: {
        fi: 'Yliopiston sisäiset kurssit toteutetaan pääsääntöisesti Moodle-oppimisympäristössä, joka on integroitu SISU-opiskelijahallintojärjestelmän kanssa. Moodlen ohessa voidaan käyttää muita yliopiston opetusteknologisia välineitä. Moodleen pääsy on rajoitettu ensisijaisesti HY:n opettajille ja opiskelijoille, mutta HAKA-kirjautumisen ja kevyttunnusten avulla mukaan voi päästä myös muita. Zoomin ja Teamsin huoneisiin opiskelijoiden toivotaan kirjautuvan.',
        sv: 'Yliopiston sisäiset kurssit toteutetaan pääsääntöisesti Moodle-oppimisympäristössä, joka on integroitu SISU-opiskelijahallintojärjestelmän kanssa. Moodlen ohessa voidaan käyttää muita yliopiston opetusteknologisia välineitä. Moodleen pääsy on rajoitettu ensisijaisesti HY:n opettajille ja opiskelijoille, mutta HAKA-kirjautumisen ja kevyttunnusten avulla mukaan voi päästä myös muita. Zoomin ja Teamsin huoneisiin opiskelijoiden toivotaan kirjautuvan.',
        en: 'Yliopiston sisäiset kurssit toteutetaan pääsääntöisesti Moodle-oppimisympäristössä, joka on integroitu SISU-opiskelijahallintojärjestelmän kanssa. Moodlen ohessa voidaan käyttää muita yliopiston opetusteknologisia välineitä. Moodleen pääsy on rajoitettu ensisijaisesti HY:n opettajille ja opiskelijoille, mutta HAKA-kirjautumisen ja kevyttunnusten avulla mukaan voi päästä myös muita. Zoomin ja Teamsin huoneisiin opiskelijoiden toivotaan kirjautuvan.',
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
        fi: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        sv: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
        en: 'Lähes kaikki verkko-opetuksen välineet mahdollistavat yhteistyön ja vuorovaikutuksen, joten välineiden ja käytäntöjen valitseminen on hyvin tapauskohtaista.',
      },
      discussion: {
        fi: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        sv: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
        en: 'Koko kurssin kestävään tai osatehtäviin liittyviin keskusteluihin voi käyttää Moodlen keskustelualuetta, etäopetustapahtumissa Zoomin tai Teamsin chattia. Kaikissa tapauksissa on syytä miettiä ja tarkkaan ohjeistaa, mikä keskustelun tavoite kussakin tapauksessa on.',
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
})

export default getResultData
