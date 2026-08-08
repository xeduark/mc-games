
// ============================================================
// TIPOS
// ============================================================

export type PlatformType = "PS4" | "PS5" | "Xbox S/X";

export interface PlatformPrices {
  name: PlatformType;
  priceSecundaria: number;
  pricePrimaria: number;
}

export interface Game {
  id: string;
  title: string;
  platforms: PlatformPrices[];
  rating: number;
  synopsis: string;
  image: string;
  genre: string;
  releaseYear: number;
  featured?: boolean;
}

// ============================================================
// WHATSAPP
// ============================================================

// Número de WhatsApp centralizado (sin el +)
export const WHATSAPP_NUMBER = "3003766780";

// Mensajes de WhatsApp centralizados
export const WHATSAPP_MESSAGES = {
  buyGame:
    "¡Hola! 🎮 Quiero comprar este juego:\n\n🕹️ *{title}*\n📌 Formatos disponibles: {platforms}\n\n¿Cuál tengo disponible y cómo procedo con el pago?",

  general:
    "¡Hola! 🎮 Quiero información sobre los juegos disponibles.",

  contact:
    "¡Hola MC Games! 🎮 Necesito información.",
};

// ============================================================
// JUEGOS
// ============================================================

export const games: Game[] = [
  {
    id: "call-of-duty-black-ops-2",
    title: "Call of Duty: Black Ops II",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 80000,
        pricePrimaria: 70000,
      },
      {
        name: "PS5",
        priceSecundaria: 85000,
        pricePrimaria: 75000,
      },
    ],
    rating: 5,
    synopsis:
      "Un clásico de disparos en primera persona de Treyarch. Muévete entre dos líneas de tiempo distintas: la Guerra Fría de los años 80 y una devastadora guerra tecnológica del futuro en el año 2025.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901760/Call_Of_Duty__Black_Ops_2_2012_pfbhrm.jpg",
    genre: "Shooter / FPS",
    releaseYear: 2012,
    featured: true,
  },

  {
    id: "fc-26",
    title: "EA SPORTS FC 26",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 80000,
        pricePrimaria: 70000,
      },
      {
        name: "PS5",
        priceSecundaria: 85000,
        pricePrimaria: 75000,
      },
    ],
    rating: 5,
    synopsis:
      "La última y más avanzada entrega de simulación de fútbol del mundo. Disfruta de mecánicas actualizadas, ligas oficiales, Ultimate Team optimizado y el realismo competitivo definitivo.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901767/EA_SPORTS_FC26_-_Legacy_Edition___Concept_Cover_dvuazz.jpg",
    genre: "Deportes / Fútbol",
    releaseYear: 2025,
    featured: true,
  },

  {
    id: "demon-slayer-2",
    title: "Demon Slayer 2",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 95000,
        pricePrimaria: 78000,
      },
      {
        name: "PS5",
        priceSecundaria: 100000,
        pricePrimaria: 83000,
      },
    ],
    rating: 4,
    synopsis:
      "Desenvaina tu katana en intensas batallas de arena basadas en las sagas más recientes del anime. Ejecuta las respiraciones elementales y derrota a las lunas demoníacas más feroces.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901765/Demon_Slayer__The_Hinokami_Chronicles_2_mpsoya.jpg",
    genre: "Acción / Lucha",
    releaseYear: 2024,
    featured: false,
  },

  {
    id: "call-of-duty-black-ops-7",
    title: "Call of Duty: Black Ops 7",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 49000,
        pricePrimaria: 61000,
      },
      {
        name: "PS5",
        priceSecundaria: 49000,
        pricePrimaria: 61000,
      },
    ],
    rating: 5,
    synopsis:
      "La siguiente evolución en la guerra de operaciones encubiertas de Black Ops. Descubre una narrativa de conspiración de espías del más alto nivel político combinada con un caótico modo multijugador.",
    image: "https://unsplash.com",
    genre: "Shooter / FPS",
    releaseYear: 2025,
    featured: true,
  },

  {
    id: "nba-2k26",
    title: "NBA 2K26",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 5,
    synopsis:
      "Domina las canchas de la NBA con las plantillas de estrellas actualizadas. Vive un modo Mi Carrera más profundo, compite en El Barrio y maneja el control físico del balón con un realismo renovado.",
    image: "https://unsplash.com",
    genre: "Deportes / Baloncesto",
    releaseYear: 2025,
    featured: false,
  },

  {
    id: "naruto-shippuden-ultimate-ninja-storm-4",
    title: "Naruto Shippuden: Ultimate Ninja Storm 4",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 5,
    synopsis:
      "Revive la Cuarta Gran Guerra Ninja en batallas cinemáticas y destructivas a escala masiva. Elige entre un enorme catálogo de personajes y domina los Jutsus definitivos más devastadores.",
    image: "https://unsplash.com",
    genre: "Acción / Lucha",
    releaseYear: 2016,
    featured: false,
  },

  {
    id: "nba-2k25",
    title: "NBA 2K25",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 46000,
        pricePrimaria: 43000,
      },
      {
        name: "PS5",
        priceSecundaria: 46000,
        pricePrimaria: 43000,
      },
    ],
    rating: 4,
    synopsis:
      "Construye tu propio legado en el baloncesto profesional. Con compresión de físicas dinámicas que imitan los movimientos directos de las superestrellas reales del baloncesto norteamericano.",
    image: "https://unsplash.com",
    genre: "Deportes / Baloncesto",
    releaseYear: 2024,
    featured: false,
  },

  {
    id: "call-of-duty-black-ops-6",
    title: "Call of Duty: Black Ops 6",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 37000,
        pricePrimaria: 49000,
      },
      {
        name: "PS5",
        priceSecundaria: 37000,
        pricePrimaria: 49000,
      },
    ],
    rating: 5,
    synopsis:
      "Ambientado a principios de los años 90 durante el fin de la Guerra Fría. Introduce un innovador sistema de movimiento omnidireccional que redefine los tiroteos tácticos de la franquicia.",
    image: "https://unsplash.com",
    genre: "Shooter / FPS",
    releaseYear: 2024,
    featured: true,
  },

  {
    id: "ufc-5",
    title: "UFC 5",
    platforms: [
      {
        name: "PS5",
        priceSecundaria: 37000,
        pricePrimaria: 43000,
      },
    ],
    rating: 4,
    synopsis:
      "El simulador de artes marciales mixtas definitivo impulsado por el motor Frostbite. Experimenta daños hiperrealistas en tiempo real que afectan la movilidad y resistencia de tus luchadores en el octágono.",
    image: "https://unsplash.com",
    genre: "Deportes / AMM",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "dragon-ball-sparking-zero",
    title: "Dragon Ball: Sparking! ZERO",
    platforms: [
      {
        name: "PS5",
        priceSecundaria: 55000,
        pricePrimaria: 73000,
      },
    ],
    rating: 5,
    synopsis:
      "El regreso triunfal de la aclamada jugabilidad de Budokai Tenkaichi. Desata combates de velocidad vertiginosa con gráficos en alta definición de entornos completamente destructibles y dinámicos.",
    image: "https://unsplash.com",
    genre: "Acción / Lucha",
    releaseYear: 2024,
    featured: true,
  },

  {
    id: "black-myth-wukong",
    title: "Black Myth: Wukong",
    platforms: [
      {
        name: "PS5",
        priceSecundaria: 61000,
        pricePrimaria: 90000,
      },
    ],
    rating: 5,
    synopsis:
      "Un impresionante RPG de acción arraigado en la mitología china. Controla al Predestinado en un viaje colmado de imponentes monstruos y jefes inspirados en la novela clásica Viaje al Oeste.",
    image: "https://unsplash.com",
    genre: "RPG / Acción",
    releaseYear: 2024,
    featured: true,
  },

  {
    id: "ride-4",
    title: "Ride 4",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 4,
    synopsis:
      "Despierta tu espíritu competitivo sobre dos ruedas en un simulador de motociclismo de alta precisión técnica. Compite en pistas internacionales detalladas y gestiona el desgaste mecánico.",
    image: "https://unsplash.com",
    genre: "Carreras / Motos",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
    ],
    rating: 5,
    synopsis:
      "Un RPG de mundo abierto ambientado en la megalópolis futurista de Night City. Conviértete en V, un mercenario ciber-mejorado atrapado en una lucha letal de supervivencia corporativa.",
    image: "https://unsplash.com",
    genre: "RPG / Mundo Abierto",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "fc-25",
    title: "EA SPORTS FC 25",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 34000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 34000,
      },
    ],
    rating: 4,
    synopsis:
      "Disfruta del fútbol realista con innovaciones tácticas profundas como el sistema FC IQ. Lidera a tus jugadores favoritos de clubes mundiales en modos competitivos en línea y mánager.",
    image: "https://unsplash.com",
    genre: "Deportes / Fútbol",
    releaseYear: 2024,
    featured: false,
  },

  {
    id: "need-for-speed-heat",
    title: "Need for Speed Heat",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 4,
    synopsis:
      "Quema neumáticos de día compitiendo en carreras legales y arróscatelo todo de noche en persecuciones callejeras ilegales donde la corrupta fuerza policial patrulla Palm City.",
    image: "https://unsplash.com",
    genre: "Carreras / Tuning",
    releaseYear: 2019,
    featured: false,
  },

  {
    id: "mortal-kombat-1",
    title: "Mortal Kombat 1",
    platforms: [
      {
        name: "PS5",
        priceSecundaria: 46000,
        pricePrimaria: 43000,
      },
    ],
    rating: 5,
    synopsis:
      "Un renacido universo de Mortal Kombat creado por el Dios del Fuego Liu Kang. Descubre una historia totalmente nueva con brutales fatalities, mecánicas y los novedosos luchadores Kameo de apoyo.",
    image: "https://unsplash.com",
    genre: "Acción / Lucha",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "call-of-duty-vanguard",
    title: "Call of Duty: Vanguard",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 37000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 37000,
      },
    ],
    rating: 4,
    synopsis:
      "Sumérgete en los combates más crudos e influyentes de la Segunda Guerra Mundial a través de múltiples frentes bélicos globales. Desarrolla los orígenes de las Fuerzas Especiales.",
    image: "unsplash.com",
    genre: "Shooter / FPS",
    releaseYear: 2021,
    featured: false,
  },

  {
    id: "hitman",
    title: "Hitman",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 4,
    synopsis:
      "Conviértete en el letal Agente 47 en un intrincado simulador de asesinatos sigilosos. Viaja por locaciones de lujo exóticas eliminando objetivos con absoluta libertad operativa.",
    image: "unsplash.com",
    genre: "Sigilo / Acción",
    releaseYear: 2016,
    featured: false,
  },

  {
    id: "sekiro-shadows-die-twice",
    title: "Sekiro: Shadows Die Twice",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 37000,
        pricePrimaria: 49000,
      },
      {
        name: "PS5",
        priceSecundaria: 37000,
        pricePrimaria: 49000,
      },
    ],
    rating: 5,
    synopsis:
      "Una implacable obra maestra de FromSoftware ambientada en un místico Japón feudal. Protege a tu joven señor de los clanes samurái utilizando prótesis shinobi de combate táctico.",
    image: "unsplash.com",
    genre: "Acción / Soulslike",
    releaseYear: 2019,
    featured: true,
  },

  {
    id: "ghost-recon-wildlands",
    title: "Ghost Recon: Wildlands",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 4,
    synopsis:
      "Lidera un comando militar de élite encubierto en un inmenso y peligroso mundo abierto táctico. Desarticula un poderoso cartel de narcotráfico operando con absoluta libertad de asalto.",
    image: "unsplash.com",
    genre: "Tactical / Shooter",
    releaseYear: 2017,
    featured: false,
  },

  {
    id: "gran-turismo-7",
    title: "Gran Turismo 7",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
    ],
    rating: 5,
    synopsis:
      "La celebración de los 25 años del simulador de conducción real. Compra, tuna, compite y colecciona cientos de superdeportivos legendarios recreados de forma fotorrealista.",
    image: "unsplash.com",
    genre: "Simulador / Carreras",
    releaseYear: 2022,
    featured: true,
  },

  {
    id: "the-crew-2",
    title: "The Crew 2",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 4,
    synopsis:
      "Conquista la escena de los deportes de motor de costa a costa en los Estados Unidos. Alterna instantáneamente entre autos deportivos, lanchas y aviones de acrobacias dinámicas.",
    image: "unsplash.com",
    genre: "Carreras / Mundo Abierto",
    releaseYear: 2018,
    featured: false,
  },

  {
    id: "call-of-duty-cold-war",
    title: "Call of Duty: Black Ops Cold War",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
    ],
    rating: 4,
    synopsis:
      "Sigue los hilos de una volátil conspiración geopolítica de principios de los años 80. Lucha junto a figuras históricas en intensas misiones mundiales y un frenético modo Zombis.",
    image: "unsplash.com",
    genre: "Shooter / FPS",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "call-of-duty-black-ops-3-zombies-chronicles-edition",
    title: "Call of Duty: Black Ops III (Zombies Chronicles Edition)",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
    ],
    rating: 5,
    synopsis:
      "La experiencia cooperativa definitiva de no-muertos. Incluye el juego base de disparos futuristas de Treyarch junto con 8 mapas clásicos completamente remasterizados en alta definición.",
    image: "unsplash.com",
    genre: "Shooter / Zombis",
    releaseYear: 2015,
    featured: false,
  },

  {
    id: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 5,
    synopsis:
      "Vive lo no escrito en un RPG de acción en mundo abierto ambientado en el universo de Harry Potter del siglo XIX. Crea tu mago, aprende hechizos y decide el destino del mundo mágico.",
    image: "unsplash.com",
    genre: "RPG / Fantasía",
    releaseYear: 2023,
    featured: true,
  },

  {
    id: "elden-ring",
    title: "Elden Ring",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 37000,
        pricePrimaria: 49000,
      },
      {
        name: "PS5",
        priceSecundaria: 37000,
        pricePrimaria: 49000,
      },
    ],
    rating: 5,
    synopsis:
      "Álzate, Sinluz, y déjate guiar por la gracia para blandir el poder del Círculo de Elden en las Tierras Intermedias. Una colosal obra de fantasía oscura creada por Hidetaka Miyazaki y George R.R. Martin.",
    image: "unsplash.com",
    genre: "RPG / Soulslike",
    releaseYear: 2022,
    featured: true,
  },

  {
    id: "fallout-4",
    title: "Fallout 4",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 4,
    synopsis:
      "Como único superviviente del Refugio 111, adéntrate en un mundo destruido por la guerra nuclear de la Commonwealth. Reconstruye el yermo, fabrica armas y forja alianzas clave.",
    image: "unsplash.com",
    genre: "RPG / Mundo Abierto",
    releaseYear: 2015,
    featured: false,
  },

  {
    id: "gta-the-trilogy",
    title: "GTA: The Trilogy - The Definitive Edition",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
    ],
    rating: 4,
    synopsis:
      "Tres ciudades icónicas, tres historias legendarias. Juega a los clásicos que definieron el género: GTA III, GTA Vice City y GTA San Andreas actualizados con mejoras de iluminación y controles.",
    image: "unsplash.com",
    genre: "Acción / Mundo Abierto",
    releaseYear: 2021,
    featured: false,
  },

  {
    id: "ghost-of-tsushima",
    title: "Ghost of Tsushima",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
    ],
    rating: 5,
    synopsis:
      "A finales del siglo XIII, el imperio mongol arrasa la isla de Tsushima. El samurái Jin Sakai debe ir más allá del código de honor para librar una guerra no convencional y liberar a su pueblo.",
    image: "unsplash.com",
    genre: "Acción / Mundo Abierto",
    releaseYear: 2020,
    featured: true,
  },

  {
    id: "minecraft",
    title: "Minecraft",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 46000,
        pricePrimaria: 43000,
      },
      {
        name: "PS5",
        priceSecundaria: 46000,
        pricePrimaria: 43000,
      },
    ],
    rating: 5,
    synopsis:
      "Explora mundos infinitos generados aleatoriamente y construye cualquier cosa que imagines. Juega en modo creativo con recursos ilimitados o sobrevive a las criaturas nocturnas peligrosas.",
    image: "unsplash.com",
    genre: "Sandbox / Aventura",
    releaseYear: 2011,
    featured: false,
  },

  {
    id: "battlefield-1",
    title: "Battlefield 1",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 5,
    synopsis:
      "Experimenta los albores de la guerra total en una inmersiva recreación de la Primera Guerra Mundial. Lucha en batallas épicas urbanas en ciudades francesas o en los desiertos de Arabia.",
    image: "unsplash.com",
    genre: "Shooter / FPS",
    releaseYear: 2016,
    featured: false,
  },

  {
    id: "gta-5",
    title: "Grand Theft Auto V",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 37000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 37000,
      },
    ],
    rating: 5,
    synopsis:
      "Planifica y ejecuta audaces atracos por todo el estado de San Andreas en la piel de un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador.",
    image: "unsplash.com",
    genre: "Acción / Mundo Abierto",
    releaseYear: 2013,
    featured: true,
  },

  {
    id: "fc-24",
    title: "EA SPORTS FC 24",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 34000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 34000,
      },
    ],
    rating: 4,
    synopsis:
      "La era inaugural de simulación futbolística con la innovadora tecnología HyperMotionV que captura el ritmo real de los partidos oficiales de las ligas más importantes.",
    image: "unsplash.com",
    genre: "Deportes / Fútbol",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "call-of-duty-black-ops-4",
    title: "Call of Duty: Black Ops 4",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 43000,
      },
    ],
    rating: 4,
    synopsis:
      "Una sólida experiencia multijugador táctica en primera persona que incluye tres mapas completos de Zombis desde el día uno de lanzamiento y el modo Battle Royale Blackout.",
    image: "unsplash.com",
    genre: "Shooter / FPS",
    releaseYear: 2018,
    featured: false,
  },

  {
    id: "spiderman-2",
    title: "Marvel's Spider-Man 2",
    platforms: [
      {
        name: "PS5",
        priceSecundaria: 49000,
        pricePrimaria: 68000,
      },
    ],
    rating: 5,
    synopsis:
      "Balancearse y saltar usando las alas de telaraña por toda Nueva York controlando a Peter Parker y Miles Morales. Enfréntate al temible Venom en una historia cinemática insuperable.",
    image: "unsplash.com",
    genre: "Acción / Aventura",
    releaseYear: 2023,
    featured: true,
  },

  {
    id: "dragon-ball-kakarot",
    title: "Dragon Ball Z: Kakarot",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 40000,
        pricePrimaria: 37000,
      },
      {
        name: "PS5",
        priceSecundaria: 40000,
        pricePrimaria: 37000,
      },
    ],
    rating: 5,
    synopsis:
      "Ve más allá de los combates espectaculares. Entrena, come, pesca y vuela con Goku, Gohan y Vegeta mientras exploras los entornos recreados de las sagas de Dragon Ball Z.",
    image: "unsplash.com",
    genre: "RPG / Acción",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "f1-2023",
    title: "F1 23",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 34000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 34000,
      },
    ],
    rating: 4,
    synopsis:
      "Sé el último en frenar en el videojuego oficial del Campeonato Mundial de Fórmula 1. Vive el drama automovilístico de alta velocidad en el modo historia Braking Point 2.",
    image: "unsplash.com",
    genre: "Deportes / Carreras",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "god-of-war-3-remastered",
    title: "God of War III Remastered",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 46000,
      },
    ],
    rating: 5,
    synopsis:
      "Ambientado en el reino de la brutal mitología griega. Toma las Espadas del Caos de Kratos y asciende las faldas del Monte Olimpo guiado por la ira para destrozar a los dioses olímpicos.",
    image: "unsplash.com",
    genre: "Acción / Hack n Slash",
    releaseYear: 2015,
    featured: false,
  },

  {
    id: "nba-2k24",
    title: "NBA 2K24",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 34000,
      },
      {
        name: "PS5",
        priceSecundaria: 34000,
        pricePrimaria: 34000,
      },
    ],
    rating: 4,
    synopsis:
      "Disfruta de la cultura del baloncesto profesional de la NBA. Rinde homenaje al legado de la leyenda Kobe Bryant recreando algunas de sus actuaciones internacionales más dominantes.",
    image: "unsplash.com",
    genre: "Deportes / Baloncesto",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "the-crew-motorfest",
    title: "The Crew Motorfest",
    platforms: [
      {
        name: "PS4",
        priceSecundaria: 34000,
        pricePrimaria: 37000,
      },
    ],
    rating: 4,
    synopsis:
      "Únete a un festival automovilístico perpetuo en la paradisíaca isla de O'ahu, Hawái. Conduce vehículos tuning legendarios a través de densas selvas tropicales y calles urbanas cenicientas.",
    image: "unsplash.com",
    genre: "Carreras / Mundo Abierto",
    releaseYear: 2023,
    featured: false,
  },
];

// ============================================================
// FORMATEO DE PRECIOS
// ============================================================

export const formatCOP = (amount: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(amount);
};

// Alias de exportación para compatibilidad
export const formatPrice = formatCOP;

// ============================================================
// FUNCIONES AUXILIARES
// ============================================================

export const getMinPrimaryPrice = (platforms: Game["platforms"]) => {
  return Math.min(...platforms.map((p) => p.pricePrimaria));
};

export const getPlatformNames = (platforms: Game["platforms"]) => {
  return platforms.map((p) => p.name).join(" / ");
};

