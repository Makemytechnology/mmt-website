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
  doc?: { href: string; label: string }; // optional downloadable document (spec/manual/syllabus)
};

export const studioProducts: StudioProduct[] = [
  {
    slug: "studio-testbench",
    title: "Studio TestBench",
    sub: "SA Tester · gNB + UE emulator",
    icon: FlaskConical,
    href: "/5g-6g/studio-testbench",
    doc: { href: "/documents/studio-5g-manual", label: "Studio manual" },
    bullets: [
      "202 test cases · 19 Robot Framework suites",
      "5G-AKA · NAS/NGAP · GTP-U · IMS-AKA",
      "VoNR / ViNR · conference up to 6-way",
      "Slicing · handover · positioning · NB-IoT · NTN",
    ],
  },
  {
    slug: "studio-core",
    title: "Studio Core",
    sub: "5G SA Core · Python + C/DPDK",
    icon: Boxes,
    href: "/5g-6g/studio-core",
    flagship: true,
    doc: { href: "/documents/studio-5g-manual", label: "Studio manual" },
    bullets: [
      "13 NFs · IMS · MCX · MEC · eSIM · V2X",
      "5G-AKA · NAS security · VoNR + ViNR",
      "Python control plane (TS 23.501 / 24.501 / 38.413)",
      "C/DPDK UPF · GTP-U · PDR/QER/URR",
    ],
  },
  {
    slug: "studio-gnb",
    title: "Studio gNB",
    sub: "5G Base Station (gNB)",
    icon: RadioTower,
    href: "/5g-6g/studio-gnb",
    doc: { href: "/documents/gnb-specifications", label: "Spec sheet" },
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
    sub: "Android · 7-day Pro trial",
    icon: Smartphone,
    href: "/5g-6g/studio-field",
    bullets: [
      "19 Compose screens · 25 Kotlin + 49 Lua dissectors",
      "Qualcomm DIAG socket · tshark · iPerf3",
      "Ktor :8080 — REST / SSE / WebSocket + 32 MB WASM",
      "7-day Pro trial on first launch — no card required",
    ],
  },
  {
    slug: "studio-fleet",
    title: "Studio Fleet",
    sub: "Python · Flask · Robot",
    icon: Server,
    href: "/5g-6g/studio-fleet",
    doc: { href: "/documents/cots-manual", label: "COTS manual" },
    bullets: [
      "26 Flask blueprints · 25 services",
      "Mobile + BS + 5G core log collection",
      "AI: Ollama / Claude / OpenAI / Gemini",
      "8 Robot libs · 20+ tests (smoke/reg/stab)",
    ],
  },
  {
    slug: "studio-academy",
    title: "Studio Academy",
    sub: "AI-Powered LMS",
    icon: GraduationCap,
    href: "/5g-6g/studio-academy",
    doc: { href: "/documents/5g-system-engineering-syllabus", label: "Syllabus" },
    bullets: [
      "Django LMS with 11 apps",
      "AI Tutor across Claude, GPT, Gemini, Ollama",
      "Protocol Workbench: logs, MSC, counters",
      "Labs and assessments",
    ],
  },
];
