import type { Pkg } from "../data/packages";
import { waLink, waMessages } from "../data/site";
import { IconWhatsApp, IconClock, IconPin, IconBed, IconCheck } from "./Icons";

export type PackageKind = "hajj" | "umrah" | "ziyarat" | "general";

export function PackageCard({ pkg, kind = "general" }: { pkg: Pkg; kind?: PackageKind }) {
  const message =
    kind === "hajj"
      ? waMessages.hajjMsg(pkg.name)
      : kind === "umrah"
        ? waMessages.umrahMsg(pkg.name)
        : kind === "ziyarat"
          ? waMessages.ziyaratMsg(pkg.name)
          : waMessages.packageMsg(pkg.name);

  return (
    <div className="reveal card-hover bg-white rounded-3xl overflow-hidden border border-[#e6ecff] shadow-[0_10px_30px_rgba(10,26,74,0.08)] flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a1f]/70 via-[#050a1f]/10 to-transparent" />
        {pkg.tag && (
          <span className="absolute top-4 left-4 bg-[#e5b968] text-[#0a1a4a] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">
            {pkg.tag.toUpperCase()}
          </span>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white/85 text-[11px] font-semibold tracking-[0.2em] uppercase">
            {pkg.duration}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="font-display text-[22px] leading-tight text-[#0a1a4a]">{pkg.name}</h3>

        <div className="mt-4 space-y-2.5 text-[13.5px] text-[#3a4a72]">
          {pkg.makkahHotel && <Row Icon={IconBed} label="Makkah">{pkg.makkahHotel}</Row>}
          {pkg.madinahHotel && <Row Icon={IconBed} label="Madinah">{pkg.madinahHotel}</Row>}
          {pkg.hotel && <Row Icon={IconBed} label="Hotels">{pkg.hotel}</Row>}
          <Row Icon={IconClock} label="Duration">{pkg.duration}</Row>
          <Row Icon={IconPin} label="Transport">{pkg.transport}</Row>
        </div>

        {pkg.services.length > 0 && (
          <ul className="mt-4 grid grid-cols-1 gap-1.5">
            {pkg.services.slice(0, 4).map((s) => (
              <li key={s} className="flex items-start gap-2 text-[13px] text-[#4a5a80]">
                <IconCheck width={14} height={14} className="text-[#2a55d6] mt-0.5 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 pt-5 border-t border-[#eef2fb] flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-[#8a95b8]">Price</div>
            <div className="text-[15px] font-semibold text-[#0a1a4a]">{pkg.price || "On Request"}</div>
          </div>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0f2467] to-[#2a55d6] text-white text-[11px] font-semibold tracking-[0.14em] px-3.5 py-2.5 rounded-full hover:from-[#2a55d6] hover:to-[#3aa8ff] transition-all shrink-0"
          >
            <IconWhatsApp width={14} height={14} />
            INQUIRE ON WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}

function Row({
  Icon,
  label,
  children,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon width={15} height={15} className="text-[#2a55d6] mt-0.5 shrink-0" />
      <div>
        <span className="text-[#0a1a4a] font-semibold">{label}: </span>
        <span>{children}</span>
      </div>
    </div>
  );
}
