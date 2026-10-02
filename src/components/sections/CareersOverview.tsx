import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import { careerRoles } from "../../data/careers";
import { useLanguage } from "../../i18n/LanguageContext";

export default function CareersOverview() {
  const { t } = useLanguage();

  return (
    <section className="section careers-overview section-border">
      <Container>
        <div className="careers-overview-heading">
          <div>
            <div className="section-label">
              <span>04</span>
              <span>{t("Cơ hội nghề nghiệp")}</span>
            </div>
            <h2>{t("Cùng phát triển với Matrix Holding.")}</h2>
          </div>
          <p>{t("Tìm hiểu các vị trí tham khảo và cập nhật thông tin tuyển dụng chính thức.")}</p>
        </div>

        <div className="careers-overview-list">
          {careerRoles.slice(0, 4).map((role, index) => (
            <a
              className="careers-overview-item"
              href="/tuyen-dung"
              key={role.id}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{t(role.title)}</strong>
              <small>{t("Vị trí tham khảo")}</small>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="careers-overview-footer">
          <p>{t("Các vị trí trên là nội dung tham khảo, chưa phải thông tin tuyển dụng chính thức.")}</p>
          <a href="/tuyen-dung">
            {t("Xem tất cả")}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
