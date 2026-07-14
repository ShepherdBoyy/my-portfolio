import type { Breakpoint, RingConfig, Skill } from "@/types";

export const orbitRings: Skill[][] = [
    [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
      { name: "Inertia.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"},
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
      { name: "DaisyUI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},
      { name: "NativeWind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg"},
      { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg"},
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
      { name: "Axios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"},
    ],
    [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"},
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"},
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    ],
    [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"},
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"},
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"},
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"},
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"},
      { name: "YOLO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
      { name: "InsightFace", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
      { name: "Artificial Intelligence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
      { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
    ],
    [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},
    ]
]

export const TECH_ORBIT: Record<
  Breakpoint,
  { size: number; sunSize: number; rings: RingConfig[] }
> = {
  mobile: {
    size: 380,
    sunSize: 100,
    rings: [
      { radius: 90, iconSize: 44, duration: 22, direction: "cw" },
      { radius: 150, iconSize: 40, duration: 32, direction: "ccw" },
      { radius: 210, iconSize: 38, duration: 44, direction: "cw" },
      { radius: 270, iconSize: 36, duration: 58, direction: "ccw" },
    ],
  },
  tablet: {
    size: 600,
    sunSize: 140,
    rings: [
      { radius: 140, iconSize: 62, duration: 22, direction: "cw" },
      { radius: 260, iconSize: 56, duration: 34, direction: "ccw" },
      { radius: 380, iconSize: 52, duration: 46, direction: "cw" },
      { radius: 500, iconSize: 48, duration: 60, direction: "ccw" },
    ],
  },
  desktop: {
    size: 900,
    sunSize: 200,
    rings: [
      { radius: 200, iconSize: 84, duration: 20, direction: "cw" },
      { radius: 400, iconSize: 76, duration: 32, direction: "ccw" },
      { radius: 600, iconSize: 68, duration: 46, direction: "cw" },
      { radius: 800, iconSize: 62, duration: 62, direction: "ccw" },
    ],
  },
};