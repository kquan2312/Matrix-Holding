import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import { news } from "../../data/news";
import { useLanguage } from "../../i18n/LanguageContext";

export default function News() {
  const { t } = useLanguage();

  return (
    <section
      id="news"
      className="section news section-border"
    >
      <Container>
        <div className="section-label">
          <span>11</span>
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
          <div className="news-grid">
            {news.map((item) => (
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
                  <span>
                    {item.date}
                  </span>

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
        ) : (
          <div className="news-placeholder">
            <span>11</span>

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