// ============================================================
// QUIZ DATA
// Each post is one question. The 3 posts below are INVENTED
// DEMO examples - replace them with real, fact-checked cases
// (Factual.ro, AFP Fact Check, Veridica) in Phase 2.
// ============================================================

const POSTS = [
  {
    id: 1,
    platform: "Facebook",
    account: { name: "Știri Urgente 24", handle: "@stiriurgente24" },
    text: {
      ro: "DEMO: Ministerul a anunțat că toate școlile se închid în noiembrie din cauza caniculei! Distribuie înainte să fie șters!",
      en: "DEMO: The Ministry announced that all schools will close in November because of a heatwave! Share before it gets deleted!"
    },
    isReal: false,
    explanation: {
      ro: "Semnale de alarmă: o caniculă în noiembrie e foarte puțin probabilă, nu există niciun link către un comunicat oficial, iar „Distribuie înainte să fie șters!” e o tehnică clasică de a te face să reacționezi fără să verifici.",
      en: "Red flags: a heatwave in November is very unlikely, there is no link to an official statement, and \"Share before it gets deleted!\" is a classic trick to make you react without checking."
    },
    source: {
      type: { ro: "Pagină anonimă", en: "Anonymous page" },
      owner: { ro: "Necunoscut", en: "Unknown" },
      info: {
        ro: "Pagina nu are date de contact, nu numește un redactor și a fost creată recent. Nu se știe cine o controlează.",
        en: "The page has no contact details, names no editor and was created recently. It is unknown who controls it."
      },
      link: ""
    }
  },
  {
    id: 2,
    platform: "Instagram",
    account: { name: "Meteo Dobrogea", handle: "@meteo.dobrogea" },
    text: {
      ro: "DEMO: Cod galben de ploi în județul Constanța, mâine între 10:00 și 22:00. Detalii pe site-ul ANM.",
      en: "DEMO: Yellow rain warning for Constanța county, tomorrow between 10:00 and 22:00. Details on the national weather service website."
    },
    isReal: true,
    explanation: {
      ro: "Arată credibil: informația e specifică (județ, interval orar), tonul e calm și trimite la sursa oficială, pe care o poți verifica.",
      en: "This looks credible: the information is specific (county, time interval), the tone is calm, and it points to the official source, which you can check."
    },
    source: {
      type: { ro: "Cont local de informare", en: "Local information account" },
      owner: { ro: "DEMO – de completat", en: "DEMO – to be filled in" },
      info: {
        ro: "Aici vor apărea datele reale despre proprietar, luate din Euromedia Ownership Monitor.",
        en: "Real ownership data from the Euromedia Ownership Monitor will appear here."
      },
      link: ""
    }
  },
  {
    id: 3,
    platform: "TikTok",
    account: { name: "Adevărul Ascuns", handle: "@adevarul.ascuns" },
    text: {
      ro: "DEMO: Medicii NU vor să știi asta: un ceai simplu vindecă gripa în 24 de ore!",
      en: "DEMO: Doctors DON'T want you to know this: a simple tea cures the flu in 24 hours!"
    },
    isReal: false,
    explanation: {
      ro: "„Ei nu vor să știi” e o formulă tipică de manipulare: creează un dușman imaginar. Promisiunile de vindecare rapidă și sigură nu au susținere științifică.",
      en: "\"They don't want you to know\" is a typical manipulation formula: it creates an imaginary enemy. Promises of a fast, guaranteed cure have no scientific support."
    },
    source: {
      type: { ro: "Cont de conținut viral", en: "Viral content account" },
      owner: { ro: "Necunoscut", en: "Unknown" },
      info: {
        ro: "Contul câștigă bani din vizualizări și vinde produse în descriere: un motiv financiar pentru titluri șocante.",
        en: "The account earns money from views and sells products in its bio: a financial reason for shocking headlines."
      },
      link: ""
    }
  },
    {
    id: 4,
    platform: "Facebook",
    account: { name: "ProTV Știri Live", handle: "@protv.stiri.live24" },
    text: {
      ro: "DEMO: ȘOC! România a pierdut cu 7-0 în fața Poloniei! Lewandowski a marcat de 5 ori! Click pe link pentru rezumat!",
      en: "DEMO: SHOCK! Romania lost 7-0 to Poland! Lewandowski scored 5 times! Click the link for highlights!"
    },
    isReal: false,
    explanation: {
      ro: "Contul imită o televiziune cunoscută, dar numele și adresa diferă de cele oficiale. „ȘOC!”, scorul exagerat și „click pe link” sunt semne tipice de clickbait sau chiar de link periculos. Verifică direct pe site-ul oficial al televiziunii.",
      en: "The account imitates a well-known TV channel, but its name and handle differ from the official ones. \"SHOCK!\", the exaggerated score and \"click the link\" are typical signs of clickbait or even a dangerous link. Check the channel's official website directly."
    },
    source: {
      type: { ro: "Cont care imită o publicație", en: "Impersonator account" },
      owner: { ro: "Necunoscut", en: "Unknown" },
      info: {
        ro: "Conturile false care copiază numele unor televiziuni reale folosesc încrederea în brand ca să adune click-uri.",
        en: "Fake accounts copying the names of real TV channels exploit trust in the brand to collect clicks."
      },
      link: ""
    }
  }

];
