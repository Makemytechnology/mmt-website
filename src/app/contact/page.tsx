import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { TallyForm } from "@/components/TallyForm";

export const metadata: Metadata = {
  title: "Contact — MakeMyTechnology",
  description:
    "Get in touch with the MMT Center of Excellence about 5G/6G Studio, IoT Fabric, Cognify, SkyShield/DroneWay, or QGuard.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — compact so the form fits without scrolling */}
      <section className="bg-navyDeep text-white">
        <div className="container-x pt-8 pb-6 md:pt-10 md:pb-8">
          <p className="eyebrow mb-2">Contact</p>
          <h1 className="font-display font-bold tracking-tight text-2xl md:text-3xl text-white max-w-3xl">
            Talk to the MMT team.
          </h1>
          <p className="mt-2 max-w-2xl text-sm md:text-base text-skyLight/85">
            Tell us about your project. We&rsquo;ll route the conversation to the right
            vertical lead.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-bg py-8 md:py-10">
        <div className="container-x grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <TallyForm />
          </div>

          <aside className="lg:col-span-5">
            <h2 className="display-h3 text-navy">Get in touch</h2>
            <dl className="mt-6 space-y-5 text-ink2">
              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-muted flex items-center gap-2">
                  <Mail size={14} className="text-coral" aria-hidden /> Email
                </dt>
                <dd className="mt-1 pl-6">
                  <a
                    href="mailto:info@makemytechnology.com"
                    className="text-navy hover:text-coral focus-ring rounded"
                  >
                    info@makemytechnology.com
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-muted flex items-center gap-2">
                  <Phone size={14} className="text-coral" aria-hidden /> Phone
                </dt>
                <dd className="mt-1 pl-6">
                  <a
                    href="tel:+916361031970"
                    className="text-navy hover:text-coral focus-ring rounded"
                  >
                    +91 63610 31970
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-muted flex items-center gap-2">
                  <MapPin size={14} className="text-coral" aria-hidden /> Based in
                </dt>
                <dd className="mt-1 pl-6 leading-relaxed">
                  Visvesvaraya Technological University Regional Center,
                  <br />
                  1st Main Rd, RHCS Layout, Annapoorneshwari Nagar,
                  <br />
                  Naagarabhaavi, Bengaluru, Karnataka 560091
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-muted flex items-center gap-2">
                  <Clock size={14} className="text-coral" aria-hidden /> Office hours
                </dt>
                <dd className="mt-1 pl-6">Mon – Fri · 09:30 – 18:30 IST</dd>
              </div>
            </dl>

            <div className="mt-10 rounded-2xl bg-bgAlt ring-1 ring-line p-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Design partner programme
              </h3>
              <p className="mt-2 text-sm text-ink2 leading-relaxed">
                IoT, AI, Robotics, and Quantum verticals are pre-launch. Mention which
                vertical you&rsquo;re interested in and we&rsquo;ll bring you into the
                relevant design-partner cohort.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
