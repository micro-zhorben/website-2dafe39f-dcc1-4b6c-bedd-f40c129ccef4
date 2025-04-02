import { cn } from "@/lib/utils";

interface Win98ProgressProps {
  value?: number;
  max?: number;
  className?: string;
  barClassName?: string;
}

export function Win98Progress({
  value = 0,
  max = 100,
  className,
  barClassName,
}: Win98ProgressProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={cn(
        "h-5 w-full border-2 border-border bg-card shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]",
        className
      )}
    >
      <div
        className={cn("h-full bg-primary", barClassName)}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}