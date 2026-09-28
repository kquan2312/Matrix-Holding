import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translate, type Language } from "./translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "vi"
        ? "Matrix Holding — Tập đoàn kinh doanh đa ngành"
        : "Matrix Holding — Diversified Business Group";
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description) {
      description.content =
        language === "vi"
          ? "Matrix Holding — Tập đoàn kinh doanh đa ngành."
          : "Matrix Holding — A diversified business group.";
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (text: string) => translate(text, language),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
