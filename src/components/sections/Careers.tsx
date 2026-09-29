import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, X } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import Container from "../common/Container";
import { businessUnits } from "../../data/businessUnits";
import { careerRoles, type CareerRole, type LocalizedCareerCopy } from "../../data/careers";
import { useLanguage } from "../../i18n/LanguageContext";

function getBusinessUnitForRole(businessUnitId: string) {
  const businessUnit = businessUnits.find((unit) => unit.id === businessUnitId);

  if (!businessUnit) {
    throw new Error(`Career role references unknown business unit: ${businessUnitId}`);
  }

  return businessUnit;
}

export default function Careers() {
  const { language, t } = useLanguage();
  const [selectedSector, setSelectedSector] = useState("all");
  const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationMessage, setApplicationMessage] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const availableSectors = businessUnits.filter((unit) =>
    careerRoles.some((role) => role.businessUnitId === unit.id),
  );
  const visibleRoles = careerRoles.filter(
    (role) => selectedSector === "all" || role.businessUnitId === selectedSector,
  );
  const selectedBusinessUnit = selectedRole
    ? getBusinessUnitForRole(selectedRole.businessUnitId)
    : null;

  const openRoleDetails = (role: CareerRole) => {
    setSelectedRole(role);
    setIsApplying(false);
    setApplicationMessage("");
    dialogRef.current?.showModal();
  };

  const closeRoleDialog = () => {
    dialogRef.current?.close();
    setSelectedRole(null);
    setIsApplying(false);
    setApplicationMessage("");
  };

  const handleApplicationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApplicationMessage(
      t("Biểu mẫu chưa được kết nối với hệ thống nhận hồ sơ nên thông tin chưa được gửi. Vui lòng quay lại sau khi hệ thống tuyển dụng được kích hoạt."),
    );
  };

  const localizedCopy = (copy: LocalizedCareerCopy) =>
    language === "vi" ? copy.vi : copy.en;

  return (
    <section id="careers" className="section careers section-border">
      <Container>
        <div className="section-label">
          <span>12</span>
          <span>{t("Cơ hội nghề nghiệp")}</span>
        </div>

        <div className="careers-heading">
          <h2>
            {t("Cùng phát triển")}
            <br />
            {t("với Matrix Holding.")}
          </h2>

          <p>
            {t("Khám phá các vị trí định hướng theo từng lĩnh vực trong hệ sinh thái Matrix Holding.")}
          </p>
        </div>

        <div className="careers-notice" role="note">
          <span className="careers-notice-count">
            <strong>0</strong>
            <span>{t("vị trí tuyển dụng chính thức")}</span>
          </span>
          <p>
            {t("Hiện chưa có tin tuyển dụng chính thức đang mở. Thông tin vị trí và yêu cầu dưới đây cần được xác nhận trước khi công bố tuyển dụng.")}
          </p>
        </div>

        <div className="career-filters" role="group" aria-label={t("Lọc theo lĩnh vực")}>
          <button
            type="button"
            className={`career-filter ${selectedSector === "all" ? "is-active" : ""}`}
            aria-pressed={selectedSector === "all"}
            onClick={() => setSelectedSector("all")}
          >
            {t("Tất cả lĩnh vực")}
          </button>

          {availableSectors.map((unit) => (
            <button
              type="button"
              className={`career-filter ${selectedSector === unit.id ? "is-active" : ""}`}
              aria-pressed={selectedSector === unit.id}
              key={unit.id}
              onClick={() => setSelectedSector(unit.id)}
            >
              {t(unit.shortName ?? unit.name)}
            </button>
          ))}
        </div>

        <div className="career-list" aria-live="polite">
          {visibleRoles.map((role, index) => {
            const businessUnit = getBusinessUnitForRole(role.businessUnitId);

            return (
              <article className="career-card" key={role.id}>
                <div className="career-card-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="career-card-content">
                  <span className="career-card-sector">
                    {t(businessUnit.shortName ?? businessUnit.name)}
                  </span>
                  <h3>{t(role.title)}</h3>
                  <p>{t(role.description)}</p>
                  <button
                    type="button"
                    className="career-details-button"
                    onClick={() => openRoleDetails(role)}
                  >
                    {t("Xem chi tiết")}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>

                <BriefcaseBusiness
                  className="career-card-icon"
                  size={22}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

        <a className="careers-contact-link" href="#contact">
          {t("Quan tâm đến cơ hội nghề nghiệp?")}
          <span>{t("Kết nối với Matrix Holding")}</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </Container>

      <dialog
        ref={dialogRef}
        className="career-dialog"
        aria-labelledby="career-dialog-title"
        onClose={() => {
          setSelectedRole(null);
          setIsApplying(false);
          setApplicationMessage("");
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeRoleDialog();
        }}
      >
        {selectedRole && (
          <>
            <div className="career-dialog-header">
              <div>
                <span>
                  {selectedBusinessUnit &&
                    t(selectedBusinessUnit.shortName ?? selectedBusinessUnit.name)}
                </span>
                <h2 id="career-dialog-title">{t(selectedRole.title)}</h2>
              </div>
              <button
                type="button"
                className="career-dialog-close"
                aria-label={t("Đóng chi tiết tuyển dụng")}
                onClick={closeRoleDialog}
              >
                <X size={20} />
              </button>
            </div>

            {isApplying ? (
              <div className="career-application">
                <button
                  type="button"
                  className="career-dialog-back"
                  onClick={() => {
                    setIsApplying(false);
                    setApplicationMessage("");
                  }}
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  {t("Quay lại chi tiết")}
                </button>

                <p className="career-application-intro">
                  {t("Ứng tuyển vị trí")} <strong>{t(selectedRole.title)}</strong>
                </p>

                <div className="career-application-notice" role="note">
                  {t("Form hiện chưa kết nối dịch vụ gửi hồ sơ. Bạn có thể xem và điền thử thông tin; hồ sơ sẽ chưa được gửi đi.")}
                </div>

                <form className="career-application-form" onSubmit={handleApplicationSubmit}>
                  <label>
                    <span>{t("Họ và tên")}</span>
                    <input name="applicantName" autoComplete="name" required />
                  </label>
                  <div className="career-application-row">
                    <label>
                      <span>{t("Email")}</span>
                      <input name="applicantEmail" type="email" autoComplete="email" required />
                    </label>
                    <label>
                      <span>{t("Số điện thoại")}</span>
                      <input name="applicantPhone" type="tel" autoComplete="tel" required />
                    </label>
                  </div>
                  <label>
                    <span>{t("Tải CV (PDF)")}</span>
                    <input
                      name="applicantCv"
                      type="file"
                      accept=".pdf,application/pdf"
                    />
                    <small>{t("Chỉ chấp nhận tệp PDF.")}</small>
                  </label>
                  <label>
                    <span>{t("Lời nhắn")}</span>
                    <textarea name="applicantMessage" rows={3} />
                  </label>

                  {applicationMessage && (
                    <p className="career-application-error" role="alert">
                      {applicationMessage}
                    </p>
                  )}

                  <button type="submit" className="career-apply-button">
                    {t("Gửi hồ sơ ứng tuyển")}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="career-dialog-content">
                <p className="career-dialog-summary">{t(selectedRole.description)}</p>

                <div className="career-detail-group">
                  <h3>{t("Mô tả công việc")}</h3>
                  <ul>
                    {selectedRole.responsibilities.map((item) => (
                      <li key={item.vi}>{localizedCopy(item)}</li>
                    ))}
                  </ul>
                </div>

                <div className="career-detail-group">
                  <h3>{t("Yêu cầu ứng viên")}</h3>
                  <ul>
                    {selectedRole.requirements.map((item) => (
                      <li key={item.vi}>{localizedCopy(item)}</li>
                    ))}
                  </ul>
                </div>

                <div className="career-dialog-footer">
                  <span>{t("Hiện chưa có tin tuyển dụng chính thức đang mở.")}</span>
                  <button
                    type="button"
                    className="career-apply-button"
                    onClick={() => setIsApplying(true)}
                  >
                    {t("Ứng tuyển")}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </dialog>
    </section>
  );
}
