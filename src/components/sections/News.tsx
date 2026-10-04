import {
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Search,
  Star,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import Container from "../common/Container";
import { news } from "../../data/news";
import { newsAdCampaigns } from "../../data/newsAds";
import { useLanguage } from "../../i18n/LanguageContext";
import type { NewsAdCampaign, NewsBrand, NewsItem } from "../../types";

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

const categorySearchAliases: Record<string, string[]> = {
  "Bất động sản": ["bds", "bat dong san", "real estate"],
  "Kinh tế": ["kinh te", "economy", "economic"],
  "Vận chuyển": ["van chuyen", "van tai", "logistics", "transport"],
};

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase();
}

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

function NewsAdCard({ campaign }: { campaign: NewsAdCampaign }) {
  const { t } = useLanguage();

  return (
    <article className="news-card news-ad-card">
      <a className="news-card-link news-ad-link" href={campaign.href}>
        <span className="news-ad-label">{t("Quảng cáo")}</span>
        <span className="news-ad-eyebrow">MATRIX HOLDING</span>
        <h3>{t(campaign.title)}</h3>
        <p>{t(campaign.description)}</p>
        <span className="news-ad-cta">
          {t(campaign.cta)}
          <ArrowUpRight size={18} aria-hidden="true" />
        </span>
      </a>
    </article>
  );
}

export default function News({ preview = false }: { preview?: boolean }) {
  const { t } = useLanguage();
  const newsSectionRef = useRef<HTMLElement>(null);
  const [selectedBrand, setSelectedBrand] =
    useState<(typeof newsFilters)[number]["id"]>("all");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");
  const [otherPage, setOtherPage] = useState(1);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(news.flatMap((item) => (item.category ? [item.category] : []))),
      ).sort((a, b) => t(a).localeCompare(t(b))),
    [t],
  );

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: news.length };
    news.forEach((item) => {
      result[item.brand] = (result[item.brand] ?? 0) + 1;
    });
    return result;
  }, []);

  const keyword = normalizeSearchText(query.trim());

  const visibleNews = useMemo(() => {
    return news.filter((item) => {
      const matchBrand = selectedBrand === "all" || item.brand === selectedBrand;
      const matchCategory =
        !selectedCategory || item.category === selectedCategory;
      const itemSearchText = normalizeSearchText(
        [t(item.title), t(item.description), t(item.category ?? ""), t(brandLabels[item.brand])]
          .join(" "),
      );
      const aliases = categorySearchAliases[item.category ?? ""] ?? [];
      const matchQuery =
        !keyword ||
        itemSearchText.includes(keyword) ||
        aliases.some((alias) => normalizeSearchText(alias).includes(keyword));
      return matchBrand && matchCategory && matchQuery;
    });
  }, [selectedBrand, selectedCategory, keyword, t]);

  const byDate = (a: NewsItem, b: NewsItem) =>
    b.publishedAt.localeCompare(a.publishedAt);

  const featuredNews = visibleNews.find((item) => item.featured);
  const sortedNews = visibleNews.filter((item) => !item.featured).sort(byDate);
  const [leadNews, ...sideNews] = sortedNews.slice(0, 3);
  const otherNews = sortedNews.slice(3);
  const otherPageCount = Math.ceil(otherNews.length / OTHER_PAGE_SIZE);
  const currentOtherPage = Math.min(otherPage, Math.max(1, otherPageCount));
  const activeAdCampaigns = newsAdCampaigns.filter((campaign) => campaign.enabled);
  const adCampaign =
    activeAdCampaigns.length > 0
      ? activeAdCampaigns[(currentOtherPage - 1) % activeAdCampaigns.length]
      : undefined;
  const pageNews = otherNews.slice(
    (currentOtherPage - 1) * OTHER_PAGE_SIZE,
    currentOtherPage * OTHER_PAGE_SIZE,
  );
  const previewNews = [...visibleNews].sort(byDate).slice(0, 3);

  const goToOtherPage = (page: number) => {
    setOtherPage(page);
    newsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={newsSectionRef} id="news" className="section news section-border">
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
                        setOtherPage(1);
                      }}
                    >
                      {t(filter.label)}
                      <em>{counts[filter.id] ?? 0}</em>
                    </button>
                  ))}
                </div>

                <div className="news-search-row">
                  <span className="news-search-label">{t("Tìm kiếm tin tức")}</span>
                  <div className="news-search-controls">
                    <select
                      className="news-category-select"
                      aria-label={t("Lọc theo danh mục")}
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setOtherPage(1);
                      }}
                    >
                      <option value="">{t("Tất cả danh mục")}</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {t(category)}
                        </option>
                      ))}
                    </select>
                    <div className="news-search">
                      <Search size={18} aria-hidden="true" />
                      <input
                        type="search"
                        value={query}
                        aria-label={t("Tìm kiếm tin tức")}
                        placeholder={t("Tìm theo tiêu đề hoặc nội dung...")}
                        onChange={(e) => {
                          setQuery(e.target.value);
                          setOtherPage(1);
                        }}
                      />
                      {query && (
                        <button
                          type="button"
                          aria-label={t("Xóa tìm kiếm")}
                          onClick={() => {
                            setQuery("");
                            setOtherPage(1);
                          }}
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
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
                    setSelectedCategory("");
                    setOtherPage(1);
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
                      {pageNews.slice(0, 3).map((item) => (
                        <NewsCard key={item.id} item={item} />
                      ))}
                      {pageNews.length >= 3 && adCampaign && (
                        <NewsAdCard campaign={adCampaign} />
                      )}
                      {pageNews.slice(3).map((item) => (
                        <NewsCard key={item.id} item={item} />
                      ))}
                    </div>
                    {otherPageCount > 1 && (
                      <nav className="news-pagination" aria-label={t("Phân trang tin tức")}>
                        <button
                          type="button"
                          className="news-pagination-arrow"
                          aria-label={t("Trang trước")}
                          disabled={currentOtherPage === 1}
                          onClick={() => goToOtherPage(currentOtherPage - 1)}
                        >
                          <ChevronLeft size={18} aria-hidden="true" />
                        </button>
                        {Array.from({ length: otherPageCount }, (_, index) => index + 1).map(
                          (page) => (
                            <button
                              key={page}
                              type="button"
                              className={`news-pagination-page${currentOtherPage === page ? " is-active" : ""}`}
                              aria-label={`${t("Chuyển đến trang")} ${page}`}
                              aria-current={currentOtherPage === page ? "page" : undefined}
                              onClick={() => goToOtherPage(page)}
                            >
                              {page}
                            </button>
                          ),
                        )}
                        <button
                          type="button"
                          className="news-pagination-arrow"
                          aria-label={t("Trang sau")}
                          disabled={currentOtherPage === otherPageCount}
                          onClick={() => goToOtherPage(currentOtherPage + 1)}
                        >
                          <ChevronRight size={18} aria-hidden="true" />
                        </button>
                      </nav>
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