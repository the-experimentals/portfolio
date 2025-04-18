import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface WorkExperience {
    company: string,
    position: string,
    startDate: string,
    endDate: string,
    mode: string,
    description: string[],
    icon: IconProp,
}