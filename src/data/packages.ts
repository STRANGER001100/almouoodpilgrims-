export type Pkg = {
  id: string;
  name: string;
  duration: string;
  makkahHotel?: string;
  madinahHotel?: string;
  hotel?: string;
  transport: string;
  meals?: string;
  visa?: string;
  services: string[];
  price?: string;
  departure?: string;
  image: string;
  tag?: string;
};

export const hajjPackages: Pkg[] = [
  {
    id: "hajj-economy",
    name: "Economy Hajj Package",
    duration: "35 – 40 Days",
    makkahHotel: "Comfortable Hotel — Aziziyah / Near Haram Shuttle",
    madinahHotel: "3★ Hotel near Masjid an-Nabawi",
    transport: "AC Buses & Airport Transfers",
    meals: "Daily Meals Included",
    visa: "Full Visa Assistance",
    services: ["Ziyarat Tours", "Group Leader", "Trained Muallim", "Ihram Guidance"],
    price: "Contact for Latest Fare",
    departure: "From All Over The World",
    image: "/images/hajj-pilgrims.jpg",
    tag: "Popular",
  },
  {
    id: "hajj-standard",
    name: "Standard Hajj Package",
    duration: "30 – 35 Days",
    makkahHotel: "4★ Hotel — Walking Distance to Haram",
    madinahHotel: "4★ Hotel — Central Area",
    transport: "AC Coach & Private Transfers",
    meals: "Buffet Breakfast, Lunch & Dinner",
    visa: "Full Visa Assistance",
    services: ["Ziyarat of Historical Sites", "Experienced Muallim", "Group Coordinator", "24/7 Support"],
    price: "Contact for Latest Fare",
    departure: "From All Over The World",
    image: "/images/kaaba-hero.jpg",
    tag: "Recommended",
  },
  {
    id: "hajj-vip",
    name: "VIP Hajj Package",
    duration: "25 – 30 Days",
    makkahHotel: "5★ Hotel — Direct Haram View",
    madinahHotel: "5★ Hotel — Front of Masjid an-Nabawi",
    transport: "Luxury Coach & Private Cars",
    meals: "Premium Buffet — All Meals",
    visa: "Priority Visa Processing",
    services: ["Premium Mina & Arafat Camps", "Personal Muallim", "VIP Ziyarat", "Concierge Support"],
    price: "Contact for Latest Fare",
    departure: "From All Over The World",
    image: "/images/karbala.jpg",
    tag: "Luxury",
  },
];

export const umrahPackages: Pkg[] = [
  {
    id: "umrah-economy",
    name: "Economy Umrah Package",
    duration: "10 – 14 Days",
    makkahHotel: "Comfortable Stay near Haram Shuttle",
    madinahHotel: "3★ near Masjid an-Nabawi",
    transport: "AC Group Transfers",
    services: ["Umrah Guidance", "Airport Assistance", "Ziyarat in Makkah & Madinah"],
    price: "Contact for Latest Fare",
    image: "/images/kaaba-hero.jpg",
    tag: "Best Value",
  },
  {
    id: "umrah-standard",
    name: "Standard Umrah Package",
    duration: "12 – 16 Days",
    makkahHotel: "4★ Hotel — Close to Haram",
    madinahHotel: "4★ Hotel — Central Location",
    transport: "AC Coach Transfers",
    services: ["Guided Ziyarat", "Group Muallim", "Daily Breakfast", "24/7 Support"],
    price: "Contact for Latest Fare",
    image: "/images/madinah.jpg",
  },
  {
    id: "umrah-premium",
    name: "Premium Umrah Package",
    duration: "14 Days",
    makkahHotel: "5★ Hotel — Walking Distance to Haram",
    madinahHotel: "5★ Hotel — Facing Masjid an-Nabawi",
    transport: "Private AC Transfers",
    services: ["Personal Guide", "All Meals", "Comprehensive Ziyarat", "Priority Check-in"],
    price: "Contact for Latest Fare",
    image: "/images/hajj-pilgrims.jpg",
    tag: "Popular",
  },
  {
    id: "umrah-family",
    name: "Family Umrah Package",
    duration: "12 – 16 Days",
    makkahHotel: "4★ Family Rooms",
    madinahHotel: "4★ Family Rooms",
    transport: "Private Family Transfers",
    services: ["Family Ziyarat", "Kids-friendly Support", "Flexible Meals", "Group Coordinator"],
    price: "Contact for Latest Fare",
    image: "/images/madinah.jpg",
  },
  {
    id: "umrah-vip",
    name: "VIP Umrah Package",
    duration: "10 – 14 Days",
    makkahHotel: "5★ Luxury — Haram View Rooms",
    madinahHotel: "5★ Luxury — Front View Suite",
    transport: "Luxury Private Cars",
    services: ["Personal Muallim", "Concierge", "Premium Meals", "VIP Ziyarat"],
    price: "Contact for Latest Fare",
    image: "/images/kaaba-hero.jpg",
    tag: "Luxury",
  },
];

export const ziyaratPackages: Pkg[] = [
  {
    id: "ziyarat-iraq",
    name: "Iraq Ziyarat — Najaf & Karbala",
    duration: "10 – 12 Days",
    hotel: "4★ Hotels in Najaf, Karbala, Kadhimiya & Samarra",
    transport: "AC Coach with Experienced Driver",
    services: ["Ziyarat of Imam Ali (a.s)", "Ziyarat of Imam Hussain (a.s)", "Ziyarat of Kadhimayn (a.s)", "Ziyarat of Askariyain (a.s)"],
    price: "Contact for Latest Fare",
    image: "/images/karbala.jpg",
    tag: "Signature",
  },
  {
    id: "ziyarat-iran",
    name: "Iran Ziyarat — Mashhad & Qom",
    duration: "8 – 10 Days",
    hotel: "4★ Hotels in Mashhad, Qom & Tehran",
    transport: "AC Coach & Domestic Flight",
    services: ["Ziyarat of Imam Reza (a.s)", "Ziyarat of Hazrat Masuma (a.s)", "Guided Historical Tours"],
    price: "Contact for Latest Fare",
    image: "/images/najaf.jpg",
  },
  {
    id: "ziyarat-syria",
    name: "Syria Ziyarat Package",
    duration: "7 – 10 Days",
    hotel: "Comfortable Hotels — Damascus",
    transport: "AC Coach Transfers",
    services: ["Ziyarat of Sayyeda Zainab (a.s)", "Ziyarat of Sayyeda Ruqayya (a.s)", "Historical Sites"],
    price: "Contact for Latest Fare",
    image: "/images/karbala.jpg",
  },
  {
    id: "ziyarat-combined",
    name: "Combined Iraq + Iran Ziyarat",
    duration: "15 – 18 Days",
    hotel: "4★ Hotels across both countries",
    transport: "Coach + Domestic Flight",
    services: ["Complete Iraq Ziyarat", "Complete Iran Ziyarat", "Experienced Group Leader"],
    price: "Contact for Latest Fare",
    image: "/images/najaf.jpg",
    tag: "Extended",
  },
];
