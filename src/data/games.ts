
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

    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901765/Demon_Slayer__The_Hinokami_Chronicles_2_mpsoya.jpg",

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

    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901790/NBA_2K24._xojqe3.jpg",

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

    image: "https://res.cloudinary.com/lhzest5p/image/upload/v1785901803/THE_CREW_MOTORFEST_ers6kg.jpg",

    genre: "Carreras / Mundo Abierto",
    releaseYear: 2023,
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
  platform: PlatformType
): PlatformPrices | undefined => {
  return platforms.find(
    (item) => item.name === platform
  );
};


/**
 * Comprueba si el juego tiene una plataforma.
 *
 * Ejemplo:
 * hasPlatform(game.platforms, "PS5")
 */
export const hasPlatform = (
  platforms: PlatformPrices[],
  platform: PlatformType
): boolean => {
  return platforms.some(
    (item) => item.name === platform
  );
};


/**
 * Comprueba si tiene PS4 y PS5.
 */
export const isDualPlatform = (
  platforms: PlatformPrices[]
): boolean => {
  return (
    hasPlatform(platforms, "PS4") &&
    hasPlatform(platforms, "PS5")
  );
};


/**
 * Comprueba si PS4 y PS5 tienen
 * exactamente los mismos precios.
 *
 * PS4 Primaria   === PS5 Primaria
 * PS4 Secundaria === PS5 Secundaria
 */
export const hasSamePlatformPrices = (
  platforms: PlatformPrices[]
): boolean => {

  const ps4 = getPlatformPrices(
    platforms,
    "PS4"
  );

  const ps5 = getPlatformPrices(
    platforms,
    "PS5"
  );

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
export const showInAllFilter = (
  platforms: PlatformPrices[]
): boolean => {

  return (
    isDualPlatform(platforms) &&
    hasSamePlatformPrices(platforms)
  );
};


// ============================================================
// PRECIO SEGÚN PLATAFORMA Y TIPO DE CUENTA
// ============================================================

export type AccountType =
  | "primaria"
  | "secundaria";


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
  accountType: AccountType
): number | undefined => {

  const platformData =
    getPlatformPrices(
      platforms,
      platform
    );

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

export const getMinPrimaryPrice = (
  platforms: Game["platforms"]
): number => {

  if (!platforms.length) {
    return 0;
  }

  return Math.min(
    ...platforms.map(
      (platform) => platform.pricePrimaria
    )
  );
};


// ============================================================
// NOMBRES DE PLATAFORMAS
// ============================================================

export const getPlatformNames = (
  platforms: Game["platforms"]
): string => {

  return platforms
    .map((platform) => platform.name)
    .join(" / ");
};

