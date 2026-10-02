import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-pastel-glow hero-pastel-glow-1" />
      <div className="hero-pastel-glow hero-pastel-glow-2" />
      <div className="hero-grid" />

      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <div className="container hero-inner">
        <div className="hero-top">
          <span>MATRIX HOLDING</span>
          <span>EST. 2023</span>
        </div>

        <div className="hero-banner-wrapper">
          <div className="hero-banner-frame">
            <img
              src="/images/hero-banner.jpg"
              alt="Matrix Holding Corporate Landmark Architecture"
              className="hero-banner-image"
              fetchPriority="high"
              loading="eager"
            />
            <div className="hero-banner-overlay" />

            <div className="hero-banner-badge hero-banner-badge-left">
              <span className="badge-pulse-dot" />
              <div>
                <strong>{t("Trụ sở chính")}</strong>
                <span>{t("Kiến tạo tương lai")}</span>
              </div>
            </div>

            <div className="hero-banner-badge hero-banner-badge-right">
              <div>
                <strong>{t("Hệ sinh thái đa ngành")}</strong>
                <span>{t("Định hướng bền vững")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-main">
          <div className="hero-label">
            <span className="hero-label-line" />
            <span>{t("TẬP ĐOÀN KINH DOANH ĐA NGÀNH")}</span>
          </div>

          <div className="hero-aside">
            <span className="hero-aside-label">
              <Sparkles size={13} className="hero-aside-icon" />
              {t("KẾT NỐI NGUỒN LỰC")}
            </span>

            <p>
              {t("Matrix Holding phát triển hệ sinh thái kinh doanh đa ngành, kết nối con người, nguồn lực và công nghệ để tạo ra những giá trị dài hạn.")}
            </p>
            <p>
              {t("Khởi nghiệp không chỉ cần một ý tưởng tốt, mà còn cần một người dẫn đường có tâm, một môi trường đủ điều kiện để phát triển và những cơ hội đủ lớn để trưởng thành.")}
            </p>
            

            <div className="hero-cta-group">
              <a href="/gioi-thieu" className="hero-cta-primary">
                <span>{t("Khám phá Matrix Holding")}</span>
                <ArrowUpRight size={17} />
              </a>

              <a href="/he-sinh-thai" className="hero-cta-secondary">
                <span>{t("Khám phá hệ sinh thái")}</span>
                <ArrowDownRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}