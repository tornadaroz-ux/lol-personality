const state = {
  index: 0,
  scores: {},
  resultId: null,
  game: null,
};

const LOL_SCORE_TAGS = ["Assassin", "Fighter", "Mage", "Marksman", "Support", "Tank"];
const ROLE_SCORE_WEIGHT = 0.35;
const GAME_CONFIG = {
  lol: {
    questions,
    characters: () => champions,
    scoreTags: LOL_SCORE_TAGS,
  },
  valorant: {
    questions: valorantQuestions,
    characters: () => valorantAgents,
    scoreTags: VALORANT_ROLES,
  },
};

let audioCtx = null;

function getGameConfig() {
  return GAME_CONFIG[state.game];
}

function ensureAudioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;

  if (!audioCtx) {
    audioCtx = new AudioCtor();
  }

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  return audioCtx;
}

function playTone({ frequency = 440, duration = 0.08, type = "sine", volume = 0.04, delay = 0 }) {
  const ctx = ensureAudioContext();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  const startTime = ctx.currentTime + delay;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);

  gainNode.gain.setValueAtTime(volume, startTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

function playAnswerTone() {
  playTone({ frequency: 420, duration: 0.07, type: "triangle", volume: 0.04 });
  playTone({ frequency: 620, duration: 0.08, type: "triangle", volume: 0.04, delay: 0.06 });
}

function playResultTone() {
  playTone({ frequency: 540, duration: 0.1, type: "sine", volume: 0.045 });
  playTone({ frequency: 690, duration: 0.12, type: "triangle", volume: 0.045, delay: 0.08 });
  playTone({ frequency: 870, duration: 0.16, type: "triangle", volume: 0.04, delay: 0.16 });
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    const isTarget = screen.id === id;
    screen.classList.toggle("is-visible", isTarget);
    screen.hidden = !isTarget;
  });
}

function resetQuiz() {
  state.index = 0;
  const config = getGameConfig();
  const scoreTags = config.questions.flatMap((question) =>
    question.answers.flatMap((answer) => Object.keys(answer.scores))
  );
  state.scores = Object.fromEntries([...new Set([...config.scoreTags, ...scoreTags])].map((tag) => [tag, 0]));
  state.resultId = null;
}

function pickWinner() {
  const candidates = Object.entries(getGameConfig().characters()).map(([id, champ]) => ({
    id,
    score:
      (champ.profileTraits || []).reduce((total, tag) => total + (state.scores[tag] || 0), 0) +
      ROLE_SCORE_WEIGHT * (champ.tags || []).reduce((total, tag) => total + (state.scores[tag] || 0), 0),
  }));
  const bestScore = Math.max(...candidates.map((candidate) => candidate.score));
  const winners = candidates.filter((candidate) => candidate.score === bestScore);
  return winners[Math.floor(Math.random() * winners.length)]?.id;
}

function renderQuestion() {
  const gameQuestions = getGameConfig().questions;
  const question = gameQuestions[state.index];
  if (!question) return;

  const progressValue = ((state.index + 1) / gameQuestions.length) * 100;
  const progressEl = document.getElementById("quiz-progress");
  const progressBar = document.getElementById("quiz-progress-bar");
  const questionEl = document.getElementById("quiz-question");
  const box = document.getElementById("quiz-answers");

  if (progressEl) {
    progressEl.textContent = t("progress", {
      current: state.index + 1,
      total: gameQuestions.length,
    });
  }

  if (progressBar) {
    progressBar.style.width = `${progressValue}%`;
  }

  if (questionEl) {
    questionEl.textContent = question.text[currentLang];
  }

  if (!box) return;
  box.innerHTML = "";
  question.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-answer";
    btn.textContent = answer.text[currentLang];
    btn.addEventListener("click", () => chooseAnswer(i));
    box.appendChild(btn);
  });
}

function renderResult() {
  const champ = getGameConfig().characters()[state.resultId];
  if (!champ) return;

  const resultImage = document.getElementById("result-image");
  const nameEl = document.getElementById("result-name");
  const titleEl = document.getElementById("result-title");
  const title = state.game === "valorant" ? (champ.title?.[currentLang] || champ.title || "") : "";
  if (resultImage) {
    resultImage.src = champ.image || "assets/icon.svg";
    resultImage.alt = `${champ.name} portrait`;
    resultImage.style.objectPosition = champ.imagePosition || "center";
    resultImage.onerror = () => {
      resultImage.src = "assets/icon.svg";
      resultImage.style.objectPosition = "center";
    };
  }
  if (nameEl) nameEl.textContent = champ.name;
  if (titleEl) titleEl.textContent = title;
  const resultKicker = document.querySelector("#screen-result .kicker");
  if (resultKicker) {
    resultKicker.textContent = t(state.game === "valorant" ? "resultValorant" : "resultLol");
  }

  playResultTone();
}

function refreshView() {
  const quiz = document.getElementById("screen-quiz");
  const result = document.getElementById("screen-result");
  if (!quiz.hidden) renderQuestion();
  if (!result.hidden) renderResult();
}

function chooseAnswer(answerIndex) {
  const gameQuestions = getGameConfig().questions;
  if (state.index >= gameQuestions.length) {
    state.resultId = pickWinner();
    renderResult();
    showScreen("screen-result");
    return;
  }

  const question = gameQuestions[state.index];
  if (!question || !question.answers[answerIndex]) {
    return;
  }

  const answer = question.answers[answerIndex];
  Object.entries(answer.scores).forEach(([tag, points]) => {
    state.scores[tag] += points;
  });

  playAnswerTone();

  state.index += 1;
  if (state.index >= gameQuestions.length) {
    state.resultId = pickWinner();
    renderResult();
    showScreen("screen-result");
    return;
  }
  renderQuestion();
}

function startQuiz() {
  if (!state.game) return;
  resetQuiz();
  playTone({ frequency: 440, duration: 0.08, type: "triangle", volume: 0.035 });
  playTone({ frequency: 620, duration: 0.1, type: "triangle", volume: 0.035, delay: 0.07 });
  renderQuestion();
  showScreen("screen-quiz");
}

function updateGameSelection() {
  document.querySelectorAll(".game-choice").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.game === state.game));
    button.classList.toggle("is-selected", button.dataset.game === state.game);
  });

  const title = document.getElementById("start-title");
  const lead = document.getElementById("start-lead");
  const startButton = document.getElementById("btn-start");
  if (!title || !lead || !startButton) return;

  if (state.game) {
    const isValorant = state.game === "valorant";
    title.textContent = isValorant
      ? t("gameStartValorantTitle")
      : t("gameStartLolTitle");
    lead.textContent = t(isValorant ? "gameStartValorantLead" : "gameStartLolLead");
    startButton.textContent = t(isValorant ? "startValorant" : "startLol");
    startButton.disabled = false;
    return;
  }

  title.textContent = t("chooseTitle");
  lead.textContent = t("chooseLead");
  startButton.textContent = t("chooseGame");
  startButton.disabled = true;
}

document.querySelectorAll(".game-choice").forEach((button) => {
  button.addEventListener("click", () => {
    state.game = button.dataset.game;
    updateGameSelection();
  });
});

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
    refreshView();
  });
});

document.getElementById("btn-start").addEventListener("click", startQuiz);
document.getElementById("btn-again").addEventListener("click", startQuiz);
document.getElementById("btn-change-game").addEventListener("click", () => showScreen("screen-start"));

setLanguage(currentLang);
