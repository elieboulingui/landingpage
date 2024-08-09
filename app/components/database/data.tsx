// Interfaces
export interface User {
  nom: string;
  prenom: string;
  email: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Maps {
  url: string;
}

export interface Info {
  ville?: string;
  quatier?: string;
  numeroderue?: string;
  email?: string;
  contact1?: string;
  contact2?: string;
  citeweb?: string;
}

export interface Descriptiondate {
  moi?: string;
  jours?: string;
  but?: string;
  heure?: string;
  detaille?: string;
}

export interface Product {
  id: number;
  nom: string;
  prix: number;
}

export interface BackgroundImage {
  url: string;
}

export interface Speaker {
  nom: string;
  role: string;
  image: string;
}

export interface uRls {
  url: string;
}

export interface Invitation {
  image: string;
}
export interface Video{
  video:string
}
export interface Day {
  Descriptiondate?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

// Data Arrays
const planing: Descriptiondate[] = [
  { moi: "mai" },
  { jours: "22" },
  { but: "fastfood" },
  { heure: "12h34" },
  { detaille: "programation" }
];

const info: Info[] = [
  { ville: 'libreville' },
  { quatier: 'akanda' },
  { numeroderue: '235666st' },
  { email: 'elieboulingui@gmail.com' },
  { contact1: '+24107777777' },
  { contact2: '+24107775577' },
  { citeweb: 'www.html.com' },
];

const Urls: uRls[] = [
  { url: "https://www.google.com/maps" }
];

const maps: Maps[] = [
  { url: 'image/map.jpeg' }
];

const image: Image[] = [
  { src: '/image/ee1.png', alt: 'image1' },
  { src: '/image/e.png', alt: 'image2' },
  { src: '/image/ee3.png', alt: 'image3' },
  { src: '/image/ee41.png', alt: 'image4' },
  { src: '/image/ee32.png', alt: 'image5' },
  { src: '/image/ee3.png', alt: 'image3' },
  { src: '/image/ee41.png', alt: 'image4' },
  { src: '/image/ee32.png', alt: 'image5' }
];

const backgroundImage: BackgroundImage = { url: '/image/gab.jpg' };

const day: Day[] = [
  { Descriptiondate: 365, hours: 24, minutes: 59, seconds: 59 }
];

const users: User[] = [
  { nom: 'boulingui', prenom: 'josue', email: 'elieboulingui2@gmail.com' },
  { nom: 'dupont', prenom: 'jean', email: 'jean.dupont@example.com' },
  { nom: 'smith', prenom: 'john', email: 'john.smith@example.com' },
];
const video:Video[]=[
  {video:"/video/event.mp4"}
]
const products: Product[] = [
  { id: 1, nom: 'Produit A', prix: 29.99 },
  { id: 2, nom: 'Produit B', prix: 19.99 },
  { id: 3, nom: 'Produit C', prix: 39.99 },
];

const invitation: Invitation[] = [
  { image: "/image/piece.avif" }
];

const speakers: Speaker[] = [
  { nom: 'Gabin Steeven', role: 'programmer', image: '/image/gab.jpg' },
  { nom: "rocia meolicia", role: 'eleve', image: "/image/piece.avif" },
  { nom: "Gabin Steeven ", role: 'eleve', image: "/image/ecole.jpg" }
];

// Export all constants
export { users, products, speakers, invitation, video, day, planing, backgroundImage, image, maps, Urls, info };
