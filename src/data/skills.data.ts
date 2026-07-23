import type { Breakpoint, RingConfig, Skill } from "@/types";

export const orbitRings: Skill[][] = [
    [
      { name: "React", icon: "/icons/react.png"},
      { name: "PHP", icon: "/icons/php.png"},
      { name: "JavaScript", icon: "/icons/javascript.png"},
      { name: "Laravel", icon: "/icons/laravel.png"},
      { name: "TypeScript", icon: "/icons/typescript.png"},
      { name: "MySQL", icon: "/icons/mysql.png"},
    ],
    [
      { name: "Express.js", icon: "/icons/express.png"},
      { name: "HTML5", icon: "/icons/html5.png"},
      { name: "Python", icon: "/icons/python.png"},
      { name: "Node.js", icon: "/icons/nodejs.png"},
      { name: "CSS3", icon: "/icons/css3.png"},
      { name: "Flask", icon: "/icons/flask.png"},
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.png"},
      { name: "Vite", icon: "/icons/vite.png"},
    ],
    [
      { name: "Bootstrap", icon: "/icons/bootstrap.png"},
      { name: "Keras", icon: "/icons/keras.png"},
      { name: "Matplotlib", icon: "/icons/matplotlib.png"},
      { name: "NumPy", icon: "/icons/numpy.png"},
      { name: "OpenCV", icon: "/icons/opencv.png"},
      { name: "Pandas", icon: "/icons/pandas.png"},
      { name: "PyTorch", icon: "/icons/pytorch.png"},
      { name: "Scikit-learn", icon: "/icons/scikit-learn.png"},
      { name: "SQLAlchemy", icon: "/icons/sqlalchemy.png"},
      { name: "TensorFlow", icon: "/icons/tensorflow.png"},
    ],
    [
      { name: "Axios", icon: "/icons/axios.png"},
      { name: "Chart.js", icon: "/icons/chartjs.png"},
      { name: "InsightFace", icon: "/icons/insightface.jpg"},
      { name: "ONNX Runtime", icon: "/icons/onnxruntime.png"},
      { name: "DaisyUI", icon: "/icons/daisyui.png"},
      { name: "Expo", icon: "/icons/expo.png"},
      { name: "Git", icon: "/icons/git.png"},
      { name: "GitHub", icon: "/icons/github.png"},
      { name: "JWT", icon: "/icons/jwt.png"},
      { name: "Motion", icon: "/icons/motion.png"},
      { name: "NativeWind", icon: "/icons/nativewind.png"},
      { name: "Ultralytics", icon: "/icons/ultralytics.png"},
      { name: "Visual Studio Code", icon: "/icons/vscode.png"},
      { name: "React Router", icon: "/icons/reactrouter.png"},
      { name: "Inertia.js", icon: "/icons/inertiajs.png"},
      { name: "Google Colab", icon: "/icons/googlecolab.png"},
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