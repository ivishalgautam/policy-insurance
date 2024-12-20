import { cn } from "@/lib/utils";

export function Highlight({ children, className }) {
  return (
    <span
      className={cn(
        "bg-primary p-1 py-0.5 font-bold text-secondary dark:bg-primary dark:text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
