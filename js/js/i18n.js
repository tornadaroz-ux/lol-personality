const translations = {
  ro: {
    kicker: "Quiz de personalitate",
    title: "Care campion din League of Legends ești tu?",
    lead: "Răspunde la 12 întrebări. La final, îți arăt campionul care ți se potrivește.",
    start: "Începe",
    progress: "Întrebarea {current} / {total}",
    resultKicker: "Campionul tău",
    storyLabel: "Poveste",
    again: "Joacă din nou",
    share: "Distribuie",
  },
  en: {
    kicker: "Personality quiz",
    title: "Which League of Legends champion are you?",
    lead: "Answer 12 questions. At the end, I'll show the champion that fits you.",
    start: "Start",
    progress: "Question {current} / {total}",
    resultKicker: "Your champion",
    storyLabel: "Story",
    again: "Play again",
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
}
