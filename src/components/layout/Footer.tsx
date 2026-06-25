import { socialLinks } from "@/data/footer.data";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="overflow-hidden border-t border-white/5 bg-surface">
      <div className="max-w-6xl mx-auto py-20">
        <div className="flex flex-col items-center text-center">
          <button
            className="group cursor-pointer"
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <h2 className="text-3xl font-bold uppercase tracking-widest text-accent transition-all duration-300 group-hover:text-accent-hover">
              Shepherd Boy
            </h2>
          </button>

          <p className="mt-4 text-sm text-muted">
            Building clean, modern and high-performance web experiences with
            thoughtful design and scalable code.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex w-12 h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
              >
                <Icon
                  size={20}
                  className="text-muted transition-colors group-hover:text-accent"
                />
              </a>
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
