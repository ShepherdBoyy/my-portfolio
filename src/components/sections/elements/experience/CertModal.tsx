import { certifications } from "@/data/experience.data";
import type { CertModalProps } from "@/types";
import { Calendar, ExternalLink, ShieldCheck, X } from "lucide-react";

export default function CertModal({ onClose }: CertModalProps) {
  return (
    <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[88vh] overflow-hidden rounded-3xl bg-surface/80 backdrop-blur-xl"
        >
            <div className="flex items-center justify-between px-8 py-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl border border-accent/10 flex items-center justify-center">
                        <ShieldCheck size={22} className="text-accent" />
                    </div>

                    <div>
                        <h3 className="text-text text-xl font-bold tracking-wide">
                            Certifications
                        </h3>
                        <p className="text-muted text-sm mt-1">
                            Professional achievements & completed programs
                        </p>
                    </div>
                </div>
                
                <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-muted hover:text-text hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                    <X size={18} />
                </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(88vh-96px)] p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <div
                            key={cert.name}
                            className="group relative overflow-hidden bg-elevated/50 rounded-2xl border border-border/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/40 cursor-pointer"
                        >
                            <div className="h-44 overflow-hidden bg-background">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                                    <ExternalLink size={14} className="text-muted" />
                                </button>
                            </div>

                            <div className="p-5 space-y-4">
                                <div className="space-y-1">
                                    <h4 className="text-text text-sm font-semibold leading-relaxed">
                                        {cert.name}
                                    </h4>
                                    <p className="text-accent text-sm font-medium tracking-wide">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-muted text-xs pt-3 border-t border-border/40">
                                    <Calendar size={12} />
                                    <span>{cert.issuedDate}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}