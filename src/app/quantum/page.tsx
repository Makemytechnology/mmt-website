import type { Metadata } from "next";
import { VerticalPage } from "@/components/VerticalPage";
import { verticalDetails } from "@/content/verticals-detail";

export const metadata: Metadata = {
  title: "MMT QGuard — Post-Quantum Cryptography & QKD",
  description:
    "MMT QGuard: post-quantum cryptography and QKD integration for defence and BFSI. CRYSTALS-Kyber, Dilithium, SPHINCS+, BB84/E91.",
  alternates: { canonical: "/quantum" },
};

export default function QuantumPage() {
  return <VerticalPage d={verticalDetails.quantum} />;
}
