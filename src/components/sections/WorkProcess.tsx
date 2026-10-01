import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

const steps = [
  {
    number: "01",
    title: "Tiếp nhận nhu cầu",
    description:
      "Tiếp nhận thông tin dựa trên nhu cầu và nguồn lực thực tế của đối tác, khách hàng.",
  },
  {
    number: "02",
    title: "Chuyển giao dự án",
    description:
      "Phân tích nhu cầu và nguồn lực, sau đó chuyển giao thông tin đến doanh nghiệp phụ trách trực tiếp.",
  },
  {
    number: "03",
    title: "Đánh giá kết quả",
    description:
      "Theo dõi, đánh giá hiệu quả sau quá trình thực thi và kết nối thêm nguồn lực cần thiết.",
  },
] as const;

export default function WorkProcess() {
  const { t } = useLanguage();

  return (
    <section className="section work-process section-border">
      <Container>
        <div className="work-process-heading">
          <span className="work-process-eyebrow">{t("Quy trình làm việc")}</span>
          <h2>{t("Đồng hành theo một quy trình rõ ràng")}</h2>
        </div>

        <div className="work-process-steps">
          {steps.map((step, index) => (
            <article className="work-process-step" key={step.number}>
              <div className="work-process-step-top">
                <span className="work-process-number">{step.number}</span>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="work-process-arrow"
                    size={20}
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3>{t(step.title)}</h3>
              <p>{t(step.description)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
