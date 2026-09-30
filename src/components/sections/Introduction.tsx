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
            <div className="introduction-point">
              <h3>{t("Chúng tôi là ai?")}</h3>
              <p className="intro-lead">
                {t("Matrix Holding là tập đoàn đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam, kết nối các doanh nghiệp và nguồn lực cùng hướng tới tăng trưởng dài hạn.")}
              </p>
            </div>

            <div className="introduction-point">
              <h3>{t("Chúng tôi làm gì?")}</h3>
              <p>
                {t("Chúng tôi nghiên cứu cơ hội, xây dựng định hướng phát triển và kết nối doanh nghiệp với nguồn lực, chuyên môn và đối tác phù hợp để hỗ trợ hệ sinh thái phát triển.")}
              </p>
            </div>

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