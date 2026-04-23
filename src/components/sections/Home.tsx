import type { Stat } from "@/types/sections/home.types";

const stats: Stat[] = [
  { value: "2+", label: "Years of Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "80+", label: "Happy Clients" },
];

export default function Home() {
  return (
    <div className="flex items-center px-12 py-26 xl:px-24">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 flex flex-col gap-10">
          <div className="space-y-2">
            <p className="text-muted text-lg">Hi I am</p>
            <h2 className="text-3xl font-semibold tracking-wide">
              Jhey Marc Abad
            </h2>
          </div>

          <div className="leading-[0.95]">
            <h1 className="text-6xl xl:text-8xl font-extrabold text-accent">
              FULL STACK
            </h1>
            <h1 className="text-6xl xl:text-8xl font-extrabold text-accent">
              DEVELOPER
            </h1>
          </div>

          <p className="text-muted max-w-lg text-lg leading-relaxed">
            I build things that help make the world a better place
          </p>

          <div className="flex items-center gap-6">
            <button
              className="bg-accent hover:bg-accent-hover text-text px-9 py-3.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 cursor-pointer"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get to Know Me
            </button>
            <button className="border border-border text-text px-9 py-3.5 rounded-md transition-all duration-300 hover:bg-surface cursor-pointer">
              My Resume
            </button>
          </div>

          <div className="flex items-center bg-surface rounded-xl w-fit p-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center">
                <div className="px-8 py-2">
                  <p className="text-accent text-3xl font-bold leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-muted text-base font-medium whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
                {index !== stats.length - 1 && (
                  <div className="h-12 w-[1px] border border-border mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[380px] h-[380px] md:w-[440px] md:h-[440px] xl:w-[600px] xl:h-[600px]">
            <div className="absolute inset-0 rounded-full bg-elevated" />
            <div className="absolute inset-0 rounded-full bg-accent/10 border blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
