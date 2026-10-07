const DDRAGON_VERSION = "16.19.1";
const champions = {
  "Aatrox": {
    "id": "Aatrox",
    "name": "Aatrox",
    "title": {
      "en": "the Darkin Blade",
      "ro": "sabia darkin"
    },
    "blurb": {
      "en": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
      "ro": "Aatrox și cei din poporul său au fost odată onorați pentru lupta pe care o purtau pentru a apăra Shurima de invazia Vidului. În cele din urmă, însă, au devenit un pericol și mai mare pentru Runeterra, fiind învinși doar de magia vicleană a muritorilor..."
    },
    "classes": [
      "Fighter"
    ],
    "region": "unaffiliated",
    "range": "melee",
    "style": "ad",
    "traits": [
      "independent",
      "warrior",
      "frontline",
      "grit",
      "honorable",
      "protector",
      "lethal",
      "tragic",
      "hungry",
      "ancient",
      "imperial"
    ]
  },
  "Ahri": {
    "id": "Ahri",
    "name": "Ahri",
    "title": {
      "en": "the Nine-Tailed Fox",
      "ro": "vulpea cu nouă cozi"
    },
    "blurb": {
      "en": "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward...",
      "ro": "Conectată din naștere cu tărâmul spiritelor, Ahri este o vastaya cu înfățișarea unei vulpi, care poate manipula emoțiile prăzii ei și îi poate sorbi esența vitală, furând frânturi de amintiri și idei de la fiecare suflet pe care-l consumă. Deși era..."
    },
    "classes": [
      "Mage",
      "Assassin"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "magical",
      "knowledge",
      "lethal",
      "independent",
      "opportunistic",
      "protector",
      "hungry"
    ]
  },
  "Akali": {
    "id": "Akali",
    "name": "Akali",
    "title": {
      "en": "the Rogue Assassin",
      "ro": "asasina nevăzută"
    },
    "blurb": {
      "en": "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one...",
      "ro": "După ce a abandonat Ordinul Kinkou și titlul de pumn al umbrei, Akali luptă acum singură, hotărâtă să devină arma letală de care are nevoie poporul ei. Deși n-a uitat ce a învățat-o Shen, maestrul ei, a jurat să apere Ionia și să-i ucidă inamicii unul..."
    },
    "classes": [
      "Assassin"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ap",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "lethal",
      "independent",
      "opportunistic",
      "ruthless",
      "protector",
      "haunted"
    ]
  },
  "Akshan": {
    "id": "Akshan",
    "name": "Akshan",
    "title": {
      "en": "the Rogue Sentinel",
      "ro": "santinela rebelă"
    },
    "blurb": {
      "en": "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they...",
      "ro": "Cu o sprânceană ridicată în fața pericolului, Akshan luptă împotriva răului cu șarm și poftă de răzbunare, dar niciodată cu o cămașă pe el. Se pricepe de minune să se furișeze pe lângă inamici și să reapară atunci când aceștia se așteaptă cel mai puțin..."
    },
    "classes": [
      "Marksman",
      "Assassin"
    ],
    "region": "shurima",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "precise",
      "focused",
      "lethal",
      "independent",
      "opportunistic",
      "honorable",
      "ruthless"
    ]
  },
  "Alistar": {
    "id": "Alistar",
    "name": "Alistar",
    "title": {
      "en": "the Minotaur",
      "ro": "minotaurul"
    },
    "blurb": {
      "en": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly...",
      "ro": "Alistar este un războinic viteaz cu o reputație pe măsură, ce caută să-și răzbune clanul ucis de imperiul noxian. Deși a fost capturat și forțat să devină gladiator, voința lui de neclintit l-a ajutat să nu se transforme cu adevărat într-o bestie. Fiind..."
    },
    "classes": [
      "Tank",
      "Support"
    ],
    "region": "unaffiliated",
    "range": "melee",
    "style": "tank",
    "traits": [
      "independent",
      "protector",
      "frontline",
      "durable",
      "caretaker",
      "team",
      "ambitious",
      "curious",
      "haunted",
      "celestial",
      "imperial"
    ]
  },
  "Ambessa": {
    "id": "Ambessa",
    "name": "Ambessa",
    "title": {
      "en": "Matriarch of War",
      "ro": "matriarha războiului"
    },
    "blurb": {
      "en": "All who know the name Medarda respect and fear the family's leader, Ambessa. As a Noxian general, she embodies a deadly combination of ruthless strength and fearless resolve in battle. Her role as matriarch is no different, requiring great cunning to...",
      "ro": "Toți cei care au auzit de clanul Medarda știu s-o respecte pe Ambessa, conducătoarea clanului, și să se teamă de ea. În rolul de general noxian, întrupează o combinație letală de putere nemiloasă și hotărâre neînfricată în luptă. În rolul de matriarhă..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "ad",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic"
    ]
  },
  "Amumu": {
    "id": "Amumu",
    "name": "Amumu",
    "title": {
      "en": "the Sad Mummy",
      "ro": "mumia tristă"
    },
    "blurb": {
      "en": "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe...",
      "ro": "Legendele spun că Amumu este un suflet singuratic și melancolic din imperiul antic al Shurimei, care străbate lumea-n lung și-n lat pentru a-și găsi un prieten. Un blestem străvechi l-a condamnat să rămână pe veci singur: atingerea sa înseamnă moarte..."
    },
    "classes": [
      "Tank",
      "Support"
    ],
    "region": "shurima",
    "range": "melee",
    "style": "ap",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "protector",
      "frontline",
      "durable",
      "caretaker",
      "team",
      "tragic",
      "haunted",
      "free"
    ]
  },
  "Anivia": {
    "id": "Anivia",
    "name": "Anivia",
    "title": {
      "en": "the Cryophoenix",
      "ro": "criophoenixul"
    },
    "blurb": {
      "en": "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland...",
      "ro": "Anivia este un spirit înaripat binevoitor care trăiește un ciclu etern de viață, moarte și renaștere pentru a proteja Freljordul. Este o semi-zeiță născută din asprimea gheții și a vânturilor, puteri pe care le invocă pentru a dejuca planurile celor..."
    },
    "classes": [
      "Mage"
    ],
    "region": "freljord",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "magical",
      "knowledge",
      "protector",
      "spiritual",
      "haunted",
      "celestial",
      "nature"
    ]
  },
  "Annie": {
    "id": "Annie",
    "name": "Annie",
    "title": {
      "en": "the Dark Child",
      "ro": "copilul întunericului"
    },
    "blurb": {
      "en": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable...",
      "ro": "Periculoasă și adorabil de precoce, Annie este o copilă înzestrată cu puteri imense, capabilă să controleze flăcările. Este un mag neobișnuit chiar și pentru ținuturile sălbatice aflate în umbra munților din nordul Noxusului. Afinitatea pentru foc i s-a..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "independent",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "ambitious",
      "haunted"
    ]
  },
  "Aphelios": {
    "id": "Aphelios",
    "name": "Aphelios",
    "title": {
      "en": "the Weapon of the Faithful",
      "ro": "arma credinței"
    },
    "blurb": {
      "en": "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by...",
      "ro": "Ieșind din umbra Lunii gata de luptă, Aphelios ucide vrăjmașii credinței sale într-o liniște mormântală, lăsând armele să vorbească în locul lui. E alimentat de o otravă care îl lasă fără glas și călăuzit de sora lui, Alune. Din sanctuarul ei îndepărtat..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "mount-targon",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "celestial",
      "destined",
      "spiritual",
      "precise",
      "focused",
      "dutiful",
      "ruthless",
      "haunted"
    ]
  },
  "Ashe": {
    "id": "Ashe",
    "name": "Ashe",
    "title": {
      "en": "the Frost Archer",
      "ro": "arcașa ghețurilor"
    },
    "blurb": {
      "en": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice...",
      "ro": "Ashe este un vlăstar al gheții și războinica-mamă a tribului Avarosei, iar sub stindardul ei se află cea mai mare oaste a nordului. E inteligentă, idealistă și puternică, însă nu se simte în largul ei în rolul de conducătoare. Folosește magia străveche..."
    },
    "classes": [
      "Marksman",
      "Support"
    ],
    "region": "freljord",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "precise",
      "focused",
      "caretaker",
      "team",
      "ambitious"
    ]
  },
  "AurelionSol": {
    "id": "AurelionSol",
    "name": "Aurelion Sol",
    "title": {
      "en": "The Star Forger",
      "ro": "făuritorul de stele"
    },
    "blurb": {
      "en": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his...",
      "ro": "Odată, demult, Aurelion Sol făurea minuni celeste pe care le răspândea în vidul nesfârșit al Cosmosului. Acum însă, e obligat să-și folosească puterile în slujba unui imperiu care l-a subjugat prin viclenie, un popor înzestrat cu puterea de a călători..."
    },
    "classes": [
      "Mage"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "independent",
      "magical",
      "knowledge",
      "ambitious",
      "playful",
      "celestial",
      "imperial"
    ]
  },
  "Aurora": {
    "id": "Aurora",
    "name": "Aurora",
    "title": {
      "en": "the Witch Between Worlds",
      "ro": "vrăjitoarea dintre lumi"
    },
    "blurb": {
      "en": "From the moment she was born, Aurora navigated life with a unique ability to move between the spirit and material realms. Determined to learn more about the spirit realm's inhabitants, she left her home to further her research and happened upon a...",
      "ro": "Din clipa în care s-a născut, Aurora a avut puterea unică de a trece din ținutul spiritual în cel material și înapoi. Hotărâtă să afle mai multe despre locuitorii tărâmului spiritual, a plecat de acasă și a găsit un semizeu rătăcit și chinuit, care-și..."
    },
    "classes": [
      "Mage",
      "Assassin"
    ],
    "region": "freljord",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "magical",
      "knowledge",
      "lethal",
      "independent",
      "opportunistic",
      "spiritual",
      "free"
    ]
  },
  "Azir": {
    "id": "Azir",
    "name": "Azir",
    "title": {
      "en": "the Emperor of the Sands",
      "ro": "împăratul nisipurilor"
    },
    "blurb": {
      "en": "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended...",
      "ro": "Azir a fost odată împăratul imperiului antic al Shurimei, un muritor care aproape că a reușit să atingă nemurirea. Cu toate acestea, mândria l-a orbit și, în clipa în care ar fi trebuit să fie pe culmea triumfului, a fost trădat și ucis. Acum, după..."
    },
    "classes": [
      "Mage",
      "Marksman"
    ],
    "region": "shurima",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "magical",
      "knowledge",
      "precise",
      "focused",
      "ruthless"
    ]
  },
  "Bard": {
    "id": "Bard",
    "name": "Bard",
    "title": {
      "en": "the Wandering Caretaker",
      "ro": "ocrotitorul misterelor"
    },
    "blurb": {
      "en": "A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic...",
      "ro": "Bard este un călător venit de dincolo de stele, o unealtă a destinului care luptă pentru a menține echilibrul și a se asigura că viața rezistă în fața haosului. Deși mulți locuitori ai Runeterrei i-au dedicat rătăcitorului cosmic felurite cântece și..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "independent",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "chaotic",
      "spiritual",
      "celestial",
      "nature"
    ]
  },
  "Belveth": {
    "id": "Belveth",
    "name": "Bel'Veth",
    "title": {
      "en": "the Empress of the Void",
      "ro": "împărăteasa Vidului"
    },
    "blurb": {
      "en": "A nightmarish empress created from the raw material of an entire devoured city, Bel'Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from...",
      "ro": "O împărăteasă de coșmar creată din materia primă a unui întreg oraș devorat, Bel'Veth este sfârșitul Runeterrei însăși... și începutul unei realități monstruoase pe care ea însăși o va aduce pe lume. Lăsându-se mânată de epoci de istorie, de cunoaștere..."
    },
    "classes": [
      "Fighter"
    ],
    "region": "void",
    "range": "melee",
    "style": "ap",
    "traits": [
      "hungry",
      "alien",
      "dark",
      "warrior",
      "frontline",
      "grit",
      "independent",
      "imperial"
    ]
  },
  "Blitzcrank": {
    "id": "Blitzcrank",
    "name": "Blitzcrank",
    "title": {
      "en": "the Great Steam Golem",
      "ro": "marele golem cu abur"
    },
    "blurb": {
      "en": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump...",
      "ro": "Blitzcrank este un automaton zaunian enorm, aproape indestructibil, care a fost construit cu scopul de a înlătura deșeurile periculoase. În timp, însă, s-a simțit limitat de obiectivul lui original, așa că și-a adus singur modificări pentru a-i putea..."
    },
    "classes": [
      "Tank",
      "Support"
    ],
    "region": "zaun",
    "range": "melee",
    "style": "tank",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "protector",
      "frontline",
      "durable",
      "caretaker",
      "team",
      "independent"
    ]
  },
  "Brand": {
    "id": "Brand",
    "name": "Brand",
    "title": {
      "en": "the Burning Vengeance",
      "ro": "flacăra răzbunării"
    },
    "blurb": {
      "en": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the...",
      "ro": "Creatura numită Brand s-a născut într-un trib din Freljord și a purtat numele de Kegan Rodhe, dar soarta lui slujește acum ca avertisment pentru pericolele care însoțesc tentațiile puterii. Aflat în căutarea uneia dintre legendarele rune antice, Kegan..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "independent",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "dutiful",
      "curious",
      "primal"
    ]
  },
  "Braum": {
    "id": "Braum",
    "name": "Braum",
    "title": {
      "en": "the Heart of the Freljord",
      "ro": "inima Freljordului"
    },
    "blurb": {
      "en": "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into...",
      "ro": "Binecuvântat cu mușchi masivi și cu o inimă și mai mare, Braum este un erou mult-iubit al Freljordului. Cei din hanurile de la nord de Frostheld ridică deseori pahare cu mied în cinstea forței lui legendare, despre care se povestește că ar fi dărâmat o..."
    },
    "classes": [
      "Tank",
      "Support"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "tank",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "protector",
      "frontline",
      "durable",
      "caretaker",
      "team",
      "charming"
    ]
  },
  "Briar": {
    "id": "Briar",
    "name": "Briar",
    "title": {
      "en": "the Restrained Hunger",
      "ro": "foamea stăpânită"
    },
    "blurb": {
      "en": "A failed experiment by the Black Rose, Briar's uncontrollable bloodlust required a special pillory to focus her frenzied mind. After years of confinement, this living weapon broke free from her restraints and unleashed herself into the world. Now she's...",
      "ro": "Briar e un experiment eșuat al Trandafirului Negru, o armă vie a cărei sete de sânge e atât de puternică încât are nevoie de un stâlp al infamiei special pentru a se putea concentra fără să intre în frenezie. După ani de zile petrecuți în închisoare, a..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "ad",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "hungry"
    ]
  },
  "Caitlyn": {
    "id": "Caitlyn",
    "name": "Caitlyn",
    "title": {
      "en": "the Sheriff of Piltover",
      "ro": "șeriful din Piltover"
    },
    "blurb": {
      "en": "Renowned as its finest peacekeeper, Caitlyn Kiramman is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she...",
      "ro": "Fiind cel mai de seamă ofițer al Piltoverului, Caitlyn Kiramman e cea mai bună șansă pe care forțele de ordine o au pentru a prinde criminalii din oraș. Lucrează deseori alături de Vi, acționând ca o contragreutate rece și rațională a personalității..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "piltover",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "inventive",
      "orderly",
      "ambitious",
      "precise",
      "focused",
      "independent",
      "nature"
    ]
  },
  "Camille": {
    "id": "Camille",
    "name": "Camille",
    "title": {
      "en": "the Steel Shadow",
      "ro": "agentul din umbră"
    },
    "blurb": {
      "en": "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy...",
      "ro": "Camille este Inteligențiarul Principal al Casei Ferros – o agentă elegantă de elită, echipată cu toate armele și augmentările de care are nevoie ca să opereze în afara legii, asigurând buna funcționare a ''mașinăriei'' din Piltover și a societății..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "piltover",
    "range": "melee",
    "style": "ad",
    "traits": [
      "inventive",
      "orderly",
      "ambitious",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "haunted",
      "survivor"
    ]
  },
  "Cassiopeia": {
    "id": "Cassiopeia",
    "name": "Cassiopeia",
    "title": {
      "en": "the Serpent's Embrace",
      "ro": "îmbrățișarea șarpelui"
    },
    "blurb": {
      "en": "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was...",
      "ro": "Cassiopeia este o creatură letală care îi manipulează pe cei din jur după propria voință. Era cea mai tânără și mai frumoasă fiică a familiei nobile Du Couteau din Noxus, dar s-a aventurat adânc în criptele de sub deșertul Shurimei în căutarea puterii..."
    },
    "classes": [
      "Mage"
    ],
    "region": "noxus",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "magical",
      "knowledge",
      "honorable",
      "lethal",
      "ancient",
      "free",
      "imperial"
    ]
  },
  "Chogath": {
    "id": "Chogath",
    "name": "Cho'Gath",
    "title": {
      "en": "the Terror of the Void",
      "ro": "teroarea din Vid"
    },
    "blurb": {
      "en": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts...",
      "ro": "Din clipa în care Cho'Gath a ajuns pentru prima oară sub lumina aspră a soarelui Runeterrei, a fost mânat doar de o foame pură, ce nu poate fi potolită niciodată. Biologia lui complexă este o manifestare perfectă a dorinței Vidului de a înghiți întreaga..."
    },
    "classes": [
      "Tank",
      "Mage"
    ],
    "region": "void",
    "range": "melee",
    "style": "tank",
    "traits": [
      "hungry",
      "alien",
      "dark",
      "protector",
      "frontline",
      "durable",
      "magical",
      "knowledge",
      "primal"
    ]
  },
  "Corki": {
    "id": "Corki",
    "name": "Corki",
    "title": {
      "en": "the Daring Bombardier",
      "ro": "bombardierul curajos"
    },
    "blurb": {
      "en": "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He...",
      "ro": "Corki este un pilot yordle care iubește două lucruri mai presus de orice: zborul și mustața sa extraordinară... dar nu neapărat în ordinea asta. După ce a plecat din Orașul Bandle, s-a stabilit în Piltover și s-a îndrăgostit de minunatele mașinării pe..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "bandle-city",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "playful",
      "curious",
      "chaotic",
      "precise",
      "focused",
      "magical",
      "knowledge",
      "charming",
      "inventive"
    ]
  },
  "Darius": {
    "id": "Darius",
    "name": "Darius",
    "title": {
      "en": "the Hand of Noxus",
      "ro": "mâna dreaptă a Noxusului"
    },
    "blurb": {
      "en": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that...",
      "ro": "Nu există un simbol mai potrivit al măreției noxiene decât Darius, cel mai temut și mai călit în luptă dintre toți comandanții națiunii. Devenit mâna dreaptă a Noxusului în ciuda originilor sale umile, Darius taie și spânzură printre inamicii imperiului..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "ad",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "imperial"
    ]
  },
  "Diana": {
    "id": "Diana",
    "name": "Diana",
    "title": {
      "en": "Scorn of the Moon",
      "ro": "Luna întruchipată"
    },
    "blurb": {
      "en": "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued...",
      "ro": "Diana e o războinică ce poartă o seceră din argintul Lunii și luptă de partea lunarilor, un grup de adepți ai unei religii de pe Muntele Targon ce aproape că a fost anihilată de solari. Este înveșmântată într-o armură strălucitoare de culoarea zăpezii..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "mount-targon",
    "range": "melee",
    "style": "hybrid",
    "traits": [
      "celestial",
      "destined",
      "spiritual",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "primal"
    ]
  },
  "Draven": {
    "id": "Draven",
    "name": "Draven",
    "title": {
      "en": "the Glorious Executioner",
      "ro": "mărețul torționar "
    },
    "blurb": {
      "en": "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and...",
      "ro": "În Noxus există numeroși războinici numiți ''răzbunători'', ce se înfruntă în arene sângeroase, testându-și puterile, dar niciunul n-a fost vreodată la fel de iubit ca Draven. A fost soldat în tinerețe, dar a descoperit că mulțimile îi apreciază într-un..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "noxus",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "precise",
      "focused",
      "dutiful",
      "independent"
    ]
  },
  "DrMundo": {
    "id": "DrMundo",
    "name": "Dr. Mundo",
    "title": {
      "en": "the Madman of Zaun",
      "ro": "nebunul din Zaun"
    },
    "blurb": {
      "en": "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After \"curing\" the...",
      "ro": "Nebun de legat, ucigaș fără milă și teribil de violet, Dr. Mundo este motivul pentru care mulți dintre cetățenii Zaunului se închid în case în nopțile deosebit de întunecate. Acum un doctor auto-proclamat, a fost cândva un pacient al celui mai infam..."
    },
    "classes": [
      "Tank",
      "Fighter"
    ],
    "region": "zaun",
    "range": "melee",
    "style": "tank",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "protector",
      "frontline",
      "durable",
      "warrior",
      "grit",
      "tragic"
    ]
  },
  "Ekko": {
    "id": "Ekko",
    "name": "Ekko",
    "title": {
      "en": "the Boy Who Shattered Time",
      "ro": "puștiul care a înfrânt timpul"
    },
    "blurb": {
      "en": "A prodigy from the rough streets of Zaun, Ekko is able to manipulate time to twist any situation to his advantage. He uses his own invention, the Z-Drive, to explore the branching possibilities of reality, crafting the perfect moment to seemingly...",
      "ro": "Ekko e un tânăr genial care a crescut pe străzile din Zaun și a învățat să manipuleze timpul în așa fel încât să iasă întotdeauna în avantaj. Propria lui invenție, Z-Drive, îi permite să exploreze toate realitățile posibile, până o găsește pe cea dorită..."
    },
    "classes": [
      "Assassin",
      "Mage"
    ],
    "region": "zaun",
    "range": "melee",
    "style": "ap",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "lethal",
      "independent",
      "opportunistic",
      "magical",
      "knowledge"
    ]
  },
  "Elise": {
    "id": "Elise",
    "name": "Elise",
    "title": {
      "en": "the Spider Queen",
      "ro": "regina-păianjen"
    },
    "blurb": {
      "en": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly...",
      "ro": "Elise este un prădător nemilos care trăiește într-un palat scufundat în întuneric din cel mai vechi oraș al Noxusului. A fost odată o muritoare de viță nobilă și stăpână a unei Case puternice din Imperiu, dar mușcătura unui semizeu malefic a..."
    },
    "classes": [
      "Assassin",
      "Mage"
    ],
    "region": "shadow-isles",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "lethal",
      "independent",
      "opportunistic",
      "magical",
      "knowledge",
      "dutiful",
      "ambitious",
      "celestial"
    ]
  },
  "Evelynn": {
    "id": "Evelynn",
    "name": "Evelynn",
    "title": {
      "en": "Agony's Embrace",
      "ro": "îmbrățișarea agoniei"
    },
    "blurb": {
      "en": "Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim...",
      "ro": "În colțurile întunecate ale Runeterrei, demonul Evelynn își caută următoarea victimă. Își ademenește prada sub înfățișarea seducătoare a unei femei, însă în clipa în care cineva îi cade în plasă, adevăratul său chip iese la iveală. Apoi își supune..."
    },
    "classes": [
      "Assassin",
      "Mage"
    ],
    "region": "unaffiliated",
    "range": "melee",
    "style": "ap",
    "traits": [
      "independent",
      "lethal",
      "opportunistic",
      "magical",
      "knowledge",
      "charming",
      "free"
    ]
  },
  "Ezreal": {
    "id": "Ezreal",
    "name": "Ezreal",
    "title": {
      "en": "the Prodigal Explorer",
      "ro": "exploratorul risipitor"
    },
    "blurb": {
      "en": "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way...",
      "ro": "Ezreal este un explorator îndrăzneț cu un talent magic nebănuit. Își petrece timpul căutând comori prin catacombe antice, dezlegând blesteme străvechi și supraviețuind chiar și atunci când soarta-i e potrivnică. Curajul și cutezanța sa sunt fără limite..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "piltover",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "inventive",
      "orderly",
      "ambitious",
      "precise",
      "focused",
      "magical",
      "knowledge",
      "tragic",
      "ancient"
    ]
  },
  "Fiddlesticks": {
    "id": "Fiddlesticks",
    "name": "Fiddlesticks",
    "title": {
      "en": "the Ancient Fear",
      "ro": "teroarea primordială"
    },
    "blurb": {
      "en": "Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe...",
      "ro": "Ceva s-a trezit la viață în Runeterra. Ceva străvechi și teribil. Oroarea străveche cunoscută drept Fiddlesticks pândește la marginile omenirii, atrasă de locuri încărcate de teamă, unde se hrănește cu victimele înspăimântate. Cu o coasă zimțată..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "independent",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "ancient"
    ]
  },
  "Fiora": {
    "id": "Fiora",
    "name": "Fiora",
    "title": {
      "en": "the Grand Duelist",
      "ro": "inegalabilul duelist"
    },
    "blurb": {
      "en": "The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born to House Laurent in the kingdom of Demacia, Fiora took control of the family from her father in...",
      "ro": "Fiora, cel mai temut duelist din Valoran, e cunoscută în întreaga lume pentru șiretenia de care dă dovadă și pentru personalitatea ei la fel de tăioasă ca sabia cu care lovește rapid și decisiv. Este o aristocrată din Casa Laurent a Demaciei și a..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic"
    ]
  },
  "Fizz": {
    "id": "Fizz",
    "name": "Fizz",
    "title": {
      "en": "the Tidal Trickster",
      "ro": "șarlatanul apelor"
    },
    "blurb": {
      "en": "Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales...",
      "ro": "Fizz este un yordle amfibian, care trăiește în recifurile din jurul Bilgewaterului. Deseori se scufundă după jertfele aruncate în ocean de căpitanii superstițioși și le aduce înapoi, însă chiar și cei mai nesăbuiți marinari știu că n-ar trebui să-l..."
    },
    "classes": [
      "Assassin",
      "Fighter"
    ],
    "region": "unaffiliated",
    "range": "melee",
    "style": "hybrid",
    "traits": [
      "independent",
      "lethal",
      "opportunistic",
      "warrior",
      "frontline",
      "grit",
      "playful",
      "free"
    ]
  },
  "Galio": {
    "id": "Galio",
    "name": "Galio",
    "title": {
      "en": "the Colossus",
      "ro": "colosul"
    },
    "blurb": {
      "en": "Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the...",
      "ro": "Lângă porțile strălucitorului oraș demacian, Galio, colosul de piatră, stă de veghe. Construit ca apărător împotriva magilor inamici, Galio poate sta nemișcat decenii în șir, până când prezența magiei îl trezește la viață. Când e însuflețit, se bucură..."
    },
    "classes": [
      "Tank",
      "Mage"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "tank",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "frontline",
      "durable",
      "magical",
      "knowledge"
    ]
  },
  "Gangplank": {
    "id": "Gangplank",
    "name": "Gangplank",
    "title": {
      "en": "the Saltwater Scourge",
      "ro": "teroarea mărilor"
    },
    "blurb": {
      "en": "As unpredictable as he is brutal, the dethroned reaver king Gangplank is feared far and wide. Once, he ruled the port city of Bilgewater, and while his reign is over, there are those who believe this has only made him more dangerous. Gangplank would see...",
      "ro": "Gangplank este fostul rege al tâlharilor, un individ temut, imprevizibil și brutal. Mai demult, era stăpân peste orașul-port Bilgewater și, cu toate că a fost îndepărtat de la putere, mulți cred că astfel a ajuns și mai periculos decât înainte..."
    },
    "classes": [
      "Fighter"
    ],
    "region": "bilgewater",
    "range": "melee",
    "style": "ad",
    "traits": [
      "free",
      "opportunistic",
      "chaotic",
      "warrior",
      "frontline",
      "grit",
      "dutiful",
      "ambitious",
      "ruthless"
    ]
  },
  "Garen": {
    "id": "Garen",
    "name": "Garen",
    "title": {
      "en": "The Might of Demacia",
      "ro": "măreția Demaciei"
    },
    "blurb": {
      "en": "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its...",
      "ro": "Garen este un luptător mândru și nobil, ce face parte din Avangarda Neînfricată. Camarazii săi îl admiră, iar inamicii îl respectă – poate și din cauză că face parte din prestigioasa familie Crownguard, casa însărcinată cu apărarea Demaciei și a..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "tank",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "warrior",
      "frontline",
      "grit",
      "durable",
      "independent"
    ]
  },
  "Gnar": {
    "id": "Gnar",
    "name": "Gnar",
    "title": {
      "en": "the Missing Link",
      "ro": "veriga lipsă"
    },
    "blurb": {
      "en": "Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed...",
      "ro": "Gnar este un yordle primordial ale cărui șotii jucăușe pot deveni în orice clipă adevărate accese de furie, transformându-l într-o bestie masivă, hotărâtă să distrugă totul. A fost prins în gheață pură timp de milenii, dar acum a scăpat și țopăie curios..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "hybrid",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "playful",
      "curious",
      "ancient"
    ]
  },
  "Gragas": {
    "id": "Gragas",
    "name": "Gragas",
    "title": {
      "en": "the Rabble Rouser",
      "ro": "scandalagiul"
    },
    "blurb": {
      "en": "Equal parts jolly and imposing, Gragas is a massive, rowdy brewmaster who's always on the lookout for new ways to raise everyone's spirits. Hailing from parts unknown, he searches for ingredients among the unblemished wastes of the Freljord to help him...",
      "ro": "Gragas este un berar enorm și gălăgios, deopotrivă vesel și impunător, care e mereu în căutarea unor noi moduri de a-i înveseli pe toți cei din jur. Nu se știe de unde vine, dar caută ingrediente în ținuturile sălbatice ale Freljordului, care să-l ajute..."
    },
    "classes": [
      "Fighter",
      "Mage"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "tank",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "warrior",
      "frontline",
      "grit",
      "magical",
      "knowledge",
      "independent",
      "spiritual",
      "free"
    ]
  },
  "Graves": {
    "id": "Graves",
    "name": "Graves",
    "title": {
      "en": "the Outlaw",
      "ro": "proscrisul"
    },
    "blurb": {
      "en": "Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his...",
      "ro": "Malcolm Graves e un renumit mercenar, parior și hoț urmărit de forțele legii în fiecare oraș și imperiu prin care a trecut vreodată. Deși are un temperament vulcanic, respectă și impune cu strictețe codul de onoare al nelegiuiților, folosindu-se deseori..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "bilgewater",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "free",
      "opportunistic",
      "chaotic",
      "precise",
      "focused",
      "honorable",
      "ambitious",
      "independent",
      "imperial"
    ]
  },
  "Gwen": {
    "id": "Gwen",
    "name": "Gwen",
    "title": {
      "en": "The Hallowed Seamstress",
      "ro": "croitoreasa binecuvântată"
    },
    "blurb": {
      "en": "A former doll transformed and brought to life by magic, Gwen wields the very tools that once created her. She carries the weight of her maker's love with every step, taking nothing for granted. At her command is the Hallowed Mist, an ancient and...",
      "ro": "Gwen a fost odată o păpușă, dar magia a adus-o la viață, iar acum mânuiește chiar uneltele care au creat-o. Cu fiecare pas pe care-l face, simte binecuvântarea iubirii creatoarei ei și nu nesocotește niciodată miracolele care o înconjoară. Poate..."
    },
    "classes": [
      "Fighter"
    ],
    "region": "shadow-isles",
    "range": "melee",
    "style": "ad",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "warrior",
      "frontline",
      "grit",
      "dutiful",
      "ambitious",
      "charming",
      "ancient",
      "free"
    ]
  },
  "Hecarim": {
    "id": "Hecarim",
    "name": "Hecarim",
    "title": {
      "en": "the Shadow of War",
      "ro": "umbra războiului"
    },
    "blurb": {
      "en": "Hecarim is a spectral fusion of man and beast, cursed to ride down the souls of the living for all eternity. When the Blessed Isles fell into shadow, this proud knight was obliterated by the destructive energies of the Ruination, along with all his...",
      "ro": "Hecarim e o apariție spectrală, jumătate om, jumătate bestie, blestemat să calce mereu în copite sufletele muritorilor. Când Insulele Binecuvântate au fost cuprinse de umbre, acest cavaler mândru a fost zdrobit de forțele malefice ale Cataclismului..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "shadow-isles",
    "range": "melee",
    "style": "ad",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "dutiful",
      "independent",
      "primal"
    ]
  },
  "Heimerdinger": {
    "id": "Heimerdinger",
    "name": "Heimerdinger",
    "title": {
      "en": "the Revered Inventor",
      "ro": "idolul inventatorilor"
    },
    "blurb": {
      "en": "The eccentric Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors the world has ever known. As the longest serving member of the Council of Piltover, he saw the best and the worst of the city's unending desire for...",
      "ro": "Excentricul profesor Cecil B. Heimerdinger este unul dintre cei mai luminați și stimați inventatori din toate timpurile. Fiind cel mai vechi membru al Consiliului din Piltover, a fost martor atât al apogeului cât și al distrugerii cauzate de setea..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "piltover",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "inventive",
      "orderly",
      "ambitious",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "independent"
    ]
  },
  "Hwei": {
    "id": "Hwei",
    "name": "Hwei",
    "title": {
      "en": "the Visionary",
      "ro": "vizionarul"
    },
    "blurb": {
      "en": "Hwei is a brooding painter who creates brilliant art in order to confront Ionia's criminals and comfort their victims. Beneath his melancholy roils a torn, emotional mind—haunted by both the vibrant visions of his imagination and the gruesome memories...",
      "ro": "Hwei este un pictor melancolic, care creează opere de artă geniale, cu care înfruntă răufăcătorii din Ionia și consolează victimele acestora. Sub neliniștea sa se ascunde o minte chinuită de emoții și bântuită atât de viziunile spectaculoase ale..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "haunted"
    ]
  },
  "Illaoi": {
    "id": "Illaoi",
    "name": "Illaoi",
    "title": {
      "en": "the Kraken Priestess",
      "ro": "preoteasa krakenului"
    },
    "blurb": {
      "en": "Illaoi's powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer...",
      "ro": "Fizicul impresionant al lui Illaoi este întrecut doar de credința neclintită de care dă dovadă. Preoteasa Marelui Kraken smulge spiritele inamicilor săi cu ajutorul unui idol auriu gigantic și le distruge percepția realității. Toți cei ce o pun la..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "bilgewater",
    "range": "melee",
    "style": "ad",
    "traits": [
      "free",
      "opportunistic",
      "chaotic",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "spiritual"
    ]
  },
  "Irelia": {
    "id": "Irelia",
    "name": "Irelia",
    "title": {
      "en": "the Blade Dancer",
      "ro": "dansatoarea tăișurilor"
    },
    "blurb": {
      "en": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of...",
      "ro": "În timpul ocupației noxiene a Ioniei au apărut mulți eroi, însă niciunul n-a fost la fel de surprinzător precum tânăra Irelia din Navori. Aceasta a învățat dansurile antice din provincia ei și le-a adaptat pentru luptă, folosindu-se de mișcările pline..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "ancient"
    ]
  },
  "Ivern": {
    "id": "Ivern",
    "name": "Ivern",
    "title": {
      "en": "the Green Father",
      "ro": "inima codrului"
    },
    "blurb": {
      "en": "Ivern Bramblefoot, known to many as the Green Father, is a peculiar half man, half tree who roams Runeterra's forests, cultivating life everywhere he goes. He knows the secrets of the natural world, and holds deep friendships with all things that grow...",
      "ro": "Ivern Bramblefoot, cunoscut și sub numele de ''inima codrului'', este o ființă neobișnuită, pe jumătate om, pe jumătate copac, care străbate pădurile Runeterrei și ocrotește creaturile care-i ies în cale. Știe toate secretele naturii și leagă prietenii..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "independent"
    ]
  },
  "Janna": {
    "id": "Janna",
    "name": "Janna",
    "title": {
      "en": "the Storm's Fury",
      "ro": "mânia furtunii"
    },
    "blurb": {
      "en": "Armed with the power of Runeterra's gales, Janna is a mysterious, elemental wind spirit who protects the dispossessed of Zaun. Some believe she was brought into existence by the pleas of Runeterra's sailors who prayed for fair winds as they navigated...",
      "ro": "Janna e un spirit misterios al elementelor care le poate porunci furtunilor și vijeliilor din Runeterra și care apără oamenii sărmani din Zaun. Unii cred că a luat ființă în urma rugăciunilor marinarilor, ce șopteau cuvinte menite să atragă puterea..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "zaun",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "protector",
      "spiritual",
      "nature"
    ]
  },
  "JarvanIV": {
    "id": "JarvanIV",
    "name": "Jarvan IV",
    "title": {
      "en": "the Exemplar of Demacia",
      "ro": "prințul Demaciei"
    },
    "blurb": {
      "en": "Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the front...",
      "ro": "Prințul Jarvan din dinastia Lightshield este moștenitorul tronului Demaciei. Crescut pentru a deveni un model de virtute demaciană, acum este nevoit să caute echilibrul dintre marile așteptări pe care ceilalți le au de la el și propria sa dorință de a..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "tank",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "warrior",
      "frontline",
      "grit",
      "durable",
      "ambitious",
      "independent",
      "spiritual"
    ]
  },
  "Jax": {
    "id": "Jax",
    "name": "Jax",
    "title": {
      "en": "Grandmaster at Arms",
      "ro": "marele maestru al armelor"
    },
    "blurb": {
      "en": "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained...",
      "ro": "Neîntrecut în mânuirea armelor neobișnuite și în arta sarcasmului, Jax este ultimul maestru al armelor din Icathia. Mânat de o mândrie fatidică, poporul lui a dezlănțuit Vidul și a distrus aproape întregul ținut, așa că Jax și ceilalți icathieni au..."
    },
    "classes": [
      "Fighter"
    ],
    "region": "unaffiliated",
    "range": "melee",
    "style": "hybrid",
    "traits": [
      "independent",
      "warrior",
      "frontline",
      "grit",
      "ruthless",
      "protector",
      "hungry"
    ]
  },
  "Jayce": {
    "id": "Jayce",
    "name": "Jayce",
    "title": {
      "en": "the Defender of Tomorrow",
      "ro": "protectorul viitorului"
    },
    "blurb": {
      "en": "Jayce Talis is a brilliant inventor who, along with his friend Viktor, made the first great discoveries in the field of hextech. Celebrated across Piltover, he tries to live up to his reputation as \"the Man of Progress,\" but often struggles with the...",
      "ro": "Jayce Talis este un inventator strălucit care, alături de prietenul lui Viktor, a făcut primele descoperiri în domeniul hextech. Este o adevărată celebritate în Piltover și încearcă să se ridice la înălțimea reputației sale de ''Om al Progresului'', dar..."
    },
    "classes": [
      "Fighter",
      "Marksman"
    ],
    "region": "piltover",
    "range": "melee",
    "style": "ad",
    "traits": [
      "inventive",
      "orderly",
      "ambitious",
      "warrior",
      "frontline",
      "grit",
      "precise",
      "focused",
      "chaotic",
      "protector"
    ]
  },
  "Jhin": {
    "id": "Jhin",
    "name": "Jhin",
    "title": {
      "en": "the Virtuoso",
      "ro": "virtuozul"
    },
    "blurb": {
      "en": "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin...",
      "ro": "Jhin este un psihopat meticulos, pentru care crima înseamnă artă. Multă vreme a fost ținut prizonier într-o temniță ioniană, dar în cele din urmă a fost eliberat de câțiva membri din consiliul conducător al Ioniei și a ajuns să lucreze ca asasin pentru..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "precise",
      "focused",
      "magical",
      "knowledge",
      "ruthless",
      "independent",
      "lethal",
      "haunted"
    ]
  },
  "Jinx": {
    "id": "Jinx",
    "name": "Jinx",
    "title": {
      "en": "the Loose Cannon",
      "ro": "dezastrul ambulant"
    },
    "blurb": {
      "en": "An unhinged and impulsive criminal from the undercity, Jinx is haunted by the consequences of her past—but that doesn't stop her from bringing her own chaotic brand of pandemonium to Piltover and Zaun. She uses her arsenal of DIY weapons to devastating...",
      "ro": "O criminală nebună și impulsivă din orașul de jos, Jinx e chinuită de consecințele trecutului ei – dar asta n-o oprește să dezlănțuie haosul în Piltover și Zaun. Își folosește arsenalul creat pentru a provoca efecte devastatoare, dezlănțuind torenți de..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "zaun",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "precise",
      "focused",
      "independent",
      "haunted"
    ]
  },
  "Kaisa": {
    "id": "Kaisa",
    "name": "Kai'Sa",
    "title": {
      "en": "Daughter of the Void",
      "ro": "fiica Vidului"
    },
    "blurb": {
      "en": "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered...",
      "ro": "După ce a fost înghițită de Vid pe când era doar o copilă, Kai'Sa a reușit să supraviețuiască, dând dovadă de o tenacitate și de o voință ieșite din comun. Experiențele prin care a trecut au transformat-o într-un vânător mortal, iar unii cred că e..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "void",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "hungry",
      "alien",
      "dark",
      "precise",
      "focused",
      "magical",
      "knowledge",
      "chaotic",
      "lethal",
      "survivor",
      "primal"
    ]
  },
  "Kalista": {
    "id": "Kalista",
    "name": "Kalista",
    "title": {
      "en": "the Spear of Vengeance",
      "ro": "lancea răzbunării"
    },
    "blurb": {
      "en": "A specter of wrath and retribution, Kalista is the undying spirit of vengeance, an armored nightmare summoned from the Shadow Isles to hunt deceivers and traitors. The betrayed may cry out in blood to be avenged, but Kalista only answers those willing...",
      "ro": "Kalista este spiritul nemuritor al răzbunării. Spectrul ei plin de furie este invocat din Insulele Umbrelor ca să-i vâneze pe trădători și pe cei care-și ating scopurile mârșave prin înșelăciune. Cei nedreptățiți cer deseori răzbunarea, dar Kalista le..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "shadow-isles",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "precise",
      "focused",
      "spiritual",
      "primal"
    ]
  },
  "Karma": {
    "id": "Karma",
    "name": "Karma",
    "title": {
      "en": "the Enlightened One",
      "ro": "cea iluminată"
    },
    "blurb": {
      "en": "No mortal exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life, and blessed with power that few can...",
      "ro": "Niciun muritor nu reprezintă tradițiile spirituale ale Ioniei mai bine decât Karma, o ființă binecuvântată cu o putere pe care puțini o pot înțelege. Ea este reîncarnarea unui suflet străvechi care s-a reîntrupat de nenumărate ori, purtând mereu cu ea..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "ancient"
    ]
  },
  "Karthus": {
    "id": "Karthus",
    "name": "Karthus",
    "title": {
      "en": "the Deathsinger",
      "ro": "rapsodul morții"
    },
    "blurb": {
      "en": "The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance. The living fear the eternity of undeath, but Karthus sees only beauty and purity in its embrace, a perfect union of...",
      "ro": "Karthus este profetul uitării, un spirit pururea viu ale cărui cântece înspăimântătoare vestesc apariția morții. Muritorilor de rând le e teamă de darul pe care îl oferă, dar el vede doar frumusețe și puritate în îmbrățișarea eternității, o comuniune..."
    },
    "classes": [
      "Mage"
    ],
    "region": "shadow-isles",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "magical",
      "knowledge",
      "charming",
      "spiritual"
    ]
  },
  "Kassadin": {
    "id": "Kassadin",
    "name": "Kassadin",
    "title": {
      "en": "the Void Walker",
      "ro": "călătorul din Vid"
    },
    "blurb": {
      "en": "Cutting a burning swath through the darkest places of the world, Kassadin knows his days are numbered. A widely traveled Shuriman guide and adventurer, he had chosen to raise a family among the peaceful southern tribes—until the day his village was...",
      "ro": "Deși știe că zilele îi sunt numărate, Kassadin alege să-și petreacă ultima parte a vieții lăsându-și amprenta distrugătoare asupra celor mai întunecate colțuri ale lumii. A fost odată un ghid și explorator shuriman cu experiență, care a ales să-și..."
    },
    "classes": [
      "Assassin",
      "Mage"
    ],
    "region": "void",
    "range": "melee",
    "style": "ap",
    "traits": [
      "hungry",
      "alien",
      "dark",
      "lethal",
      "independent",
      "opportunistic",
      "magical",
      "knowledge",
      "primal",
      "imperial"
    ]
  },
  "Katarina": {
    "id": "Katarina",
    "name": "Katarina",
    "title": {
      "en": "the Sinister Blade",
      "ro": "lama necruțătoare"
    },
    "blurb": {
      "en": "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven...",
      "ro": "Katarina este o asasină noxiană de cel mai înalt rang, letală în lupte și neclintită în hotărâre. Este fiica cea mare a legendarului general Du Couteau și și-a câștigat reputația pentru abilitatea de a elimina rapid inamici care nu bănuiesc ce-i..."
    },
    "classes": [
      "Assassin",
      "Mage"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "ap",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "lethal",
      "independent",
      "opportunistic",
      "magical",
      "knowledge",
      "chaotic"
    ]
  },
  "Kayle": {
    "id": "Kayle",
    "name": "Kayle",
    "title": {
      "en": "the Righteous",
      "ro": "aripile justiției"
    },
    "blurb": {
      "en": "Born to a Targonian Aspect at the height of the Rune Wars, Kayle honored her mother's legacy by fighting for justice on wings of divine flame. She and her twin sister Morgana were the protectors of Demacia for many years—until Kayle became disillusioned...",
      "ro": "Născută în toiul Războaielor Runelor și fiind fiica unui Aspect din Targon, Kayle onorează moștenirea mamei sale luptând în numele justiției, cu sabia și aripile sale înflăcărate. Împreună cu sora ei, Morgana, a apărat Demacia un timp îndelungat. Dar..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "hybrid",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "precise",
      "focused",
      "magical",
      "knowledge",
      "celestial",
      "primal"
    ]
  },
  "Kayn": {
    "id": "Kayn",
    "name": "Kayn",
    "title": {
      "en": "the Shadow Reaper",
      "ro": "moartea din umbre"
    },
    "blurb": {
      "en": "A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of...",
      "ro": "Un practicant fără pereche al letalei magii a umbrelor, Shieda Kayn luptă pentru a-și împlini adevăratul destin: acela de a conduce Ordinul Umbrei către o nouă eră a supremației ioniene. Mânuiește arma darkin pe nume Rhaast, nelăsându-se abătut din drum..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "haunted",
      "ancient"
    ]
  },
  "Kennen": {
    "id": "Kennen",
    "name": "Kennen",
    "title": {
      "en": "the Heart of the Tempest",
      "ro": "inima furtunii"
    },
    "blurb": {
      "en": "More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his...",
      "ro": "Kennen nu este doar un luptător rapid ca fulgerul, care apără armonia Ioniei, ci este și singurul yordle din ordinul Kinkou. În ciuda înfățișării sale, de-abia așteaptă să se repeadă asupra oricărei amenințări într-o furtună sălbatică de entuziasm și..."
    },
    "classes": [
      "Mage"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "magical",
      "knowledge",
      "playful"
    ]
  },
  "Khazix": {
    "id": "Khazix",
    "name": "Kha'Zix",
    "title": {
      "en": "the Voidreaver",
      "ro": "prădătorul din Vid"
    },
    "blurb": {
      "en": "The Void grows, and the Void adapts—in none of its myriad spawn are these truths more apparent than Kha'Zix. Evolution drives the core of this mutating horror, born to survive and to slay the strong. Where it struggles to do so, it grows new, more...",
      "ro": "''Vidul crește, Vidul se adaptează'', iar Kha'Zix e întruparea perfectă a acestei ideologii. Această creatură oribilă aflată în continuă mutație este mânată de instinctul de a evolua, fiind născută pentru a supraviețui și a-i ucide pe cei puternici..."
    },
    "classes": [
      "Assassin"
    ],
    "region": "void",
    "range": "melee",
    "style": "ad",
    "traits": [
      "hungry",
      "alien",
      "dark",
      "lethal",
      "independent",
      "opportunistic",
      "survivor"
    ]
  },
  "Kindred": {
    "id": "Kindred",
    "name": "Kindred",
    "title": {
      "en": "The Eternal Hunters",
      "ro": "eternii vânători"
    },
    "blurb": {
      "en": "Separate, but never parted, Kindred represents the twin essences of death. Lamb's bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his...",
      "ro": "Mielul și Lupul sunt două creaturi diferite, dar aflate mereu împreună, care simbolizează esențele îngemănate ale morții. Săgețile Mielului le oferă eliberarea celor care-și acceptă soarta, iar Lupul îi vânează pe cei ce vor să fugă de moarte..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "independent",
      "precise",
      "focused",
      "haunted",
      "primal"
    ]
  },
  "Kled": {
    "id": "Kled",
    "name": "Kled",
    "title": {
      "en": "the Cantankerous Cavalier",
      "ro": "călărețul cârcotaș"
    },
    "blurb": {
      "en": "A warrior as fearless as he is ornery, the yordle Kled embodies the furious bravado of Noxus. He is an icon beloved by the empire's soldiers, distrusted by its officers, and loathed by the nobility. Many claim Kled has fought in every campaign the...",
      "ro": "Pe cât de neînfricat, pe atât de cârcotaș, Kled este un yordle care dă dovadă de toată bravada furioasă a Noxusului. Este un personaj îndrăgit de soldați, dar privit cu scepticism de ofițeri și detestat de nobilime. Mulți susțin că a luptat în toate..."
    },
    "classes": [
      "Fighter"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "ad",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "warrior",
      "frontline",
      "grit",
      "honorable",
      "dutiful",
      "charming",
      "playful",
      "primal",
      "imperial"
    ]
  },
  "KogMaw": {
    "id": "KogMaw",
    "name": "Kog'Maw",
    "title": {
      "en": "the Mouth of the Abyss",
      "ro": "gura abisului"
    },
    "blurb": {
      "en": "Belched forth from a rotting Void incursion deep in the wastelands of Icathia, Kog'Maw is an inquisitive yet putrid creature with a caustic, gaping mouth. This particular Void-spawn needs to gnaw and drool on anything within reach to truly understand it...",
      "ro": "Kog'Maw a pătruns în lume prin incursiunea Vidului în măruntaiele Icathiei. E o creatură a cărei gură căscată împroașcă salivă caustică și putredă, atât ca mod de atac, cât și pentru a cunoaște și înțelege lumea din jurul său. Deși nu are o natură..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "void",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "hungry",
      "alien",
      "dark",
      "precise",
      "focused",
      "magical",
      "knowledge"
    ]
  },
  "KSante": {
    "id": "KSante",
    "name": "K'Sante",
    "title": {
      "en": "the Pride of Nazumah",
      "ro": "mândria ținutului Nazumah"
    },
    "blurb": {
      "en": "Defiant and courageous, K'Sante battles colossal beasts and ruthless Ascended to protect his home of Nazumah, a coveted oasis amid the sands of Shurima. But after a falling-out with his former partner, K'Sante realizes that in order to become a warrior...",
      "ro": "Sfidător și viteaz, K'Sante luptă împotriva bestiilor colosale și a cruzilor Iluminați pentru a-și proteja patria, Nazumah, o oază bogată ascunsă printre nisipurile Shurimei. După o dispută amară cu fostul său partener, K'Sante și-a dat seama că dacă..."
    },
    "classes": [
      "Tank",
      "Fighter"
    ],
    "region": "shurima",
    "range": "melee",
    "style": "tank",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "protector",
      "frontline",
      "durable",
      "warrior",
      "grit",
      "ruthless",
      "primal"
    ]
  },
  "Leblanc": {
    "id": "Leblanc",
    "name": "LeBlanc",
    "title": {
      "en": "the Deceiver",
      "ro": "amăgitoarea"
    },
    "blurb": {
      "en": "Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone...",
      "ro": "E învăluită în mister chiar și pentru ceilalți membri ai Trandafirului negru, iar numele de LeBlanc este doar unul dintre cele folosite pentru femeia palidă care a manipulat oameni și evenimente încă din primele zile ale Noxusului. Își folosește magia..."
    },
    "classes": [
      "Assassin",
      "Mage"
    ],
    "region": "noxus",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "lethal",
      "independent",
      "opportunistic",
      "magical",
      "knowledge"
    ]
  },
  "LeeSin": {
    "id": "LeeSin",
    "name": "Lee Sin",
    "title": {
      "en": "the Blind Monk",
      "ro": "călugărul orb"
    },
    "blurb": {
      "en": "A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland...",
      "ro": "Lee Sin, un maestru al anticelor arte marțiale ioniene, este un luptător cu convingeri ferme, care se folosește de esența spiritului dragonului pentru a trece de orice obstacol. Cu toate că și-a pierdut vederea cu mulți ani în urmă, războinicul-călugăr..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "protector",
      "ancient"
    ]
  },
  "Leona": {
    "id": "Leona",
    "name": "Leona",
    "title": {
      "en": "the Radiant Dawn",
      "ro": "strălucirea zorilor"
    },
    "blurb": {
      "en": "Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her...",
      "ro": "Binecuvântată de focul Soarelui, Leona este o războinică sfântă din neamul solarilor, care apără Muntele Targon cu ajutorul armelor ei de încredere, ''Spada zenitului'' și ''Scutul zorilor''. Pielea îi strălucește de parcă ar reflecta mereu raze de..."
    },
    "classes": [
      "Tank",
      "Support"
    ],
    "region": "mount-targon",
    "range": "melee",
    "style": "tank",
    "traits": [
      "celestial",
      "destined",
      "spiritual",
      "protector",
      "frontline",
      "durable",
      "caretaker",
      "team",
      "lethal"
    ]
  },
  "Lillia": {
    "id": "Lillia",
    "name": "Lillia",
    "title": {
      "en": "the Bashful Bloom",
      "ro": "mugurele timid"
    },
    "blurb": {
      "en": "Intensely shy, the fae fawn Lillia skittishly wanders Ionia's forests. Hiding just out of sight of mortals—whose mysterious natures have long captivated, but intimidated, her—Lillia hopes to discover why their dreams no longer reach the ancient Dreaming...",
      "ro": "Lillia este o zână-căprioară timidă, care cutreieră pădurile din Ionia. Ascunzându-se de privirile muritorilor, ale căror firi misterioase o fascinează și-o intimidează în egală măsură, Lillia speră să descopere motivul pentru care visele lor nu mai..."
    },
    "classes": [
      "Fighter",
      "Mage"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "warrior",
      "frontline",
      "grit",
      "magical",
      "knowledge",
      "independent",
      "ancient",
      "nature"
    ]
  },
  "Lissandra": {
    "id": "Lissandra",
    "name": "Lissandra",
    "title": {
      "en": "the Ice Witch",
      "ro": "vrăjitoarea ghețurilor"
    },
    "blurb": {
      "en": "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ''The...",
      "ro": "Magia Lissandrei transformă puterea primordială a gheții în ceva întunecat și groaznic. Cu forța gheții sale întunecate, ea nu doar că-i îngheață pe cei ce i se opun, ci îi străpunge și îi strivește. Locuitorii îngroziți din ținuturile nordului o cunosc..."
    },
    "classes": [
      "Mage"
    ],
    "region": "freljord",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "magical",
      "knowledge",
      "independent"
    ]
  },
  "Locke": {
    "id": "Locke",
    "name": "Locke",
    "title": {
      "en": "the Ashen Exorcist",
      "ro": "exorcistul cenușiu"
    },
    "blurb": {
      "en": "A nail-slinging exorcist versed in forbidden rites, Corvin Locke is the progeny of Demacian occultists. Born into lies and hypocrisy, he learned young that demons aren't the cause of humanity's darkness, but the consequence. Now, Locke tears through...",
      "ro": "Un exorcist care aruncă cuie și stăpânește ritualuri interzise, Corvin Locke este urmașul ocultiștilor demacieni. Născut printre minciuni și ipocrizie, a învățat de mic că demonii nu sunt cauza întunericului omenirii, ci consecința lui. Acum, Locke..."
    },
    "classes": [
      "Assassin",
      "Mage"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "lethal",
      "independent",
      "opportunistic",
      "magical",
      "knowledge"
    ]
  },
  "Lucian": {
    "id": "Lucian",
    "name": "Lucian",
    "title": {
      "en": "the Purifier",
      "ro": "lumina purificatoare"
    },
    "blurb": {
      "en": "Lucian, a Sentinel of Light, is a grim hunter of wraiths and specters, pursuing them relentlessly and annihilating them with his twin relic pistols. After the specter Thresh slew his wife, Lucian embarked on the path of vengeance—but even with her...",
      "ro": "Lucian este o Santinelă a Luminii și un vânător neobosit al spectrelor și fantomelor, urmărindu-le și anihilându-le cu pistoalele sale gemene. După ce spectrul numit Thresh i-a ucis soția, Lucian a jurat să se răzbune – dar, chiar și după ce a readus-o..."
    },
    "classes": [
      "Marksman",
      "Assassin"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "independent",
      "precise",
      "focused",
      "lethal",
      "opportunistic",
      "primal"
    ]
  },
  "Lulu": {
    "id": "Lulu",
    "name": "Lulu",
    "title": {
      "en": "the Fae Sorceress",
      "ro": "zâna-vrăjitoare"
    },
    "blurb": {
      "en": "The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this...",
      "ro": "Ca mag yordle, Lulu este cunoscută pentru faptul că poate invoca iluzii și creaturi onirice în timp ce cutreieră Runeterra alături de zâna Pix. Lulu modelează realitatea din pure capricii uneori, alterând structura lumii și înlăturând limitele planului..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "bandle-city",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "playful",
      "curious",
      "chaotic",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "independent"
    ]
  },
  "Lux": {
    "id": "Lux",
    "name": "Lux",
    "title": {
      "en": "the Lady of Luminosity",
      "ro": "prințesa luminii"
    },
    "blurb": {
      "en": "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve...",
      "ro": "Luxanna Crownguard vine din Demacia, un tărâm izolaționist unde abilitățile magice sunt privite cu teamă și suspiciune. Poate să manipuleze lumina după bunul ei plac, dar, din cauză că a fost forțată de mică să-și ascundă puterile pentru a nu pune în..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "demacia",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "independent",
      "curious"
    ]
  },
  "Malphite": {
    "id": "Malphite",
    "name": "Malphite",
    "title": {
      "en": "Shard of the Monolith",
      "ro": "fragmentul de Monolit"
    },
    "blurb": {
      "en": "A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his...",
      "ro": "Malphite este o creatură masivă din piatră vie, care se luptă să impună ordinea într-o lume haotică. Născut ca un fragment-servitor al unui obelisc supranatural numit Monolitul, și-a folosit puterea elementală enormă pentru a-și apăra creatorul și a-l..."
    },
    "classes": [
      "Tank",
      "Mage"
    ],
    "region": "ixtal",
    "range": "melee",
    "style": "tank",
    "traits": [
      "nature",
      "isolated",
      "magical",
      "protector",
      "frontline",
      "durable",
      "knowledge",
      "chaotic",
      "independent"
    ]
  },
  "Malzahar": {
    "id": "Malzahar",
    "name": "Malzahar",
    "title": {
      "en": "the Prophet of the Void",
      "ro": "profetul Vidului"
    },
    "blurb": {
      "en": "A zealous seer dedicated to the unification of all life, Malzahar truly believes the newly emergent Void to be the path to Runeterra's salvation. In the desert wastes of Shurima, he followed the voices that whispered in his mind, all the way to ancient...",
      "ro": "Malzahar este un clarvăzător plin de zel care luptă cu încredere pentru unificarea tuturor formelor de viață, mânat de convingerea că Vidul care se întinde acum în Runeterra este calea către mântuirea tuturor. În pustietatea deșertului Shurimei, a urmat..."
    },
    "classes": [
      "Mage"
    ],
    "region": "void",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "hungry",
      "alien",
      "dark",
      "magical",
      "knowledge",
      "independent",
      "ancient",
      "primal",
      "imperial"
    ]
  },
  "Maokai": {
    "id": "Maokai",
    "name": "Maokai",
    "title": {
      "en": "the Twisted Treant",
      "ro": "arborele însuflețit"
    },
    "blurb": {
      "en": "Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home, surviving undeath only through the Waters of Life infused within his...",
      "ro": "Maokai este un arbore falnic și mânios, care luptă împotriva ororilor supranaturale din Insulele Umbrelor. După ce un cataclism magic i-a distrus tărâmul natal, s-a transformat într-o ființă al cărei singur scop este răzbunarea. Numai apa vieții pe care..."
    },
    "classes": [
      "Tank",
      "Support"
    ],
    "region": "shadow-isles",
    "range": "melee",
    "style": "tank",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "protector",
      "frontline",
      "durable",
      "caretaker",
      "team"
    ]
  },
  "MasterYi": {
    "id": "MasterYi",
    "name": "Master Yi",
    "title": {
      "en": "the Wuju Bladesman",
      "ro": "maestrul Wuju"
    },
    "blurb": {
      "en": "Master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one. Though he chooses to enter into violence only as a last resort, the grace and speed of his blade ensures resolution is always swift. As one of...",
      "ro": "Master Yi și-a călit trupul și și-a ascuțit mintea, până când gândul și fapta aproape că i s-au contopit. Deși apelează la violență numai în ultimă instanță, grația și viteza cu care își mânuiește sabia asigură întotdeauna un final rapid. Fiind unul din..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic"
    ]
  },
  "Mel": {
    "id": "Mel",
    "name": "Mel",
    "title": {
      "en": "the Soul's Reflection",
      "ro": "reflexia sufletului"
    },
    "blurb": {
      "en": "Mel Medarda is the presumed heir of the Medarda family, once one of the most powerful in Noxus. In appearance she is a graceful aristocrat, but beneath the surface lies a skilled politician who makes it her business to know everything about everyone she...",
      "ro": "Mel Medarda este moștenitoarea de drept a familiei Medarda, odinioară una dintre cele mai puternice din Noxus. Are înfățișarea unei aristocrate pline de grație, dar sub această aparență se află un politician abil, care află încearcă să afle totul despre..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "noxus",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "magical",
      "knowledge",
      "caretaker",
      "team"
    ]
  },
  "Milio": {
    "id": "Milio",
    "name": "Milio",
    "title": {
      "en": "The Gentle Flame",
      "ro": "flacăra blândă"
    },
    "blurb": {
      "en": "Milio is a warmhearted boy from Ixtal who has, despite his young age, mastered the fire axiom and discovered something new: soothing fire. With this newfound power, Milio plans to help his family escape their exile by joining the Yun Tal—just like his...",
      "ro": "Milio e un băiat din Ixtal cu un suflet plin de căldură. În ciuda vârstei fragede, a atins măiestria în axioma focului și a descoperit ceva nou: focul vindecător. Cu ajutorul puterii sale noi, are de gând să-și ajute familia să revină din exil, intrând..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "ixtal",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "nature",
      "isolated",
      "magical",
      "caretaker",
      "team",
      "knowledge",
      "independent"
    ]
  },
  "MissFortune": {
    "id": "MissFortune",
    "name": "Miss Fortune",
    "title": {
      "en": "the Bounty Hunter",
      "ro": "vânătorul de recompense"
    },
    "blurb": {
      "en": "A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally...",
      "ro": "Sarah Fortune este un căpitan din Bilgewater și o figură importantă în peisajul de răufăcători al orașului-port. E temută pentru brutalitatea ei și admirată pentru frumusețe. Când era copilă, l-a văzut pe Gangplank ucigându-i familia, o crimă pe care a..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "bilgewater",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "free",
      "opportunistic",
      "chaotic",
      "precise",
      "focused",
      "magical",
      "knowledge",
      "dutiful",
      "ruthless",
      "celestial",
      "primal"
    ]
  },
  "MonkeyKing": {
    "id": "MonkeyKing",
    "name": "Wukong",
    "title": {
      "en": "the Monkey King",
      "ro": "regele maimuțelor"
    },
    "blurb": {
      "en": "Wukong is a vastayan trickster who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand. After finding a lifelong friend in the warrior known as Master Yi, Wukong became the last student of the ancient martial...",
      "ro": "Wukong este un vastaya viclean, care-și folosește forța, agilitatea și inteligența pentru a-și încurca inamicii și a obține victoria în luptă. După ce a descoperit un prieten pe viață în războinicul cunoscut drept Master Yi, Wukong a devenit ultimul..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "dutiful",
      "independent",
      "playful",
      "ancient"
    ]
  },
  "Mordekaiser": {
    "id": "Mordekaiser",
    "name": "Mordekaiser",
    "title": {
      "en": "the Iron Revenant",
      "ro": "spectrul de fier"
    },
    "blurb": {
      "en": "Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but...",
      "ro": "Renăscând din cenușă după fiecare moarte, Mordekaiser este un despot brutal dintr-o epocă demult uitată. Acum, își folosește magia necromantică pentru a înrobi pe vecie sufletele muritorilor. Deși doar câțiva dintre cei care-și amintesc de cuceririle..."
    },
    "classes": [
      "Fighter",
      "Mage"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "ap",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "warrior",
      "frontline",
      "grit",
      "magical",
      "knowledge",
      "primal"
    ]
  },
  "Morgana": {
    "id": "Morgana",
    "name": "Morgana",
    "title": {
      "en": "the Fallen",
      "ro": "aripile durerii"
    },
    "blurb": {
      "en": "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from...",
      "ro": "Prinsă între natura ei divină și cea umană, Morgana și-a legat aripile pentru a rămâne alături de muritori, protejându-i pe cei ce se căiesc și distrugându-i pe cei corupți. Știe că multe dintre tradițiile și legile oamenilor sunt rigide și injuste și..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "demacia",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "celestial",
      "nature"
    ]
  },
  "Naafiri": {
    "id": "Naafiri",
    "name": "Naafiri",
    "title": {
      "en": "the Hound of a Hundred Bites",
      "ro": "bestia cu o sută de mușcături"
    },
    "blurb": {
      "en": "Across the sands of Shurima, a chorus of howls rings out. It is the call of the dune hounds, voracious predators who form packs and compete for the right to hunt in these barren lands. Among them, one pack stands above all, for they are driven not only...",
      "ro": "Un cor de urlete răsună deasupra dunelor shurimane. E chemarea câinilor de nisip, prădători feroce care vânează în haită și-și dispută prada din aceste ținuturi aride. O haită se ridică deasupra tuturor celorlalte, condusă nu doar de instinctele..."
    },
    "classes": [
      "Assassin",
      "Fighter"
    ],
    "region": "shurima",
    "range": "melee",
    "style": "ad",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "lethal",
      "independent",
      "opportunistic",
      "warrior",
      "frontline",
      "grit",
      "primal"
    ]
  },
  "Nami": {
    "id": "Nami",
    "name": "Nami",
    "title": {
      "en": "the Tidecaller",
      "ro": "aleasa mării"
    },
    "blurb": {
      "en": "A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred...",
      "ro": "Nami este o tânără și încăpățânată vastaya a mării. Când a fost încălcat acordul străvechi dintre tribul Marai și targonieni, ea a fost prima care a părăsit oceanul și s-a aventurat pe uscat. Neavând de ales, a decis să ducă singură la bun sfârșit..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "independent",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "celestial",
      "ancient",
      "free",
      "primal"
    ]
  },
  "Nasus": {
    "id": "Nasus",
    "name": "Nasus",
    "title": {
      "en": "the Curator of the Sands",
      "ro": "curatorul nisipurilor"
    },
    "blurb": {
      "en": "Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the ancient...",
      "ro": "Nasus este o ființă iluminată din Shurima antică, un erou impunător, cu cap de șacal, privit ca un semizeu de oamenii deșerturilor. Fiind extrem de inteligent, Nasus era un gardian al cunoașterii și un strateg fără seamăn a cărui înțelepciune a călăuzit..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "shurima",
    "range": "melee",
    "style": "hybrid",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "celestial"
    ]
  },
  "Nautilus": {
    "id": "Nautilus",
    "name": "Nautilus",
    "title": {
      "en": "the Titan of the Depths",
      "ro": "titanul adâncurilor"
    },
    "blurb": {
      "en": "A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to...",
      "ro": "O legendă singuratică, mai veche decât primele pontoane scufundate din Bilgewater, uriașul în armură numit Nautilus străbate apele întunecate de pe coasta Arhipelagului Flăcărilor Albastre. Mânat de o trădare uitată, lovește fără avertisment, rotindu-și..."
    },
    "classes": [
      "Tank",
      "Support"
    ],
    "region": "bilgewater",
    "range": "melee",
    "style": "ap",
    "traits": [
      "free",
      "opportunistic",
      "chaotic",
      "protector",
      "frontline",
      "durable",
      "caretaker",
      "team",
      "independent",
      "haunted"
    ]
  },
  "Neeko": {
    "id": "Neeko",
    "name": "Neeko",
    "title": {
      "en": "the Curious Chameleon",
      "ro": "cameleonul jucăuș"
    },
    "blurb": {
      "en": "Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others, even absorbing something of their emotional state to tell friend from foe in an instant. No one is ever sure where—or who—Neeko might be...",
      "ro": "Descendenta unui trib de vastaya care s-a stins demult, Neeko poate împrumuta aspectul celorlalți pentru a se ascunde în orice mulțime. Mai mult, atunci când se transformă, absoarbe o parte din emoțiile lor pentru a deosebi instantaneu dușmanii de..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "ixtal",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "nature",
      "isolated",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "curious",
      "primal"
    ]
  },
  "Nidalee": {
    "id": "Nidalee",
    "name": "Nidalee",
    "title": {
      "en": "the Bestial Huntress",
      "ro": "copila junglei"
    },
    "blurb": {
      "en": "Raised in the deepest jungle, Nidalee is a master tracker who can shapeshift into a ferocious cougar at will. Neither wholly woman nor beast, she viciously defends her territory from any and all trespassers, with carefully placed traps and deft spear...",
      "ro": "Nidalee a crescut în inima junglei și a ajuns un vânător deosebit de iscusit, care se poate transforma pe dată într-o pumă feroce. Nu este pe de-a-ntregul nici femeie, nici bestie și își apără violent teritoriul de toți cei care îndrăznesc să-l încalce..."
    },
    "classes": [
      "Assassin",
      "Mage"
    ],
    "region": "ixtal",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "nature",
      "isolated",
      "magical",
      "lethal",
      "independent",
      "opportunistic",
      "knowledge",
      "protector",
      "primal"
    ]
  },
  "Nilah": {
    "id": "Nilah",
    "name": "Nilah",
    "title": {
      "en": "the Joy Unbound",
      "ro": "bucuria dezlănțuită"
    },
    "blurb": {
      "en": "Nilah is an ascetic warrior from a distant land, seeking the world's deadliest, most titanic opponents so that she might challenge and destroy them. Having won her power through an encounter with the long-imprisoned demon of joy, she has no emotions...",
      "ro": "Nilah e o războinică ascetică dintr-un tărâm îndepărtat, care caută cei mai letali și gigantici adversari din lume pentru a-i înfrunta și a-i distruge. După ce și-a câștigat puterea într-o întâlnire cu demonul bucuriei, întemnițat din vremuri de demult..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "bilgewater",
    "range": "melee",
    "style": "ad",
    "traits": [
      "free",
      "opportunistic",
      "chaotic",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "dutiful",
      "tragic",
      "curious"
    ]
  },
  "Nocturne": {
    "id": "Nocturne",
    "name": "Nocturne",
    "title": {
      "en": "the Eternal Nightmare",
      "ro": "eternul coșmar"
    },
    "blurb": {
      "en": "A demonic amalgamation drawn from the nightmares that haunt every sentient mind, the thing known as Nocturne has become a primordial force of pure evil. It is liquidly chaotic in aspect, a faceless shadow with cold eyes and armed with wicked-looking...",
      "ro": "Un amalgam demonic desprins din coșmarurile tuturor creaturilor înzestrate cu conștiință, creatura numită Nocturne a devenit o forță primordială a răului suprem. Aspectul său este haotic și lichid: o umbră fără chip, cu ochii reci, înarmată cu tăișuri..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "unaffiliated",
    "range": "melee",
    "style": "ad",
    "traits": [
      "independent",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "opportunistic",
      "dutiful",
      "chaotic",
      "haunted",
      "celestial"
    ]
  },
  "Nunu": {
    "id": "Nunu",
    "name": "Nunu & Willump",
    "title": {
      "en": "the Boy and His Yeti",
      "ro": "un băiat și un yeti"
    },
    "blurb": {
      "en": "Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast, a lonely and magical yeti, merely needed a friend. Bound together by ancient power and a shared love of snowballs, Nunu...",
      "ro": "Odată ca niciodată, era un băiat care voia să ucidă un monstru fioros ca să le arate tuturor că și el e un erou; cu toate astea, și-a dat seama că bestia, un yeti singuratic și înzestrat cu puteri magice, avea nevoie doar de-un prieten. Legați de o..."
    },
    "classes": [
      "Tank",
      "Mage"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "ap",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "protector",
      "frontline",
      "durable",
      "magical",
      "knowledge",
      "charming",
      "ancient"
    ]
  },
  "Olaf": {
    "id": "Olaf",
    "name": "Olaf",
    "title": {
      "en": "the Berserker",
      "ro": "berserkerul"
    },
    "blurb": {
      "en": "An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat. Hailing from the brutal Freljordian peninsula of Lokfar, he once received a prophecy foretelling his peaceful passing—a coward's fate, and a great...",
      "ro": "Olaf este o forță distructivă de neoprit, mânuindu-și toporul cu o singură dorință: moartea într-o luptă glorioasă. Provine din peninsula Lokfar din Freljord și, demult, i s-a profețit că va muri pașnic – o soartă de laș și o mare insultă pentru cineva..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "ad",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "ruthless"
    ]
  },
  "Orianna": {
    "id": "Orianna",
    "name": "Orianna",
    "title": {
      "en": "the Lady of Clockwork",
      "ro": "dansatoarea mecanică"
    },
    "blurb": {
      "en": "Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork. She became gravely ill after an accident in the lower districts of Zaun, and her failing body had to be replaced with exquisite artifice...",
      "ro": "Orianna, care a fost odată o fată ciudată din carne și oase, e un miracol al mecanicii, o femeie al cărei corp e format doar din mecanisme de ceasornic. După ce a suferit un accident în districtele inferioare ale Zaunului, s-a îmbolnăvit grav, iar..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "piltover",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "inventive",
      "orderly",
      "ambitious",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "curious",
      "survivor",
      "primal"
    ]
  },
  "Ornn": {
    "id": "Ornn",
    "name": "Ornn",
    "title": {
      "en": "The Fire below the Mountain",
      "ro": "focul din inima muntelui"
    },
    "blurb": {
      "en": "Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion...",
      "ro": "Ornn e spiritul freljordian al meșteșugăriei și fierăritului. Trudește în singurătatea unei fierării imense, săpate în cavernele de magmă de sub vulcanul Focul Făurarului. Acolo, aprinde jăratic sub cazane pline cu piatră topită, purificând metalele și..."
    },
    "classes": [
      "Tank"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "tank",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "protector",
      "frontline",
      "durable",
      "spiritual"
    ]
  },
  "Pantheon": {
    "id": "Pantheon",
    "name": "Pantheon",
    "title": {
      "en": "the Unbreakable Spear",
      "ro": "lancea indestructibilă"
    },
    "blurb": {
      "en": "Once an unwilling host to the Aspect of War, Atreus survived when the celestial power within him was slain, refusing to succumb to a blow that tore stars from the heavens. In time, he learned to embrace the power of his own mortality, and the stubborn...",
      "ro": "Cândva o gazdă a Aspectului Războiului fără voia sa, Atreus a supraviețuit uciderii puterii celeste din interiorul său, refuzând să cedeze în fața unei lovituri care a smuls stelele de pe cer. În timp, a învățat să folosească puterea efemerității sale..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "mount-targon",
    "range": "melee",
    "style": "ad",
    "traits": [
      "celestial",
      "destined",
      "spiritual",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "survivor"
    ]
  },
  "Poppy": {
    "id": "Poppy",
    "name": "Poppy",
    "title": {
      "en": "Keeper of the Hammer",
      "ro": "straja barosului"
    },
    "blurb": {
      "en": "Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing the legendary hammer of Orlon, a weapon twice her size, this determined yordle has spent untold years searching in secret for the fabled “Hero of Demacia,” said...",
      "ro": "Runeterra nu duce lipsă de campioni viteji, dar puțini sunt la fel de tenace ca Poppy. Înarmată cu legendarul baros al lui Orlon, o armă de două ori mai mare ca ea, această yordle hotărâtă îl caută de nenumărați ani pe faimosul ''erou al Demaciei''..."
    },
    "classes": [
      "Tank",
      "Fighter"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "tank",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "frontline",
      "durable",
      "warrior",
      "grit",
      "playful",
      "free",
      "primal"
    ]
  },
  "Pyke": {
    "id": "Pyke",
    "name": "Pyke",
    "title": {
      "en": "the Bloodharbor Ripper",
      "ro": "spintecătorul de pe docuri"
    },
    "blurb": {
      "en": "A renowned harpooner from the slaughter docks of Bilgewater, Pyke should have met his death in the belly of a gigantic jaull-fish… and yet, he returned. Now, stalking the dank alleys and backways of his former hometown, he uses his new supernatural...",
      "ro": "Pyke era un renumit vânător cu harponul care-și ducea veacul pe Docurile Ucigașilor din Bilgewater. Când a fost înghițit de un pește gigantic, nu și-a găsit sfârșitul... ci s-a întors din abisuri, transformat pentru totdeauna. Acum, pândește pe aleile..."
    },
    "classes": [
      "Support",
      "Assassin"
    ],
    "region": "bilgewater",
    "range": "melee",
    "style": "ad",
    "traits": [
      "free",
      "opportunistic",
      "chaotic",
      "caretaker",
      "team",
      "lethal",
      "independent",
      "dutiful",
      "ruthless",
      "haunted"
    ]
  },
  "Qiyana": {
    "id": "Qiyana",
    "name": "Qiyana",
    "title": {
      "en": "Empress of the Elements",
      "ro": "Împărăteasa elementelor"
    },
    "blurb": {
      "en": "In the jungle city of Ixaocan, Qiyana plots her own ruthless path to the high seat of the Yun Tal. Last in line to succeed her parents, she faces those who stand in her way with brash confidence and unprecedented mastery over elemental magic. With the...",
      "ro": "În Ixaocan, un oraș ascuns în junglă, Qiyana caută o cale să pună mâna pe cea mai înaltă poziție a castei Yun Tal prin orice mijloace. Qiyana e ultima moștenitoare pe linia de succesiune a familiei sale și îi înfruntă pe cei care-i stau în cale cu o..."
    },
    "classes": [
      "Assassin"
    ],
    "region": "ixtal",
    "range": "melee",
    "style": "ap",
    "traits": [
      "nature",
      "isolated",
      "magical",
      "lethal",
      "independent",
      "opportunistic",
      "ruthless",
      "free",
      "imperial"
    ]
  },
  "Quinn": {
    "id": "Quinn",
    "name": "Quinn",
    "title": {
      "en": "Demacia's Wings",
      "ro": "aripile Demaciei"
    },
    "blurb": {
      "en": "Quinn is an elite ranger-knight of Demacia, who undertakes dangerous missions deep in enemy territory. She and her legendary eagle, Valor, share an unbreakable bond, and their foes are often slain before they realize they are fighting not one, but two...",
      "ro": "Quinn este un cavaler-cercetaș de elită din Demacia, care face incursiuni adânci în teritoriul inamic. Tânăra are o legătură extraordinară cu Valor, vulturul ei legendar; mulți adversari au pierit înainte să-și dea seama că se luptă nu cu unul, ci cu..."
    },
    "classes": [
      "Marksman",
      "Assassin"
    ],
    "region": "demacia",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "precise",
      "focused",
      "lethal",
      "independent",
      "opportunistic"
    ]
  },
  "Rakan": {
    "id": "Rakan",
    "name": "Rakan",
    "title": {
      "en": "The Charmer",
      "ro": "fermecătorul"
    },
    "blurb": {
      "en": "As mercurial as he is charming, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties...",
      "ro": "Ager și fermecător, Rakan este un renumit scandalagiu din neamul vastaya, precum și cel mai iscusit luptător-dansator din toată istoria tribului Lhotlan. Pentru oamenii ce-și duc traiul pe platourile muntoase ale Ioniei, numele lui este sinonim cu..."
    },
    "classes": [
      "Support"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "caretaker",
      "team",
      "chaotic",
      "charming"
    ]
  },
  "Rammus": {
    "id": "Rammus",
    "name": "Rammus",
    "title": {
      "en": "the Armordillo",
      "ro": "tatuul cu armură"
    },
    "blurb": {
      "en": "Idolized by many, dismissed by some, mystifying to all, the curious being Rammus is an enigma. Protected by a spiked shell, he inspires increasingly disparate theories on his origin wherever he goes—from demigod, to sacred oracle, to a mere beast...",
      "ro": "Venerată sau ignorată, creatura misterioasă ce poartă numele de Rammus este o enigmă pentru toată lumea. Sub protecția carapacei sale țepoase, Rammus inspiră povești care mai de care mai ciudate despre originea sa – de la o simplă bestie transformată cu..."
    },
    "classes": [
      "Tank"
    ],
    "region": "shurima",
    "range": "melee",
    "style": "tank",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "protector",
      "frontline",
      "durable",
      "curious",
      "celestial",
      "primal"
    ]
  },
  "RekSai": {
    "id": "RekSai",
    "name": "Rek'Sai",
    "title": {
      "en": "the Void Burrower",
      "ro": "amenințarea din subteran"
    },
    "blurb": {
      "en": "An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed...",
      "ro": "Rek'Sai este un prădător nemilos din Vid, care-și sapă tunelurile sub pământ pentru a-și prinde prada pe nepregătite și a o devora. Foamea ei nepotolită a devastat întregi regiuni din mărețul imperiu antic al Shurimei, iar negustorii și caravanele..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "void",
    "range": "melee",
    "style": "ad",
    "traits": [
      "hungry",
      "alien",
      "dark",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "ambitious",
      "imperial"
    ]
  },
  "Rell": {
    "id": "Rell",
    "name": "Rell",
    "title": {
      "en": "the Iron Maiden",
      "ro": "fecioara de fier"
    },
    "blurb": {
      "en": "The product of brutal experimentation at the hands of the Black Rose, Rell is a defiant, living weapon determined to topple Noxus. Her childhood was one of misery and horror, enduring unspeakable procedures to perfect and weaponize her magical control...",
      "ro": "Produsul experimentelor brutale ale Trandafirului Negru, Rell e o armă vie, hotărâtă să distrugă Noxusul. Copilăria ei a fost marcată de orori și suferință. După ce a îndurat proceduri groaznice menite să-i perfecționeze controlul asupra metalului și..."
    },
    "classes": [
      "Tank",
      "Support"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "hybrid",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "protector",
      "frontline",
      "durable",
      "caretaker",
      "team"
    ]
  },
  "Renata": {
    "id": "Renata",
    "name": "Renata Glasc",
    "title": {
      "en": "the Chem-Baroness",
      "ro": "baroana chimică"
    },
    "blurb": {
      "en": "Renata Glasc rose from the ashes of her childhood home with nothing but her name and her parents' alchemical research. In the decades since, she has become Zaun's wealthiest chem-baron, a business magnate who built her power by tying everyone's...",
      "ro": "Renata Glasc a scăpat cu viață din ruinele casei în care a crescut, dar a rămas doar cu numele și cu cercetările alchimice ale părinților ei. În deceniile care au urmat, a devenit cea mai bogată baroană chimică din Zaun, o magnată care și-a construit..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "zaun",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "free"
    ]
  },
  "Renekton": {
    "id": "Renekton",
    "name": "Renekton",
    "title": {
      "en": "the Butcher of the Sands",
      "ro": "măcelarul deșertului"
    },
    "blurb": {
      "en": "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed...",
      "ro": "Renekton este o ființă iluminată teribilă din deșertul Shurimei, despre care se spune că are o furie fără seamăn. Odată, era cel mai de seamă războinic al imperiului și conducea armatele shurimane către victorie. Însă, după căderea imperiului, Renekton..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "shurima",
    "range": "melee",
    "style": "ad",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "ambitious"
    ]
  },
  "Rengar": {
    "id": "Rengar",
    "name": "Rengar",
    "title": {
      "en": "the Pridestalker",
      "ro": "mândria haitei"
    },
    "blurb": {
      "en": "Rengar is a ferocious vastayan trophy hunter who lives for the thrill of tracking down and killing dangerous creatures. He scours the world for the most fearsome beasts he can find, especially seeking any trace of Kha'Zix, the void creature who...",
      "ro": "Rengar este un vânător de trofee vastaya de o ferocitate extraordinară și își dorește un singur lucru de la viață: să urmărească și să ucidă creaturi periculoase. Cutreieră lumea în căutarea celor mai terifiante bestii, dorindu-și cel mai mult să-l..."
    },
    "classes": [
      "Assassin",
      "Fighter"
    ],
    "region": "ixtal",
    "range": "melee",
    "style": "ad",
    "traits": [
      "nature",
      "isolated",
      "magical",
      "lethal",
      "independent",
      "opportunistic",
      "warrior",
      "frontline",
      "grit",
      "dutiful",
      "ruthless",
      "curious",
      "hungry",
      "primal"
    ]
  },
  "Riven": {
    "id": "Riven",
    "name": "Riven",
    "title": {
      "en": "the Exile",
      "ro": "renegata"
    },
    "blurb": {
      "en": "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a...",
      "ro": "O fostă conducătoare a unei cete noxiene de război, Riven a fost exilată într-un tărâm pe care a încercat odinioară să-l cucerească. Datorită credinței sale în Noxus și eficienței sale brutale, a crescut repede în rang, primind ca recompensă o sabie..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "ad",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "protector"
    ]
  },
  "Rumble": {
    "id": "Rumble",
    "name": "Rumble",
    "title": {
      "en": "the Mechanized Menace",
      "ro": "amenințarea mecanică"
    },
    "blurb": {
      "en": "Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff...",
      "ro": "Rumble este un inventator tânăr și arțăgos. Cu ajutorul propriilor mâini și al unui morman de fiare vechi, acest yordle irascibil a construit un uriaș costum mecanizat, dotat cu un arsenal întreg de harpoane electrificate și rachete incendiare. Deși..."
    },
    "classes": [
      "Fighter",
      "Mage"
    ],
    "region": "bandle-city",
    "range": "melee",
    "style": "ap",
    "traits": [
      "playful",
      "curious",
      "chaotic",
      "warrior",
      "frontline",
      "grit",
      "magical",
      "knowledge",
      "independent",
      "inventive",
      "survivor"
    ]
  },
  "Ryze": {
    "id": "Ryze",
    "name": "Ryze",
    "title": {
      "en": "the Rune Mage",
      "ro": "magul runelor"
    },
    "blurb": {
      "en": "Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments...",
      "ro": "Considerat de mulți drept unul dintre cei mai puternici vrăjitori din Runeterra, Ryze este un arhimag străvechi, dur și încercat, ce poartă pe umeri o povară imensă. Înzestrat cu o putere ocultă fără egal și o constituție nepământească, Ryze cutreieră..."
    },
    "classes": [
      "Mage"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "independent",
      "magical",
      "knowledge",
      "ancient",
      "primal"
    ]
  },
  "Samira": {
    "id": "Samira",
    "name": "Samira",
    "title": {
      "en": "the Desert Rose",
      "ro": "trandafirul deșertului"
    },
    "blurb": {
      "en": "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on...",
      "ro": "Samira privește moartea în ochi cu o încredere debordantă în forțele proprii, căutând pericolul peste tot pe unde ajunge. După ce așezarea shurimană în care a crescut a fost distrusă pe când era copil, Samira și-a găsit adevărata chemare în Noxus, unde..."
    },
    "classes": [
      "Marksman",
      "Assassin"
    ],
    "region": "noxus",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "precise",
      "focused",
      "lethal",
      "independent",
      "opportunistic",
      "dutiful",
      "curious",
      "haunted",
      "celestial",
      "imperial"
    ]
  },
  "Sejuani": {
    "id": "Sejuani",
    "name": "Sejuani",
    "title": {
      "en": "Fury of the North",
      "ro": "furia nordului"
    },
    "blurb": {
      "en": "Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans...",
      "ro": "Sejuani este un vlăstar al gheții, brutala și neîndurătoarea războinică-mamă a Ghearei Iernii, unul dintre cele mai de temut triburi din Freljord. Pentru a supraviețui, poporul ei duce la nesfârșit o luptă disperată cu forțele naturii; ca să treacă de..."
    },
    "classes": [
      "Tank"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "tank",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "protector",
      "frontline",
      "durable",
      "dutiful",
      "ruthless"
    ]
  },
  "Senna": {
    "id": "Senna",
    "name": "Senna",
    "title": {
      "en": "the Redeemer",
      "ro": "salvatoarea"
    },
    "blurb": {
      "en": "Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order known as the Sentinels of Light, and fiercely fought back—only to be killed, her soul imprisoned in a lantern by the cruel specter Thresh. But refusing to...",
      "ro": "Blestemată încă din copilărie să fie bântuită de Negura Întunecată, Senna s-a alăturat unui ordin sacru, cunoscut drept Santinelele Luminii, și a luptat cu toate puterile sale. Cu toate astea, a fost ucisă, iar sufletul i-a fost întemnițat într-un..."
    },
    "classes": [
      "Support",
      "Marksman"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "independent",
      "caretaker",
      "team",
      "precise",
      "focused",
      "ruthless",
      "tragic",
      "haunted"
    ]
  },
  "Seraphine": {
    "id": "Seraphine",
    "name": "Seraphine",
    "title": {
      "en": "the Starry-Eyed Songstress",
      "ro": "cântăreața visătoare"
    },
    "blurb": {
      "en": "Born in Piltover to Zaunite parents, Seraphine can hear the souls of others—the world sings to her, and she sings back. Though these sounds overwhelmed her in her youth, she now draws on them for inspiration, turning the chaos into a symphony. She...",
      "ro": "Născută în Piltover din părinți zaunieni, Seraphine poate auzi sufletele altora. Lumea îi cântă, iar ea îi răspunde tot prin cântec. Deși sunetele au copleșit-o în copilărie, acum le lasă să o inspire, transformând haosul într-o simfonie. Dă spectacole..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "piltover",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "inventive",
      "orderly",
      "ambitious",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "chaotic",
      "celestial",
      "survivor"
    ]
  },
  "Sett": {
    "id": "Sett",
    "name": "Sett",
    "title": {
      "en": "the Boss",
      "ro": "bătăușul-șef"
    },
    "blurb": {
      "en": "A leader of Ionia's growing criminal underworld, Sett rose to prominence in the wake of the war with Noxus. Though he began as a humble challenger in the fighting pits of Navori, he quickly gained notoriety for his savage strength, and his ability to...",
      "ro": "Un lider al lumii interlope din Ionia, Sett a ajuns la putere după izbucnirea războiului cu Noxusul. Deși a început ca simplu luptător în arenele din Navori, și-a câștigat repede faima prin puterea fantastică și rezistența extraordinară de care a dat..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "ambitious"
    ]
  },
  "Shaco": {
    "id": "Shaco",
    "name": "Shaco",
    "title": {
      "en": "the Demon Jester",
      "ro": "bufonul demonic"
    },
    "blurb": {
      "en": "Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls...",
      "ro": "Construită acum mult timp pe post de jucărie pentru un prinț singuratic, marioneta vrăjită pe nume Shaco iubește să ucidă și să provoace haos. Deși avea suflet bun odinioară, moartea stăpânului său și magia neagră l-au corupt; acum, singura lui plăcere..."
    },
    "classes": [
      "Assassin"
    ],
    "region": "unaffiliated",
    "range": "melee",
    "style": "ad",
    "traits": [
      "independent",
      "lethal",
      "opportunistic",
      "dutiful",
      "ruthless",
      "charming"
    ]
  },
  "Shen": {
    "id": "Shen",
    "name": "Shen",
    "title": {
      "en": "the Eye of Twilight",
      "ro": "ochiul crepusculului"
    },
    "blurb": {
      "en": "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit...",
      "ro": "În rândul misterioșilor războinici ionieni din ordinul Kinkou, Shen are rolul de lider, de ochi al crepusculului. Dorind să rămână neatins de confuzia emoțiilor, a prejudecăților și a aroganței, Shen pășește pe calea nevăzută a judecății imparțiale..."
    },
    "classes": [
      "Tank"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "tank",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "protector",
      "frontline",
      "durable",
      "independent",
      "primal"
    ]
  },
  "Shyvana": {
    "id": "Shyvana",
    "name": "Shyvana",
    "title": {
      "en": "the Half-Dragon",
      "ro": "fiica dragonului"
    },
    "blurb": {
      "en": "Shyvana is a fearsome half-dragon warrior. Though she often appears humanoid, she also rules the skies as a dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan IV, Shyvana now serves uneasily in his royal...",
      "ro": "Shyvana este un războinic pe jumătate dragon de temut. Deși deseori ia formă omenească, ea stăpânește și cerurile ca un dragon, incinerându-și inamicii cu suflarea de foc. După ce i-a salvat viața lui Jarvan IV, prințul moștenitor al Demaciei, Shyvana..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "warrior",
      "frontline",
      "grit",
      "durable",
      "independent"
    ]
  },
  "Singed": {
    "id": "Singed",
    "name": "Singed",
    "title": {
      "en": "the Mad Chemist",
      "ro": "chimistul nebun"
    },
    "blurb": {
      "en": "Singed is a brilliant alchemist of dubious morality, whose experiments would turn the stomach of even the most cutthroat criminal. Selling his skills to the highest bidder, he cares little for how his noxious concoctions are used, with the ensuing chaos...",
      "ro": "Singed este un alchimist sclipitor cu o moralitate îndoielnică, ale cărui experimente l-ar îngrozi până și pe cel mai înrăit criminal. Își vinde serviciile oricui oferă mai mult și nu-i pasă cum sunt folosite creațiile lui toxice, deoarece haosul creat..."
    },
    "classes": [
      "Tank",
      "Mage"
    ],
    "region": "zaun",
    "range": "melee",
    "style": "tank",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "protector",
      "frontline",
      "durable",
      "magical",
      "knowledge",
      "ruthless"
    ]
  },
  "Sion": {
    "id": "Sion",
    "name": "Sion",
    "title": {
      "en": "The Undead Juggernaut",
      "ro": "monstrul neînsuflețit"
    },
    "blurb": {
      "en": "A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his...",
      "ro": "Sion, un erou dintr-o eră demult apusă, a câștigat respectul noxienilor după ce a sugrumat un rege demacian cu mâinile goale. Când să aibă parte de odihna veșnică, a fost readus la viață pentru a-și servi imperiul chiar și după moarte. A început să-i..."
    },
    "classes": [
      "Tank",
      "Fighter"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "tank",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "protector",
      "frontline",
      "durable",
      "warrior",
      "grit",
      "dutiful",
      "haunted",
      "imperial"
    ]
  },
  "Sivir": {
    "id": "Sivir",
    "name": "Sivir",
    "title": {
      "en": "the Battle Mistress",
      "ro": "războinica"
    },
    "blurb": {
      "en": "Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won countless battles for those who can afford her exorbitant price. Known for her...",
      "ro": "Sivir este o renumită vânătoare de recompense și căpitan de mercenari ce își desfășoară activitatea în deșerturile Shurimei. Înarmată cu un legendar bumerang în cruce, a câștigat nenumărate lupte în numele celor care își permit s-o angajeze. Sivir este..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "shurima",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "precise",
      "focused",
      "independent",
      "lethal",
      "free",
      "primal"
    ]
  },
  "Skarner": {
    "id": "Skarner",
    "name": "Skarner",
    "title": {
      "en": "the Primordial Sovereign",
      "ro": "suveranul primordial"
    },
    "blurb": {
      "en": "The ancient, colossal brackern Skarner is revered in Ixtal as one of the founding members of its ruling caste, the Yun Tal. Devoted to keeping his nation safe from the rest of the world, Skarner dwells in a chamber beneath Ixaocan where he can hear the...",
      "ro": "Mărețul și străvechiul brackern Skarner este respectat în Ixtal ca unul dintre întemeietorii castei conducătoare a ținutului, Yun Tal, și este hotărât să apere Ixtalul de restul lumii, ținându-l în izolare. Trăiește într-o încăpere aflată sub Ixaocan..."
    },
    "classes": [
      "Tank",
      "Fighter"
    ],
    "region": "ixtal",
    "range": "melee",
    "style": "tank",
    "traits": [
      "nature",
      "isolated",
      "magical",
      "protector",
      "frontline",
      "durable",
      "warrior",
      "grit",
      "ancient"
    ]
  },
  "Smolder": {
    "id": "Smolder",
    "name": "Smolder",
    "title": {
      "en": "the Fiery Fledgling",
      "ro": "micuțul dragon de foc"
    },
    "blurb": {
      "en": "Hidden amongst the craggy cliffs of the Noxian frontier, under the watchful eyes of his mother, a young dragon is learning what it means to be heir to the Camavoran imperial dragon lineage. Playful and eager to grow up, Smolder looks for any excuse to...",
      "ro": "Pitulat printre stâncile ascuțite de la frontiera noxiană, sub supravegherea atentă a mamei sale, un tânăr dragon învață ce înseamnă să fie descendentul stirpei dragonilor imperiali din Camavor. Jucăuș și nerăbdător să se facă mare, Smolder de abia..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "independent",
      "precise",
      "focused",
      "magical",
      "knowledge",
      "playful"
    ]
  },
  "Sona": {
    "id": "Sona",
    "name": "Sona",
    "title": {
      "en": "Maven of the Strings",
      "ro": "muza strunelor"
    },
    "blurb": {
      "en": "Sona is Demacia's foremost virtuoso of the stringed etwahl, speaking only through her graceful chords and vibrant arias. This genteel manner has endeared her to the highborn, though others suspect her spellbinding melodies to actually emanate magic—a...",
      "ro": "Din toată Demacia, Sona știe cel mai bine să cânte la etwahl, iar corzile instrumentului și ariile melodioase pe care le produce îi servesc drept singura metodă de comunicare. Firea ei liniștită a transformat-o în preferata nobililor, deși alții își dau..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "demacia",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "caretaker",
      "team",
      "magical",
      "knowledge"
    ]
  },
  "Soraka": {
    "id": "Soraka",
    "name": "Soraka",
    "title": {
      "en": "the Starchild",
      "ro": "copila astrelor"
    },
    "blurb": {
      "en": "A wanderer from the celestial dimensions beyond Mount Targon, Soraka gave up her immortality to protect the mortal races from their own more violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—even...",
      "ro": "Soraka, o ființă rătăcitoare venită din dimensiunile celeste de dincolo de Muntele Targon, a renunțat la viața veșnică pentru a proteja rasele muritoare de instinctele lor violente. Se străduiește să-i învețe pe toți care-i ies în cale ce înseamnă..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "mount-targon",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "celestial",
      "destined",
      "spiritual",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "honorable",
      "independent",
      "protector",
      "ancient"
    ]
  },
  "Swain": {
    "id": "Swain",
    "name": "Swain",
    "title": {
      "en": "the Noxian Grand General",
      "ro": "Marele General al Noxusului"
    },
    "blurb": {
      "en": "Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new...",
      "ro": "Jericho Swain este conducătorul vizionar al Noxusului, o nație în plină expansiune ce pune preț doar pe putere. A fost înfrânt și și-a pierdut mâna stângă într-unul dintre războaiele împotriva Ioniei, dar ambiția sa necruțătoare l-a ajutat să preia..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "noxus",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "independent",
      "spiritual",
      "imperial"
    ]
  },
  "Sylas": {
    "id": "Sylas",
    "name": "Sylas",
    "title": {
      "en": "the Unshackled",
      "ro": "magul descătușat"
    },
    "blurb": {
      "en": "Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him...",
      "ro": "Născut într-un cartier sărac al capitalei Demaciei, Sylas din Dregbourne este acum simbolul părții întunecate a Mărețului Oraș. Pe când era copil, capacitatea lui de a identifica persoanele cu puteri magice a captat atenția faimoșilor vânători de magi;..."
    },
    "classes": [
      "Mage",
      "Assassin"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "ap",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "magical",
      "knowledge",
      "lethal",
      "independent",
      "opportunistic",
      "tragic",
      "curious"
    ]
  },
  "Syndra": {
    "id": "Syndra",
    "name": "Syndra",
    "title": {
      "en": "the Dark Sovereign",
      "ro": "suverana întunecată"
    },
    "blurb": {
      "en": "Syndra is a fearsome Ionian mage with incredible power at her command. As a child, she disturbed the village elders with her reckless and wild magic. She was sent away to be taught greater control, but eventually discovered her supposed mentor was...",
      "ro": "Syndra este un mag ionian înzestrat cu puteri incredibile. Încă de când era copil, magia ei sălbatică și imposibil de controlat i-a neliniștit pe înțelepții satului. A fost trimisă să învețe s-o stăpânească, dar în cele din urmă, a aflat că maestrul ei..."
    },
    "classes": [
      "Mage"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "magical",
      "knowledge",
      "ambitious",
      "chaotic"
    ]
  },
  "TahmKench": {
    "id": "TahmKench",
    "name": "Tahm Kench",
    "title": {
      "en": "The River King",
      "ro": "Regele râurilor"
    },
    "blurb": {
      "en": "Known by many names throughout history, the demon Tahm Kench travels the waterways of Runeterra, feeding his insatiable appetite with the misery of others. Though he may appear singularly charming and proud, he swaggers through the physical realm like a...",
      "ro": "Cunoscut sub multe nume de-a lungul istoriei, demonul Tahm Kench străbate căile acvatice ale Runeterrei, hrănindu-și apetitul insațiabil cu suferința celorlalți. Deși poate părea deosebit de șarmant și plin de el, rătăcește prin tărâmul fizic ca un..."
    },
    "classes": [
      "Tank",
      "Support"
    ],
    "region": "unaffiliated",
    "range": "melee",
    "style": "tank",
    "traits": [
      "independent",
      "protector",
      "frontline",
      "durable",
      "caretaker",
      "team",
      "dutiful",
      "charming"
    ]
  },
  "Taliyah": {
    "id": "Taliyah",
    "name": "Taliyah",
    "title": {
      "en": "the Stoneweaver",
      "ro": "țesătoarea pietrelor"
    },
    "blurb": {
      "en": "Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe...",
      "ro": "Taliyah este o tânără nomadă din Shurima, aflată la limita dintre adolescență și responsabilitățile vieții de adult. A străbătut Valoranul în lung și-n lat pentru a reuși să-și înțeleagă darul, dar recent s-a întors acasă pentru a-și proteja tribul. Cei..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "shurima",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "chaotic",
      "protector",
      "primal",
      "nature"
    ]
  },
  "Talon": {
    "id": "Talon",
    "name": "Talon",
    "title": {
      "en": "the Blade's Shadow",
      "ro": "umbra tăișului"
    },
    "blurb": {
      "en": "Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive...",
      "ro": "Talon este cuțitul din umbră, un asasin necruțător ce poate lovi neștiut, făcându-se apoi nevăzut fără să declanșeze vreo alarmă. Și-a câștigat reputația pe străzile brutale ale Noxusului, unde a fost obligat să lupte, să ucidă și să fure pentru a..."
    },
    "classes": [
      "Assassin"
    ],
    "region": "noxus",
    "range": "melee",
    "style": "ad",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "lethal",
      "independent",
      "opportunistic",
      "haunted",
      "survivor"
    ]
  },
  "Taric": {
    "id": "Taric",
    "name": "Taric",
    "title": {
      "en": "the Shield of Valoran",
      "ro": "scutul Valoranului"
    },
    "blurb": {
      "en": "Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a...",
      "ro": "Taric, Aspectul Protectorului, stăpânește o putere incredibilă, cu ajutorul căreia luptă pentru a proteja viața, iubirea și frumusețea din Runeterra. După ce și-a neglijat îndatoririle militare și a fost exilat din țara lui natală, Demacia, Taric a..."
    },
    "classes": [
      "Support",
      "Tank"
    ],
    "region": "mount-targon",
    "range": "melee",
    "style": "tank",
    "traits": [
      "celestial",
      "destined",
      "spiritual",
      "caretaker",
      "team",
      "protector",
      "frontline",
      "durable",
      "dutiful",
      "independent",
      "charming",
      "ancient"
    ]
  },
  "Teemo": {
    "id": "Teemo",
    "name": "Teemo",
    "title": {
      "en": "the Swift Scout",
      "ro": "cercetașul ager"
    },
    "blurb": {
      "en": "Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit. A yordle with an unwavering sense of morality, he takes pride in following the Bandle Scout's Code, sometimes...",
      "ro": "Teemo explorează lumea cu un entuziasm incurabil și o veselie debordantă, iar nici cele mai periculoase obstacole nu-l pot întoarce din drum. Fiind un yordle cu un simț al moralității extrem de ferm, respectă cu mândrie Codul Cercetașilor din Bandle..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "bandle-city",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "playful",
      "curious",
      "chaotic",
      "precise",
      "focused",
      "magical",
      "knowledge",
      "spiritual"
    ]
  },
  "Thresh": {
    "id": "Thresh",
    "name": "Thresh",
    "title": {
      "en": "the Chain Warden",
      "ro": "temnicerul blestemat"
    },
    "blurb": {
      "en": "Sadistic and cunning, Thresh is an ambitious and restless specter of the Shadow Isles. Once the custodian of countless arcane secrets, he was undone by a power greater than life or death, and now sustains himself by tormenting and breaking others with...",
      "ro": "Thresh este un spectru sadic, viclean și înverșunat din Insulele Umbrelor. Pe când era paznicul a nenumărate secrete oculte, a fost mistuit de o putere mai presus de viață și de moarte; acum, își petrece timpul schingiuindu-și și torturându-și lent..."
    },
    "classes": [
      "Support",
      "Tank"
    ],
    "region": "shadow-isles",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "caretaker",
      "team",
      "protector",
      "frontline",
      "durable",
      "dutiful"
    ]
  },
  "Tristana": {
    "id": "Tristana",
    "name": "Tristana",
    "title": {
      "en": "the Yordle Gunner",
      "ro": "țintașul yordle"
    },
    "blurb": {
      "en": "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her...",
      "ro": "În timp ce unii yordeli își canalizează energia către explorare, invenții sau ghidușii, pe Tristana au inspirat-o mereu aventurile marilor războinici. Auzise multe despre Runeterra, despre facțiunile și războaiele de acolo și era de părere că și rasa ei..."
    },
    "classes": [
      "Marksman",
      "Assassin"
    ],
    "region": "bandle-city",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "playful",
      "curious",
      "chaotic",
      "precise",
      "focused",
      "lethal",
      "independent",
      "opportunistic",
      "dutiful",
      "inventive"
    ]
  },
  "Trundle": {
    "id": "Trundle",
    "name": "Trundle",
    "title": {
      "en": "the Troll King",
      "ro": "regele trolilor"
    },
    "blurb": {
      "en": "Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his...",
      "ro": "Trundle este un trol masiv și viclean, cu o latură tare răutăcioasă. Nimic nu poate rezista în fața loviturilor lui, iar totul se pleacă în fața voinței sale, până și Freljordul. Un apărător de temut al propriilor teritorii, Trundle ia urma oricui este..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "ad",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "dutiful",
      "independent"
    ]
  },
  "Tryndamere": {
    "id": "Tryndamere",
    "name": "Tryndamere",
    "title": {
      "en": "the Barbarian King",
      "ro": "regele barbar"
    },
    "blurb": {
      "en": "Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead. The wrathful barbarian has long sought revenge for the...",
      "ro": "Mânat de o furie turbată și neînfrânată, Tryndamere și-a croit odinioară drumul prin Freljord, provocându-i la luptă pe cei mai iscusiți luptători nordici pentru a se pregăti de zilele negre ce urmau să vină. Cuprins de furie, barbarul vrea să se..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "ad",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "dutiful"
    ]
  },
  "TwistedFate": {
    "id": "TwistedFate",
    "name": "Twisted Fate",
    "title": {
      "en": "the Card Master",
      "ro": "maestrul cărților"
    },
    "blurb": {
      "en": "Twisted Fate is an infamous cardsharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking...",
      "ro": "Twisted Fate este un trișor și escroc notoriu, care își petrece viața trecând de la un joc de noroc la altul și fermecându-i pe toți cei cu care are de-a face. De-a lungul timpului, și-a câștigat ura și admirația celor bogați și a celor naivi din..."
    },
    "classes": [
      "Mage",
      "Marksman"
    ],
    "region": "bilgewater",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "free",
      "opportunistic",
      "chaotic",
      "magical",
      "knowledge",
      "precise",
      "focused",
      "dutiful",
      "independent",
      "charming"
    ]
  },
  "Twitch": {
    "id": "Twitch",
    "name": "Twitch",
    "title": {
      "en": "the Plague Rat",
      "ro": "șobolanul mârșav"
    },
    "blurb": {
      "en": "A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really...",
      "ro": "Deși Twitch este un șobolan purtător de boli, este un împătimit neînfricat al mizeriei de toate felurile. Înarmat cu o arbaletă chimică ațintită drept către inima poleită a Piltoverului, a jurat să le arate celor din orașul de deasupra cât de murdari..."
    },
    "classes": [
      "Marksman",
      "Assassin"
    ],
    "region": "zaun",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "precise",
      "focused",
      "lethal",
      "independent",
      "opportunistic"
    ]
  },
  "Udyr": {
    "id": "Udyr",
    "name": "Udyr",
    "title": {
      "en": "the Spirit Walker",
      "ro": "purtătorul spiritelor"
    },
    "blurb": {
      "en": "The most powerful spirit walker alive, Udyr communes with all the spirits of the Freljord, whether by empathically understanding their needs, or by channeling and transforming their ethereal energy into his own primal fighting style. He seeks balance...",
      "ro": "Udyr este cel mai puternic purtător al spiritelor, aflându-se în comuniune cu tot ceea ce trăiește în Freljord. Înțelege prin empatie nevoile spiritelor, dar le și folosește și transformă energia eterică pentru a lupta în stilul său unic și primordial..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "ad",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "independent",
      "spiritual",
      "curious"
    ]
  },
  "Urgot": {
    "id": "Urgot",
    "name": "Urgot",
    "title": {
      "en": "the Dreadnought",
      "ro": "torționarul de coșmar"
    },
    "blurb": {
      "en": "Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge—a prison mine deep beneath Zaun. Emerging in a disaster that...",
      "ro": "Urgot, fostul călău al Noxusului, a fost trădat chiar de imperiul în numele căruia ucisese atât de mulți oameni. Încătușat în lanțuri grele de fier, a fost forțat să învețe ce înseamnă cu adevărat puterea când a ajuns în Extracție, o mină-închisoare din..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "zaun",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "ambitious",
      "ruthless",
      "imperial"
    ]
  },
  "Varus": {
    "id": "Varus",
    "name": "Varus",
    "title": {
      "en": "the Arrow of Retribution",
      "ro": "săgeata răzbunării"
    },
    "blurb": {
      "en": "One of the ancient darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow. He was imprisoned at the end of the Great Darkin War, but escaped centuries later in the remade...",
      "ro": "Varus a fost odată un asasin din rasa antică darkin. Îi plăcea la nebunie să-și chinuie inamicii cu săgeți, aproape făcându-i să-și piardă mințile înainte de a le da lovitura fatală. A fost întemnițat la finalul Marelui Război al Darkinilor, dar a..."
    },
    "classes": [
      "Marksman",
      "Mage"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "precise",
      "focused",
      "magical",
      "knowledge",
      "ruthless",
      "chaotic",
      "lethal",
      "charming",
      "tragic",
      "ancient"
    ]
  },
  "Vayne": {
    "id": "Vayne",
    "name": "Vayne",
    "title": {
      "en": "the Night Hunter",
      "ro": "ucigașa întunericului"
    },
    "blurb": {
      "en": "Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when...",
      "ro": "Shauna Vayne este o demaciană necruțătoare și letală care vânează monștri și al cărei singur scop în viață e să găsească și să răpună demonul care i-a ucis familia. Înarmată cu arbalete și cu o dorință aprigă de răzbunare, nimic n-o face mai fericită..."
    },
    "classes": [
      "Marksman",
      "Assassin"
    ],
    "region": "demacia",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "precise",
      "focused",
      "lethal",
      "independent",
      "opportunistic",
      "ruthless",
      "primal"
    ]
  },
  "Veigar": {
    "id": "Veigar",
    "name": "Veigar",
    "title": {
      "en": "the Tiny Master of Evil",
      "ro": "micul maestru al răului"
    },
    "blurb": {
      "en": "An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been...",
      "ro": "Veigar, un maestru pasionat al magiei negre, a asimilat puteri de care puțini muritori ar îndrăzni să se apropie. Fiind un locuitor deschis la minte din Orașul Bandle, și-a dorit cu ardoare să depășească limitele magiei yordle, așa că a studiat texte..."
    },
    "classes": [
      "Mage"
    ],
    "region": "bandle-city",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "playful",
      "curious",
      "chaotic",
      "magical",
      "knowledge",
      "spiritual"
    ]
  },
  "Velkoz": {
    "id": "Velkoz",
    "name": "Vel'Koz",
    "title": {
      "en": "the Eye of the Void",
      "ro": "ochiul Vidului"
    },
    "blurb": {
      "en": "It is unclear if Vel'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating sentience. While his kin devour or defile everything around them, he seeks instead to...",
      "ro": "Nimeni nu știe dacă Vel'Koz a fost prima creatură din Vid care a ajuns în Runeterra, dar ceva e sigur: nicio altă ființă nu-i poate egala cruzimea și răceala cu care judecă. În timp ce rasa lui devorează și pângărește tot ce prinde, el caută să studieze..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "void",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "hungry",
      "alien",
      "dark",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "curious"
    ]
  },
  "Vex": {
    "id": "Vex",
    "name": "Vex",
    "title": {
      "en": "the Gloomist",
      "ro": "magul mohorât"
    },
    "blurb": {
      "en": "In the black heart of the Shadow Isles, a lone yordle trudges through the spectral fog, content in its murky misery. With an endless supply of teen angst and a powerful shadow in tow, Vex lives in her own self-made slice of gloom, far from the revolting...",
      "ro": "În inima neagră a Insulelor Umbrelor, o tânără yordle singuratică își târăște picioarele prin ceața spectrală, mulțumită de suferința mohorâtă care o înconjoară. Cu o rezervă nesfârșită de angoasă adolescentină și o umbră puternică în ajutor, Vex..."
    },
    "classes": [
      "Mage"
    ],
    "region": "shadow-isles",
    "range": "ranged",
    "style": "hybrid",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "magical",
      "knowledge",
      "chaotic",
      "independent",
      "playful",
      "primal"
    ]
  },
  "Vi": {
    "id": "Vi",
    "name": "Vi",
    "title": {
      "en": "the Piltover Enforcer",
      "ro": "agentul din Piltover"
    },
    "blurb": {
      "en": "Raised on the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with very little respect for authority. She has always been a shrewd survivor, both from her youthful troublemaking topside and an unfairly long stint in Stillwater...",
      "ro": "Crescută pe străzile dure din Zaun, Vi este o femeie impulsivă, intimidantă și temperamentală, pentru care autoritatea nu are prea multă valoare. A fost dintotdeauna o supraviețuitoare ageră, atât în adolescență, când făcea probleme în orașul de sus..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "piltover",
    "range": "melee",
    "style": "ad",
    "traits": [
      "inventive",
      "orderly",
      "ambitious",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "dutiful",
      "chaotic",
      "survivor"
    ]
  },
  "Viego": {
    "id": "Viego",
    "name": "Viego",
    "title": {
      "en": "The Ruined King",
      "ro": "regele înfrânt"
    },
    "blurb": {
      "en": "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving specter tortured by an...",
      "ro": "Odinioară conducătorul unui regat demult uitat, Viego a pierit acum mai bine de o mie de ani, când încercarea sa de a-și readuce soția la viață a declanșat catastrofa magică cunoscută drept Cataclismul. Transformat într-un spectru mort-viu cu puteri..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "shadow-isles",
    "range": "melee",
    "style": "ad",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "dutiful"
    ]
  },
  "Viktor": {
    "id": "Viktor",
    "name": "Viktor",
    "title": {
      "en": "the Herald of the Arcane",
      "ro": "profetul ezotericii"
    },
    "blurb": {
      "en": "The fully biomechanical evolution of his former self, Viktor has embraced his Glorious Evolution and become something of a messiah to his followers. He sacrificed his own humanity under the logic that eliminating emotion would thereby eliminate...",
      "ro": "O versiune evoluată și complet biomecanică a ce a fost odată, Viktor a îmbrățișat ideea Evoluției glorioase și a devenit un fel de figură mesianică a discipolilor săi. Și-a sacrificat propria umanitate, considerând că eliminarea emoției va elimina și..."
    },
    "classes": [
      "Mage"
    ],
    "region": "zaun",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "magical",
      "knowledge",
      "independent",
      "primal"
    ]
  },
  "Vladimir": {
    "id": "Vladimir",
    "name": "Vladimir",
    "title": {
      "en": "the Crimson Reaper",
      "ro": "contele de purpură"
    },
    "blurb": {
      "en": "A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire's earliest days. In addition to unnaturally extending his life, his mastery of hemomancy allows him to control the minds and bodies of others as easily...",
      "ro": "Vladimir este un diavol însetat de sânge care a influențat Noxusul încă de la fondarea imperiului. Talentul său la hemomanție nu numai că i-a prelungit viața în mod nefiresc, ci l-a ajutat și să controleze mințile și trupurile celorlalți la fel de bine..."
    },
    "classes": [
      "Mage",
      "Fighter"
    ],
    "region": "noxus",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "ambitious",
      "ruthless",
      "strong",
      "magical",
      "knowledge",
      "warrior",
      "frontline",
      "grit",
      "imperial"
    ]
  },
  "Volibear": {
    "id": "Volibear",
    "name": "Volibear",
    "title": {
      "en": "the Relentless Storm",
      "ro": "furtuna nemiloasă"
    },
    "blurb": {
      "en": "To those who still revere him, the Volibear is the storm made manifest. Destructive, wild, and stubbornly resolute, he existed before mortals walked the Freljord's tundra, and is fiercely protective of the lands that he and his demi-god kin created...",
      "ro": "Pentru cei care încă-l venerează, Volibear este întruchiparea furtunii. Sălbatic, cu o voință de neclintit și o putere formidabilă, Volibear a existat cu mult înainte ca muritorii să ajungă în tundra Freljordului și a jurat să apere tărâmurile pe care..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "freljord",
    "range": "melee",
    "style": "tank",
    "traits": [
      "hardy",
      "primal",
      "tribal",
      "survivor",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "chaotic",
      "celestial"
    ]
  },
  "Warwick": {
    "id": "Warwick",
    "name": "Warwick",
    "title": {
      "en": "the Uncaged Wrath of Zaun",
      "ro": "furia dezlănțuită a Zaunului"
    },
    "blurb": {
      "en": "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. He bursts from the shadows to prey upon...",
      "ro": "Warwick e un monstru care vânează de-a lungul și de-a latul aleilor cenușii din Zaun. În urma unor experimente agonizante, trupul său e acum contopit cu un sistem complex de camere și pompe, mașinărie ce-i umple venele cu o furie alchimică. Atacând din..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "zaun",
    "range": "melee",
    "style": "ad",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "haunted",
      "primal"
    ]
  },
  "Xayah": {
    "id": "Xayah",
    "name": "Xayah",
    "title": {
      "en": "the Rebel",
      "ro": "rebela"
    },
    "blurb": {
      "en": "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to...",
      "ro": "Letală și precisă, Xayah este o revoluționară vastaya ce duce un adevărat război personal în încercarea de a-și salva poporul. Folosindu-și viteza, viclenia și penele ascuțite ca niște tăișuri, îi ucide pe toți cei care-i stau în cale. Xayah luptă..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "precise",
      "focused",
      "independent",
      "protector",
      "lethal",
      "charming"
    ]
  },
  "Xerath": {
    "id": "Xerath",
    "name": "Xerath",
    "title": {
      "en": "the Magus Ascendant",
      "ro": "magul iluminat"
    },
    "blurb": {
      "en": "Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the desert sands, but the rise of Shurima freed him from his ancient prison. Driven...",
      "ro": "Xerath este un mag iluminat din anticul imperiu al Shurimei, o ființă din energie ocultă care se zbate între bucățile distruse ale unui sarcofag magic. Timp de milenii a fost prins sub nisipurile deșertului, dar renașterea Shurimei l-a eliberat din..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "shurima",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "imperial",
      "ancient",
      "proud",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "ambitious"
    ]
  },
  "XinZhao": {
    "id": "XinZhao",
    "name": "Xin Zhao",
    "title": {
      "en": "the Seneschal of Demacia",
      "ro": "seneșalul Demaciei"
    },
    "blurb": {
      "en": "Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave...",
      "ro": "Xin Zhao este un războinic dârz, devotat dinastiei Lightshield. După ce a fost condamnat să lupte ca gladiator în arenele Noxusului, unde a câștigat nenumărate lupte, a fost eliberat de forțele demaciene și le-a jurat credință bravilor lui salvatori..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "demacia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "honorable",
      "dutiful",
      "orderly",
      "protector",
      "warrior",
      "frontline",
      "grit",
      "durable",
      "ambitious",
      "survivor"
    ]
  },
  "Yasuo": {
    "id": "Yasuo",
    "name": "Yasuo",
    "title": {
      "en": "the Unforgiven",
      "ro": "spadasinul rătăcitor"
    },
    "blurb": {
      "en": "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self...",
      "ro": "Yasuo este un ionian foarte hotărât și un spadasin agil, care controlează puterea vântului pentru a-și ucide adversarii. Pe când era un tânăr mândru, a fost acuzat pe nedrept de uciderea maestrului său. Nu a putut să-și dovedească nevinovăția și a fost..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "ruthless"
    ]
  },
  "Yone": {
    "id": "Yone",
    "name": "Yone",
    "title": {
      "en": "the Unforgotten",
      "ro": "spadasinul nepieritor"
    },
    "blurb": {
      "en": "In life, he was Yone—half-brother of Yasuo, and renowned student of his village's sword school. But upon his death at the hands of his brother, he found himself hunted by a malevolent entity of the spirit realm, and was forced to slay it with its own...",
      "ro": "Pe timpul vieții era cunoscut drept Yone, fratele lui Yasuo și discipol renumit al școlii de spadasini din satul său natal. După ce a murit ucis de mâna propriului său frate, o entitate malefică de pe tărâmul spiritelor a început să îl vâneze. În cele..."
    },
    "classes": [
      "Fighter",
      "Assassin"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "warrior",
      "frontline",
      "grit",
      "lethal",
      "independent",
      "opportunistic",
      "haunted",
      "primal"
    ]
  },
  "Yorick": {
    "id": "Yorick",
    "name": "Yorick",
    "title": {
      "en": "Shepherd of Souls",
      "ro": "monahul umbrelor"
    },
    "blurb": {
      "en": "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking wraiths that he gathers to him. Yorick's monstrous...",
      "ro": "Yorick este ultimul membru rămas dintr-un ordin religios demult apus – un călugăr binecuvântat, dar și blestemat cu darul de a controla morții. Neputând scăpa de pe Insulele Umbrelor, se folosește de stârvurile în descompunere și de fantomele aflate în..."
    },
    "classes": [
      "Fighter",
      "Tank"
    ],
    "region": "shadow-isles",
    "range": "melee",
    "style": "ad",
    "traits": [
      "tragic",
      "haunted",
      "dark",
      "warrior",
      "frontline",
      "grit",
      "protector",
      "durable",
      "dutiful"
    ]
  },
  "Yunara": {
    "id": "Yunara",
    "name": "Yunara",
    "title": {
      "en": "the Unbroken Faith",
      "ro": "credința nestrămutată"
    },
    "blurb": {
      "en": "Unwavering in her devotion to Ionia, Yunara has spent centuries cloistered away in the spirit realm honing her skills with the Aion Er'na, a legendary Kinkou relic. Despite all she has sacrificed, Yunara's vow to rid the land of disharmony and strife...",
      "ro": "Neclintită în devotamentul ei față de Ionia, Yunara a petrecut secole închisă în tărâmul spiritelor, desăvârșindu-și măiestria cu Aion Er'na, o relicvă legendară a Ordinului Kinkou. În ciuda tuturor sacrificiilor făcute, jurământul ei de a alunga..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "ionia",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "precise",
      "focused",
      "ruthless",
      "ancient",
      "primal"
    ]
  },
  "Yuumi": {
    "id": "Yuumi",
    "name": "Yuumi",
    "title": {
      "en": "the Magical Cat",
      "ro": "pisica magică"
    },
    "blurb": {
      "en": "A magical cat from Bandle City, Yuumi was once the familiar of a yordle enchantress, Norra. When her master mysteriously disappeared, Yuumi became the Keeper of Norra's sentient Book of Thresholds, traveling through portals in its pages to search for...",
      "ro": "Yuumi este o pisică magică din Orașul Bandle, care a fost odată companionul Norrei, o vrăjitoare yordle. În momentul în care stăpâna ei a dispărut în circumstanțe misterioase, Yuumi a devenit Străjerul Cărții Granițelor, un tom înzestrat cu conștiință..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "bandle-city",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "playful",
      "curious",
      "chaotic",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "free"
    ]
  },
  "Zaahen": {
    "id": "Zaahen",
    "name": "Zaahen",
    "title": {
      "en": "The Unsundered",
      "ro": "cel nesfâșiat"
    },
    "blurb": {
      "en": "A fallen god wielding both divine and profane power, Zaahen hunts his fellow Darkin while defying the corruption that threatens to consume him. Once willingly sealed within his glaive to stave off madness, he now walks free, noble in heart and vicious...",
      "ro": "Un zeu decăzut, care mânuiește atât putere divină, cât și profană, Zaahen vânează alți darkini, în timp ce sfidează coruperea ce amenință să consume lumea. Cândva, s-a închis de bunăvoie în halebarda sa pentru a-și preveni nebunia. Acum, cutreieră liber..."
    },
    "classes": [
      "Fighter"
    ],
    "region": "unaffiliated",
    "range": "melee",
    "style": "ad",
    "traits": [
      "independent",
      "warrior",
      "frontline",
      "grit",
      "honorable",
      "chaotic",
      "celestial",
      "hungry",
      "ancient",
      "free",
      "primal"
    ]
  },
  "Zac": {
    "id": "Zac",
    "name": "Zac",
    "title": {
      "en": "the Secret Weapon",
      "ro": "arma secretă"
    },
    "blurb": {
      "en": "Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun's Sump. Despite such humble origins, Zac has grown from primordial ooze into a thinking being who dwells in the city's pipes, occasionally...",
      "ro": "Zac a fost creat când niște reziduuri toxice s-au deversat dintr-un bazin chimtech și s-au acumulat într-o peșteră izolată aflată în adâncurile Haznalei din Zaun. În ciuda originilor lui umile de mâzgă primitivă, Zac s-a dezvoltat și a devenit o ființă..."
    },
    "classes": [
      "Tank",
      "Fighter"
    ],
    "region": "zaun",
    "range": "melee",
    "style": "tank",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "protector",
      "frontline",
      "durable",
      "warrior",
      "grit",
      "dutiful",
      "independent",
      "free"
    ]
  },
  "Zed": {
    "id": "Zed",
    "name": "Zed",
    "title": {
      "en": "the Master of Shadows",
      "ro": "stăpânul umbrelor"
    },
    "blurb": {
      "en": "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock...",
      "ro": "Necruțător și nemilos, Zed e conducătorul Ordinului Umbrelor, o organizație pe care a creat-o cu intenția de a transforma tradițiile magice și marțiale ale Ioniei în forță militară, pentru a alunga invadatorii noxieni. În timpul războiului, disperarea..."
    },
    "classes": [
      "Assassin"
    ],
    "region": "ionia",
    "range": "melee",
    "style": "ad",
    "traits": [
      "spiritual",
      "balanced",
      "disciplined",
      "lethal",
      "independent",
      "opportunistic",
      "ruthless",
      "haunted"
    ]
  },
  "Zeri": {
    "id": "Zeri",
    "name": "Zeri",
    "title": {
      "en": "The Spark of Zaun",
      "ro": "scânteia din Zaun"
    },
    "blurb": {
      "en": "A headstrong, spirited young woman from Zaun's working-class, Zeri channels her electric magic to charge herself and her custom-crafted gun. Her volatile power mirrors her emotions, its sparks reflecting her lightning-fast approach to life. Deeply...",
      "ro": "O tânără încăpățânată și plină de energice din clasa muncitoare din Zaun, Zeri își folosește puterile electrice pentru a-și încărca propriile forțe și a-și folosi arma unică. Puterea explozivă îi oglindește emoțiile, iar scânteile reflectă modul..."
    },
    "classes": [
      "Marksman"
    ],
    "region": "zaun",
    "range": "ranged",
    "style": "ad",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "precise",
      "focused",
      "dutiful",
      "spiritual"
    ]
  },
  "Ziggs": {
    "id": "Ziggs",
    "name": "Ziggs",
    "title": {
      "en": "the Hexplosives Expert",
      "ro": "expertul hexplozibililor"
    },
    "blurb": {
      "en": "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town...",
      "ro": "Mare amator de bombe și senzații tari, yordle-ul Ziggs este o adevărată forță explozivă a naturii. Pe când era ucenic al unui inventator din Piltover, a simțit că o astfel de viață previzibilă nu este pentru el și s-a împrietenit cu Jinx, o teroristă cu..."
    },
    "classes": [
      "Mage"
    ],
    "region": "zaun",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "inventive",
      "chaotic",
      "survivor",
      "magical",
      "knowledge",
      "independent",
      "charming",
      "playful",
      "nature"
    ]
  },
  "Zilean": {
    "id": "Zilean",
    "name": "Zilean",
    "title": {
      "en": "the Chronokeeper",
      "ro": "paznicul timpului"
    },
    "blurb": {
      "en": "Once a powerful Icathian mage, Zilean became obsessed with the passage of time after witnessing his homeland's destruction by the Void. Unable to spare even a minute to grieve the catastrophic loss, he called upon ancient temporal magic to divine all...",
      "ro": "Zilean a fost odinioară un puternic mag icathian, care a devenit obsedat de trecerea timpului după ce patria sa a fost distrusă de puterea Vidului. Fără să piardă vreun minut pentru a deplânge tragedia, acesta a chemat în ajutor vechi forțe magice..."
    },
    "classes": [
      "Support",
      "Mage"
    ],
    "region": "unaffiliated",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "independent",
      "caretaker",
      "team",
      "magical",
      "knowledge",
      "celestial",
      "hungry",
      "ancient"
    ]
  },
  "Zoe": {
    "id": "Zoe",
    "name": "Zoe",
    "title": {
      "en": "the Aspect of Twilight",
      "ro": "Aspectul Amurgului"
    },
    "blurb": {
      "en": "As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without...",
      "ro": "Zoe este întruchiparea poznelor, imaginației și schimbării. Având rolul de mesageră cosmică a Muntelui Targon, vestește evenimente majore care remodelează lumi întregi. Simpla ei prezență tulbură firea lucrurilor, provocând uneori catastrofe fără ca ea..."
    },
    "classes": [
      "Mage"
    ],
    "region": "mount-targon",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "celestial",
      "destined",
      "spiritual",
      "magical",
      "knowledge",
      "playful"
    ]
  },
  "Zyra": {
    "id": "Zyra",
    "name": "Zyra",
    "title": {
      "en": "Rise of the Thorns",
      "ro": "invazia spinilor"
    },
    "blurb": {
      "en": "Born in an ancient, sorcerous catastrophe, Zyra is the wrath of nature given form—an alluring hybrid of plant and human, kindling new life with every step. She views the many mortals of Valoran as little more than prey for her seeded progeny, and thinks...",
      "ro": "Zyra, născută în urma unei catastrofe magice demult uitate, este mânia întruchipată a naturii – o combinație atrăgătoare de plantă și femeie, care seamănă viață la fiecare pas. Pentru ea, muritorii din Valoran nu reprezintă decât pradă pentru..."
    },
    "classes": [
      "Mage",
      "Support"
    ],
    "region": "ixtal",
    "range": "ranged",
    "style": "ap",
    "traits": [
      "nature",
      "isolated",
      "magical",
      "knowledge",
      "caretaker",
      "team",
      "ambitious",
      "charming",
      "ancient"
    ]
  }
};
