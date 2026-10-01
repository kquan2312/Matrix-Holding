import Hero from "../components/sections/Hero";
import Introduction from "../components/sections/Introduction";
import BusinessUnits from "../components/sections/BusinessUnits";
import Projects from "../components/sections/Projects";
import Partners from "../components/sections/Partners";
import GroupScale from "../components/sections/GroupScale";
import History from "../components/sections/History";
import AboutFaq from "../components/sections/AboutFaq";
import WorkProcess from "../components/sections/WorkProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <AboutFaq />
      <GroupScale />
      <History />
      <WorkProcess />
      <BusinessUnits />
      {/* <Projects /> */}
      <Partners />
    </>
  );
}