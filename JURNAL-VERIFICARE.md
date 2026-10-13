# AI Verification Log / Jurnal de verificare

Acest jurnal arată cum au fost scrise explicațiile din quiz și ce greșeli
a făcut AI-ul. Toate cele 8 explicații au fost verificate și corectate
înainte de publicare.

## Metodă / Method

1. **Prima variantă:** Gemini Flash, cu efort minim de raționament, a scris
   câte o explicație pentru fiecare postare, pe baza aceleiași cereri
   (vezi mai jos).
2. **Verificare încrucișată:** fiecare explicație a fost comparată cu
   sursa originală (articolul AFP Verificat sau avertismentul DNSC).
   Un al doilea AI (Claude) a semnalat diferențele și a propus corecturi.
3. **Decizia finală:** Am citit semnalările și am aprobat corecturile.
4. **Traducere:** varianta în engleză a fost refăcută după textul final în română.

**Cererea trimisă lui Gemini:**

> Ești profesor și explici unor adolescenți de 12–17 ani cum recunosc știrile false.
> Postarea: „[textul postării]”
> Scrie o explicație de maximum 3 propoziții care: spune ce indicii concrete ar fi
> putut observa un adolescent; dă un sfat practic de verificare; nu inventează fapte
> care nu sunt în verdict. Apoi tradu explicația în engleză.

- Data: 13 octombrie 2026
- Verdictul a fost inclus în cerere: NU

---

## Postarea 1: Evacuarea de pe nava MV Hondius (reală)

- **Sursa:** AFP Verificat
- **Varianta Gemini:**

  > Pentru a verifica o astfel de știre, te poți uita după detalii concrete precum numele exact al navei (MV Hondius) și menționarea unei instituții oficiale de încredere (OMS), elemente ce pot fi verificate rapid prin surse oficiale. Un sfat practic este să cauți pe Google denumirea navei alături de cuvântul „hantavirus” sau să faci o căutare inversă a imaginii din postare pentru a confirma că fotografia este actuală și din locul respectiv. Astfel de verificări simple te ajută să deosebești un fapt real de o dezinformare înainte de a distribui postarea.

- **Probleme găsite:**
  - Recomandă „căutarea inversă a imaginii din postare”, dar postarea nu are imagine.
  - Nu spune explicit că postarea e reală.
- **Varianta finală (RO):** E reală: numele navei, locul și OMS se pot verifica imediat. Caută „MV Hondius hantavirus” și vei găsi aceeași informație la mai multe agenții de presă independente, ceea ce e un semn bun.
- **Final version (EN):** It's real: the ship's name, the place and the WHO can all be checked right away. Search for "MV Hondius hantavirus" and you'll find the same information from several independent news agencies, which is a good sign.

---

## Postarea 2: Colajul „înainte și după” din Nepal (falsă)

- **Sursa:** AFP Verificat
- **Varianta Gemini:**

  > Pentru a verifica dacă această postare este reală, te poți uita după repere geografice concrete (precum numele râului sau al orașului din Nepal) și prezența emojiurilor dramatice, folosite deseori pentru a stârni emoții puternice și reacții rapide. Un sfat practic este să cauți pe Google numele râului alături de cuvinte cheie precum „inundații Nepal” sau să faci o căutare inversă a imaginilor/clipurilor atașate pentru a vedea dacă imaginile sunt recente și aparțin acelui eveniment. Astfel de verificări te ajută să confirmi dacă este vorba despre o calamitate reală sau despre o exagerare speculativă înainte de a redistribui informația.

- **Probleme găsite:**
  - **Greșeală mare:** nu spune că imaginile sunt generate cu AI.
  - Încadrare greșită: întreabă dacă e „calamitate reală sau exagerare”, deși inundațiile au fost reale și doar colajul e fals.
  - Ratează indiciul principal din sursă: podurile nu se potrivesc între cele două imagini.
- **Varianta finală (RO):** E falsă: inundațiile au fost reale, dar colajul a fost generat cu AI. Compară imaginile: distanța dintre poduri și poziția lor față de munte diferă, deși ar trebui să fie același loc. Un eveniment real poate fi ilustrat cu o imagine falsă.
- **Final version (EN):** It's fake: the floods were real, but the collage was generated with AI. Compare the two images: the distance between the bridges and their position relative to the mountain differ, even though it should be the same place. A real event can be illustrated with a fake image.

