import React from "react";

interface TimelineItem {
  id: string;
  year: string;
  content: string[];
  rowItems?: {
    id: string;
    year: string;
    content: string | string[];
  }[];
}

interface MobileTimeLineProps {
  items: TimelineItem[];
}

const MobileTimeLine: React.FC<MobileTimeLineProps> = ({ items }) => {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={item.id} className="border-l-2 border-blue-400 pl-4">
          <h3 className="text-xl font-bold text-blue-400">{item.year}</h3>
          <ul className="mt-2 space-y-2">
            {item.content.map((content, index) => (
              <li key={`${item.id}-content-${index}`} className="text-sm">
                {content}
              </li>
            ))}
          </ul>
          {item.rowItems && (
            <div className="mt-4 space-y-4">
              {item.rowItems.map((rowItem) => (
                <div key={rowItem.id}>
                  <h4 className="text-lg font-semibold text-blue-300">
                    {rowItem.year}
                  </h4>
                  {Array.isArray(rowItem.content) ? (
                    <ul className="mt-1 space-y-1">
                      {rowItem.content.map((content, index) => (
                        <li key={`${rowItem.id}-${index}`} className="text-sm">
                          {content}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-1 text-sm">{rowItem.content}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileTimeLine;
