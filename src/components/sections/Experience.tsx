import type { ExperienceTab } from "@/types";
import { Award } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HorizontalTimeline from "./elements/experience/horizontal/HorizontalTimeline";
import { academicBackground, workExperiences } from "@/data/experience.data";
import CertModal from "./elements/experience/CertModal";
import VerticalTimeline from "./elements/experience/vertical/VerticalTimeline";
import StackedCards from "./elements/experience/StackedCards";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<ExperienceTab>("work");
  const [certModalOpen, setCertModalOpen] = useState<boolean>(false);

  const activeItems =
    activeTab === "work" ? workExperiences : academicBackground;

  return (
    <div className="flex-1 min-h-0 flex flex-col gap-6 sm:gap-8 px-6 sm:px-12 xl:px-24 py-5">
      <div className="flex items-center justify-center sm:justify-start">
        <div className="grid grid-cols-2 sm:inline-flex items-center gap-2 bg-surface rounded-xl p-1.5 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab("work")}
            className={`relative px-3 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer whitespace-nowrap
              ${activeTab === "work" ? "text-text" : "text-muted hover:text-text"}`}
          >
            {activeTab === "work" && (
              <motion.span
                layoutId="experience-tab-pill"
                className="absolute inset-0 bg-accent rounded-lg shadow-lg shadow-accent/20"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">Work Experience</span>
          </button>
          <button
            onClick={() => setActiveTab("academic")}
            className={`relative px-3 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer whitespace-nowrap
              ${activeTab === "academic" ? "text-text" : "text-muted hover:text-text"}`}
          >
            {activeTab === "academic" && (
              <motion.span
                layoutId="experience-tab-pill"
                className="absolute inset-0 bg-accent rounded-lg shadow-lg shadow-accent/20"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">Academic Background</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full flex flex-1 items-center"
          >
            <div className="w-full block md:hidden">
              <StackedCards items={activeItems} />
            </div>

            <div className="w-full hidden md:block lg:hidden">
              <VerticalTimeline items={activeItems} />
            </div>

            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="w-full max-w-7xl">
                <HorizontalTimeline items={activeItems} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center sm:justify-end">
        <motion.button
          onClick={() => setCertModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex items-center gap-3 cursor-pointer bg-accent text-text px-5 py-3 rounded-2xl shadow-xl"
        >
          <Award size={18} />
          <span className="text-sm font-semibold tracking-wide">
            Certifications
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {certModalOpen && (
          <CertModal onClose={() => setCertModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}