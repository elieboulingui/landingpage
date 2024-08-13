
export interface User {
  nom: string;
  prenom: string;
  email: string;
}
 export  interface Activity {
  jour: string;
  titre: string;
  description: string;
  heureDebut: string;
  heureFin: string;
  animation: string;
}

export interface Footer{
text1:string;
text2:string;
text3:string;
text4:string;
text5:string;
text6:string;
text7:string;
}
export interface TextSponsore{
text1:string;
text2:string;
text3:string;
text4:string;
}
export interface ScheduleDescription{
  h1:string;
  h2:string;
  h3:string;
  p:string;

}
export interface speakerInfo{
  speakertext: string;
  speakerappe:string;
  speakertext2:string;
speakertext1:string;
}
export interface Knowmore{
info1?:string;
info2?:string;
info3?:string;
}
export interface Image {
  src: string;
  alt: string;
}

export interface Maps {
  url: string;
}

export interface Info {
  text:string;
  a1:string;
  a2:string;
  a3:string;
  text1:string;
  text2:string;
  text3:string;
  text4:string;
  text5:string;
  image1:string;
  image2:string;
  image3:string;
  textsoumettre:string;
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
export interface TextInvitation{
  textinvite?:string;
  ensavoirplus?:string;
  textinvite2?:string;
  textlorem1?:string;
  textlorem2?:string;
  textlorem3?:string;
  textlorem4?:string;
  textlorem5?:string;
}
export interface BackgroundImage {
  url: string;
}

export interface Speaker {
  nom: string;
  role: string;
  image: string;
}
export interface Header{
  link:string;
  a1?:string;
  image?:string;
  a2?:string;
  a3?:string;
  btn?:string;
}
export interface uRls {
  url: string;
}
export interface Lien{
lien?: string;
google?:string;
github?:string;
youtube?:string;
}
export interface Invitation {
  Accommodation:string;
  location:string;
  image: string;
  text1:string;
  text2:string;
  textlorem:string;
  textlorem1:string;
  textlorem2:string;
  texterror:string

}
export interface Video{
  video:string;
  videodescription:string;
  videodescription2:String;
  videolorem:string;
}
export interface Day {
  ensavoirplus:string;
  decriptionjours:string;
  decriptionheure:string;
  decriptionminute:string;
  decriptionsegond:string;
  conferencetext:string;
  conference:string;
  rencontre?:string;
  Descriptiondate?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}
const footer: Footer[]=[
{
  text1: "Carrières",
  text2: "À propos",
  text3: "Confidentialité",
  text4: "Politiques",
  text5: "Application mobile",
  text6: "Presse",
  text7: "2022 | Eivent | All Rights Reserved"
}
]

const textsponsore :TextSponsore[]=[
  {
    text1: "  Sponsor de la ",
    text2: "conférence",
    text3: " le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction ne constituant pas l'intrigue principale d'une œuvre.",
    text4: " Call For Speaker"
  }
]
const scheduleDescription:ScheduleDescription[]=[
{
  h1: "Calendrier de la réunion",
  h2: "Conference",
  p: " Le lore,emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction  ne constituant pas l'intrigue principale d'une œuvre.",
  h3: " No schedule data available."
}
]
const knowmore : Knowmore[]= [
  {info1:"josue"},
  {info2:"boulingui"},
  {info3:"boulingui3"},
]
 const lienweb: Lien[]=[
{lien:'https://www.wikipedia.org/'},
{github:"https://github.com/"},
{youtube:"https://www.youtube.com/"},
{google:"https://www.google.com/"}
 ]
 const header: Header[]=[
{
  a1: "À propos", a2: "Conférencier", a3: "Calendrier", btn: "Buy Tickets", image: "/image/README.png",
  link: "https://www.youtube.com/watch?v=x91h9r0HXIQ"
},
 ]
 
