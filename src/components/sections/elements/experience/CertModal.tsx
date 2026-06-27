import { certifications } from "@/data/experience.data";
import type { CertModalProps } from "@/types";
import { BadgeCheck, Calendar, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

export default function CertModal({ onClose }: CertModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[85vh] bg-surface rounded-3xl flex flex-col shadow-2xl shadow-black/60 border border-border/60"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center">
              <BadgeCheck size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-text text-base font-bold tracking-wide">
                My Certifications
              </h3>
              <p className="text-muted text-xs">
                {certifications.length} certificates earned
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted hover:text-text hover:bg-elevated transition-all duration-200 cursor-pointer"
            aria-label="Close"
          >
            <X size={17} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 scrollbar-hide">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group bg-elevated rounded-xl overflow-hidden border border-border/60 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 cursor-pointer"
                onClick={() => window.open(cert.pdfUrl, "_blank")}
              >
                <div className="relative h-36 bg-background overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-text text-xs font-semibold bg-accent/90 px-4 py-2 rounded-full">
                      <ExternalLink size={13} />
                      <span>View Certificate</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <p className="text-text text-sm font-semibold leading-snug">
                    {cert.name}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-accent text-xs font-medium">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center gap-1.5 text-muted text-xs">
                      <Calendar size={11} className="shrink-0" />
                      <span>{cert.issuedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
