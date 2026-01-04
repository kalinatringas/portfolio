import { Project } from "../projects/projects"

export default function ProjectCard({name, description, image, link}:Project){

    return(
        <div className="flex flex-col gap-4">
            <a href={link}>
            <img
            src={image}
            alt={name}
            className="rounded-xl w-full object-cover"/>
            </a>
            <h1
            className="text-2xl font-bold text-gray-800">{name}</h1>
            <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                {description.map((bullet,index)=>(
                    <li key={index}>{bullet}</li>
                ))}
            </ul>
        </div>
    )
}