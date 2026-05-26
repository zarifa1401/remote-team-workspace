import { cn, getInitials } from "@/lib/utils";

const accentClasses = [
  "from-rose-300 to-pink-400",
  "from-sky-300 to-cyan-400",
  "from-amber-300 to-orange-400",
  "from-violet-300 to-fuchsia-400",
];

export default function AvatarStack({ names, limit = 4, size = "md" }) {
  const visibleNames = names.slice(0, limit);
  const remainder = names.length - visibleNames.length;
  const sizeClass = size === "sm" ? "h-8 w-8 text-[11px]" : "h-10 w-10 text-xs";

  return (
    <div className="flex items-center">
      {visibleNames.map((name, index) => (
        <div
          key={name}
          className={cn(
            "flex items-center justify-center rounded-full border-2 border-white bg-linear-to-br font-semibold text-white shadow-md dark:border-[#241829]",
            accentClasses[index % accentClasses.length],
            sizeClass,
            index > 0 ? "-ml-3" : ""
          )}
        >
          {getInitials(name)}
        </div>
      ))}
      {remainder > 0 ? (
        <div
          className={cn(
            "ml-2 flex items-center justify-center rounded-full bg-rose-100 font-semibold text-rose-600 dark:bg-white/10 dark:text-rose-100",
            sizeClass
          )}
        >
          +{remainder}
        </div>
      ) : null}
    </div>
  );
}
