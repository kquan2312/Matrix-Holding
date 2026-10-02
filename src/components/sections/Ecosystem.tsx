import Container from "../common/Container";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { ecosystemBrands } from "../../data/ecosystem";

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
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>("network");
  const selectedCompany =
    ecosystemBrands.find((company) => company.id === selectedCompanyId) ??
    ecosystemBrands[0];

  return (
    <section id="ecosystem" className="section ecosystem section-border">
      <Container>
        <div className="section-label">
          <span>01</span>
          <span>{t("Hệ sinh thái Matrix Holding")}</span>
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
            {t("Matrix Holding kết nối bốn hệ sinh thái chuyên biệt, cùng hướng tới hỗ trợ doanh nghiệp trên hành trình phát triển.")}
          </p>
        </div>

        <div className="ecosystem-structure">
          <h3>{t("Mô hình hoạt động hệ sinh thái")}</h3>

          <div className="ecosystem-model">
            <div className="ecosystem-model-visual">
              <div className="ecosystem-orbit">
                <svg
                  className="ecosystem-orbit-lines"
                  viewBox="0 0 720 430"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="360" cy="215" r="185" />
                  <path d="M360 215V40M360 215 155 215M360 215 565 215M360 215V390" />
                </svg>

                <div className="ecosystem-entity ecosystem-entity-holding">
                  <span>{t("Định hướng · Điều phối")}</span>
                  <strong>Matrix Holding</strong>
                  <span>{t("Kết nối nguồn lực")}</span>
                </div>

                {ecosystemBrands.map((company) => (
                  <button
                    key={company.id}
                    type="button"
                    className={`ecosystem-entity ecosystem-entity-${company.className}${selectedCompanyId === company.id ? " is-selected" : ""}`}
                    aria-pressed={selectedCompanyId === company.id}
                    aria-label={`${company.name}: ${t(company.description)}`}
                    onClick={() => setSelectedCompanyId(company.id)}
                  >
                    <span>MATRIX</span>
                    <strong>{company.name.replace("Matrix ", "")}</strong>
                    <span>{t(company.shortDescription)}</span>
                  </button>
                ))}
              </div>
            </div>

            <aside className="ecosystem-model-detail" aria-live="polite">
              <span className="ecosystem-model-eyebrow">
                {t("Mô hình hoạt động hệ sinh thái")}
              </span>
              <h4>{t("Một hệ sinh thái, kết nối đa chiều.")}</h4>
              <p className="ecosystem-model-description">
                {t("Matrix Holding giữ vai trò trung tâm, định hướng và điều phối; bốn hệ sinh thái thành viên kết nối, chia sẻ nguồn lực và mở rộng cơ hội hợp tác.")}
              </p>
              <div className="ecosystem-selected-detail" key={selectedCompany.id}>
                <strong>{t(selectedCompany.name)}</strong>
                <p>{t(selectedCompany.description)}</p>
                <a href={selectedCompany.href}>
                  {t("Khám phá ngay")}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
        </div>

        <div className="ecosystem-members">
          {ecosystemBrands.map((company) => (
            <a
              key={company.id}
              href={company.href}
              className={`ecosystem-member-card ecosystem-member-${company.className}`}
            >
              <span>{t(company.category)}</span>
              <h3>{company.name}</h3>
              <small>{t("Thành viên của Matrix Holding")}</small>
              <p>{t(company.description)}</p>
              <strong>
                {t("Khám phá ngay")}
                <ArrowUpRight size={16} aria-hidden="true" />
              </strong>
            </a>
          ))}
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
