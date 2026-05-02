import { aboutCards } from "@/data/about.data";

export default function About() {
  return (
    <div className="min-h-screen flex items-center px-6 sm:px-12 xl:px-24 lg:py-26 pt-12 lg:pt-0">
      <div className="w-full flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT */}
        <div className="lg:w-[40%] flex justify-center lg:justify-start">
          <div className="relative -translate-y-4 w-64 h-64 sm:w-80 sm:h-80 xl:w-[380px] xl:h-[380px] rounded-3xl overflow-hidden bg-elevated shadow-2xl shadow-black/40 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-muted text-xl">👤</span>
              </div>
              <span className="text-muted text-sm">My Photo hehehehe</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-[70%] flex flex-col gap-14">
          <div className="max-w-5xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-10 h-[3px] bg-accent rounded-full" />
              <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
                Who Am <span className="text-accent">I?</span>
              </h2>
            </div>

            <p className="text-muted text-lg leading-relaxed">
              I'm a full-stack developer who enjoys solving problems and always striving to build solutions that make a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="bg-surface rounded-2xl p-8 flex flex-col gap-4 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40"
              >
                <h3 className="text-accent text-base font-bold tracking-wide uppercase">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}