import { MetricCard } from "./MetricCard";
import { FPSGraph } from "./FPSGraph";
import { Activity, Cpu, Thermometer, HardDrive } from "lucide-react";

const PerformanceOverlay = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Performance Monitor
          </h1>
          <p className="text-muted-foreground">Real-time system metrics overlay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            icon={<Activity className="w-5 h-5" />}
            label="FPS"
            value="144"
            subtitle="60 avg"
            variant="primary"
          />
          <MetricCard
            icon={<Cpu className="w-5 h-5" />}
            label="CPU"
            value="45%"
            subtitle="8 cores"
          />
          <MetricCard
            icon={<Cpu className="w-5 h-5" />}
            label="GPU"
            value="68%"
            subtitle="RTX 4080"
          />
          <MetricCard
            icon={<Thermometer className="w-5 h-5" />}
            label="TEMP"
            value="72°C"
            subtitle="CPU/GPU"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <FPSGraph />
          </div>
          <div className="space-y-4">
            <MetricCard
              icon={<HardDrive className="w-5 h-5" />}
              label="RAM"
              value="12.4GB"
              subtitle="16GB total"
              showProgress
              progress={77}
            />
            <MetricCard
              icon={<HardDrive className="w-5 h-5" />}
              label="VRAM"
              value="6.2GB"
              subtitle="12GB total"
              showProgress
              progress={52}
            />
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6 mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Frame Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">3.2ms</div>
              <div className="text-sm text-muted-foreground">Latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">165Hz</div>
              <div className="text-sm text-muted-foreground">Refresh Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-glow">G-Sync</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverlay;
