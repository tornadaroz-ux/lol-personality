const VALORANT_ROLES = ["Controller", "Duelist", "Initiator", "Sentinel"];
const VALORANT_ROLE_NAMES = {
  Controller: { ro: "Controller", en: "Controller" },
  Duelist: { ro: "Duelist", en: "Duelist" },
  Initiator: { ro: "Inițiator", en: "Initiator" },
  Sentinel: { ro: "Santinelă", en: "Sentinel" },
};
const VALORANT_API_URL = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

const FALLBACK_VALORANT_AGENTS = {
  astra: { name: "Astra", tags: ["Controller"] },
  breach: { name: "Breach", tags: ["Initiator"] },
  brimstone: { name: "Brimstone", tags: ["Controller"] },
  chamber: { name: "Chamber", tags: ["Sentinel"] },
  clove: { name: "Clove", tags: ["Controller"] },
  cypher: { name: "Cypher", tags: ["Sentinel"] },
  deadlock: { name: "Deadlock", tags: ["Sentinel"] },
  fade: { name: "Fade", tags: ["Initiator"] },
  gekko: { name: "Gekko", tags: ["Initiator"] },
  harbor: { name: "Harbor", tags: ["Controller"] },
  iso: { name: "Iso", tags: ["Duelist"] },
  jett: { name: "Jett", tags: ["Duelist"] },
  kayo: { name: "KAY/O", tags: ["Initiator"] },
  killjoy: { name: "Killjoy", tags: ["Sentinel"] },
  neon: { name: "Neon", tags: ["Duelist"] },
  omen: { name: "Omen", tags: ["Controller"] },
  phoenix: { name: "Phoenix", tags: ["Duelist"] },
  raze: { name: "Raze", tags: ["Duelist"] },
  reyna: { name: "Reyna", tags: ["Duelist"] },
  sage: { name: "Sage", tags: ["Sentinel"] },
  skye: { name: "Skye", tags: ["Initiator"] },
  sova: { name: "Sova", tags: ["Initiator"] },
  tejo: { name: "Tejo", tags: ["Initiator"] },
  viper: { name: "Viper", tags: ["Controller"] },
  vyse: { name: "Vyse", tags: ["Sentinel"] },
  waylay: { name: "Waylay", tags: ["Duelist"] },
  yoru: { name: "Yoru", tags: ["Duelist"] },
};

const VALORANT_AGENT_TRAITS = {
  astra: ["strategic", "calm", "creative", "ambitious"],
  breach: ["bold", "direct", "fearless", "loyal"],
  brimstone: ["disciplined", "strategic", "protective", "dutiful"],
  chamber: ["precise", "ambitious", "independent", "focused"],
  clove: ["playful", "bold", "unconventional", "confident"],
  cypher: ["observant", "patient", "strategic", "protective"],
  deadlock: ["disciplined", "resilient", "protective", "methodical"],
  fade: ["observant", "intense", "relentless", "independent"],
  gekko: ["playful", "loyal", "supportive", "adaptable"],
  harbor: ["calm", "protective", "confident", "team"],
  iso: ["disciplined", "independent", "precise", "calm"],
  jett: ["confident", "independent", "bold", "competitive"],
  kayo: ["disciplined", "direct", "loyal", "reliable"],
  killjoy: ["inventive", "curious", "methodical", "playful"],
  neon: ["energetic", "bold", "impatient", "loyal"],
  omen: ["mysterious", "patient", "independent", "strategic"],
  phoenix: ["confident", "playful", "bold", "loyal"],
  raze: ["chaotic", "playful", "inventive", "energetic"],
  reyna: ["ambitious", "independent", "ruthless", "confident"],
  sage: ["calm", "protective", "disciplined", "compassionate"],
  skye: ["protective", "empathetic", "curious", "team"],
  sova: ["patient", "precise", "observant", "disciplined"],
  tejo: ["strategic", "disciplined", "direct", "protective"],
  viper: ["disciplined", "strategic", "ruthless", "focused"],
  vyse: ["strategic", "patient", "precise", "methodical"],
  waylay: ["confident", "bold", "energetic", "independent"],
  yoru: ["independent", "confident", "unconventional", "playful"],
};
const VALORANT_ROLE_TRAITS = {
  Controller: ["strategic", "patient", "methodical"],
  Duelist: ["bold", "confident", "independent"],
  Initiator: ["observant", "curious", "team"],
  Sentinel: ["protective", "disciplined", "patient"],
};

