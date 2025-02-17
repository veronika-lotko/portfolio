import React, { useState } from "react";
import {
  SiAmazonwebservices,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiTerraform,
} from "@icons-pack/react-simple-icons";
import { MainWrapper, SkillButton } from "./styles";

const SkillsSection = () => {
  const [currentSkill, setCurrentSkill] = useState("");

  const handleChooseSkill = (skill: string) => {
    setCurrentSkill((prevSkill) => (prevSkill === skill ? "" : skill));
  };

  const skillCategories = {
    Frontend: [
      { name: "JavaScript", Icon: SiJavascript },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
    ],
    Backend: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
    ],
    DevOps: [
      { name: "Terraform", Icon: SiTerraform },
      { name: "AWS", Icon: SiAmazonwebservices },
      { name: "Docker", Icon: SiDocker },
    ],
    Tools: [
      { name: "npm", Icon: SiNpm },
      { name: "Git", Icon: SiGit },
    ],
  };

  return (
    <MainWrapper id="skills" className="skills">
      <h1>SKILLS</h1>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <p>{category}</p>
          <div>
            {skills.map((item, index) => (
              <SkillButton
                key={index}
                onClick={() => handleChooseSkill(item.name)}
                className={currentSkill === item.name ? "active" : ""}
              >
                <item.Icon className={currentSkill === item.name ? "active" : ""} />
              </SkillButton>
            ))}
          </div>
          {currentSkill && skills.some((skill) => skill.name === currentSkill) && (
            <div className="current-skill">
              <p>{currentSkill}</p>
            </div>
          )}
        </div>
      ))}
    </MainWrapper>
  );
};

export default SkillsSection;
