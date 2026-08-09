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

  general: "¡Hola! 🎮 Quiero información sobre los juegos disponibles.",

  contact: "¡Hola MC Games! 🎮 Necesito información.",
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
        pricePrimaria: 85000,
        priceSecundaria: 75000,
      },
    ],

    rating: 5,

    synopsis:
      "Un clásico de disparos en primera persona de Treyarch. Muévete entre dos líneas de tiempo distintas: la Guerra Fría de los años 80 y una devastadora guerra tecnológica del futuro en el año 2025.",

    image:
      "https://res.cloudinary.com/lhzest5p/image/upload/v1785901760/Call_Of_Duty__Black_Ops_2_2012_pfbhrm.jpg",

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
        pricePrimaria: 80000,
        priceSecundaria: 75000,
      },
      {
        name: "PS5",
        pricePrimaria: 85000,
        priceSecundaria: 75000,
      },
    ],

    rating: 5,

    synopsis:
      "La última y más avanzada entrega de simulación de fútbol del mundo. Disfruta de mecánicas actualizadas, ligas oficiales, Ultimate Team optimizado y el realismo competitivo definitivo.",

    image:
      "https://res.cloudinary.com/lhzest5p/image/upload/v1785901767/EA_SPORTS_FC26_-_Legacy_Edition___Concept_Cover_dvuazz.jpg",

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
        pricePrimaria: 95000,
        priceSecundaria: 78000,
      },
      {
        name: "PS5",
        pricePrimaria: 100000,
        priceSecundaria: 83000,
      },
    ],

    rating: 4,

    synopsis:
      "Desenvaina tu katana en intensas batallas de arena basadas en las sagas más recientes del anime. Ejecuta las respiraciones elementales y derrota a las lunas demoníacas más feroces.",

    image:
      "https://res.cloudinary.com/lhzest5p/image/upload/v1785901765/Demon_Slayer__The_Hinokami_Chronicles_2_mpsoya.jpg",

    genre: "Acción / Anime",
    releaseYear: 2025,
    featured: false,
  },

  {
    id: "nba-2k24",
    title: "NBA 2K24",

    platforms: [
      {
        name: "PS4",
        pricePrimaria: 69000,
        priceSecundaria: 68000,
      },
      {
        name: "PS5",
        pricePrimaria: 69000,
        priceSecundaria: 68000,
      },
    ],

    rating: 4,

    synopsis:
      "Disfruta de la cultura del baloncesto profesional de la NBA. Rinde homenaje al legado de la leyenda Kobe Bryant recreando algunas de sus actuaciones internacionales más dominantes.",

    image:
      "https://res.cloudinary.com/lhzest5p/image/upload/v1785901790/NBA_2K24._xojqe3.jpg",

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
        pricePrimaria: 77000,
        priceSecundaria: 65000,
      },
      {
        name: "PS5",
        pricePrimaria: 77000,
        priceSecundaria: 65000,
      },
    ],

    rating: 4,

    synopsis:
      "Únete a un festival automovilístico perpetuo en la paradisíaca isla de O'ahu, Hawái. Conduce vehículos tuning legendarios a través de densas selvas tropicales y calles urbanas cenicientas.",

    image:
      "https://res.cloudinary.com/lhzest5p/image/upload/v1785901803/THE_CREW_MOTORFEST_ers6kg.jpg",

    genre: "Carreras / Mundo Abierto",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "call-of-duty-black-ops-7",
    title: "Call of Duty: Black Ops 7",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 95000,
        priceSecundaria: 85000,
      },
      {
        name: "PS5",
        pricePrimaria: 100000,
        priceSecundaria: 90000,
      },
    ],
    rating: 4,
    synopsis: "Enfréntate a una nueva amenaza en un mundo marcado por conflictos y conspiraciones, combinando combates intensos, tecnología avanzada y una campaña llena de acción.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901785/Minden_amit_tudnod_kell__Call_of_Duty__Black_Ops_7_ycxw3d.jpg",
    genre: "Acción / Shooter",
    releaseYear: 2025,
    featured: false,
  },

  {
    id: "nba-2k26",
    title: "NBA 2K26",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 80000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 90000,
        priceSecundaria: 80000,
      },
    ],
    rating: 4,
    synopsis: "Disfruta de una experiencia completa de baloncesto con partidos competitivos, modos de carrera y una amplia variedad de opciones para construir tu propio legado en la cancha.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901792/NBA_2K26_DESIGN_ygrook.jpg",
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
        pricePrimaria: 76000,
        priceSecundaria: 72000,
      },
      {
        name: "PS5",
        pricePrimaria: 85000,
        priceSecundaria: 78000,
      },
    ],
    rating: 4,
    synopsis: "Revive los momentos más importantes de Naruto Shippuden en combates espectaculares llenos de ninjutsu, transformaciones y ataques especiales.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901789/NARUTO_SHIPPUDEN_ULT%C3%8DMATE_NINJA_STORM_4._pblyo4.jpg",
    genre: "Acción / Anime",
    releaseYear: 2016,
    featured: false,
  },

  {
    id: "nba-2k25",
    title: "NBA 2K25",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 83000,
        priceSecundaria: 68000,
      },
    ],
    rating: 4,
    synopsis: "Entra al octágono y vive combates de artes marciales mixtas con un sistema de combate realista, luchadores profesionales y diferentes estilos de pelea.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901791/NBA_2K25._xguzwj.jpg",
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
        pricePrimaria: 85000,
        priceSecundaria: 77000,
      },
      {
        name: "PS5",
        pricePrimaria: 89000,
        priceSecundaria: 80000,
      },
    ],
    rating: 4,
    synopsis: "Sumérgete en una campaña de espionaje y acción ambientada en los años noventa, acompañada de intensos enfrentamientos multijugador y el clásico modo Zombies.",
    image: "",
    genre: "Acción / Shooter",
    releaseYear: 2024,
    featured: false,
  },

  {
    id: "ufc-5",
    title: "UFC 5",
    platforms: [
      {
        name: "PS5",
        pricePrimaria: 83000,
        priceSecundaria: 77000,
      },
    ],
    rating: 4,
    synopsis: "Entra al octágono y vive combates de artes marciales mixtas con un sistema de combate realista, luchadores profesionales y diferentes estilos de pelea.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901806/UFC_5_Wallpaper_f2g2zi.jpg",
    genre: "Deportes / Lucha",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "dragon-ball-sparking-zero",
    title: "Dragon Ball: Sparking! ZERO",
    platforms: [
      {
        name: "PS5",
        pricePrimaria: 110000,
        priceSecundaria: 95000,
      },
    ],
    rating: 5,
    synopsis: "Disfruta de combates explosivos del universo Dragon Ball con una enorme selección de personajes, transformaciones y enfrentamientos a gran escala.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901796/Portada_Oficial_Drag%C3%B3n_Ball_Sparking_Zero_muhpbd.jpg",
    genre: "Acción / Anime",
    releaseYear: 2024,
    featured: false,
  },

  {
    id: "black-myth-wukong",
    title: "Black Myth: Wukong",
    platforms: [
      {
        name: "PS5",
        pricePrimaria: 120000,
        priceSecundaria: 100000,
      },
    ],
    rating: 5,
    synopsis: "Conviértete en el Destinado y emprende un viaje por una China fantástica inspirada en la leyenda del Rey Mono, enfrentándote a poderosos enemigos y criaturas mitológicas.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901807/WUKONG_o3exxa.jpg",
    genre: "Acción / RPG",
    releaseYear: 2024,
    featured: false,
  },

  {
    id: "ride-4",
    title: "Ride 4",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 68000,
      },
      {
        name: "PS5",
        pricePrimaria: 80000,
        priceSecundaria: 72000,
      },
    ],
    rating: 4,
    synopsis: "Experimenta la emoción de las carreras de motocicletas con circuitos reales, una gran variedad de motos y una conducción centrada en el realismo.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901799/RIDE4_i1i2zt.jpg",
    genre: "Carreras / Motociclismo",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "cyberpunk",
    title: "Cyberpunk",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 73000,
        priceSecundaria: 68000,
      },
      {
        name: "PS5",
        pricePrimaria: 78000,
        priceSecundaria: 73000,
      },
    ],
    rating: 5,
    synopsis: "Explora Night City como V, un mercenario que busca hacerse un nombre en una metrópolis futurista dominada por corporaciones, tecnología y conflictos.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901764/Cyberpunk_2077_Fan_Poster_Glitch_Grit_and_Neon_Shadows_uidoxp.jpg",
    genre: "RPG / Acción",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "fc-25",
    title: "FC 25",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 68000,
        priceSecundaria: 64000,
      },
      {
        name: "PS5",
        pricePrimaria: 68000,
        priceSecundaria: 64000,
      },
    ],
    rating: 4,
    synopsis: "Disfruta del fútbol con una amplia variedad de equipos y competiciones, junto con diferentes modos de juego para competir solo o contra otros jugadores.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901772/FC25_n5zbaw.jpg",
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
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 82000,
        priceSecundaria: 74000,
      },
    ],
    rating: 4,
    synopsis: "Corre por las calles de Palm City durante el día y arriesga todo en carreras clandestinas durante la noche mientras intentas escapar de la policía.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901756/Acheter_Need_for_Speed_Heat_-_PC_EA_App_qe6den.jpg",
    genre: "Carreras",
    releaseYear: 2019,
    featured: false,
  },

  {
    id: "mortal-kombat-1",
    title: "Mortal Kombat 1",
    platforms: [
      {
        name: "PS5",
        pricePrimaria: 78000,
        priceSecundaria: 73000,
      },
    ],
    rating: 4,
    synopsis: "Adéntrate en una nueva era del universo Mortal Kombat, donde los luchadores conocidos regresan con nuevas historias, habilidades y brutales combates.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901787/Mortal_kombat_1_wcr35n.jpg",
    genre: "Lucha / Acción",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "call-of-duty-vanguard",
    title: "Call of Duty: Vanguard",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 77000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 82000,
        priceSecundaria: 74000,
      },
    ],
    rating: 4,
    synopsis: "Lucha en diferentes frentes de la Segunda Guerra Mundial siguiendo a un grupo de soldados mientras se enfrentan a una amenaza que busca cambiar el curso del conflicto.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901759/Call_of_duty_Vanguard_o8j7ci.jpg",
    genre: "Acción / Shooter",
    releaseYear: 2021,
    featured: false,
  },

  {
    id: "hitman",
    title: "Hitman",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 68000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 68000,
      },
    ],
    rating: 4,
    synopsis: "Ponte en la piel del Agente 47 y utiliza sigilo, estrategia, disfraces y creatividad para completar elaboradas misiones de asesinato alrededor del mundo.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901783/HITMAN_Wallpaper_Mobile_qzyxdh.jpg",
    genre: "Acción / Sigilo",
    releaseYear: 2016,
    featured: false,
  },

  {
    id: "sekiro-shadows-die-twice",
    title: "Sekiro: Shadows Die Twice",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 79000,
        priceSecundaria: 74000,
      },
      {
        name: "PS5",
        pricePrimaria: 83000,
        priceSecundaria: 77000,
      },
    ],
    rating: 5,
    synopsis: "Conviértete en un shinobi conocido como el Lobo y emprende una misión de venganza en un Japón inspirado en el período Sengoku, enfrentándote a enemigos letales.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901801/Sekiro_Shadows_Die_Twice_v7038y.jpg",
    genre: "Acción / Soulslike",
    releaseYear: 2019,
    featured: false,
  },

  {
    id: "ghost-recon-wildlands",
    title: "Ghost Recon Wildlands",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 80000,
        priceSecundaria: 74000,
      },
      {
        name: "PS5",
        pricePrimaria: 83000,
        priceSecundaria: 77000,
      },
    ],
    rating: 4,
    synopsis: "Forma parte de un equipo de fuerzas especiales enviado a Bolivia para desmantelar un poderoso cartel de drogas mediante operaciones tácticas y combate estratégico.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901775/GHOST_RECON_WILDLANDS._mflm5b.jpg",
    genre: "Acción / Shooter",
    releaseYear: 2017,
    featured: false,
  },

  {
    id: "gran-turismo-7",
    title: "Gran Turismo 7",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 83000,
        priceSecundaria: 75000,
      },
      {
        name: "PS5",
        pricePrimaria: 83000,
        priceSecundaria: 75000,
      },
    ],
    rating: 5,
    synopsis: "Vive una experiencia de conducción realista con una enorme colección de vehículos, circuitos legendarios y diferentes modos para competir y perfeccionar tus habilidades.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901780/Gran_Turismo_7_bq6ijb.jpg",
    genre: "Carreras / Simulación",
    releaseYear: 2022,
    featured: false,
  },

  {
    id: "the-crew-2",
    title: "The Crew 2",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 68000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 68000,
      },
    ],
    rating: 4,
    synopsis: "Recorre Estados Unidos en un enorme mundo abierto y compite en diferentes disciplinas de motor, desde coches y motos hasta barcos y aviones.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901802/The_Crew_2_cryjf2.jpg",
    genre: "Carreras / Mundo Abierto",
    releaseYear: 2018,
    featured: false,
  },

  {
    id: "call-of-duty-cold-war",
    title: "Call of Duty: Cold War",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 75000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 75000,
        priceSecundaria: 70000,
      },
    ],
    rating: 4,
    synopsis: "Adéntrate en una historia de espionaje ambientada durante la Guerra Fría, llena de operaciones encubiertas, conspiraciones y combates internacionales.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901758/Call_of_duty_Cold_War_i8kfae.jpg",
    genre: "Acción / Shooter",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "call-of-duty-black-ops-3-zombies-chronicles-edition",
    title: "Call of Duty: Black Ops 3 Zombies Chronicles Edition",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 70000,
      },
    ],
    rating: 4,
    synopsis: "Revive algunos de los mapas clásicos del modo Zombies de Call of Duty mientras luchas contra hordas de muertos vivientes y descubres los secretos de su historia.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901757/Call_of_Duty_Black_Ops_III_Wallpapers_83_pictures_-_WallpaperSet_dbuwjx.jpg",
    genre: "Acción / Shooter",
    releaseYear: 2015,
    featured: false,
  },

  {
    id: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 70000,
      },
    ],
    rating: 5,
    synopsis: "Explora el mundo mágico de Hogwarts como estudiante durante el siglo XIX, aprende hechizos, prepara pociones, descubre secretos y enfréntate a fuerzas peligrosas.",
    image: "",
    genre: "RPG / Aventura",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "elden-ring",
    title: "Elden Ring",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 79000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 79000,
        priceSecundaria: 70000,
      },
    ],
    rating: 5,
    synopsis: "Explora las Tierras Intermedias en una aventura de fantasía oscura llena de enormes regiones, poderosos enemigos, secretos y combates desafiantes.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901768/Elden_Ring_fan_Poster_Brandon_P%C3%A9rez_mvompe.jpg",
    genre: "RPG / Soulslike",
    releaseYear: 2022,
    featured: false,
  },

  {
    id: "fallout-4",
    title: "Fallout 4",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 69000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 69000,
      },
    ],
    rating: 4,
    synopsis: "Despierta en un mundo devastado por la guerra nuclear y explora un enorme páramo mientras buscas a tu hijo y descubres los secretos de una sociedad transformada.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901770/FALLOUT_4_dgb8qr.jpg",
    genre: "RPG / Mundo Abierto",
    releaseYear: 2015,
    featured: false,
  },

  {
    id: "gta-the-trilogy",
    title: "GTA: The Trilogy",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
    ],
    rating: 4,
    synopsis: "Revive tres clásicos de Grand Theft Auto con historias ambientadas en ciudades criminales llenas de personajes memorables, vehículos, misiones y libertad de exploración.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901781/Grand_Theft_Auto_The_Trilogy_The_Definitive_Edition_owpozu.jpg",
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
        pricePrimaria: 77000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 77000,
        priceSecundaria: 70000,
      },
    ],
    rating: 5,
    synopsis: "Conviértete en Jin Sakai y lucha para proteger la isla de Tsushima durante la invasión mongola, combinando técnicas de samurái con métodos de combate sigilosos.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901773/GHOST_OF_TSUSHIMA._uo2svz.jpg",
    genre: "Acción / Aventura",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "minecraft",
    title: "Minecraft",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 75000,
        priceSecundaria: 68000,
      },
      {
        name: "PS5",
        pricePrimaria: 75000,
        priceSecundaria: 68000,
      },
    ],
    rating: 5,
    synopsis: "Construye, explora y sobrevive en un mundo generado de forma procedural donde puedes crear estructuras, recolectar recursos, combatir criaturas y vivir aventuras ilimitadas.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901786/Minecraft_2009_jbx5ro.jpg",
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
        pricePrimaria: 76000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 70000,
      },
    ],
    rating: 4,
    synopsis: "Participa en intensas batallas ambientadas en la Primera Guerra Mundial, recorriendo diferentes escenarios y utilizando vehículos, armas y estrategias de combate.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901757/BATTLEFIELD_1._qnuo2w.jpg",
    genre: "Acción / Shooter",
    releaseYear: 2016,
    featured: false,
  },

  {
    id: "gta-5",
    title: "GTA 5",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
    ],
    rating: 5,
    synopsis: "Explora Los Santos junto a Michael, Franklin y Trevor en una historia criminal llena de robos, persecuciones y decisiones, acompañada por un enorme mundo abierto.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901783/GTA_5_gvzbal.jpg",
    genre: "Acción / Mundo Abierto",
    releaseYear: 2013,
    featured: false,
  },

  {
    id: "fc-24",
    title: "FC 24",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 64000,
        priceSecundaria: 60000,
      },
      {
        name: "PS5",
        pricePrimaria: 64000,
        priceSecundaria: 60000,
      },
    ],
    rating: 4,
    synopsis: "Disfruta de una experiencia futbolística con numerosos equipos, jugadores y competiciones, además de diferentes modos para jugar partidas y construir tu propio equipo.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901771/FC_24._t7qjai.jpg",
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
        pricePrimaria: 83000,
        priceSecundaria: 78000,
      },
      {
        name: "PS5",
        pricePrimaria: 83000,
        priceSecundaria: 78000,
      },
    ],
    rating: 4,
    synopsis: "Combate en intensas partidas multijugador, enfrenta hordas de enemigos en Zombies y disfruta de Blackout, el modo de batalla a gran escala de la saga.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901761/Call_Of_Duty__Black_Ops_4_b2gf66.jpg",
    genre: "Acción / Shooter",
    releaseYear: 2018,
    featured: false,
  },

  {
    id: "spiderman-2",
    title: "Spider-Man 2",
    platforms: [
      {
        name: "PS5",
        pricePrimaria: 105000,
        priceSecundaria: 85000,
      },
    ],
    rating: 5,
    synopsis: "Ponte en la piel de Peter Parker y Miles Morales mientras protegen Nueva York de amenazas como Kraven y Venom en una aventura llena de acción.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901784/Marvel_s_Spider-Man_2_-_Key_Art_Wall_Poster_34L__x_22_4W__Premium_Unframed_Version_qnpz93.jpg",
    genre: "Acción / Aventura",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "dragon-ball-kakarot",
    title: "Dragon Ball Z: Kakarot",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 75000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 75000,
        priceSecundaria: 70000,
      },
    ],
    rating: 5,
    synopsis: "Revive la historia de Goku desde Dragon Ball Z mientras exploras el mundo, entrenas, completas misiones y participas en espectaculares combates.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901766/Dragon_ball_z_KAKAROT_hafmyv.jpg",
    genre: "RPG / Anime",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "f1-2023",
    title: "F1 2023",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 64000,
        priceSecundaria: 64000,
      },
      {
        name: "PS5",
        pricePrimaria: 64000,
        priceSecundaria: 64000,
      },
    ],
    rating: 4,
    synopsis: "Compite en la máxima categoría del automovilismo con pilotos y circuitos oficiales, disfrutando de carreras, campeonatos y diferentes modos de conducción.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901769/F1_2023_iagc2w.jpg",
    genre: "Carreras / Fórmula 1",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "god-of-war-3-remastered",
    title: "God of War 3 Remastered",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 69000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 69000,
      },
    ],
    rating: 5,
    synopsis: "Acompaña a Kratos en su brutal batalla contra los dioses del Olimpo mientras busca venganza en una aventura repleta de combates y enfrentamientos épicos.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901778/GOD_OF_WAR_3_REMASTERED._h51pt1.jpg",
    genre: "Acción / Aventura",
    releaseYear: 2015,
    featured: false,
  },

  {
    id: "cuphead",
    title: "Cuphead",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 70000,
        priceSecundaria: 64000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 64000,
      },
    ],
    rating: 5,
    synopsis: "Acompaña a Cuphead y Mugman en una aventura inspirada en las animaciones clásicas, enfrentándote a desafiantes jefes con un característico estilo visual dibujado a mano.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901763/CUPHEAD_keab8v.jpg",
    genre: "Acción / Plataformas",
    releaseYear: 2017,
    featured: false,
  },

  {
    id: "crash-team-racing",
    title: "Crash Team Racing",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 75000,
        priceSecundaria: 68000,
      },
      {
        name: "PS5",
        pricePrimaria: 75000,
        priceSecundaria: 68000,
      },
    ],
    rating: 4,
    synopsis: "Compite en carreras de karts llenas de obstáculos, potenciadores y derrapes mientras controlas a Crash, Coco y otros personajes del universo de Crash Bandicoot.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901762/Crash_Team_Racing_Nitro_Fueled_i9zouk.jpg",
    genre: "Carreras",
    releaseYear: 2019,
    featured: false,
  },

  {
    id: "the-last-of-us-2",
    title: "The Last of Us 2",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 75000,
        priceSecundaria: 68000,
      },
      {
        name: "PS5",
        pricePrimaria: 75000,
        priceSecundaria: 68000,
      },
    ],
    rating: 5,
    synopsis: "Sigue la historia de Ellie en un mundo devastado por una infección, donde la búsqueda de venganza la llevará a enfrentarse a decisiones y consecuencias difíciles.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901804/THE_LAST_OF_US__PART_II_2020_VIDEO_GAME_-_ONE_EYE_SYMBOLISM_e6xfnt.jpg",
    genre: "Acción / Aventura",
    releaseYear: 2020,
    featured: false,
  },

  {
    id: "resident-evil-4-remake",
    title: "Resident Evil 4 Remake",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 65000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 65000,
      },
    ],
    rating: 5,
    synopsis: "Acompaña a Leon S. Kennedy en una misión para rescatar a la hija del presidente, enfrentándose a enemigos aterradores en una versión completamente renovada del clásico.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901799/RESIDENT_EVIL_4_REMAKE._qhch8u.jpg",
    genre: "Terror / Acción",
    releaseYear: 2023,
    featured: false,
  },

  {
    id: "wwe-2k24",
    title: "WWE 2K24",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 70000,
        priceSecundaria: 62000,
      },
      {
        name: "PS5",
        pricePrimaria: 70000,
        priceSecundaria: 62000,
      },
    ],
    rating: 4,
    synopsis: "Entra al ring con las grandes estrellas de WWE y disfruta de combates, campeonatos y diferentes modos que recrean la emoción del espectáculo de lucha libre.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901808/WWE_2K24___The_Official_Home_of_WWE_2K24_dp8ot0.jpg",
    genre: "Deportes / Lucha",
    releaseYear: 2024,
    featured: false,
  },

  {
    id: "need-for-speed-unbound",
    title: "Need for Speed Unbound",
    platforms: [
      {
        name: "PS5",
        pricePrimaria: 73000,
        priceSecundaria: 70000,
      },
    ],
    rating: 4,
    synopsis: "Compite por las calles de Lakeshore en carreras clandestinas mientras construyes tu reputación, mejoras tus vehículos y evitas a la policía.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901795/NEED_FOR_SPEED_UNBOUND._tynxqa.jpg",
    genre: "Carreras",
    releaseYear: 2022,
    featured: false,
  },

  {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
    ],
    rating: 5,
    synopsis: "Acompaña a Arthur Morgan y la banda de Van der Linde en una aventura por el Viejo Oeste mientras intentan sobrevivir en un mundo que está dejando atrás a los forajidos.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901797/Red_Dead_Redemption_II_Gaming_Poster_Print_-_Item_VARXPS1602_-_Framed_24_x_36___Red_dead_redemption_poster_Red_dead_redemption_art_Red_dead_redemption_tjudx8.jpg",
    genre: "Acción / Mundo Abierto",
    releaseYear: 2018,
    featured: false,
  },

  {
    id: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
      {
        name: "PS5",
        pricePrimaria: 78000,
        priceSecundaria: 70000,
      },
    ],
    rating: 5,
    synopsis: "Acompaña a Kratos y Atreus en un viaje por los nueve reinos mientras intentan evitar el Ragnarök y enfrentan a poderosos dioses y criaturas de la mitología nórdica.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901779/GOD_OF_WAR_RAGNAROK._mdc2u3.jpg",
    genre: "Acción / Aventura",
    releaseYear: 2022,
    featured: false,
  },

  {
    id: "ghost-of-yotei",
    title: "Ghost of Yotei",
    platforms: [
      {
        name: "PS5",
        pricePrimaria: 120000,
        priceSecundaria: 103000,
      },
    ],
    rating: 5,
    synopsis: "Embárcate en una aventura de acción ambientada en el Japón feudal y explora los paisajes alrededor del monte Yōtei mientras enfrentas peligros y enemigos.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901774/GHOST_OF_YOTEI._frhnvp.jpg",
    genre: "Acción / Aventura",
    releaseYear: 2025,
    featured: false,
  },

  {
    id: "wwe-2k25",
    title: "WWE 2K25",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 85000,
        priceSecundaria: 73000,
      },
      {
        name: "PS5",
        pricePrimaria: 85000,
        priceSecundaria: 73000,
      },
    ],
    rating: 4,
    synopsis: "Vive la acción de WWE con un amplio roster de superestrellas, nuevos combates y diferentes modos de juego que recrean la experiencia del entretenimiento deportivo.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901810/WWE_2K25._sl9wby.jpg",
    genre: "Deportes / Lucha",
    releaseYear: 2025,
    featured: false,
  },

  {
    id: "god-of-war",
    title: "God of War",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 75000,
        priceSecundaria: 65000,
      },
      {
        name: "PS5",
        pricePrimaria: 75000,
        priceSecundaria: 65000,
      },
    ],
    rating: 5,
    synopsis: "Acompaña a Kratos y Atreus en un viaje por tierras nórdicas mientras enfrentan criaturas, dioses y peligros en una historia centrada en la familia y la supervivencia.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901776/God_of_War_2018_lugigm.jpg",
    genre: "Acción / Aventura",
    releaseYear: 2018,
    featured: false,
  },

  {
    id: "need-for-speed-payback",
    title: "Need for Speed Payback",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 64000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 64000,
      },
    ],
    rating: 4,
    synopsis: "Forma un equipo de corredores y busca venganza contra una organización criminal mientras recorres Fortune Valley y participas en carreras, persecuciones y desafíos.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901793/NEED_FOR_SPEED_PAYBACK._bpmdtl.jpg",
    genre: "Carreras",
    releaseYear: 2017,
    featured: false,
  },

  {
    id: "need-for-speed",
    title: "Need for Speed",
    platforms: [
      {
        name: "PS4",
        pricePrimaria: 76000,
        priceSecundaria: 64000,
      },
      {
        name: "PS5",
        pricePrimaria: 76000,
        priceSecundaria: 64000,
      },
    ],
    rating: 4,
    synopsis: "Compite en carreras callejeras de alta velocidad, modifica tus vehículos y demuestra tus habilidades mientras intentas dominar las calles.",
    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901795/Need_for_Speed_Poster_03_11_zqplqc.jpg",
    genre: "Carreras",
    releaseYear: 2015,
    featured: false,
  },
];

