import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

const values = [
  {
    number: "01",
    title: "Tầm nhìn",
    description:
      "Xây dựng Matrix Holding thành hệ sinh thái kinh doanh đa ngành có khả năng phát triển bền vững và tạo giá trị dài hạn.",
  },
  {
    number: "02",
    title: "Sứ mệnh",
    description:
      "Kết nối con người, nguồn lực và công nghệ để mở rộng cơ hội phát triển cho các lĩnh vực kinh doanh.",
  },
  {
    number: "03",
    title: "Giá trị cốt lõi",
    description:
      "Đề cao tinh thần hợp tác, tư duy đổi mới và cam kết đồng hành trong từng chặng đường phát triển.",
  },
];

export default function VisionMission() {
  const { t } = useLanguage();

  return (
    <section
      id="vision-mission"
      className="section vision-mission section-border"
    >
      <Container>
        <div className="section-label">
          <span>07</span>
          <span>{t("Tầm nhìn & sứ mệnh")}</span>
        </div>

        <div className="ecosystem-intro">
          <h2>
            {t("Phát triển hôm nay.")}
            <br />
            {t("Kiến tạo giá trị dài hạn.")}
          </h2>

          <p>
            {t("Tầm nhìn, sứ mệnh và giá trị cốt lõi định hướng cách Matrix Holding kết nối các lĩnh vực, phát triển đội ngũ và tạo dựng hệ sinh thái bền vững.")}
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <article key={value.number}>
              <span>{value.number}</span>
              <h3>{t(value.title)}</h3>
              <p>{t(value.description)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
