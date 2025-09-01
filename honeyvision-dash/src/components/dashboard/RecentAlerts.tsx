import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDistanceToNow } from "date-fns";

interface Alert {
  id: string;
  type: "honeypot" | "honeytoken" | "anomaly";
  severity: "low" | "medium" | "high" | "critical";
  message: string;
  timestamp: Date;
  source: string;
  details?: string;
}

interface RecentAlertsProps {
  alerts: Alert[];
}

export function RecentAlerts({ alerts }: RecentAlertsProps) {
  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case "critical":
        return "destructive";
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-threat-critical";
      case "high":
        return "text-threat-high";
      case "medium":
        return "text-threat-medium";
      case "low":
        return "text-threat-low";
      default:
        return "text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "honeypot":
        return "🍯";
      case "honeytoken":
        return "🔑";
      case "anomaly":
        return "⚠️";
      default:
        return "📊";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Security Alerts</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <div className="space-y-1 p-6 pt-0">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start space-x-3 p-3 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors"
              >
                <div className="text-lg">{getTypeIcon(alert.type || 'unknown')}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">
                      {alert.message}
                    </p>
                    <Badge variant={getSeverityVariant(alert.severity)} className="text-xs">
                      {alert.severity.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>From: {alert.source || 'Unknown'}</span>
                    <span>{alert.timestamp ? formatDistanceToNow(new Date(alert.timestamp), { addSuffix: true }) : 'Unknown'}</span>
                  </div>
                  {alert.details && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {typeof alert.details === 'string' ? alert.details : JSON.stringify(alert.details)}
                    </p>
                  )}
                </div>
              </div>
            ))}
            {alerts.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <div className="text-4xl mb-2">🔒</div>
                <p>No recent alerts</p>
                <p className="text-xs mt-1">Your systems are secure</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}