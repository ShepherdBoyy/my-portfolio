import type { Breakpoint, SkillCategory } from "@/types";
import { Brain, CodeXml, Server, Wrench } from "lucide-react";

export const SIZES: Record<
    Breakpoint,
    {
        size: number,
        sunSize: number,
        innerRadius: number,
        outerRadius: number,
        innerIconSize: number,
        outerIconSize: number,
        innerDuration: number,
        outerDuration: number,
    }
> = {
    mobile: {
        size: 240,
        sunSize: 60,
        innerRadius: 95,
        outerRadius: 95,
        innerIconSize: 55,
        outerIconSize: 55,
        innerDuration: 30,
        outerDuration: 30,
    },
    tablet: {
        size: 280,
        sunSize: 68,
        innerRadius: 85,
        outerRadius: 115,
        innerIconSize: 55,
        outerIconSize: 49,
        innerDuration: 24,
        outerDuration: 40,
    },
    desktop: {
        size: 400,
        sunSize: 100,
        innerRadius: 100,
        outerRadius: 180,
        innerIconSize: 65,
        outerIconSize: 55,
        innerDuration: 22,
        outerDuration: 38,
    },
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        icon: CodeXml,
        skills: [
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
    },
    {
        title: "Backend",
        icon: Server,
        skills: [
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"},
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"},
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
        ],
    },
    {
        title: "AI / Machine Learning",
        icon: Brain,
        skills: [
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
    },
    {
        title: "Tools",
        icon: Wrench,
        skills: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},
        ],
    },
]