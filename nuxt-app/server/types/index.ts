export interface Project {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
    demo: string
    features: string[]
}

export interface About {
    about_doc?: boolean
    main_text: string
    role_text: string
    sub_text: string
    data?: string
}

export interface TechGroup {
    name: string
    technologies: Tech[]
}

export interface Tech {
    name: string
    icon: string
}