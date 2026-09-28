import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import { projects } from "../../data/projects";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="section projects section-border"
    >
      <Container>
        <div className="section-label">
          <span>05</span>
          <span>{t("Dự án & hoạt động")}</span>
        </div>

        <div className="projects-heading">
          <h2>
            {t("Những gì")}
            <br />
            {t("chúng tôi tạo ra.")}
          </h2>

          <p>
            {t("Những dự án, hoạt động và dấu ấn trong quá trình xây dựng hệ sinh thái Matrix Holding.")}
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.id}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={t(project.title)}
                  />
                </div>

                <div className="project-info">
                  <div>
                    <span>
                      {t(project.category)}
                      {project.year &&
                        ` · ${project.year}`}
                    </span>

                    <h3>{t(project.title)}</h3>
                  </div>

                  <ArrowUpRight size={22} />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-projects">
            <span>05</span>

            <div>
              <h3>
                {t("Dự án tiêu biểu")}
              </h3>

              <p>
                {t("Nội dung dự án sẽ được cập nhật khi hệ sinh thái Matrix Holding được hoàn thiện.")}
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}