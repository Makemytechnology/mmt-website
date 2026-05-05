export type AudienceCard = {
  title: string;
  bullets: string[];
};

export const studioUseCases: AudienceCard[] = [
  {
    title: "Academic & research",
    bullets: [
      "University 5G testbeds with real upper-layer signalling",
      "Telecom R&D prototyping new NFs and algorithms",
      "6G precursors: NTN, ambient IoT, ISAC, sub-ms URLLC",
      "Protocol conformance and security verification",
    ],
  },
  {
    title: "Enterprise & private-5G",
    bullets: [
      "Factory IIoT — URLLC for robotic control, on-prem MEC",
      "Mining, oil & gas — NTN backhaul, mission-critical PTT",
      "Smart campus — eMBB staff + IoT + private voice",
      "Ports, logistics — V2X for autonomous cranes, precise positioning",
    ],
  },
  {
    title: "Operator & regulator",
    bullets: [
      "Greenfield 5G SA trials where legacy EPC is absent",
      "MVNO and neutral-host deployments",
      "Regulatory testing: NEF, emergency, positioning certification",
      "Interop labs — vendor-agnostic gNB and UE conformance",
    ],
  },
];
