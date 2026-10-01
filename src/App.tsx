import type { ComponentType } from "react";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import EcosystemPage from "./pages/EcosystemPage";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import useScrollReveal from "./hooks/useScrollReveal";

const pages: Record<string, ComponentType> = {
  "/": Home,
  "/tin-tuc": NewsPage,
  "/tuyen-dung": CareersPage,
  "/lien-he": ContactPage,
  "/he-sinh-thai": EcosystemPage,
};

export default function App() {
  useScrollReveal();

  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const route = pathname === "/index.html" ? "/" : pathname;
  const Page = pages[route] ?? Home;

  return (
    <>
      <Header />
      <main className={route === "/lien-he" ? "page-main contact-page" : "page-main"}>
        <Page />
      </main>
      <Footer />
    </>
  );
}