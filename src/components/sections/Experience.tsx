import type { ExperienceTab } from "@/types";
import { Award } from "lucide-react";
import { useState } from "react";
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
            className={`px-3 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap
              ${
                activeTab === "work"
                  ? "bg-accent text-text shadow-lg shadow-accent/20"
                  : "text-muted hover:text-text"
              }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("academic")}
            className={`px-3 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap
              ${
                activeTab === "academic"
                  ? "bg-accent text-text shadow-lg shadow-accent/20"
                  : "text-muted hover:text-text"
              }`}
          >
            Academic Background
          </button>
        </div>
      </div>

      <div key={activeTab} className="flex-1 flex items-center">
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
      </div>

      <div className="flex justify-center sm:justify-end">
        <button
          onClick={() => setCertModalOpen(true)}
          className="flex items-center gap-3 cursor-pointer bg-accent text-text px-5 py-3 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Award size={18} />
          <span className="text-sm font-semibold tracking-wide">
            Certifications
          </span>
        </button>
      </div>

      {certModalOpen && (
        <CertModal
          onClose={() => setCertModalOpen(false)}
        />
      )}
    </div>
  );
}
