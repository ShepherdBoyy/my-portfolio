import type { Stat } from "@/types";
import { projects } from "./projects.data";

const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - 2025;
const yearsOfCoding = currentYear - 2020;

export const stats: Stat[] = [
  { value: `${yearsOfExperience}`, label: "Year of Professional Exp." },
  { value: `${yearsOfCoding}`, label: "Years of Coding" },
  { value: `${projects.length}`, label: "Projects Done" },
];