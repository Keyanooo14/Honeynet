import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Honeypot {
  id: string;
  name: string;
  type: "SSH" | "HTTP" | "FTP" | "SMB" | "Custom";
  status: "active" | "inactive" | "error";
  hits: number;
  uptime: string;
  lastHit?: Date;
}

interface HoneypotStatusProps {
  honeypots: Honeypot[];
}

export function HoneypotStatus({ honeypots }: HoneypotStatusProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success";
      case "inactive":
        return "bg-muted";
      case "error":
        return "bg-threat-critical";
      default:
        return "bg-muted";
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default";
      case "inactive":
        return "secondary";
      case "error":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getTotalHits = () => honeypots.reduce((sum, pot) => sum + pot.hits, 0);
  const getActiveCount = () => honeypots.filter(pot => pot.status === "active").length;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Honeypot Status</CardTitle>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{getActiveCount()}/{honeypots.length} Active</span>
          <span>{getTotalHits()} Total Hits</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {honeypots.map((honeypot) => (
          <div key={honeypot.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${getStatusColor(honeypot.status)}`}
                />
                <span className="font-medium text-sm">{honeypot.name}</span>
                <Badge variant="outline" className="text-xs">
                  {honeypot.type}
                </Badge>
              </div>
              <Badge variant={getStatusVariant(honeypot.status)} className="text-xs">
                {honeypot.status.toUpperCase()}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Uptime: {honeypot.uptime}</span>
              <span className="text-threat-critical font-medium">{honeypot.hits} hits</span>
            </div>

            {honeypot.hits > 0 && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Activity Level</span>
                  <span>{Math.min(100, Math.round((honeypot.hits / 50) * 100))}%</span>
                </div>
                <Progress 
                  value={Math.min(100, Math.round((honeypot.hits / 50) * 100))} 
                  className="h-1"
                />
              </div>
            )}

            {honeypot.lastHit && (
              <div className="text-xs text-muted-foreground">
                Last hit: {honeypot.lastHit.toLocaleString()}
              </div>
            )}
          </div>
        ))}

        {honeypots.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <div className="text-4xl mb-2">🍯</div>
            <p>No honeypots configured</p>
            <p className="text-xs mt-1">Add honeypots to start monitoring</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}