import type { LucideIcon } from "lucide-react";
import { FlaskConical, Boxes, RadioTower, Smartphone, Server, GraduationCap } from "lucide-react";

export type StudioProduct = {
  slug: string;
  title: string;
  sub: string;
  bullets: string[];
  icon: LucideIcon;
  href?: string; // when set, card is a link; otherwise it renders as a static card
  flagship?: boolean;
};

export const studioProducts: StudioProduct[] = [
  {
    slug: "studio-testbench",
    title: "Studio TestBench",
    sub: "Protocol Test & Validation",
    icon: FlaskConical,
    href: "/5g-6g/studio-testbench",
    bullets: [
      "202 test cases · 19 Robot suites",
      "Emulates gNBs + UEs end-to-end",
      "Dedicated positioning suite",
      "Works with any Studio Core",
    ],
  },
  {
    slug: "studio-core",
    title: "Studio Core",
    sub: "5G SA Core · Go + C/DPDK",
    icon: Boxes,
    href: "/5g-6g/studio-core",
    flagship: true,
    bullets: [
      "15+ NFs incl. AMF/SMF/UPF/AUSF",
      "8 DNN service domains, one network",
      "Single-binary Go control plane",
      "C/DPDK data plane, line-rate UPF",
    ],
  },
  {
    slug: "studio-gnb",
    title: "Studio gNB",
    sub: "5G Base Station (gNB)",
    icon: RadioTower,
    bullets: [
      "N78 band (3.3–3.8 GHz) · 100 MHz TDD",
      "4×4 MIMO",
      "2× 24 dBm PA output",
      "5G Standalone · Rel-17 compliant",
    ],
  },
  {
    slug: "studio-field",
    title: "Studio Field",
    sub: "Android Drive-Test APK",
    icon: Smartphone,
    bullets: [
      "COTS phone → pro RF measurement",
      "49 Lua + Kotlin dissectors",
      "Drive-test GPS, KML, QoE",
      "Embedded Ktor server, 34 REST routes",
    ],
  },
  {
    slug: "studio-fleet",
    title: "Studio Fleet",
    sub: "Multi-Device Orchestrator",
    icon: Server,
    bullets: [
      "Flask orchestrator for device fleets",
      "KPI aggregation, AI + RAG log analysis",
      "PCAP analysis, MSC diagrams",
      "8 Robot keyword libraries",
    ],
  },
  {
    slug: "studio-academy",
    title: "Studio Academy",
    sub: "AI-Powered LMS",
    icon: GraduationCap,
    bullets: [
      "Django LMS with 11 apps",
      "AI Tutor across Claude, GPT, Gemini, Ollama",
      "Protocol Workbench: logs, MSC, counters",
      "Labs and assessments",
    ],
  },
];
