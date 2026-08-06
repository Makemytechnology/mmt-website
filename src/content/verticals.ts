import type { LucideIcon } from "lucide-react";
import { Network, Cpu, Brain, Plane, Atom, Radio } from "lucide-react";

export type VerticalStatus = "FLAGSHIP · SHIPPING" | "SHIPPING" | "IN DEVELOPMENT" | "RESEARCH PHASE";

export type Vertical = {
  slug: string;
  href: string;
  name: string;
  product: string;
  status: VerticalStatus;
  tagline: string;
  icon: LucideIcon;
  flagship?: boolean;
  /** Optional academic price shown on the home card (e.g. the GNU kit). */
  price?: string;
  /** Optional struck-through original price shown beside `price`. */
  priceWas?: string;
  /** Numeric INR price — enables local-currency conversion on the card. */
  priceInr?: number;
  /** Numeric INR original price (struck-through) for conversion. */
  priceWasInr?: number;
};

export const verticals: Vertical[] = [
  {
    slug: "5g-6g",
    href: "/5g-6g",
    name: "5G / 6G",
    product: "MMT 5G/6G Studio",
    status: "FLAGSHIP · SHIPPING",
    tagline: "Complete 5G product family. Core, gNB, test, fleet, academy.",
    icon: Network,
    flagship: true,
  },
  {
    slug: "iot",
    href: "/iot",
    name: "IoT",
    product: "MMT IoT Fabric",
    status: "SHIPPING",
    tagline: "oneM2M multi-tenant platform with edge gateways.",
    icon: Cpu,
  },
  {
    slug: "gnu-radio",
    href: "/gnu-radio",
    name: "MMT-GNU Kit",
    product: "Advanced Communication Lab Kit",
    status: "SHIPPING",
    tagline: "210 SDR experiments on real ADALM-Pluto hardware. Powered by GNU Radio.",
    icon: Radio,
    price: "₹50,000",
    priceWas: "₹1,00,000",
    priceInr: 50000,
    priceWasInr: 100000,
  },
  {
    slug: "ai",
    href: "/ai",
    name: "AI",
    product: "MMT Cognify",
    status: "IN DEVELOPMENT",
    tagline: "Multi-model RAG and agentic automation platform.",
    icon: Brain,
  },
  {
    slug: "drone-corridor",
    href: "/drone-corridor",
    name: "Robotics",
    product: "MMT SkyShield · DroneWay",
    status: "IN DEVELOPMENT",
    tagline: "Drones · V2X · A2X. Defence and civilian autonomous platforms.",
    icon: Plane,
  },
  {
    slug: "quantum",
    href: "/quantum",
    name: "Quantum",
    product: "MMT QGuard",
    status: "RESEARCH PHASE",
    tagline: "Post-quantum crypto and QKD integration.",
    icon: Atom,
  },
];
