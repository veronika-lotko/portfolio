import React from "react";
import { Circle, MainWrapper } from "./styles";
import { useBreakpoints } from "../../helpers/useBreakpoints";

const AboutMeSection = () => {
  const { isMobile } = useBreakpoints();

  return (
    <MainWrapper className="about-section" id="about">
      <h1>ABOUT ME</h1>
      <div className="content-container">
        <div className="circle-container">
          {isMobile ? (
            <>
              <Circle className="circle-1" />
              <Circle className="circle-2">
                <img src="/photo/profile.png" alt="profile" />
              </Circle>
              <Circle className="circle-3" />
              <Circle className="circle-4" />
            </>
          ) : (
            <>
              <Circle className="circle-1">
                <img src="/photo/profile.png" alt="profile" />
              </Circle>
            </>
          )}
        </div>
        <p className="dynamic-text">
          Hey! 👋🏼 I am a Full-Stack Developer: I work with JS, React, Next.js, Node.js, AWS services.
        </p>
      </div>
    </MainWrapper>
  );
};

export default AboutMeSection;
