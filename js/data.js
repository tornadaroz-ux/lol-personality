const ROLE_TITLES = {
  Marksman: { ro: "Împușcător de precizie", en: "Precision striker" },
  Assassin: { ro: "Umbra rapidă", en: "Swift shadow" },
  Mage: { ro: "Arcanistul", en: "The arcane mind" },
  Support: { ro: "Gardianul", en: "The protector" },
  Tank: { ro: "Stâlpul frontului", en: "Frontline anchor" },
  Fighter: { ro: "Războinicul", en: "The relentless fighter" },
};

const ROLE_STORY = {
  Marksman: {
    ro: "e tipul care vede fiecare fereastră de oportunitate și nu o lasă să se închidă",
    en: "is the kind of person who sees every opening and never lets it close without acting",
  },
  Assassin: {
    ro: "e cel care intră în scenă fără zgomot și schimbă ritmul înainte ca ceilalți să înțeleagă ce s-a întâmplat",
    en: "is the one who steps in quietly and changes the rhythm before anyone understands what happened",
  },
  Mage: {
    ro: "e cel care gândește mai repede decât restul și transformă o idee într-o schimbare de cursă",
    en: "is the one who thinks faster than everyone else and turns a thought into a turning point",
  },
  Support: {
    ro: "e cel care ține echilibrul, protejează și face ca toată lumea să se simtă pregătită",
    en: "is the one who keeps the balance, protects the group, and makes everyone feel ready",
  },
  Tank: {
    ro: "e cel care stă în față fără să tremure și face ca frica să nu ia conducerea",
    en: "is the one who stands in front without trembling and makes fear lose the lead",
  },
  Fighter: {
    ro: "e cel care merge înainte chiar și când drumul se întunecă",
    en: "is the one who keeps moving forward even when the road gets dark",
  },
};

function buildNarrative(champ) {
  const tags = Array.isArray(champ.tags) ? champ.tags : [];
  const descriptors = tags
    .map((tag) => (ROLE_STORY[tag]?.[currentLang] || tag).replace(/\./g, ""))
    .filter(Boolean);
  const roleText = descriptors.length
    ? descriptors.length === 1
      ? descriptors[0]
      : `${descriptors.slice(0, -1).join(currentLang === "ro" ? ", " : ", ")}${currentLang === "ro" ? " și " : " and "}${descriptors.at(-1)}`
    : "e tipul care nu se lasă prins de ordinea obișnuită";

  return {
    ro: `${champ.name} ${roleText}. Nu cere permisiune ca să existe — intră în scenă, decide rapid și lasă energia să vorbească pentru el.`,
    en: `${champ.name} ${roleText}. They do not wait for permission to be present — they step in, decide fast, and let their energy do the talking.`,
    quote: {
      ro: `"${champ.name} nu face compromisuri cu instinctul."`,
      en: `"${champ.name} never compromises with instinct."`,
    },
    traits: tags.length
      ? tags.map((tag) => ({
          ro: ROLE_TITLES[tag]?.ro || tag,
          en: ROLE_TITLES[tag]?.en || tag,
        }))
      : [{ ro: "Energie brăzdată de curaj", en: "Energy sharpened by courage" }],
  };
}

function buildPersonalityBlurb(champ) {
  const tags = Array.isArray(champ.tags) ? champ.tags : [];
  const primary = tags[0] || "Fighter";
  const first = {
    Marksman: {
      ro: "își aleargă instinctul și lovește exact unde contează",
      en: "follows instinct and lands exactly where it matters",
    },
    Assassin: {
      ro: "acționează înainte ca ceilalți să aibă timp să reacționeze",
      en: "acts before anyone else has time to react",
    },
    Mage: {
      ro: "transformă ideea în forță și schimbă peisajul dintr-o clipă",
      en: "turns an idea into force and changes the whole landscape in a heartbeat",
    },
    Support: {
      ro: "ține echipa stabilă și face ca oamenii să se simtă în siguranță",
      en: "keeps the team steady and makes people feel safe",
    },
    Tank: {
      ro: "își asumă greutatea momentului și nu lasă lucrurile să se prăbușească",
      en: "takes on the weight of the moment and keeps everything from collapsing",
    },
    Fighter: {
      ro: "merge înainte cu sânge rece și dorință de victorie",
      en: "moves forward with calm and a hunger to win",
    },
  };

  return {
    ro: `Ești ${champ.name}: ${first[primary]?.ro || "ai energia unui lider care nu se oprește ușor"}.`,
    en: `You carry ${champ.name}'s energy: ${first[primary]?.en || "the confidence of someone who never backs down easily"}.`,
  };
}

