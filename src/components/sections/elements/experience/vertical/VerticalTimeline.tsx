import type { TimelineProps } from "@/types"
import TimelineCard from "./TimelineCard"

export default function VerticalTimeline({ items }: TimelineProps) {
  return (
    <div className="relative w-full flex flex-col">
        {items.map((item, index) => {
            const side = index % 2 === 0 ? "left" : "right"

            return (
                <div
                    key={item.title}
                    className="relative flex items-center w-full"
                >
                    {index !== 0 && (
                        <div className="bg-border/60 w-[2px] absolute left-1/2 -translate-x-1/2 top-0 bottom-1/2" />
                    )}

                    {index !== items.length - 1 && (
                        <div className="bg-border/60 w-[2px] absolute left-1/2 -translate-x-1/2 top-1/2 bottom-0" />
                    )}

                    <TimelineCard item={item} side={side} />

                    <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-accent shadow-md shadow-accent/40" />
                        <div className="absolute w-4 h-4 rounded-full bg-accent/30 animate-ping" />
                    </div>
                </div>
            )
        })}
    </div>
  )
}
