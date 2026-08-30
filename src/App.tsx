import { useEffect, useState } from "react";
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

function useRoute() {
  const [path, setPath] = useState<string>(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (p: string) => {
    window.history.pushState({}, "", p);
    setPath(p);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

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
    const id = path
      .replace("/arbaeen-program/", "")
      .replace("/albine-program/", "");
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