 const planing1: Descriptiondate[] = [
  { moi: "Mai", jours: "22", but: "fastfood", heure: "08:30 AM", detaille: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!" },
];
const planing3: Descriptiondate[] = [
  { moi: "Mai", jours: "15", but: "Gathering welcome speech", heure: "06:30 AM", detaille: "Dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!" },
];
const planing4: Descriptiondate[] = [
  { moi: "Mai", jours: "15", but: "Lunch", heure: "01:30 PM", detaille: "Dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!" },
];
const planing5: Descriptiondate[] = [
  { moi: "Mai", jours: "15", but: "Network + Questions", heure: "03:00 PM", detaille: "Dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!" },
];
const planing2: Descriptiondate[] = [
  { moi: "Mai", jours: "15", but: "Closing Thoughts", heure: "05:00 PM", detaille: "Dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!" },
];
const info: Info[] = [ {
  ville: 'libreville',
  quatier: 'akanda',
  numeroderue: '235666st',
  email: 'elieboulingui@gmail.com',
  contact1: '+24107777777',
  contact2: '+24107775577',
  citeweb: 'www.html.com',
  text1: "Formulaire d'inscription",
  text: 'Contactez-nous',
  text2: "Titre",
  text3: "Nom",
  text4: "Email",
  text5: "Ticket",
  image1: "/image/pay.png",
  image2: "/image/visa.png",
  image3: "/image/master.png",
  textsoumettre: "Soumettre",
  a1: "https://www.youtube.com/watch?v=x91h9r0HXIQ",
  a2: "https://www.youtube.com/watch?v=x91h9r0HXIQ",
  a3: "https://www.youtube.com/watch?v=x91h9r0HXIQ"
} ]


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

const speakerinfo:speakerInfo[]=[
{
  speakertext: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident eos facilis fugiat fugit sapiente ipsam.Itaque sunt facere distinctio praesentium ea, ipsum corporis doloribus laboriosam? Tenetur et alias cum.",
  speakerappe: "  Appel à intervenant",
  speakertext1: "Intervenant de la",
  speakertext2: "réunion"
}
]

const backgroundImage: BackgroundImage = { url: '/image/gab.jpg' };


const day: Day[] = [
  {
    Descriptiondate: 365, hours: 24, minutes: 59, seconds: 59,
    rencontre: " Rencontre ",
    decriptionjours: "jours",
    decriptionheure: "heures",
    decriptionminute: "minutes",
    decriptionsegond: "secondes",
    ensavoirplus:'En savoir plus',
    conferencetext: "          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur cum explicabo tenetur recusandae, rerum ab fugit necessitatibus sint laborum illum nostrum quia distinctio amet tempora, placeat aspernatur quas perspiciatis debitis.",
    conference: "conference"
  }
];


const users: User[] = [
  { nom: 'boulingui', prenom: 'josue', email: 'elieboulingui2@gmail.com' },
  { nom: 'dupont', prenom: 'jean', email: 'jean.dupont@example.com' },
  { nom: 'smith', prenom: 'john', email: 'john.smith@example.com' },
];
const video:Video[]=[
  {
    video: "/video/event.mp4",
    videodescription: "          Découvrez notre vidéo de présentation",
    videodescription2: "   Conférences de rencontre",
    videolorem: "          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam   id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque."
  }
]

const textinvitation : TextInvitation[]=[
  {textinvite:"    Vous êtes invité(e)s à notre",
    textinvite2:"Conférence",
    ensavoirplus:"En savoir plus",
    textlorem5:"   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam soluta iste error at. Corporis, nemo possimus id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque.",
    textlorem4:"   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam soluta iste error at. Corporis, nemo possimus id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque.",
    textlorem3:"   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam soluta iste error at. Corporis, nemo possimus id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque.",
    textlorem2:"   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam soluta iste error at. Corporis, nemo possimus id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque.",
    textlorem1:"   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius, laborum voluptatum aperiam soluta iste error at. Corporis, nemo possimus id, voluptatem eveniet, amet inventore fugit repudiandae cupiditate doloremque itaque."
  },
]

const invitation: Invitation[] = [
  {
    image: "/image/piece.avif",
    text1: "Lieu de la réunion",
    text2: "Conférence",
    textlorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio.",
    textlorem1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!",
    textlorem2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni sapiente eius incidunt provident in! Dicta voluptatum fugiat odio nisi et optio cum voluptate eum, magni doloribus eaque neque distinctio!",

    texterror: "No video available",
    Accommodation: "accomodation",
    location: "location"
  }
];
const activities: Activity[] = [
  {
    jour: 'Lundi',
    titre: 'Yoga du matin',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti in quasi labore! Dignissimos distinctio natus veritatis molestias eligendi eos reiciendis repellat assumenda quisquam voluptate? Tenetur quas fugit deleniti obcaecati!',
    heureDebut: '08:00',
    heureFin: '09:00',
    animation: "natalie"
  },
  {
    jour: 'Mardi',
    titre: 'Atelier de peinture',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti in quasi labore! Dignissimos distinctio natus veritatis molestias eligendi eos reiciendis repellat assumenda quisquam voluptate? Tenetur quas fugit deleniti obcaecati!',
    heureDebut: '10:00',
    heureFin: '12:00',
    animation: "glen"
  },
  {
    jour: 'Mercredi',
    titre: 'Lecture animée',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti in quasi labore! Dignissimos distinctio natus veritatis molestias eligendi eos reiciendis repellat assumenda quisquam voluptate? Tenetur quas fugit deleniti obcaecati!',
    heureDebut: '14:00',
    heureFin: '15:00',
    animation: "marcel"
  },
  {
    jour: 'Jeudi',
    titre: 'Cuisine du monde',
    description: 'Préparation de plats exotiques  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti in quasi labore! Dignissimos distinctio natus veritatis molestias eligendi eos reiciendis repellat assumenda quisquam voluptate? Tenetur quas fugit deleniti obcaecati!',
    heureDebut: '16:00',
    heureFin: '18:00',
    animation: "ferry"
  },
  {
    jour: 'Vendredi',
    titre: 'Concert en plein air',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti in quasi labore! Dignissimos distinctio natus veritatis molestias eligendi eos reiciendis repellat assumenda quisquam voluptate? Tenetur quas fugit deleniti obcaecati!',
    heureDebut: '19:00',
    heureFin: '21:00',
    animation: "dj khaled"
  }
];

const speakers: Speaker[] = [
  { nom: 'Gabin Steeven', role: 'programmer', image: '/image/gab.jpg' },
  { nom: "rocia meolicia", role: 'eleve', image: "/image/piece.avif" },
  { nom: "Gabin Steeven ", role: 'eleve', image: "/image/ecole.jpg" }
];


export { speakerinfo, activities, footer, textsponsore, scheduleDescription, users,knowmore, lienweb,textinvitation, speakers, invitation, video, day, planing1, planing2, planing3,header, planing4,planing5, backgroundImage, image, maps, Urls, info };