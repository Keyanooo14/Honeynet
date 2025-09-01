import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = "http://localhost:5000";

export interface AttackLocation {
  country: string;
  ip: string;
  attacks: number;
  coordinates: [number, number];
  threatLevel: "low" | "medium" | "high" | "critical";
}

export interface TimelineData {
  time: string;
  attacks: number;
  honeypots: number;
  tokens: number;
}

export interface AttackType {
  name: string;
  value: number;
  color: string;
}

export interface Alert {
  id: string;
  type: string;
  severity: "low" | "medium" | "high" | "critical";
  message: string;
  timestamp: string;
  source: string;
  details?: string | any;
}

export interface Honeypot {
  id: string;
  name: string;
  type: string;
  status: string;
  hits: number;
  uptime: string;
  lastHit?: string;
}

export interface DashboardData {
  ssh_attempts: any[];
  http_requests: any[];
  honeytoken_accesses: any[];
  alerts: Alert[];
  honeypot_status: any;
  timeline_data: TimelineData[];
  attack_locations: AttackLocation[];
  attack_types: AttackType[];
  metrics: {
    total_attacks: number;
    total_honeypot_hits: number;
    total_token_triggers: number;
    active_honeypots: number;
    critical_alerts: number;
    unique_ips: number;
  };
}

// API functions
const fetchDashboardData = async (): Promise<DashboardData> => {
  const response = await fetch(`${API_BASE_URL}/dashboard/data`);
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }
  return response.json();
};

const fetchMetrics = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/metrics`);
  if (!response.ok) {
    throw new Error('Failed to fetch metrics');
  }
  return response.json();
};

const fetchTimeline = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/timeline`);
  if (!response.ok) {
    throw new Error('Failed to fetch timeline');
  }
  return response.json();
};

const fetchAttackLocations = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/attacks`);
  if (!response.ok) {
    throw new Error('Failed to fetch attack locations');
  }
  return response.json();
};

const fetchAttackTypes = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/attack-types`);
  if (!response.ok) {
    throw new Error('Failed to fetch attack types');
  }
  return response.json();
};

const fetchAlerts = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/alerts`);
  if (!response.ok) {
    throw new Error('Failed to fetch alerts');
  }
  return response.json();
};

const fetchHoneypotStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/honeypot-status`);
  if (!response.ok) {
    throw new Error('Failed to fetch honeypot status');
  }
  return response.json();
};

export function useRealData() {
  // Main dashboard data query
  const { data: dashboardData, isLoading, error, refetch } = useQuery({
    queryKey: ['dashboard-data'],
    queryFn: fetchDashboardData,
    refetchInterval: 5000, // Refresh every 5 seconds
    retry: 3,
    retryDelay: 1000,
  });

  // Individual data queries for specific components
  const { data: metrics } = useQuery({
    queryKey: ['metrics'],
    queryFn: fetchMetrics,
    refetchInterval: 10000, // Refresh every 10 seconds
  });

  const { data: timelineData } = useQuery({
    queryKey: ['timeline'],
    queryFn: fetchTimeline,
    refetchInterval: 10000,
  });

  const { data: attackLocations } = useQuery({
    queryKey: ['attack-locations'],
    queryFn: fetchAttackLocations,
    refetchInterval: 15000, // Refresh every 15 seconds
  });

  const { data: attackTypes } = useQuery({
    queryKey: ['attack-types'],
    queryFn: fetchAttackTypes,
    refetchInterval: 15000,
  });

  const { data: alerts } = useQuery({
    queryKey: ['alerts'],
    queryFn: fetchAlerts,
    refetchInterval: 8000, // Refresh every 8 seconds
  });

  const { data: honeypotStatus } = useQuery({
    queryKey: ['honeypot-status'],
    queryFn: fetchHoneypotStatus,
    refetchInterval: 12000, // Refresh every 12 seconds
  });

  // Transform honeypot status to match expected format
  const honeypots: Honeypot[] = honeypotStatus ? [
    {
      id: "1",
      name: "SSH-Honeypot-01",
      type: "SSH",
      status: honeypotStatus.ssh?.status || 'unknown',
      hits: honeypotStatus.ssh?.hits || 0,
      uptime: honeypotStatus.ssh?.uptime || '0h',
      lastHit: honeypotStatus.ssh?.last_hit
    },
    {
      id: "2",
      name: "Web-Trap-02",
      type: "HTTP",
      status: honeypotStatus.web?.status || 'unknown',
      hits: honeypotStatus.web?.hits || 0,
      uptime: honeypotStatus.web?.uptime || '0h',
      lastHit: honeypotStatus.web?.last_hit
    }
  ] : [];

  // Fallback to empty data if API is not available
  const fallbackData = {
    attackLocations: [],
    timelineData: [],
    attackTypes: [],
    alerts: [],
    honeypots: [],
    metrics: {
      totalAttacks: 0,
      totalHoneypotHits: 0,
      totalTokenTriggers: 0,
      activeHoneypots: 0,
      criticalAlerts: 0,
      uniqueIPs: 0
    }
  };

  // Transform metrics to match expected format
  const transformedMetrics = metrics ? {
    totalAttacks: metrics.total_attacks || 0,
    totalHoneypotHits: metrics.total_honeypot_hits || 0,
    totalTokenTriggers: metrics.total_token_triggers || 0,
    activeHoneypots: metrics.active_honeypots || 0,
    criticalAlerts: metrics.critical_alerts || 0,
    uniqueIPs: metrics.unique_ips || 0
  } : fallbackData.metrics;

  // Transform alerts to match expected format
  const transformedAlerts = alerts ? alerts.map(alert => {
    // Debug logging
    console.log('Processing alert:', alert);
    
    return {
      id: alert.id || String(Math.random()),
      type: alert.alert_type || alert.type || 'unknown',
      severity: alert.severity || 'medium',
      message: alert.message || 'Unknown alert',
      timestamp: alert.timestamp || new Date().toISOString(),
      source: alert.source || 'Unknown',
      details: alert.details
    };
  }) : fallbackData.alerts;

  // Return data with fallbacks
  return {
    attackLocations: attackLocations || fallbackData.attackLocations,
    timelineData: timelineData || fallbackData.timelineData,
    attackTypes: attackTypes || fallbackData.attackTypes,
    alerts: transformedAlerts,
    honeypots: honeypots,
    metrics: transformedMetrics,
    isLoading,
    error,
    refetch
  };
}
