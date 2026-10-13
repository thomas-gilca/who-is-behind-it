// ============================================================
// APP LOGIC
// The whole app is a small "state machine":
//   start screen -> question -> answer feedback -> ... -> results
// ============================================================

// --- State: everything the app needs to remember ---
let lang = "ro";        // current language: "ro" or "en"
let current = 0;        // index of the current question in POSTS
let answered = false;   // has the user answered the current question?
let lastChoice = null;  // what the user picked: true (real) / false (fake)
let results = [];       // one entry per answered question: true = correct
let screen = "start";   // "start", "quiz" or "results"

// --- Interface texts in both languages ---
const UI = {
  ro: {
    title: "Cine e în spate?",
    intro: "Opt postări care au circulat pe rețelele sociale în 2026. Decide dacă fiecare e reală sau falsă, apoi află cine a publicat-o și de ce.",
    meta: "Durează cam 5 minute. Toate cazurile au fost verificate de AFP sau de DNSC.",
    start: "Începe quiz-ul",
    question: (i, n) => `Postarea ${i} din ${n}`,
    ask: "Ce crezi?",
    real: "E reală",
    fake: "E falsă",
    stampReal: "REALĂ",
    stampFake: "FALSĂ",
    correct: "Ai ghicit.",
    wrong: "Nu de data asta.",
    itWas: (real) => (real ? "Postarea este reală." : "Postarea este falsă."),
    behind: "Cine e în spate?",
    type: "Ce fel de cont",
    owner: "Cine îl controlează",
    sourceLink: "Citește verificarea completă",
    next: "Următoarea postare",
    seeResults: "Vezi rezultatul",
    illustration: "Ilustrație, nu imaginea originală din postare",
    result: (s, n) => `${s} din ${n}`,
    resultText: (s, n) =>
      s === n ? "Perfect. Nicio postare nu te-a păcălit."
      : s >= n * 0.6 ? "Bine! Câteva postări te-au păcălit, și asta li se întâmplă și adulților."
      : "Postările false sunt făcute să pară convingătoare. Acum știi ce indicii să cauți.",
    tips: "De reținut",
    tipList: [
      "Caută sursa originală înainte să distribui.",
      "Un cont mare nu înseamnă un cont de încredere.",
      "Un eveniment real poate fi ilustrat cu o imagine falsă.",
      "Imaginile și clipurile pot fi generate cu AI: uită-te după detalii care nu se potrivesc."
    ],
    restart: "Încearcă din nou",
    footer: "Proiect educațional. Postările sunt reformulate după verificări AFP și avertismente DNSC. Numele conturilor anonime și ale persoanelor private au fost înlocuite, iar imaginile sunt ilustrații proprii."
  },
  en: {
    title: "Who's behind it?",
    intro: "Eight posts that circulated on social media in 2026. Decide whether each one is real or fake, then find out who published it and why.",
    meta: "It takes about 5 minutes. Every case was checked by AFP or DNSC.",
    start: "Start the quiz",
    question: (i, n) => `Post ${i} of ${n}`,
    ask: "What do you think?",
    real: "It's real",
    fake: "It's fake",
    stampReal: "REAL",
    stampFake: "FAKE",
    correct: "You got it.",
    wrong: "Not this time.",
    itWas: (real) => (real ? "This post is real." : "This post is fake."),
    behind: "Who's behind it?",
    type: "Kind of account",
    owner: "Who controls it",
    sourceLink: "Read the full fact-check",
    next: "Next post",
    seeResults: "See your result",
    illustration: "Illustration, not the original image from the post",
    result: (s, n) => `${s} of ${n}`,
    resultText: (s, n) =>
      s === n ? "Perfect. No post fooled you."
      : s >= n * 0.6 ? "Good! A few posts fooled you, and that happens to adults too."
      : "Fake posts are made to look convincing. Now you know which clues to look for.",
    tips: "Remember",
    tipList: [
      "Look for the original source before you share.",
      "A big account is not necessarily a trustworthy one.",
      "A real event can be illustrated with a fake image.",
      "Images and videos can be AI-generated: look for details that don't add up."
    ],
    restart: "Try again",
    footer: "Educational project. Posts are rewritten from AFP fact-checks and DNSC warnings. Names of anonymous accounts and private persons have been replaced, and the images are our own illustrations."
  }
};

const app = document.getElementById("app");

// --- Drawing functions: each one fills #app with HTML ---

