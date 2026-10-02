import Container from "../common/Container";
import { capabilities } from "../../data/capabilities";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Capabilities() {
  const { t } = useLanguage();

  return (
    <section
      id="capabilities"
      className="section capabilities section-border"
    >
      <Container>
        <div className="section-label">
          <span>05</span>
          <span>{t("Năng lực")}</span>
        </div>

        <div className="capabilities-heading">
          <h2>
            {t("Nền tảng cho")}
            <br />
            {t("tăng trưởng dài hạn.")}
          </h2>

          <p>
            {t("Chúng tôi xây dựng năng lực cốt lõi xoay quanh con người, vận hành, công nghệ và khả năng kết nối nguồn lực.")}
          </p>
        </div>

        <div className="capabilities-list">
          {capabilities.map((item) => (
            <article
              className="capability"
              key={item.id}
            >
              <span>{item.number}</span>

              <h3>{t(item.title)}</h3>

              <p>{t(item.description)}</p>

              <span className="capability-arrow">
                ↗
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}