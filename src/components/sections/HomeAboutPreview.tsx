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
          <div className="home-about-preview-copy">
            <h2>{t("Một hệ sinh thái kết nối nguồn lực và cơ hội phát triển.")}</h2>
          </div>

          <div>
            <div className="home-about-preview-image">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt={t("Tòa nhà văn phòng hiện đại giữa khu đô thị")}
                loading="lazy"
              />
              <span>{t("Kết nối nguồn lực, kiến tạo giá trị dài hạn")}</span>
            </div>

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
