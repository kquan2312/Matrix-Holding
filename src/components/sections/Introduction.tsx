import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Introduction() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section introduction">
      <Container>
        <div className="introduction-hero">
  <div className="introduction-chairman">
    <img
      src="/images/chairman.jpg"
      alt="Chủ tịch Matrix Holding"
    />
  </div>

  <div className="introduction-quote">
    <p>
      “
      {t(
        "Khởi nghiệp không chỉ cần một ý tưởng tốt, mà còn cần một người dẫn đường có tâm, một môi trường đủ điều kiện để phát triển và những cơ hội đủ lớn để trưởng thành."
      )}
      ”
    </p>

    <span className="introduction-quote-author">
      {t("Chủ tịch Matrix Holding")}
    </span>
  </div>
</div>
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
                {t("Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam. Hướng đến mục tiêu đưa các doanh nghiệp tiềm năng trở thành kỳ lân trong lĩnh vực, chúng tôi cam kết sẽ không ngừng nỗ lực, phát huy sự sáng tạo nhằm đưa ra giải pháp phù hợp với nhu cầu của từng doanh nghiệp.")}
              </p>
            </div>

            <div className="introduction-point">
              <h3>{t("Chúng tôi làm gì?")}</h3>
              <p>
                {t("Chúng tôi tập trung xây dựng một môi trường kinh doanh hiệu quả, nơi các doanh nghiệp có thể tiếp cận với nhiều nguồn lực và mở ra cơ hội tiếp cận thị trường bền vững.")}
              </p>
            </div>

            <div className="introduction-actions">
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