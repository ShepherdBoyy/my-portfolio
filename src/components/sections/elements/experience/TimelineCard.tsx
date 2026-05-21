import type { ExperienceItem } from "@/types";
import { Calendar, ExternalLink, MapPin } from "lucide-react";

type Props = {
  item: ExperienceItem;
  position: "above" | "below";
};

export default function TimelineCard({ item, position }: Props) {
  return (
    <div
      className={`group relative w-80 flex flex-col gap-4 bg-surface/80 backdrop-blur-md border border-border/60 rounded-3xl p-6 transition-all duraiton-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/40 cursor-pointer ${position === "above" ? "mb-12" : "mt-12"}`}
      onClick={() => window.open(item.url, "_blank")}
    >
      <p className="text-text text-base font-bold leading-snug">{item.title}</p>
      <p className="text-accent text-sm font-semibold tracking-wide">
        {item.organization}
      </p>

      <div className="bg-border/60 w-full h-px" />

      <div className="flex items-center gap-2 text-muted text-xs">
        <Calendar size={14} />
        <span>{item.date}</span>
      </div>

      <div className="flex items-center gap-2 text-muted text-xs">
        <MapPin size={14} />
        <span>{item.address}</span>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
        <ExternalLink size={14} className="text-muted" />
      </div>
    </div>
  );
}
