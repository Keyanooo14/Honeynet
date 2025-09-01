import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface AttackType {
  name: string;
  value: number;
  color: string;
}

interface AttackTypeChartProps {
  data: AttackType[];
}

export function AttackTypeChart({ data }: AttackTypeChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attack Types Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Legend 
                wrapperStyle={{
                  fontSize: '12px',
                  color: 'hsl(var(--muted-foreground))'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Attack type details */}
        <div className="mt-4 space-y-2">
          {data.map((attack, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: attack.color }}
                />
                <span>{attack.name}</span>
              </div>
              <span className="font-medium">{attack.value} attacks</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}