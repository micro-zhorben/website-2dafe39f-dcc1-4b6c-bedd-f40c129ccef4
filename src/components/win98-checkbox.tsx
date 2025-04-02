import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { forwardRef } from "react";

export interface Win98CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Win98Checkbox = forwardRef<HTMLInputElement, Win98CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <div className="relative flex h-5 w-5 items-center justify-center">
          <input
            type="checkbox"
            className="peer absolute opacity-0"
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "flex h-5 w-5 items-center justify-center border-2 border-border bg-card shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)] peer-checked:bg-card peer-focus:ring-1 peer-focus:ring-primary",
              className
            )}
          >
            {props.checked && <Check className="size-3 text-foreground" />}
          </div>
        </div>
        {label && <span className="text-sm text-foreground">{label}</span>}
      </div>
    );
  }
);
Win98Checkbox.displayName = "Win98Checkbox";