import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface Win98InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Win98Input = forwardRef<HTMLInputElement, Win98InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-9 w-full border-2 border-border bg-card px-3 py-2 text-sm text-foreground shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Win98Input.displayName = "Win98Input";