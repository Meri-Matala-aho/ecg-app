
const path = '/ecg-app/content/'

export const ecgList = [
{
  name: "Sydämen rakenne",
  pages: [
    { image: path + 't01_ekg-osaaminen/1.png' },
    { image: path + 't01_ekg-osaaminen/2.png' },
    { image: path + 't01_ekg-osaaminen/3.png' },
    { image: path + 't01_ekg-osaaminen/4.png' },
  ]
},
{
  name: "",
  pages: [
    { description: 'EKG:ssä näkyvä ensimmäinen heilahdus on eteisten aktivaatiosta syntyvä P-aalto, joka on usein kaksiosainen, alkuosan aallosta kuvatessa aikaisemmin aktivoituvaa oikeaa eteistä ja jälkimmäisen vasenta eteistä.\n\nP-aallon kesto kertoo ajan, joka kuluu eteisten depolarisaatioon. Molempien eteisten depolarisoituessa, EKG-käyrä palaa perusviivalle. Eteisten jälkeen aktivoituu johtoratajärjestelmä: eteis-kammiosolmuke, Hisin kimppu, johtoradat ja Purkinjen säikeet. Näiden massa on hyvin pieni, eikä niistä syntyvä sähkövirta näy kehon pinnalta rekisteröidystä EKG:stä.\n\nSeuraavana vuorossa on QRS-heilahdus eli QRS-kompleksi, joka syntyy kammioiden depolarisaatiosta.  Q-aalto on ensimmäinen negatiivinen heilahdus ennen R-aaltoa. Ensimmäinen positiivinen deflektio on R-aalto. S-aalto on negatiivinen deflektio R-aallon jälkeen.   (Surawicz B. & Knilans T. 2008). ' },
  ]
},
{
  name: "",
  pages: [
    { description: 'Depolarisaatio etenee nopeasti sydänlihaksen läpi endokardiumista epikardiumiin. Repolarisaatio puolestaan etenee epikardiumista endokardiumiin hitaasti ja syntyy T-aalto.\nJoskus T-aallon jälkeen esiintyy vielä toinen aalto, ns. U-aalto, joka on samansuuntainen kuin edeltävä T-aalto. Sen syntymekanismi ei ole vielä selvillä, mutta mahdollisesti se kertoo M-solukerroksen repolarisaation ajallisesta poikkeavuudesta.' },
  ]
},
{
  name: "EKG osaaminen",
  pages: [
    { description: '' },
  ]
},
{
  name: "Normaali EKG-kompleksi",
  pages: [
    { image: path + 't01_ekg-osaaminen/5.png',
      description: 'Tässä diassa esitetään normaali EKG-kompleksi, jossa esitetään yksi kokonainen depolarisaatio-repolarisaatio sykli.'
    },
  ]
},
{
  name: "EKG-kytkennät",
  pages: [
    { image: path + 't01_ekg-osaaminen/6.png' },
    { image: path + 't01_ekg-osaaminen/7.png' },
  ]
},
{
  name: "Teknisesti laadukas EKG rekisteröinti ja huomioitavat asiat",
  pages: [
    { description: '1. Korut, kellot, sormukset sekä muut metalliesineet tulee poistaa ennen rekisteröintiä\n2. Ranteet, nilkat ja rintakehä tulee paljastaa\n3. Aseta potilas selinmakuulle hyvään asentoon, kädet ja jalat vartalon viereen (ei koukkuun)\n4. Potilaan tulee olla liikkumatta ja puhumatta ja hengittämään normaalisti\n5. Vältä kosketusta esimerkiksi metalliseen sängyn reunaan\n6. Puhelimet ja muut mahdollista häiriötä aiheuttavat laitteet tulee sulkea\n7. Käytä tarvittaessa suodatinta (häiriönpoistajaa) paperille tulostettaessa' },
    { description: '8. Tarkista potilaan iho\n9. Poista tarvittaessa ihokarvat\n10. Puhdista iho denaturoidulla  80% etanolilla\n11. Karhenna iho esimerkiksi karhenninpaperilla\n12. Kiinnitä elektrodit\n13. Poikkeavat elektrodien paikat tulee kirjata EKG rekisteröintiin' },
  ]
},
{
  name: "EKG-osaaminen ja huomioitavat asiat",
  pages: [
    { description: 'EKG:n tulkinassa rytmistä tulee tarkistaa seuraavat seikat:\n\n1.Yksilöintitiedot eli potilaan nimi, henkilötunnus ja kellonaika' },
    { image: path + 't01_ekg-osaaminen/8.png',
      description: '2. Nauhan nopeus 25-50mm/s'
    },
    { image: path + 't01_ekg-osaaminen/9.png' },
    { image: path + 't01_ekg-osaaminen/10.png' },
    { image: path + 't01_ekg-osaaminen/11.png' },
    { image: path + 't01_ekg-osaaminen/12.png' },
    { image: path + 't01_ekg-osaaminen/13.png' },
    { image: path + 't01_ekg-osaaminen/14.png' },
  ]
},
{
  name: "EKG-artefaktit",
  pages: [
    { description: 'Artefaktia aiheuttavat EKG-tallenteeseen muun muassa lihasjännitys (palelu, Parkinsonin tauti), liikkuminen (ihon venyminen ja tai elektrodin liikahtaminen, jolloin signaali muuttuu), elektrodien ongelmat (kuivunut geeli elektrodissa, huono kontakti).\n\nMyös tekniset häiriöt aiheuttavat artefaktia, kuten esimerkiksi verkkovirran (50Hz) aiheuttama tasainen häiriö viivassa.\nMikäli elektrodi on sijoitettu valtimon päälle, saattaa se aiheuttaa pulssiaaltoartefaktia.\n\nLisäksi väärä kytkentä aiheuttaa artefaktia, kuten esimerkiksi raajakytkentöjen puolen vaihtuminen tai väärä rintakytkentöjen taso.' },
    { description: 'On tärkeä tunnistaa EKG:stä artefakti, mikä ei ole peräisin sydämen sähköisestä toiminnasta, vaan taustalla on jokin muu tekijä, kuten lihasjännitys.\n\nArtefaktit saattavat muistuttaa ulkonäöltään rytmihäiriötä tai ne saatetaan sekoittaa ST-tason muutoksiin. Tämän vuoksi on tärkeää, että artefaktit tunnistetaan ja erotetaan todellisista  rytmihäiriöstä, ettei tule virheellisiä tulkintoja.' },
    { image: path + 't01_ekg-osaaminen/15.png' },
    { image: path + 't01_ekg-osaaminen/16.png',
      description: 'Aikuisen ihmisen syke on levossa noin 60-80 kertaa minuutissa. Joten ihmisen sydän “lyö” vähintään 4000 kertaa tunnissa, 100 000 kertaa vuorokaudessa ja yli 37 miljoonaa kertaa vuodessa. '
    },
  ]
},
{
  name: "EKG-rytmit",
  pages: [
    { image: path + 't01_ekg-osaaminen/17.png' },
    { description: 'Seuraavissa dioissa esitellään erilaisia EKG-rytmejä teoriatietoon perustuen.\n\nJokaisesta EKG-rytmistä on oma dia, jossa kuvataan keskeiset tunnusmerkit ja löydökset, joiden perusteella rytmi voidaan tunnistaa.\n\nEKG:n tulkintaa tukemaan ja selkeyttämään kuhunkin rytmiin on liitetty esimerkki aidosta EKG-tallenteesta sekä video.' },
  ]
},
{
  id: 10,
  name: 'Sinusrytmi',
  pages: [
    { description: 'EKG perustuu klassiseen elektrofysiologiaan, jonka kehitti Willem Einthoven 1924. \n\nSydämen normaalia rytmiä kutsutaan sinusrytmiksi. Normaali sydämen rytmi käynnistyy sinussolmukkeessa, josta sähköinen aktivaatio leviää eteisiin. Eteisten aktivoituessa EKG:ssä nähdään eteisaktivaatioita kuvaava P-aalto. Sinussolmuke on sydämen varsinainen tahdistaja, ja se sijaitsee oikean eteisen yläosassa takaseinämässä yläonttolaskimon suun läheisyydessä.\n\nKun sinussolmuke toimii normaalisti ja rytmi käynnistyy sieltä, puhutaan normaalirytmistä eli sinusrytmistä. Eteisten sähköistä aktivoitumista kutsutaan depolarisaatioksi, mikä käynnistää eteisten lihassolujen supistumisen. Tämän seurauksena molemmat eteiset supistuvat ja täyttävät kammiot ennen kammioiden supistumista.' },
    { description: 'P-aallon kesto ilmoittaa ajan, mikä kuluu eteisten depolarisaatioon. Molempien eteisten depolarisoitumisen jälkeen, EKG-käyrä palaa perusviivalle.\n\nEteisten jälkeen aktivoituu johtoratajärjestelmä: eteis-kammiosolmuke, Hisin kimppu, johtoradat sekä Purkinjen säikeet. Näiden synnyttämä sähkövirta ei näy kehon pinnalta rekisteröidyssä EKG:ssä, sillä niiden massa on hyvin pieni.\n\nQRS-kompleksi on seuraavana vuorossa joka syntyy kammioiden depolarisaatiosta. Kompleksia seuraa isoelektrinen ST-väli ja T-aalto, joka kuvaa kammioiden repolarisaatiota. Koko tätä sykliä kutsutaan sinusrytmiksi.'},
    { image: path + '1_sinusrytmi/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '1_sinusrytmi/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '1_sinusrytmi/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 76,
      graph: path + '1_sinusrytmi/annotated_graph.png',
      description: 'Syketaso 60-100 krt/min.\nP-aalto löytyy ekg:stä.\nQRS-kompleksin leveys \nT-aalto \nSyketasoltaan säännöllinen rytmi.',
    }
  ]
},
{
  id: 11,
  name: 'Sinusbradykardia',
  pages: [
    { description: 'Sinusbradykardia on sinusrytmi, jossa syketaajuus on alle 60 lyöntiä minuutissa. Eteisaktivaatio tapahtuu kuten normaalissa sinusrytmissä. P-aalto on normaalin muotoinen, edeltää jokaista QRS-kompleksia ja PQ-aika on vähintään 120 ms. Sinusbradykardia on tavallista unen aikana sekä henkilöillä, joilla vagaalinen tonus on suuri, kuten urheilijoilla ja terveillä nuorilla aikuisilla.' },
    { image: path + '2_sinusbradykardia/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '2_sinusbradykardia/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '2_sinusbradykardia/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 42,
      graph: path + '2_sinusbradykardia/graph.png',
    }
  ]
},
{
  id: 12,
  name: 'Sinustakykardia',
  pages: [
    { description: 'Sinustakykardia on sinusrytmi, jossa syketiheys on yli 100 kertaa minuutissa.\nEteisaktivaatio tapahtuu kuten sinusrytmissä ja P-aallot ovat normaalit, myös PP-välit ovat yleensä säännölliset.\nP-aaltoja seuraa QRS-kompleksi ja P-aaltojen morfologia on normaali. P-aallon korkeus voi myös kasvaa sekä PR-väli voi lyhentyä  syketiheyden kasvaessa. '},
    { image: path + '3_sinustakykardia/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '3_sinustakykardia/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '3_sinustakykardia/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 128,
      graph: path + '3_sinustakykardia/graph.png',
    }
  ]
},
{ 
  name: 'Lisälyönnit',
  pages: [
    { description: 'Sydämen lisälyönneillä tarkoitetaan ylimääräistä eteis- tai kammioperäistä sähköistä aktivaatiota.\n\nTämä ilmaantuu aiemmin kuin vallitsevan normaalirytmin aikainen aktivaatio. Joten lisälyönnin ajallinen etäisyys edeltävästä normaalista aktivaatiosta on yleensä aina lyhyempi kuin etäisyys seuraavaan normaaliin aktivaatioon.\n\nEnglanninkielisessä kirjallisuudessa lisälyönneistä käytetään yleensä muun muassa nimitystä extrasystole. Lisälyönnit syntyvät samalla mekanismilla kuin rytmihäiriöt, kuten esimerkiksi lisääntynyt automaatio, laukaistu aktivaatio ja mikrokiertoaktivaatio. Vähäinen lisälyöntisyys on kohtalaisen yleistä etenkin terveessä sydämessä. Urheilussa sekä sydänsairauksien yhteydessä lisälyöntisyyden yleisyys on suurempi. ' }
  ]
},
{
  id: 14,
  name: 'Eteislisälyönnit eli SVES',
  pages: [
    {description: 'Eteislisälyönti eli Supraventrikulaarinen ExtraSystole (SVES), englanniksi premature atrial contraction (PAC) ) synnyttää impulssin, jonka varhaisin todettavissa oleva aktivaatio kohdistuu sydämen oikeaan tai vasempaan eteiseen.\n\nEteislisälyönti aktivoi ensin molemmat eteiset ja sen jälkeen eteis-kammiosolmukkeen sekä lopulta sydämen molemmat kammiot.\n\nAktivaation johtuminen eteisistä kammioihin edellyttää, että eteis-kammiosolmuke ja distaalinen johtorata eivät ole refraktaarisia eli kykenevät depolarisoitumaan. Johtuminen voi olla normaalia, hidastunutta tai sitten ei eteislisälyönti johdu ollenkaan kammioihin.'},
    {description: 'Eteislisälyönnin aiheuttama QRS-kompleksi on yleensä normaalin sinusrytmin QRS-kompleksin kaltainen, mutta voi olla myös oikean tai vasemman haarakatkoksen muotoinen distaalisen johtoradan toiminnallisen katkoksen takia.\nLisälyöntejä voi olla täysin terveillä sekä sydänsairailla ihmisillä. Eteislisälyönnit eivät ole käytännössä koskaan vaarallisia. '},
    { image: path + '4_sinus_plus_sves/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '4_sinus_plus_sves/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '4_sinus_plus_sves/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 68,
      graph: path + '4_sinus_plus_sves/graph.png',
      description: '-QRS-heilahdus on yleensä normaalin sinuslyönnin kaltainen\n-Jos P-aalto on täysin samanlainen sinusrytmissä näkyvän P-aallon kanssa, kyseessä on sinoatriaalinen lisälyönti\n-Jos P-aalto muistuttaa muodoltaan paljon sinusrytmin aikaista P-aaltoa, lisälyönnin syntypaikka on joko oikean eteisen yläosassa, yläonttolaskimossa tai oikeassa ylemmässä keuhkolaskimossa'
    }
  ]
},
{
  id: 15,
  name: 'Kammiolisälyönnit eli VES',
  pages: [
    { description: 'Kammiolisälyönneillä (VES) tarkoitetaan leveää QRS-kompleksia, joka on yli 120ms. On ennenaikainen, yleensä normaalia pidempikestoinen, muodoltaan terävä tai poikkeava ja jota ei edellä ennenaikainen P-aalto.\n\nYhdenmuotoinen kammiolisälyönti eli unifokaalinen kammiolisälyönti tulee aina samasta paikasta kammiota. Monimuotoinen eli multifokaalinen, sekä ennenaikaisuudeltaan vaihteleva kammiolisälyöntisyys syntyy todennäköisesti useassa eri paikkaa sydämessä.', },
    { image: path + '5_sinus_plus_ves_unifokaalinen/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '5_sinus_plus_ves_unifokaalinen/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '5_sinus_plus_ves_unifokaalinen/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    }
  ]
},
{
  name: 'Sinusrytmi + VES (unifokaalinen)',
  pages: [
    { heartRate: 61,
      graph: path + '5_sinus_plus_ves_unifokaalinen/graph.png',
      description: '-Yhdenmuotoinen eli unifokaalinen kammiolisälyönti (tulee aina samasta paikasta kammiota)\n-QRS-heilahdus on ennenaikainen\n-QRS-heilahdus on yleensä normaalia pidempikestoinen\n-QRS-heilahdus on muodoltaan terävä tai poikkeava ja jota ei edellä ennenaikainen P-aalto'
    }
  ]
},
{
  id: 17,
  name: 'Sinusrytmi + VES (multifokaalinen)',
  pages: [
    { description: 'Kammiolisälyönneillä (VES) tarkoitetaan leveää QRS-kompleksia, joka on yli 120ms. On ennenaikainen, yleensä normaalia pidempikestoinen, muodoltaan terävä tai poikkeava ja jota ei edellä ennenaikainen P-aalto. Yhdenmuotoinen kammiolisälyönti eli unifokaalinen kammiolisälyönti tulee aina samasta paikasta kammiota. Monimuotoinen eli multifokaalinen, sekä ennenaikaisuudeltaan vaihteleva kammiolisälyöntisyys syntyy todennäköisesti useassa eri paikkaa sydämessä.', },
    { image: path + '6_sinus_plus_ves_multifokaalinen/1.png',
      description: 'Simulaatiomonitorin tallenne'
    },
    { heartRate: 80,
      graph: path + '6_sinus_plus_ves_multifokaalinen/graph.png',
      description: '-QRS-heilahdus on leveä (> 0,12s) ja ennenaikainen jota ei edellä P-aalto\n-Monimuotoinen eli multifokaalinen sekä ennenaikaisuudeltaan vaihtelevat kammiolisälyönnit syntyvät useassa eri paikassa sydäntä'
    }
  ]
},
{
  id: 18,
  name: 'Kupletti',
  pages: [
    { description: 'Kupletilla (couplet) tai lisälyöntipari tarkoitetaan tilaa, jossa kammiolisälyönnit esiintyvät pareittain.', },
    { image: path + '7_kupletti/1.png',
      description: 'Simulaatiomonitorin tallenne'
    },
    { heartRate: 75,
      graph: path + '7_kupletti/graph.png',
      description: '-Kupletilla tai lisälyöntiparilla tarkoitetaan tilaa, jossa kammiolisälyönnit esiintyvät pareittan'
    }
  ]
},
{
  id: 19,
  name: 'Tripletti',
  pages: [
    { description: 'Tripletillä taas tarkoitetaan kolmen lisälyönnin muodostamaa sarjaa.', },
    { image: path + '8_tripletti/1.png',
      description: 'Potilasmonitorin tallenne'
    },
    { heartRate: 74,
      graph: path + '8_tripletti/graph.png',
      description: '-Tripletillä tarkoitetaan kolmen kammiolisälyönnin muodostamaa sarjaa'
    }
  ]
},
{
  id: 20,
  name: 'R-On-T',
  pages: [
    { description: 'Hyvin ennenaikaiset kammiolisälyönnit osuvat jo T-aallon päälle ja näitä kutsutaan ”R-On-T”-lisälyönneiksi. Kammiolisälyöntien varhaisuudella katsotaankin olevan yhteyttä niiden vaarallisuuteen.  Näitä pidetään lisälyönneistä vaarallisimpina, sillä ne saattavat joissain tilanteissa, kuten voimakkaassa iskemiassa käynnistää kammiotakykardian = VT tai kammiovärinän = VF.  Kaikki tällaiset lisälyönnit eivät ole vaarallisia varsinkaan terveessä sydämessä. ', },
    { image: path + '9_r-on-t/1.png' },
    { heartRate: 64,
      graph: path + '9_r-on-t/graph.png',
    }
  ]
},
{
  id: 21,
  name: 'Bigemenia',
  pages: [
    { description: 'Bigemenialla tarkoitetaan tilaa, jossa jokaista normaalia sinussolmukkeen tahdittamaa kammioaktivaatiota seuraa kammiolisälyönti. Tällöin joka toinen kammiolyönti on lisälyönti.', },
    { image: path + '10_bigemenia/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '10_bigemenia/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '10_bigemenia/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 77,
      graph: path + '10_bigemenia/graph.png',
    }
  ]
},
{
  id: 22,
  name: 'Trigemenia',
  pages: [
    { description: 'Trigemenialla tarkoitetaan rytmiä, jossa joka kolmas kammiolyönti on lisälyönti.', },
    { image: path + '11_trigemenia/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '11_trigemenia/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '11_trigemenia/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 91,
      graph: path + '11_trigemenia/graph.png',
    }
  ]
},
{
  name: 'Värinät sekä käännettävät rytmit',
  pages: [
    { image: path + 't03_varinat/1.png' },
  ]
},
{
  id: 24,
  name: 'Flimmeri',
  pages: [
    { description: 'Eteisvärinä (Flimmeri/FA) on yleisin rytmihäiriö yksittäisten lisälyöntien jälkeen. \n\nEteisvärinä aiheutuu kammioiden nopeasta sekä epäsäännöllisestä supistelusta. \n\nEteisvärinä on yleensä helposti tunnistettavissa EKG:ssä ja perusviiva on epätasainen eikä eteisaaltoja erotu. \n\nQRS-kompleksi on yleensä kapea ja niiden väli on epäsäännöllinen. QRS-kompleksin taajuus on yleensä nopeahko, noin 80 – 120 kertaa minuutissa. ', },
    { description: 'Eteisvärinässä eteisten toiminta on nopeaa ja järjestymätöntä, mikä on sille tyypillistä. Eteiset supistelevat epätahdissa jopa 600 kertaa minuutissa sähköisten aaltojen kulkiessa kaaosmaisesti eteisissä.\n\nEteisvärinät voidaan jakaa kolmeen eri tyyppiin; kohtauksittaiseen (paroksysmaalinen), jatkuvaan (persistoiva) sekä pysyvään (krooninen) eteisvärinään. \n\nValtaosa eteisvärinää sairastavista on yli 65-vuotiaita, keski-ikä on 75 vuotta. Miehillä on lähes kaksinkertainen riski sairastua eteisvärinään verrattuna naisiin. Esiintyvyys vaihtelee iän sekä sydän- ja muiden perussairauksien mukaan. Esimerkiksi sydämen vajaatoiminta lisää eteisvärinän yleisyyttä.', },
    { image: path + '12_flimmeri/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '12_flimmeri/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '12_flimmeri/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 113,
      graph: path + '12_flimmeri/graph.png',
      description: '-QRS-heilahdus on yleensä kapea\n-Lyöntivälien epäsäännöllisyys\n-P-aallot puuttuu\n-Epätasainen perusviiva'
    }
  ]
},
{
  id: 25,
  name: 'Flutteri',
  pages: [
    { description: 'Eteislepatus (FLU/Flatteri) on eteisvärinän jälkeen tavallisin ja tärkein eteisperäinen rytmihäiriö. Useilla potilailla esiintyy eteislepatusta että eteisvärinää. Eteislepatus syntyy eteisperäisten lisälyöntien aiheuttamina, kuten eteisvärinässäkin. Eteislepatuksessa eteisten taajuus on rytmihäiriön aikana säännöllinen toisin kuin eteisvärinässä. Eteislepatuksen oireet ovat hyvin samanlaisia kuin eteisvärinässä. ', },
    { description: 'Tyypillisen eteislepatuksen tunnistaa EKG:stä alaseinäkytkennöissä II, III ja aVF näkyvästä säännöllisestä sekä sahalaitamaisesta F-aallosta (”flutter wave”). Kammiovaste on useimmiten säännöllinen 80 – 170 kertaa minuutissa. Eteislepatus liittyy eriasteiseen sydämen vajaatoimintaan kammiovasteesta riippuen.', },
    { image: path + '13_flutteri/1.png',
      description: 'Teleseurannasta peräisin oleva tallenne'
    },
    { heartRate: 76,
      graph: path + '13_flutteri/graph.png',
      description: '-Lyöntivälit säännölliset\n-F-aalto (sahalaitamainen kuvio)'
    }
  ]
},
{
  id: 26,
  name: 'SVT',
  pages: [
    { description: 'Supraventrikulaarinen takykardia eli SVT on rytmihäiriö, jossa sydämen rytmi on normaalia fysiologista sinusrytmiä nopeampi. SVT vaatii syntyäkseen tai pysyäkseen yllä sydämen eteisiä tai eteis-kammiosolmuketta tai niitä molempia. Tavallisimmin kohtaus alkaa äkillisesti ja myös loppuu melko äkkiä. SVT-kohtaus saattaa kestää lyhimmillään muutamia kymmeniä sekunteja ja pisimmillään tunteja tai päiviä. ', },
    { description: 'SVT on nopeavauhtinen takykardia, yli 200 kertaa minuutissa. Tämä saattaa varsinkin sydänsairaalla johtaa angina pectoris –kohtaukseen, tajuttomuuteen tai muuhun rytmihäiriöön, kuten esimerkiksi eteisvärinään.\nSVT-kohtaukselle on tavallista, että se alkaa jonkin vagaalista ärsytystä aiheuttavan liikkeen seurauksena, kuten esimerkiksi kumartuessa, yskiessä, syödessä, haukotellessa, pelästyessä tai sitten kovan fyysisen suorituksen jälkeen, jolloin sympaattinen tasapaino muuttuu. ', },
    { image: path + '14_svt/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '14_svt/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '14_svt/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 160,
      graph: path + '14_svt/graph.png',
      description: '-Säännöllinen rytmi\n-Syketaso nopea (140-240krt/min.)\n-P-aalto piiloutuu QRS-kompleksin alle\n-QRS-kompleksi on yleensä kapea'
    }
  ]
},
{
  name: 'Henkeä uhkaavat iskettävät rytmit',
  pages: [
    { image: path + 't04_henkea_uhkaavat/2.png' },
  ]
},
{
  id: 28,
  name: 'Kammiotakykardia eli VT',
  pages: [
    { description: 'Kammiotakykardia eli VT määritellään leveäkomplesiseksi takykardiaksi, johon kuuluu vähintään kolme perättäistä kammiolyöntiä (VES), joiden taajuus on yli 120 kertaa minuutissa. Kammiotakykardiassa QRS-kompleksit ovat leveät ja niiden muoto on epänormaali, P-aaltoja on yleensä vaikea erottaa. Kammiotakykardioiden syntyalue on kammiolihaksessa. Erikoistapauksina voidaan pitää takykardioita, jotka syntyvät johtoradan kammionpuoleisella alueella.', },
    { image: path + '15_vt/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '15_vt/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '15_vt/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 180,
      graph: path + '15_vt/graph.png',
      description: '-QRS-heilahdukset ovat leveät\n-QRS-heilahdusten muoto on epänormaali\n-QRS-heilahduksen ja P-aallon välinen suhde: syketaajuus yli 120 krt/min.'
    }
  ]
},
{
  id: 29,
  name: 'Kammiovärinä eli VF',
  pages: [
    { description: 'Kammiovärinä eli VF on yleisin sydänpysähdyksen aiheuttava rytmihäiriö, jonka taajuus on 250 – 600 lyöntiä minuutissa. Kammiovärinä voidaankin määritellä tilaksi, jossa kammiolihaksen eri osat aktivoituvat toisistaan riippumatta. Kammiovärinässä sydämen sähköinen toiminta on täysin kaoottinen, joka näkyy EKG:ssä epäsäännöllisenä, kaoottisena ja epänormaaleina heilahduksina, joiden koko ja leveys vaihtelevat. Kammiovärinässä sydän lakkaa pumppaamasta verta noin 10 sekunnin kuluttua, jota seuraa kliininen sydämenpysähdys ja tajuttomuus.  ', },
    { description: 'Mikäli rytmihäiriötä ei saada käännettyä 3-5 minuutin kuluessa, potilas yleensä menehtyy. Ainoa tehokas hoito on synkronoimaton defibrillaatio 200 – 300 J. PPE:tä (painelu-puhalluselvytys) tulee jatkaa kunnes normaali rytmi on palautunut tai elvytys päätetään lopettaa tuloksettomana. Kammiovärinä liittyy yleensä sepelvaltimotautiin tai akuuttiin sydäninfarktiin sekä sen jälkitilaan. Myös rytmihäiriöt kuten kammiotiheälyöntisyys tai nopea eteisvärinä voivat johtaa kammiovärinään. ', },
    { image: path + '16_vf/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 1,
      graph: path + '16_vf/graph.png',
      description: '-Epäsäännölliset, kaoottiset ja epänormaalit heilahdukset, joiden koko ja leveys vaihtelevat\n-Syketaajuus on 250-600 krt/min'
    }
  ]
},
{
  id: 30,
  name: 'Kääntyvien kärkien kammiotakykardia eli Torsades de pointes (TDP)',
  pages: [
    { description: 'Kääntyvien kärkien kammiotakykardia on vaarallinen kammioperäinen rytmihäiriö, jossa kammioheilahduksen sähköinen akseli kiertää sukkulamaisesti lyönnistä toiseen. Kääntyvien kärkien kammiotakykardian muotoja ovat perinnöllinen sekä hankittu pitkä QT –oireyhtymä. Periytyvässä muodossa poikkeavuus on solutasolla, kun taas hankittu muoto voi johtua eri sairauksista, QT-aikaa pidentävästä lääkityksestä tai kaliumin ja magnesiumin puutteesta. EKS:ssä on pidentynyt QT-aika ja kääntyvien kärkien takykardia, joka voi vaihdella sinusrytmin kanssa edestakaisin.', },
    { description: 'Kammiolepatus on hyvin tiheä, eikä heilahduksissa erotu diastolevaihetta. Heilahdus voi harvoin olla myös yhdenmuotoinen. Kammion syketaajuus voi olla 150 – 230 lyöntiä minuutissa. Pitkittynyt takykardiakohtaus voi aiheuttaa tajuttomuuskohtauksen ja joskus johtaa jopa kammiovärinän kautta sydämenpysähdykseen. Potilas voi menehtyä, ellei hän pääse pikaisesti hoitoon.', },
    { image: path + '17_tdp/1.png',
      description: 'Tallenne potilasmonitorilta'
    },
    { heartRate: 0,
      graph: path + '17_tdp/graph.png',
      description: '-Kammioheilahduksen sähköinen akseli kiertää sukkulamaisesti lyönnistä toiseen\n-Kammion syketaajuus voi olla 150-230 krt/min.'
    }
  ]
},
{
  name: 'Henkeä uhkaavat, ei iskettävät rytmit',
  pages: [
    { image: path + 't04_henkea_uhkaavat/1.png' },
  ]
},
{
  id: 32,
  name: 'Asystole eli ASY & sykevälikatkos',
  pages: [
    { description: 'Sydämenpysähdys ja hengityksen pysähtyminen johtavat hoitamattomina elimistön toiminnan palautumattomiin muutoksiin. Tällöin sydämen pumppaustoiminta lakkaa, verenkierto pysähtyy ja elimistöön syntyy hapenpuute. Hapenpuute vaikuttaa ensimmäisenä aivojen toimintaan ja tajuttomuus seuraa 10–15 sekunnin kuluessa. Jos aivojen verenkierto ei palaudu muutamassa minuutissa, alkaa kehittyä pysyviä muutoksia. ', },
    { description: 'Sydämen oman verenkierron, sepelvaltimokierron häiriön seurauksena sydämen supistumistoiminta lakkaa ja viimein myös sähköinen toiminta pysähtyy. Asystolesta puhutaan silloin kun sydän ei lyö enää. Eli jos sydän lyö vaikka 10 sekunnin jälkeen, niin voidaan puhua 10s. sykevälikatkoksesta.', },
    { image: path + '18_asy/1.png',
      description: 'Simulaatiomonitorin tallenne'
    },
    { heartRate: 0,
      graph: path + '18_asy/graph.png',
      description: '-Asystolesta puhutaan silloin kun sydän ei lyö enää\n-Tunnistetaan viivasta monitorilla'
    }
  ]
},
{
  id: 33,
  name: 'Agonaalinen rytmi',
  pages: [
    { description: 'Kuolemaa edeltävä rytmihäiriö,  joka on peräisin kammioiden alueelta. Hyvin hidas rytmi, alle 20-30 lyöntiä minuutissa, jopa 10-20 lyöntiä minuutissa. QRS-kompleksi matala ja leveä. Agonaalinen rytmi on merkki laajasta sydänlihaksen vauriosta, mikä johtaa sydänpysähdykseen (asystoleen).', },
    { image: path + '19_agonaalinen/1.png',
      description: 'Potilasmonitorin tallenne'
    },
    { heartRate: 15,
      graph: path + '19_agonaalinen/graph.png',
      description: '-Erittäin laajat QRS-heilahdukset, jotka ovat muodoltaan matalia\n-Syketaso yleensä 10-20 krt/min.\n-Ilmenee sydämenpysähdyksen loppuvaiheessa'
    }
  ]
},
{
  id: 34,
  name: 'PEA',
  pages: [
    { description: 'Sykkeetön rytmi, jossa sähköinen toiminta jatkuu, mutta mekaaninen supistus puuttuu, joten näin ollen tunnistettava pulssi puuttuu. QRS-heilahdukset usein leveitä ja epämuotoisia. Sydän ei pumppaa verta. On ei-defibrilloitava rytmi.', },
    { image: path + '20_pea/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '20_pea/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '20_pea/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 30,
      graph: path + '20_pea/graph.png',
      description: '-Sykkeetön rytmi, jolloin pulssia ei tunnu\n-QRS-heilahdukset ovat usein leveitä ja epämuotoisia\n-Syketaajuudeltaan yleensä harva, noin 25-50 krt/min.'
    }
  ]
},
{
  name: 'Korvausrytmit',
  pages: [
    { description: 'Korvausrytmit ovat sydämen turvaverkko, joten niiden toimintaa ei saa estää.\n\nKorvausrytmit kehittyvät katkoksen tai bradykardian vuoksi.\n\nSydämessä on useita toissijaisia ektooppisia tahdistinalueita, jotka voivat tahdistaa sydämen toimintaa mikäli sen johtuminen tai syntyminen estyy jostain syystä.' }
  ]
},
{
  id: 36,
  name: 'Junktionaalinen rytmi eli nodaali rytmi',
  pages: [
    { description: 'Jos junktioon ei SA-katkoksen tai sinuspysähdyksen vuoksi tule impulsseja, se alkaa tahdistaa sydämen toimintaa.\n\nSyntyvät QRS-kompleksit ovat muodoltaan samanlaisia kuin normaalistikin, mutta niiden taajuus on pienempi, noin 40-60 lyöntiä minuutissa.\n\nJunktionaaliselle rytmille on tyypillistä, että P-aallon sähköinen polariteetti kääntyy päinvastaiseen sinusrytmin P-aaltoon verrattuna.\n\nInvertoitunut P-aalto saattaa esiintyä QRS-kompleksin edellä, jäljessä tai siihen sulautuneena. ', },
    { image: path + '21_junktionaalinen/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '21_junktionaalinen/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '21_junktionaalinen/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 25,
      graph: path + '21_junktionaalinen/graph.png',
      description: '-Invertoitunut P-aalto saattaa esiintyä QRS-heilahduksen edellä, jäljessä tai siihen sulautuneena\n-QRS-heilahdukset ovat muodoltaan samanlaisia kuin normaalisti, mutta niiden taajuus on pienempi, noin 40-60 krt/min.\n-Useimmiten säännöllinen rytmi'
    }
  ]
},
{
  name: 'Tahdistinrytmit',
  pages: [
    {image: path + 't06_tahdistinrytmit/1.png' },
    {description: 'Tahdistimen perustehtävä on saada aikaan sydämen supistus, jos sitä ei tapahdu luonnollisesti.'}
  ]
},
{
  id: 38,
  name: 'Eteistahdistus',
  pages: [
    { description: 'Tahdistimen perustehtävä on saada aikaan sydämen supistus, jos sitä ei tapahdu luonnollisesti. Eteistahdistin on nimensä mukaisesti eteisiä tahdistava ja tunnistava tahdistin. EKG:ssä tahdistimen antama jännitepiikki näkyy tahdistuspiikkinä ja sitä seuraa P-aalto. ', },
    { image: path + '22_eteistahdistus/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '22_eteistahdistus/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '22_eteistahdistus/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 68,
      graph: path + '22_eteistahdistus/graph.png',
      description: '-Tahdistimen antama jännitepiikki näkyy tahdistuspiikkinä ja sitä seuraa P-aalto'
    }
  ]
},
{
  id: 39,
  name: 'Kammiotahdistus',
  pages: [
    { description: 'Kammiotahdistin tahdistaa ja tunnistaa vain kammioita. Kammiotahdistusta käytetään yleensä tilanteissa, joissa tahdistuksen tarve on hyvin vähäistä. Sydän toimii valtaosan ajasta normaalisti ja tahdistusta tarvitaan vain tarvittaessa hetkelliset estämään hidaslyöntisyyskohtaukset. Tahdistimen antama jännitepiikki näkyy EKG:ssä tahdistuspiikkinä ja sitä seuraa QRS-kompleksi.', },
    { image: path + '23_kammiotahdistus/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '23_kammiotahdistus/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '23_kammiotahdistus/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 76,
      graph: path + '23_kammiotahdistus/graph.png',
      description: '-Tahdistimen antama jännitepiikki näkyy tahdistuspiikkinä ja sitä seuraa QRS-heilahdus'
    }
  ]
},
{
  id: 40,
  name: 'Eteis-kammiotahdistus',
  pages: [
    { description: 'Eteis-kammiotahdistin tahdistaa ja tunnistaa nimensä mukaisesti eteisiä ja kammioita. Tätä kutsutaan myös fysiologiseksi tahdistimeksi. Eteis-kammiotahdistinta käytetään potilailla, joilla on eteis-kammiojohtumisen häiriö. Tahdistimen antama jännitepiikki näkyy EKG:ssä tahdistinpiikkinä ja sitä seuraa P-aalto ja QRS-kompleksi. ', },
    { image: path + '24_eteis-kammiotahdistus/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '24_eteis-kammiotahdistus/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '24_eteis-kammiotahdistus/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 63,
      graph: path + '24_eteis-kammiotahdistus/graph.png',
      description: '-Tahdistimen antama jännitepiikki näkyy tahdistuspiikkinä ja sitä seuraa P-aalto ja QRS-heilahdus'
    }
  ]
},
{
  name: 'Eteis-kammiojohtumisen häiriöt',
  pages: [
    { description: 'Sähköisen ärsykkeen johtuminen eteisistä kammioihin on poikkeavaa eteis-kammiosolmukkeen häiriöissä.\n\nJohtuminen on hidastunutta tai osa tai kaikki eteisistä tulevista sähköärsykkeistä jäävät johtumatta., joten nämä johtavat sydämen toiminnan taukoihin.' },
    { description: 'Eteis-kammiokatkoksessa häiriö voi olla eteis-kammiosolmukkeessa, johtoradoissa tai Hisin kimpussa.\n\nEteis-kammiokatkokset luokitellaan kolmeen eri luokkaan niiden vakavuusasteen mukaan.\n\nEteis-kammiokatkos voi olla joko hankittu tai synnynnäinen. Sydänsairaudet kuten esimerkiksi iskeeminen sydänsairaus, akuutti sydäninfarkti, läppävika, reumasairaus ja sydänleikkauksen jälkitila voivat vaurioittaa eteis-kammiojohtumista.'}
  ]
},
{
  id: 42,
  name: 'I asteen eteis-kammiokatkos',
  pages: [
    { description: 'Ensimmäisen asteen eteis-kammiokatkoksessa kaikki eteisaallot johtuvat kammioihin, mutta niiden herätteen kulku viivästyy eteis-kammiosolmukkeessa. Ensimmäisen asteen eteis-kammiokatkoksessa PQ-aika on yli 200ms. Joskus PQ-aika saattaa olla pidempi kuin PP-väli, jolloin kammioon johtunut P-aalto nähdään EKG:ssä ennen edeltävää QRS-heilahdusta.', },
    { description: 'QRS-heilahdus on tavallisesti normaalin muotoinen ja kapea. Mikäli QRS-heilahdus on leveä, haarakatkoksen tapainen, johtuminen on usein hidastunut Hisin kimpussa. Joten katkos voi olla osa muuta sydänsairautta. ', },
    { image: path + '25_i-asteen_av-katkos/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '25_i-asteen_av-katkos/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 53,
      graph: path + '25_i-asteen_av-katkos/graph.png',
      description: '-PQ-aika pitenee asteittain kunnes yksittäinen P-aalto jää johtumatta kammioihin'
    }
  ]
},
{
  id: 43,
  name: 'II asteen AV-katkos',
  pages: [
    { description: 'Toisen asteen eteis-kammiokatkoksessa vain osa eteisaalloista johtuu kammioihin.\n\nKatkos voi olla joko Mobitz 1- tai 2-tyyppinen. Molemmissa tapauksissa katkos on ajoittainen ja toistuva sekä se voi aiheuttaa useita peräkkäisiä johtumattomia P-aaltoja.\n\nMobitz 1 –tyypin katkoksessa (Wenckebach-katkos) PQ-aika pitenee asteittain, kunnes yksi P-aalto jää johtumatta kammioihin. Johtumishäiriö on solmukkeessa, sen varsinaisessa runko-osasssa. Tämä katkos katsotaan hyvänlaatuiseksi ja se aiheuttaa harvoin vaikeita oireita. Mobitz 1 voi esiintyä sekä tervesydämisillä että sydänsairailla.', },
    { description: 'Mobitz 2 -tyypin toisen asteen katkoksessa kaikki P-aallot eivät johdu kammioon. Tavallista on, että P-aallot tulevat säännöllisesti ja aina yhtä pitkä PQ-aika ennen kammioon johtumista.\n\nJohtumishäiriö paikantuu Hisin kimpun alkuosaan tai sen jälkeen. QRS-heilahdus on usein leveä ja se voi olla haarakatkoksen muotoinen. Mobitz 2 –katkos aiheuttaa hidaslyöntisyyttä, mutta syke on säännöllinen. Tämä tila ei parane itsestään ja se enteilee täydellistä eteis-kammiokatkosta.', },
  ]
},
{
  name: 'II asteen AV-katkos Mobitz 1 eli Wenckebach',
  pages: [
    { image: path + '26_ii-asteen_av-katkos_mobitz_1/1.png',
      description: '12-kytkentäinen simulaatiomonitorin EKG-tallenne'
    },
    { heartRate: 64,
      graph: path + '26_ii-asteen_av-katkos_mobitz_1/graph.png',
      description: '-Pidentynyt PQ-aika, yli 200 ms\n-QRS-heilahdus normaalin muotoinen ja kapea\n-Jokaista eteisaktivaatiota (P-aalto) seuraa kammioaktivaatio (QRS-kompleksi)'
    }
  ]
},
{
  name: 'II asteen AV-katkos Mobitz 2',
  pages: [
    { image: path + '27_ii-asteen_av-katkos_mobitz_2/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '27_ii-asteen_av-katkos_mobitz_2/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '27_ii-asteen_av-katkos_mobitz_2/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 61,
      graph: path + '27_ii-asteen_av-katkos_mobitz_2/graph.png',
      description: '-P-aallot tulevat säännöllisesti\n-Kaikki P-aallot eivät johdu kammioon\n-PQ-aika on aina yhtä pitkä ennen kammioon johtumista\n-QRS-heilahdus on usein leveä ja se voi olla haarakatkoksen muotoinen'
    }
  ]
},
{
  id: 46,
  name: 'III asteen eteis-kammiokatkos eli totaaliblokki',
  pages: [
    { description: 'Kolmannen asteen eteis-kammiokatkoksessa (totaaliblokissa) ei yksikään eteisaalto johdu kammioon. Kammioiden oma luontainen hidas tahdistusrytmi ylläpitää korvaavaa pumppaustoimintaa. Kolmannen asteen eteis-kammiokatkoksessa rytmi on tasainen ja syke voi olla niin alhainen, että se ei pysty ylläpitämään riittävää verenkiertoa. ', },
    { description: 'Kammioheilahdus on useimmiten leveä, sillä korvausrytmi syntyy kammiolihaksen alueella. Joskus korvausrytmi on kapea ja tällöin johtumishäiriön syntyalue sijaitsee lähellä Hisin kimppua. Kolmannen asteen eteis-kammiokatkos eli täydellinen eteis-kammiokatkos voi olla synnynnäinen tai hankittu. ', },
    { image: path + '28_iii-asteen_av-katkos/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '28_iii-asteen_av-katkos/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '28_iii-asteen_av-katkos/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 30,
      graph: path + '28_iii-asteen_av-katkos/graph.png',
      description: '-Yksikään eteisaalto EI johdu kammioon\n-Rytmi on tasainen, syketaso tyypillisesti noin 30 krt/min. (ei riitä verenkierron ylläpitoon)\n-Kammioheilahdus on useimmiten leveä'
    }
  ]
},
{
  name: 'Haarakatkokset',
  pages: [
    {description: 'Sydämen haarakatkokset liittyvät sydämen sähköiseen toimintaan.\n\nHaarakatkoksessa kammion johtorata ei johda normaalista sähköimpulssia kammion lihakseen.\n\nHaarakatkos voidaan todeta helposti sydänfilmissä.'}
  ]
},
{
  id: 48,
  name: 'Oikea haarakatkos eli RBBB',
  pages: [
    { description: 'Oikeassa haarakatkoksessa eli RBBB (Right bundle branch block) herätteen kulku katkeaa Hisin kimpun oikeassa haarassa.\n\nOikea kammio aktivoituu myöhästyneesti vasemman kammion aktivoitumisen seurauksena.\nNäin ollen syntyy oikealle haarakatkokselle ominainen R΄-aalto oikean puolen rintakytkentöihin.\n\nOikea haarakatkos on yleensä helppo tunnistaa.\nImpulssin kulku on estynyt Hisin kimpun oikeassa haarassa. seurauksena on QRS-kompleksin leventyminen (>0,12s).\n\nRBBB ei vaikeuta juurikaan infarktimuutosten havaitsemista EKG:ssä. ', },
    { image: path + '29_rbbb/1.png',
      description: 'EKG-tallenne'
    },
    { image: path + '29_rbbb/2.png',
      description: 'Simulaatiomonitorin tallenne'
    },
    { heartRate: 63,
      graph: path + '29_rbbb/graph.png',
      description: "-Heilahduksen kesto yli 0,12s\n-V1-kytkennässä nähdään M-kirjainta muistuttava tyypillinen rsR' tai rSR' muoto\nV6 kytkennässä nähdään leveä S-aalto"
    }
  ]
},
{
  id: 49,
  name: 'Vasen haarakatkos eli LBBB',
  pages: [
    { description: 'Vasemman puolen johtoradan katkos eli LBBB (Left bundle branch block) on usein merkki alkavasta sydänlihasviasta, kuten esimerkiksi sepelvaltimotauti ja sydäninfarkti.\n\nMikäli sydänfilmissä todetaan vasen haarakatkos, niin tehdään muita sydäntutkimuksia mahdollisten sydänsairauksien löytämiseksi. ', },
    { description: 'Vasen haarakatkos syntyy, kun herätteen eteneminen pysähtyy Hisin kimpun vasemmassa päähaarassa tai sen kummassakin haarakkeessa.\n\nAkuutissa sydäninfarktissa alkunsa saanut vasen haarakatkos merkitsee isoa vauriota sydänlihaksessa sekä huonoa ennustetta.\n\nVasen haarakatkos voi vaikeuttaa vasemman kammion pumppaustoimintaa merkittävästi. ', },
    { description: 'Vasen haarakatkos vaikeuttaa akuutin sydäninfarktin EKG-muutosten tulkintaa ja havaitsemista, sekä se peittää kammiohypertrofian muutokset melko tehokkaasti.\n\nVasemmassa haarakatkoksessa QRS-heilahduksen kesto on ≥ 120ms.\n\nQRS-heilahduksen alkuaktivaatio oikeanpuoleisissa rintakytkennöissä voi olla rS- tai QS-tyyppinen sen mukaan, ehtiikö kammioväliseinä aktivoitua ollenkaan vasemmalta vai tapahtuuko se kokonaan oikealta vasemmalle.\n\nST-vajoama ja T-aallon suunta ovat vastakkaisia QRS-suunnalle.', },
    { image: path + '30_lbbb/1.png',
      description: 'EKG-tallenne'
    },
    { image: path + '30_lbbb/2.png',
      description: 'Simulaatiomonitorin tallenne'
    },
    { heartRate: 60,
      graph: path + '30_lbbb/graph.png',
      description: '-Heilahduksen kesto on yli 0,12s\n-V1 kytkennässä nähdään syvä rS tai QS\n-V6 kytkennässä muoto muistuttaa M-kirjainta'
    }
  ]
},
{
  name: 'ST-tason muutokset',
  pages: [
    { image: path + 't08_st-tason_muutokset/1.png' },
    { description: 'Sydäninfarkti luokitellaan EKG:n perusteella ST-nousuinfarktiksi (STEMI) tai sydäninfarktiksi ilman ST-nousua (NSTEMI).\n\nSydäninfarktin työdiagnoosi perustuu EKG-löydöksiin sekä kliiniseen taudinkuvaan.\n\nEKG:n merkitys on korostunut hoitomuodon valinnassa. ' },
  ]
},
{
  id: 51,
  name: 'ST-nousu ja sinusrytmi',
  pages: [
    { description: 'EKG:ssä ST-taso nousee perusviivan (joko PR-välin tai TP-välin) yläpuolelle.\nST-tason nousua oltava vähintään kahdessa anatomisesti vierekkäisissä kytkennöissä (tavallisesti V2 ja V3 tai raajakytkennöissä). \nVähintään 1mm nousut muissa kytkennöissä.\n\nST-nousujen mittauskohta on 2-3 pikkuruutua S-aallon alusta T-aaltoon päin.\nST-taso on yleensä muodoltaan kaareva ja muistuttaa kirkon kattoa.\nST-nousuun liittyy tavallisesti vastakkaisia ST-tason laskuja muissa kytkennöissä.', },
    { image: path + '31_st-nousu/1.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '31_st-nousu/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '31_st-nousu/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 74,
      graph: path + '31_st-nousu/graph.png',
      description: '-ST-taso nousee perusviivasta\n-T-aallon muutokset\n-QRS-heilahdusten muutokset'
    }
  ]
},
{
  id: 52,
  name: 'ST-lasku ja sinusrytmi',
  pages: [
    { image: path + '32_st-lasku/1.png',
      description: 'EKG:ssä ST-taso painuu perusviivan alle.\n\nST-laskujen syvyys ja laajuus viittaavat vakavaan hapenpuutteeseen sydämessä.\n\nUusi ja yli 0,5 mm:n suuruinen ST-lasku (J-pisteestä mitattuna) kahdessa rinnakkaisessa kytkennässä määritellään ST-tason laskuksi.',
    },
    { image: path + '32_st-lasku/2.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '32_st-lasku/3.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { image: path + '32_st-lasku/4.png',
      description: '12-kytkentäinen EKG-tallenne'
    },
    { heartRate: 77,
      graph: path + '32_st-lasku/graph.png',
      description: '-ST-taso laskee perusviivasta\n-QRS-heilahduksen muutokset'
    }
  ]
},
{
  id: 53,
  name: 'T-inversio',
  pages: [
    { image: path + '33_t-inversio/0.png',
      description: 'T-inversiolla tarkoitetaan T-aallon kääntymistä alaspäin eli T-aalto muuttuu negatiiviseksi.\nT-aalto kuvaa sydämen kammioiden palautumisvaihetta.\nTavallisesti T-inversio näkyy kytkennöissä V4-V6 tai raajakytkennöissä ja sitä tulkittaessa tarkastellaan rinnakkaisia kytkentöjä.\nNegatiivinen T-aalto voi olla matala tai syvä.', },
    { image: path + '33_t-inversio/1.png',
      description: 'EKG-tallenne potilasmonitorilta'
    },
    { heartRate: 65,
      graph: path + '33_t-inversio/graph.png',
    }
  ]
},
{
  id: 54,
  name: 'Testaa EKG:n tulkintataitosi',
  pages: [
    { button: '' }
  ]
}
];