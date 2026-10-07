const translations = {
  ro: {
    kicker: "Quiz de personalitate",
    chooseTitle: "Alege jocul",
    chooseLead: "Alege jocul și află ce personaj ți se potrivește.",
    lolDescription: "Găsește campionul care ți se potrivește.",
    valorantDescription: "Află ce agent ți se potrivește.",
    chooseGame: "Alege un joc",
    startLol: "Începe quiz-ul LoL",
    startValorant: "Începe quiz-ul VALORANT",
    gameStartLolTitle: "Ce campion din League of Legends ești?",
    gameStartValorantTitle: "Ce agent din VALORANT ești?",
    gameStartLolLead: "Răspunde la 12 întrebări și află ce campion ți se potrivește.",
    gameStartValorantLead: "Răspunde la 8 întrebări și află ce agent ți se potrivește.",
    progress: "Întrebarea {current} / {total}",
    resultLol: "Campionul tău",
    resultValorant: "Agentul tău",
    storyLabel: "Poveste",
    again: "Joacă din nou",
    changeGame: "Alege alt joc",
    signature: "Îți mulțumesc că ai încercat acest quiz. — Joe",
    share: "Distribuie",
  },
  en: {
    kicker: "Personality quiz",
    chooseTitle: "Choose a game",
    chooseLead: "Pick a game and find out which character matches you.",
    lolDescription: "Find the champion that fits your personality.",
    valorantDescription: "Find the agent that fits you.",
    chooseGame: "Choose a game",
    startLol: "Start the LoL quiz",
    startValorant: "Start the VALORANT quiz",
    gameStartLolTitle: "Which League of Legends champion are you?",
    gameStartValorantTitle: "Which VALORANT agent are you?",
    gameStartLolLead: "Answer 12 questions and find out which champion fits you.",
    gameStartValorantLead: "Answer 8 questions and find out which agent fits you.",
    progress: "Question {current} / {total}",
    resultLol: "Your champion",
    resultValorant: "Your agent",
    storyLabel: "Story",
    again: "Play again",
    changeGame: "Choose another game",
    signature: "Thanks for trying this quiz. — Joe",
    share: "Share",
  },
};

let currentLang = "ro";

function t(key, vars) {
  let text = translations[currentLang][key] || "";
  if (vars) {
    Object.entries(vars).forEach(([name, value]) => {
      text = text.replace(`{${name}}`, value);
    });
  }
  return text;
}

function setLanguage(lang) {
  currentLang = translations[lang] ? lang : "ro";
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = t(key);
    if (text) el.textContent = text;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
  });

  if (typeof updateGameSelection === "function") {
    updateGameSelection();
  }
}
