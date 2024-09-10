import EchosystemSection from "@components/section/EcosystemSection";
import HeroSection from "@components/section/HeroSection";
import TokensSection from "@components/section/TokensSection";
import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <EchosystemSection />
      <TokensSection />
    </>
  );
};

export default Index;
