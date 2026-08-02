import type { TimelineProps } from "@/types";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { staggeredFadeUp } from "@/utils/animations.utils";

export default function StackedCards({ items }: TimelineProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          custom={{ index }}
          variants={staggeredFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          whileTap={{ scale: 0.97 }}
          className="group relative w-full flex flex-col gap-3 bg-surface/80 backdrop-blur-md border border-border/60 rounded-3xl p-5 transition-[box-shadow,border-color] duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 cursor-pointer"
          onClick={() => window.open(item.url, "_blank")}
        >
          <p className="text-text text-sm font-bold leading-snug">
            {item.title}
          </p>
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
      ))}
    </div>
  );
}