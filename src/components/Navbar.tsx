import { useEffect, useState } from "react";
import { site, waMessages, waLink } from "../data/site";
import { IconPhone, IconMenu, IconClose } from "./Icons";

type NavLink = {
  href: string;
  label: string;
  route?: string;
};

const links: NavLink[] = [
  { href: "#home", label: "HOME" },
  { href: "#umrah", label: "UMRAH" },
  { href: "#ziyarat", label: "ZIYARAT" },
  { href: "#arbaeen", label: "ARBAEEN", route: "/arbaeen-program" },
  { href: "#hajj", label: "HAJJ" },
  { href: "#why", label: "WHY US" },
  { href: "#reviews", label: "REVIEWS" },
  { href: "#contact", label: "CONTACT" },
];

export function Navbar({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (l: NavLink) => {
    setOpen(false);

    // Dedicated page route (Arbaeen Program)
    if (l.route && onNavigate) {
      onNavigate(l.route);
      return;
    }

    if (l.href.startsWith("#")) {
      const id = l.href.slice(1);
      if (window.location.pathname !== "/" && onNavigate) {
        onNavigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (scrolled || open ? "nav-glass py-2" : "bg-transparent py-3")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== "/" && onNavigate) onNavigate("/");
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group shrink-0"
        >
          <img
            src={site.logo}
            alt="Al-Mo'uood Pilgrims logo"
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover ring-1 ring-white/20"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-display text-[15px] tracking-wide">AL-MO'UOOD</span>
            <span className="text-[#6dc4ff] text-[10px] font-semibold tracking-[0.22em]">PILGRIMS</span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden xl:flex items-center gap-5 text-[12.5px] font-medium tracking-[0.14em] text-white/85">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleLink(l)}
              className="hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#6dc4ff] hover:after:w-full after:transition-all"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={"tel:" + site.phonePKRaw}
            className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium"
          >
            <IconPhone width={16} height={16} />
            <span>{site.phonePK}</span>
          </a>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow bg-gradient-to-r from-[#2a55d6] to-[#3aa8ff] text-white text-xs font-semibold tracking-widest px-5 py-3 rounded-full"
          >
            BOOK YOUR JOURNEY
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <IconClose width={24} height={24} /> : <IconMenu width={24} height={24} />}
        </button>

        {/* Tablet toggle */}
        <button
          className="hidden md:inline-flex xl:hidden text-white p-2 ml-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <IconClose width={22} height={22} /> : <IconMenu width={22} height={22} />}
        </button>
      </div>

      {/* Mobile / tablet drawer */}
      {open && (
        <div className="xl:hidden nav-glass mt-2 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleLink(l)}
                className="text-left text-white/90 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 text-sm tracking-[0.14em]"
              >
                {l.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/10">
              <a
                href={"tel:" + site.phonePKRaw}
                className="flex items-center gap-2 text-white/90 px-3 py-2 text-sm"
              >
                <IconPhone width={16} height={16} /> {site.phonePK}
              </a>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow bg-gradient-to-r from-[#2a55d6] to-[#3aa8ff] text-white text-xs font-semibold tracking-widest px-5 py-3 rounded-full text-center"
              >
                BOOK YOUR JOURNEY
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
