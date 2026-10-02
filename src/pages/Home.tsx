import Hero from "../components/sections/Hero";
import HomeAboutPreview from "../components/sections/HomeAboutPreview";
import EcosystemOverview from "../components/sections/EcosystemOverview";
import Partners from "../components/sections/Partners";
import News from "../components/sections/News";
import CareersOverview from "../components/sections/CareersOverview";
import AboutFaq from "../components/sections/AboutFaq";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAboutPreview />
      <EcosystemOverview />
      <Partners preview />
      <News preview />
      <CareersOverview />
      <AboutFaq />
      <CTA />
    </>
  );
}