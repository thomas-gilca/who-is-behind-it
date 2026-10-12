// ============================================================
// APP LOGIC
// The whole app is a small "state machine":
//   start screen -> question -> answer feedback -> ... -> results
// ============================================================

// --- State: everything the app needs to remember ---
let lang = "ro";        // current language: "ro" or "en"
let current = 0;        // index of the current question in POSTS
let score = 0;          // number of correct answers
let answered = false;   // has the user answered the current question?
let lastChoice = null;  // what the user picked: true (real) / false (fake)
let screen = "start";   // "start", "quiz" or "results"

// --- Interface texts in both languages ---
const UI = {
  ro: {
    intro: "Vezi postări de știri din social media. Ghicește dacă sunt reale sau false, apoi află cine se află în spatele lor.",
    start: "Începe",
    real: "Reală",
    fake: "Falsă",
    correct: "Corect!",
    wrong: "Greșit!",
    itWas: (real) => (real ? "Postarea este reală." : "Postarea este falsă."),
    behind: "Cine e în spate?",
    type: "Tip",
    owner: "Proprietar",
    next: "Următoarea",
    seeResults: "Vezi rezultatul",
    question: (i, n) => `Întrebarea ${i} din ${n}`,
    result: (s, n) => `Ai răspuns corect la ${s} din ${n}.`,
    restart: "Încearcă din nou",
    footer: "Proiect educațional. Exemplele DEMO sunt inventate."
  },
  en: {
    intro: "See news posts from social media. Guess whether they are real or fake, then find out who is behind them.",
    start: "Start",
    real: "Real",
    fake: "Fake",
    correct: "Correct!",
    wrong: "Wrong!",
    itWas: (real) => (real ? "This post is real." : "This post is fake."),
    behind: "Who's behind it?",
    type: "Type",
    owner: "Owner",
    next: "Next",
    seeResults: "See results",
    question: (i, n) => `Question ${i} of ${n}`,
    result: (s, n) => `You got ${s} out of ${n} right.`,
    restart: "Try again",
    footer: "Educational project. DEMO examples are invented."
  }
};

const app = document.getElementById("app");

// --- Drawing functions: each one fills #app with HTML ---

function renderStart() {
  const t = UI[lang];
  app.innerHTML = `
    <section class="card center">
      <p class="intro">${t.intro}</p>
      <button class="btn primary" onclick="startQuiz()">${t.start}</button>
    </section>`;
}

function renderQuestion() {
  const t = UI[lang];
  const post = POSTS[current];

  // The feedback block is only built after the user has answered
  let feedback = "";
  if (answered) {
    const isCorrect = lastChoice === post.isReal;
    const isLast = current === POSTS.length - 1;
    feedback = `
      <div class="feedback ${isCorrect ? "ok" : "bad"}">
        <strong>${isCorrect ? t.correct : t.wrong}</strong> ${t.itWas(post.isReal)}
        <p>${post.explanation[lang]}</p>
      </div>
      <div class="behind">
        <h3>${t.behind}</h3>
        <p><b>${t.type}:</b> ${post.source.type[lang]}</p>
        <p><b>${t.owner}:</b> ${post.source.owner[lang]}</p>
        <p>${post.source.info[lang]}</p>
        ${post.source.link ? `<a href="${post.source.link}" target="_blank">↗ Source</a>` : ""}
      </div>
      <button class="btn primary" onclick="nextQuestion()">
        ${isLast ? t.seeResults : t.next}
      </button>`;
  }

  app.innerHTML = `
    <p class="progress">${t.question(current + 1, POSTS.length)}</p>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${(current + 1) / POSTS.length * 100}%"></div>
    </div>
    <article class="post">
      <div class="post-head">
        <div class="avatar">${post.account.name[0]}</div>
        <div>
          <div class="acc-name">${post.account.name}</div>
          <div class="acc-handle">${post.account.handle} · ${post.platform}</div>
        </div>
      </div>
      <p class="post-text">${post.text[lang]}</p>
    </article>
    ${answered ? "" : `
      <div class="choices">
        <button class="btn real" onclick="answer(true)">${t.real}</button>
        <button class="btn fake" onclick="answer(false)">${t.fake}</button>
      </div>`}
    ${feedback}`;
}

function renderResults() {
  const t = UI[lang];
  app.innerHTML = `
    <section class="card center">
      <h2>${t.result(score, POSTS.length)}</h2>
      <button class="btn primary" onclick="startQuiz()">${t.restart}</button>
    </section>`;
}

// Calls the right drawing function for the current screen
function render() {
  if (screen === "start") renderStart();
  else if (screen === "quiz") renderQuestion();
  else renderResults();

  document.getElementById("footer").textContent = UI[lang].footer;
  document.getElementById("lang-btn").textContent = lang === "ro" ? "EN" : "RO";
}

// --- Actions: called when the user clicks something ---

function startQuiz() {
  current = 0;
  score = 0;
  answered = false;
  screen = "quiz";
  render();
}

function answer(choice) {
  lastChoice = choice;
  answered = true;
  if (choice === POSTS[current].isReal) score++;
  render();
}

function nextQuestion() {
  if (current < POSTS.length - 1) {
    current++;
    answered = false;
  } else {
    screen = "results";
  }
  render();
}

document.getElementById("lang-btn").onclick = () => {
  lang = lang === "ro" ? "en" : "ro";
  render();
};

// First drawing when the page loads
render();
