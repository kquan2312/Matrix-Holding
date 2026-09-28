import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const links = [
  {
    label: "Giới thiệu",
    href: "#about",
  },
  {
    label: "Lĩnh vực",
    href: "#business",
  },
  {
    label: "Dự án",
    href: "#projects",
  },
  {
    label: "Năng lực",
    href: "#capabilities",
  },
  {
    label: "Tin tức",
    href: "#news",
  },
  {
    label: "Liên hệ",
    href: "#contact",
  },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="#"
              className="brand"
              aria-label="Matrix Holding - Trang chủ"
            >
              <img className="brand-icon" src="/icons/favicon.png" alt="" />
              <span className="brand-wordmark">
                <span className="brand-main">MATRIX</span>
                <span className="brand-sub">HOLDING</span>
              </span>
            </a>

            <p>
              {t("Tập đoàn kinh doanh đa ngành, kết nối nguồn lực để xây dựng hệ sinh thái phát triển bền vững.")}
            </p>
          </div>

          <div className="footer-navigation">
            <span className="footer-title">
              {t("Điều hướng")}
            </span>

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
              >
                {t(link.label)}
              </a>
            ))}
          </div>

          <div className="footer-contact">
            <span className="footer-title">
              {t("Kết nối với chúng tôi")}
            </span>

            <a href="mailto:matrixholding.support@gmail.com">
              <Mail size={15} aria-hidden="true" />
              <span>matrixholding.support@gmail.com</span>
            </a>

            <a href="tel:+84964243026">
              <Phone size={15} aria-hidden="true" />
              <span>(+84) 964 243 026</span>
            </a>

            <div className="footer-contact-address">
              <MapPin size={15} aria-hidden="true" />
              <span>{t("KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội")}</span>
            </div>

            <a className="footer-contact-link" href="#contact">
              {t("Trao đổi cơ hội hợp tác")}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Matrix Holding. All rights reserved.
          </span>

          <span>
            {t("Tập đoàn kinh doanh đa ngành")}
          </span>
        </div>
      </div>
    </footer>
  );
}