let valorantAgents = Object.fromEntries(
  Object.entries(FALLBACK_VALORANT_AGENTS).map(([id, agent]) => [
    id,
    {
      ...agent,
      title: VALORANT_ROLE_NAMES[agent.tags[0]],
      profileTraits: VALORANT_AGENT_TRAITS[id],
      image: "assets/icon.svg",
    },
  ])
);

function buildValorantQuestions() {
  const answer = (ro, en, role, traits) => ({
    text: { ro, en },
    scores: Object.fromEntries([[role, 1], ...traits.map((trait) => [trait, 2])]),
  });

  return [
    {
      text: { ro: "Cum preferi să înceapă o rundă?", en: "How do you prefer a round to begin?" },
      answers: [
        answer("Intru primul și deschid calea pentru echipă.", "I go first and open the way for my team.", "Duelist", ["bold", "confident", "independent"]),
        answer("Strâng informații și creez o ocazie de atac.", "I gather intel and create an opening for an attack.", "Initiator", ["observant", "strategic", "team"]),
        answer("Îmi fac un plan și controlez zonele importante.", "I make a plan and control key areas.", "Controller", ["strategic", "patient", "methodical"]),
        answer("Îmi pregătesc poziția și am grijă de echipă.", "I prepare my position and look after my team.", "Sentinel", ["protective", "patient", "disciplined"]),
      ],
    },
    {
      text: { ro: "Ce rol îți asumi într-un grup?", en: "What role do you take in a group?" },
      answers: [
        answer("Îi încurajez pe ceilalți și pornesc la acțiune.", "I encourage others and get things moving.", "Duelist", ["bold", "energetic", "confident"]),
        answer("Pun întrebări și observ ce le-a scăpat celorlalți.", "I ask questions and notice what others missed.", "Initiator", ["curious", "observant", "strategic"]),
        answer("Păstrez calmul și găsesc cea mai bună strategie.", "I stay calm and find the best strategy.", "Controller", ["calm", "strategic", "methodical"]),
        answer("Îi sprijin pe ceilalți și mă asigur că sunt în siguranță.", "I support others and make sure they're safe.", "Sentinel", ["protective", "loyal", "team"]),
      ],
    },
    {
      text: { ro: "Când planul se schimbă pe neașteptate, ce faci?", en: "When the plan suddenly changes, what do you do?" },
      answers: [
        answer("Mă adaptez rapid și profit de ocazie.", "I adapt quickly and take advantage of the opening.", "Duelist", ["adaptable", "bold", "independent"]),
        answer("Caut informațiile care ne lipsesc.", "I look for the information we're missing.", "Initiator", ["observant", "curious", "strategic"]),
        answer("Regândesc planul și limitez opțiunile adversarului.", "I rethink the plan and limit the opponent's options.", "Controller", ["strategic", "patient", "methodical"]),
        answer("Stabilizez situația și îi ajut pe ceilalți.", "I stabilize the situation and help the others.", "Sentinel", ["calm", "protective", "reliable"]),
      ],
    },
    {
      text: { ro: "În ce fel simți că ajuți cel mai mult echipa?", en: "How do you feel you help your team the most?" },
      answers: [
        answer("Câștig dueluri și creez spațiu pentru atac.", "I win duels and create space for the attack.", "Duelist", ["confident", "competitive", "bold"]),
        answer("Descopăr pozițiile adverse și pregătesc echipa.", "I reveal enemy positions and set up my team.", "Initiator", ["observant", "precise", "team"]),
        answer("Fac zona de luptă mai sigură pentru coechipieri.", "I make the battlefield safer for my teammates.", "Controller", ["strategic", "protective", "team"]),
        answer("Îmi pregătesc apărarea și opresc flancurile.", "I prepare our defense and watch the flanks.", "Sentinel", ["methodical", "patient", "disciplined"]),
      ],
    },
    {
      text: { ro: "Ce avantaj ai prefera să ai?", en: "Which advantage would you rather have?" },
      answers: [
        answer("Viteză și încredere în reflexele mele.", "Speed and confidence in my reflexes.", "Duelist", ["energetic", "confident", "bold"]),
        answer("Informații clare despre ce urmează.", "Clear information about what's coming next.", "Initiator", ["observant", "precise", "strategic"]),
        answer("Control asupra spațiului și asupra ritmului.", "Control over space and the pace of the round.", "Controller", ["strategic", "patient", "methodical"]),
        answer("Timp să mă pregătesc și să-mi protejez echipa.", "Time to prepare and protect my team.", "Sentinel", ["disciplined", "protective", "patient"]),
      ],
    },
    {
      text: { ro: "Cum reacționezi când ești sub presiune?", en: "How do you react under pressure?" },
      answers: [
        answer("Acționez imediat și am încredere în mine.", "I act immediately and trust myself.", "Duelist", ["bold", "confident", "competitive"]),
        answer("Rămân atent și comunic ce observ.", "I stay alert and communicate what I notice.", "Initiator", ["observant", "calm", "team"]),
        answer("Îmi păstrez calmul și schimb strategia.", "I stay calm and adjust the strategy.", "Controller", ["calm", "strategic", "disciplined"]),
        answer("Mă bazez pe pregătire și nu-mi pierd concentrarea.", "I rely on preparation and keep my focus.", "Sentinel", ["methodical", "patient", "focused"]),
      ],
    },
    {
      text: { ro: "Ce fel de victorie te bucură cel mai mult?", en: "What kind of victory makes you happiest?" },
      answers: [
        answer("Una obținută printr-o acțiune curajoasă.", "One earned through a bold play.", "Duelist", ["bold", "confident", "competitive"]),
        answer("Una la care a contribuit fiecare coechipier.", "One where every teammate contributed.", "Initiator", ["team", "loyal", "supportive"]),
        answer("Una câștigată printr-un plan bine gândit.", "One won through a well-thought-out plan.", "Controller", ["strategic", "patient", "methodical"]),
        answer("Una obținută prin răbdare și consecvență.", "One earned through patience and consistency.", "Sentinel", ["disciplined", "patient", "reliable"]),
      ],
    },
    {
      text: { ro: "Care motto ți se potrivește cel mai bine?", en: "Which motto suits you best?" },
      answers: [
        answer("Nu aștepta ocazia. Creeaz-o.", "Don't wait for an opening. Make one.", "Duelist", ["bold", "independent", "confident"]),
        answer("Află ce se ascunde înainte să acționezi.", "Find out what's hidden before you act.", "Initiator", ["curious", "observant", "strategic"]),
        answer("Gândește înainte. Controlează situația.", "Think ahead. Control the situation.", "Controller", ["strategic", "disciplined", "patient"]),
        answer("Fii pregătit și ai grijă de echipa ta.", "Be prepared and look after your team.", "Sentinel", ["protective", "methodical", "loyal"]),
      ],
    },
  ];
}

const valorantQuestions = buildValorantQuestions();

async function hydrateValorantAgents() {
  try {
    const response = await fetch(VALORANT_API_URL);
    if (!response.ok) throw new Error("Unable to load VALORANT agent data");
    const payload = await response.json();
    const loadedAgents = Object.fromEntries(
      payload.data
        .filter((agent) => agent.isPlayableCharacter && agent.role?.displayName)
        .map((agent) => {
          const role = agent.role.displayName;
          return [
            agent.displayName.toLowerCase().replace(/[^a-z0-9]/g, ""),
            {
              name: agent.displayName,
              title: VALORANT_ROLE_NAMES[role] || { ro: role, en: role },
              tags: [role],
              profileTraits:
                VALORANT_AGENT_TRAITS[agent.displayName.toLowerCase().replace(/[^a-z0-9]/g, "")] ||
                VALORANT_ROLE_TRAITS[role],
              image: agent.fullPortrait || agent.displayIcon || "assets/icon.svg",
            },
          ];
        })
    );
    if (Object.keys(loadedAgents).length > 0) {
      valorantAgents = loadedAgents;
    }
  } catch (error) {
    console.error("Unable to refresh VALORANT agents; using the offline roster.", error);
  }
}

hydrateValorantAgents();
