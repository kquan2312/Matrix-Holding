import { ArrowUpRight, CalendarDays, Search, Star, X } from "lucide-react";
import { useMemo, useState } from "react";
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

const OTHER_PAGE_SIZE = 6;

type CardVariant = "default" | "featured" | "compact" | "lead";

function NewsCard({
  item,
  variant = "default",
}: {
  item: NewsItem;
  variant?: CardVariant;
}) {
  const { t } = useLanguage();

  return (
    <article className={`news-card news-card-${variant}`} data-brand={item.brand}>
      <a className="news-card-link" href={`/tin-tuc/${item.slug}`}>
        <div className="news-image">
          <img src={item.image} alt={t(item.title)} loading="lazy" />
          <span className={`news-brand news-brand-${item.brand} news-brand-float`}>
            {t(brandLabels[item.brand])}
          </span>
          {variant === "featured" && (
            <span className="news-featured-badge">
              <Star size={13} aria-hidden="true" />
              {t("Nổi bật")}
            </span>
          )}
        </div>

        <div className="news-info">
          <div className="news-meta">
            <span className="news-date">
              <CalendarDays size={13} aria-hidden="true" />
              {item.date}
            </span>
          </div>

          <h3>{t(item.title)}</h3>
          {variant !== "compact" && <p>{t(item.description)}</p>}

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
  const [query, setQuery] = useState("");
  const [otherLimit, setOtherLimit] = useState(OTHER_PAGE_SIZE);

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: news.length };
    news.forEach((item) => {
      result[item.brand] = (result[item.brand] ?? 0) + 1;
    });
    return result;
  }, []);

  const keyword = query.trim().toLowerCase();

  const visibleNews = useMemo(() => {
    return news.filter((item) => {
      const matchBrand = selectedBrand === "all" || item.brand === selectedBrand;
      const matchQuery =
        !keyword ||
        t(item.title).toLowerCase().includes(keyword) ||
        t(item.description).toLowerCase().includes(keyword);
      return matchBrand && matchQuery;
    });
  }, [selectedBrand, keyword, t]);

  const byDate = (a: NewsItem, b: NewsItem) =>
    b.publishedAt.localeCompare(a.publishedAt);

  const featuredNews = visibleNews.find((item) => item.featured);
  const sortedNews = visibleNews.filter((item) => !item.featured).sort(byDate);
  const [leadNews, ...sideNews] = sortedNews.slice(0, 3);
  const otherNews = sortedNews.slice(3);
  const previewNews = [...visibleNews].sort(byDate).slice(0, 3);

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
          <p>{t("Cập nhật những thông tin, hoạt động và dấu mốc mới nhất.")}</p>
        </div>

        {news.length > 0 ? (
          <>
            {!preview && (
              <div className="news-toolbar">
                <div className="news-filters" role="group" aria-label={t("Lọc tin tức theo thương hiệu")}>
                  {newsFilters.map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      className={`news-filter${selectedBrand === filter.id ? " is-active" : ""}`}
                      aria-pressed={selectedBrand === filter.id}
                      onClick={() => {
                        setSelectedBrand(filter.id);
                        setOtherLimit(OTHER_PAGE_SIZE);
                      }}
                    >
                      {t(filter.label)}
                      <em>{counts[filter.id] ?? 0}</em>
                    </button>
                  ))}
                </div>

                <label className="news-search">
                  <Search size={16} aria-hidden="true" />
                  <input
                    type="search"
                    value={query}
                    placeholder={t("Tìm kiếm tin tức...")}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setOtherLimit(OTHER_PAGE_SIZE);
                    }}
                  />
                  {query && (
                    <button type="button" aria-label={t("Xóa tìm kiếm")} onClick={() => setQuery("")}>
                      <X size={14} />
                    </button>
                  )}
                </label>
              </div>
            )}

            {preview ? (
              <div className="news-grid news-preview-grid" aria-live="polite">
                {previewNews.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            ) : visibleNews.length === 0 ? (
              <div className="news-empty">
                <Search size={28} aria-hidden="true" />
                <h3>{t("Không tìm thấy tin phù hợp")}</h3>
                <p>{t("Hãy thử từ khóa khác hoặc chọn thương hiệu khác.")}</p>
                <button
                  type="button"
                  className="news-filter is-active"
                  onClick={() => {
                    setQuery("");
                    setSelectedBrand("all");
                  }}
                >
                  {t("Xóa bộ lọc")}
                </button>
              </div>
            ) : (
              <div className="news-groups" aria-live="polite">
                {featuredNews && (
                  <section className="news-group" aria-labelledby="news-featured">
                    <h3 className="news-group-heading" id="news-featured">
                      {t("Tin tức nổi bật")}
                    </h3>
                    <NewsCard item={featuredNews} variant="featured" />
                  </section>
                )}

                {leadNews && (
                  <section className="news-group" aria-labelledby="news-latest">
                    <h3 className="news-group-heading" id="news-latest">
                      {t("Tin tức mới nhất")}
                    </h3>
                    <div className="news-magazine">
                      <NewsCard item={leadNews} variant="lead" />
                      {sideNews.length > 0 && (
                        <div className="news-side-list">
                          {sideNews.map((item) => (
                            <NewsCard key={item.id} item={item} variant="compact" />
                          ))}
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {otherNews.length > 0 && (
                  <section className="news-group" aria-labelledby="news-other">
                    <h3 className="news-group-heading" id="news-other">
                      {t("Tin tức khác")}
                    </h3>
                    <div className="news-grid">
                      {otherNews.slice(0, otherLimit).map((item) => (
                        <NewsCard key={item.id} item={item} />
                      ))}
                    </div>
                    {otherLimit < otherNews.length && (
                      <div className="news-load-more">
                        <button
                          type="button"
                          onClick={() => setOtherLimit((n) => n + OTHER_PAGE_SIZE)}
                        >
                          {t("Xem thêm tin")}
                          <span>{otherNews.length - otherLimit}</span>
                        </button>
                      </div>
                    )}
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
              <p>{t("Những câu chuyện mới nhất về Matrix Holding sẽ được cập nhật.")}</p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}