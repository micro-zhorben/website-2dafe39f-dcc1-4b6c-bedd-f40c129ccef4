import { cn } from "@/lib/utils";
import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Check } from "lucide-react";

interface Win98MenuItemProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  checked?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Win98MenuItem({
  label,
  onClick,
  disabled = false,
  icon,
  checked,
  className,
  children,
}: Win98MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (children) {
      setIsSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (children) {
      setIsSubmenuOpen(false);
    }
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={cn(
          "flex cursor-pointer items-center gap-2 px-4 py-1 text-foreground",
          isHovered && !disabled && "bg-primary text-primary-foreground",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        onClick={!disabled ? onClick : undefined}
      >
        <div className="w-5">
          {checked && <Check className="size-4 text-foreground" />}
          {icon}
        </div>
        <Typography.Small>{label}</Typography.Small>
        {children && <span className="ml-auto">▶</span>}
      </div>
      {children && isSubmenuOpen && (
        <div className="absolute left-full top-0 z-50 border-2 border-border bg-card shadow-[3px_3px_0px_#000000]">
          {children}
        </div>
      )}
    </div>
  );
}

interface Win98MenuSeparatorProps {
  className?: string;
}

export function Win98MenuSeparator({ className }: Win98MenuSeparatorProps) {
  return (
    <div className={cn("my-1 h-[1px] bg-border", className)} />
  );
}

interface Win98MenuProps {
  children: React.ReactNode;
  className?: string;
}

export function Win98Menu({ children, className }: Win98MenuProps) {
  return (
    <div className={cn("border-2 border-border bg-card p-1 shadow-[3px_3px_0px_#000000]", className)}>
      {children}
    </div>
  );
}

interface Win98MenuBarItemProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function Win98MenuBarItem({ label, children, className }: Win98MenuBarItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <div
        className={cn(
          "cursor-pointer px-3 py-1 text-foreground",
          isOpen && "bg-primary text-primary-foreground",
          className
        )}
        onClick={handleClick}
      >
        <Typography.Small>{label}</Typography.Small>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 border-2 border-border bg-card shadow-[3px_3px_0px_#000000]">
          {children}
        </div>
      )}
    </div>
  );
}

interface Win98MenuBarProps {
  children: React.ReactNode;
  className?: string;
}

export function Win98MenuBar({ children, className }: Win98MenuBarProps) {
  return (
    <div className={cn("flex border-b-2 border-border bg-card", className)}>
      {children}
    </div>
  );
}