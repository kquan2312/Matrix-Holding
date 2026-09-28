import Container from "../common/Container";
import { leadership } from "../../data/leadership";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Leadership() {
  const { t } = useLanguage();

  return (
    <section className="section leadership section-border">
      <Container>
        <div className="section-label">
          <span>08</span>
          <span>{t("Đội ngũ lãnh đạo")}</span>
        </div>

        <div className="leadership-heading">
          <h2>
            {t("Con người tạo nên")}
            <br />
            {t("sức mạnh tập đoàn.")}
          </h2>

          <p>
            {t("Một tổ chức phát triển bền vững bắt đầu từ những con người cùng chia sẻ tầm nhìn, giá trị và tinh thần kiến tạo.")}
          </p>
        </div>

        {leadership.length > 0 ? (
          <div className="leadership-grid">
            {leadership.map((leader) => (
              <article
                className="leader-card"
                key={leader.id}
              >
                <div className="leader-image">
                  <img
                    src={leader.image}
                    alt={t(leader.name)}
                  />
                </div>

                <div className="leader-info">
                  <h3>{t(leader.name)}</h3>
                  <p>{t(leader.position)}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="leadership-placeholder">
            <span>08</span>

            <div>
              <h3>
                Leadership Team
              </h3>

              <p>
                {t("Thông tin đội ngũ lãnh đạo sẽ được cập nhật.")}
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}