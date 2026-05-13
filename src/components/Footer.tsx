import { MapPin } from "lucide-react";

const ADDRESS =
  "Visvesvaraya Technological University Regional Center, 1st Main Rd, RHCS Layout, Annapoorneshwari Nagar, Naagarabhaavi, Bengaluru, Karnataka 560091";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS,
)}`;

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-5 md:py-6 text-center">
        <p className="inline-flex items-start gap-2 max-w-3xl mx-auto text-xs md:text-sm text-white/85 leading-snug">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Google Maps"
            aria-label="Open MakeMyTechnology location in Google Maps"
            className="group relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-coral text-white hover:bg-coral/90 hover:scale-110 focus-ring shadow-md shrink-0 transition-all"
          >
            <MapPin size={15} aria-hidden="true" />
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-1 text-[0.65rem] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Open in Google Maps
            </span>
          </a>
          <span>{ADDRESS}</span>
        </p>
        <p className="mt-1 text-[0.65rem] tracking-wider text-white/50">
          © {new Date().getFullYear()} MakeMyTechnology
        </p>
      </div>
    </footer>
  );
}
