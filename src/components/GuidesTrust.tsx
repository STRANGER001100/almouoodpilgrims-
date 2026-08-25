import { guides } from "../data/guides";
import { IconArrowRight, IconCheck } from "./Icons";

/**
 * Guides You Can Trust — showing ONE centered guide card (Arbaeen Program).
 * No dummy content, no empty grid gaps — the card is centered on the page.
 */
export function GuidesTrust({ onNavigate }: { onNavigate: (path: string) => void }) {
  const guide = guides[0]; // Arbaeen Program

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center gap-3 justify-center">
            <span className="h-px w-8 bg-[#c58e2f]" />
            <span className="text-[12px] font-semibold tracking-[0.28em] text-[#c58e2f]">ARBAEEN PROGRAM</span>
            <span className="h-px w-8 bg-[#c58e2f]" />
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#0a1a4a]">
            Guides You Can Trust
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4a5a80]">
            Meet the programs designed by Al-Mo'uood Pilgrims to prepare, guide and support you throughout
            your sacred Arbaeen journey to Karbala.
          </p>
        </div>

        {/* Centered single card */}
        <div className="flex justify-center">
          <div className="reveal w-full max-w-md card-hover bg-white rounded-3xl overflow-hidden border border-[#e6ecff] shadow-[0_20px_60px_rgba(10,26,74,0.15)]">
            {/* Image with overlay name */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={guide.image}
                alt={guide.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a1f] via-[#050a1f]/30 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <div className="text-[#e5b968] text-[11px] font-semibold tracking-[0.28em]">FEATURED PROGRAM</div>
                <div className="font-display text-white text-3xl mt-1">{guide.name}</div>
              </div>
            </div>

            {/* Body */}
            <div className="p-7">
              <div className="text-[12px] uppercase tracking-widest text-[#2a55d6] font-semibold">
                {guide.role}
              </div>
              <p className="mt-3 text-[14.5px] text-[#4a5a80] leading-relaxed">
                {guide.shortDescription}
              </p>

              <ul className="mt-5 space-y-2">
                {guide.specialties.slice(0, 3).map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[13.5px] text-[#3a4a72]">
                    <IconCheck width={15} height={15} className="text-[#2a55d6] mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onNavigate("/arbaeen-program/" + guide.id)}
                className="mt-6 w-full btn-glow inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0f2467] to-[#2a55d6] text-white text-xs font-semibold tracking-[0.2em] px-6 py-3.5 rounded-full"
              >
                VIEW GUIDE <IconArrowRight width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
