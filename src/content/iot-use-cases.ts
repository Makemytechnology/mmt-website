import type { LucideIcon } from "lucide-react";
import { Sprout, HeartPulse, TrainTrack, Shield, Truck, Building2, Factory, Zap } from "lucide-react";

export type IotUseCase = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const iotUseCases: IotUseCase[] = [
  {
    title: "Agriculture",
    icon: Sprout,
    description:
      "Soil moisture, weather, and irrigation telemetry across farms under one CSE — per-grower tenant isolation, LoRa to 15 km.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    description:
      "Patient vitals, equipment telemetry, and hospital asset tracking with audited PII controls and JWT + RBAC.",
  },
  {
    title: "Railways",
    icon: TrainTrack,
    description:
      "Track condition, rolling-stock health, and station telemetry streamed over long-range LoRa and Wi-Fi HaLow.",
  },
  {
    title: "Defence",
    icon: Shield,
    description:
      "Perimeter sensors, asset geo-tracking, and border surveillance over hardened, air-gappable Raspberry Pi gateways.",
  },
  {
    title: "Transportation",
    icon: Truck,
    description:
      "Fleet, cargo, and port sensor networks feeding logistics dashboards in real time via WebSocket subscriptions.",
  },
  {
    title: "Smart City",
    icon: Building2,
    description:
      "Utilities, air quality, lighting, and waste-management telemetry under a single oneM2M resource tree.",
  },
  {
    title: "Industrial IoT",
    icon: Factory,
    description:
      "Factory-floor monitoring and predictive maintenance over Modbus, OPC-UA, and MQTT bridged into the CSE.",
  },
  {
    title: "Energy & Utilities",
    icon: Zap,
    description:
      "Grid, substation, and consumption telemetry with container-level retention and FilterCriteria-based discovery.",
  },
];
