
import Container from "../common/Container";
import { partners } from "../../data/partners";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Partners({ preview = false }: { preview?: boolean }) {
  const { t } = useLanguage();
  const visiblePartners = preview ? partners.slice(0, 6) : partners;
  const hasPartnerLogos = partners.some((partner) => partner.logo);

  return (
    <section
      id="partners"
      className={`section partners section-border${preview ? " partners-preview" : ""}`}
    >
      <Container>
        <div className="section-label">
          <span>03</span>
          <span>{t("Đối tác chiến lược")}</span>
        </div>

        <div className="partners-heading">
          <h2>
            {preview ? t("Đối tác cùng phát triển.") : (
              <>
                {t("Đồng hành")}
                <br />
                {t("cùng phát triển.")}
              </>
            )}
          </h2>

          <p>
            {t("Matrix Holding trân trọng những mối quan hệ hợp tác cùng chia sẻ tầm nhìn và hướng tới các giá trị phát triển dài hạn.")}
          </p>
        </div>

        {hasPartnerLogos ? (
          <div className="partners-marquee">
            <div className="partners-track">
              {[...partners.filter((partner) => partner.logo), ...partners.filter((partner) => partner.logo)].map((partner, index) => (
                <div
                  className="partner"
                  key={`${partner.id}-${index}`}
                >
                  <img
                    src={partner.logo}
                    alt={t(partner.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {preview ? (
              <div className="partners-name-list">
                {visiblePartners.map((partner) => (
                  <div className="partner-name" key={partner.id}>
                    {partner.name}
                  </div>
                ))}
              </div>
            ) : (
              <div className="partners-name-marquee">
                <div className="partners-name-track">
                  <div className="partners-name-group">
                    {partners.map((partner) => (
                      <div className="partner-name" key={partner.id}>
                        {partner.name}
                      </div>
                    ))}
                  </div>
                  <div className="partners-name-group" aria-hidden="true">
                    {partners.map((partner) => (
                      <div className="partner-name" key={partner.id}>
                        {partner.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {preview && (
          <a className="partners-view-all" href="/gioi-thieu#partners">
            {t("Xem tất cả đối tác")}
            <span aria-hidden="true">↗</span>
          </a>
        )}

        {!preview && !hasPartnerLogos && (
          <p className="partners-disclaimer">
            {t("Danh sách tên đối tác mẫu đang có trong dữ liệu; cần xác nhận quan hệ hợp tác và quyền công bố trước khi phát hành.")}
          </p>
        )}
      </Container>
    </section>
  );
}
