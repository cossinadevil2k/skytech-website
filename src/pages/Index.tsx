import EchosystemSection from "@components/section/EcosystemSection";
import ForParticipators from "@components/section/ForParticipators";
import HeroSection from "@components/section/HeroSection";
import TokensSection from "@components/section/TokensSection";
import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <EchosystemSection />
      <TokensSection />
      <ForParticipators />
    </>
  );
};

export default Index;
