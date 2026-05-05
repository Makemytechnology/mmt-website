import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "MakeMyTechnology privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-bg section-y">
      <div className="container-x max-w-3xl">
        <h1 className="display-h2 text-navy">Privacy</h1>
        <p className="mt-6 text-ink2 leading-relaxed">
          Placeholder privacy policy. The final policy will describe how MakeMyTechnology collects, uses, and
          protects information shared via this website and product engagements.
        </p>
      </div>
    </section>
  );
}
