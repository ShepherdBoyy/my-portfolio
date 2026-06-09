import { Briefcase, Sparkles, Users } from "lucide-react";

const availabilityItems = [
  { icon: Sparkles, label: "Open to freelance work" },
  { icon: Briefcase, label: "Available for full-time roles" },
  { icon: Users, label: "Open to collaborations" },
];

export default function Contact() {
  return (
    <div>
      <div>
        <div className="lg:w-[40%] flex flex-col justify-center">
          <div className="flex flex-col gap-8 p-8 xl:p-10">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="w-10 h-[3px] bg-accent rounded-full" />

                <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
                  Let's Build
                  <br />
                  Something <span className="text-accent">Great</span>
                </h2>
              </div>

              <p className="text-muted leading-relaxed max-w-lg">
                Whether you need a full-stack developer, a modern web
                application, or simply want to discuss an idea, I'd love to hear
                from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {availabilityItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-border/50 bg-background/40 p-4 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon
                      size={18}
                      className="text-accent transition-transform"
                    />
                  </div>

                  <span className="text-sm font-medium text-text">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
