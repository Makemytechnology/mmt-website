import type { Metadata } from "next";
import { VerticalPage } from "@/components/VerticalPage";
import { verticalDetails } from "@/content/verticals-detail";

export const metadata: Metadata = {
  title: "MMT Cognify — Multi-Model RAG and Agentic Automation",
  description:
    "MMT Cognify: a multi-model RAG and agentic automation platform for enterprises. Claude, GPT, Gemini, Ollama under one API.",
  alternates: { canonical: "/ai" },
};

export default function AiPage() {
  return <VerticalPage d={verticalDetails.ai} />;
}
