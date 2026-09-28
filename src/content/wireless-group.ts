import { Radio, Waves, Network } from "lucide-react";
import type { StudioProduct } from "./studio-products";

/**
 * The other members of the Wireless & Networks group, shown on /5g-6g
 * beneath the 5G/6G Studio product family. The GNU Kit keeps its own page;
 * USRP and OpenAirInterface are tracks in development.
 */
export const wirelessGroupProducts: StudioProduct[] = [
  {
    slug: "gnu-radio",
    title: "MMT-GNU Kit",
    sub: "Advanced Communication Lab Kit · shipping",
    icon: Radio,
    href: "/gnu-radio",
    doc: { href: "/documents/gnu-manual", label: "GNU Kit manual" },
    bullets: [
      "210 SDR experiments across 15 categories",
      "Real ADALM-Pluto and bladeRF hardware",
      "GNU Radio Companion flowgraph per experiment",
      "16-chapter guided curriculum, Basics and Advanced",
    ],
  },
  {
    slug: "usrp",
    title: "Software-Defined Radio with USRP",
    sub: "Ettus USRP track · in development",
    icon: Waves,
    bullets: [
      "Capture, process and transmit live RF signals",
      "GNU Radio flowgraphs on USRP hardware",
      "Bridges the GNU Kit labs to wide-band SDR",
      "Studio Academy course landing soon",
    ],
  },
  {
    slug: "oai",
    title: "5G Networks with OpenAirInterface",
    sub: "OAI RAN and core track · in development",
    icon: Network,
    bullets: [
      "Stand up a 4G/5G network in software",
      "OpenAirInterface gNB and core, end to end",
      "Runs alongside Studio Core and TestBench",
      "Studio Academy course landing soon",
    ],
  },
];
