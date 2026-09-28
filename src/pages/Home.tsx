import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Introduction from "../components/sections/Introduction";
import Ecosystem from "../components/sections/Ecosystem";
import BusinessUnits from "../components/sections/BusinessUnits";
import Projects from "../components/sections/Projects";
import Capabilities from "../components/sections/Capabilities";
import VisionMission from "../components/sections/VisionMission";
import Leadership from "../components/sections/Leadership";
import Partners from "../components/sections/Partners";
import PartnerFeedback from "../components/sections/PartnerFeedback";
import News from "../components/sections/News";
import CTA from "../components/sections/CTA";
import GroupScale from "../components/sections/GroupScale";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />

      <main>
        <Hero />

        <Introduction />

        <GroupScale />

        <Ecosystem />

        <BusinessUnits />

        <Projects />

        <Capabilities />

        <VisionMission />

        <Leadership />

        <Partners />

        <PartnerFeedback />

        <News />

        <CTA />
      </main>

      <Footer />
    </>
  );
}