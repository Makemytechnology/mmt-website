export type VerticalDetail = {
  slug: string;
  vertical: string;
  product: string;
  status: "IN DEVELOPMENT" | "RESEARCH PHASE";
  heroSubhead: string;
  problem: string[];
  solution: string[];
  specCards: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
};

export const verticalDetails: Record<string, VerticalDetail> = {
  iot: {
    slug: "iot",
    vertical: "IoT",
    product: "MMT IoT Fabric",
    status: "IN DEVELOPMENT",
    heroSubhead: "A multi-tenant oneM2M platform for industrial IoT at scale.",
    problem: [
      "Industrial IoT deployments are a tangle of vendor-specific gateways, proprietary cloud backends, and brittle MQTT brokers.",
      "Teams end up maintaining 5 different sensor toolchains per facility.",
      "Security and tenant isolation are afterthoughts, not primitives.",
      "Scaling from pilot to production means re-architecting from scratch.",
    ],
    solution: [
      "oneM2M-compliant CSE with hierarchical resource tree and PostgreSQL backing store.",
      "Multi-tenant architecture with per-tenant RBAC, audit, and data isolation from day one.",
      "Unified edge gateway framework supporting LoRa SX1276, Wi-Fi HaLow, BLE, Zigbee, NB-IoT.",
      "Industrial protocol adapters: Modbus, OPC-UA, MQTT, CoAP with rules engine and stream processing.",
    ],
    specCards: [
      { title: "oneM2M CSE", description: "Release 4 compliant. Hierarchical resource tree backed by PostgreSQL." },
      { title: "Multi-radio gateways", description: "Five protocols, one codebase. LoRa, Wi-Fi HaLow, BLE, Zigbee, NB-IoT." },
      { title: "Industrial protocol bridge", description: "Modbus, OPC-UA, MQTT, CoAP. Rules engine and stream processing built in." },
      { title: "Tenant isolation", description: "Per-tenant RBAC, audit trails, and PII controls from day one." },
      { title: "Vertical modules", description: "Smart Agri, Campus, Water, Energy, IIoT — eight verticals out of the box." },
      { title: "Real-time telemetry", description: "Streaming pipelines, rule evaluation, and live-tile dashboards across tenants." },
    ],
    useCases: [
      { title: "Smart agriculture", description: "Soil, weather, and irrigation telemetry across multiple farms with per-grower isolation." },
      { title: "Industrial IoT", description: "Factory-floor monitoring and predictive maintenance over OPC-UA and Modbus, secured per tenant." },
      { title: "Smart campus", description: "Energy, access control, and utility telemetry under a single oneM2M tree per campus." },
    ],
  },
  ai: {
    slug: "ai",
    vertical: "AI",
    product: "MMT Cognify",
    status: "IN DEVELOPMENT",
    heroSubhead: "A multi-model RAG and agentic automation platform for enterprises.",
    problem: [
      "Enterprises are trapped between expensive hosted AI APIs and under-resourced self-hosted efforts.",
      "Swapping models means rewriting prompts and pipelines.",
      "RAG systems built in-house leak PII and lack proper audit trails.",
      "Agentic workflows are brittle proofs-of-concept rather than production systems.",
    ],
    solution: [
      "Multi-model abstraction: Claude, GPT, Gemini, and local Ollama/Llama behind one API.",
      "RAG pipelines with PgVector or Weaviate, automatic chunking and embedding strategies.",
      "Agentic workflow engine with tool calling, retries, and structured output validation.",
      "Enterprise-grade: RBAC, full audit trail, PII redaction, air-gapped deployment option.",
    ],
    specCards: [
      { title: "Model router", description: "Claude, GPT, Gemini, Ollama behind one API. Drop-in switching with no prompt rewrites." },
      { title: "RAG pipelines", description: "PgVector or Weaviate, hybrid search, automatic chunking and embedding strategies." },
      { title: "Agentic workflows", description: "Tool calling, retries, and structured-output validation as first-class primitives." },
      { title: "Enterprise security", description: "RBAC, full audit trail, automatic PII redaction at ingestion and inference." },
      { title: "Self-hosted option", description: "Full air-gap supported via on-prem Ollama and local vector store." },
      { title: "Observability", description: "Per-call token spend, latency distribution, and quality metrics by model and route." },
    ],
    useCases: [
      { title: "Internal knowledge base assistants", description: "Context-grounded Q&A across runbooks, wikis, and ticket systems with PII redacted at the boundary." },
      { title: "Customer-support automation", description: "Agentic workflows for tier-1 triage, response drafting, and CRM updates with full audit trails." },
      { title: "Research and analyst augmentation", description: "Multi-model RAG over filings, papers, and proprietary datasets with citations baked in." },
    ],
  },
  "drone-corridor": {
    slug: "drone-corridor",
    vertical: "Drone Corridor",
    product: "MMT SkyShield · DroneWay",
    status: "IN DEVELOPMENT",
    heroSubhead: "Defence-grade drone command and civilian BVLOS corridor management.",
    problem: [
      "Defence drone operators depend on commercial C2 stacks that leak RF signatures and lack counter-UAS.",
      "Civilian drone operators fight India's DGCA BVLOS regulations with ad-hoc tooling.",
      "Counter-drone and corridor management are treated as separate engineering problems when they share primitives.",
      "There is no single platform that addresses the defence and civilian needs without forcing operators to integrate disparate tools.",
    ],
    solution: [
      "MMT SkyShield — defence-grade drone C2, counter-UAS integration, EW-resistant RF, secure mesh networking for swarm coordination.",
      "MMT DroneWay — BVLOS drone corridor management, UTM integration, DGCA-compliant flight authorisation, real-time airspace tracking.",
      "Shared primitives: RTK/PPP precise positioning, secure video telemetry, mission planning, geofencing.",
      "One engineering team, two product surfaces — defence and civilian operators benefit from the same hardened core.",
    ],
    specCards: [
      { title: "Defence C2 — SkyShield", description: "Hardened, air-gappable command and control for restricted environments." },
      { title: "Counter-UAS — SkyShield", description: "RF detection with kinetic and soft-kill integration paths." },
      { title: "Secure mesh — SkyShield", description: "EW-resistant, self-healing radio mesh for swarm coordination." },
      { title: "BVLOS corridor — DroneWay", description: "Pre-authorised flight paths with real-time deconfliction." },
      { title: "UTM integration — DroneWay", description: "Airspace coordination with national UTM and DGCA authorisation flow." },
      { title: "Real-time tracking — DroneWay", description: "Live airspace situational awareness for operators and regulators." },
    ],
    useCases: [
      { title: "Defence ISR & counter-drone", description: "SkyShield for hardened ISR missions and active counter-UAS engagement." },
      { title: "Last-mile delivery corridors", description: "DroneWay for DGCA-authorised BVLOS routes between hubs and end-points." },
      { title: "Infrastructure inspection", description: "DroneWay for BVLOS asset inspection across grids, pipelines, and rail." },
    ],
  },
  quantum: {
    slug: "quantum",
    vertical: "Quantum",
    product: "MMT QGuard",
    status: "RESEARCH PHASE",
    heroSubhead: "Post-quantum cryptography and QKD integration for defence and BFSI.",
    problem: [
      "“Harvest now, decrypt later” is not a hypothetical — adversaries are archiving encrypted traffic today.",
      "Migration to post-quantum algorithms requires extensive testing across the crypto stack.",
      "Most QKD deployments are vendor-locked, point-to-point, and don't integrate with enterprise KMS.",
      "Regulated industries (defence, BFSI) need crypto-agility with audit trails, not just new algorithms.",
    ],
    solution: [
      "Post-quantum crypto library supporting CRYSTALS-Kyber (KEM), Dilithium (signatures), SPHINCS+ (hash-based signatures).",
      "QKD integration layer for BB84 and E91 protocols with vendor-neutral key consumption API.",
      "Crypto-agility migration toolkit: scan existing codebases, identify weak primitives, plan the migration.",
      "Defence and BFSI focus with FIPS and Common Criteria alignment.",
    ],
    specCards: [
      { title: "PQC library", description: "Kyber, Dilithium, SPHINCS+ — production-shaped APIs with strict parameter sets." },
      { title: "QKD integration", description: "BB84 and E91 protocols with a vendor-neutral key consumption API." },
      { title: "Migration toolkit", description: "Crypto inventory and risk scoring across an existing codebase, with a staged migration plan." },
      { title: "Compliance alignment", description: "FIPS and Common Criteria-aligned engineering practices and documentation." },
      { title: "Hybrid KEM", description: "Classical and post-quantum key exchange in parallel for defence-in-depth during migration." },
      { title: "Side-channel hardening", description: "Constant-time implementations and review for power and timing leakage." },
    ],
    useCases: [
      { title: "Defence secure communications", description: "Hybrid PQC + QKD for long-lived secret material on national-security links." },
      { title: "BFSI long-term data protection", description: "Forward-secret archival of customer and trade data resistant to harvest-now-decrypt-later." },
      { title: "Critical infrastructure KMS", description: "Vendor-neutral key management with PQC roots of trust for power, water, and transport operators." },
    ],
  },
};
