import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import { ecosystemBrands } from "../../data/ecosystem";
import { useLanguage } from "../../i18n/LanguageContext";

export default function EcosystemOverview() {
  const { t } = useLanguage();

  return (
    <section className="section ecosystem-overview section-border">
      <Container>
        <div className="section-label">
          <span>02</span>
          <span>{t("Hệ sinh thái Matrix Holding")}</span>
        </div>

        <div className="ecosystem-overview-heading">
          {/* <h2>{t("Bốn hệ sinh thái, cùng kết nối.")}</h2> */}
          <h2>
  {t("Bốn hệ sinh thái,")}
  <br />
  {t("cùng kết nối.")}
</h2>
          <p>{t("Khám phá các hệ sinh thái chuyên biệt được định hướng để đồng hành cùng doanh nghiệp.")}</p>
        </div>

        <div className="ecosystem-overview-grid">
          {ecosystemBrands.map((brand, index) => (
            <a
              className={`ecosystem-overview-card ecosystem-overview-${brand.className}`}
              href={brand.href}
              key={brand.id}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{t(brand.category)}</small>
              <h3>{brand.name}</h3>
              <p>{t(brand.description)}</p>
              <strong>
                {t("Khám phá ngay")}
                <ArrowUpRight size={17} aria-hidden="true" />
              </strong>
            </a>
          ))}
        </div>

        <a className="text-link ecosystem-overview-all" href="/he-sinh-thai">
          {t("Tìm hiểu mô hình hệ sinh thái")}
          <span aria-hidden="true">↗</span>
        </a>
      </Container>
    </section>
  );
}
