import { useResizeObserver } from "@hooks/useResizeObserver";
import React, { useRef, useState } from "react";

export interface TimeLineRowProps {
  id: string | number;
  position: "left" | "right";
  rowItems: {
    year: string;
    content: string;
    position: "left" | "right";
  }[];
}

export const TimeLineRow: React.FC<TimeLineRowProps> = ({
  id,
  position,
  rowItems,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);
  const [lineWidth, setLineWidth] = useState<number>(0);

  useResizeObserver(ref, (entry) => {
    setLineHeight(entry.contentRect.height);
    setLineWidth(entry.contentRect.width);
  });

  return (
    <div className="relative -top-[2px] flex items-start justify-center">
      <div
        className={`w-5 rounded-l-lg border-2 border-r-0 border-blue-400 ${
          position === "left" ? "border-none" : ""
        }`}
        style={{ height: lineHeight + 2 }}
      ></div>
      <div
        ref={ref}
        className={`flex w-full items-start justify-around border-b-2 border-blue-400 ${
          position === "left"
            ? "relative -top-[2px] flex-row border-t-2"
            : "flex-row-reverse border-b-0"
        }`}
      >
        {rowItems.map((item) => (
          <div
            key={`${id}-${item.year}`}
            className={`relative flex items-center justify-center p-8`}
            style={{ width: lineWidth / rowItems.length }}
          >
            <div
              className={`absolute ${position === "left" ? "-top-[8px]" : "-top-[6px]"} `}
            >
              <div className="relative inset-0 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white"></div>
            </div>
            <p className="absolute -top-8 whitespace-nowrap text-center text-sm font-bold">
              {item.year}
            </p>
            <p className="p-4 text-center font-light">{item.content}</p>
          </div>
        ))}
      </div>
      {position !== "right" && (
        <div
          className={`relative -top-[2px] w-5 rounded-r-lg border-2 border-l-0 border-r-2 border-blue-400`}
          style={{ height: lineHeight + 4 }}
        ></div>
      )}
    </div>
  );
};
