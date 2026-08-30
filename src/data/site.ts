export const site = {
  name: "Al-Mo'uood Pilgrims",
  tagline: "Your Trusted Travel Partner",
  eyebrow: "AL-MO'UOOD PILGRIMS PAKISTAN",
  logo: "https://i.ibb.co/KcrbzH4L/logo.jpg",
  phonePK: "+92 335 2200014",
  phonePKRaw: "923352200014",
  phoneIQ: "+964 7844345566",
  phoneIQRaw: "9647844345566",
  address: "G-03, Al-Najaf Arcade, Behind Fatimiyah Hospital, Soldier Bazar #3, Karachi",
  socialHandle: "/almouood14",
  glNumber: "GL#6091",
  yearsExperience: "12 Years",
  registration: "Government of Pakistan Registered",
};

export const waMessages = {
  general:
    "Assalamu Alaikum, I would like to plan my spiritual journey with Al Mo'uood Pilgrims. Please guide me regarding available Hajj, Umrah and Ziyarat packages. JazakAllah Khair.",
  packageMsg: (pkg: string) =>
    `Assalamu Alaikum, I am interested in the ${pkg} package. Please provide me with more details, availability and pricing. JazakAllah Khair.`,
  umrahMsg: (pkg: string) =>
    `Assalamu Alaikum, I am interested in the ${pkg} Umrah package. Please provide me with complete details, availability and pricing. JazakAllah Khair.`,
  ziyaratMsg: (pkg: string) =>
    `Assalamu Alaikum, I am interested in the ${pkg} Ziyarat package. Please provide me with complete details, availability and pricing. JazakAllah Khair.`,
  hajjMsg: (pkg: string) =>
    `Assalamu Alaikum, I am interested in the ${pkg} Hajj package. Please provide me with complete details, availability and pricing. JazakAllah Khair.`,
  guideMsg: (guide: string) =>
    `Assalamu Alaikum, I would like to know more about the ${guide} with Al Mo'uood Pilgrims. Please share the details. JazakAllah Khair.`,
};

export function waLink(message: string, number: string = site.phonePKRaw): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telLink(number: string): string {
  return `tel:${number.replace(/\s/g, "")}`;
}
