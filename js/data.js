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
  champ.profileTraits = championMetadata[champ.name]?.traits || [];
  champ.id = id;
});

const CHAMPION_URL = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/data/en_US/champion.json`;
let champions = { ...FALLBACK_CHAMPIONS };

function normalizeChampion(id, data) {
  const name = data.name || id;
  const title = data.title || "Champion";
  const tags = Array.isArray(data.tags) ? data.tags : [];
  const profileTraits = championMetadata[id]?.traits || [];
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
    profileTraits,
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

function buildScores(roleTags, profileTraits) {
  return Object.fromEntries([
    ...roleTags.map((tag) => [tag, 1]),
    ...profileTraits.map((tag) => [tag, 2]),
  ]);
}

function createQuestions() {
  return [
    {
      text: { ro: "Cum arată pentru tine o zi liberă reușită?", en: "What does a great day off look like to you?" },
      answers: [
        { text: { ro: "O aventură spontană, alături de prieteni.", en: "A spontaneous adventure with friends." }, scores: buildScores(["Marksman"], ["chaotic", "free", "playful"]) },
        { text: { ro: "Un plan bine făcut și timp să-l duc la capăt.", en: "A solid plan and time to see it through." }, scores: buildScores(["Fighter", "Tank"], ["ambitious", "disciplined", "focused"]) },
        { text: { ro: "Să fiu alături de oamenii la care țin.", en: "Being there for the people I care about." }, scores: buildScores(["Support", "Tank"], ["protector", "team", "caretaker"]) },
        { text: { ro: "Timp pentru mine și propriile idei.", en: "Time to myself and my own ideas." }, scores: buildScores(["Assassin", "Mage"], ["independent", "curious", "inventive"]) },
      ],
    },
    {
      text: { ro: "Ce calitate apreciezi cel mai mult la oameni?", en: "Which quality do you value most in people?" },
      answers: [
        { text: { ro: "Creativitatea și pofta de viață.", en: "Creativity and a zest for life." }, scores: buildScores(["Mage", "Marksman"], ["playful", "inventive", "curious"]) },
        { text: { ro: "Inteligența și stăpânirea de sine.", en: "Intelligence and self-control." }, scores: buildScores(["Mage", "Assassin"], ["knowledge", "disciplined", "focused"]) },
        { text: { ro: "Loialitatea și grija față de ceilalți.", en: "Loyalty and care for others." }, scores: buildScores(["Support", "Tank"], ["protector", "team", "honorable"]) },
        { text: { ro: "Curajul de a-și urma propriul drum.", en: "The courage to follow one's own path." }, scores: buildScores(["Fighter", "Assassin"], ["independent", "warrior", "grit"]) },
      ],
    },
    {
      text: { ro: "Când apare o problemă, care e primul tău instinct?", en: "When a problem comes up, what's your first instinct?" },
      answers: [
        { text: { ro: "Îi ascult pe ceilalți și caut o soluție împreună.", en: "I listen to others and look for a solution together." }, scores: buildScores(["Support", "Mage"], ["team", "caretaker", "balanced"]) },
        { text: { ro: "Analizez situația și găsesc punctul slab.", en: "I analyze the situation and find the weak point." }, scores: buildScores(["Assassin", "Mage"], ["knowledge", "opportunistic", "precise"]) },
        { text: { ro: "Preiau inițiativa și înfrunt problema direct.", en: "I take the lead and face the problem head-on." }, scores: buildScores(["Fighter", "Tank"], ["warrior", "frontline", "grit"]) },
        { text: { ro: "Fac un pas în spate, îmi refac planul și revin.", en: "I step back, rethink my plan, and try again." }, scores: buildScores(["Mage", "Fighter"], ["disciplined", "focused", "survivor"]) },
      ],
    },
    {
      text: { ro: "Ce fel de provocare te motivează cel mai mult?", en: "What kind of challenge motivates you most?" },
      answers: [
        { text: { ro: "Să-mi asum un risc și să schimb cursul lucrurilor.", en: "Taking a risk and changing the course of things." }, scores: buildScores(["Assassin", "Marksman"], ["lethal", "opportunistic", "grit"]) },
        { text: { ro: "Să descopăr o soluție pe care alții n-au observat-o.", en: "Finding a solution others haven't noticed." }, scores: buildScores(["Mage", "Assassin"], ["curious", "knowledge", "inventive"]) },
        { text: { ro: "Să apăr pe cineva sau ceva important.", en: "Protecting someone or something important." }, scores: buildScores(["Support", "Tank"], ["protector", "honorable", "team"]) },
        { text: { ro: "Să depășesc un obstacol prin perseverență.", en: "Overcoming an obstacle through perseverance." }, scores: buildScores(["Fighter", "Tank"], ["warrior", "grit", "survivor"]) },
      ],
    },
    {
      text: { ro: "Dacă ai putea dobândi o putere, ce ai alege?", en: "If you could gain a power, what would you choose?" },
      answers: [
        { text: { ro: "Să mă deplasez fără să mă observe nimeni și să apar unde nu mă așteaptă nimeni.", en: "Moving unseen and appearing where no one expects me." }, scores: buildScores(["Assassin"], ["independent", "lethal", "opportunistic"]) },
        { text: { ro: "Să vindec și să-i apăr pe cei din jur.", en: "Healing and protecting the people around me." }, scores: buildScores(["Support"], ["protector", "caretaker", "team"]) },
        { text: { ro: "Să înțeleg orice și să-mi adaptez puterile.", en: "Understanding anything and adapting my abilities." }, scores: buildScores(["Mage"], ["magical", "knowledge", "curious"]) },
        { text: { ro: "Să rezist oricărei lovituri și să țin piept pericolului.", en: "Withstanding any blow and standing up to danger." }, scores: buildScores(["Tank", "Fighter"], ["frontline", "durable", "grit"]) },
      ],
    },
    {
      text: { ro: "Cum abordezi o competiție?", en: "How do you approach a competition?" },
      answers: [
        { text: { ro: "Joc imprevizibil și mă bucur de moment.", en: "I play unpredictably and enjoy the moment." }, scores: buildScores(["Marksman", "Mage"], ["chaotic", "playful", "free"]) },
        { text: { ro: "Îmi stabilesc ținta și muncesc până o ating.", en: "I set a goal and work until I reach it." }, scores: buildScores(["Fighter", "Marksman"], ["ambitious", "focused", "grit"]) },
        { text: { ro: "Îmi susțin echipa și rămân de încredere.", en: "I support my team and stay dependable." }, scores: buildScores(["Support", "Tank"], ["team", "protector", "dutiful"]) },
        { text: { ro: "Studiez adversarii și aștept momentul potrivit.", en: "I study my opponents and wait for the right moment." }, scores: buildScores(["Assassin", "Mage"], ["precise", "disciplined", "opportunistic"]) },
      ],
    },
    {
      text: { ro: "Cum te raportezi la reguli?", en: "How do you feel about rules?" },
      answers: [
        { text: { ro: "Le încalc dacă stau în calea unei cauze drepte.", en: "I break them if they stand in the way of what's right." }, scores: buildScores(["Fighter", "Assassin"], ["independent", "honorable", "ruthless"]) },
        { text: { ro: "Le respect dacă îi protejează pe oameni.", en: "I respect them if they protect people." }, scores: buildScores(["Support", "Tank"], ["dutiful", "protector", "honorable"]) },
        { text: { ro: "Le analizez și le urmez doar dacă au logică.", en: "I examine them and follow them only if they make sense." }, scores: buildScores(["Mage"], ["knowledge", "curious", "balanced"]) },
        { text: { ro: "Le cunosc bine ca să le pot folosi în avantajul meu.", en: "I learn them well so I can use them to my advantage." }, scores: buildScores(["Assassin", "Mage"], ["knowledge", "opportunistic", "ambitious"]) },
      ],
    },
    {
      text: { ro: "Ce înseamnă succesul pentru tine?", en: "What does success mean to you?" },
      answers: [
        { text: { ro: "Să am libertatea să-mi aleg propriul drum.", en: "Having the freedom to choose my own path." }, scores: buildScores(["Marksman", "Assassin"], ["free", "independent", "opportunistic"]) },
        { text: { ro: "Să-mi ating obiectivele prin muncă și disciplină.", en: "Reaching my goals through hard work and discipline." }, scores: buildScores(["Fighter", "Mage"], ["ambitious", "disciplined", "focused"]) },
        { text: { ro: "Să-i ajut pe cei dragi să fie în siguranță.", en: "Helping the people I love stay safe." }, scores: buildScores(["Support", "Tank"], ["protector", "team", "caretaker"]) },
        { text: { ro: "Să-mi depășesc limitele și să nu renunț.", en: "Pushing my limits and refusing to give up." }, scores: buildScores(["Fighter", "Marksman"], ["grit", "survivor", "warrior"]) },
      ],
    },
    {
      text: { ro: "Unde ți-ar plăcea să-ți petreci timpul liber?", en: "Where would you like to spend your free time?" },
      answers: [
        { text: { ro: "Într-un loc aglomerat, plin de viață și surprize.", en: "Somewhere lively, full of people and surprises." }, scores: buildScores(["Marksman", "Mage"], ["chaotic", "playful", "free"]) },
        { text: { ro: "Într-un atelier sau într-un loc unde pot crea ceva.", en: "In a workshop or somewhere I can create something." }, scores: buildScores(["Mage"], ["inventive", "curious", "knowledge"]) },
        { text: { ro: "În natură, alături de prieteni sau familie.", en: "In nature, with friends or family." }, scores: buildScores(["Support", "Tank"], ["nature", "team", "protector"]) },
        { text: { ro: "Într-un loc liniștit, unde mă pot concentra.", en: "Somewhere quiet where I can focus." }, scores: buildScores(["Assassin", "Mage"], ["independent", "disciplined", "focused"]) },
      ],
    },
    {
      text: { ro: "Ce îți dă energie?", en: "What gives you energy?" },
      answers: [
        { text: { ro: "Ideile noi și libertatea de a improviza.", en: "New ideas and the freedom to improvise." }, scores: buildScores(["Mage", "Marksman"], ["inventive", "playful", "curious"]) },
        { text: { ro: "Un obiectiv greu și un plan clar.", en: "A difficult goal and a clear plan." }, scores: buildScores(["Fighter", "Tank"], ["ambitious", "disciplined", "orderly"]) },
        { text: { ro: "Să fac o diferență pentru cineva.", en: "Making a difference for someone." }, scores: buildScores(["Support", "Mage"], ["team", "protector", "caretaker"]) },
        { text: { ro: "Să-mi urmez instinctul fără să depind de alții.", en: "Following my instincts without relying on others." }, scores: buildScores(["Assassin", "Fighter"], ["independent", "opportunistic", "free"]) },
      ],
    },
    {
      text: { ro: "Ce rol ți se potrivește într-un grup?", en: "Which role suits you best in a group?" },
      answers: [
        { text: { ro: "Cel care aduce voie bună și idei neașteptate.", en: "The one who brings fun and unexpected ideas." }, scores: buildScores(["Marksman", "Mage"], ["playful", "chaotic", "inventive"]) },
        { text: { ro: "Cel care își asumă răspunderea și îi apără pe ceilalți.", en: "The one who takes responsibility and protects others." }, scores: buildScores(["Tank", "Support"], ["dutiful", "protector", "frontline"]) },
        { text: { ro: "Cel care observă totul și gândește câțiva pași înainte.", en: "The one who notices everything and thinks several steps ahead." }, scores: buildScores(["Mage", "Assassin"], ["knowledge", "orderly", "precise"]) },
        { text: { ro: "Cel care își păstrează independența și merge pe cont propriu.", en: "The one who stays independent and goes their own way." }, scores: buildScores(["Assassin", "Fighter"], ["independent", "free", "grit"]) },
      ],
    },
    {
      text: { ro: "Ce te face să ai încredere într-o alegere?", en: "What makes you confident in a choice?" },
      answers: [
        { text: { ro: "Intuiția și șansa de a acționa la momentul potrivit.", en: "Instinct and the chance to act at just the right moment." }, scores: buildScores(["Assassin", "Marksman"], ["opportunistic", "precise", "focused"]) },
        { text: { ro: "Să știu că alegerea îi protejează pe cei dragi.", en: "Knowing the choice protects the people I care about." }, scores: buildScores(["Support", "Tank"], ["protector", "honorable", "team"]) },
        { text: { ro: "Să înțeleg toate posibilitățile înainte să decid.", en: "Understanding all the possibilities before I decide." }, scores: buildScores(["Mage"], ["knowledge", "curious", "orderly"]) },
        { text: { ro: "Să-mi urmez convingerile chiar și când e greu.", en: "Following my convictions, even when it's difficult." }, scores: buildScores(["Fighter"], ["grit", "independent", "honorable"]) },
      ],
    },
  ];
}

let questions = createQuestions();
