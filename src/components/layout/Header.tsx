import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import type { Language } from "../../i18n/translations";

const navItems = [
  {
    label: "Giới thiệu",
    href: "#about",
  },
  {
    label: "Lĩnh vực",
    href: "#business",
  },
  {
    label: "Dự án",
    href: "#projects",
  },
  {
    label: "Năng lực",
    href: "#capabilities",
  },
  {
    label: "Tin tức",
    href: "#news",
  },
  {
    label: "Tuyển dụng",
    href: "#careers",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${id}`);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`site-header ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="container header-inner">
          <a
            href="#"
            className="brand"
            onClick={closeMenu}
            aria-label="Matrix Holding - Trang chủ"
          >
            <img className="brand-icon" src="/icons/favicon.png" alt="" />
            <span className="brand-wordmark">
              <span className="brand-main">MATRIX</span>
              <span className="brand-sub">HOLDING</span>
            </span>
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href ? "is-active" : ""}
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="#contact"
              className={`header-contact ${activeSection === "#contact" ? "is-active" : ""}`}
            >
              <span>{t("Liên hệ")}</span>
              <ArrowUpRight size={16} />
            </a>

            <LanguageSwitch
              language={language}
              setLanguage={setLanguage}
            />

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label={t("Mở menu")}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${
          menuOpen ? "is-open" : ""
        }`}
      >
        <div className="mobile-menu-header">
          <a
            href="#"
            className="brand"
            onClick={closeMenu}
            aria-label="Matrix Holding - Trang chủ"
          >
            <img className="brand-icon" src="/icons/favicon.png" alt="" />
            <span className="brand-wordmark">
              <span className="brand-main">MATRIX</span>
              <span className="brand-sub">HOLDING</span>
            </span>
          </a>

          <LanguageSwitch
            language={language}
            setLanguage={setLanguage}
          />

          <button
            type="button"
            onClick={closeMenu}
            aria-label={t("Đóng menu")}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href ? "is-active" : ""}
              onClick={closeMenu}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              {t(item.label)}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
          >
            <span>{String(navItems.length + 1).padStart(2, "0")}</span>
            {t("Liên hệ")}
          </a>
        </nav>

        <div className="mobile-menu-footer">
          <span>
            MATRIX HOLDING
          </span>

          <span>
            {t("TẬP ĐOÀN KINH DOANH ĐA NGÀNH")}
          </span>
        </div>

      </div>
    </>
  );
}

function LanguageSwitch({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div
      className="language-switch"
      role="group"
      aria-label={language === "vi" ? "Chọn ngôn ngữ" : "Select language"}
    >
      {(["vi", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          className={language === option ? "is-active" : ""}
          aria-pressed={language === option}
          aria-label={option === "vi" ? "Tiếng Việt" : "English"}
          onClick={() => setLanguage(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}