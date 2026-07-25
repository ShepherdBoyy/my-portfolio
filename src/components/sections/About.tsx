import { aboutCards } from "@/data/about.data";

export default function About() {
  return (
    <div className="flex-1 min-h-0 flex items-center px-6 sm:px-12 xl:px-24 py-10">
      <div className="w-full flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT */}
        <div className="lg:w-[35%] flex justify-center">
          <div className="w-full max-w-70 sm:max-w-[320px] xl:max-w-120 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 flex items-center justify-center">
            <img
              src="/about-profile.jpg"
              alt="Jhey Marc Abad"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-[65%] flex flex-col gap-14">
          <div className="max-w-5xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-10 h-0.75 bg-accent rounded-full" />
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
                className="flex flex-col gap-4"
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