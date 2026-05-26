import { projects } from "../../../data/projects"

export default function ProjectDetails({ params }) {
  const project = projects.find(p => p.id.toString() === params.id)

  if (!project) return <p>Project not found</p>

  return (
    <div>
      <h2 className="section-title">{project.title}</h2>
      <p>{project.description}</p>
      <p className="mt-2 text-sm text-gray-600">Status: {project.status}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Technologies</h3>
        <div className="flex gap-2">
          {project.tech.map(t => (
            <span key={t} className="bg-gray-200 px-2 py-1 rounded text-xs">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
