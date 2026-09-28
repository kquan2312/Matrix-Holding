import Container from "../common/Container";
import { partners } from "../../data/partners";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section
      id="partners"
      className="section partners section-border"
    >
      <Container>
        <div className="section-label">
          <span>09</span>
          <span>{t("Đối tác")}</span>
        </div>

        <div className="partners-heading">
          <h2>
            {t("Đồng hành")}
            <br />
            {t("cùng phát triển.")}
          </h2>

          <p>
            {t("Matrix Holding trân trọng những mối quan hệ hợp tác cùng chia sẻ tầm nhìn và hướng tới các giá trị phát triển dài hạn.")}
          </p>
        </div>

        {partners.length > 0 ? (
          <div className="partners-grid">
            {partners.map((partner) => (
              <div className="partner" key={partner.id}>
                <img src={partner.logo} alt={t(partner.name)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="partners-placeholder">
            {t("Thông tin đối tác sẽ được cập nhật trong thời gian tới.")}
          </div>
        )}
      </Container>
    </section>
  );
}
