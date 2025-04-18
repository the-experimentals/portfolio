interface Technology{
    tooltip: string,
    icon: string,
}

export interface Project {
    title: string,
    subtitle: string,
    description: string,
    avatar: string,
    technologies: Technology[],
}