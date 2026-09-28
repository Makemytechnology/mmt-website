import type { LucideIcon } from "lucide-react";
import { RadioTower, Cpu, Brain, Plane, Atom } from "lucide-react";

export type VerticalStatus = "FLAGSHIP · SHIPPING" | "SHIPPING" | "IN DEVELOPMENT" | "RESEARCH PHASE";

/**
 * A product group ("vertical") on the home page.
 *
 * Grouping rule: a product or course lives in exactly one group, chosen by
 * what the customer ends up with (the deliverable), not by the technology
 * underneath. Wireless runs through IoT, drones and quantum links, so it
 * cannot be a boundary on its own; the deliverable can.
 */
export type Vertical = {
  slug: string;
  href: string;
  name: string;
  product: string;
  status: VerticalStatus;
  /** One-line rule for what belongs here. */
  tagline: string;
  /** Products and tracks that live in this group. */
  includes: string[];
  icon: LucideIcon;
  flagship?: boolean;
};

export const verticals: Vertical[] = [
  {
    slug: "5g-6g",
    href: "/5g-6g",
    name: "Wireless & Networks",
    product: "MMT 5G/6G Studio · MMT-GNU Kit",
    status: "FLAGSHIP · SHIPPING",
    tagline: "The radio link or the network itself is the deliverable.",
    includes: ["5G/6G Studio", "GNU Radio Kit", "USRP", "OpenAirInterface"],
    icon: RadioTower,
    flagship: true,
  },
  {
    slug: "iot",
    href: "/iot",
    name: "IoT & Edge",
    product: "MMT IoT Fabric",
    status: "SHIPPING",
    tagline: "Devices and their data are the deliverable. The network is a means, not the subject.",
    includes: ["oneM2M", "Edge gateways", "Device-to-cloud", "NB-IoT · RedCap"],
    icon: Cpu,
  },
  {
    slug: "drone-corridor",
    href: "/drone-corridor",
    name: "Robotics & Autonomy",
    product: "MMT SkyShield · DroneWay",
    status: "IN DEVELOPMENT",
    tagline: "Something that moves and decides is the deliverable.",
    includes: ["SkyShield", "DroneWay", "Ground station", "V2X · A2X"],
    icon: Plane,
  },
  {
    slug: "ai",
    href: "/ai",
    name: "AI & Automation",
    product: "MMT Cognify",
    status: "IN DEVELOPMENT",
    tagline: "A model or an agent is the deliverable.",
    includes: ["Cognify", "RAG", "Agentic automation", "On-device tutor"],
    icon: Brain,
  },
  {
    slug: "quantum",
    href: "/quantum",
    name: "Quantum & Security",
    product: "MMT QGuard",
    status: "RESEARCH PHASE",
    tagline: "Protecting or proving something is the deliverable.",
    includes: ["QGuard", "Post-quantum crypto", "QKD", "5G security · LI"],
    icon: Atom,
  },
];
