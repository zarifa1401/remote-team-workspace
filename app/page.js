import StatsCard from "../components/StatsCard"
import ProjectCard from "../components/ProjectCard"
import MeetingCard from "../components/MeetingCard"
import { projects } from "../data/projects"
import { meetings } from "../data/meetings"
import { tasks } from "../data/tasks"
import { team } from "../data/team"

export default function Dashboard() {
  const stats = [
    { title: "Active Projects", value: projects.length },
    { title: "Pending Tasks", value: tasks.filter(t => t.status === "Pending").length },
    { title: "Team Members", value: team.length },
    { title: "Upcoming Meetings", value: meetings.length },
  ]

  return (
    <div>
      <h2 className="section-title">Dashboard</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => <StatsCard key={s.title} {...s} />)}
      </div>

      <h3 className="section-title mt-6">Projects Overview</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>

      <h3 className="section-title mt-6">Upcoming Meetings</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meetings.map(m => <MeetingCard key={m.title} {...m} />)}
      </div>
    </div>
  )
}
