export type Milestone = {
  when: string;
  title: string;
  description: string;
};

export const roadmap: Milestone[] = [
  {
    when: "Now · 2026",
    title: "Studio Core GA",
    description: "15+ NFs, 8 DNN domains, 202 test cases, multi-model AI Tutor.",
  },
  {
    when: "+6 months",
    title: "Cloud-Native",
    description: "Kubernetes Helm chart, expanded NWDAF library, O-RAN/N6 suites, SEPP for roaming.",
  },
  {
    when: "12–18 months",
    title: "5G Advanced",
    description: "Release 18/19 features, AI/ML in RAN, expanded NTN profiles, post-quantum KDFs.",
  },
  {
    when: "24–36 months",
    title: "6G Research",
    description: "ISAC expansion, digital-twin integration, AI-native operator agent, full RAG over live state.",
  },
];