---

## Postarea 3: Vulcan lângă un cartier (falsă)

- **Sursa:** AFP Verificat
- **Varianta Gemini:**

  > Pentru a identifica falsul din această postare, te poți uita după neconcordanțele geografice și limbajul alarmist, deoarece vulcanul Anak Krakatau este o insulă nelocuită situată în mijlocul strâmtorii Sunda, neavând un „cartier” direct lângă el. Un sfat practic este să cauți pe Google denumirea vulcanului alături de cuvinte cheie precum „erupție” sau să folosești căutarea inversă a imaginilor din clip pentru a verifica dacă secvențele sunt vechi sau generate artificial. Astfel de verificări rapide te ajută să identifici un titlu înșelător înainte de a distribui informația.

- **Probleme găsite:**
  - Indiciul geografic e corect (insulă nelocuită).
  - Lipsesc indiciile vizuale de AI din clip (persoana care dispare, mâinile deformate).
  - Nu explică faptul că postarea amestecă fapte reale (erupțiile) cu un clip fals.
- **Varianta finală (RO):** E falsă: Anak Krakatau e pe o insulă nelocuită, deci nu are niciun cartier lângă el. În clip, o persoană dispare brusc, iar mâinile celor care fug sunt deformate, semne tipice de video generat cu AI. Erupțiile au fost reale; amestecul de adevăr și fals face postarea convingătoare.
- **Final version (EN):** It's fake: Anak Krakatau is on an uninhabited island, so there is no neighbourhood next to it. In the clip, a person suddenly disappears and the hands of the people running are distorted, typical signs of AI-generated video. The eruptions were real; mixing truth and fiction is what makes the post convincing.

---

## Postarea 4: Filmarea vulcanului de pe barcă (reală)

- **Sursa:** AFP Verificat
- **Varianta Gemini:**

  > Pentru a verifica autenticitatea acestei mărturii, te poți uita după detalii tehnice plauzibile — cum ar fi localizarea corectă a vulcanului Anak Krakatau în mijlocul mării — dar și după absența oricărei dovezi vizuale directe în text. Un sfat practic este să cauți pe Google data menționată alături de cuvintele cheie „Anak Krakatau eruption September 4” sau să analizezi datele EXIF/metadatele clipului video pentru a confirma momentul și coordonatele GPS ale filmării. Astfel de verificări te ajută să confirmi dacă un martor ocular oferă informații reale sau dacă folosește un scenariu inventat pentru a atrage atenția.

- **Probleme găsite:**
  - **Sfat greșit:** recomandă verificarea metadatelor EXIF și a coordonatelor GPS, dar rețelele sociale le șterg, iar un adolescent nu are fișierul original.
  - Tratează mărturia ca suspectă („scenariu inventat”), deși sursa confirmă că AFP a vorbit direct cu autoarea.
- **Varianta finală (RO):** E reală: detaliile se potrivesc cu geografia (vulcanul e pe o insulă și nu se vede de pe uscat), iar jurnaliștii AFP au vorbit direct cu autoarea. Compară cu postarea anterioară: aici nu apar case lângă vulcan.
- **Final version (EN):** It's real: the details match the geography (the volcano is on an island and can't be seen from land), and AFP journalists spoke directly to the author. Compare it with the previous post: here there are no houses next to the volcano.

---

## Postarea 5: Reclama „mii de lei de acasă” (falsă)

- **Sursa:** DNSC, via G4Media
- **Varianta Gemini:**

  > Pentru a identifica o posibilă tentativă de fraudă sau dezinformare, te poți uita după promisiunile nerealiste (câștiguri mari de bani „fără niciun risc”) și formulările de tip *clickbait* create special pentru a stârni curiozitatea și a te face să dai clic pe link. Un sfat practic este să cauți pe Google titlul postării alături de cuvântul „țeapă” sau „scam” ori să verifici adresa exactă a site-ului (URL-ul) pentru a te asigura că nu imită un portal de știri legitim. Astfel de verificări te ajută să eviți capcanele financiare și să nu distribui linkuri periculoase prietenilor tăi.

