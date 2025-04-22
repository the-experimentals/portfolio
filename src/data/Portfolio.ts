import { Project } from "./Project";
import { SkillCategory } from "./SkillCategory";
import { WorkExperience } from "./WorkExperience";

export interface Portfolio {
    name: string,
    summary: string[],
    profileImage: string,
    workExperience: WorkExperience[],
    projects: Project[],
    skills: SkillCategory[]
}