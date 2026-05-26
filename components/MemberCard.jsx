export default function MemberCard({ name, role, bio, skills }) {
  return (
    <div className="card bg-white dark:bg-gray-800 dark:text-gray-100">
      <div className="h-16 w-16 bg-gray-300 dark:bg-gray-700 rounded-full mb-2"></div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{bio}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">{skill}</span>
        ))}
      </div>
    </div>
  )
}