// ============================================================
// FORMATEO DE PRECIOS
// ============================================================

export const formatCOP = (amount: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Alias para compatibilidad
export const formatPrice = formatCOP;

// ============================================================
// FUNCIONES DE PLATAFORMA
// ============================================================

/**
 * Obtiene la información de una plataforma concreta.
 *
 * Ejemplo:
 * getPlatformPrices(game.platforms, "PS4")
 */
export const getPlatformPrices = (
  platforms: PlatformPrices[],
  platform: PlatformType,
): PlatformPrices | undefined => {
  return platforms.find((item) => item.name === platform);
};

/**
 * Comprueba si el juego tiene una plataforma.
 *
 * Ejemplo:
 * hasPlatform(game.platforms, "PS5")
 */
export const hasPlatform = (
  platforms: PlatformPrices[],
  platform: PlatformType,
): boolean => {
  return platforms.some((item) => item.name === platform);
};

/**
 * Comprueba si tiene PS4 y PS5.
 */
export const isDualPlatform = (platforms: PlatformPrices[]): boolean => {
  return hasPlatform(platforms, "PS4") && hasPlatform(platforms, "PS5");
};

/**
 * Comprueba si PS4 y PS5 tienen
 * exactamente los mismos precios.
 *
 * PS4 Primaria   === PS5 Primaria
 * PS4 Secundaria === PS5 Secundaria
 */
export const hasSamePlatformPrices = (platforms: PlatformPrices[]): boolean => {
  const ps4 = getPlatformPrices(platforms, "PS4");

  const ps5 = getPlatformPrices(platforms, "PS5");

  if (!ps4 || !ps5) {
    return false;
  }

  return (
    ps4.pricePrimaria === ps5.pricePrimaria &&
    ps4.priceSecundaria === ps5.priceSecundaria
  );
};

/**
 * Determina si el juego puede aparecer
 * en el filtro "Todos".
 *
 * Requisitos:
 *
 * 1. Tiene PS4.
 * 2. Tiene PS5.
 * 3. PS4 y PS5 tienen el mismo precio Primaria.
 * 4. PS4 y PS5 tienen el mismo precio Secundaria.
 */
export const showInAllFilter = (platforms: PlatformPrices[]): boolean => {
  return isDualPlatform(platforms) && hasSamePlatformPrices(platforms);
};

// ============================================================
// PRECIO SEGÚN PLATAFORMA Y TIPO DE CUENTA
// ============================================================

export type AccountType = "primaria" | "secundaria";

/**
 * Obtiene el precio exacto de:
 *
 * PS4 + Primaria
 * PS4 + Secundaria
 * PS5 + Primaria
 * PS5 + Secundaria
 */
export const getGamePrice = (
  platforms: PlatformPrices[],
  platform: PlatformType,
  accountType: AccountType,
): number | undefined => {
  const platformData = getPlatformPrices(platforms, platform);

  if (!platformData) {
    return undefined;
  }

  if (accountType === "primaria") {
    return platformData.pricePrimaria;
  }

  return platformData.priceSecundaria;
};

// ============================================================
// PRECIO MÍNIMO DE PRIMARIA
// ============================================================

export const getMinPrimaryPrice = (platforms: Game["platforms"]): number => {
  if (!platforms.length) {
    return 0;
  }

  return Math.min(...platforms.map((platform) => platform.pricePrimaria));
};

// ============================================================
// NOMBRES DE PLATAFORMAS
// ============================================================

export const getPlatformNames = (platforms: Game["platforms"]): string => {
  return platforms.map((platform) => platform.name).join(" / ");
};
