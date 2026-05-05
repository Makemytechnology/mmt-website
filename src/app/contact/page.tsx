import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — MakeMyTechnology",
  description: "Get in touch with the MMT Center of Excellence about 5G/6G Studio, IoT Fabric, Cognify, SkyShield/DroneWay, or QGuard.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navyDeep text-white">
        <div className="container-x pt-20 pb-12 md:pt-28 md:pb-16">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="display-h1 text-white max-w-3xl">Talk to the MMT team.</h1>
          <p className="mt-6 max-w-2xl lede">
            Tell us about your project. We&rsquo;ll route the conversation to the right vertical lead.
          </p>
        </div>
      </section>

      <section className="bg-bg section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="text-muted">Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </div>
          <aside className="lg:col-span-5">
            <h2 className="display-h3 text-navy">Get in touch</h2>
            <dl className="mt-6 space-y-5 text-ink2">
              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-muted">Email</dt>
                <dd className="mt-1">
                  <a href="mailto:hello@makemytechnology.com" className="text-navy hover:text-coral focus-ring rounded">
                    hello@makemytechnology.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-muted">Phone</dt>
                <dd className="mt-1">+91 (00) 0000 0000</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-muted">Based in</dt>
                <dd className="mt-1">Bengaluru, India</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-muted">Office hours</dt>
                <dd className="mt-1">Mon – Fri · 09:30 – 18:30 IST</dd>
              </div>
            </dl>
            <div className="mt-10 rounded-2xl bg-bgAlt ring-1 ring-line p-6">
              <h3 className="font-display text-lg font-semibold text-navy">Design partner programme</h3>
              <p className="mt-2 text-sm text-ink2 leading-relaxed">
                IoT, AI, Drone Corridor, and Quantum verticals are pre-launch. Mention which vertical you&rsquo;re
                interested in and we&rsquo;ll bring you into the relevant design-partner cohort.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
