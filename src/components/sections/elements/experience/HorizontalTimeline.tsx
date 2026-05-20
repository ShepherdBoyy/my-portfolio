import type { ExperienceItem } from "@/types";
import TimelineCard from "./TimelineCard";

type Props = {
  items: ExperienceItem[];
};

export default function HorizontalTimeline({ items }: Props) {
  return (
    <div className="flex justify-center min-w-max">
      <div className="flex flex-col items-center">
        <div className="flex items-end">
          {items.map((item, index) => (
            <div key={item.title} className="w-[320px] flex justify-center">
              {index % 2 === 0 && <TimelineCard item={item} position="above" />}
            </div>
          ))}
        </div>

        <div className="flex items-center w-full">
          {items.map((_, index) => (
            <div key={index} className="flex items-center w-[320px]">
              {index !== 0 && <div className="flex-1 h-[2px] bg-border/60" />}
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 bg-accent rounded-full shadow-md shadow-accent/40" />
                <div className="absolute bg-accent/30 w-5 h-5 rounded-full animate-ping" />
              </div>
              {index !== items.length - 1 && (
                <div className="flex-1 h-[2px] bg-border/60" />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-start">
          {items.map((item, index) => (
            <div className="w-[320px] flex justify-center">
              {index % 2 !== 0 && <TimelineCard item={item} position="below" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
