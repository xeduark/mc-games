export type PlatformType = 'PS4' | 'PS5' | 'Xbox S/X';

export interface Game {
  id: string;
  title: string;
  platforms: { 
    name: PlatformType; 
    priceSecundaria: number; // Precio más económico (compartida)
    pricePrimaria: number;   // Precio más alto (cuenta propia)
  }[];
  rating: number;
  synopsis: string;
  image: string;
  genre: string;
  releaseYear: number;
  featured?: boolean;
}

// 👇 1. NÚMERO DE WHATSAPP CENTRALIZADO
export const WHATSAPP_NUMBER = '3003766780'; // Cambia por tu número real (sin el +)

// 👇 2. MENSAJES DE WHATSAPP CENTRALIZADOS
export const WHATSAPP_MESSAGES = {
  // 👇 DEBE SER UN STRING, NO UNA FUNCIÓN. Usa {title} y {platforms} como marcadores
  buyGame: "¡Hola! 🎮 Quiero comprar este juego:\n\n🕹️ *{title}*\n📌 Formatos disponibles: {platforms}\n\n¿Cuál tengo disponible y cómo procedo con el pago?",
  general: "¡Hola! 🎮 Quiero información sobre los juegos disponibles.",
  contact: "¡Hola MC Games! 🎮 Necesito información."
};


export const games: Game[] = [
  {
    id: 'god-of-war-ragnarok',
    title: 'God of War Ragnarök',
    platforms: [
      { name: 'PS5', priceSecundaria: 40000, pricePrimaria: 80000 },
      { name: 'PS4', priceSecundaria: 35000, pricePrimaria: 70000 }
    ],
    rating: 5,
    synopsis: 'Embárcate en un viaje épico y emotivo mientras Kratos y Atreus luchan por aferrarse a la verdad. El Fimbulvetr ya ha comenzado y ambos deben viajar a cada uno de los Nueve Reinos en busca de respuestas.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=800&fit=crop',
    genre: 'Acción / Aventura',
    releaseYear: 2022,
    featured: true,
  },
  {
    id: 'spider-man-2',
    title: "Marvel's Spider-Man 2",
    platforms: [
      { name: 'PS4', priceSecundaria: 35000, pricePrimaria: 70000 }
    ],
    rating: 5,
    synopsis: 'Peter Parker y Miles Morales regresan en una nueva aventura épica. Con la ciudad de Nueva York más amenazada que nunca por Venom y Kraven el Cazador, ambos Spider-Man deberán enfrentarse a sus mayores desafíos.',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&h=800&fit=crop',
    genre: 'Acción / Mundo Abierto',
    releaseYear: 2023,
    featured: true,
  },
  {
    id: 'halo-infinite',
    title: 'Halo Infinite',
    platforms: [
      { name: 'PS5', priceSecundaria: 40000, pricePrimaria: 80000 }
    ],
    rating: 4,
    synopsis: 'El Jefe Maestro regresa en la aventura más épica de la saga Halo. Explora el anillo Zeta, enfrenta a nuevos enemigos y descubre los misterios de los Forerunners en este shooter en primera persona de nueva generación.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b28?w=600&h=800&fit=crop',
    genre: 'Shooter / FPS',
    releaseYear: 2021,
    featured: true,
  },
  {
    id: 'forza-horizon-5',
    title: 'Forza Horizon 5',
    platforms: [
      { name: 'PS5', priceSecundaria: 40000, pricePrimaria: 80000 },
      { name: 'PS4', priceSecundaria: 35000, pricePrimaria: 70000 }
    ],
    rating: 5,
    synopsis: '¡Tu aventura Horizon definitiva te espera! Explora los vibrantes y cambiantes paisajes de México con acción de conducción ilimitada y divertida en cientos de los mejores autos del mundo.',
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&h=800&fit=crop',
    genre: 'Carreras / Mundo Abierto',
    releaseYear: 2021,
    featured: true,
  },
  {
    id: 'the-last-of-us-part-2',
    title: 'The Last of Us Part II',
    platforms: [
      { name: 'PS4', priceSecundaria: 35000, pricePrimaria: 70000 }
    ],
    rating: 5,
    synopsis: 'Cinco años después de los eventos de The Last of Us, Ellie y Joel se han establecido en Jackson, Wyoming. Cuando un evento violento interrumpe esa paz, Ellie emprende un viaje implacable para hacer justicia.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b28?w=600&h=800&fit=crop',
    genre: 'Acción / Survival',
    releaseYear: 2020,
  },
  {
    id: 'starfield',
    title: 'Starfield',
    platforms: [
      { name: 'PS5', priceSecundaria: 40000, pricePrimaria: 80000 },
      { name: 'PS4', priceSecundaria: 35000, pricePrimaria: 70000 }
    ],
    rating: 4,
    synopsis: 'Starfield es el primer RPG en más de 25 años de Bethesda Game Studios. En esta épica aventura espacial, crea a cualquier personaje y explora con una libertad sin precedentes mientras te embarcas en un viaje para resolver el mayor misterio de la humanidad.',
    image: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=600&h=800&fit=crop',
    genre: 'RPG / Espacial',
    releaseYear: 2023,
  },
  {
    id: 'gta-v',
    title: 'Grand Theft Auto V',
    platforms: [
      { name: 'PS5', priceSecundaria: 40000, pricePrimaria: 80000 },
      { name: 'PS4', priceSecundaria: 35000, pricePrimaria: 70000 }
    ],
    rating: 5,
    synopsis: 'Tres criminales muy diferentes planean los atracos más audaces de sus vidas en la soleada Los Santos. Michael, Trevor y Franklin se entrelazan en una historia de crimen, lealtad y traición.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop',
    genre: 'Acción / Mundo Abierto',
    releaseYear: 2014,
  },
  {
    id: 'gears-5',
    title: 'Gears 5',
    platforms: [
      { name: 'PS5', priceSecundaria: 40000, pricePrimaria: 80000 },
      { name: 'PS4', priceSecundaria: 35000, pricePrimaria: 70000 }
    ],
    rating: 4,
    synopsis: 'Desde los cenizas de una nación devastada, nace una leyenda. Kait Diaz debe desenterrar su conexión con el enemigo y descubrir la verdadera amenaza para Sera en esta épica aventura de acción en tercera persona.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=800&fit=crop',
    genre: 'Shooter / Acción',
    releaseYear: 2019,
  },
];

// Función para formatear el precio en pesos colombianos (COP)
export const formatCOP = (amount: number) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(amount);
};
