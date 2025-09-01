import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TimelineData {
  time: string;
  attacks: number;
  honeypots: number;
  tokens: number;
}

interface AttackTimelineProps {
  data: TimelineData[];
}

export function AttackTimeline({ data }: AttackTimelineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attack Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Line
                type="monotone"
                dataKey="attacks"
                stroke="hsl(var(--threat-critical))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--threat-critical))", strokeWidth: 0, r: 4 }}
                name="Total Attacks"
              />
              <Line
                type="monotone"
                dataKey="honeypots"
                stroke="hsl(var(--warning))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--warning))", strokeWidth: 0, r: 4 }}
                name="Honeypot Hits"
              />
              <Line
                type="monotone"
                dataKey="tokens"
                stroke="hsl(var(--info))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--info))", strokeWidth: 0, r: 4 }}
                name="Token Triggers"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}