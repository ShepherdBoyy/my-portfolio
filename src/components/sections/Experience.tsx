import type { ExperienceTab } from "@/types";
import { Award } from "lucide-react";
import { useState } from "react";
import HorizontalTimeline from "./elements/experience/horizontal/HorizontalTimeline";
import { academicBackground, workExperiences } from "@/data/experience.data";
import CertModal from "./elements/experience/CertModal";
import VerticalTimeline from "./elements/experience/vertical/VerticalTimeline";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<ExperienceTab>("work");
  const [certModalOpen, setCertModalOpen] = useState<boolean>(false);

  const activeItems =
    activeTab === "work" ? workExperiences : academicBackground;

  return (
    <div className="min-h-screen flex flex-col justify-between px-6 lg:py-26 lg:pt-0">
      <div className="flex items-center">
        <div className="flex items-center gap-2 bg-surface rounded-xl p-1.5 mt-6">
          <button
            onClick={() => setActiveTab("work")}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer
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
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer
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
        <div className="w-full hidden md:block lg:hidden">
          <VerticalTimeline items={activeItems} />
        </div>

        <div className="w-full hidden lg:block">
          <HorizontalTimeline items={activeItems} />
        </div>
      </div>

      <div className="flex justify-end">
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
