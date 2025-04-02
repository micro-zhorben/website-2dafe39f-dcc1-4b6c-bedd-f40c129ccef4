import { cn } from "@/lib/utils";
import { X, Minus, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useState } from "react";

interface Win98WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  onClose?: () => void;
  minimizable?: boolean;
  maximizable?: boolean;
  initialPosition?: { x: number; y: number };
}

export function Win98Window({
  title,
  children,
  className,
  width = "auto",
  height = "auto",
  onClose,
  minimizable = true,
  maximizable = true,
  initialPosition = { x: 20, y: 20 },
}: Win98WindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMaximized) return;
    
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    if (isMinimized) setIsMinimized(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      className={cn(
        "absolute border-2 border-border bg-card shadow-[3px_3px_0px_#000000]",
        isMaximized ? "inset-4" : "",
        isMinimized ? "h-9 overflow-hidden" : "",
        className
      )}
      style={{
        width: isMaximized ? "auto" : width,
        height: isMaximized ? "auto" : height,
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 0 : position.y,
        zIndex: isDragging ? 100 : 10,
      }}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      <div
        className="flex h-9 cursor-move items-center justify-between bg-primary px-2"
        onMouseDown={handleDragStart}
      >
        <Typography.Small className="font-bold text-primary-foreground">
          {title}
        </Typography.Small>
        <div className="flex items-center gap-1">
          {minimizable && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 border border-border bg-card text-foreground hover:bg-accent"
              onClick={handleMinimize}
            >
              <Minus className="size-3" />
            </Button>
          )}
          {maximizable && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 border border-border bg-card text-foreground hover:bg-accent"
              onClick={handleMaximize}
            >
              <Square className="size-3" />
            </Button>
          )}
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 border border-border bg-card text-foreground hover:bg-destructive hover:text-destructive-foreground"
              onClick={onClose}
            >
              <X className="size-3" />
            </Button>
          )}
        </div>
      </div>
      {!isMinimized && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
}