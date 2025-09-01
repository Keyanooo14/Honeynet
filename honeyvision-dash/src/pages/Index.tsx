import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { AttackMap } from "@/components/dashboard/AttackMap";
import { AttackTimeline } from "@/components/dashboard/AttackTimeline";
import { AttackTypeChart } from "@/components/dashboard/AttackTypeChart";
import { RecentAlerts } from "@/components/dashboard/RecentAlerts";
import { HoneypotStatus } from "@/components/dashboard/HoneypotStatus";
import { useRealData } from "@/hooks/useRealData";
import { Shield, Activity, AlertTriangle, Target, Users, Server, RefreshCw } from "lucide-react";

const Index = () => {
  const { 
    attackLocations, 
    timelineData, 
    attackTypes, 
    alerts, 
    honeypots, 
    metrics,
    isLoading,
    error,
    refetch 
  } = useRealData();

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-6">
            <svg className="h-24 w-24 text-amber-500 mx-auto animate-pulse" viewBox="0 0 64 64" fill="currentColor">
              <circle cx="32" cy="32" r="30" fill="currentColor" opacity="0.2"/>
              <g fill="currentColor" opacity="0.8">
                <polygon points="32,20 36,22 36,26 32,28 28,26 28,22"/>
                <polygon points="32,14 36,16 36,20 32,22 28,20 28,16"/>
                <polygon points="24,20 28,22 28,26 24,28 20,26 20,22"/>
                <polygon points="40,20 44,22 44,26 40,28 36,26 36,22"/>
              </g>
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
            🍯 HoneyVision
          </h2>
          <h3 className="text-xl font-semibold mb-2">Connecting to Honeynet...</h3>
          <p className="text-muted-foreground">Loading real-time security data</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="mb-4">
            <svg className="h-16 w-16 text-amber-500 mx-auto" viewBox="0 0 64 64" fill="currentColor">
              <circle cx="32" cy="32" r="30" fill="currentColor" opacity="0.2"/>
              <g fill="currentColor" opacity="0.8">
                <polygon points="32,20 36,22 36,26 32,28 28,26 28,22"/>
                <polygon points="32,14 36,16 36,20 32,22 28,20 28,16"/>
                <polygon points="24,20 28,22 28,26 24,28 20,26 20,22"/>
                <polygon points="40,20 44,22 44,26 40,28 36,26 36,22"/>
              </g>
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
            🍯 HoneyVision
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-destructive">Connection Error</h3>
          <p className="text-muted-foreground mb-4">
            Unable to connect to the honeynet backend. Please ensure the backend service is running.
          </p>
          <button
            onClick={() => refetch()}
            className="flex items-center gap-2 mx-auto px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/20">
                <svg className="h-8 w-8 text-amber-600 dark:text-amber-400" viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="32" cy="32" r="30" fill="currentColor" opacity="0.2"/>
                  <g fill="currentColor" opacity="0.8">
                    <polygon points="32,20 36,22 36,26 32,28 28,26 28,22"/>
                    <polygon points="32,14 36,16 36,20 32,22 28,20 28,16"/>
                    <polygon points="24,20 28,22 28,26 24,28 20,26 20,22"/>
                    <polygon points="40,20 44,22 44,26 40,28 36,26 36,22"/>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  🍯 HoneyVision
                </h1>
                <p className="text-sm text-muted-foreground">Advanced Cybersecurity Honeynet Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-xs">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-muted-foreground">Live Data</span>
              </div>
              <button
                onClick={() => refetch()}
                className="p-2 hover:bg-muted rounded-md transition-colors"
                title="Refresh data"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
              <button
                onClick={async () => {
                  if (confirm('⚠️ Are you sure you want to reset ALL captured data? This action cannot be undone.')) {
                    try {
                      const response = await fetch('http://localhost:5000/dashboard/reset', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                      });
                      if (response.ok) {
                        alert('✅ Dashboard reset successfully! All data has been cleared.');
                        refetch(); // Refresh the dashboard
                      } else {
                        alert('❌ Failed to reset dashboard');
                      }
                    } catch (error) {
                      alert('❌ Error resetting dashboard: ' + error);
                    }
                  }
                }}
                className="p-2 hover:bg-destructive/10 text-destructive rounded-md transition-colors border border-destructive/20"
                title="Reset all data"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-6 py-6 space-y-6">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <MetricsCard
            title="Total Attacks"
            value={metrics.totalAttacks}
            trend="up"
            trendValue="Live"
            icon={<Target className="h-4 w-4" />}
            variant="threat"
          />
          <MetricsCard
            title="Honeypot Hits"
            value={metrics.totalHoneypotHits}
            trend="up"
            trendValue="Live"
            icon={<Activity className="h-4 w-4" />}
            variant="warning"
          />
          <MetricsCard
            title="Token Triggers"
            value={metrics.totalTokenTriggers}
            trend="up"
            trendValue="Live"
            icon={<AlertTriangle className="h-4 w-4" />}
            variant="threat"
          />
          <MetricsCard
            title="Active Honeypots"
            value={metrics.activeHoneypots}
            trend="neutral"
            trendValue="Live"
            icon={<Server className="h-4 w-4" />}
            variant="success"
          />
          <MetricsCard
            title="Critical Alerts"
            value={metrics.criticalAlerts}
            trend="up"
            trendValue="Live"
            icon={<AlertTriangle className="h-4 w-4" />}
            variant="threat"
          />
          <MetricsCard
            title="Unique IPs"
            value={metrics.uniqueIPs}
            trend="down"
            trendValue="Live"
            icon={<Users className="h-4 w-4" />}
            variant="default"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AttackTimeline data={timelineData} />
          <AttackTypeChart data={attackTypes} />
        </div>

        {/* Map and Status Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AttackMap attacks={attackLocations} />
          </div>
          <HoneypotStatus honeypots={honeypots} />
        </div>

        {/* Alerts Row */}
        <div className="grid grid-cols-1 gap-6">
          <RecentAlerts alerts={alerts} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2024 HoneyVision Security Dashboard</p>
            <p>Last updated: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;