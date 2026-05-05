export type EngagementModel = {
  title: string;
  description: string;
  highlight?: boolean;
};

export const engagementModels: EngagementModel[] = [
  {
    title: "CoE-in-a-box",
    description:
      "Studio Core plus training, curriculum, and hardware reference. Turn-key install for universities, labs, and research organisations.",
  },
  {
    title: "Production licence",
    description:
      "Studio Core licensed for commercial deployment — private 5G, MNO trials, managed services. SLA-backed support included.",
    highlight: true,
  },
  {
    title: "OEM / appliance",
    description:
      "Studio Core embedded in partner hardware — edge boxes, ruggedised field units, factory-floor controllers. Co-branding available.",
  },
  {
    title: "Professional services",
    description:
      "Custom NF development, protocol extensions, integration with third-party RAN and OSS, performance tuning, 24x7 support.",
  },
];
