import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "MakeMyTechnology terms of use.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-bg section-y">
      <div className="container-x max-w-3xl">
        <h1 className="display-h2 text-navy">Terms</h1>
        <p className="mt-6 text-ink2 leading-relaxed">
          Placeholder terms of use. The final terms will describe permitted use of this website and the legal
          framework around MMT product engagements.
        </p>
      </div>
    </section>
  );
}
