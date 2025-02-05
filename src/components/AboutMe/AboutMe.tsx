import React from "react";
import { Circle, MainWrapper } from "./styles";

const AboutMeSection = () => {
  return (
    <MainWrapper className="about-section" id="about">
      <h1>ABOUT ME</h1>
      <div className="circle-container">
        <Circle className="circle">
          <img src="/photo/profile.png" alt="profile" />
        </Circle>
      </div>
      <p className="dynamic-text">
        Hey! 👋🏼 I am a Full-Stack Developer: I work with JS, React, Next.js, Node.js, AWS services.
      </p>
    </MainWrapper>
  );
};

export default AboutMeSection;
