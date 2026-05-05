import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-md text-white border-b border-white/5">
      <div className="container-x flex items-center justify-between h-16 md:h-20 gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 focus-ring rounded-md"
          aria-label="MakeMyTechnology home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="text-[0.7rem] md:text-xs tracking-[0.22em] uppercase text-gold font-semibold">
            MakeMyTechnology
          </span>
        </Link>

        <a
          href="mailto:info@makemytechnology.com"
          className="inline-flex items-center gap-2 text-xs md:text-sm text-white/85 hover:text-coral focus-ring rounded"
        >
          <span className="hidden sm:inline text-white/60">Contact:</span>
          <span className="font-medium">info@makemytechnology.com</span>
        </a>
      </div>
    </header>
  );
}
