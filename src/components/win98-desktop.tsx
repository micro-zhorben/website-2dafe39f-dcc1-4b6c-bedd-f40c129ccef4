import { cn } from "@/lib/utils";
import { useState } from "react";
import { Typography } from "@/components/ui/typography";

interface Win98DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
}

export function Win98DesktopIcon({
  icon,
  label,
  onClick,
  className,
  selected = false,
}: Win98DesktopIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "flex w-20 cursor-pointer flex-col items-center gap-1 p-2 text-foreground",
        (selected || isHovered) && "bg-primary text-primary-foreground",
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-12 w-12 items-center justify-center">{icon}</div>
      <Typography.Small className="text-center">{label}</Typography.Small>
    </div>
  );
}

interface Win98DesktopProps {
  children: React.ReactNode;
  className?: string;
}

export function Win98Desktop({ children, className }: Win98DesktopProps) {
  return (
    <div className={cn("min-h-screen bg-background p-4", className)}>
      {children}
    </div>
  );
}

interface Win98TaskbarProps {
  children: React.ReactNode;
  className?: string;
}

export function Win98Taskbar({ children, className }: Win98TaskbarProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 flex h-10 items-center border-t-2 border-border bg-card px-2",
        className
      )}
    >
      {children}
    </div>
  );
}

interface Win98StartButtonProps {
  onClick?: () => void;
  className?: string;
  isOpen?: boolean;
}

export function Win98StartButton({
  onClick,
  className,
  isOpen = false,
}: Win98StartButtonProps) {
  return (
    <button
      className={cn(
        "flex h-8 items-center gap-2 border-2 border-border bg-card px-2 text-foreground shadow-[2px_2px_0px_#000000] hover:bg-accent",
        isOpen && "translate-x-[2px] translate-y-[2px] shadow-none bg-accent",
        className
      )}
      onClick={onClick}
    >
      <span className="font-bold text-primary">Пуск</span>
    </button>
  );
}

interface Win98TaskbarItemProps {
  label: string;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

export function Win98TaskbarItem({
  label,
  onClick,
  className,
  active = false,
}: Win98TaskbarItemProps) {
  return (
    <button
      className={cn(
        "ml-2 h-8 min-w-32 border-2 border-border bg-card px-2 text-foreground shadow-[2px_2px_0px_#000000] hover:bg-accent",
        active && "translate-x-[2px] translate-y-[2px] shadow-none bg-accent",
        className
      )}
      onClick={onClick}
    >
      <Typography.Small className="truncate">{label}</Typography.Small>
    </button>
  );
}