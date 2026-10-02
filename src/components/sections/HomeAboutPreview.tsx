import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

export default function HomeAboutPreview() {
  const { t } = useLanguage();

  return (
    <section className="section home-about-preview">
      <Container>
        <div className="section-label">
          <span>01</span>
          <span>{t("Về Matrix Holding")}</span>
        </div>

        <div className="home-about-preview-layout">
          <h2>{t("Một hệ sinh thái kết nối nguồn lực và cơ hội phát triển.")}</h2>

          <div>
            <p>
              {t("Matrix Holding kết nối các hệ sinh thái chuyên biệt, doanh nghiệp và nguồn lực nhằm mở rộng cơ hội hợp tác, phát triển dài hạn.")}
            </p>

            <div className="home-about-preview-actions">
              <a href="/gioi-thieu" className="text-link">
                {t("Tìm hiểu thêm")}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="/gioi-thieu#capabilities" className="text-link">
                {t("Xem hồ sơ năng lực")}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
