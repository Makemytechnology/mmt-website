// Content-Security-Policy ships in REPORT-ONLY mode: violations appear in the
// browser console instead of breaking the page. Once the console is clean on
// every page (home, verticals, contact with the Tally form), rename the header
// to "Content-Security-Policy" to enforce it.
//
// 'unsafe-inline' for scripts is needed for Next.js's own inline bootstrap and
// the JSON-LD blocks; remove it once nonces are wired through middleware.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://tally.so https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self' https://tally.so https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "frame-src https://tally.so https://www.youtube-nocookie.com https://www.youtube.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://tally.so",
  "frame-ancestors 'self'",
  // Add "upgrade-insecure-requests" when switching to the enforcing header;
  // browsers ignore it (and log a warning) in report-only mode.
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Content-Security-Policy-Report-Only", value: csp },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework and version to scanners.
  poweredByHeader: false,
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
