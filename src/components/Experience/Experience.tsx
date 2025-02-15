import React, { useState } from "react";
import { JobsWrapper, MainWrapper, StyledSwitcher, SwitcherWrapper } from "./styles";
import { useWindowSize } from "@uidotdev/usehooks";
import { useBreakpoints } from "../../helpers/useBreakpoints";

const options = [
  {
    label: "Full-Stack Developer",
    value: "Full-Stack Developer",
  },
  {
    label: "DevOps Engineer",
    value: "DevOps Engineer",
  },
];

const initialSelectedIndex = options.findIndex(({ label }) => label === "Full-Stack Developer");

const WorkExperienceSection = () => {
  const [selectedJob, setSelectedJob] = useState("Full-Stack Developer");

  const onChange = (newValue: any) => {
    setSelectedJob(newValue);
  };

  const { isMobile } = useBreakpoints();

  return (
    <MainWrapper id="work" className="work-section">
      <h1>WORK EXPERIENCE</h1>
      <SwitcherWrapper>
        <StyledSwitcher
          onChange={onChange}
          options={options}
          initialSelectedIndex={initialSelectedIndex}
          fontSize={isMobile ? 24 : 28}
          backgroundColor="rgba(255, 255, 255, 0.3)"
          fontColor="rgba(255, 255, 255, 0.9)"
          selectedFontColor="var(--color-black)"
          selectedBackgroundColor="var(--color-white)"
          wrapperBorderRadius={isMobile ? 0 : 30}
          optionBorderRadius={0}
        />
      </SwitcherWrapper>
      <JobsWrapper>
        {selectedJob === "Full-Stack Developer" ? (
          <p>
            Full-Stack Developer at 1NCE (2023 - present)
            <ul>
              <li>
                Developing and maintaining web applications using React and Next.js, ensuring high performance and
                responsiveness across devices
              </li>
              <li>
                Building scalable backend systems using AWS services and Node.js to support complex web applications
              </li>
              <li>
                Collaborating with cross-functional teams to define project requirements and deliver high-quality
                software
              </li>
              <li>
                Implementing CI/CD pipelines and version control with Git to streamline development and deployment
                processes
              </li>
              <li>Optimizing application performance through code refactoring, testing, and code reviews</li>
              <li>
                Monitoring application health and debugging issues in production environments to maintain system
                reliability
              </li>
            </ul>
          </p>
        ) : (
          <p>
            DevOps Engineer at Accenture (2022-2023)
            <ul>
              <li>
                Designed and implemented infrastructure as code (IaC) using Terraform to automate cloud resource
                management
              </li>
              <li>
                Managed containerized applications with Docker and Kubernetes, ensuring scalability and high
                availability
              </li>
              <li>Set up and optimized CI/CD pipelines to improve software delivery speed and reduce errors</li>
              <li>
                Collaborated with development teams to ensure smooth integration and deployment of applications on AWS
              </li>
              <li>Monitored and maintained system performance, responding to issues promptly to ensure uptime</li>
            </ul>
          </p>
        )}
      </JobsWrapper>
    </MainWrapper>
  );
};

export default WorkExperienceSection;
