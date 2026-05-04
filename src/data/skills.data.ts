import type { SkillCategory } from "@/types";
import { CodeXml, Database, Server, Wrench } from "lucide-react";

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        icon: CodeXml,
        skills: [
            { name: "React", percentage: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
            { name: "TypeScript", percentage: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
            { name: "Tailwind", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
            { name: "HTML/CSS", percentage: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
        ],
    },
    {
        title: "Backend",
        icon: Server,
        skills: [
            { name: "Node.js", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
            { name: "Express", percentage: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
            { name: "PHP", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"},
        ],
    },
    {
        title: "Database",
        icon: Database,
        skills: [
            { name: "MySQL", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
            { name: "PostgreSQL", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
            { name: "MongoDB", percentage: 55, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
        ],
    },
    {
        title: "Others",
        icon: Wrench,
        skills: [
            { name: "Git",     percentage: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"        },
            { name: "GitHub",  percentage: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  },
            { name: "Figma",   percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"    },
            { name: "VS Code", percentage: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  },
        ],
    },
]