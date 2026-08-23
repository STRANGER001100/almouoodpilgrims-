export type Guide = {
  id: string;
  name: string;
  role: string;
  shortDescription: string;
  description: string;
  experience: string;
  specialties: string[];
  image: string;
  gallery?: string[];
};

// NOTE: The client has provided official Arbaeen Program images below.
// These are used exactly as supplied — do not replace with generated imagery.
export const guides: Guide[] = [
  {
    id: "arbaeen-program",
    name: "Arbaeen Program",
    role: "Najaf → Karbala Walk | Serving Pilgrims Every Year",
    shortDescription:
      "A complete Arbaeen program covering the sacred 80 KM walk from Najaf to Karbala with expert guidance, comprehensive planning and full logistical support.",
    description:
      "Every year, millions of pilgrims from across the world walk from Najaf al-Ashraf to Karbala Mukarrama to renew their pledge of loyalty to Imam Hussain (a.s). Al-Mo'uood Pilgrims Arbaeen Program is designed to make this deeply spiritual journey safe, organized and unforgettable — from Mokab (Mawakib) locations and daily walking strategy to heat survival, hydration, packing essentials and 24/7 on-ground support with our Pakistan & Iraq offices working side by side.",
    experience: "Serving Arbaeen Pilgrims for over 12 Years",
    specialties: [
      "Najaf → Karbala 80 KM Walk Support",
      "Mokab Guide & Route Planning",
      "Heat Survival & Hydration Guidance",
      "Pakistan & Iraq On-ground Teams",
      "1452 Pole Complete Roadmap",
      "Packing & Preparation Assistance",
    ],
    image: "https://i.ibb.co/QvH0D0SK/arbaeen.jpg",
    gallery: [
      "https://i.ibb.co/QvH0D0SK/arbaeen.jpg",
      "https://i.ibb.co/Qvw7n8Jn/arbaeen-2.jpg",
      "https://i.ibb.co/Ndmb2xLv/3.jpg",
      "https://i.ibb.co/bMbF8Y7w/4.jpg",
      "https://i.ibb.co/C5JgBcsz/5.jpg",
      "https://i.ibb.co/h1s3ZmJS/6.jpg",
      "https://i.ibb.co/SXmYmynt/7.jpg",
    ],
  },
];