const FALLBACK_CHAMPIONS = {
  jinx: {
    name: "Jinx",
    title: { ro: "Gloanțele pierdute", en: "the Loose Cannon" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_0.jpg",
    imagePosition: "center 18%",
    tags: ["Marksman", "Assassin"],
    blurb: {
      ro: "Ești haosul simpatic: te plictisești ușor, râzi tare și acționezi înainte să gândești. Lumii i-ar prinde bine puțin mai multă culoare — și tu o aduci.",
      en: "You're charming chaos: easily bored, loud laughter, act first. The world could use more color — and you bring it.",
    },
  },
  lux: {
    name: "Lux",
    title: { ro: "Doamna Luminii", en: "the Lady of Luminosity" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_0.jpg",
    imagePosition: "center 18%",
    tags: ["Mage", "Support"],
    blurb: {
      ro: "Crezi în oameni și în a doua șansă. Preferi să luminezi o situație decât să o dai în aer — dar când e nevoie, strălucești destul de tare.",
      en: "You believe in people and second chances. You'd rather light up a problem than blow it up — but when needed, you shine hard.",
    },
  },
  yasuo: {
    name: "Yasuo",
    title: { ro: "Neiertatul", en: "the Unforgiven" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg",
    imagePosition: "center 22%",
    tags: ["Fighter", "Assassin"],
    blurb: {
      ro: "Mergi pe drumul tău, chiar dacă e singuratic. Onorabil, încăpățânat, greu de impresionat — și mai greu de oprit odată ce ți-ai ales direcția.",
      en: "You walk your own road, even if it's lonely. Honorable, stubborn, hard to impress — and harder to stop once you pick a direction.",
    },
  },
  thresh: {
    name: "Thresh",
    title: { ro: "Gardianul lanțurilor", en: "the Chain Warden" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Thresh_0.jpg",
    imagePosition: "center 15%",
    tags: ["Support", "Tank"],
    blurb: {
      ro: "Citești oamenii ca pe o hartă. Nu te grăbești: strângi informații, ții controlul și lași pe alții să facă prima greșeală.",
      en: "You read people like a map. No rush: you gather intel, keep control, and let others make the first mistake.",
    },
  },
  ahri: {
    name: "Ahri",
    title: { ro: "Vulpita cu nouă cozi", en: "the Nine-Tailed Fox" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg",
    imagePosition: "center 10%",
    tags: ["Mage", "Assassin"],
    blurb: {
      ro: "Curioasă, fermecătoare și greu de prins. Îți place să înțelegi ce simt ceilalți — și să rămâi tu cea care decide când te apropii.",
      en: "Curious, charming, and hard to catch. You like reading feelings — and staying the one who decides when to get close.",
    },
  },
  darius: {
    name: "Darius",
    title: { ro: "Mâna Noxusului", en: "the Hand of Noxus" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Darius_0.jpg",
    imagePosition: "center 20%",
    tags: ["Fighter", "Tank"],
    blurb: {
      ro: "Direct, practic, fără vorbe de umplutură. Dacă e de făcut, o faci tu. Respectul se câștigă prin rezultate, nu prin farmec.",
      en: "Direct, practical, no filler talk. If it needs doing, you do it. Respect is earned by results, not charm.",
    },
  },
  lulu: {
    name: "Lulu",
    title: { ro: "Vrăjitoarea zânelor", en: "the Fae Sorceress" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lulu_0.jpg",
    imagePosition: "center 25%",
    tags: ["Support", "Mage"],
    blurb: {
      ro: "Vezi lumea ca pe un joc blând. Ești creativă, caldă și puțin imprevizibilă — dar intenția e aproape mereu bună.",
      en: "You treat the world like a gentle game. Creative, warm, a little unpredictable — but the intent is almost always kind.",
    },
  },
  zed: {
    name: "Zed",
    title: { ro: "Stăpânul Umbrelor", en: "the Master of Shadows" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zed_0.jpg",
    imagePosition: "center 16%",
    tags: ["Assassin", "Fighter"],
    blurb: {
      ro: "Disciplină și ambiție. Nu aștepți permisiunea: te antrenezi, calculezi și faci ce trebuie ca să ajungi unde ți-ai propus.",
      en: "Discipline and ambition. You don't wait for permission: you train, calculate, and do what it takes to get where you aimed.",
    },
  },
  ekko: {
    name: "Ekko",
    title: { ro: "Copilul din timp", en: "the Boy Who Shattered Time" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ekko_0.jpg",
    imagePosition: "center 14%",
    tags: ["Assassin", "Fighter"],
    blurb: {
      ro: "Îți place să vezi mai departe decât restul. Ești inteligent, improvisat și nu te oprește o regulă dacă o poți înțelege altfel.",
      en: "You like seeing farther than the rest. Clever, improvising, and a rule never stops you if you can bend it differently.",
    },
  },
  maokai: {
    name: "Maokai",
    title: { ro: "Arborele răsucit", en: "the Twisted Treant" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Maokai_0.jpg",
    imagePosition: "center 24%",
    tags: ["Tank", "Mage"],
    blurb: {
      ro: "Ești stabil, profund și greu de zdruncinat. Nu dai din coadă pentru orice, dar când protejezi pe cineva, o faci cu tot ce ai.",
      en: "You are steady, deep-rooted, and hard to shake. You don't chase every conflict, but when you protect someone, you do it completely.",
    },
  },
  teemo: {
    name: "Teemo",
    title: { ro: "Scoutul fulgerător", en: "the Swift Scout" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Teemo_0.jpg",
    imagePosition: "center 18%",
    tags: ["Marksman", "Support"],
    blurb: {
      ro: "Îți place să fii pregătit și să aduci un zâmbet mic, dar eficient. Într-o lume agitată, tu ai un plan și o idee rapidă la îndemână.",
      en: "You like being prepared and bringing a small but effective smile. In a hectic world, you have a plan and a quick idea ready.",
    },
  },
  ashe: {
    name: "Ashe",
    title: { ro: "Arca de gheață", en: "the Frost Archer" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg",
    imagePosition: "center 18%",
    tags: ["Marksman", "Support"],
    blurb: {
      ro: "Ești calmă, pregătită și mereu în control. În loc să forțezi scena, o îndrepți cu răbdare și o cureți de haos.",
      en: "You are calm, prepared, and in control. Instead of forcing the moment, you guide it with patience and steady resolve.",
    },
  },
  caitlyn: {
    name: "Caitlyn",
    title: { ro: "Culmea precisiei", en: "the Sheriff of Piltover" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_0.jpg",
    imagePosition: "center 18%",
    tags: ["Marksman"],
    blurb: {
      ro: "Ai o minte ascuțită și o senzație de ordine care face lucrurile să apară clar. Când încerci să rezolvi ceva, o faci cu precizie.",
      en: "You have a sharp mind and a natural sense of order that makes things appear clear. When you solve a problem, you do it precisely.",
    },
  },
  garen: {
    name: "Garen",
    title: { ro: "Puterea de Demacia", en: "The Might of Demacia" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_0.jpg",
    imagePosition: "center 18%",
    tags: ["Fighter", "Tank"],
    blurb: {
      ro: "Ești drept, hotărât și foarte greu de clintit. Nu te lași prins în incertitudine și nu dai înapoi când cealaltă parte încearcă să te întârzie.",
      en: "You are honest, decisive, and hard to sway. You don't get stuck in uncertainty, and you do not back down when others try to slow you.",
    },
  },
  vi: {
    name: "Vi",
    title: { ro: "Pilula de fier", en: "the Piltover Enforcer" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vi_0.jpg",
    imagePosition: "center 18%",
    tags: ["Fighter", "Tank"],
    blurb: {
      ro: "Ai energia brută a unei persoane care nu se ascunde niciodată de luptă. Îți place să fii aproape de realitate și să rezolvi lucrurile în mișcare.",
      en: "You carry the raw energy of someone who never hides from a fight. You like being close to the truth and solving things in motion.",
    },
  },
  morgana: {
    name: "Morgana",
    title: { ro: "Îngerul părăsit", en: "the Fallen" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Morgana_0.jpg",
    imagePosition: "center 18%",
    tags: ["Mage", "Support"],
    blurb: {
      ro: "Ai o putere calmă și o moralitate foarte clară. Ești în stare să protejezi pe cineva fără să ceri mulțumiri și să nu lași răul să treacă neobservat.",
      en: "You have a quiet power and a very clear moral code. You are willing to protect someone without asking for praise and prevent evil from slipping by unnoticed.",
    },
  },
  soraka: {
    name: "Soraka",
    title: { ro: "Îngrijitoarea stelelor", en: "the Starchild" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Soraka_0.jpg",
    imagePosition: "center 18%",
    tags: ["Support", "Mage"],
    blurb: {
      ro: "Ești compasiune într-o lume aglomerată. Sprinkle de iubire, calm și răbdare, iar oamenii se simt deodată mai puțin singuri.",
      en: "You are compassion in a crowded world. With patience, tenderness, and steady hope, you make people feel less alone.",
    },
  },
  riven: {
    name: "Riven",
    title: { ro: "Exilata", en: "the Exile" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Riven_0.jpg",
    imagePosition: "center 18%",
    tags: ["Fighter", "Assassin"],
    blurb: {
      ro: "Tu nu ceri aprobarea. Știi pe ce ești capabil și te lași ghidat mai mult de onoare decât de frică.",
      en: "You do not ask for approval. You know what you are capable of and follow honor more than fear.",
    },
  },
  volibear: {
    name: "Volibear",
    title: { ro: "Spiritul fulgerului", en: "the Relentless Storm" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Volibear_0.jpg",
    imagePosition: "center 18%",
    tags: ["Tank", "Fighter"],
    blurb: {
      ro: "Ești puternic, direct și greu de stins. Când te ridici, nu e pentru atenție, ci pentru a ține piept oricui se opune.",
      en: "You are strong, direct, and hard to extinguish. When you rise, you do it not for attention but to stand against anyone who opposes you.",
    },
  },
  ryze: {
    name: "Ryze",
    title: { ro: "Magul de rugăciuni", en: "the Rune Mage" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ryze_0.jpg",
    imagePosition: "center 18%",
    tags: ["Mage", "Fighter"],
    blurb: {
      ro: "Tu înțelegi că puterea fără sens e doar zgomot. Când știi ce vrei, nu te oprește nici o limită a tradiției.",
      en: "You understand that power without purpose is only noise. Once you know what you want, no tradition can stop you.",
    },
  },
  shyvana: {
    name: "Shyvana",
    title: { ro: "Dragonul roșu", en: "the Half-Dragon" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shyvana_0.jpg",
    imagePosition: "center 18%",
    tags: ["Fighter", "Tank"],
    blurb: {
      ro: "Ai foc în tine, dar nu e doar furie; e instinct. Când simți că se întâmplă ceva real, nu te mai oprește nimeni.",
      en: "You carry fire in you, but it is not only anger; it is instinct. When something real happens, no one can stop you from answering it.",
    },
  },
  akali: {
    name: "Akali",
    title: { ro: "Furia umbrei", en: "the Rogue Assassin" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg",
    imagePosition: "center 18%",
    tags: ["Assassin"],
    blurb: {
      ro: "Tu nu ești acolo ca să fii văzut. Ești acolo ca să finalizezi lucrurile înainte ca ceilalți să se pregătească să reactioneze.",
      en: "You are not there to be seen. You are there to finish the job before others have time to react.",
    },
  },
  veigar: {
    name: "Veigar",
    title: { ro: "Micul tiran", en: "the Tiny Master of Evil" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Veigar_0.jpg",
    imagePosition: "center 18%",
    tags: ["Mage"],
    blurb: {
      ro: "Ai privirea unui geniu care știe că marea putere nu necesită dezordine; doar o idee clară și un moment de oportunitate.",
      en: "You have the gaze of a genius who knows that real power does not need chaos; it needs a clear idea and an opening.",
    },
  },
  missfortune: {
    name: "Miss Fortune",
    title: { ro: "Marea Pescărușă", en: "the Bounty Hunter" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/MissFortune_0.jpg",
    imagePosition: "center 18%",
    tags: ["Marksman"],
    blurb: {
      ro: "Tu nu te ascunzi după scenă; îți vrei aerul, lumina și șansa de a lua ceea ce merită să fie luat.",
      en: "You do not hide behind the scene; you want the air, the light, and the chance to take what deserves to be taken.",
    },
  },
  leona: {
    name: "Leona",
    title: { ro: "Lumina zilei", en: "the Radiant Dawn" },
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Leona_0.jpg",
    imagePosition: "center 18%",
    tags: ["Support", "Tank"],
    blurb: {
      ro: "Ești o forță de protecție. Nu te miști pentru glorie, ci pentru a stăpâni frumusețea curajului în fața amenințărilor.",
      en: "You are a force of protection. You do not move for glory, but to hold the beauty of courage against threat.",
    },
  },
};

Object.entries(FALLBACK_CHAMPIONS).forEach(([id, champ]) => {
  const personality = buildPersonalityBlurb(champ);
  champ.blurb = personality;
  const narrative = buildNarrative(champ);
  champ.story = narrative;
  champ.traits = narrative.traits;
  champ.id = id;
});

const CHAMPION_URL = "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/en_US/champion.json";
let champions = { ...FALLBACK_CHAMPIONS };

function normalizeChampion(id, data) {
  const name = data.name || id;
  const title = data.title || "Champion";
  const tags = Array.isArray(data.tags) ? data.tags : [];
  const champion = {
    id,
    key: data.key || id,
    name,
    title: {
      ro: title,
      en: title,
    },
    image: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`,
    imagePosition: "center 18%",
    tags,
    blurb: buildPersonalityBlurb({ name, tags }),
  };

  const narrative = buildNarrative(champion);
  champion.story = narrative;
  champion.traits = narrative.traits;
  return champion;
}

function buildChampionMap(rawData) {
  const map = {};
  Object.entries(rawData).forEach(([id, data]) => {
    map[id] = normalizeChampion(id, data);
  });
  return map;
}

async function hydrateChampions() {
  try {
    const response = await fetch(CHAMPION_URL);
    if (!response.ok) throw new Error("Unable to load Riot champion data");
    const payload = await response.json();
    const fullMap = buildChampionMap(payload.data);
    champions = fullMap;
    Object.entries(champions).forEach(([id, champ]) => {
      champ.id = id;
    });
  } catch (error) {
    champions = { ...FALLBACK_CHAMPIONS };
  }
}

hydrateChampions();

function buildScores(tagList, points) {
  return Object.fromEntries(tagList.map((tag) => [tag, points]));
}

function createQuestions() {
  return [
    {
      text: { ro: "Ce înseamnă pentru tine un weekend ideal?", en: "What does the perfect weekend look like for you?" },
      answers: [
        { text: { ro: "Haos, prieteni și zero planuri", en: "Chaos, friends, and zero plans" }, scores: buildScores(["Marksman", "Assassin"], 2) },
        { text: { ro: "Obiective clare și progres constant", en: "Clear goals and steady progress" }, scores: buildScores(["Fighter", "Tank"], 2) },
        { text: { ro: "Ajut pe cineva și ies în evidență", en: "I help someone and stand out" }, scores: buildScores(["Support", "Mage"], 2) },
        { text: { ro: "Singur, pe drumul meu", en: "Alone, on my own path" }, scores: buildScores(["Assassin", "Fighter"], 2) },
      ],
    },
    {
      text: { ro: "Ce te atrage cel mai mult la o persoană?", en: "What attracts you most to another person?" },
      answers: [
        { text: { ro: "Energie și idei nebunești", en: "Energy and wild ideas" }, scores: buildScores(["Marksman", "Mage"], 2) },
        { text: { ro: "Inteligență și calm", en: "Intelligence and calm" }, scores: buildScores(["Assassin", "Support"], 2) },
        { text: { ro: "Siguranță și onestitate", en: "Security and honesty" }, scores: buildScores(["Support", "Tank"], 2) },
        { text: { ro: "Ambiție și disciplină", en: "Ambition and discipline" }, scores: buildScores(["Fighter", "Mage"], 2) },
      ],
    },
    {
      text: { ro: "Când ceva merge prost, ce faci mai întâi?", en: "When something goes wrong, what do you do first?" },
      answers: [
        { text: { ro: "Mă opresc, respir și zâmbesc", en: "I pause, breathe, and smile" }, scores: buildScores(["Support", "Marksman"], 2) },
        { text: { ro: "Caut imediat o soluție", en: "I look for a solution right away" }, scores: buildScores(["Assassin", "Mage"], 2) },
        { text: { ro: "Îmi asum controlul și repar", en: "I take control and fix it" }, scores: buildScores(["Tank", "Fighter"], 2) },
        { text: { ro: "Mă retrag, mă concentrez și revin", en: "I step back, refocus, and come back stronger" }, scores: buildScores(["Fighter", "Assassin"], 2) },
      ],
    },
    {
      text: { ro: "Ce fel de provocare te motivează?", en: "What kind of challenge motivates you?" },
      answers: [
        { text: { ro: "Una care schimbă totul", en: "One that changes everything" }, scores: buildScores(["Assassin", "Marksman"], 2) },
        { text: { ro: "Una care cere răbdare și strategie", en: "One that requires patience and strategy" }, scores: buildScores(["Support", "Tank"], 2) },
        { text: { ro: "Una în care pot salva pe cineva", en: "One where I can save someone" }, scores: buildScores(["Support", "Mage"], 2) },
        { text: { ro: "Una în care îmi arăt puterea", en: "One where I show my strength" }, scores: buildScores(["Fighter", "Tank"], 2) },
      ],
    },
    {
      text: { ro: "Dacă ai avea un superputere, care ar fi?", en: "If you had a superpower, what would it be?" },
      answers: [
        { text: { ro: "Aș schimba totul într-o clipă", en: "I would change everything in an instant" }, scores: buildScores(["Assassin", "Mage"], 2) },
        { text: { ro: "Aș proteja și aș lumina", en: "I would protect and illuminate" }, scores: buildScores(["Support", "Mage"], 2) },
        { text: { ro: "Aș mă adapta și aș învăța repede", en: "I would adapt and learn quickly" }, scores: buildScores(["Fighter", "Marksman"], 2) },
        { text: { ro: "Aș controla spațiul din jur", en: "I would control the space around me" }, scores: buildScores(["Tank", "Fighter"], 2) },
      ],
    },
    {
      text: { ro: "Cum te comporți într-o competiție?", en: "How do you behave in a competition?" },
      answers: [
        { text: { ro: "Mă distrez și țin toată lumea în alertă", en: "I have fun and keep everyone on edge" }, scores: buildScores(["Marksman", "Assassin"], 2) },
        { text: { ro: "Îmi fac planul și îl execut fără ezitare", en: "I make a plan and execute it without hesitation" }, scores: buildScores(["Fighter", "Tank"], 2) },
        { text: { ro: "Mă concentrez să nu pierd controlul", en: "I focus on not losing control" }, scores: buildScores(["Support", "Tank"], 2) },
        { text: { ro: "Folosec mintea și ajung acolo unde trebuie", en: "I use my mind and get where I need to be" }, scores: buildScores(["Mage", "Assassin"], 2) },
      ],
    },
    {
      text: { ro: "Ce părere ai despre reguli?", en: "What do you think about rules?" },
      answers: [
        { text: { ro: "Există pentru a fi încălcate, dacă e nevoie", en: "They exist to be broken if necessary" }, scores: buildScores(["Assassin", "Marksman"], 2) },
        { text: { ro: "Există pentru a ajuta societatea", en: "They exist to help society" }, scores: buildScores(["Support", "Tank"], 2) },
        { text: { ro: "Le respect dacă au sens", en: "I respect them if they make sense" }, scores: buildScores(["Mage", "Fighter"], 2) },
        { text: { ro: "Le folosesc pentru a obține un avantaj", en: "I use them to gain an advantage" }, scores: buildScores(["Assassin", "Tank"], 2) },
      ],
    },
    {
      text: { ro: "Ce înseamnă succesul pentru tine?", en: "What does success mean to you?" },
      answers: [
        { text: { ro: "Să trăiești liber și fără griji", en: "To live freely and without worries" }, scores: buildScores(["Marksman", "Support"], 2) },
        { text: { ro: "Să-ți atingi visurile cu propriile forțe", en: "To achieve your dreams with your own strength" }, scores: buildScores(["Fighter", "Assassin"], 2) },
        { text: { ro: "Să protejezi oamenii care contează", en: "To protect the people who matter" }, scores: buildScores(["Support", "Tank"], 2) },
        { text: { ro: "Să fii de neoprit", en: "To be unstoppable" }, scores: buildScores(["Fighter", "Marksman"], 2) },
      ],
    },
    {
      text: { ro: "Care este locul tău preferat într-o zi liberă?", en: "What is your favorite place on a day off?" },
      answers: [
        { text: { ro: "În mijlocul unei acțiuni mari", en: "In the middle of a big action" }, scores: buildScores(["Marksman", "Assassin"], 2) },
        { text: { ro: "Într-un spațiu liniștit și creativ", en: "In a quiet, creative space" }, scores: buildScores(["Mage", "Support"], 2) },
        { text: { ro: "În natură, lângă cineva drag", en: "In nature, beside someone dear" }, scores: buildScores(["Support", "Tank"], 2) },
        { text: { ro: "Unde nu suntem deranjați", en: "Where no one bothers us" }, scores: buildScores(["Fighter", "Assassin"], 2) },
      ],
    },
    {
      text: { ro: "Ce îți dă cele mai multe energie?", en: "What gives you the most energy?" },
      answers: [
        { text: { ro: "O idee nebunească și un impuls nou", en: "A wild idea and a fresh spark" }, scores: buildScores(["Marksman", "Mage"], 2) },
        { text: { ro: "Un obiectiv clar și un plan bun", en: "A clear objective and a solid plan" }, scores: buildScores(["Tank", "Fighter"], 2) },
        { text: { ro: "O conversație sinceră", en: "A sincere conversation" }, scores: buildScores(["Support", "Mage"], 2) },
        { text: { ro: "Timp pentru mine și claritate", en: "Time for myself and clarity" }, scores: buildScores(["Assassin", "Fighter"], 2) },
      ],
    },
    {
      text: { ro: "Într-un grup, ce rol ți se potrivește cel mai bine?", en: "In a group, which role suits you best?" },
      answers: [
        { text: { ro: "Cel care ridică atmosfera", en: "The one who lifts the mood" }, scores: buildScores(["Marksman", "Support"], 2) },
        { text: { ro: "Liderul care decide", en: "The leader who makes the call" }, scores: buildScores(["Fighter", "Tank"], 2) },
        { text: { ro: "Strategul din umbră", en: "The strategist in the shadows" }, scores: buildScores(["Assassin", "Mage"], 2) },
        { text: { ro: "Lupul singuratic", en: "The lone wolf" }, scores: buildScores(["Assassin", "Fighter"], 2) },
      ],
    },
    {
      text: { ro: "Ce contează cel mai mult pentru tine în viață?", en: "What matters most to you in life?" },
      answers: [
        { text: { ro: "Libertatea și senzația de a trăi", en: "Freedom and the feeling of living" }, scores: buildScores(["Marksman", "Assassin"], 2) },
        { text: { ro: "Familia și oamenii care contează", en: "Family and the people who matter" }, scores: buildScores(["Support", "Tank"], 2) },
        { text: { ro: "Curiozitatea și învățarea", en: "Curiosity and learning" }, scores: buildScores(["Mage", "Assassin"], 2) },
        { text: { ro: "Puterea de a ajunge unde vrei", en: "The power to reach where you want" }, scores: buildScores(["Fighter", "Marksman"], 2) },
      ],
    },
  ];
}

let questions = createQuestions();
