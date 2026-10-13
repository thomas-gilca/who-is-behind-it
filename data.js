// ============================================================
// QUIZ DATA
// Each post is REWRITTEN in our own words, based on a published
// fact-check (AFP Verificat) or an official warning (DNSC).
// Anonymous pages and private persons get generic names.
//
// Explanations: first draft by Gemini Flash, checked against the
// sources and corrected (see JURNAL-VERIFICARE.md).
// ============================================================


const POSTS = [
  {
    id: 1,
    platform: "Facebook",
    account: { name: "Știri Internaționale", handle: "@stiri.internationale" },
    text: {
      ro: "Peste 120 de pasageri și membri ai echipajului au fost evacuați în Tenerife de pe nava de croazieră MV Hondius, după un focar de hantavirus la bord. OMS precizează că infecția este foarte rară și că nu este vorba de o nouă pandemie.",
      en: "More than 120 passengers and crew members were evacuated in Tenerife from the cruise ship MV Hondius after a hantavirus outbreak on board. The WHO says the infection is very rare and that this is not a new pandemic."
    },
    isReal: true,
    media: { kind: "photo", scene: "ship-evacuation", alt: { ro: "Ilustrație: o navă de croazieră în port, pasageri coborând pe pasarelă", en: "Illustration: a cruise ship in port, passengers walking down the gangway" } },
    explanation: {
      ro: "E reală: numele navei, locul și OMS se pot verifica imediat. Caută „MV Hondius hantavirus” și vei găsi aceeași informație la mai multe agenții de presă independente, ceea ce e un semn bun.",
      en: "It's real: the ship's name, the place and the WHO can all be checked right away. Search for \"MV Hondius hantavirus\" and you'll find the same information from several independent news agencies, which is a good sign."
    },
    source: {
      type: { ro: "Relatare de presă", en: "News report" },
      owner: { ro: "Agenție de presă (exemplu generic)", en: "News agency (generic example)" },
      info: {
        ro: "Evacuarea a avut loc pe 10–11 mai 2026 și a fost confirmată de autorități și de presa internațională. Evenimentul a fost real, dar în jurul lui au circulat și imagini false (vezi o întrebare următoare).",
        en: "The evacuation took place on 10–11 May 2026 and was confirmed by authorities and international media. The event was real, but fake images also circulated around it (see a later question)."
      },
      link: "https://verificat.afp.com/doc.afp.com.B3EW2D2"
    }
  },
  {
    id: 2,
    platform: "Facebook",
    account: { name: "Lumea în Imagini", handle: "@lumea.in.imagini" },
    text: {
      ro: "ÎNAINTE și DUPĂ: râul sacru din Nepal a măturat un oraș întreg. Podurile, casele, totul a dispărut într-o singură noapte. 💔",
      en: "BEFORE and AFTER: Nepal's sacred river swept away an entire town. Bridges, houses, everything vanished in a single night. 💔"
    },
    isReal: false,
    media: { kind: "collage", scene: "river-before-after", image: "images/river-before-after.jpg", alt: { ro: "Imagine generată cu AI: colaj înainte și după cu un oraș pe malul unui râu", en: "AI-generated image: before-and-after collage of a riverside town" } },
    explanation: {
      ro: "E falsă: inundațiile au fost reale, dar colajul a fost generat cu AI. Compară imaginile: distanța dintre poduri și poziția lor față de munte diferă, deși ar trebui să fie același loc. Un eveniment real poate fi ilustrat cu o imagine falsă.",
      en: "It's fake: the floods were real, but the collage was generated with AI. Compare the two images: the distance between the bridges and their position relative to the mountain differ, even though it should be the same place. A real event can be illustrated with a fake image."
    },
    source: {
      type: { ro: "Pagină de conținut viral", en: "Viral content page" },
      owner: { ro: "Necunoscut", en: "Unknown" },
      info: {
        ro: "Inundațiile din Nepal din august 2026 au fost reale și grave, dar acest colaj „înainte și după” a fost generat cu AI. Un instrument de detectare a găsit în imagini un filigran invizibil lăsat de generatorul de imagini. Același colaj a circulat în mai multe limbi.",
        en: "The August 2026 floods in Nepal were real and severe, but this \"before and after\" collage was generated with AI. A detection tool found an invisible watermark left by the image generator. The same collage circulated in several languages."
      },
      link: "https://verificat.afp.com/doc.afp.com.C6WE99E"
    }
  },
  {
    id: 3,
    platform: "Facebook",
    account: { name: "Breaking News Mondial", handle: "@breaking.mondial" },
    text: {
      ro: "🌋 IMAGINI ȘOCANTE: vulcanul Anak Krakatau din Indonezia a erupt chiar lângă un cartier! Oamenii fug din case, sute de mii de pasageri sunt blocați în aeroporturi. (videoclip)",
      en: "🌋 SHOCKING FOOTAGE: Indonesia's Anak Krakatau volcano erupted right next to a neighbourhood! People are fleeing their homes, hundreds of thousands of passengers are stuck in airports. (video)"
    },
    isReal: false,
    media: { kind: "video", scene: "volcano-town", image: "images/volcano-town.jpg", seconds: 22, alt: { ro: "Imagine generată cu AI: un vulcan care erupe chiar în spatele unei străzi cu case", en: "AI-generated image: a volcano erupting right behind a street with houses" } },
    explanation: {
      ro: "E falsă: Anak Krakatau e pe o insulă nelocuită, deci nu are niciun cartier lângă el. În clip, o persoană dispare brusc, iar mâinile celor care fug sunt deformate, semne tipice de video generat cu AI. Erupțiile au fost reale; amestecul de adevăr și fals face postarea convingătoare.",
      en: "It's fake: Anak Krakatau is on an uninhabited island, so there is no neighbourhood next to it. In the clip, a person suddenly disappears and the hands of the people running are distorted, typical signs of AI-generated video. The eruptions were real; mixing truth and fiction is what makes the post convincing."
    },
    source: {
      type: { ro: "Pagină care redistribuie clipuri virale", en: "Page reposting viral clips" },
      owner: { ro: "Necunoscut", en: "Unknown" },
      info: {
        ro: "Erupțiile au fost reale, dar clipul a fost generat cu AI. Autorul lui, un creator din Canada, l-a etichetat clar ca „generat cu AI”. Paginile care l-au redistribuit au șters eticheta și l-au prezentat ca filmare reală.",
        en: "The eruptions were real, but the clip was generated with AI. Its author, a creator from Canada, clearly labelled it \"AI-generated\". The pages that reposted it removed the label and presented it as real footage."
      },
      link: "https://verificat.afp.com/doc.afp.com.C8G33ZQ"
    }
  },
  {
    id: 4,
    platform: "Instagram",
    account: { name: "Jurnal de pescuit", handle: "@creator.din.jakarta" },
    text: {
      ro: "Am filmat erupția vulcanului Anak Krakatau de pe barca noastră de pescuit, noaptea, pe 4 septembrie. Vulcanul e pe o insulă în mijlocul mării, așa că de pe uscat nu se vedea nimic. Când a început să cadă material pe barcă, am plecat imediat.",
      en: "We filmed the Anak Krakatau eruption from our fishing boat at night on 4 September. The volcano is on an island in the middle of the sea, so nothing could be seen from land. When material started falling on the boat, we left immediately."
    },
    isReal: true,
    media: { kind: "video", scene: "volcano-sea", seconds: 41, alt: { ro: "Ilustrație: un vulcan pe o insulă, văzut noaptea de pe o barcă de pescuit", en: "Illustration: a volcano on an island, seen at night from a fishing boat" } },
    explanation: {
      ro: "E reală: detaliile se potrivesc cu geografia (vulcanul e pe o insulă și nu se vede de pe uscat), iar jurnaliștii AFP au vorbit direct cu autoarea. Compară cu postarea anterioară: aici nu apar case lângă vulcan.",
      en: "It's real: the details match the geography (the volcano is on an island and can't be seen from land), and AFP journalists spoke directly to the author. Compare it with the previous post: here there are no houses next to the volcano."
    },
    source: {
      type: { ro: "Martor direct (creatoare de conținut)", en: "Eyewitness (content creator)" },
      owner: { ro: "Persoană privată (nume înlocuit)", en: "Private person (name replaced)" },
      info: {
        ro: "Autoarea a confirmat jurnaliștilor AFP unde, când și cum a filmat. Detaliile se potrivesc cu geografia reală: vulcanul se află pe o insulă nelocuită, departe de orice cartier.",
        en: "The author confirmed to AFP journalists where, when and how she filmed. The details match the real geography: the volcano is on an uninhabited island, far from any neighbourhood."
      },
      link: "https://verificat.afp.com/doc.afp.com.C8G33ZQ"
    }
  },
  {
    id: 5,
    platform: "Facebook (reclamă plătită)",
    account: { name: "Pagină cu 3 milioane de urmăritori", handle: "Sponsorizat" },
    text: {
      ro: "Românii au descoperit cum câștigă mii de lei pe lună de acasă, fără niciun risc. Citește articolul complet pe site-ul nostru de știri! 👉",
      en: "Romanians have discovered how to earn thousands of lei a month from home, with zero risk. Read the full article on our news site! 👉"
    },
    isReal: false,
    media: { kind: "ad", scene: "money-ad", image: "images/money-ad.jpg", alt: { ro: "Imagine generată cu AI: reclamă cu un telefon și promisiunea „+5.000 lei pe lună”", en: "AI-generated image: ad with a phone and the promise \"+5,000 lei a month\"" } },
    explanation: {
      ro: "E falsă: nicio investiție reală nu promite „mii de lei fără niciun risc”. Înainte să dai click, uită-te la adresa site-ului: escrocii copiază aspectul unor ziare cunoscute, dar pe alt domeniu. Nu completa date bancare pe un site la care ai ajuns dintr-o reclamă.",
      en: "It's fake: no real investment promises \"thousands of lei with zero risk\". Before you click, look at the website address: scammers copy the look of well-known newspapers, but on a different domain. Never enter bank details on a site you reached through an ad."
    },
    source: {
      type: { ro: "Pagină furată (compromisă)", en: "Hijacked (compromised) page" },
      owner: { ro: "Escroci necunoscuți", en: "Unknown scammers" },
      info: {
        ro: "Pagina nu mai postase nimic din 2023, apoi a început brusc să plătească reclame. Linkul ducea la un site care copia aspectul unui ziar românesc cunoscut, dar pe alt domeniu, și cerea date personale și bancare. Un cont mare nu e neapărat un cont de încredere: nu știi cine îl controlează acum.",
        en: "The page had posted nothing since 2023, then suddenly started paying for ads. The link led to a site that copied the look of a well-known Romanian newspaper, but on a different domain, and asked for personal and banking data. A big account is not necessarily a trustworthy one: you don't know who controls it now."
      },
      link: "https://www.g4media.ro/directoratul-national-de-securitate-cibernetica-a-identificat-o-tentativa-de-frauda-propagata-printr-o-pagina-de-facebook-cu-milioane-de-urmaritori.html"
    }
  },
  {
    id: 6,
    platform: "Facebook",
    account: { name: "Trezirea Românilor", handle: "@adevarul.nespus" },
    text: {
      ro: "Uitați-vă atent la poză: toți poartă costume de protecție, doar cameramanul e în haine obișnuite. Hantavirusul nu atacă cameramanii? Totul e regizat! (fotografie cu o evacuare pe o navă)",
      en: "Look closely at the photo: everyone wears protective suits, only the cameraman is in normal clothes. Hantavirus doesn't attack cameramen? It's all staged! (photo of an evacuation from a ship)"
    },
    isReal: false,
    media: { kind: "photo", scene: "ship-cameraman", image: "images/ship-cameraman.jpg", alt: { ro: "Imagine generată cu AI: oameni în costume de protecție și un cameraman în haine obișnuite", en: "AI-generated image: people in protective suits and a cameraman in normal clothes" } },
    explanation: {
      ro: "E falsă: fotografia nu are legătură cu hantavirusul. Prin căutare inversă de imagini, fact-checkerii au găsit-o într-un articol din 2025 despre un exercițiu medical într-un port din Spania. O poză veche, scoasă din context, nu dovedește că un eveniment real a fost „regizat”.",
      en: "It's fake: the photo has nothing to do with hantavirus. Using a reverse image search, fact-checkers found it in a 2025 article about a medical drill in a Spanish port. An old photo taken out of context doesn't prove that a real event was \"staged\"."
    },
    source: {
      type: { ro: "Pagină care răspândește teorii ale conspirației", en: "Page spreading conspiracy theories" },
      owner: { ro: "Necunoscut", en: "Unknown" },
      info: {
        ro: "Fotografia nu are legătură cu hantavirusul. Prin căutare inversă de imagini, AFP a găsit-o pe site-ul unui port din Spania, într-un articol din mai 2025 despre un exercițiu de pregătire pentru o urgență medicală. Focarul de pe navă a fost real; poza a fost scoasă din context.",
        en: "The photo has nothing to do with hantavirus. Using a reverse image search, AFP found it on the website of a Spanish port, in a May 2025 article about a medical emergency drill. The outbreak on the ship was real; the photo was taken out of context."
      },
      link: "https://verificat.afp.com/doc.afp.com.B3EW2D2"
    }
  },
  {
    id: 7,
    platform: "YouTube (reclamă)",
    account: { name: "Investiții Inteligente RO", handle: "Sponsorizat" },
    text: {
      ro: "VIDEO: Un lider politic cunoscut recomandă platforma care te poate îmbogăți peste noapte! Înscrie-te azi, locurile sunt limitate. (videoclip)",
      en: "VIDEO: A well-known political leader recommends the platform that can make you rich overnight! Sign up today, places are limited. (video)"
    },
    isReal: false,
    media: { kind: "video", scene: "deepfake-video", seconds: 58, alt: { ro: "Ilustrație: un bărbat în costum, cu fața ușor distorsionată, care spune „Investește!”", en: "Illustration: a man in a suit with a slightly distorted face saying \"Invest!\"" } },
    explanation: {
      ro: "E falsă: „îmbogățire peste noapte” și „locuri limitate” sunt tactici de presiune. Uită-te la buze (nu se potrivesc cu vocea), la fața rigidă și la ochii care nu clipesc natural. Caută videoclipul original pe canalele oficiale ale persoanei.",
      en: "It's fake: \"get rich overnight\" and \"limited places\" are pressure tactics. Look at the lips (they don't match the voice), the stiff face and eyes that don't blink naturally. Look for the original video on the person's official channels."
    },
    source: {
      type: { ro: "Reclamă frauduloasă cu deepfake", en: "Fraudulent deepfake ad" },
      owner: { ro: "Escroci necunoscuți", en: "Unknown scammers" },
      info: {
        ro: "Escrocii iau videoclipuri reale cu oameni cunoscuți și le modifică cu AI, ca să pară că recomandă investiții. Scopul: să obțină date personale sau bani pentru oferte care nu există. Persoanele din video nu au spus niciodată aceste lucruri.",
        en: "Scammers take real videos of well-known people and alter them with AI so they appear to recommend investments. The goal: to obtain personal data or money for offers that don't exist. The people in the video never said these things."
      },
      link: "https://www.bursa.ro/dnsc-avertizeaza-ca-au-revenit-videoclipurile-deepfake-in-care-persoane-cu-notorietate-par-ca-gireaza-oportunitati-de-investitii-82958554"
    }
  },
  {
    id: 8,
    platform: "Comunicat oficial",
    account: { name: "DNSC – Directoratul Național de Securitate Cibernetică", handle: "Pagină oficială" },
    text: {
      ro: "⚠️ Atenție! Au revenit videoclipurile deepfake în care persoane cunoscute par să recomande investiții. Nu completați formulare cu date personale și nu trimiteți bani. Verificați mereu informația din surse oficiale.",
      en: "⚠️ Warning! Deepfake videos in which well-known people appear to recommend investments are back. Do not fill in forms with personal data and do not send money. Always check information with official sources."
    },
    isReal: true,
    media: { kind: "notice", scene: "official-warning", alt: { ro: "Ilustrație: un document oficial cu un scut verde", en: "Illustration: an official document with a green shield" } },
    explanation: {
      ro: "E reală: mesajul nu îți cere bani sau date, ci te avertizează să nu le dai. Poți confirma direct pe dnsc.ro, unde există și un ghid despre deepfake.",
      en: "It's real: the message doesn't ask you for money or data, it warns you not to give them. You can confirm it directly on dnsc.ro, which also has a guide on deepfakes."
    },
    source: {
      type: { ro: "Instituție publică", en: "Public institution" },
      owner: { ro: "Statul român (DNSC)", en: "Romanian state (DNSC)" },
      info: {
        ro: "DNSC este instituția statului care se ocupă de securitatea cibernetică. Avertismentul a fost publicat oficial și preluat de presă. Îl poți verifica direct pe site-ul dnsc.ro, unde există și un ghid despre cum recunoști un deepfake.",
        en: "DNSC is the state institution responsible for cyber security. The warning was published officially and picked up by the press. You can check it directly on dnsc.ro, which also has a guide on recognising deepfakes."
      },
      link: "https://www.dnsc.ro/vezi/document/ghid-deepfake"
    }
  }
];
