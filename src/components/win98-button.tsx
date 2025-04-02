import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

interface Win98ButtonProps extends ButtonProps {
  active?: boolean;
}

export const Win98Button = forwardRef<HTMLButtonElement, Win98ButtonProps>(
  ({ className, children, active = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "border-2 border-border bg-card px-4 py-1 text-foreground shadow-[2px_2px_0px_#000000] transition-none hover:bg-accent hover:text-foreground",
          active && "translate-x-[2px] translate-y-[2px] shadow-none",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
Win98Button.displayName = "Win98Button";