import { site, waMessages, waLink, telLink } from "../data/site";
import { IconPhone, IconWhatsApp, IconArrowRight, IconShield, IconBed, IconSupport, IconTag } from "./Icons";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 lg:pt-28">
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient" />
      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-40" />

      {/* Kaaba image right side */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-full w-full lg:w-[62%]">
          <img
            src="/images/kaaba-hero.jpg"
            alt="Kaaba at Masjid al-Haram, Makkah"
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-right hero-image-mask opacity-90"
          />
        </div>
        {/* Left fade */}
        <div className="absolute inset-0 hero-fade-right" />
        {/* Glow blob */}
        <div className="absolute right-10 top-24 w-[420px] h-[420px] rounded-full bg-[#3aa8ff]/25 blur-[120px]" />
        <div className="absolute left-[-100px] bottom-[-80px] w-[420px] h-[420px] rounded-full bg-[#1c3fb0]/40 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-40 lg:pt-16 lg:pb-56">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="h-px w-8 bg-[#d4a24a]" />
            <span className="text-[#e5b968] text-xs sm:text-[13px] font-semibold tracking-[0.28em]">
              {site.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-white text-[38px] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.05] font-semibold reveal">
            Devoted to Your <br className="hidden sm:block" />
            Spiritual Journey <br className="hidden sm:block" />
            Towards the{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#6dc4ff] via-[#3aa8ff] to-[#6dc4ff]">
              Holy Lands
            </span>
          </h1>

          {/* Sub */}
          <p className="mt-6 text-white/80 text-base sm:text-lg max-w-xl reveal">
            Your trusted travel partner for <span className="text-white">Hajj, Umrah &amp; Ziyarat</span>.
            Comfortable stays, personal guidance and complete peace of mind — serving pilgrims from all over the world.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3 reveal">
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-[#2a55d6] to-[#3aa8ff] text-white text-xs sm:text-sm font-semibold tracking-[0.2em] px-6 sm:px-7 py-3.5 rounded-full"
            >
              BOOK YOUR JOURNEY
              <IconArrowRight width={16} height={16} />
            </a>
            <a
              href={telLink(site.phonePKRaw)}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold tracking-[0.2em] px-6 sm:px-7 py-3.5 rounded-full transition-colors"
            >
              <IconPhone width={16} height={16} />
              CALL NOW
            </a>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold tracking-[0.2em] px-6 sm:px-7 py-3.5 rounded-full transition-colors"
            >
              <IconWhatsApp width={16} height={16} className="text-[#25D366]" />
              WHATSAPP
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/70 text-xs sm:text-sm reveal">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6dc4ff]" />
              Hajj &amp; Umrah
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6dc4ff]" />
              Ziyarat Iraq, Iran &amp; Syria
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6dc4ff]" />
              Arbaeen Program
            </div>
          </div>
        </div>
      </div>

      {/* Floating Trust Card */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 lg:-mt-36 pb-16 lg:pb-20 z-10">
        <div className="bg-white rounded-3xl shadow-[0_25px_80px_rgba(5,10,31,0.35)] border border-[#e6ecff] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2 p-6 md:p-8">
          <TrustCol Icon={IconShield} title="TRUSTED & RELIABLE" sub="Years of Experience" />
          <TrustCol Icon={IconBed} title="COMFORTABLE STAYS" sub="Handpicked Hotels" />
          <TrustCol Icon={IconSupport} title="24/7 SUPPORT" sub="Always With You" />
          <TrustCol Icon={IconTag} title="BEST PACKAGES" sub="Affordable & Flexible" />
        </div>
      </div>

      {/* Fixed WhatsApp bubble */}
      <a
        href={waLink(waMessages.general)}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#1eb757] text-white rounded-full p-3.5 shadow-2xl transition-colors"
      >
        <IconWhatsApp width={26} height={26} />
      </a>
    </section>
  );
}

function TrustCol({
  Icon,
  title,
  sub,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-4 md:justify-center md:text-left px-1 md:px-4 border-r-0 md:[&:not(:last-child)]:border-r md:border-[#e6ecff]">
      <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#eaf2ff] to-[#dbe7ff] text-[#1c3fb0] flex items-center justify-center">
        <Icon width={22} height={22} />
      </div>
      <div>
        <div className="text-[11px] sm:text-[12px] font-bold tracking-[0.14em] text-[#0a1a4a]">{title}</div>
        <div className="text-[11px] sm:text-[12px] text-[#5a6a8a] mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
