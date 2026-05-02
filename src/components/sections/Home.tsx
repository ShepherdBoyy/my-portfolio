import type { Stat } from "@/types";

const stats: Stat[] = [
  { value: "2+", label: "Years of Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "80+", label: "Happy Clients" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center px-6 sm:px-12 lg:py-26 xl:px-24 pt-12 lg:pt-0">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="flex-1 flex flex-col gap-10 text-center lg:text-left items-center lg:items-start">
          <div className="space-y-2">
            <p className="text-muted text-lg">Hi I am</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
              Jhey Marc Abad
            </h2>
          </div>

          <div className="leading-[0.95]">
            <h1 className="text-5xl sm:text-6xl xl:text-8xl font-extrabold text-accent">
              FULL STACK
            </h1>
            <h1 className="text-5xl sm:text-6xl xl:text-8xl font-extrabold text-accent">
              DEVELOPER
            </h1>
          </div>

          <p className="text-muted max-w-lg text-lg leading-relaxed">
            I build things that help make the world a better place
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button
              className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-text px-9 py-3.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 cursor-pointer"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get to Know Me
            </button>

            {/* TODO: Add function to download resume */}
            <button className="w-full sm:w-auto border border-border text-text px-9 py-3.5 rounded-md transition-all duration-300 hover:bg-surface cursor-pointer">
              My Resume
            </button>
          </div>

          <div className="flex items-center bg-surface rounded-xl w-full sm:w-fit p-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center flex-1 sm:flex-none">
                <div className="px-8 py-2 flex-1 sm:flex-none lg:text-left">
                  <p className="text-accent text-2xl sm:text-3xl font-bold leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-muted text-xs sm:text-base font-medium whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
                {index !== stats.length - 1 && (
                  <div className="h-12 w-[1px] border border-border mx-1 sm:mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center order-first lg:order-last">
          <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] xl:w-[600px] xl:h-[600px]">
            <div className="absolute inset-0 rounded-full bg-elevated" />
            <div className="absolute inset-0 rounded-full bg-accent/10 border blur-2xl" />

            {/* TODO: Add my photo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-muted text-xl">👤</span>
              </div>
              <span className="text-muted text-xs">My picture heheheh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
