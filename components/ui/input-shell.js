import { Search } from "lucide-react";
import { cn, inputClass } from "@/lib/utils";

export default function InputShell({
  label,
  icon = Search,
  className,
  wrapperClassName,
  ...props
}) {
  const Icon = icon;

  return (
    <label className={cn("block space-y-2", wrapperClassName)}>
      {label ? (
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>
      ) : null}
      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input className={cn(inputClass, "pl-10", className)} {...props} />
      </div>
    </label>
  );
}
