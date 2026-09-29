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

        {/* Corporate Architectural Hero Banner */}
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

            <h1 className="hero-banner-title">
              <span className="hero-title-line">
                {t("Kiến tạo")}
              </span>
              <span className="hero-title-line hero-title-line-offset">
                {t("giá trị")} <em>{t("bền vững.")}</em>
              </span>
            </h1>

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

            <div className="hero-cta-group">
              <a href="#contact" className="hero-cta-primary">
                <span>{t("Liên hệ hợp tác")}</span>
                <ArrowUpRight size={17} />
              </a>

              <a href="#business" className="hero-cta-secondary">
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