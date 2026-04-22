import type { Stat } from "@/types/sections/home.types"

const stats: Stat[] = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "80+", label: "Happy Clients" },
]

export default function Home() {
  return (
    <div className="">
      <div className="">
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <p className="text-text-muted text-lg">Hi I am</p>
            <h2 className="text-text-primary text-2xl font-semibold">Jhey Marc Abad</h2>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-secondary font-bold text-8xl">FULL STACK</h1>
            <h1 className="text-secondary font-bold text-8xl">DEVELOPER</h1>
          </div>

          <p className="text-text-muted max-w-md leading-relaxed">
            I build things that help make the world a better place
          </p>

          <div className="flex items-center gap-4 mt-2">
            <button
              className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30"
            >
              Get to Know Me
            </button>
            <button
              className="border border-text-muted hover:border-text-primary text-text-primary font-semibold px-6 py-3 rounded-md transition-all duration-200 hover:bg-white/5"
            >
              My Resume
            </button>
          </div>

          <div className="flex items-stretch gap-0 mt-4 border border-white/10 rounded-lg overflow-hidden w-fit">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-8 py-4 flex flex-col gap-1
                  ${index !== stats.length - 1 ? "border-r border-white/10" : ""}
                `}
              >
                <span className="text-secondary text-2xl font-bold">{stat.value}</span>
                <span className="text-text-muted text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
