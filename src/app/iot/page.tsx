import type { Metadata } from "next";
import {
  Database,
  Radio,
  Activity,
  ShieldCheck,
  Network,
  GitBranch,
  Signal,
  Cable,
  Wifi,
  Bluetooth,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IotTopologyDiagram } from "@/components/IotTopologyDiagram";
import { iotUseCases } from "@/content/iot-use-cases";

export const metadata: Metadata = {
  title: "MMT IoT Fabric — oneM2M CSE Platform",
  description:
    "MMT IoT Fabric is a oneM2M-compliant Common Services Entity that bridges IoT sensors and Raspberry Pi gateways to a hierarchical resource tree on PostgreSQL.",
  alternates: { canonical: "/iot" },
};

const cseFeatures: { icon: typeof Database; label: string; detail: string }[] = [
  { icon: GitBranch, label: "oneM2M TS-0009", detail: "HTTP binding · X-M2M headers" },
  { icon: Radio, label: "LoRa · Wi-Fi HaLow", detail: "RPi gateways · sensor split" },
  { icon: Database, label: "PostgreSQL store", detail: "JSONB · connection pool · atomic txns" },
  { icon: ShieldCheck, label: "Multi-tenant", detail: "JWT · API keys · RBAC · audit" },
  { icon: Activity, label: "WebSocket notify", detail: "Real-time subscriptions" },
  { icon: Network, label: "Resource tree", detail: "Hierarchical CRUD · FilterCriteria" },
];

const wanInterfaces: { icon: typeof Database; label: string; detail: string }[] = [
  { icon: Signal, label: "4G / 5G", detail: "LTE Cat-M, NR sub-6 modem" },
  { icon: Cable, label: "Ethernet", detail: "Gigabit · PoE option" },
  { icon: Wifi, label: "Wi-Fi", detail: "Wi-Fi 6 dual-band" },
];

const sensorInterfaces: { icon: typeof Database; label: string; detail: string }[] = [
  { icon: Radio, label: "LoRa", detail: "SX1276 · up to 15 km" },
  { icon: Wifi, label: "Wi-Fi HaLow", detail: "802.11ah · sub-1 GHz" },
  { icon: Bluetooth, label: "BLE", detail: "Bluetooth 5 · mesh" },
];

