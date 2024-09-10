import React, { useEffect, useState } from "react";

interface Slice {
  id: string;
  value: number;
  label: string;
}

interface PieChartProps {
  slices: Slice[];
  className?: string;
  highlightedSliceId: string | null;
}

const calculatePieData = (slices: Slice[]) => {
  const total = slices.reduce((sum, slice) => sum + slice.value, 0);
  let startAngle = 0;

  return slices.map((slice) => {
    const valuePercentage = (slice.value / total) * 100;
    const endAngle = startAngle + (valuePercentage / 100) * 360;
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    const x1 = 100 + 100 * Math.cos((Math.PI * startAngle) / 180);
    const y1 = 100 + 100 * Math.sin((Math.PI * startAngle) / 180);
    const x2 = 100 + 100 * Math.cos((Math.PI * endAngle) / 180);
    const y2 = 100 + 100 * Math.sin((Math.PI * endAngle) / 180);

    startAngle = endAngle;

    return {
      ...slice,
      path: `M100,100 L${x1},${y1} A100,100 0 ${largeArcFlag},1 ${x2},${y2} Z`,
    };
  });
};

const PieChart: React.FC<PieChartProps> = ({ slices, className, highlightedSliceId }) => {
  const [hoveredSlice, setHoveredSlice] = useState<Slice | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [pieData, setPieData] = useState(calculatePieData(slices));

  useEffect(() => {
    setPieData(calculatePieData(slices));
  }, [slices]);

  const handleMouseMove = (event: React.MouseEvent) => {
    setTooltipPosition({
      x: event.clientX + 10,
      y: event.clientY + 10,
    });
  };

  const activeSlice = hoveredSlice || pieData.find(slice => slice.id === highlightedSliceId);

  return (
    <div className={`relative ${className}`} onMouseMove={handleMouseMove}>
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        {pieData.map((slice) => (
          <path
            key={slice.id}
            d={slice.path}
            onMouseEnter={() => setHoveredSlice(slice)}
            onMouseLeave={() => setHoveredSlice(null)}
            className={`stroke-gray-900 stroke-1 transition-all delay-75 duration-300 ${
              slice.id === highlightedSliceId || slice === hoveredSlice
                ? 'fill-blue-500'
                : 'fill-blue-950 hover:fill-blue-500'
            }`}
          />
        ))}
      </svg>
      {activeSlice && tooltipPosition && (
        <div
          className="fixed flex items-center justify-center rounded bg-blue-400 bg-opacity-50 p-2 shadow-lg"
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
          }}
        >
          <p>{activeSlice.label}: {activeSlice.value}%</p>
        </div>
      )}
    </div>
  );
};

export default PieChart;
