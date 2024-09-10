import { cn } from "@utils/Lib";

interface ProcessBarProps {
  raised: number;
  target: number;
  containerClassName?: string;
  barClassName?: string;
  markerClassName?: string;
}

const ProcessBar: React.FC<ProcessBarProps> = ({
  raised,
  target,
  containerClassName,
  barClassName,
  markerClassName,
}) => {
  const progressPercentage = (raised / target) * 100;

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center p-4",
        containerClassName,
      )}
    >
      <div className="relative mt-2 flex w-full justify-between text-white">
        <div className="text-xs font-light text-gray-400">
          RAISED -{" "}
          <span className="text-sm font-medium text-white">
            {raised.toLocaleString()} SKY
          </span>
        </div>
        <div className="text-xs font-light text-gray-400">
          TARGET -{" "}
          <span className="text-sm font-medium text-white">
            {target.toLocaleString()} SKY
          </span>
        </div>
      </div>

      <div className="relative mt-6 flex h-2 w-full items-center justify-center rounded-full bg-gray-800">
        <div
          className={cn(
            "absolute left-0 top-0 h-2 rounded-full bg-blue-400",
            barClassName,
          )}
          style={{ width: `${progressPercentage}%` }}
        />

        <div
          className={cn(
            "absolute z-10 h-5 w-5 rounded-full border-2 border-white bg-blue-400",
            markerClassName,
          )}
          style={{ left: `calc(${progressPercentage}% - 9px)` }}
        />

        <div
          className="absolute h-8 w-0.5 bg-gray-400"
          style={{ left: "25%" }}
        ></div>
        <div
          className="absolute h-8 w-0.5 bg-gray-400"
          style={{ left: "50%" }}
        ></div>
        <div
          className="absolute h-8 w-0.5 bg-gray-400"
          style={{ left: "75%" }}
        ></div>
      </div>

      <div className="relative mt-4 w-full text-xs font-medium">
        <div
          className="absolute -translate-x-1/2 transform text-gray-400"
          style={{ left: "25%" }}
        >
          <span>SOFT CAP</span>
        </div>
        <div
          className="absolute -translate-x-1/2 transform text-gray-400"
          style={{ left: "50%" }}
        >
          <span>CROWDSALE</span>
        </div>
        <div
          className="absolute -translate-x-1/2 transform text-gray-400"
          style={{ left: "75%" }}
        >
          <span>HARD CAP</span>
        </div>
      </div>
    </div>
  );
};
export default ProcessBar;
