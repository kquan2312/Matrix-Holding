import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Introduction() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section introduction">
      <Container>
        <div className="section-label">
          <span>01</span>
          <span>{t("Về Matrix Holding")}</span>
        </div>

        <div className="introduction-layout">
          <h2>
            {t("Một hệ sinh thái.")}
            <br />
            {t("Nhiều lĩnh vực.")}
            <br />
            {t("Một tầm nhìn.")}
          </h2>

          <div className="introduction-copy">
            <p className="intro-lead">
              {t("Matrix Holding được định hướng là một tập đoàn kinh doanh đa ngành, nơi các lĩnh vực cùng phát triển trong một hệ sinh thái có tính kết nối và cộng hưởng.")}
            </p>

            <p>
              {t("Chúng tôi tập trung xây dựng nền tảng vận hành linh hoạt, phát triển những lĩnh vực có tiềm năng dài hạn và kết nối nguồn lực để tạo ra giá trị bền vững.")}
            </p>

            <a href="#business" className="text-link">
              {t("Khám phá hệ sinh thái")}
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* <div className="introduction-stats">
          <div>
            <strong>01</strong>
            <span>{t("Hệ sinh thái")}</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>{t("Tiềm năng phát triển")}</span>
          </div>

          <div>
            <strong>2026</strong>
            <span>{t("Định hướng phát triển")}</span>
          </div>
        </div> */}
      </Container>
    </section>
  );
}