function renderStart() {
  const t = UI[lang];
  app.innerHTML = `
    <section class="hero">
      <h1 class="hero-title">${t.title}</h1>
      <p class="hero-intro">${t.intro}</p>
      <p class="hero-meta">${t.meta}</p>
      <button class="btn btn-primary" onclick="startQuiz()">${t.start}</button>
      <div class="teaser" aria-hidden="true">
        ${POSTS.map(p => `<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice">${SCENES[p.media.scene]}</svg>`).join("")}
      </div>
    </section>`;
}

// The row of small segments above each post: done, current, still to come
function renderProgress() {
  const segments = POSTS.map((_, i) => {
    let state = "todo";
    if (i < current || (i === current && answered)) state = results[i] ? "ok" : "miss";
    else if (i === current) state = "now";
    return `<span class="seg seg-${state}"></span>`;
  }).join("");
  return `<div class="progress" aria-hidden="true">${segments}</div>`;
}

function renderQuestion() {
  const t = UI[lang];
  const post = POSTS[current];
  const isLast = current === POSTS.length - 1;

  // The stamp and the feedback only appear after the user has answered
  let stamp = "";
  let after = "";
  if (answered) {
    const isCorrect = lastChoice === post.isReal;
    stamp = `<div class="stamp ${post.isReal ? "stamp-real" : "stamp-fake"}">${post.isReal ? t.stampReal : t.stampFake}</div>`;
    after = `
      <div class="verdict ${isCorrect ? "verdict-ok" : "verdict-miss"}" role="status">
        <p class="verdict-head"><strong>${isCorrect ? t.correct : t.wrong}</strong> ${t.itWas(post.isReal)}</p>
        <p>${post.explanation[lang]}</p>
      </div>
      <section class="dossier">
        <h2 class="dossier-tab">${t.behind}</h2>
        <dl class="dossier-facts">
          <div><dt>${t.type}</dt><dd>${post.source.type[lang]}</dd></div>
          <div><dt>${t.owner}</dt><dd>${post.source.owner[lang]}</dd></div>
        </dl>
        <p class="dossier-info">${post.source.info[lang]}</p>
        ${post.source.link ? `<a class="dossier-link" href="${post.source.link}" target="_blank" rel="noopener">${t.sourceLink}</a>` : ""}
      </section>
      <button class="btn btn-primary btn-wide" onclick="nextQuestion()">${isLast ? t.seeResults : t.next}</button>`;
  }

  app.innerHTML = `
    <p class="counter">${t.question(current + 1, POSTS.length)}</p>
    ${renderProgress()}
    <article class="post">
      <div class="post-head">
        <div class="avatar">${post.account.name[0]}</div>
        <div class="post-who">
          <div class="acc-name">${post.account.name}</div>
          <div class="acc-handle">${post.account.handle}</div>
        </div>
        <span class="platform">${post.platform}</span>
      </div>
      <p class="post-text">${post.text[lang]}</p>
      <div class="media-wrap">
        ${renderMedia(post.media)}
        ${stamp}
      </div>
    </article>
    ${answered ? after : `
      <p class="ask">${t.ask}</p>
      <div class="choices">
        <button class="btn btn-real" onclick="answer(true)">${t.real}</button>
        <button class="btn btn-fake" onclick="answer(false)">${t.fake}</button>
      </div>`}`;
}

function renderResults() {
  const t = UI[lang];
  const score = results.filter(Boolean).length;
  const marks = results.map((ok, i) =>
    `<li class="mark ${ok ? "mark-ok" : "mark-miss"}" title="${t.question(i + 1, POSTS.length)}">${i + 1}</li>`).join("");
  app.innerHTML = `
    <section class="results">
      <p class="score">${t.result(score, POSTS.length)}</p>
      <p class="score-text">${t.resultText(score, POSTS.length)}</p>
      <ol class="marks">${marks}</ol>
      <h2 class="tips-title">${t.tips}</h2>
      <ul class="tips">${t.tipList.map(tip => `<li>${tip}</li>`).join("")}</ul>
      <button class="btn btn-primary" onclick="startQuiz()">${t.restart}</button>
    </section>`;
}

// Calls the right drawing function for the current screen
function render() {
  if (screen === "start") renderStart();
  else if (screen === "quiz") renderQuestion();
  else renderResults();

  document.documentElement.lang = lang;
  document.body.dataset.screen = screen;
  document.getElementById("wordmark").textContent = UI[lang].title;
  document.getElementById("footer").textContent = UI[lang].footer;
  document.getElementById("lang-btn").textContent = lang === "ro" ? "EN" : "RO";
}

// --- Actions: called when the user clicks something ---

function startQuiz() {
  current = 0;
  results = [];
  answered = false;
  screen = "quiz";
  render();
  window.scrollTo(0, 0);
}

function answer(choice) {
  lastChoice = choice;
  answered = true;
  results[current] = choice === POSTS[current].isReal;
  render();
  // bring the verdict into view on small screens
  document.querySelector(".verdict").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  if (current < POSTS.length - 1) {
    current++;
    answered = false;
  } else {
    screen = "results";
  }
  render();
  window.scrollTo(0, 0);
}

document.getElementById("lang-btn").onclick = () => {
  lang = lang === "ro" ? "en" : "ro";
  render();
};

// First drawing when the page loads
render();
