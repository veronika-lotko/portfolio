import React, { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { useBreakpoints } from "../../helpers/useBreakpoints";
import { MainWrapper } from "./styles";

const SkillsSection = () => {
  return (
    <MainWrapper id="skills" className="skills">
      <h1>SKILLS</h1>
      <div>Skill</div>
      <div>Skill</div>
      <div>Skill</div>
      <div>Skill</div>
      <div>Skill</div>
    </MainWrapper>
  );
};

export default SkillsSection;
