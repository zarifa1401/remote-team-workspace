export default function StatsCard({ title, value }) {
  return (
    <div className="card text-center bg-white dark:bg-gray-800 dark:text-gray-100">
      <h3 className="text-gray-600 dark:text-gray-300">{title}</h3>
      <p className="text-2xl font-bold text-brand">{value}</p>
    </div>
  )
}
