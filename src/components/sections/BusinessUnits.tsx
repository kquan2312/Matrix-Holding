import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import Container from "../common/Container";
import { businessUnits } from "../../data/businessUnits";
import { useLanguage } from "../../i18n/LanguageContext";

export default function BusinessUnits() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const visibleBusinessUnits = showAll
    ? businessUnits
    : businessUnits.slice(0, 4);

  return (
    <section
      id="business"
      className="section business-units section-border"
    >
      <Container>
        <div className="section-label">
          <span>04</span>
          <span>{t("Lĩnh vực kinh doanh")}</span>
        </div>

        <div className="business-heading">
          <h2>
            {t("Một hệ sinh thái")}
            <br />
            {t("đang được mở rộng.")}
          </h2>

          <p>
            {t("Matrix Holding hướng tới phát triển những lĩnh vực có khả năng bổ trợ, kết nối và tạo ra giá trị lâu dài.")}
          </p>
        </div>

        {visibleBusinessUnits.length > 0 ? (
          <>
            <div className="business-grid">
              {visibleBusinessUnits.map((unit, index) => (
                <article
                  className="business-card"
                  key={unit.id}
                >
                  <div className="business-image">
                    <img
                      src={unit.image}
                      alt={t(unit.name)}
                    />
                  </div>

                  <div className="business-content">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3>{t(unit.name)}</h3>
                      <p>{t(unit.description)}</p>
                    </div>

                    <ArrowUpRight size={22} />
                  </div>
                </article>
              ))}
            </div>
            {businessUnits.length > 4 && (
              <div className="business-expand">
                <button
                  type="button"
                  className="business-expand-button"
                  aria-expanded={showAll}
                  onClick={() => setShowAll((expanded) => !expanded)}
                >
                  <span className="business-expand-icon" aria-hidden="true">
                    {showAll ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                  <span>
                    {showAll
                      ? t("Thu gọn lĩnh vực")
                      : t("Xem thêm lĩnh vực")}
                  </span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="empty-business">
            <span>01</span>

            <div>
              <h3>
                {t("Các lĩnh vực kinh doanh đang được cập nhật")}
              </h3>

              <p>
                {t("Hệ sinh thái Matrix Holding sẽ được giới thiệu chi tiết trong thời gian tới.")}
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}