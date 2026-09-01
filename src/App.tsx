import { useCallback, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { GuidesTrust } from "./components/GuidesTrust";
import {
  About,
  HajjSection,
  UmrahSection,
  ZiyaratSection,
  ArbaeenIntro,
  WhyUs,
  HowItWorks,
  ReviewsSection,
  FAQ,
  Contact,
  Footer,
  AvailablePackages,
} from "./components/Sections";
import { ArbaeenProgramPage } from "./pages/ArbaeenProgram";
import { GuideDetailPage } from "./pages/GuideDetail";
import { useReveal } from "./hooks/useReveal";

/**
 * Security: normalise an incoming pathname before it is used for routing.
 * Guards against protocol-relative / absolute URLs ("//evil.com"), backslash
 * tricks, encoded traversal and unbounded input. Internal navigation only —
 * anything that is not a same-origin relative path is rejected to "/".
 */
function sanitizePath(raw: string): string {
  if (typeof raw !== "string" || raw.length === 0) return "/";
  // Reject absurdly long paths outright (DoS / log-flooding guard).
  if (raw.length > 512) return "/";

  let p = raw;

  // Strip any query string or hash — routing uses the pathname only.
  p = p.split("?")[0].split("#")[0];

  // Normalise backslashes, which some browsers treat as "/".
  p = p.replace(/\\/g, "/");

  // Decode once so encoded traversal (%2e%2e%2f) is caught below.
  try {
    p = decodeURIComponent(p);
  } catch {
    return "/"; // malformed percent-encoding
  }

  // Must be a relative, same-origin path.
  if (!p.startsWith("/")) return "/";
  // Block protocol-relative / scheme-ish and traversal sequences.
  if (p.startsWith("//") || p.includes("..") || p.includes(":")) return "/";
  // Block control characters and whitespace injection.
  if (/[\u0000-\u001F\u007F\s]/.test(p)) return "/";

  // Collapse duplicate slashes and drop any trailing slash (except root).
  p = p.replace(/\/{2,}/g, "/");
  if (p.length > 1) p = p.replace(/\/+$/, "");

  return p || "/";
}

function useRoute() {
  const [path, setPath] = useState<string>(() =>
    typeof window !== "undefined" ? sanitizePath(window.location.pathname) : "/"
  );

  useEffect(() => {
    const onPop = () => setPath(sanitizePath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((p: string) => {
    const safe = sanitizePath(p);
    window.history.pushState({}, "", safe);
    setPath(safe);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return { path, navigate };
}

function Home({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <>
      {/* 01 HOME */}
      <Hero />

      {/* AVAILABLE PACKAGES (FLYERS) — right after landing page */}
      <AvailablePackages />

      <About />
      
      {/* FIRST SECTION — ZIYARAT */}
      <ZiyaratSection />
      
      {/* SECOND SECTION — UMRAH & MADINAH */}
      <UmrahSection />

      {/* 05 HAJJ */}
      <HajjSection />

      {/* 04 ARBAEEN PROGRAM */}
      <ArbaeenIntro onNavigate={onNavigate} />
      <GuidesTrust onNavigate={onNavigate} />
      
      {/* Remaining sections in original sequence */}
      <WhyUs />
      <HowItWorks />
      <ReviewsSection />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  const { path, navigate } = useRoute();
  useReveal();

  // Re-run reveal on route change
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    els.forEach((el) => el.classList.remove("in"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  // Redirect legacy /albine-program URLs
  useEffect(() => {
    if (path === "/albine-program") {
      navigate("/arbaeen-program");
    } else if (path.startsWith("/albine-program/")) {
      navigate(path.replace("/albine-program/", "/arbaeen-program/"));
    }
  }, [path, navigate]);

  let page: React.ReactNode;
  if (path === "/" || path === "") {
    page = <Home onNavigate={navigate} />;
  } else if (path === "/arbaeen-program" || path === "/albine-program") {
    page = <ArbaeenProgramPage onNavigate={navigate} />;
  } else if (path.startsWith("/arbaeen-program/") || path.startsWith("/albine-program/")) {
    const rawId = path
      .replace("/arbaeen-program/", "")
      .replace("/albine-program/", "");
    // Security: only allow a simple slug (letters, digits, hyphen, underscore)
    // and a sane length. Anything else is treated as "not found" by the page.
    const id = /^[a-zA-Z0-9_-]{1,64}$/.test(rawId) ? rawId : "";
    page = <GuideDetailPage id={id} onNavigate={navigate} />;
  } else {
    page = <Home onNavigate={navigate} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={navigate} />
      <main>{page}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
