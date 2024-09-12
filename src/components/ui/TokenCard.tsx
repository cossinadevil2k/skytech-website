import React from "react";

interface TokenCardProps {
  id: string;
  label: string;
  percentage: string;
  sublabel: string;
  onHover: (id: string | null) => void;
  isHighlighted: boolean;
}

const TokenCard: React.FC<TokenCardProps> = ({
  id,
  label,
  percentage,
  sublabel,
  onHover,
  isHighlighted,
}) => {
  return (
    <div
      className={`relative flex w-full items-center justify-between rounded-lg px-6 py-4 text-white transition-all duration-300 ${
        isHighlighted
          ? "scale-105 bg-blue-500 shadow-lg"
          : "hover:scale-105 hover:bg-blue-400 hover:shadow-md"
      }`}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className={`absolute left-0 top-1/2 h-full w-11 -translate-y-1/2 transform rounded-l-lg border-b-2 border-l-2 border-t-2 transition-colors duration-300 ${
          isHighlighted ? "border-white" : "border-gray-500"
        }`}
      ></div>
      <div className="w-full text-start">
        <p
          className={`text-sm font-bold transition-colors duration-300 sm:text-lg ${
            isHighlighted ? "text-white" : "group-hover:text-white"
          }`}
        >
          {label}
        </p>
        <div className="inline-flex items-center justify-center leading-7">
          <p
            className={`text-xl font-normal transition-colors duration-300 ${
              isHighlighted ? "text-white" : "group-hover:text-white"
            }`}
          >
            {percentage}%
          </p>
          <p
            className={`ml-2 text-xs transition-colors duration-300 ${
              isHighlighted
                ? "text-white"
                : "text-gray-400 group-hover:text-white/80"
            }`}
          >
            ({sublabel})
          </p>
        </div>
      </div>
      <div
        className={`absolute right-0 top-1/2 h-full w-11 -translate-y-1/2 transform rounded-r-lg border-b-2 border-r-2 border-t-2 transition-colors duration-300 ${
          isHighlighted ? "border-white" : "border-gray-500"
        }`}
      ></div>
    </div>
  );
};

const TokenCard2: React.FC<{ label: string; value: string; color: string }> = ({
  label,
  value,
  color,
}) => {
  return (
    <div className="px-4 py-6">
      <div className="relative flex flex-col items-start whitespace-nowrap pl-6">
        <div
          className={`absolute left-0 top-0 h-full w-1 rounded-b-full rounded-t-full ${getColorClass(color)}`}
        ></div>
        <p className="text-base font-bold uppercase leading-6 sm:mb-1 sm:text-sm">
          {label}
        </p>
        <p className="text-[0.9rem] font-medium leading-7 sm:text-xl">
          {value}
        </p>
      </div>
    </div>
  );
};

const getColorClass = (color: string): string => {
  switch (color) {
    case "purple":
      return "bg-purple-500";
    case "blue":
      return "bg-blue-500";
    case "green":
      return "bg-green-500";
    case "yellow":
      return "bg-yellow-500";
    case "red":
      return "bg-red-500";
    case "orange":
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
};

export { TokenCard, TokenCard2 };
