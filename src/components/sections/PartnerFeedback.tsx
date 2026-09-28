import { Quote } from "lucide-react";
import Container from "../common/Container";
import { partnerFeedback } from "../../data/partnerFeedback";
import { useLanguage } from "../../i18n/LanguageContext";

export default function PartnerFeedback() {
  const { t } = useLanguage();

  return (
    <section
      id="feedback"
      className="section partner-feedback section-border"
    >
      <Container>
        <div className="section-label">
          <span>10</span>
          <span>{t("Phản hồi")}</span>
        </div>

        <div className="feedback-heading">
          <h2>
            {t("Góc nhìn")}
            <br />
            {t("từ đối tác & khách hàng.")}
          </h2>

          <p>
            {t("Lắng nghe những chia sẻ về trải nghiệm hợp tác và định hướng phát triển cùng Matrix Holding.")}
          </p>
        </div>

        {/* <p className="feedback-disclaimer">
          {t("Các phản hồi dưới đây là nội dung minh họa, chưa đại diện cho khách hàng hoặc đối tác thực tế.")}
        </p> */}

        <div className="feedback-grid">
          {partnerFeedback.map((feedback, index) => (
            <article className="feedback-card" key={feedback.id}>
              <div className="feedback-card-top">
                <span className="feedback-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Quote size={22} aria-hidden="true" />
              </div>

              <blockquote>{t(feedback.quote)}</blockquote>

              <div className="feedback-attribution">
                <strong>{t(feedback.name)}</strong>
                <span>{t(feedback.role)}</span>
                <span className="feedback-relationship">
                  {t(feedback.relationship)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
