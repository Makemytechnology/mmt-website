import type { Metadata } from "next";
import { VerticalPage } from "@/components/VerticalPage";
import { verticalDetails } from "@/content/verticals-detail";

export const metadata: Metadata = {
  title: "MMT SkyShield · DroneWay — Drone C2 and BVLOS Corridor",
  description:
    "MMT SkyShield (defence drone C2 and counter-UAS) and MMT DroneWay (BVLOS corridor management with DGCA-compliant authorisation).",
  alternates: { canonical: "/drone-corridor" },
};

export default function DronePage() {
  return <VerticalPage d={verticalDetails["drone-corridor"]} />;
}
