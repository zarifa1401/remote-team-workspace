import MemberCard from "../../components/MemberCard"
import { team } from "../../data/team"

export default function TeamPage() {
  return (
    <div>
      <h2 className="section-title">Team Members</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map(m => <MemberCard key={m.name} {...m} />)}
      </div>
    </div>
  )
}
