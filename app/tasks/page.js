import { tasks } from "../../data/tasks"

export default function TasksPage() {
  return (
    <div>
      <h2 className="section-title">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="card flex justify-between">
            <span>{task.title}</span>
            <span className="text-sm text-brand">{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
