import Link from "next/link"

export default function ProjectCard({ id, title, description, status, tech }) {
  return (
    <Link href={`/projects/${id}`} className="card block transform transition hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 dark:text-gray-100">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <span className="text-sm text-brand">{status}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">{t}</span>
        ))}
      </div>
    </Link>
  )
}
