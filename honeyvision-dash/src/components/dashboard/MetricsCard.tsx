import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon?: React.ReactNode;
  variant?: "default" | "threat" | "success" | "warning";
  className?: string;
}

export function MetricsCard({
  title,
  value,
  trend,
  trendValue,
  icon,
  variant = "default",
  className,
}: MetricsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return variant === "threat" ? "text-threat-critical" : "text-success";
      case "down":
        return variant === "threat" ? "text-success" : "text-threat-critical";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className={cn("transition-all duration-200 hover:shadow-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className={cn(
            "p-2 rounded-lg",
            variant === "threat" && "bg-threat-critical/10 text-threat-critical",
            variant === "success" && "bg-success/10 text-success",
            variant === "warning" && "bg-warning/10 text-warning",
            variant === "default" && "bg-primary/10 text-primary"
          )}>
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trendValue && (
          <div className="flex items-center space-x-1">
            <Badge variant="secondary" className={cn("text-xs", getTrendColor())}>
              {trend === "up" && "↗"}
              {trend === "down" && "↘"}
              {trend === "neutral" && "→"}
              {trendValue}
            </Badge>
            <p className="text-xs text-muted-foreground">vs last 24h</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}