import { useIsMobile } from "@hooks/useIsMobile";
import React from "react";
import GradientText from "../ui/GradientText";
import MobileTimeLine from "../ui/MobileTimeLine";
import TimeLine from "../ui/TimeLine";

const RoadMapSection: React.FC = () => {
  const isMobile = useIsMobile();

  const timelineData = [
    {
      id: "2021",
      year: "2021",
      content: [
        "Research on the digital platform SkyTech",
        "Establish a team to develop the project",
      ],
      position: "left" as const,
    },
    {
      id: "2022",
      year: "2022",
      content: ["2022 Overview"],
      rowItems: [
        {
          id: "2022 Q1",
          year: "2022 Q1",
          content:
            "Check the separate smart contract of the block-based SkyTech platform.",
        },
        {
          id: "2022-Q2",
          year: "2022 Q2",
          content:
            "Develop a privacy policy for transparently distributed services between buyers and sellers on a BEP20 platform.",
        },
        {
          id: "2022 Q3",
          year: "2022 Q3",
          content:
            "Test the services of the algorithm in the ecosystem on the Blockchain platform, and the ability to extend the decentralized application to third parties.",
        },
        {
          id: "2022 Q4",
          year: "2022 Q4",
          content:
            "Analyzing the market, and assessing service potential from 2023 to the future.",
        },
      ],
      position: "right" as const,
    },
    {
      id: "2023",
      year: "2023",
      content: ["2023 Overview"],
      rowItems: [
        {
          id: "2023-Q1",
          year: "2023 Q1",
          content: [
            "Publish Whitepaper",
            "Initial talks with high-profile investors",
          ],
        },
        {
          id: "2023-Q2",
          year: "2023 Q2",
          content: ["Pre-sale", "Provide SkyTech service demo"],
        },
        {
          id: "2023-Q3",
          year: "2023 Q3",
          content: [
            "Inter-Blockchain Compatibility",
            "Decentralization expansion",
          ],
        },
        {
          id: "2023-Q4",
          year: "2023 Q4",
          content: [
            "Launching essential services for users and service providers",
            "Improved security, enhanced security",
          ],
        },
      ],
      position: "left" as const,
    },
  ];

  return (
    <section id="roadmap" className="py-12">
      <GradientText text="Our Roadmap" className="mb-12" />
      {isMobile ? (
        <MobileTimeLine items={timelineData} />
      ) : (
        <TimeLine items={timelineData} />
      )}
    </section>
  );
};

export default RoadMapSection;
