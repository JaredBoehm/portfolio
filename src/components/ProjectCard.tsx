import UID from "~/utils/UID"
const uid = new UID()

interface Project {
    img: {
        src: string
        alt: string
    }
    title: string
    description: string
    techs: string[]
    github: string
    demo: string
}

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    let img = project.img
    let title = project.title
    let description = project.description
    let techs = project.techs
    let github = project.github
    let demo = project.demo
    return (
        <div className="flex flex-col gap-2 p-8 dark:text-white border-2 m-2 rounded ">
            <img src={img.src} alt={img.alt} className="w-[20rem] h-[20rem]"/>
            <h3 className="text-xl font-bold text-blue-700">{title}</h3>
            <p>{description}</p>
            <div className="flex flex-row flex-wrap gap-2">
                {techs.map((tech: string) => {
                    return (
                        <span key={uid.new()} className="text-xs bg-blue-700 text-white p-1 rounded">{tech}</span>
                    )
                })}
            </div>
            <span className="flex justify-between mt-2">
                <a href={github} className="hover:underline" target="_blank">Repo</a>
                <a href={demo} className="hover:underline" target="_blank">Demo</a>
            </span>
        </div>
    )
}
