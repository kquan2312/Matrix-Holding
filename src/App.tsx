import { ArrowUp } from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import EcosystemPage from "./pages/EcosystemPage";
import EcosystemBrandPage from "./pages/EcosystemBrandPage";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import NewsArticlePage from "./pages/NewsArticlePage";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import useScrollReveal from "./hooks/useScrollReveal";
import { useLanguage } from "./i18n/LanguageContext";

const pages: Record<string, ComponentType> = {
  "/": Home,
  "/gioi-thieu": AboutPage,
  "/tin-tuc": NewsPage,
  "/tuyen-dung": CareersPage,
  "/lien-he": ContactPage,
  "/he-sinh-thai": EcosystemPage,
};

export default function App() {
  useScrollReveal();
  const { t } = useLanguage();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const route = pathname === "/index.html" ? "/" : pathname;
  const isNewsArticleRoute = /^\/tin-tuc\/[^/]+$/.test(route);
  const isEcosystemBrandRoute = /^\/he-sinh-thai\/[^/]+$/.test(route);
  const Page = isNewsArticleRoute
    ? NewsArticlePage
    : isEcosystemBrandRoute
      ? EcosystemBrandPage
      : pages[route] ?? Home;

  useEffect(() => {
    if (window.location.hash !== "#partners") {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById("partners")?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  useEffect(() => {
    const updateScrollButton = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    updateScrollButton();
    window.addEventListener("scroll", updateScrollButton, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollButton);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <Header />
      <main className={route === "/lien-he" ? "page-main contact-page" : "page-main"}>
        <Page />
      </main>
      <Footer />
      <button
        type="button"
        className={`scroll-to-top${showScrollToTop ? " is-visible" : ""}`}
        aria-label={t("Lên đầu trang")}
        onClick={scrollToTop}
        tabIndex={showScrollToTop ? 0 : -1}
        aria-hidden={!showScrollToTop}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </>
  );
}