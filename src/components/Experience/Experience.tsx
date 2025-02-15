import React, { useState } from "react";
import { JobsWrapper, MainWrapper, StyledSwitcher } from "./styles";
import { useBreakpoints } from "../../helpers/useBreakpoints";
import SwitchSelector from "react-switch-selector";
import { size } from "lodash";

const options = [
  {
    label: "Full-Stack Developer",
    value: "First Job",
    backgroundColor: "#a70404",
  },
  {
    label: "DevOps Engineer",
    value: "Second Job",
    backgroundColor: "#a70404",
  },
];

const initialSelectedIndex = options.findIndex(({ value }) => value === "First Job");

const WorkExperienceSection = () => {
  // const { isMobile } = useBreakpoints();
  const [selectedJob, setSelectedJob] = useState("First Job");

  const onChange = (newValue: any) => {
    setSelectedJob(newValue);
  };

  return (
    <MainWrapper id="experience">
      <h1>WORK EXPERIENCE</h1>
      <StyledSwitcher
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        fontSize={28}
        backgroundColor="rgba(255, 255, 255, 0.3)"
        fontColor="rgba(255, 255, 255, 0.7)"
        selectedFontColor="var(--color-black)"
        selectedBackgroundColor="var(--color-white)"
      />
      <JobsWrapper>
        {selectedJob === "First Job" ? (
          <p>
            Full-Stack Developer at 1NCE (2023 - present)
            <li>Building projects using React and Next.js</li>
            <li>Creating backend for projects using AWS services and Node.js</li>
          </p>
        ) : (
          <p>DevOps Engineer at Accenture (2022-2023) </p>
        )}
      </JobsWrapper>
    </MainWrapper>
  );
};

export default WorkExperienceSection;
