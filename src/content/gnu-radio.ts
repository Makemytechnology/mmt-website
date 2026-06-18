// Content for the MMT-GNU "GNU Radio Wireless Experiments Kit" panel.
// Sourced from the mmt-gnu repository (experiments/catalog.json + course.json + README).
// Reference platform: https://www.gnuradio.org/

export type GnuCategory = { name: string; count: number };

// 15 experiment categories — 210 experiments total (experiments/catalog.json)
export const gnuCategories: GnuCategory[] = [
  { name: "DSP Fundamentals", count: 16 },
  { name: "Analog Modulation", count: 16 },
  { name: "Digital Modulation", count: 22 },
  { name: "Channel Coding & Error Correction", count: 16 },
  { name: "OFDM & Multi-Carrier", count: 16 },
  { name: "Spread Spectrum", count: 13 },
  { name: "MIMO & Antenna Systems", count: 13 },
  { name: "Channel Models & Propagation", count: 13 },
  { name: "Synchronization & Estimation", count: 13 },
  { name: "Wireless Standards & Protocols", count: 16 },
  { name: "Radar & Sensing", count: 13 },
  { name: "RF & Spectrum Analysis", count: 13 },
  { name: "Adaptive & Cognitive Radio", count: 11 },
  { name: "Audio & Multimedia", count: 11 },
  { name: "Advanced Topics", count: 8 },
];

// 16-chapter guided course (courses/wireless_engineering/course.json)
export const gnuChapters: string[] = [
  "Getting Started: SDR, GNU Radio & ADALM-Pluto",
  "DSP Foundations",
  "RF & Spectrum Analysis",
  "Analog Modulation",
  "Digital Modulation",
  "Synchronization & Estimation",
  "Channel Coding & Error Correction",
  "Channel Models & Propagation",
  "OFDM & Multi-Carrier",
  "Spread Spectrum",
  "MIMO & Antenna Systems",
  "Wireless Standards & Protocols (Wi-Fi → 4G/5G/6G)",
  "Radar & Sensing",
  "Adaptive & Cognitive Radio",
  "Audio & Multimedia",
  "Advanced Topics",
];

// What every experiment ships with — the stepped lesson flow
export const gnuLessonFlow: string[] = [
  "Overview",
  "Theory",
  "Slides",
  "Flowgraph",
  "Practical",
  "Questions",
  "Run Lab",
  "Results",
];

// Headline numbers (README + catalog)
export const gnuStats: { value: string; label: string }[] = [
  { value: "210", label: "Wireless experiments" },
  { value: "15", label: "Experiment categories" },
  { value: "16", label: "Guided course chapters" },
  { value: "183", label: "Run on real SDR hardware" },
  { value: "64", label: "Auto-graded EVM/BER/SNR challenges" },
];
