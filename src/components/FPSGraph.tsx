import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

const generateData = () => {
  return Array.from({ length: 60 }, (_, i) => ({
    time: i,
    fps: Math.floor(Math.random() * 30) + 120,
  }));
};

export const FPSGraph = () => {
  const data = generateData();

  return (
    <div className="glass-card rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">FPS History</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary orange-glow" />
            <span className="text-sm text-muted-foreground">Current FPS</span>
          </div>
        </div>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <YAxis
              domain={[0, 200]}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              stroke="hsl(var(--border))"
            />
            <Line
              type="monotone"
              dataKey="fps"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xl font-bold text-primary">144</div>
          <div className="text-xs text-muted-foreground">Current</div>
        </div>
        <div>
          <div className="text-xl font-bold text-secondary">138</div>
          <div className="text-xs text-muted-foreground">Average</div>
        </div>
        <div>
          <div className="text-xl font-bold text-accent">125</div>
          <div className="text-xs text-muted-foreground">Minimum</div>
        </div>
      </div>
    </div>
  );
};
