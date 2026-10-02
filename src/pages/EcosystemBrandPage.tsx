import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "../components/common/Container";
import { ecosystemBrands } from "../data/ecosystem";
import { useLanguage } from "../i18n/LanguageContext";

export default function EcosystemBrandPage() {
  const { t } = useLanguage();
  const slug = window.location.pathname.split("/").pop();
  const brand = ecosystemBrands.find(
    (item) => item.href.split("/").pop() === slug,
  );

  if (!brand) {
    return (
      <section className="section page-intro">
        <Container>
          <h1>{t("Không tìm thấy hệ sinh thái")}</h1>
          <a className="page-back-link" href="/he-sinh-thai">
            <ArrowLeft size={17} aria-hidden="true" />
            {t("Quay lại hệ sinh thái")}
          </a>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className={`brand-detail-hero brand-detail-${brand.className}`}>
        <Container>
          <a className="brand-detail-back" href="/he-sinh-thai">
            <ArrowLeft size={17} aria-hidden="true" />
            {t("Hệ sinh thái Matrix Holding")}
          </a>
          <span>{t(brand.category)}</span>
          <h1>{brand.name}</h1>
          <p>{t(brand.description)}</p>
          <a className="brand-detail-cta" href="/lien-he">
            {t("Liên hệ hợp tác")}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Container>
      </section>

      <section className="section brand-detail-content section-border">
        <Container>
          <div className="brand-detail-heading">
            <span>{t("Định hướng hoạt động")}</span>
            <h2>{t("Kết nối đúng nguồn lực, tạo cơ hội phát triển.")}</h2>
          </div>
          <div className="brand-detail-focus">
            {brand.focus.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{t(item)}</p>
              </article>
            ))}
          </div>
          <p className="brand-detail-disclaimer">
            {t("Thông tin giới thiệu mang tính khái quát; phạm vi hoạt động và dịch vụ cụ thể sẽ được cập nhật theo thông tin chính thức.")}
          </p>
        </Container>
      </section>
    </>
  );
}
