import React, { useState } from "react";
import {
  SiAmazonwebservices,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiSwift,
  SiTerraform,
} from "@icons-pack/react-simple-icons";
import { MainWrapper, SkillButton } from "./styles";
import { FaExternalLinkAlt } from "react-icons/fa";

const SkillsSection = () => {
  const [currentSkill, setCurrentSkill] = useState("");

  const handleChooseSkill = (skill: string) => {
    setCurrentSkill((prevSkill) => (prevSkill === skill ? "" : skill));
  };

  type Skill = {
    name: string;
    Icon: any;
    certificate?: string;
  };

  const skillCategories: { [key: string]: Skill[] } = {
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
      { name: "Go", Icon: SiGo },
    ],
    DevOps: [
      { name: "Terraform", Icon: SiTerraform },
      {
        name: "AWS",
        Icon: SiAmazonwebservices,
        certificate: "https://www.credly.com/badges/e90998dd-b568-4a38-a911-ad92ed82ad0a",
      },
      { name: "Docker", Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
    ],
    Tools: [
      { name: "npm", Icon: SiNpm },
      { name: "Git", Icon: SiGit },
    ],
    Design: [
      {
        name: "Figma",
        Icon: SiFigma,
        certificate: "https://www.coursera.org/account/accomplishments/professional-cert/BJ4M4HW2VJ8R",
      },
    ],
    Mobile: [
      {
        name: "Swift",
        Icon: SiSwift,
        certificate: "https://www.coursera.org/account/accomplishments/specialization/NC1JESPN8GZT",
      },
    ],
  };

  return (
    <MainWrapper id="skills" className="skills">
      <h1>SKILLS</h1>
      <div className="skills-wrapper">
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
                  <item.Icon className={currentSkill === item.name ? "active" : ""} as any />
                </SkillButton>
              ))}
            </div>
            {currentSkill && skills.some((skill) => skill.name === currentSkill) && (
              <div className="current-skill">
                <p>
                  {currentSkill}
                  {currentSkill && skills.find((skill) => skill.name === currentSkill && skill.certificate) && (
                    <a
                      href={skills.find((skill) => skill.name === currentSkill)?.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={9}>
                        <div>{skills.find((skill) => skill.name === currentSkill)?.certificate}</div>
                      </FaExternalLinkAlt>
                    </a>
                  )}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </MainWrapper>
  );
};

export default SkillsSection;
