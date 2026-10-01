import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

const questions = [
  {
    id: "company",
    question: "Matrix Holding là doanh nghiệp gì?",
    answer:
      "Matrix Holding là doanh nghiệp hoạt động theo mô hình hệ sinh thái khép kín, giữ vai trò là công ty mẹ, chịu trách nhiệm quản trị, vận hành và điều phối các hoạt động kinh doanh, giúp các công ty thành viên có đầy đủ nguồn lực để phát triển dài hạn.",
  },
  {
    id: "sectors",
    question: "Matrix Holding hoạt động trong những lĩnh vực nào?",
    answer:
      "Hệ sinh thái định hướng phát triển nhiều lĩnh vực như bất động sản, đầu tư, công nghệ, tài chính, tiêu dùng, du lịch, logistics, giáo dục, y tế và dịch vụ doanh nghiệp.",
  },
  {
    id: "services",
    question: "Matrix Holding cung cấp sản phẩm, dịch vụ gì?",
    answer:
      "Matrix Holding không trực tiếp kinh doanh bất kỳ sản phẩm hay dịch vụ cụ thể nào. Chúng tôi tập trung vào hoạt động nghiên cứu thị trường chuyên sâu nhằm xây dựng những chiến lược và mô hình kinh doanh phù hợp với từng lĩnh vực.",
  },
  {
    id: "founded",
    question: "Matrix Holding được thành lập khi nào?",
    answer:
      "Matrix Holding được chính thức ra đời và hoàn thiện thủ tục pháp lý năm 2023, hướng đến mục tiêu đồng hành cùng các doanh nghiệp trên hành trình xây dựng và phát triển thông qua các công ty cung cấp dịch vụ, các cộng đồng kết nối kinh doanh và đầu tư.",
  },
  {
    id: "chairperson",
    question: "Chủ tịch của Matrix Holding là ai?",
    answer:
      "Chủ tịch của Matrix Holding là Hồ Anh Tuấn – một doanh nhân trẻ với khát vọng trở thành người dẫn đường cho thế hệ doanh nhân trẻ khởi nghiệp, kiến tạo một môi trường kinh doanh minh bạch, hiệu quả và bền vững.",
  },
] as const;

export default function AboutFaq() {
  const { t } = useLanguage();
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  return (
    <section className="section about-faq" aria-labelledby="about-faq-title">
      <Container>
        <div className="about-faq-heading">
          <span>{t("CÂU HỎI THƯỜNG GẶP")}</span>
          <h2 id="about-faq-title">{t("Giải đáp về Matrix Holding")}</h2>
        </div>

        <div className="about-faq-layout">
          <div className="about-faq-image">
            <img
              src="/images/FAQ_banner.jpg"
              alt={t("Không gian và định hướng phát triển của Matrix Holding")}
              loading="lazy"
            />
          </div>

          <div className="about-faq-list">
            {questions.map((item, index) => {
              const isOpen = openQuestionId === item.id;
              const answerId = `about-faq-answer-${item.id}`;

              return (
                <article className={`about-faq-item${isOpen ? " is-open" : ""}`} key={item.id}>
                  <h3>
                    <button
                      type="button"
                      className="about-faq-question"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenQuestionId(isOpen ? null : item.id)
                      }
                    >
                      <span className="about-faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="about-faq-question-text">
                        {t(item.question)}
                      </span>
                      <span className="about-faq-toggle" aria-hidden="true">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                  </h3>
                  <div
                    className="about-faq-answer"
                    id={answerId}
                    hidden={!isOpen}
                  >
                    <p>{t(item.answer)}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
