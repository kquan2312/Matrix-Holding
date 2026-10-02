import { ArrowUpRight, Check, Copy, ExternalLink, Phone, X, Mail } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

export default function CTA({ detailed = false }: { detailed?: boolean }) {
  const { t } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formDataState, setFormDataState] = useState({
    name: "",
    company: "",
    address: "",
    taxCode: "",
    email: "",
    phone: "",
    message: "",
  });
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isFormOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isFormOpen]);

  const openForm = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    dialog.showModal();
    setIsFormOpen(true);
    nameInputRef.current?.focus();
  };

  const closeForm = () => {
    dialogRef.current?.close();
    setIsFormOpen(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("matrixholding.support@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenGmail = () => {
    const subject = encodeURIComponent(`Matrix Holding - ${formDataState.name || "Liên hệ hợp tác"}`);
    const body = encodeURIComponent(
      `${t("Họ và tên")}: ${formDataState.name}\n${t("Tên doanh nghiệp")}: ${formDataState.company}\n${t("Trụ sở chính")}: ${formDataState.address}\n${t("Mã số thuế")}: ${formDataState.taxCode}\n${t("Email")}: ${formDataState.email}\n${t("Số điện thoại")}: ${formDataState.phone}\n\n${formDataState.message}`,
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=matrixholding.support@gmail.com&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const address = String(formData.get("address") ?? "").trim();
    const taxCode = String(formData.get("taxCode") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Matrix Holding - ${name}`);
    const body = encodeURIComponent(
      `${t("Họ và tên")}: ${name}\n${t("Tên doanh nghiệp")}: ${company}\n${t("Trụ sở chính")}: ${address}\n${t("Mã số thuế")}: ${taxCode}\n${t("Email")}: ${email}\n${t("Số điện thoại")}: ${phone}\n\n${message}`,
    );

    closeForm();
    window.location.href = `mailto:matrixholding.support@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="cta">
      <Container>
        <div className="cta-inner">
          <div className="cta-content">
            <span className="cta-badge">{t("Hãy kết nối")}</span>

            <h2>
              <span>{t("Cùng kiến tạo")}</span>
              <br />
              <span>{t("giá trị mới.")}</span>
            </h2>

            <p className="cta-description">
              {t("Matrix Holding trân trọng những mối quan hệ hợp tác cùng chia sẻ tầm nhìn và hướng tới các giá trị phát triển dài hạn.")}
            </p>
          </div>

          <div className="cta-actions">
            <button
              type="button"
              className="cta-button"
              onClick={openForm}
            >
              <span>{t("Liên hệ với chúng tôi")}</span>
              <ArrowUpRight size={22} />
            </button>

            <a
              className="cta-partnership-link"
              href={detailed ? "/he-sinh-thai" : "/lien-he"}
            >
              {t("Xem cơ hội hợp tác")}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <button
              type="button"
              className="cta-copy-email"
              onClick={handleCopyEmail}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? t("Đã sao chép email!") : "matrixholding.support@gmail.com"}</span>
            </button>
            <a
              href="tel:+84964243026"
              className="cta-copy-email"
            >
              <Phone size={16} />
              <span>(+84) 964 243 026</span>
            </a>
          </div>
        </div>
      </Container>

      {detailed && (
        <Container>
          <div className="contact-details">
            <section className="contact-business-info">
              <h2>{t("Thông tin doanh nghiệp")}</h2>
              <dl>
                <div>
                  <dt>{t("Tên doanh nghiệp")}</dt>
                  <dd>Matrix Holding</dd>
                </div>
                <div>
                  <dt>{t("Trụ sở chính")}</dt>
                  <dd>{t("KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội")}</dd>
                </div>
                <div>
                  <dt>{t("Email")}</dt>
                  <dd>
                    <a href="mailto:matrixholding.support@gmail.com">
                      matrixholding.support@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>{t("Số điện thoại")}</dt>
                  <dd>
                    <a href="tel:+84964243026">(+84) 964 243 026</a>
                  </dd>
                </div>
              </dl>
            </section>

            <section className="contact-map-section">
              <h2>{t("Bản đồ Google Maps")}</h2>
              <iframe
                title={t("Bản đồ Google Maps")}
                src="https://maps.google.com/maps?q=K%C4%90T%20B%E1%BA%AFc%20Linh%20%C4%90%C3%A0m%2C%20Ph%C6%B0%E1%BB%9Dng%20Ho%C3%A0ng%20Li%E1%BB%87t%2C%20H%C3%A0%20N%E1%BB%99i&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </section>
          </div>
        </Container>
      )}

      <dialog
        ref={dialogRef}
        className="contact-dialog"
        aria-labelledby="contact-dialog-title"
        onCancel={() => setIsFormOpen(false)}
        onClose={() => setIsFormOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeForm();
        }}
      >
        <div className="contact-dialog-header">
          <div>
            <span>{t("Hãy kết nối")}</span>
            <h2 id="contact-dialog-title">{t("Liên hệ với chúng tôi")}</h2>
          </div>

          <button
            type="button"
            className="contact-dialog-close"
            onClick={closeForm}
            aria-label={t("Đóng form liên hệ")}
          >
            <X size={20} />
          </button>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label>
              <span>{t("Họ và tên")}</span>
              <input
                ref={nameInputRef}
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formDataState.name}
                onChange={(e) => setFormDataState({ ...formDataState, name: e.target.value })}
              />
            </label>
            <label>
              <span>{t("Tên doanh nghiệp")}</span>
              <input
                name="company"
                type="text"
                autoComplete="organization"
                required={detailed}
                value={formDataState.company}
                onChange={(e) => setFormDataState({ ...formDataState, company: e.target.value })}
              />
            </label>
            {detailed && (
              <label>
                <span>{t("Trụ sở chính")}</span>
                <input
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  value={formDataState.address}
                  onChange={(e) => setFormDataState({ ...formDataState, address: e.target.value })}
                />
              </label>
            )}
            {detailed && (
              <label>
                <span>{t("Mã số thuế")}</span>
                <input
                  name="taxCode"
                  type="text"
                  value={formDataState.taxCode}
                  onChange={(e) => setFormDataState({ ...formDataState, taxCode: e.target.value })}
                />
              </label>
            )}

            <label>
              <span>{t("Email")}</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formDataState.email}
                onChange={(e) => setFormDataState({ ...formDataState, email: e.target.value })}
              />
            </label>
            <label>
              <span>{t("Số điện thoại")}</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={formDataState.phone}
                onChange={(e) => setFormDataState({ ...formDataState, phone: e.target.value })}
              />
            </label>
          </div>

          <label>
            <span>{t("Nội dung")}</span>
            <textarea
              name="message"
              rows={3}
              required
              value={formDataState.message}
              onChange={(e) => setFormDataState({ ...formDataState, message: e.target.value })}
            />
          </label>

          <div className="contact-form-buttons">
            <button type="submit" className="contact-form-submit">
              {t("Mở email để gửi")}
              <ArrowUpRight size={18} />
            </button>

            <button
              type="button"
              className="contact-form-gmail"
              onClick={handleOpenGmail}
            >
              <ExternalLink size={16} />
              {t("Mở qua Gmail")}
            </button>
          </div>
        </form>
      </dialog>
    </section>
  );
}