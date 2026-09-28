import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Container from "../common/Container";
import { useLanguage } from "../../i18n/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Matrix Holding - ${name}`);
    const body = encodeURIComponent(
      `${t("Họ và tên")}: ${name}\n${t("Email")}: ${email}\n\n${message}`,
    );

    closeForm();
    window.location.href = `mailto:matrixholding.support@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="cta"
    >
      <Container>
        <div className="cta-inner">
          <div className="cta-content">
            <span>
              {t("Hãy kết nối")}
            </span>

            <h2>
              <span>{t("Cùng kiến tạo")}</span>
              <br />
              <span>{t("giá trị mới.")}</span>
            </h2>
          </div>

          <div className="cta-actions">
            <button
              type="button"
              className="cta-button"
              onClick={openForm}
            >
              <span>
                {t("Liên hệ với chúng tôi")}
              </span>

              <ArrowUpRight size={22} />
            </button>

            {/* <a
              href="mailto:matrixholding.support@gmail.com"
              className="cta-email"
            >
              matrixholding.support@gmail.com
            </a> */}
          </div>
        </div>
      </Container>

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
              />
            </label>

            <label>
              <span>{t("Email")}</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label>
            <span>{t("Nội dung")}</span>
            <textarea name="message" rows={3} required />
          </label>

          <button type="submit" className="contact-form-submit">
            {t("Mở email để gửi")}
            <ArrowUpRight size={18} />
          </button>
        </form>
      </dialog>
    </section>
  );
}