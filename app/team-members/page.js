import PageHeader from "@/components/ui/page-header";
import TeamMembersView from "@/components/views/team-members-view";
import { teamMembers } from "@/data/workspace-data";

export default function TeamMembersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Team Members"
        title="A modern people directory for distributed collaboration."
        description="See roles, skills, availability, and contact actions inside the same card system used throughout the dashboard."
      />
      <TeamMembersView teamMembers={teamMembers} />
    </div>
  );
}
