import { PackageCard } from "./PackageCard";
import { hajjPackages, umrahPackages, ziyaratPackages } from "../data/packages";
import { site, waMessages, waLink, telLink } from "../data/site";
import { reviews } from "../data/reviews";
import { Rating } from "./Rating";
import {
  IconArrowRight,
  IconWhatsApp,
  IconPhone,
  IconChevronDown,
  IconSparkle,
  IconCheck,
  IconShield,
  IconBed,
  IconSupport,
  IconTag,
  IconRoute,
  IconMosque,
  IconMoon,
} from "./Icons";
import { useState } from "react";

/* -------------------------------- SECTION HEADER -------------------------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}) {
  const textCol = dark ? "text-white" : "text-[#0a1a4a]";
  const subCol = dark ? "text-white/70" : "text-[#4a5a80]";
  const eyeCol = dark ? "text-[#e5b968]" : "text-[#c58e2f]";
  return (
    <div className={"reveal max-w-3xl mb-12 " + (center ? "mx-auto text-center" : "")}>
      {eyebrow && (
        <div className={"flex items-center gap-3 " + (center ? "justify-center" : "")}>
          <span className={"h-px w-8 " + (dark ? "bg-[#e5b968]" : "bg-[#c58e2f]")} />
          <span className={"text-[12px] font-semibold tracking-[0.28em] " + eyeCol}>{eyebrow}</span>
          <span className={"h-px w-8 " + (dark ? "bg-[#e5b968]" : "bg-[#c58e2f]")} />
        </div>
      )}
      <h2 className={"mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight " + textCol}>
        {title}
      </h2>
      {subtitle && <p className={"mt-4 text-base sm:text-lg " + subCol}>{subtitle}</p>}
    </div>
  );
}

/* -------------------------------- ABOUT -------------------------------- */
export function About() {
  return (
    <section id="about" className="section-fade-blue py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-[#3aa8ff]/25 to-[#1c3fb0]/25 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40">
            <img
              src="/images/karbala.jpg"
              alt="Imam Hussain Shrine, Karbala"
              className="w-full h-[520px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-white rounded-2xl shadow-xl border border-[#e6ecff] p-5 max-w-[240px]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#eaf2ff] flex items-center justify-center text-[#1c3fb0]">
                <IconMosque width={20} height={20} />
              </div>
              <div>
                <div className="text-[11px] text-[#5a6a8a] tracking-widest">EXPERIENCE</div>
                <div className="font-display text-xl text-[#0a1a4a]">12 Years</div>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-[#5a6a8a] leading-relaxed">
              Serving pilgrims with sincerity and care.
            </p>
          </div>
        </div>

        <div className="reveal">
          <SectionHeader
            eyebrow="ABOUT AL-MO'UOOD PILGRIMS"
            title="Devoted to your spiritual journey towards the Holy Lands."
            subtitle="Al-Mo'uood Pilgrims is a trusted pilgrimage travel partner dedicated to serving pilgrims performing Hajj, Umrah and Ziyarat. We combine spiritual understanding with modern travel expertise so your journey feels calm, cared-for and complete — serving pilgrims from all over the world."
            center={false}
          />

          {/* Credentials */}
          <div className="mt-2 mb-6 grid sm:grid-cols-2 gap-3">
            <div className="bg-[#f5f8ff] border border-[#e6ecff] rounded-2xl px-4 py-3">
              <div className="text-[11px] tracking-widest text-[#8a95b8] font-semibold">CREDENTIAL</div>
              <div className="mt-1 text-[#0a1a4a] font-semibold text-sm">{site.registration}</div>
              <div className="text-[#2a55d6] text-sm font-bold mt-0.5">License No. {site.glNumber}</div>
            </div>
            <div className="bg-[#f5f8ff] border border-[#e6ecff] rounded-2xl px-4 py-3">
              <div className="text-[11px] tracking-widest text-[#8a95b8] font-semibold">EXPERIENCE</div>
              <div className="mt-1 text-[#0a1a4a] font-semibold text-sm">12 Years of Experience</div>
              <div className="text-[#2a55d6] text-sm font-bold mt-0.5">Serving Pilgrims Worldwide</div>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Hajj, Umrah & Ziyarat Packages",
              "Comfortable Handpicked Hotels",
              "Full Visa & Travel Assistance",
              "Experienced Muallim & Guides",
              "Reliable Transportation",
              "Dedicated 24/7 Customer Support",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[#3a4a72]">
                <IconCheck width={16} height={16} className="text-[#2a55d6] mt-1 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-[#2a55d6] to-[#3aa8ff] text-white text-xs font-semibold tracking-[0.2em] px-6 py-3 rounded-full"
            >
              PLAN YOUR JOURNEY <IconArrowRight width={14} height={14} />
            </a>
            <a
              href={telLink(site.phonePKRaw)}
              className="inline-flex items-center gap-2 bg-[#0a1a4a] hover:bg-[#0f2467] text-white text-xs font-semibold tracking-[0.2em] px-6 py-3 rounded-full transition-colors"
            >
              <IconPhone width={14} height={14} /> {site.phonePK}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FIRST: ZIYARAT -------------------------------- */
export function ZiyaratSection() {
  return (
    <section id="ziyarat" className="py-20 lg:py-28 bg-[#f7f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ZIYARAT PACKAGES"
          title="Sacred Ziyarat of Iraq, Iran & Syria"
          subtitle="Walk in the footsteps of love and devotion — comprehensive Ziyarat packages of Najaf, Karbala, Kadhimayn, Samarra, Mashhad, Qom, Damascus and beyond."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ziyaratPackages.map((p) => (
            <PackageCard key={p.id} pkg={p} kind="ziyarat" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- SECOND: UMRAH + MADINAH -------------------------------- */
export function UmrahSection() {
  return (
    <section id="umrah" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="UMRAH & MADINAH"
          title="Beautifully Planned Umrah Journeys From All Over The World"
          subtitle="From economy to VIP — flexible Umrah and Madinah packages designed for individuals, couples and families with comfortable hotels near the Haram. Serving pilgrims from all over the world."
        />

        {/* Makkah/Kaaba & Madinah Imagery Split */}
        <div className="reveal grid md:grid-cols-2 gap-6 mb-12">
          <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-[#e6ecff]">
            <img
              src="/images/kaaba-hero.jpg"
              alt="Holy Makkah and Kaaba"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a1f]/80 via-[#050a1f]/10 to-transparent" />
            <div className="absolute bottom-5 left-6">
              <span className="text-[#e5b968] text-[10px] font-bold tracking-widest uppercase">THE HOLY SANCTUARY</span>
              <h4 className="font-display text-white text-2xl mt-1">Makkah Mukarrama</h4>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-[#e6ecff]">
            <img
              src="/images/madinah.jpg"
              alt="Masjid an-Nabawi, Madinah"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a1f]/80 via-[#050a1f]/10 to-transparent" />
            <div className="absolute bottom-5 left-6">
              <span className="text-[#e5b968] text-[10px] font-bold tracking-widest uppercase">THE PROPHET'S MOSQUE</span>
              <h4 className="font-display text-white text-2xl mt-1">Madinah al-Munawwarah</h4>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {umrahPackages.map((p) => (
            <PackageCard key={p.id} pkg={p} kind="umrah" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- ARBAEEN PROGRAM HOME SECTION -------------------------------- */
export function ArbaeenIntro({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section id="arbaeen" className="relative py-20 lg:py-28 dark-blue-bg overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="ambient-dots absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#e5b968]" />
            <span className="text-[#e5b968] text-[12px] font-semibold tracking-[0.28em]">A SPECIAL FEATURE</span>
          </div>
          <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Arbaeen Program —{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#6dc4ff] to-[#3aa8ff]">
              Guides for your journey
            </span>
          </h2>
          <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
            A dedicated program by Al-Mo'uood Pilgrims for the sacred Arbaeen pilgrimage to Karbala.
            From heat survival, walking strategy and Mokab maps to complete preparation — everything you
            need for a safe and spiritually meaningful Najaf to Karbala journey.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {[
              { Icon: IconRoute, label: "Najaf → Karbala Roadmap" },
              { Icon: IconMosque, label: "Ziyarat & Mokab Guidance" },
              { Icon: IconSparkle, label: "Preparation & Packing Tips" },
              { Icon: IconMoon, label: "Best Walking Times & Rest" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-white/85 text-sm">
                <span className="h-9 w-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#6dc4ff]">
                  <Icon width={16} height={16} />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("/arbaeen-program")}
              className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-[#2a55d6] to-[#3aa8ff] text-white text-xs font-semibold tracking-[0.2em] px-6 py-3.5 rounded-full"
            >
              EXPLORE ARBAEEN PROGRAM <IconArrowRight width={14} height={14} />
            </button>
            <a
              href={waLink(waMessages.guideMsg("Arbaeen Program"))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-[0.2em] px-6 py-3.5 rounded-full transition-colors"
            >
              <IconWhatsApp width={14} height={14} className="text-[#25D366]" /> INQUIRE
            </a>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-[#3aa8ff]/30 to-[#1c3fb0]/40 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/images/arbaeen-guide.jpg"
              alt="Arbaeen Program — Najaf to Karbala"
              className="w-full h-[520px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a1f] via-[#050a1f]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-[#e5b968] text-[11px] font-semibold tracking-[0.28em]">FEATURED PROGRAM</div>
                <div className="font-display text-white text-2xl mt-1">Arbaeen Program</div>
              </div>
              <button
                onClick={() => onNavigate("/arbaeen-program")}
                className="bg-white/10 border border-white/20 backdrop-blur-md text-white text-[11px] font-semibold tracking-widest px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                VIEW GUIDE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- HAJJ -------------------------------- */
export function HajjSection() {
  return (
    <section id="hajj" className="py-20 lg:py-28 bg-[#f7f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="HAJJ PACKAGES"
          title="Perform the Sacred Pillar of Hajj with Peace of Mind"
          subtitle="Curated Hajj packages with quality accommodation, experienced Muallim, and complete Mina, Arafat & Muzdalifah arrangements. Serving pilgrims from all over the world."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hajjPackages.map((p) => (
            <PackageCard key={p.id} pkg={p} kind="hajj" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- AVAILABLE PACKAGES -------------------------------- */
export function AvailablePackages() {
  const customPackages = [
    {
      id: "october-ziyarat-flyer",
      title: "October Ziyarat Group — Iran & Iraq",
      image: "https://i.ibb.co/7N4JG5Sz/Whats-App-Image-2026-08-21-at-6-48-09-AM.jpg",
      description: "Complete package including Air Ticket, Visa, Hotel, Meals, Transport, Ziyarat, and Group Leader."
    }
  ];

  return (
    <section id="available-packages" className="py-20 lg:py-28 bg-[#ffffff] relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CURRENT OFFERS"
          title="Available Packages"
          subtitle="Explore our active package flyers. These images contain complete details for current and upcoming pilgrimage groups. Save the image or click to inquire directly on WhatsApp."
        />

        <div className="flex flex-wrap justify-center gap-8">
          {customPackages.map((p) => (
            <div key={p.id} className="reveal w-full max-w-2xl bg-[#f7f9ff] border border-[#e6ecff] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(10,26,74,0.06)] flex flex-col md:flex-row gap-8 items-center card-hover">
              {/* Image side - fully responsive and high quality */}
              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-md group shrink-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto max-h-[480px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={p.image}
                    download
                    className="bg-white/95 text-[#0a1a4a] text-xs font-semibold tracking-widest px-4 py-2.5 rounded-full shadow-lg"
                  >
                    VIEW FULL FLYER
                  </a>
                </div>
              </div>

              {/* Text / Action side */}
              <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
                <div>
                  <span className="bg-[#e5b968]/20 text-[#c58e2f] text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                    ACTIVE FLYER
                  </span>
                  <h3 className="font-display text-[#0a1a4a] text-2xl sm:text-3xl mt-3 leading-tight font-bold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#5a6a8a] leading-relaxed">
                    {p.description}
                  </p>
                  
                  <div className="mt-4 p-3 bg-white border border-[#e6ecff] rounded-xl text-xs text-[#4a5a80] leading-relaxed">
                    <strong>Note:</strong> We update flyer images as soon as new schedules are finalized. Click below to confirm dates, cost, and availability.
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#eef2fb]">
                  <a
                    href={waLink("Assalamu Alaikum, I am interested in this package. Please provide me with complete details, availability and pricing. JazakAllah Khair.")}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-glow w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#2a55d6] to-[#3aa8ff] text-white text-xs sm:text-sm font-semibold tracking-widest py-4 px-6 rounded-full"
                  >
                    <IconWhatsApp width={16} height={16} />
                    INQUIRE ON WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- WHY US -------------------------------- */
export function WhyUs() {
  const items = [
    { Icon: IconShield, title: "Trusted Travel Partner", text: "Government of Pakistan Registered — License No. GL#6091." },
    { Icon: IconMosque, title: "Experienced Guidance", text: "12 years of experience guiding pilgrims with care." },
    { Icon: IconBed, title: "Comfortable Accommodation", text: "Handpicked hotels close to the Haram and holy sites." },
    { Icon: IconRoute, title: "Reliable Transportation", text: "AC coaches, private transfers and airport pickup." },
    { Icon: IconSupport, title: "Dedicated Support", text: "24/7 customer care from Pakistan to Iraq and back." },
    { Icon: IconTag, title: "Flexible Packages", text: "Economy to VIP — plans that fit every family and budget." },
    { Icon: IconCheck, title: "Complete Travel Assistance", text: "Visa, tickets, hotels and Ziyarat — all managed for you." },
    { Icon: IconSparkle, title: "Serving Worldwide", text: "Pilgrims from all over the world trust Al-Mo'uood Pilgrims." },
  ];
  return (
    <section id="why" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="WHY CHOOSE US"
          title="A Journey Guided by Trust, Care and Experience"
          subtitle="Everything we do is designed to give you clarity, comfort and confidence — so you can focus fully on your niyyah."
        />

        {/* Trust strip */}
        <div className="reveal mb-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { k: "12 Years", v: "of Experience" },
            { k: "Govt. Registered", v: "License No. GL#6091" },
            { k: "Worldwide", v: "Serving Pilgrims Globally" },
            { k: "24/7", v: "Dedicated Support" },
          ].map((t) => (
            <div key={t.k} className="bg-gradient-to-br from-[#0a1a4a] to-[#1c3fb0] rounded-2xl px-5 py-4 text-center text-white">
              <div className="font-display text-xl">{t.k}</div>
              <div className="text-white/70 text-xs mt-1 tracking-wide">{t.v}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, title, text }) => (
            <div key={title} className="reveal card-hover bg-gradient-to-b from-white to-[#f5f8ff] border border-[#e6ecff] rounded-2xl p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#eaf2ff] to-[#dbe7ff] text-[#1c3fb0] flex items-center justify-center">
                <Icon width={22} height={22} />
              </div>
              <h3 className="mt-4 font-display text-xl text-[#0a1a4a]">{title}</h3>
              <p className="mt-2 text-sm text-[#5a6a8a] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- HOW IT WORKS -------------------------------- */
export function HowItWorks() {
  const steps = [
    { n: "01", t: "Choose Your Package", d: "Browse Umrah, Ziyarat, Arbaeen or Hajj packages that fit your needs." },
    { n: "02", t: "Contact Us on WhatsApp", d: "Send us a message — we reply quickly with details and options." },
    { n: "03", t: "Get Personalized Guidance", d: "Our team plans your dates, hotels, transport and visa with you." },
    { n: "04", t: "Begin Your Spiritual Journey", d: "Arrive with peace of mind — we handle everything on the ground." },
  ];
  return (
    <section className="relative py-20 lg:py-28 dark-blue-bg overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="HOW IT WORKS"
          title="Four Simple Steps to Your Journey"
          subtitle="A clear, calm process — no confusion, no surprises."
          dark
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="reveal relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm card-hover">
              <div className="font-display text-transparent bg-clip-text bg-gradient-to-r from-[#6dc4ff] to-[#3aa8ff] text-5xl leading-none">
                {s.n}
              </div>
              <h3 className="mt-3 font-display text-xl text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- REVIEWS -------------------------------- */
export function ReviewsSection() {
  const [visible, setVisible] = useState(9);
  const shown = reviews.slice(0, visible);
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#f7f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="REVIEWS"
          title="Words from Our Pilgrims"
          subtitle="Real experiences shared by families and individuals who travelled with Al-Mo'uood Pilgrims."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((r) => (
            <div key={r.name + r.text.slice(0, 20)} className="reveal card-hover bg-white rounded-2xl border border-[#e6ecff] p-6 flex flex-col">
              <Rating value={r.rating} size={16} />
              <p className="mt-4 text-[14.5px] text-[#3a4a72] leading-relaxed grow">"{r.text}"</p>
              <div className="mt-5 pt-5 border-t border-[#eef2fb] flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0f2467] to-[#3aa8ff] text-white flex items-center justify-center font-semibold">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#0a1a4a]">{r.name}</div>
                  <div className="text-[11px] text-[#8a95b8] tracking-widest">VERIFIED PILGRIM</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visible < reviews.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible(visible + 9)}
              className="bg-white border border-[#d8e0f5] hover:border-[#2a55d6] text-[#0a1a4a] text-xs font-semibold tracking-widest px-6 py-3 rounded-full transition-colors"
            >
              LOAD MORE REVIEWS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------- FAQ -------------------------------- */
const faqs = [
  {
    q: "What Hajj packages do you offer?",
    a: "We offer Economy, Standard and VIP Hajj packages, each with different hotel categories, meal options and services. We serve pilgrims from all over the world. Please contact us for the latest fare and availability.",
  },
  {
    q: "What Umrah packages are available?",
    a: "Economy, Standard, Premium, Family and VIP Umrah packages are available with hotels ranging from comfortable to 5★ properties near the Haram and Masjid an-Nabawi. Serving pilgrims from all over the world.",
  },
  {
    q: "What does the package include?",
    a: "Packages generally include visa assistance, air ticket coordination, accommodation, transportation, Ziyarat and guidance from an experienced Muallim. Exact inclusions depend on the package selected.",
  },
  {
    q: "Do you provide hotel accommodation?",
    a: "Yes, all our packages include handpicked hotel accommodation in Makkah, Madinah, Najaf, Karbala and other destinations depending on your package.",
  },
  {
    q: "Is transportation included?",
    a: "Yes, airport transfers and AC coach transportation to and from all major sites are included in our packages.",
  },
  {
    q: "How can I book?",
    a: "The easiest way is to click any 'Inquire on WhatsApp' or 'Book Your Journey' button on this website. Our team will respond quickly with details and next steps.",
  },
  {
    q: "How can I contact you?",
    a: `You can reach us on WhatsApp at ${site.phonePK} (Pakistan) or ${site.phoneIQ} (Iraq). You can also call us directly.`,
  },
  {
    q: "How does WhatsApp booking work?",
    a: "When you click an 'Inquire' or 'Book Your Journey' button, WhatsApp opens with a pre-filled message mentioning the package you are interested in. Simply send the message and our team will guide you from there.",
  },
  {
    q: "Are you a registered company?",
    a: `Yes. Al-Mo'uood Pilgrims is Government of Pakistan Registered. License No. ${site.glNumber}. We have been serving pilgrims for 12 years.`,
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you might want to know before booking your journey with us."
        />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="reveal bg-[#f7f9ff] border border-[#e6ecff] rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5 hover:bg-[#eef3ff] transition-colors"
              >
                <span className="font-semibold text-[#0a1a4a] text-[15px] sm:text-base">{f.q}</span>
                <IconChevronDown
                  width={18}
                  height={18}
                  className={"text-[#2a55d6] transition-transform " + (open === i ? "rotate-180" : "")}
                />
              </button>
              <div
                className="faq-panel px-5 sm:px-6"
                style={{ maxHeight: open === i ? 280 : 0, opacity: open === i ? 1 : 0 }}
              >
                <p className="pb-5 text-[14.5px] text-[#4a5a80] leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- CONTACT -------------------------------- */
export function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 dark-blue-bg overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="ambient-dots absolute inset-0 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Begin your journey with a single message"
            subtitle="Our team is available on WhatsApp and phone — in both Pakistan and Iraq — to help you plan your Hajj, Umrah or Ziyarat."
            center={false}
            dark
          />

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="bg-white/10 border border-white/15 text-white/90 text-[11px] tracking-widest px-3 py-1.5 rounded-full">
              12 YEARS EXPERIENCE
            </span>
            <span className="bg-white/10 border border-white/15 text-white/90 text-[11px] tracking-widest px-3 py-1.5 rounded-full">
              {site.registration.toUpperCase()}
            </span>
            <span className="bg-white/10 border border-white/15 text-[#e5b968] text-[11px] tracking-widest px-3 py-1.5 rounded-full font-semibold">
              LICENSE NO. {site.glNumber}
            </span>
          </div>

          <div className="space-y-4">
            <ContactRow
              label="Pakistan Office"
              value={site.phonePK}
              href={telLink(site.phonePKRaw)}
              wa={waLink(waMessages.general, site.phonePKRaw)}
            />
            <ContactRow
              label="Iraq Office"
              value={site.phoneIQ}
              href={telLink(site.phoneIQRaw)}
              wa={waLink(waMessages.general, site.phoneIQRaw)}
            />
          </div>
        </div>

        <div className="reveal">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="font-display text-white text-2xl">Book Your Journey</h3>
            <p className="text-white/70 text-sm mt-2">
              Send us a quick WhatsApp message and our team will get back to you with a personalized plan.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noreferrer"
                className="btn-glow inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb757] text-white text-sm font-semibold tracking-widest px-6 py-4 rounded-full"
              >
                <IconWhatsApp width={18} height={18} /> WHATSAPP US
              </a>
              <a
                href={telLink(site.phonePKRaw)}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1a4a] hover:bg-white/90 text-sm font-semibold tracking-widest px-6 py-4 rounded-full transition-colors"
              >
                <IconPhone width={16} height={16} /> CALL NOW
              </a>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2a55d6] to-[#3aa8ff] text-white text-sm font-semibold tracking-widest px-6 py-4 rounded-full"
              >
                BOOK YOUR JOURNEY <IconArrowRight width={16} height={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  wa,
}: {
  label: string;
  value: string;
  href: string;
  wa: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
      <div>
        <div className="text-[11px] tracking-widest text-white/60">{label.toUpperCase()}</div>
        <div className="text-white text-lg font-medium mt-1">{value}</div>
      </div>
      <div className="flex gap-2">
        <a
          href={href}
          aria-label="Call"
          className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        >
          <IconPhone width={16} height={16} />
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="h-10 w-10 rounded-full bg-[#25D366] hover:bg-[#1eb757] text-white flex items-center justify-center transition-colors"
        >
          <IconWhatsApp width={16} height={16} />
        </a>
      </div>
    </div>
  );
}

/* -------------------------------- FOOTER -------------------------------- */
export function Footer({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <footer className="dark-blue-bg text-white/85 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={site.logo}
                alt="Al-Mo'uood Pilgrims logo"
                className="h-14 w-14 rounded-full object-cover ring-1 ring-white/20"
              />
              <div>
                <div className="font-display text-white text-lg leading-tight">AL-MO'UOOD</div>
                <div className="text-[#6dc4ff] text-[10px] tracking-[0.22em] font-semibold">PILGRIMS</div>
              </div>
            </div>
            <div className="mt-4 text-[#e5b968] text-[13px] tracking-[0.22em] font-semibold">
              YOUR TRUSTED TRAVEL PARTNER
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              A trusted pilgrimage travel partner devoted to serving pilgrims performing Hajj, Umrah and Ziyarat
              with sincerity, care and reliability — from all over the world.
            </p>
            <div className="mt-4 space-y-1 text-[12px] text-white/60">
              <div>12 Years of Experience</div>
              <div>{site.registration}</div>
              <div className="text-[#e5b968] font-semibold">License No. {site.glNumber}</div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-white text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#ziyarat" className="hover:text-white text-white/70">
                  Ziyarat
                </a>
              </li>
              <li>
                <a href="#umrah" className="hover:text-white text-white/70">
                  Umrah &amp; Madinah
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate("/arbaeen-program")} className="hover:text-white text-white/70">
                  Arbaeen Program
                </button>
              </li>
              <li>
                <a href="#hajj" className="hover:text-white text-white/70">
                  Hajj
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-white text-white/70">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white text-white/70">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white text-white/70">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white text-lg">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <div className="text-white/50 text-[11px] tracking-widest">PAKISTAN</div>
                <a href={telLink(site.phonePKRaw)} className="hover:text-white text-white/90">
                  {site.phonePK}
                </a>
              </li>
              <li>
                <div className="text-white/50 text-[11px] tracking-widest">IRAQ</div>
                <a href={telLink(site.phoneIQRaw)} className="hover:text-white text-white/90">
                  {site.phoneIQ}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white text-lg">Book Now</h4>
            <p className="mt-4 text-sm text-white/70">
              Get in touch on WhatsApp and let us plan your spiritual journey.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb757] text-white text-xs font-semibold tracking-widest px-5 py-3 rounded-full transition-colors"
              >
                <IconWhatsApp width={14} height={14} /> WHATSAPP
              </a>
              <a
                href={telLink(site.phonePKRaw)}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold tracking-widest px-5 py-3 rounded-full transition-colors"
              >
                <IconPhone width={14} height={14} /> CALL {site.phonePK}
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Al-Mo'uood Pilgrims. All rights reserved. · License No. {site.glNumber}</div>
          <div>Devoted to your spiritual journey towards the Holy Lands.</div>
        </div>
      </div>
    </footer>
  );
}
