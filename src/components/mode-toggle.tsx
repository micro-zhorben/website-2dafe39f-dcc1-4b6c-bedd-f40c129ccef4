import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Monitor, Moon, Sun } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-2 border-2 border-border bg-card p-2 shadow-[2px_2px_0px_#000000]">
      <Typography.Small className="mr-2">Тема:</Typography.Small>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme("light")}
        className={cn(
          "border-2 border-border px-2 py-1 text-foreground shadow-[2px_2px_0px_#000000] hover:bg-accent hover:text-foreground",
          theme === "light" && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
        )}
      >
        <Sun className="size-4" />
        <span>Светлая</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme("dark")}
        className={cn(
          "border-2 border-border px-2 py-1 text-foreground shadow-[2px_2px_0px_#000000] hover:bg-accent hover:text-foreground",
          theme === "dark" && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
        )}
      >
        <Moon className="size-4" />
        <span>Темная</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme("system")}
        className={cn(
          "border-2 border-border px-2 py-1 text-foreground shadow-[2px_2px_0px_#000000] hover:bg-accent hover:text-foreground",
          theme === "system" && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
        )}
      >
        <Monitor className="size-4" />
        <span>Системная</span>
      </Button>
    </div>
  );
}