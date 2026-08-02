import type { ContactSuccessProps } from "@/types";
import { CheckCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import {
  backdropVariant,
  fadeUp,
  iconButtonHover,
  iconButtonTap,
  modalContentStagger,
  modalPanelVariant,
  successIconVariant,
} from "@/utils/animations.utils";

export default function ContactSuccess({ onReset }: ContactSuccessProps) {
  return (
    <motion.div
      variants={backdropVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 bg-black/70 bakcdrop-blur-sm flex items-center justify-center p-6"
    >
      <motion.div
        variants={modalPanelVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full max-w-md bg-surface rounded-3xl p-8 flex flex-col items-center gap-6 text-center shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          onClick={onReset}
          whileHover={iconButtonHover}
          whileTap={iconButtonTap}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-text hover:bg-elevated transition-all duration-200 cursor-pointer"
        >
          <X size={17} />
        </motion.button>

        <motion.div
          variants={successIconVariant}
          initial="hidden"
          animate="visible"
          className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center"
        >
          <CheckCircle size={36} className="text-accent" />
        </motion.div>

        <motion.div
          variants={modalContentStagger}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center gap-6"
        >
          <div className="space-y-2">
            <motion.h3
              variants={fadeUp}
              className="text-text text-2xl font-bold"
            >
              Message Sent!
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-muted text-sm leading-relaxed"
            >
              Thanks for reaching out. I'll get back to you as soon as possible.
            </motion.p>
          </div>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-text text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
          >
            Done
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}