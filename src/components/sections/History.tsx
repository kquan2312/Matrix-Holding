import { useState } from "react";
import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

const milestones = [
  {
    year: "2016",
    title: "Khởi nguồn sáng tạo",
    description:
      "Những ý tưởng đầu tiên đặt nền móng cho hành trình phát triển của Matrix Holding.",
  },
  {
    year: "2020",
    title: "Bước vào hoạt động kinh doanh",
    description:
      "Matrix Holding bắt đầu các hoạt động kinh doanh, trở thành đơn vị cung cấp dịch vụ truyền thông mạng xã hội.",
  },
  {
    year: "2023",
    title: "Chuẩn hóa nền tảng pháp lý",
    description:
      "Hoàn thiện nền tảng pháp lý, tạo cơ sở cho hoạt động và định hướng phát triển dài hạn.",
  },
  {
    year: "2026",
    title: "Tái cấu trúc nguồn lực",
    description:
      "Tái cấu trúc nguồn lực để tăng cường sự kết nối và năng lực phối hợp trong hệ sinh thái.",
  },
  {
    year: "2026 +",
    title: "Mở rộng hệ sinh thái",
    description:
      "Tiếp tục mở rộng hệ sinh thái, kết nối thêm lĩnh vực, nguồn lực và cơ hội hợp tác.",
  },
] as const;

export default function History() {
  const { t } = useLanguage();
  const [selectedMilestone, setSelectedMilestone] = useState(milestones.length - 1);
  const milestone = milestones[selectedMilestone];

  return (
    <section className="section history-section">
      <Container>
        <div className="history-panel">
          <div className="history-heading">
            <span className="history-eyebrow">{t("LỊCH SỬ HÌNH THÀNH")}</span>
            <h2>{t("Hành trình của Matrix Holding")}</h2>
            <p>{t("Chọn từng cột mốc để xem những dấu ấn quan trọng trên hành trình phát triển.")}</p>
            <p className="history-disclaimer">{t("Các cột mốc đang ở dạng tham khảo và cần được doanh nghiệp xác nhận trước khi công bố.")}</p>
          </div>

          <div className="history-timeline" role="group" aria-label={t("Các cột mốc lịch sử")}>
            {milestones.map((item, index) => (
              <button
                key={item.year}
                type="button"
                className={`history-milestone${index === milestones.length - 1 ? " history-milestone-future" : ""}${selectedMilestone === index ? " is-active" : ""}`}
                aria-pressed={selectedMilestone === index}
                onClick={() => setSelectedMilestone(index)}
              >
                <span className="history-year">{item.year}</span>
                <span className="history-milestone-title">{t(item.title)}</span>
              </button>
            ))}
          </div>

          <article className="history-detail" aria-live="polite" key={milestone.year}>
            <div className="history-image">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85"
                alt={t("Đội ngũ Matrix Holding cùng xây dựng định hướng phát triển")}
                loading="lazy"
              />
            </div>
            <div className="history-copy">
              <span className="history-detail-eyebrow">
                {t("CỘT MỐC")} · {milestone.year}
              </span>
              <h3>{t(milestone.title)}</h3>
              <p>{t(milestone.description)}</p>
              <strong>MATRIX HOLDING</strong>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
