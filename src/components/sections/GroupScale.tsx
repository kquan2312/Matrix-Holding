import Container from "../common/Container";
import { groupStats } from "../../data/groupStats";
import { useLanguage } from "../../i18n/LanguageContext";
import { useEffect, useRef, useState } from "react";

export default function GroupScale() {
  const { t } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);

const [started, setStarted] = useState(false);

const [animatedValues, setAnimatedValues] = useState(
  groupStats.map(() => 0)
);

useEffect(() => {
  const element = statsRef.current;

  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    },
    { threshold: 0.35 }
  );

  observer.observe(element);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!started) return;

  const duration = 1400;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const progress = Math.min(
      (currentTime - startTime) / duration,
      1
    );

    const eased = 1 - Math.pow(1 - progress, 3);

    setAnimatedValues(
      groupStats.map((stat) =>
        Math.floor(Number(stat.value) * eased)
      )
    );

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [started]);

  return (
    <section className="section group-scale section-border">
      <Container>
        <div className="section-label">
          <span>02</span>
          <span>{t("Quy mô tập đoàn")}</span>
        </div>

        <div className="group-scale-heading">
          <h2>
            {t("Một hệ sinh thái")}
            <br />
            {t("đang vươn rộng.")}
          </h2>
          <p>
            {t("Matrix Holding hướng tới xây dựng một hệ sinh thái kinh doanh có khả năng mở rộng về quy mô, lĩnh vực và thị trường, kết nối các nguồn lực để tạo ra giá trị dài hạn.")}
          </p>
        </div>

        <div className="group-stats" ref={statsRef}>
          {groupStats.map((stat, index) => (
            <article className="group-stat" key={stat.id}>
              <span className="group-stat-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="group-stat-content">
                <h3>{t(stat.label)}</h3>

                {stat.description && (
                  <p>{t(stat.description)}</p>
                )}
              </div>

              <span className="group-stat-status">
                {/* {t(stat.value)} */}
                {animatedValues[index]}+
              </span>
            </article>
          ))}
        </div>

        <div className="group-footprint">
          <div className="group-footprint-label">
            <span>{t("DẤU ẤN")}</span>
            {/* <span>01</span> */}
          </div>

          <div className="group-footprint-content">
            <div>
              <span>{t("THỊ TRƯỜNG")}</span>
              <strong>{t("Đang mở rộng")}</strong>
            </div>

            <div>
              <span>{t("HỆ SINH THÁI")}</span>
              <strong>{t("Đa ngành")}</strong>
            </div>

            <div>
              <span>{t("ĐỊNH HƯỚNG")}</span>
              <strong>{t("Dài hạn")}</strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}