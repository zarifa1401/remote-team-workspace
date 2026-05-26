import { cn, buttonBaseClass } from "@/lib/utils";

const variants = {
  primary:
    "bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 text-white shadow-[0_14px_30px_rgba(244,114,182,0.28)] hover:brightness-105",
  secondary:
    "border border-rose-100 bg-white/90 text-slate-700 shadow-[0_10px_24px_rgba(236,188,214,0.14)] hover:bg-rose-50 dark:border-fuchsia-900/70 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10",
  ghost:
    "text-slate-600 hover:bg-rose-50 dark:text-slate-200 dark:hover:bg-white/8",
};

const sizes = {
  sm: "h-10 px-4",
  md: "h-11 px-5",
  lg: "h-12 px-6",
};

export default function Button({
  as: Component = "button",
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}) {
  return (
    <Component
      type={Component === "button" ? type : undefined}
      className={cn(buttonBaseClass, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
