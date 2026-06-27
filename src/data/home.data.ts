import type { Stat } from "@/types";
import { projects } from "./projects.data";

const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - 2023;

export const stats: Stat[] = [
  { value: `${yearsOfExperience}`, label: "Years of Experience" },
  { value: `${projects.length}`, label: "Projects Done" },
  { value: "99.9%", label: "Client Satisfaction" },
];