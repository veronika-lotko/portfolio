import React from "react";
import { Circle, MainWrapper } from "./styles";
import { useWindowSize } from "@uidotdev/usehooks";
import { breakpoints } from "../../constants";

const AboutMeSection = () => {
  const { width } = useWindowSize();
  const screenWidth = width ?? 0;
  const isMobile = screenWidth <= breakpoints.tablet;

  return (
    <MainWrapper className="about-section" id="about">
      <div className="title-container">
        <h1>ABOUT ME</h1>
      </div>
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
