import Link from "next/link";
import { Linkedin, Youtube, ArrowRight, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white border-t border-white/5">
      <div className="container-x py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* LEFT — Get in touch */}
          <div>
            <p className="eyebrow text-coral">Get in touch</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white leading-tight">
              Let&rsquo;s build deep-tech worth shipping.
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/75 max-w-md">
              Tell us about your project, book a demo, or grab the free open-source MMT
              5G/6G Studio. We usually reply within a working day.
            </p>
            <div className="mt-5 space-y-2.5 text-sm">
              <a
                href="mailto:info@makemytechnology.com"
                className="inline-flex items-center gap-2.5 text-white/85 hover:text-coral transition-colors"
              >
                <Mail size={16} className="text-coral" aria-hidden="true" />
                info@makemytechnology.com
              </a>
              <br />
              <a
                href="tel:+916361031970"
                className="inline-flex items-center gap-2.5 text-white/85 hover:text-coral transition-colors"
              >
                <Phone size={16} className="text-coral" aria-hidden="true" />
                +91 63610 31970
              </a>
            </div>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-coral text-white font-semibold px-6 py-3 text-base shadow-lg shadow-coral/30 hover:bg-coral/90 transition"
            >
              Get in touch
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* RIGHT — brand + follow + social + quick links */}
          <div className="md:text-right">
            <p
              translate="no"
              className="notranslate font-display text-xl md:text-2xl font-bold tracking-wide text-white"
            >
              MakeMyTechnology
              <span className="text-coral"> · MMT</span>
            </p>
            <p className="mt-2 text-sm text-white/70 max-w-md md:ml-auto">
              A Deep Edu-Tech Center of Excellence — independent platforms across 5G/6G,
              IoT, AI, Robotics, and Quantum-safe security.
            </p>

            <p className="mt-5 text-sm md:text-base text-white/80 max-w-md md:ml-auto">
              Follow us to get product updates, demos, and release news first.
            </p>
            <div className="mt-3 flex flex-col sm:flex-row md:justify-end gap-3">
              <a
                href="https://www.linkedin.com/company/makemytechnology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MakeMyTechnology on LinkedIn"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/5 ring-1 ring-inset ring-white/15 px-6 py-3 text-base font-semibold text-white hover:bg-[#0A66C2] hover:ring-[#0A66C2] transition-colors"
              >
                <Linkedin size={20} aria-hidden="true" /> LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@bixbisystemspvtltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MakeMyTechnology on YouTube"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/5 ring-1 ring-inset ring-white/15 px-6 py-3 text-base font-semibold text-white hover:bg-[#FF0000] hover:ring-[#FF0000] transition-colors"
              >
                <Youtube size={22} aria-hidden="true" /> YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} MakeMyTechnology. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
