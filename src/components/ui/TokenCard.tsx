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
      className={`relative w-full flex items-center justify-between rounded-lg px-6 py-4 text-white transition-all duration-300 ${
        isHighlighted
          ? 'bg-blue-500 shadow-lg scale-105'
          : 'hover:bg-blue-500/20 hover:shadow-md hover:scale-102'
      }`}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`absolute left-0 top-1/2 h-full w-11 -translate-y-1/2 transform rounded-l-lg border-b-2 border-l-2 border-t-2 transition-colors duration-300 ${
        isHighlighted ? 'border-white' : 'border-gray-500'
      }`}></div>
      <div className="w-full text-start">
        <p className={`text-sm sm:text-lg font-bold transition-colors duration-300 ${
          isHighlighted ? 'text-white' : 'group-hover:text-white'
        }`}>{label}</p>
        <div className="inline-flex items-center justify-center leading-7">
          <p className={`text-xl font-normal transition-colors duration-300 ${
            isHighlighted ? 'text-white' : 'group-hover:text-white'
          }`}>{percentage}%</p>
          <p className={`ml-2 text-xs transition-colors duration-300 ${
            isHighlighted ? 'text-white' : 'text-gray-400 group-hover:text-white/80'
          }`}>({sublabel})</p>
        </div>
      </div>
      <div className={`absolute right-0 top-1/2 h-full w-11 -translate-y-1/2 transform rounded-r-lg border-b-2 border-r-2 border-t-2 transition-colors duration-300 ${
        isHighlighted ? 'border-white' : 'border-gray-500'
      }`}></div>
    </div>
  );
};

export default TokenCard;
