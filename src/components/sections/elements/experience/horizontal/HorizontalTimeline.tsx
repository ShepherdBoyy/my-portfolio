import type { TimelineProps } from "@/types";
import TimelineCard from "./TimelineCard";

export default function HorizontalTimeline({ items }: TimelineProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex justify-center min-w-full">
        <div className="flex flex-col items-center w-full">

          <div className="flex items-end w-full pt-4">
            {items.map((item, index) => (
              <div key={item.title} className="flex-1 flex justify-center">
                {index % 2 === 0 && <TimelineCard item={item} position="above" />}
              </div>
            ))}
          </div>

          <div className="flex items-center w-full">
            {items.map((_, index) => (
              <div key={index} className="flex items-center flex-1">
                {index !== 0 && <div className="flex-1 h-0.5 bg-border/60" />}

                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 bg-accent rounded-full shadow-md shadow-accent/40" />
                  <div className="absolute bg-accent/30 w-5 h-5 rounded-full animate-ping" />
                </div>
                
                {index !== items.length - 1 && (
                  <div className="flex-1 h-0.5 bg-border/60" />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-start w-full pb-4">
            {items.map((item, index) => (
              <div key={index} className="flex-1 flex justify-center">
                {index % 2 !== 0 && <TimelineCard item={item} position="below" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
