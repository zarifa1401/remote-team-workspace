"use client"
import { useState } from "react"
import ProjectCard from "../../components/ProjectCard"
import SearchBar from "../../components/SearchBar"
import { projects as allProjects } from "../../data/projects"

export default function ProjectsPage() {
  const [projects, setProjects] = useState(allProjects)

  return (
    <div>
      <h2 className="section-title">Projects</h2>
      <SearchBar data={allProjects} onFilter={setProjects} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </div>
  )
}
