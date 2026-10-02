import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

const informationSections = [
  {
    id: "commitments",
    title: "Điều khoản cam kết",
    description:
      "Thông tin cam kết và điều khoản chính thức sẽ được cập nhật sau khi được doanh nghiệp xác nhận.",
  },
  {
    id: "competitive-edge",
    title: "Lợi thế cạnh tranh",
    description:
      "Nội dung về lợi thế cạnh tranh cần được hoàn thiện dựa trên thông tin và số liệu đã được phê duyệt.",
  },
  {
    id: "chairperson-statement",
    title: "Tuyên ngôn của Chủ tịch",
    description:
      "Thông điệp chính thức của Chủ tịch sẽ được bổ sung sau khi có nội dung được duyệt để công bố.",
  },
] as const;

export default function AboutCommitments() {
  const { t } = useLanguage();

  return (
    <section className="section about-commitments section-border">
      <Container>
        <div className="section-label">
          <span>07</span>
          <span>{t("Cam kết và định hướng")}</span>
        </div>
        <div className="about-commitments-grid">
          {informationSections.map((item, index) => (
            <article key={item.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{t(item.title)}</h2>
              <p>{t(item.description)}</p>
              <small>{t("Thông tin đang được hoàn thiện")}</small>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
