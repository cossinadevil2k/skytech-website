import React, { useEffect, useRef, useState } from "react";

export interface TimeLineItemProps {
  year: string;
  content: string[];
  position: "left" | "right";
}

export const TimeLineItem: React.FC<TimeLineItemProps> = ({
  year,
  content,
  position,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      setLineHeight(ref.current.offsetHeight);
    }
  }, []);

  const containerClasses =
    position === "left" ? "flex-row" : "flex-row-reverse";

  return (
    <div
      className={`flex w-full items-center justify-center ${containerClasses}`}
    >
      <div
        className={`w-5 border-t-2 border-blue-400`}
        style={{ height: lineHeight }}
      ></div>
      <div
        ref={ref}
        className={`relative flex w-full items-center justify-center rounded-lg border-2 border-blue-400 p-8 ${
          position === "left"
            ? "rounded-l-none border-l-0"
            : "rounded-r-none border-r-0"
        }`}
      >
        <div className="absolute -top-[10px]">
          <div className="relative inset-0 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white"></div>
        </div>
        <p className="absolute -top-10 whitespace-nowrap text-sm font-bold">
          {year}
        </p>
        <div className="p-4 font-light">
          {content.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      {position === "right" && <div className="w-1/2"></div>}
    </div>
  );
};
