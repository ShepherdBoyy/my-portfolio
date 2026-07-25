import { socialLinks } from "@/data/footer.data";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/5 bg-surface">
      <div className="max-w-6xl mx-auto py-10">
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="Logo" className="w-40" />

          <h2 className="mt-4 text-2xl font-bold uppercase tracking-widest text-accent">
            Shepherd Boy
          </h2>

          <p className="mt-4 text-sm text-muted leading-relaxed">
            Turning coffee and code into something worth listening to
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <div key={label} className="relative group">
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex w-12 h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
                >
                  <Icon
                    size={20}
                    className="text-muted transition-colors group-hover:text-accent"
                  />
                </a>

                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-charcoal-dark text-text text-xs font-semibold px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 group-hover:-translate-y-1 z-10 shadow-lg">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="my-12 h-px w-full max-w-xl bg-white/10" />

          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Jhey Marc Abad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}