import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-navyDeep text-white">
      <div className="container-x py-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="display-h2 text-white mt-4">We couldn&rsquo;t find that page.</h1>
        <p className="mt-4 text-skyLight/80">It may have moved, or you may have followed a stale link.</p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-coral hover:bg-coral/90 px-7 py-3 text-base font-semibold text-white focus-ring"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
