import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  subtitle: string;
  variant?: "default" | "primary";
  showProgress?: boolean;
  progress?: number;
}

export const MetricCard = ({
  icon,
  label,
  value,
  subtitle,
  variant = "default",
  showProgress = false,
  progress = 0,
}: MetricCardProps) => {
  return (
    <div className="glass-card rounded-xl p-5 hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div
          className={cn(
            "p-2 rounded-lg",
            variant === "primary"
              ? "bg-primary/20 text-primary orange-glow"
              : "bg-secondary/20 text-secondary"
          )}
        >
          {icon}
        </div>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {label}
        </span>
      </div>
      <div className="space-y-1">
        <div
          className={cn(
            "text-3xl font-bold",
            variant === "primary" ? "text-primary text-glow" : "text-foreground"
          )}
        >
          {value}
        </div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
      {showProgress && (
        <div className="mt-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500 orange-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
