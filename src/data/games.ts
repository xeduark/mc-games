export interface Game {
  id: string;
  title: string;
  platform: 'PS4' | 'PS5' | 'PS4/PS5';
  price: number;
  rating: number; // 1-5
  synopsis: string;
  image: string; // URL de placeholder
  genre: string;
  releaseYear: number;
  featured?: boolean;
}

export const games: Game[] = [
  {
    id: 'god-of-war-ragnarok',
    title: 'God of War Ragnarök',
    platform: 'PS4/PS5',
    price: 59.99,
    rating: 5,
    synopsis:
      'Embárcate en un viaje épico y emotivo mientras Kratos y Atreus luchan por aferrarse a la verdad. El Fimbulvetr ya ha comenzado y ambos deben viajar a cada uno de los Nueve Reinos en busca de respuestas, mientras las fuerzas asgardianas se preparan para la batalla profetizada que traerá el fin del mundo.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=800&fit=crop',
    genre: 'Acción / Aventura',
    releaseYear: 2022,
    featured: true,
  },
  {
    id: 'spider-man-2',
    title: "Marvel's Spider-Man 2",
    platform: 'PS5',
    price: 69.99,
    rating: 5,
    synopsis:
      'Peter Parker y Miles Morales regresan en una nueva aventura épica. Con la ciudad de Nueva York más amenazada que nunca por Venom y Kraven el Cazador, ambos Spider-Man deberán enfrentarse a sus mayores desafíos mientras luchan por salvar la ciudad y a quienes aman.',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&h=800&fit=crop',
    genre: 'Acción / Mundo Abierto',
    releaseYear: 2023,
    featured: true,
  },
  {
    id: 'horizon-forbidden-west',
    title: 'Horizon Forbidden West',
    platform: 'PS4/PS5',
    price: 49.99,
    rating: 4,
    synopsis:
      'Aloy viaja al Oeste Prohibido, una frontera majestuosa pero peligrosa que oculta misteriosas amenazas nuevas. Explora tierras lejanas, lucha contra máquinas más grandes y asombrosas, y conoce a nuevas tribus mientras descubres los secretos de un mundo al borde del colapso.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=800&fit=crop',
    genre: 'RPG / Acción',
    releaseYear: 2022,
  },
  {
    id: 'the-last-of-us-part-2',
    title: 'The Last of Us Part II',
    platform: 'PS4',
    price: 39.99,
    rating: 5,
    synopsis:
      'Cinco años después de los eventos de The Last of Us, Ellie y Joel se han establecido en Jackson, Wyoming. Cuando un evento violento interrumpe esa paz, Ellie emprende un viaje implacable para hacer justicia y encontrar la paz interior, enfrentándose a las devastadoras consecuencias de sus acciones.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b28?w=600&h=800&fit=crop',
    genre: 'Acción / Survival',
    releaseYear: 2020,
    featured: true,
  },
  {
    id: 'final-fantasy-xvi',
    title: 'Final Fantasy XVI',
    platform: 'PS5',
    price: 69.99,
    rating: 4,
    synopsis:
      'Clive Rosfield, primer hijo del Archiduque de Rosaria, se ve envuelto en una tragedia cuando su hogar es destruido. Jurando venganza, Clive se adentra en un mundo oscuro donde los Dominantes y sus Eikones son armas de guerra. Una historia épica de venganza, destino y cristales.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=800&fit=crop',
    genre: 'RPG / Acción',
    releaseYear: 2023,
  },
  {
    id: 'gran-turismo-7',
    title: 'Gran Turismo 7',
    platform: 'PS4/PS5',
    price: 49.99,
    rating: 4,
    synopsis:
      'El simulador de conducción definitivo regresa con más de 400 coches, circuitos legendarios y condiciones meteorológicas dinámicas. Experimenta la emoción de las carreras con gráficos fotorrealistas, físicas mejoradas y el regreso del modo campaña clásico de Gran Turismo.',
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&h=800&fit=crop',
    genre: 'Carreras / Simulación',
    releaseYear: 2022,
  },
  {
    id: 'demon-souls',
    title: "Demon's Souls",
    platform: 'PS5',
    price: 59.99,
    rating: 5,
    synopsis:
      'El remake del clásico que inició el género Souls. Boletaria está envuelta en una niebla oscura y demonios hambrientos. Como guerrero solitario, deberás atravesar cinco reinos devastados, enfrentarte a jefes colosales y descubrir los secretos del Anciano. Gráficos de nueva generación que te dejarán sin aliento.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&h=800&fit=crop',
    genre: 'RPG / Souls-like',
    releaseYear: 2020,
  },
  {
    id: 'gta-v',
    title: 'Grand Theft Auto V',
    platform: 'PS4',
    price: 29.99,
    rating: 5,
    synopsis:
      'Tres criminales muy diferentes planean los atracos más audaces de sus vidas en la soleada Los Santos. Michael, Trevor y Franklin se entrelazan en una historia de crimen, lealtad y traición en el mundo abierto más detallado y vibrante jamás creado. Incluye acceso a GTA Online.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop',
    genre: 'Acción / Mundo Abierto',
    releaseYear: 2014,
  },
  {
    id: 'ratchet-clank-rift',
    title: 'Ratchet & Clank: Rift Apart',
    platform: 'PS5',
    price: 49.99,
    rating: 4,
    synopsis:
      'El malvado Dr. Nefarious ha abierto portales dimensionales que amenazan con destruir la realidad. Ratchet y Clank, junto a una nueva Lombax llamada Rivet, saltan entre dimensiones en una aventura intergaláctica llena de humor, acción desenfrenada y mundos visualmente impresionantes.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=800&fit=crop',
    genre: 'Plataformas / Acción',
    releaseYear: 2021,
  },
  {
    id: 'bloodborne',
    title: 'Bloodborne',
    platform: 'PS4',
    price: 19.99,
    rating: 5,
    synopsis:
      'Despierta en la ciudad gótica de Yharnam, un lugar maldito plagado de una enfermedad terrible. Como cazador, deberás enfrentarte a bestias horribles y descubrir los oscuros secretos que se esconden tras la noche de cacería. Rápido, brutal y atmosférico, una obra maestra de FromSoftware.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=800&fit=crop',
    genre: 'RPG / Souls-like',
    releaseYear: 2015,
  },
  {
    id: 'returnal',
    title: 'Returnal',
    platform: 'PS5',
    price: 49.99,
    rating: 4,
    synopsis:
      'Selene se estrella en un planeta alienígena hostil y queda atrapada en un ciclo de muerte y renacimiento. Cada vez que muere, el mundo cambia a su alrededor. Combina la acción frenética de un shooter con la exploración roguelike en una experiencia psicológica y visualmente deslumbrante.',
    image: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=600&h=800&fit=crop',
    genre: 'Shooter / Roguelike',
    releaseYear: 2021,
  },
  {
    id: 'uncharted-legacy',
    title: 'Uncharted: Legacy of Thieves',
    platform: 'PS4/PS5',
    price: 39.99,
    rating: 4,
    synopsis:
      'Colección remasterizada que incluye Uncharted 4: El Desenlace del Ladrón y Uncharted: El Legado Perdido. Acompaña a Nathan Drake en su última aventura y a Chloe Frazer en una búsqueda épica por la India. Acción cinematográfica, puzzles ingeniosos y paisajes impresionantes.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=800&fit=crop',
    genre: 'Acción / Aventura',
    releaseYear: 2022,
  },
];

export const WHATSAPP_NUMBER = '1234567890'; // <-- Cambia por el número real con código de país