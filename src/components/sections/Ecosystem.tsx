import Container from "../common/Container";
import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

const memberCompanies = [
  {
    id: "network",
    name: "Matrix Network",
    category: "GIẢI PHÁP DOANH NGHIỆP",
    shortDescription: "Đơn vị cung cấp dịch vụ",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp.",
    className: "network",
  },
  {
    id: "community",
    name: "Matrix Community",
    category: "CỘNG ĐỒNG KẾT NỐI",
    shortDescription: "Cộng đồng kết nối",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh cho doanh nghiệp.",
    className: "community",
  },
  {
    id: "capital",
    name: "Matrix Capital",
    category: "KẾT NỐI ĐẦU TƯ",
    shortDescription: "Kết nối đầu tư",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư cho doanh nghiệp.",
    className: "capital",
  },
] as const;

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
    memberCompanies.find((company) => company.id === selectedCompanyId) ??
    memberCompanies[0];

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

        <div className="ecosystem-structure">
          <h3>{t("Mô hình liên kết")}</h3>

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
                  <path d="M360 215V25M360 215 155 325M360 215l205 110" />
                </svg>

                <div className="ecosystem-entity ecosystem-entity-holding">
                  <span>{t("Định hướng · Điều phối")}</span>
                  <strong>Matrix Holding</strong>
                  <span>{t("Kết nối nguồn lực")}</span>
                </div>

                {memberCompanies.map((company) => (
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
              {/* <p className="ecosystem-model-hint">{t("Chọn một thương hiệu để tìm hiểu vai trò")}</p> */}
            </div>

            <aside className="ecosystem-model-detail" aria-live="polite">
              <span className="ecosystem-model-eyebrow">{t("Mô hình liên kết")}</span>
              <h4>{t("Một hệ sinh thái, kết nối đa chiều.")}</h4>
              <p className="ecosystem-model-description">
                {t("Matrix Holding giữ vai trò trung tâm, định hướng và điều phối. Các thương hiệu thành viên đồng thời kết nối với nhau, chia sẻ nguồn lực và mở rộng cơ hội hợp tác.")}
              </p>
              <div className="ecosystem-model-legend">
                <span>{t("Đường nối tâm: liên kết với Holding")}</span>
                <span>{t("Vòng tròn: liên kết giữa các thành viên")}</span>
              </div>
              <div className="ecosystem-selected-detail" key={selectedCompany.id}>
                <strong>{t(selectedCompany.name)}</strong>
                <p>{t(selectedCompany.description)}</p>
              </div>
            </aside>
          </div>
        </div>

        <div className="ecosystem-members">
          {memberCompanies.map((company) => (
            <button
              type="button"
              key={company.id}
              className={`ecosystem-member-card ecosystem-member-${company.className}${selectedCompanyId === company.id ? " is-selected" : ""}`}
              aria-pressed={selectedCompanyId === company.id}
              onClick={() => setSelectedCompanyId(company.id)}
            >
              <span>{t(company.category)}</span>
              <h3>{company.name}</h3>
              <small>{t("Thành viên của Matrix Holding")}</small>
              <p>{t(company.description)}</p>
            </button>
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