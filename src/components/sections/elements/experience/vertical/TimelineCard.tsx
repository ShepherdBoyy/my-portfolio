import type { VerticalCardProps } from "@/types";
import { hoverLift, sideCardVariant } from "@/utils/animations.utils";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin } from "lucide-react";

export default function TimelineCard({
  item,
  side,
  index = 0,
}: VerticalCardProps) {
  return (
    <motion.div
      custom={{ side, index }}
      variants={sideCardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      whileHover={hoverLift(4)}
      className={`group relative w-[45%] flex flex-col gap-3 bg-surface/80 backdrop-blur-md border border-border/60 rounded-3xl p-5 transition-[box-shadow,border-color] duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/40 cursor-pointer ${side === "left" ? "mr-auto" : "ml-auto"}`}
    >
      <p className="text-text text-sm font-bold leading-snug">{item.title}</p>
      <p className="text-accent text-xs font-semibold tracking-wide">
        {item.organization}
      </p>

      <div className="bg-border/60 w-full h-px" />

      <div className="flex items-center gap-2 text-muted text-xs">
        <Calendar size={12} className="shrink-0" />
        <span>{item.date}</span>
      </div>

      <div className="flex items-center gap-2 text-muted text-xs">
        <MapPin size={12} className="shrink-0" />
        <span>{item.address}</span>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
        <ExternalLink size={13} className="text-muted" />
      </div>
    </motion.div>
  );
}
