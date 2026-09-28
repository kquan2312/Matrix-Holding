import {
  ArrowDownRight,
} from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <div className="container hero-inner">
        <div className="hero-top">
          <span>
            MATRIX HOLDING
          </span>

          <span>
            EST. 2026
          </span>
        </div>

        <div className="hero-main">
          <div className="hero-label">
            <span className="hero-label-line" />

            <span>
              {t("TẬP ĐOÀN KINH DOANH ĐA NGÀNH")}
            </span>
          </div>

          <h1>
            <span className="hero-title-line">
              {t("Kiến tạo")}
            </span>

            <span className="hero-title-line hero-title-line-offset">
              {t("giá trị")}
              {" "}
              <em>{t("bền vững.")}</em>
            </span>
          </h1>

          <div className="hero-aside">
            <span className="hero-aside-label">
              {t("KẾT NỐI NGUỒN LỰC")}
            </span>

            <p>
              {t("Matrix Holding phát triển hệ sinh thái kinh doanh đa ngành, kết nối con người, nguồn lực và công nghệ để tạo ra những giá trị dài hạn.")}
            </p>

            <a
              href="#about"
              className="hero-explore"
            >
              <span>
                {t("Khám phá")}
              </span>

              <ArrowDownRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}