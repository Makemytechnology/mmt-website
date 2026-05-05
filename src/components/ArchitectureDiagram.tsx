import { cn } from "@/lib/utils";

const protocolLayer = ["NGAP", "S1AP", "NAS 5G/LTE", "PFCP"];
const controlNFs = [
  "AMF",
  "SMF",
  "AUSF",
  "UDM",
  "UDR",
  "PCF",
  "CHF",
  "NSSF",
  "NRF",
  "NWDAF",
  "NEF",
  "LMF",
  "GMLC",
  "SMSF",
];
const dataPlaneItems = [
  "libupf_dp.so",
  "GTP-U",
  "PDR / FAR / QER / URR",
  "DPDK 25.11",
  "line-rate forwarding",
];

function Layer({
  label,
  sub,
  bg,
  text,
  badge,
  children,
}: {
  label: string;
  sub?: string;
  bg: string;
  text: string;
  badge?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-2xl px-6 py-6 md:px-8 md:py-7 w-full ring-1 ring-inset ring-white/10", bg, text)}>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h3 className="font-display text-lg md:text-xl font-semibold">{label}</h3>
          {sub && <p className="mt-1 text-xs md:text-sm opacity-80 font-mono">{sub}</p>}
        </div>
        {badge && (
          <span className="text-[0.7rem] tracking-widest uppercase font-semibold opacity-80">{badge}</span>
        )}
      </div>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <div className="w-px h-6 bg-coral/60" />
    </div>
  );
}

export function ArchitectureDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <Layer label="3GPP Protocol Layer" bg="bg-skyLight" text="text-navy" sub="generated from 3GPP TS PDFs">
        <div className="flex flex-wrap gap-2 mt-2">
          {protocolLayer.map((p) => (
            <span
              key={p}
              className="px-3 py-1 rounded-full bg-white/70 text-xs font-mono font-medium text-navy"
            >
              {p}
            </span>
          ))}
        </div>
      </Layer>

      <Connector />

      <Layer
        label="Studio Core Control Plane"
        bg="bg-navyLight"
        text="text-skyLight"
        badge="Go · 🚀"
        sub="single-binary · goroutine concurrency"
      >
        <div className="flex flex-wrap gap-2">
          {controlNFs.map((nf) => (
            <span
              key={nf}
              className="px-3 py-1 rounded-md bg-navyDeep/60 ring-1 ring-inset ring-sky/30 text-xs font-mono text-skyLight"
            >
              {nf}
            </span>
          ))}
        </div>
      </Layer>

      <Connector />

      <Layer label="C / DPDK Data Plane" bg="bg-coral" text="text-white" badge="line-rate">
        <div className="flex flex-wrap gap-2">
          {dataPlaneItems.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-md bg-white/15 text-xs font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </Layer>

      <p className="mt-6 text-center text-sm italic text-white/70 max-w-2xl mx-auto">
        Single-binary Go control plane atop a high-performance C/DPDK user plane. Goroutine concurrency for
        hundreds of thousands of UEs; line-rate forwarding through libupf_dp.so.
      </p>
    </div>
  );
}
