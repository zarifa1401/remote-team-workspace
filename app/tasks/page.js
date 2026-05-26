import PageHeader from "@/components/ui/page-header";
import TasksView from "@/components/views/tasks-view";
import { tasks } from "@/data/workspace-data";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Tasks"
        title="A clean kanban-style board for daily execution."
        description="Track backlog, active work, reviews, and completed items in a layout that stays readable across desktop, tablet, and mobile."
      />
      <TasksView tasks={tasks} />
    </div>
  );
}