- **Probleme găsite:**
  - Corectă ca fond (promisiuni nerealiste, verificarea adresei site-ului).
  - Prea lungă pentru un adolescent.
- **Varianta finală (RO):** E falsă: nicio investiție reală nu promite „mii de lei fără niciun risc”. Înainte să dai click, uită-te la adresa site-ului: escrocii copiază aspectul unor ziare cunoscute, dar pe alt domeniu. Nu completa date bancare pe un site la care ai ajuns dintr-o reclamă.
- **Final version (EN):** It's fake: no real investment promises "thousands of lei with zero risk". Before you click, look at the website address: scammers copy the look of well-known newspapers, but on a different domain. Never enter bank details on a site you reached through an ad.

---

## Postarea 6: Poza cu cameramanul „regizată” (falsă)

- **Sursa:** AFP Verificat
- **Varianta Gemini:**

  > Pentru a identifica o speculație falsă bazată pe o imagine, te poți uita după logica situației — de exemplu, echipa de filmare operează adesea din zone sigure/decontaminate, iar purtarea echipamentului depinde de nivelul direct de expunere la pericol. Un sfat practic este să cauți pe Google contextul original al imaginii sau să faci o căutare inversă de imagine pentru a găsi sursa primară a fotografiei și explicațiile oferite de autorități. Astfel de verificări te ajută să înțelegi de ce oamenii poartă echipamente diferite înainte de a trage concluzia că o scenă este regizată.

- **Probleme găsite:**
  - **Cea mai gravă greșeală: justificare inventată.** Spune că echipele de filmare lucrează din „zone sigure/decontaminate”. Sursa arată că poza e de la un exercițiu medical din 2025 și nu are legătură cu hantavirusul.
- **Varianta finală (RO):** E falsă: fotografia nu are legătură cu hantavirusul. Prin căutare inversă de imagini, fact-checkerii au găsit-o într-un articol din 2025 despre un exercițiu medical într-un port din Spania. O poză veche, scoasă din context, nu dovedește că un eveniment real a fost „regizat”.
- **Final version (EN):** It's fake: the photo has nothing to do with hantavirus. Using a reverse image search, fact-checkers found it in a 2025 article about a medical drill in a Spanish port. An old photo taken out of context doesn't prove that a real event was "staged".

---

## Postarea 7: Reclama deepfake cu un politician (falsă)

- **Sursa:** DNSC, via Bursa
- **Varianta Gemini:**

  > Pentru a identifica un videoclip fals sau o tentativă de fraudă, te poți uita după limbajul tipic de manipulare — precum promisiunea de a te „îmbogăți peste noapte”, falsa urgență („locurile sunt limitate”) și posibila utilizare a tehnologiei *deepfake* pentru a imita vocea sau chipul politicianului. Un sfat practic este să cauți pe Google numele liderului politic alături de cuvintele cheie „deepfake” sau „scam” ori să folosești căutarea inversă a imaginilor din cadru pentru a găsi discursul original nealterat. Astfel de verificări te ajută să recunoști conținutul generat de inteligența artificială și să eviți ofertele financiare ilegale înainte de a le da credibilitate.

- **Probleme găsite:**
  - Corectă ca fond (tactici de presiune, deepfake).
  - Lipsesc semnele concrete de deepfake date de DNSC: buze nesincronizate, față rigidă, clipit nenatural.
- **Varianta finală (RO):** E falsă: „îmbogățire peste noapte” și „locuri limitate” sunt tactici de presiune. Uită-te la buze (nu se potrivesc cu vocea), la fața rigidă și la ochii care nu clipesc natural. Caută videoclipul original pe canalele oficiale ale persoanei.
- **Final version (EN):** It's fake: "get rich overnight" and "limited places" are pressure tactics. Look at the lips (they don't match the voice), the stiff face and eyes that don't blink naturally. Look for the original video on the person's official channels.

---

## Postarea 8: Avertismentul DNSC (reală)

