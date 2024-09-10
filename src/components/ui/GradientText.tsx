import React from "react";

interface GradientTextProps {
  text: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div className={`relative ${className} mt-12 sm:mt-24`}>
      <div className="relative">
        <div className="absolute inset-0 flex select-none items-center justify-center">
          <span className="bg-gradient-to-r from-blue-950 to-blue-200 bg-clip-text text-6xl font-medium uppercase text-transparent opacity-20 sm:text-9xl">
            {text}
          </span>
        </div>
        <div className="relative flex items-center justify-center text-2xl font-medium text-white sm:text-6xl">
          {text}
        </div>
      </div>
    </div>
  );
};

export default GradientText;
