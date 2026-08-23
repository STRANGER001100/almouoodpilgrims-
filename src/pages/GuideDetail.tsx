import { guides } from "../data/guides";
import { site, waLink, waMessages, telLink } from "../data/site";
import { IconArrowRight, IconCheck, IconWhatsApp, IconPhone } from "../components/Icons";

export function GuideDetailPage({ id, onNavigate }: { id: string; onNavigate: (path: string) => void }) {
  const guide = guides.find((g) => g.id === id);

  if (!guide) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white text-[#0a1a4a] px-4">
        <h1 className="font-display text-3xl">Guide not found</h1>
        <p className="mt-2 text-[#5a6a8a]">The guide you're looking for isn't available right now.</p>
        <button
          onClick={() => onNavigate("/arbaeen-program")}
          className="mt-6 bg-gradient-to-r from-[#2a55d6] to-[#3aa8ff] text-white text-xs font-semibold tracking-widest px-6 py-3 rounded-full"
        >
          BACK TO ARBAEEN PROGRAM
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative dark-blue-bg overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 islamic-pattern opacity-40" />
        <div className="ambient-dots absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate("/arbaeen-program")}
            className="text-white/70 hover:text-white text-xs tracking-widest mb-6 inline-flex items-center gap-2"
          >
            ← BACK TO ARBAEEN PROGRAM
          </button>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#3aa8ff]/25 to-[#1c3fb0]/40 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={guide.image} alt={guide.name} className="w-full h-[520px] object-cover" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#e5b968]" />
                <span className="text-[#e5b968] text-[12px] font-semibold tracking-[0.28em]">FEATURED PROGRAM</span>
              </div>
              <h1 className="mt-4 font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
                {guide.name}
              </h1>
              <div className="mt-3 text-[#6dc4ff] text-[13px] font-semibold tracking-[0.2em] uppercase">
                {guide.role}
              </div>
              <p className="mt-5 text-white/80 text-base sm:text-lg leading-relaxed">{guide.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/85 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6dc4ff]" />
                {guide.experience}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={waLink(waMessages.guideMsg(guide.name))}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb757] text-white text-xs font-semibold tracking-[0.2em] px-6 py-3.5 rounded-full"
                >
                  <IconWhatsApp width={14} height={14} /> INQUIRE ON WHATSAPP
                </a>
                <a
                  href={telLink(site.phonePKRaw)}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/15 hover:bg-white/20 text-white text-xs font-semibold tracking-[0.2em] px-6 py-3.5 rounded-full transition-colors"
                >
                  <IconPhone width={14} height={14} /> CALL {site.phonePK}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-[#0a1a4a] text-3xl sm:text-4xl">What this Program Covers</h2>
          <p className="mt-3 text-[#5a6a8a] max-w-2xl">
            Complete support and guidance across every stage of your Arbaeen journey to Karbala.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {guide.specialties.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-[#f7f9ff] border border-[#e6ecff] rounded-xl px-4 py-3">
                <IconCheck width={16} height={16} className="text-[#2a55d6] mt-1 shrink-0" />
                <span className="text-[14.5px] text-[#3a4a72]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides You Can Follow */}
      {guide.gallery && guide.gallery.length > 0 && (
        <section className="py-16 bg-[#f7f9ff]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="flex items-center gap-3 justify-center">
                <span className="h-px w-8 bg-[#c58e2f]" />
                <span className="text-[12px] font-semibold tracking-[0.28em] text-[#c58e2f]">GUIDES</span>
                <span className="h-px w-8 bg-[#c58e2f]" />
              </div>
              <h2 className="mt-4 font-display text-[#0a1a4a] text-3xl sm:text-4xl">Guides You Can Follow</h2>
              <p className="mt-3 text-[#5a6a8a] max-w-2xl mx-auto">
                Trusted guidance for every step of your Arbaeen journey — the walk, the mokabs and the spirit of devotion to Imam Hussain (a.s).
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {guide.gallery.map((src, i) => (
                <div
                  key={src + i}
                  className="reveal card-hover relative rounded-2xl overflow-hidden border border-[#e6ecff] shadow-sm aspect-[3/4] bg-white"
                >
                  <img
                    src={src}
                    alt={`${guide.name} — guide ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 dark-blue-bg relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-white text-3xl sm:text-4xl">Walk with us. Walk for Hussain (a.s).</h3>
          <p className="mt-4 text-white/70">
            Send us a message and our team will personally help you plan your Arbaeen.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={waLink(waMessages.guideMsg(guide.name))}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-[#2a55d6] to-[#3aa8ff] text-white text-xs font-semibold tracking-[0.2em] px-6 py-3.5 rounded-full"
            >
              BOOK YOUR JOURNEY <IconArrowRight width={14} height={14} />
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
