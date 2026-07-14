export type Skill = {
    name: string
    icon: string
}

export type Direction = "cw" | "ccw"
export type Breakpoint = "mobile" | "tablet" | "desktop"

export type SkillIcon = {
    skill: Skill,
    angle: number,
    radius: number,
    size: number,
    duration: number,
    direction: Direction,
    paused: boolean,
    onEnter: () => void,
    onLeave: () => void
}

export type RingConfig = {
  radius: number;
  iconSize: number;
  duration: number;
  direction: "cw" | "ccw";
};

export type TechOrbitProps = {
  size: number;
  sunSize: number;
  rings: RingConfig[];
};