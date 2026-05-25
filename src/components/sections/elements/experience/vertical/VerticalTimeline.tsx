import type { TimelineProps } from "@/types"
import TimelineCard from "./TimelineCard"

export default function VerticalTimeline({ items }: TimelineProps) {
  return (
    <div className="relative w-full flex flex-col gap-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/60" />

        {items.map((item, index) => {
            const side = index % 2 === 0 ? "left" : "right"

            return (
                <div
                    key={item.title}
                    className="flex items-center w-full py-8"
                >
                    <TimelineCard item={item} side={side} />

                    <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-accent shadow-md shadow-accent/40" />
                        <div className="absolute w-5 h-5 rounded-full bg-accent/30 animate-ping" />
                    </div>
                </div>
            )
        })}
    </div>
  )
}
