import {
  TimeLineRowProps as ImportedTimeLineRowProps,
  TimeLineRow,
} from "@components/ui/TimeLineRow";
import React from "react";

import { TimeLineItem, TimeLineItemProps } from "@components/ui/TimeLineItem";

interface BaseTimeLineProps {
  id: string | number;
  position: "left" | "right";
}

interface TimeLineRowProps extends ImportedTimeLineRowProps {
  id: string | number;
  position: "left" | "right";
}

interface TimeLineProps {
  items: (
    | (TimeLineItemProps & BaseTimeLineProps)
    | (TimeLineRowProps & BaseTimeLineProps)
  )[];
}

const TimeLine: React.FC<TimeLineProps> = ({ items }) => {
  return (
    <div className="my-10 flex w-full flex-col">
      {items.map((item) =>
        "rowItems" in item ? (
          <TimeLineRow
            key={item.id}
            id={item.id}
            rowItems={item.rowItems}
            position={item.position}
          />
        ) : (
          <TimeLineItem key={item.id} {...item} position={item.position} />
        ),
      )}
    </div>
  );
};

export default TimeLine;
