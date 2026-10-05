import type { ComponentType } from "react";
import { Analytics } from "@vercel/analytics/react";
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

  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const route = pathname === "/index.html" ? "/" : pathname;
  const isNewsArticleRoute = /^\/tin-tuc\/[^/]+$/.test(route);
  const isEcosystemBrandRoute = /^\/he-sinh-thai\/[^/]+$/.test(route);
  const Page = isNewsArticleRoute
    ? NewsArticlePage
    : isEcosystemBrandRoute
      ? EcosystemBrandPage
      : pages[route] ?? Home;

  return (
    <>
      <Header />
      <main className={route === "/lien-he" ? "page-main contact-page" : "page-main"}>
        <Page />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}