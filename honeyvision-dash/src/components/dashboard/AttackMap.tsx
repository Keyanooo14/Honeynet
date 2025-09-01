import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AttackLocation {
  country: string;
  ip: string;
  attacks: number;
  coordinates: [number, number];
  threatLevel: "low" | "medium" | "high" | "critical";
}

interface AttackMapProps {
  attacks: AttackLocation[];
}

export function AttackMap({ attacks }: AttackMapProps) {
  const getThreatColor = (level: string) => {
    switch (level) {
      case "critical":
        return "bg-threat-critical";
      case "high":
        return "bg-threat-high";
      case "medium":
        return "bg-threat-medium";
      case "low":
        return "bg-threat-low";
      default:
        return "bg-muted";
    }
  };

  const getThreatSize = (attacks: number) => {
    if (attacks > 100) return "w-6 h-6";
    if (attacks > 50) return "w-5 h-5";
    if (attacks > 10) return "w-4 h-4";
    return "w-3 h-3";
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Global Attack Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg h-[300px] overflow-hidden">
          {/* World map background (simplified ASCII representation) */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-xs font-mono leading-3">
            <pre className="text-center">
{`    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  ▄▄█                                                                    █▄▄
 ▄█        ▄▄▄▄                              ▄▄▄                          █▄
█          ▄█████▄      ▄▄▄▄▄▄▄        ▄▄▄▄▄▄████▄▄                        █
█       ▄▄████████▄   ▄████████▄    ▄▄███████████████▄                     █
█     ▄████████████▄ ████████████   ████████████████████                   █
█    ███████████████████████████████████████████████████▄                  █
█   ████████████████████████████████████████████████████▄                  █
█  █████████████████████████████████████████████████████                   █
█  ████████████████████████████████████████████████████                    █
█ ▄████████████████████████████████████████████████████                    █
█ █████████████████████████████████████████████████████                    █
█ ████████████████████████████████████████████████████                     █
 █▄ ▀████████████████████████████████████████████████                     █
  ██▄ ▀██████████████████████████████████████████████                    ▄█
   ███▄ ▀████████████████████████████████████████████                  ▄██
     ████▄▄ ▀▀███████████████████████████████████████               ▄▄███
       ███████▄▄▄ ▀▀▀██████████████████████████████              ▄████
         ████████████▄▄▄▄ ▀▀▀▀█████████████████▀             ▄▄████
            ▀██████████████████▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█████████▀
               ▀▀████████████████████████████████████████████▀▀
                    ▀▀▀████████████████████████████████▀▀▀
                          ▀▀▀▀████████████████▀▀▀▀`}
            </pre>
          </div>

          {/* Attack markers */}
          <div className="absolute inset-0">
            {attacks.map((attack, index) => (
              <div
                key={index}
                className="absolute animate-pulse cursor-pointer group"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
              >
                <div
                  className={`rounded-full ${getThreatColor(attack.threatLevel)} ${getThreatSize(
                    attack.attacks
                  )} opacity-80 group-hover:opacity-100 transition-opacity`}
                />
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-popover border rounded px-2 py-1 text-xs whitespace-nowrap z-10">
                  <div className="font-semibold">{attack.country}</div>
                  <div className="text-muted-foreground">{attack.ip}</div>
                  <div className="text-threat-critical font-medium">{attack.attacks} attacks</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-threat-low"></div>
            <span>Low</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-threat-medium"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-threat-high"></div>
            <span>High</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-threat-critical"></div>
            <span>Critical</span>
          </div>
        </div>

        {/* Top attacking countries */}
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium">Top Attacking Countries</h4>
          <div className="space-y-1">
            {attacks.slice(0, 3).map((attack, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {index + 1}
                  </Badge>
                  {attack.country}
                </span>
                <span className="text-threat-critical font-medium">{attack.attacks}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}