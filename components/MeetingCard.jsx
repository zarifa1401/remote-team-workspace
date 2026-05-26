export default function MeetingCard({ title, date, type, participants }) {
  return (
    <div className="card bg-white dark:bg-gray-800 dark:text-gray-100">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{date}</p>
      <p className="text-xs text-brand">{type}</p>
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Participants: {participants.join(", ")}
      </div>
    </div>
  )
}
