import { socialLinks } from "@/data/footer.data";
import {
  fadeIn,
  fadeUp,
  satelliteVariant,
  staggerContainer,
  viewport,
} from "@/utils/animations.utils";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/5 bg-surface">
      <motion.div
        className="max-w-6xl mx-auto px-6 sm:px-12 xl:px-24 py-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="flex flex-col items-center text-center">
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="w-20 sm:w-24 lg:w-30"
            variants={fadeUp}
          />

          <motion.h2
            className="mt-4 text-xl sm:text-2xl font-bold uppercase tracking-widest text-accent"
            variants={fadeUp}
          >
            Shepherd Boy
          </motion.h2>

          <motion.p
            className="mt-4 text-sm text-muted leading-relaxed max-w-xs sm:max-w-sm"
            variants={fadeUp}
          >
            Turning coffee and code into something worth listening to
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
            variants={staggerContainer}
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <motion.div
                key={label}
                className="relative group"
                variants={satelliteVariant}
              >
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex w-11 h-11 sm:w-12 sm:h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
                >
                  <Icon
                    size={18}
                    className="text-muted transition-colors group-hover:text-accent"
                  />
                </a>

                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-charcoal-dark text-text text-xs font-semibold px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 group-hover:-translate-y-1 z-10 shadow-lg">
                  {label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-charcoal-dark" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="my-8 sm:my-12 h-px w-full max-w-xl bg-white/10"
            variants={fadeIn}
          />

          <motion.div
            className="w-full max-w-xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-xs text-muted"
            variants={fadeIn}
          >
            <span className="text-center sm:text-left">
              © {new Date().getFullYear()} Jhey Marc Abad. All rights reserved.
            </span>

            <span className="inline-flex items-center gap-1">
              <MapPin size={12} className="text-accent/70" />
              Philippines
            </span>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}