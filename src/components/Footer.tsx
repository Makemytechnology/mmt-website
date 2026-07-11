export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-5 md:py-6 text-center">
        <p className="font-display text-sm md:text-base font-semibold tracking-wide text-white">
          MakeMyTechnology
          <span className="text-coral"> · MMT</span>
        </p>
        <p className="mt-1 text-[0.65rem] tracking-wider text-white/50">
          © {new Date().getFullYear()} MakeMyTechnology
        </p>
      </div>
    </footer>
  );
}
