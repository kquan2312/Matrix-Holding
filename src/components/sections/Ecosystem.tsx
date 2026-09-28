import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

const ecosystemItems = [
  {
    number: "01",
    title: "Đa ngành",
    description:
      "Phát triển nhiều lĩnh vực kinh doanh có tiềm năng, tạo nền tảng tăng trưởng đa chiều.",
  },
  {
    number: "02",
    title: "Liên kết",
    description:
      "Kết nối nguồn lực giữa các đơn vị để hình thành lợi thế và giá trị cộng hưởng.",
  },
  {
    number: "03",
    title: "Đổi mới",
    description:
      "Ứng dụng công nghệ, tư duy mới và mô hình vận hành linh hoạt trong từng lĩnh vực.",
  },
  {
    number: "04",
    title: "Bền vững",
    description:
      "Theo đuổi tăng trưởng dài hạn, cân bằng giữa hiệu quả kinh doanh và giá trị xã hội.",
  },
];

export default function Ecosystem() {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="section ecosystem section-border">
      <Container>
        <div className="section-label">
          <span>03</span>
          <span>{t("Triết lý phát triển")}</span>
        </div>

        <div className="ecosystem-intro">
          <h2>
            {t("Đa ngành")}.
            <br />
            {t("Liên kết")}.
            <br />
            {t("Cộng hưởng.")}
          </h2>

          <p>
            {t("Một tập đoàn không chỉ được tạo nên bởi những doanh nghiệp riêng lẻ, mà bởi khả năng kết nối các nguồn lực thành một hệ sinh thái có sức mạnh lớn hơn tổng của từng thành phần.")}
          </p>
        </div>

        <div className="ecosystem-grid">
          {ecosystemItems.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>

              <h3>{t(item.title)}</h3>

              <p>{t(item.description)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}