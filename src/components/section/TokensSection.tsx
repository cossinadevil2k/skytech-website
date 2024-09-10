import GradientText from "@components/ui/GradientText";
import PieChart from "@components/ui/PieChart";
import TokenCard from "@components/ui/TokenCard";
import React, { useState } from "react";

const TokensSection: React.FC = () => {
  const [highlightedSliceId, setHighlightedSliceId] = useState<string | null>(
    null,
  );

  const slices = [
    {
      id: "1",
      value: 16.5,
      label: "Private Sale",
      sublabel: "Unlock tokens after the end of Private Sale",
    },
    {
      id: "2",
      value: 33.3,
      label: "Public Sale",
      sublabel: "Sale in Q1- 2024",
    },
    { id: "3", value: 10, label: "Core Team", sublabel: "24 months lockup" },
    { id: "4", value: 5, label: "Advisor", sublabel: "18 months lockup" },
    {
      id: "5",
      value: 35,
      label: "Network growth Fund",
      sublabel: "36 months lockup",
    },
  ];

  const handleCardHover = (id: string | null) => {
    setHighlightedSliceId(id);
  };

  return (
    <section id="tokens" className="py-12">
      <GradientText text="Tokens" className="my-6 sm:my-12" />
      <p className="text-center text-base">
        Breakdown of our Token Recipients.
      </p>
      <div className="flex flex-col items-center justify-center gap-10 py-10 sm:flex-row-reverse sm:py-2">
        <PieChart
          slices={slices}
          className="sm:w-1/2 sm:p-16"
          highlightedSliceId={highlightedSliceId}
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:w-1/2 sm:grid-cols-2">
          {slices.map((slice) => (
            <TokenCard
              key={slice.id}
              id={slice.id}
              label={slice.label}
              percentage={slice.value.toString()}
              sublabel={slice.sublabel}
              onHover={handleCardHover}
              isHighlighted={slice.id === highlightedSliceId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokensSection;
