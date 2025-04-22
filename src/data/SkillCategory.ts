import { Skill } from "./Skill";

export interface SkillCategory {
    title: string;
    description: string;
    skills: Skill[];
}