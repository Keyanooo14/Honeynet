import { useState, useEffect } from "react";

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
  type: "honeypot" | "honeytoken" | "anomaly";
  severity: "low" | "medium" | "high" | "critical";
  message: string;
  timestamp: Date;
  source: string;
  details?: string;
}

export interface Honeypot {
  id: string;
  name: string;
  type: "SSH" | "HTTP" | "FTP" | "SMB" | "Custom";
  status: "active" | "inactive" | "error";
  hits: number;
  uptime: string;
  lastHit?: Date;
}

export function useMockData() {
  const [attackLocations] = useState<AttackLocation[]>([
    { country: "Russia", ip: "185.220.101.42", attacks: 127, coordinates: [55.7558, 37.6176], threatLevel: "critical" },
    { country: "China", ip: "61.177.173.14", attacks: 89, coordinates: [39.9042, 116.4074], threatLevel: "high" },
    { country: "Brazil", ip: "177.234.145.67", attacks: 43, coordinates: [-14.2350, -51.9253], threatLevel: "medium" },
    { country: "USA", ip: "198.51.100.23", attacks: 23, coordinates: [39.8283, -98.5795], threatLevel: "low" },
    { country: "Iran", ip: "5.106.96.12", attacks: 156, coordinates: [32.4279, 53.6880], threatLevel: "critical" },
  ]);

  const [timelineData] = useState<TimelineData[]>([
    { time: "00:00", attacks: 12, honeypots: 8, tokens: 4 },
    { time: "04:00", attacks: 19, honeypots: 12, tokens: 7 },
    { time: "08:00", attacks: 45, honeypots: 28, tokens: 17 },
    { time: "12:00", attacks: 67, honeypots: 41, tokens: 26 },
    { time: "16:00", attacks: 89, honeypots: 54, tokens: 35 },
    { time: "20:00", attacks: 134, honeypots: 76, tokens: 58 },
  ]);

  const [attackTypes] = useState<AttackType[]>([
    { name: "SSH Brute Force", value: 45, color: "hsl(var(--threat-critical))" },
    { name: "Web Scanning", value: 32, color: "hsl(var(--threat-high))" },
    { name: "Port Scanning", value: 28, color: "hsl(var(--threat-medium))" },
    { name: "SQL Injection", value: 18, color: "hsl(var(--warning))" },
    { name: "Malware Upload", value: 12, color: "hsl(var(--info))" },
  ]);

  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: "1",
      type: "honeypot",
      severity: "critical",
      message: "SSH Brute Force Attack Detected",
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      source: "185.220.101.42",
      details: "Multiple failed login attempts (47 attempts) with common credentials"
    },
    {
      id: "2",
      type: "honeytoken",
      severity: "high",
      message: "Honeytoken API Key Accessed",
      timestamp: new Date(Date.now() - 12 * 60 * 1000),
      source: "61.177.173.14",
      details: "Fake AWS API key was accessed from production database"
    },
    {
      id: "3",
      type: "anomaly",
      severity: "medium",
      message: "Unusual Traffic Pattern",
      timestamp: new Date(Date.now() - 25 * 60 * 1000),
      source: "177.234.145.67",
      details: "High volume requests to admin endpoints"
    },
    {
      id: "4",
      type: "honeypot",
      severity: "high",
      message: "Web Shell Upload Attempt",
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      source: "5.106.96.12",
      details: "Malicious PHP file uploaded to fake web server"
    },
  ]);

  const [honeypots] = useState<Honeypot[]>([
    {
      id: "1",
      name: "SSH-Honeypot-01",
      type: "SSH",
      status: "active",
      hits: 127,
      uptime: "7d 12h",
      lastHit: new Date(Date.now() - 3 * 60 * 1000)
    },
    {
      id: "2",
      name: "Web-Trap-02",
      type: "HTTP",
      status: "active",
      hits: 89,
      uptime: "3d 8h",
      lastHit: new Date(Date.now() - 8 * 60 * 1000)
    },
    {
      id: "3",
      name: "FTP-Decoy-03",
      type: "FTP",
      status: "inactive",
      hits: 23,
      uptime: "0h",
    },
    {
      id: "4",
      name: "SMB-Honeypot-04",
      type: "SMB",
      status: "active",
      hits: 156,
      uptime: "12d 4h",
      lastHit: new Date(Date.now() - 1 * 60 * 1000)
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Add new alert occasionally
      if (Math.random() < 0.1) {
        const newAlert: Alert = {
          id: Date.now().toString(),
          type: Math.random() < 0.5 ? "honeypot" : "honeytoken",
          severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)] as any,
          message: "New suspicious activity detected",
          timestamp: new Date(),
          source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
          details: "Automated detection by HoneyVision system"
        };
        setAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return {
    attackLocations,
    timelineData,
    attackTypes,
    alerts,
    honeypots,
  };
}