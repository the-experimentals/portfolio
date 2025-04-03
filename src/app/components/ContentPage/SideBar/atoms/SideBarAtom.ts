import { atom } from 'jotai'

export const sideBarAtom = atom({
    workExperience: true,
    projects: false,
    skills: false,
    contact: false,
    resume: false,
})

export const defaultSideBarAtom = {
    workExperience: false,
    projects: false,
    skills: false,
    contact: false,
    resume: false,
}
