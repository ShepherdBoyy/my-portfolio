import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const fastStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const viewport = {
  once: false,
  margin: "-80px",
};

export const wordReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    skewY: 4,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: {
      duration: 0.25,
      ease: "easeIn" as const,
    },
  },
};

export const sunVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const ringVariant: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.2 + i * 0.15,
    },
  }),
};

export const satelliteGroupVariant: Variants = {
  hidden: {},
  visible: (i: number) => ({
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.4 + i * 0.15,
    },
  }),
};

export const satelliteVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const hoverLift = (distance = 6) => ({ y: -distance });
export const hoverScale = (scale = 1.05) => ({ scale });

export const timelineCardVariant: Variants = {
  hidden: (custom: { position: "above" | "below" }) => ({
    opacity: 0,
    y: custom.position === "above" ? 24 : -24,
  }),
  visible: (custom: { index: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom.index * 0.08,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export const sideCardVariant: Variants = {
  hidden: (custom: { side: "left" | "right" }) => ({
    opacity: 0,
    x: custom.side === "left" ? -40 : 40,
  }),
  visible: (custom: { index: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: custom.index * 0.06,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export const lineGrowVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: (custom: { index: number }) => ({
    scaleX: 1,
    transition: {
      duration: 0.4,
      delay: custom.index * 0.08,
      ease: "easeOut",
    },
  }),
};

export const lineGrowVerticalVariant: Variants = {
  hidden: { scaleY: 0 },
  visible: (custom: { index: number }) => ({
    scaleY: 1,
    transition: {
      duration: 0.4,
      delay: custom.index * 0.06,
      ease: "easeOut",
    },
  }),
};

export const nodeDotVariant: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom: { index: number; baseDelay?: number }) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: (custom.baseDelay ?? 0) + custom.index * 0.06,
      ease: "backOut",
    },
  }),
};

export const staggeredFadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom: { index: number; delayStep?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: custom.index * (custom.delayStep ?? 0.08),
      ease: "easeOut",
    },
  }),
};

export const pulseGlowVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    scale: [1, 1.4, 1],
    opacity: [0.5, 0, 0.5],
    transition: {
      duration: 1.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const backdropVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export const modalPanelVariant: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 16,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

export const certItemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: { index: number; baseDelay?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: (custom.baseDelay ?? 0.1) + custom.index * 0.05,
      ease: "easeOut",
    },
  }),
};

export const iconButtonHover = { scale: 1.08 };
export const iconButtonTap = { scale: 0.9 };

export const successIconVariant: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: "backOut"
    }
  }
}

export const modalContentStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25
    }
  }
}