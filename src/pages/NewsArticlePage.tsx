import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "../components/common/Container";
import NewsArticleFeedback from "../components/sections/NewsArticleFeedback";
import { news } from "../data/news";
import { useLanguage } from "../i18n/LanguageContext";
import type { NewsBrand } from "../types";

const brandLabels: Record<NewsBrand, string> = {
  network: "Matrix Network",
  connect: "Matrix Connect",
  ventures: "Matrix Ventures",
  academy: "Matrix Academy",
};

export default function NewsArticlePage() {
  const { language, t } = useLanguage();
  const slug = window.location.pathname.replace(/\/+$/, "").split("/").pop();
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="section news-detail section-border">
        <Container>
          <div className="news-detail-not-found">
            <span className="section-label">
              <span>01</span>
              <span>{t("Tin tức & hoạt động")}</span>
            </span>
            <h1>{t("Không tìm thấy tin tức")}</h1>
            <p>{t("Bài viết có thể đã được gỡ bỏ hoặc đường dẫn không chính xác.")}</p>
            <a className="news-detail-back" href="/tin-tuc">
              <ArrowLeft size={18} aria-hidden="true" />
              {t("Quay lại tin tức")}
            </a>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="section news-detail section-border">
      <Container>
        <a className="news-detail-back" href="/tin-tuc">
          <ArrowLeft size={18} aria-hidden="true" />
          {t("Quay lại tin tức")}
        </a>

        <article className="news-article">
          <header className="news-article-header">
            <div className="news-article-meta">
              <span>{article.date}</span>
              <span className={`news-brand news-brand-${article.brand}`}>
                {t(brandLabels[article.brand])}
              </span>
              {article.category && <span>{t(article.category)}</span>}
            </div>

            <h1>{t(article.title)}</h1>
            <p className="news-article-intro">{t(article.description)}</p>
          </header>

          <img
            className="news-article-image"
            src={article.image}
            alt={t(article.title)}
          />

          <div className="news-article-content">
            {article.content[language].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <NewsArticleFeedback articleSlug={article.slug} />

          <a
            className="news-article-more"
            href="/tin-tuc"
          >
            {t("Khám phá thêm tin tức")}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </article>
      </Container>
    </section>
  );
}
