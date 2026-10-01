import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Container from "../common/Container";
import { news } from "../../data/news";
import { useLanguage } from "../../i18n/LanguageContext";
import type { NewsBrand } from "../../types";

const newsFilters = [
  { id: "all", label: "Tất cả tin" },
  { id: "network", label: "Matrix Network" },
  { id: "community", label: "Matrix Community" },
  { id: "capital", label: "Matrix Capital" },
] as const;

const brandLabels: Record<NewsBrand, string> = {
  network: "Matrix Network",
  community: "Matrix Community",
  capital: "Matrix Capital",
};

export default function News() {
  const { t } = useLanguage();
  const [selectedBrand, setSelectedBrand] =
    useState<(typeof newsFilters)[number]["id"]>("all");
  const visibleNews =
    selectedBrand === "all"
      ? news
      : news.filter((item) => item.brand === selectedBrand);

  return (
    <section
      id="news"
      className="section news section-border"
    >
      <Container>
        <div className="section-label">
          <span>01</span>
          <span>{t("Tin tức & hoạt động")}</span>
        </div>

        <div className="news-heading">
          <h2>
            {t("Câu chuyện")}
            <br />
            {t("Matrix Holding.")}
          </h2>

          <p>
            {t("Cập nhật những thông tin, hoạt động và dấu mốc mới nhất.")}
          </p>
        </div>

        {news.length > 0 ? (
          <>
            <div
              className="news-filters"
              role="group"
              aria-label={t("Lọc tin tức theo thương hiệu")}
            >
              {newsFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`news-filter${selectedBrand === filter.id ? " is-active" : ""}`}
                  aria-pressed={selectedBrand === filter.id}
                  onClick={() => setSelectedBrand(filter.id)}
                >
                  {t(filter.label)}
                </button>
              ))}
            </div>
            <div className="news-grid" aria-live="polite">
              {visibleNews.map((item) => (
                <article
                  className="news-card"
                  key={item.id}
                >
                  <div className="news-image">
                    <img
                      src={item.image}
                      alt={t(item.title)}
                    />
                  </div>

                  <div className="news-info">
                    <div className="news-meta">
                      <span>{item.date}</span>
                      <span className={`news-brand news-brand-${item.brand}`}>
                        {t(brandLabels[item.brand])}
                      </span>
                    </div>

                    <h3>
                      {t(item.title)}
                    </h3>

                    <p>
                      {t(item.description)}
                    </p>

                    <ArrowUpRight size={20} />
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="news-placeholder">
            <span>01</span>

            <div>
              <h3>
                {t("Tin tức & hoạt động")}
              </h3>

              <p>
                {t("Những câu chuyện mới nhất về Matrix Holding sẽ được cập nhật.")}
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}