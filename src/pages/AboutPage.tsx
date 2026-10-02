import AboutCommitments from "../components/sections/AboutCommitments";
import AboutFaq from "../components/sections/AboutFaq";
import Capabilities from "../components/sections/Capabilities";
import History from "../components/sections/History";
import Introduction from "../components/sections/Introduction";
import EcosystemOverview from "../components/sections/EcosystemOverview";
import Leadership from "../components/sections/Leadership";
import Partners from "../components/sections/Partners";
import VisionMission from "../components/sections/VisionMission";
import WorkProcess from "../components/sections/WorkProcess";
import Container from "../components/common/Container";
import { useLanguage } from "../i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-intro section-border">
        <Container>
          <span className="page-intro-eyebrow">{t("Giới thiệu")}</span>
          <h1>{t("Câu chuyện và định hướng Matrix Holding.")}</h1>
          <p>{t("Tìm hiểu về sứ mệnh, tầm nhìn, con người và cách Matrix Holding phát triển hệ sinh thái.")}</p>
        </Container>
      </section>
      <Introduction />
      <VisionMission />
      <EcosystemOverview />
      <Partners />
      <Leadership />
      <Capabilities />
      <History />
      <WorkProcess />
      <AboutCommitments />
      {/* <AboutFaq /> */}
    </>
  );
}
