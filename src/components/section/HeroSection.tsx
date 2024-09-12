import heroImage from "@assets/hero-image.png";
import ProcessBar from "@components/ui/ProcessBar";
import { ChevronsRight } from "lucide-react";
import React from "react";
const Button = (label: string) => {
  return (
    <button className="flex min-w-[120px] items-center gap-2 whitespace-nowrap rounded-md border-2 border-blue-400 p-1 text-[11px] leading-6 tracking-[1.2px] text-white delay-75 duration-300 ease-in-out hover:bg-blue-400">
      <span className="px-[13px]">{label}</span>
      <ChevronsRight className="rounded-md bg-white p-1 text-blue-500" />
    </button>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div id="home" className="flex flex-col gap-10">
      <div className="flex flex-col-reverse items-center justify-center text-center sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center justify-center gap-4 sm:w-2/5 sm:items-start sm:text-left">
          <h1 className="text-2xl font-medium leading-9 sm:text-[1.75rem]">
            THE WORLD'S BEST BLOCKCHAIN-BASED FREELANCER COMMUNITY
          </h1>
          <p className="text-[1.1rem] font-light leading-8">
            The first Freelance Marketplaces which makes simplifies and
            standardizes data with blockchain technology. We provide
            user-friendly, efficient, and secure crypto solutions and utilize
            blockchain technology.
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-1">
            {Button("JOIN PRE-SALE")}
            {Button("WHITEPAPER")}
          </div>
        </div>
        <div className="flex items-center justify-center p-4 sm:w-1/2">
          <img src={heroImage} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
        <ProcessBar raised={75} target={100} containerClassName="sm:w-1/2" />
        <div className="flex flex-col items-start justify-around gap-4 sm:w-1/2 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start sm:gap-2">
            <p className="text-xs font-medium leading-4 text-blue-400">
              THE SELLING SCHEDULE
            </p>
            <p className="text-[1.2rem] font-light leading-[1.45rem] sm:text-2xl sm:leading-8">
              Sale 10
            </p>
            <span className="text-xs font-light leading-5">Price: $0.19</span>
          </div>
          <div className="flex flex-col items-center gap-1 sm:items-start sm:gap-2">
            <p className="text-xs font-medium leading-4 text-blue-400">
              THE TOKEN SELLING
            </p>
            <p className="text-[1.2rem] font-light leading-[1.45rem] sm:text-2xl sm:leading-8">
              19,000,000 SKY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
