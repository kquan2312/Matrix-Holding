import { Compass, Handshake, Lightbulb } from "lucide-react";
import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

const values = [
  {
    eyebrow: "SỨ MỆNH DOANH NGHIỆP",
    title: "Kiến tạo nền tảng để doanh nghiệp tiếp cận, mở ra cơ hội hợp tác và phát triển vượt trội.",
    description:
      "Matrix Holding mang trong mình sứ mệnh dẫn dắt, định hướng và đồng hành cùng thế hệ trẻ trên hành trình khởi nghiệp, giúp họ mở ra cơ hội để trở thành những kỳ lân trong tương lai.",
    Icon: Handshake,
  },
  {
    eyebrow: "TẦM NHÌN CHIẾN LƯỢC",
    title: "Trở thành doanh nghiệp kiến tạo hệ sinh thái kinh doanh hàng đầu tại Việt Nam.",
    description:
      "Matrix Holding hướng đến việc xây dựng hệ sinh thái kinh doanh đa ngành có khả năng tạo ra giá trị thiết thực, nơi các ý tưởng kinh doanh được ươm mầm, nuôi dưỡng và phát triển.",
    Icon: Compass,
  },
  {
    eyebrow: "GIÁ TRỊ CỐT LÕI",
    title: "Ươm mầm và hiện thực hóa ý tưởng kinh doanh tiềm năng cùng thế hệ doanh nhân trẻ khởi nghiệp.",
    description:
      "Matrix Holding tạo điều kiện để các ý tưởng kinh doanh được định hình, thử nghiệm và phát triển thành những mô hình thực tế thông qua hệ sinh thái kinh doanh đa ngành.",
    Icon: Lightbulb,
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
        <div className="vision-mission-heading">
          <span>{t("NỀN TẢNG PHÁT TRIỂN")}</span>
          <h2>{t("Sứ mệnh, tầm nhìn và giá trị cốt lõi.")}</h2>
          <p>{t("Những định hướng nhất quán để Matrix Holding kiến tạo giá trị lâu dài cho doanh nghiệp và cộng đồng.")}</p>
        </div>

        <div className="values-grid">
          {values.map(({ eyebrow, title, description, Icon }, index) => (
            <article key={eyebrow}>
              <div className="values-card-eyebrow">
                <span className="values-card-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span>
                  {String(index + 1).padStart(2, "0")} · {t(eyebrow)}
                </span>
              </div>
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
