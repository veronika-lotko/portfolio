import React from "react";
import AboutMeSection from "../components/AboutMe/AboutMe";
import WorkExperienceSection from "../components/Experience/Experience";
import SkillsSection from "../components/Skills/Skills";
import ContactSection from "../components/Contact/Contact";
// import AboutMeSection from "../src/components/AboutMe/AboutMe";

const Home = () => {
  return (
    <>
      <AboutMeSection />
      <WorkExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};

export default Home;
