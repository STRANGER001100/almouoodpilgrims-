import { guides } from "../data/guides";
import { waLink, waMessages } from "../data/site";
import {
  IconArrowRight,
  IconCheck,
  IconRoute,
  IconMosque,
  IconSparkle,
  IconMoon,
  IconWhatsApp,
} from "../components/Icons";

export function ArbaeenProgramPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative dark-blue-bg overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 islamic-pattern opacity-40" />
        <div className="ambient-dots absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center gap-3 justify-center">
            <span className="h-px w-8 bg-[#e5b968]" />
            <span className="text-[#e5b968] text-[12px] font-semibold tracking-[0.28em]">AL-MO'UOOD PILGRIMS</span>
            <span className="h-px w-8 bg-[#e5b968]" />
          </div>
          <h1 className="mt-5 font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Arbaeen{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#6dc4ff] to-[#3aa8ff]">
              Program
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/75 text-base sm:text-lg leading-relaxed">
            A dedicated collection of programs and guides created by Al-Mo'uood Pilgrims to prepare, support and
            walk with you on your sacred Arbaeen pilgrimage to Karbala — from preparation and packing to walking
            strategy, heat survival, ziyarat guidance and on-ground help.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { Icon: IconRoute, t: "Route Planning", d: "80 KM Najaf → Karbala with full pole & mokab map." },
            { Icon: IconMosque, t: "Ziyarat Guidance", d: "Complete guidance for Ziyarat in Karbala & Najaf." },
            { Icon: IconSparkle, t: "Preparation Support", d: "Packing lists, tips and safety essentials." },
            { Icon: IconMoon, t: "Walking Strategy", d: "Best times to walk, rest and stay hydrated." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="reveal bg-[#f7f9ff] border border-[#e6ecff] rounded-2xl p-5">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#eaf2ff] to-[#dbe7ff] text-[#1c3fb0] flex items-center justify-center">
                <Icon width={20} height={20} />
              </div>
              <div className="mt-4 font-display text-[#0a1a4a] text-lg">{t}</div>
              <div className="mt-1 text-sm text-[#5a6a8a]">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured imagery */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-5">
          <div className="reveal relative rounded-3xl overflow-hidden h-72 border border-[#e6ecff]">
            <img src="/images/karbala.jpg" alt="Imam Hussain Shrine, Karbala" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a1f]/70 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white font-display text-2xl">Karbala Muqaddasa</div>
          </div>
          <div className="reveal relative rounded-3xl overflow-hidden h-72 border border-[#e6ecff]">
            <img src="/images/najaf.jpg" alt="Imam Ali Shrine, Najaf" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a1f]/70 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white font-display text-2xl">Najaf al-Ashraf</div>
          </div>
        </div>
      </section>

      {/* Guides — one centered card */}
      <section className="py-16 lg:py-20 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center gap-3 justify-center">
              <span className="h-px w-8 bg-[#c58e2f]" />
              <span className="text-[12px] font-semibold tracking-[0.28em] text-[#c58e2f]">OUR GUIDES</span>
              <span className="h-px w-8 bg-[#c58e2f]" />
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#0a1a4a]">
              Programs Designed for Pilgrims
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4a5a80]">
              More programs and guides will be added as they are provided. Explore the featured Arbaeen Program below.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {guides.map((g) => (
              <div
                key={g.id}
                className="w-full max-w-md card-hover bg-white rounded-3xl overflow-hidden border border-[#e6ecff] shadow-[0_20px_60px_rgba(10,26,74,0.12)]"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a1f] via-[#050a1f]/30 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <div className="text-[#e5b968] text-[11px] font-semibold tracking-[0.28em]">FEATURED PROGRAM</div>
                    <div className="font-display text-white text-3xl mt-1">{g.name}</div>
                  </div>
                </div>
                <div className="p-7">
                  <div className="text-[12px] uppercase tracking-widest text-[#2a55d6] font-semibold">{g.role}</div>
                  <p className="mt-3 text-[14.5px] text-[#4a5a80] leading-relaxed">{g.shortDescription}</p>
                  <button
                    onClick={() => onNavigate("/arbaeen-program/" + g.id)}
                    className="mt-6 w-full btn-glow inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0f2467] to-[#2a55d6] text-white text-xs font-semibold tracking-[0.2em] px-6 py-3.5 rounded-full"
                  >
                    VIEW GUIDE <IconArrowRight width={14} height={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-display text-[#0a1a4a] text-3xl">What the Arbaeen Program Covers</h3>
            <p className="mt-3 text-[#5a6a8a]">
              Everything you need for a safe, organized and spiritually focused journey to Karbala.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Complete Najaf → Karbala roadmap (80 KM, 1452 poles)",
              "Best times to walk & rest strategy",
              "Heat survival, hydration and ORS guidance",
              "Packing essentials for Arbaeen",
              "Mokab (Mawakib) map & rest locations",
              "Ziyarat and prayer schedules",
              "On-ground support from Pakistan & Iraq offices",
              "Emergency contacts and safety tips",
              "Accommodation guidance",
              "Transportation arrangements",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 bg-[#f7f9ff] border border-[#e6ecff] rounded-xl px-4 py-3">
                <IconCheck width={16} height={16} className="text-[#2a55d6] mt-1 shrink-0" />
                <span className="text-[14px] text-[#3a4a72]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories / Highlights */}
      <section className="py-16 lg:py-20 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center gap-3 justify-center">
              <span className="h-px w-8 bg-[#c58e2f]" />
              <span className="text-[12px] font-semibold tracking-[0.28em] text-[#c58e2f]">MEMORIES</span>
              <span className="h-px w-8 bg-[#c58e2f]" />
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#0a1a4a]">
              Highlights from Our Arbaeen Journeys
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4a5a80]">
              Cherished moments from our Arbaeen groups — Karbala, Najaf, Samarra and Kadhimayn — captured along
              the sacred path of devotion to Imam Hussain (a.s).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://i.ibb.co/nNdkbJ0t/ARBAEEN-2026-SAMARRAH-A-blessed-journey-of-faith-devotion-loyalty-to-Imam-Hussain-a-s.jpg",
              "https://i.ibb.co/RpbdSNHY/ARBAEEN-2026-SAMARRAH-A-blessed-journey-of-faith-devotion-loyalty-to-Imam-Hussain-a-s.jpg",
              "https://i.ibb.co/bj7Cf3sh/ARBAEEN-2026-SAMARRAH-A-blessed-journey-of-faith-devotion-loyalty-to-Imam-Hussain-a-s.jpg",
              "https://i.ibb.co/JwnXnZGt/ARBAEEN-2026-SAMARRAH-A-blessed-journey-of-faith-devotion-loyalty-to-Imam-Hussain-a-s.jpg",
              "https://i.ibb.co/s9nrrkn4/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/rR1HhDyp/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/TqBmpcsV/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/jvVSfXjf/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/QvnxRxS9/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/wr0Vssxh/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/p7y43kG/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/CKbR0Gsc/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/wrxWrTwS/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/GQjHBZCC/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/d0dw9KtV/ARBAEEN-2026-A-HEARTFELT-THANK-YOU-Al-Mouood-Pilgrims-extends-our-deepest-gratitude-to-Maulana.jpg",
              "https://i.ibb.co/5hy1WZkW/Arbaeen-2026-Karbala-e-Mualla-A-journey-of-faith-devotion-and-loyalty-to-Imam-Hussain-a-s.jpg",
              "https://i.ibb.co/Kj20wNqx/Arbaeen-2026-Karbala-e-Mualla-A-journey-of-faith-devotion-and-loyalty-to-Imam-Hussain-a-s.jpg",
              "https://i.ibb.co/qLJg148S/Arbaeen-2026-Karbala-e-Mualla-A-journey-of-faith-devotion-and-loyalty-to-Imam-Hussain-a-s.jpg",
              "https://i.ibb.co/21n6jpzr/Arbaeen-2026-Karbala-e-Mualla-A-journey-of-faith-devotion-and-loyalty-to-Imam-Hussain-a-s.jpg",
              "https://i.ibb.co/rGGkMvpQ/ARBAEEN-2026-KAZMAIN-E-MUQADDASA-A-blessed-journey-of-faith-devotion-and-spiritual-connecti.jpg",
            ].map((src, i) => (
              <div
                key={src + i}
                className="reveal card-hover relative rounded-2xl overflow-hidden border border-[#e6ecff] shadow-sm aspect-[4/3] bg-white"
              >
                <img
                  src={src}
                  alt={`Arbaeen Program memory ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 dark-blue-bg relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-white text-3xl sm:text-4xl">Ready to plan your Arbaeen journey?</h3>
          <p className="mt-4 text-white/70">Talk to our team on WhatsApp — we'll guide you every step of the way.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={waLink(waMessages.guideMsg("Arbaeen Program"))}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb757] text-white text-xs font-semibold tracking-[0.2em] px-6 py-3.5 rounded-full"
            >
              <IconWhatsApp width={16} height={16} /> INQUIRE ON WHATSAPP
            </a>
            <button
              onClick={() => onNavigate("/")}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-[0.2em] px-6 py-3.5 rounded-full hover:bg-white/20 transition-colors"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
