import MeetingCard from "../../components/MeetingCard"
import { meetings } from "../../data/meetings"

export default function MeetingsPage() {
  return (
    <div>
      <h2 className="section-title">Upcoming Meetings</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meetings.map(m => <MeetingCard key={m.title} {...m} />)}
      </div>
    </div>
  )
}
