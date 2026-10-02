import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Container from "../common/Container";
import { news } from "../../data/news";
import { useLanguage } from "../../i18n/LanguageContext";
import type { NewsBrand, NewsItem } from "../../types";

const newsFilters = [
  { id: "all", label: "Tất cả tin" },
  { id: "network", label: "Matrix Network" },
  { id: "connect", label: "Matrix Connect" },
  { id: "ventures", label: "Matrix Ventures" },
  { id: "academy", label: "Matrix Academy" },
] as const;

const brandLabels: Record<NewsBrand, string> = {
  network: "Matrix Network",
  connect: "Matrix Connect",
  ventures: "Matrix Ventures",
  academy: "Matrix Academy",
};

function NewsCard({
  item,
  featured = false,
}: {
  item: NewsItem;
  featured?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <article className={`news-card${featured ? " news-card-featured" : ""}`}>
      <a className="news-card-link" href={`/tin-tuc/${item.slug}`}>
        <div className="news-image">
          <img src={item.image} alt={t(item.title)} />
        </div>

        <div className="news-info">
          <div className="news-meta">
            <span>{item.date}</span>
            <span className={`news-brand news-brand-${item.brand}`}>
              {t(brandLabels[item.brand])}
            </span>
          </div>

          <h3>{t(item.title)}</h3>
          <p>{t(item.description)}</p>

          <span className="news-read-more">
            {t("Xem chi tiết")}
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}

export default function News({ preview = false }: { preview?: boolean }) {
  const { t } = useLanguage();
  const [selectedBrand, setSelectedBrand] =
    useState<(typeof newsFilters)[number]["id"]>("all");
  const visibleNews =
    selectedBrand === "all"
      ? news
      : news.filter((item) => item.brand === selectedBrand);
  const featuredNews = visibleNews.find((item) => item.featured);
  const sortedNews = visibleNews
    .filter((item) => !item.featured)
    .sort((first, second) =>
      second.publishedAt.localeCompare(first.publishedAt),
    );
  const latestNews = sortedNews.slice(0, 3);
  const otherNews = sortedNews.slice(3);
  const previewNews = [...visibleNews]
    .sort((first, second) =>
      second.publishedAt.localeCompare(first.publishedAt),
    )
    .slice(0, 3);

  return (
    <section id="news" className="section news section-border">
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
            {!preview && (
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
            )}

            {preview ? (
              <div className="news-grid news-preview-grid" aria-live="polite">
                {previewNews.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="news-groups" aria-live="polite">
                {featuredNews && (
                  <section className="news-group" aria-labelledby="news-featured">
                    <h3 className="news-group-heading" id="news-featured">
                      {t("Tin tức nổi bật")}
                    </h3>
                    <div className="news-grid news-grid-featured">
                      <NewsCard item={featuredNews} featured />
                    </div>
                  </section>
                )}

                {latestNews.length > 0 && (
                  <section className="news-group" aria-labelledby="news-latest">
                    <h3 className="news-group-heading" id="news-latest">
                      {t("Tin tức mới nhất")}
                    </h3>
                    <div className="news-grid">
                      {latestNews.map((item) => (
                        <NewsCard key={item.id} item={item} />
                      ))}
                    </div>
                  </section>
                )}

                {otherNews.length > 0 && (
                  <section className="news-group" aria-labelledby="news-other">
                    <h3 className="news-group-heading" id="news-other">
                      {t("Tin tức khác")}
                    </h3>
                    <div className="news-grid">
                      {otherNews.map((item) => (
                        <NewsCard key={item.id} item={item} />
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
            {preview && (
              <a className="news-view-all" href="/tin-tuc">
                {t("Xem tất cả")}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            )}
          </>
        ) : (
          <div className="news-placeholder">
            <span>01</span>

            <div>
              <h3>{t("Tin tức & hoạt động")}</h3>
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