export default function IotPage() {
  return (
    <>
      {/* Multi-Tenant Topology — visual strip (top) */}
      <section className="bg-bg pt-10 pb-4 md:pt-14 md:pb-6">
        <div className="container-x">
          <Reveal>
            <article className="rounded-2xl bg-navyDeep text-white ring-1 ring-inset ring-white/10 overflow-hidden">
              <div className="h-1.5 w-full bg-gold" aria-hidden="true" />
              <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <IotTopologyDiagram />
                </div>
                <div className="lg:col-span-5">
                  <p className="text-xs md:text-sm tracking-[0.18em] uppercase font-semibold text-gold">
                    Topology
                  </p>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                    Multi-Tenant IoT Platform
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-skyLight/90 leading-relaxed">
                    Multiple gateways, thousands of sensors — one CSE. oneM2M-compliant multi-tenant resource
                    management with per-tenant isolation, RBAC, and audit.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-skyLight/85">
                    <li className="flex gap-2">
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden="true" />
                      One central CSE — many tenants, many gateways
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden="true" />
                      Per-gateway sensor fan-out with live telemetry
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden="true" />
                      Hierarchical resource tree, FilterCriteria discovery
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* oneM2M CSE Platform — software strip */}
      <section className="bg-bg pt-4 pb-4 md:pt-6 md:pb-6">
        <div className="container-x">
          <Reveal>
            <article className="rounded-2xl bg-coral text-white ring-1 ring-inset ring-coral/60 overflow-hidden">
              <div className="h-1.5 w-full bg-gold" aria-hidden="true" />
              <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <p className="text-xs md:text-sm tracking-[0.18em] uppercase font-semibold text-white/85">
                    Software · Platform
                  </p>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                    oneM2M CSE Platform
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white/95 leading-relaxed">
                    A oneM2M-compliant Common Services Entity that collects, stores, and distributes IoT sensor
                    data. Bridges devices via Raspberry Pi gateways to a hierarchical resource tree on
                    PostgreSQL.
                  </p>
                  <p className="mt-3 text-xs font-mono text-white/75">
                    Sensors → RPi Gateway → CSE → PostgreSQL · WebSocket · Web UI
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {cseFeatures.map((f) => {
                      const Icon = f.icon;
                      return (
                        <li
                          key={f.label}
                          className="flex items-start gap-3 rounded-lg bg-white/15 ring-1 ring-inset ring-white/25 px-3 py-3 backdrop-blur-sm"
                        >
                          <span className="mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-md bg-white text-coral shrink-0" aria-hidden="true">
                            <Icon size={16} strokeWidth={2} />
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-white">{f.label}</div>
                            <div className="text-[0.7rem] text-white/80 font-mono">{f.detail}</div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* IoT Gateway HW — hardware strip */}
      <section className="bg-bg pt-4 pb-4 md:pt-6 md:pb-6">
        <div className="container-x">
          <Reveal>
            <article className="rounded-2xl bg-navy text-white ring-1 ring-inset ring-white/10 overflow-hidden">
              <div className="h-1.5 w-full bg-sky" aria-hidden="true" />
              <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <p className="text-xs md:text-sm tracking-[0.18em] uppercase font-semibold text-sky">
                    Hardware · Edge
                  </p>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                    IoT Gateway HW
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-skyLight/90 leading-relaxed">
                    Edge gateway that bridges low-power sensor radios to the cloud CSE over a multi-WAN backhaul.
                    Raspberry Pi-class platform, hardened for indoor and outdoor deployment.
                  </p>
                  <p className="mt-3 text-xs font-mono text-white/55">
                    Sensors → Gateway → WAN → Cloud CSE
                  </p>
                </div>

                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                  {/* WAN side */}
                  <div className="rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 p-4">
                    <div className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-sky mb-3">
                      WAN side (uplink)
                    </div>
                    <ul className="space-y-2">
                      {wanInterfaces.map((f) => {
                        const Icon = f.icon;
                        return (
                          <li
                            key={f.label}
                            className="flex items-start gap-3 rounded-md bg-navyLight/40 ring-1 ring-inset ring-white/10 px-3 py-2.5"
                          >
                            <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-md bg-sky/20 text-sky shrink-0" aria-hidden="true">
                              <Icon size={14} strokeWidth={2} />
                            </span>
                            <div>
                              <div className="text-sm font-semibold text-white">{f.label}</div>
                              <div className="text-[0.7rem] text-white/60 font-mono">{f.detail}</div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Sensor side */}
                  <div className="rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 p-4">
                    <div className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-coral mb-3">
                      Sensor side (downlink)
                    </div>
                    <ul className="space-y-2">
                      {sensorInterfaces.map((f) => {
                        const Icon = f.icon;
                        return (
                          <li
                            key={f.label}
                            className="flex items-start gap-3 rounded-md bg-navyLight/40 ring-1 ring-inset ring-white/10 px-3 py-2.5"
                          >
                            <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-md bg-coral/20 text-coral shrink-0" aria-hidden="true">
                              <Icon size={14} strokeWidth={2} />
                            </span>
                            <div>
                              <div className="text-sm font-semibold text-white">{f.label}</div>
                              <div className="text-[0.7rem] text-white/60 font-mono">{f.detail}</div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Applications / Use cases — 4 per row */}
      <section className="bg-bg pt-4 pb-20 md:pt-6 md:pb-28">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">Applications.</h2>
            <p className="mt-2 text-sm text-muted">
              Tenant-isolated vertical profiles under one CSE.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {iotUseCases.map((u, i) => {
              const Icon = u.icon;
              return (
                <Reveal key={u.title} delay={i * 0.04}>
                  <article className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-navy text-white ring-1 ring-inset ring-white/10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="h-1.5 w-full bg-coral" aria-hidden="true" />
                    <div className="p-6 md:p-7 flex flex-col grow gap-5">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-navy shadow-sm"
                        aria-hidden="true"
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">{u.title}</h3>
                        <hr className="my-3 border-white/15" />
                      </div>
                      <p className="text-sm text-white/85 leading-relaxed">{u.description}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
