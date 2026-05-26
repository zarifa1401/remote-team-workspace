import PageHeader from "@/components/ui/page-header";
import MeetingsView from "@/components/views/meetings-view";
import { meetings } from "@/data/workspace-data";

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Meetings"
        title="Upcoming meetings with clearer scheduling context."
        description="Scan the next sessions by platform, timing, participants, and host without leaving the workspace layout."
      />
      <MeetingsView meetings={meetings} />
    </div>
  );
}
