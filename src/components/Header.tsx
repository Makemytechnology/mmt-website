"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Phone } from "lucide-react";

const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/5g-6g", label: "5G/6G Studio" },
  { href: "/iot", label: "IoT" },
  { href: "/ai", label: "AI" },
  { href: "/drone-corridor", label: "Robotics" },
  { href: "/quantum", label: "Quantum" },
];

/** Tells whether a nav link should appear active for the current path. */
function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  // Find the active link label so we can show "You are on …" in the mobile bar
  const activeLink = navLinks.find((l) => isActive(l.href, pathname)) ?? navLinks[0];

  return (
    <header className="relative z-50 bg-navy text-white border-b border-white/5">
      <div className="container-x flex items-center justify-between h-16 md:h-20 gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 focus-ring rounded-md"
          aria-label="MakeMyTechnology home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          <span className="text-[0.7rem] md:text-xs tracking-[0.22em] uppercase text-gold font-semibold">
            MakeMyTechnology
          </span>
        </Link>

        {/* Desktop nav — active link gets coral text + a coral underline pill */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((l) => {
            const active = isActive(l.href, pathname);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 text-xs uppercase tracking-wider font-semibold rounded-md focus-ring transition-colors ${
                  active
                    ? "text-coral bg-white/5"
                    : "text-white/75 hover:text-coral hover:bg-white/5"
                }`}
              >
                {l.label}
                {/* Coral underline indicator for the active page */}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute left-3 right-3 -bottom-[2px] h-[2px] bg-coral rounded-full"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Direct contact details — phone + email shown in the top-right
            instead of a "Contact" CTA button. */}
        <div className="hidden lg:flex items-center gap-5 text-xs">
          <a
            href="tel:+916361031970"
            className="inline-flex items-center gap-2 text-white/85 hover:text-coral focus-ring rounded transition-colors"
            aria-label="Call MakeMyTechnology"
          >
            <Phone size={14} className="text-coral" aria-hidden />
            <span className="font-semibold tracking-wide">+91 63610 31970</span>
          </a>
          <span aria-hidden className="h-4 w-px bg-white/15" />
          <a
            href="mailto:info@makemytechnology.com"
            className="inline-flex items-center gap-2 text-white/85 hover:text-coral focus-ring rounded transition-colors"
            aria-label="Email MakeMyTechnology"
          >
            <Mail size={14} className="text-coral" aria-hidden />
            <span className="font-semibold tracking-wide">info@makemytechnology.com</span>
          </a>
        </div>

        {/* Mobile: show the current page name inline so you always know where you are */}
        <div className="lg:hidden flex items-center gap-3 ml-auto">
          <span
            className="text-[0.6rem] tracking-[0.22em] uppercase font-bold text-coral hidden sm:inline"
            aria-hidden
          >
            {activeLink.label}
          </span>
          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10 focus-ring"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open ? (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t border-white/5 bg-navyDeep"
          aria-label="Mobile primary"
        >
          <div className="container-x py-4 flex flex-col gap-1">
            {/* "You are here" header inside the open drawer */}
            <p className="px-3 pb-2 text-[0.6rem] tracking-[0.22em] uppercase font-bold text-white/55">
              You are here
            </p>
            {navLinks.map((l) => {
              const active = isActive(l.href, pathname);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-md focus-ring transition-colors ${
                    active
                      ? "bg-coral/15 text-coral ring-1 ring-inset ring-coral/40"
                      : "text-white/85 hover:text-coral hover:bg-white/5"
                  }`}
                >
                  <span>{l.label}</span>
                  {active ? (
                    <span className="text-[0.55rem] tracking-[0.22em] uppercase font-bold bg-coral text-white px-1.5 py-0.5 rounded">
                      Current
                    </span>
                  ) : null}
                </Link>
              );
            })}
            {/* Direct contact in the mobile drawer */}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="tel:+916361031970"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white/85 hover:text-coral focus-ring rounded"
              >
                <Phone size={14} className="text-coral" aria-hidden />
                <span className="font-semibold">+91 63610 31970</span>
              </a>
              <a
                href="mailto:info@makemytechnology.com"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white/85 hover:text-coral focus-ring rounded"
              >
                <Mail size={14} className="text-coral" aria-hidden />
                <span className="font-semibold">info@makemytechnology.com</span>
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