- **Sursa:** DNSC (dnsc.ro)
- **Varianta Gemini:**

  > Pentru a identifica un avertisment autentic emis de o instituție de stat, te poți uita după prezența termenilor tehnici specifici (precum *deepfake*), absența promisiunilor financiare sau a presiunii de a acționa rapid și scopul pur informativ al mesajului. Un sfat practic este să cauți pe Google denumirea instituției alături de cuvintele cheie din comunicat sau să accesezi direct site-ul oficial al acesteia (cum ar fi dnsc.ro) pentru a confirma existența alertei de securitate. Astfel de verificări te ajută să recunoști un comunicat oficial de prevenție și să nu confunzi o avertizare reală cu o tentativă de dezinformare.

- **Probleme găsite:**
  - **Raționament slab:** prezintă termenii tehnici („deepfake”) ca semn de autenticitate, dar și escrocii îi folosesc.
  - Singura verificare sigură (site-ul oficial) apare abia la final.
- **Varianta finală (RO):** E reală: mesajul nu îți cere bani sau date, ci te avertizează să nu le dai. Poți confirma direct pe dnsc.ro, unde există și un ghid despre deepfake.
- **Final version (EN):** It's real: the message doesn't ask you for money or data, it warns you not to give them. You can confirm it directly on dnsc.ro, which also has a guide on deepfakes.

---

## Imagini generate cu AI / AI-generated images

Pentru postările 2, 3, 5 și 6 nu am folosit imaginile originale (au drepturi
de autor și ar fi republicat conținut fals). Le-am recreat cu ChatGPT, ca
exemple, și am scris „GENERAT CU AI” direct în pixelii fiecărei imagini,
ca să nu poată circula ca fotografii reale.

| Postare | Ce am cerut | Ce indicii de AI am observat |
|---|---|---|
| 2 – colajul din Nepal | Un oraș de munte pe malul unui râu, înainte și după o inundație | Orașul nu arată deloc ca în Nepal: case europene și o biserică cu turlă. Strada cu mașini de pe malul drept din „înainte” dispare complet în „după”, iar podurile nu stau în aceleași locuri. |
| 3 – vulcanul lângă case | Cadru de telefon cu un vulcan care erupe în spatele unei străzi | Casele și mașinile arată ca într-un oraș din Europa, nu din Indonezia. Imaginea e mult prea „perfectă” pentru o filmare făcută în fugă. |
| 5 – reclama RapidCash | Reclamă pentru o aplicație inventată, „5.000 lei pe lună de acasă” | Arată ca o reclamă reală. Singurul indiciu e promisiunea în sine, deci la reclame contează textul, nu calitatea imaginii. |
| 6 – evacuarea cu cameramanul | Fotografie de presă cu o evacuare de pe o navă și un cameraman în haine obișnuite | Aproape imposibil de deosebit de o fotografie reală. Concluzie: unele imagini AI nu se mai pot recunoaște cu ochiul liber, așa că trebuie verificată sursa. |
Am pastrat cererile propuse de claude, iar imaginile generate sunt similare cu ce mi-am imaginat ca se va genera.

---

## Concluzii / Summary

- **Postări:** 8 (5 false, 3 reale)
- **Explicații corectate:** 8 din 8 (toate au fost scurtate; 6 au avut și probleme de conținut)
- **Greșeli de fond:** 1 justificare inventată (postarea 6), 1 încadrare greșită care ratează că imaginea e AI (postarea 2), 1 sfat imposibil de aplicat (postarea 4), 1 raționament slab (postarea 8)
- **Cele mai frecvente probleme ale AI-ului:**
  - același tipar de frază la toate explicațiile, cu o propoziție finală care nu adaugă nimic;
  - sfaturi generale („caută pe Google”) în loc de indiciile concrete din sursă;
  - când nu știe cauza reală, inventează una care sună plauzibil (postarea 6);
  - text prea lung și prea formal pentru publicul țintă.
- Am învățat că AI-ul poate fi util, dar informațiile oferite de el trebuie verificate înainte să le considerăm adevărate. Trebuie să fim atenți la greșelile de conținut și să ne bazăm pe dovezi concrete, nu doar pe explicații care par convingătoare. AI-ul este un instrument de ajutor, dar responsabilitatea pentru ceea ce folosim și distribuim ne aparține.
