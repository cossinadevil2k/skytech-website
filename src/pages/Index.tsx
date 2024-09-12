import EchosystemSection from "@components/section/EcosystemSection";
import ForParticipators from "@components/section/ForParticipators";
import HeroSection from "@components/section/HeroSection";
import RoadMapSection from "@components/section/RoadMapSection";
import TokensSection from "@components/section/TokensSection";
import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <EchosystemSection />
      <TokensSection />
      <ForParticipators />
      <RoadMapSection />
    </>
  );
};

export default Index;
