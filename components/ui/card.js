import { cn } from "@/lib/utils";

export default function Card({ as: Component = "div", className, hover = false, soft = false, ...props }) {
  return (
    <Component
      className={cn(
        soft ? "card-soft rounded-3xl" : "card-surface rounded-3xl",
        hover ? "transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(236,188,214,0.24)]" : "",
        className
      )}
      {...props}
    />
  );
}
