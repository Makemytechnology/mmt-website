export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-5 md:py-6 text-center">
        <p className="text-xs md:text-sm text-white/85 leading-snug">
          Visvesvaraya Technological University Regional Center, 1st Main Rd, RHCS Layout, Annapoorneshwari
          Nagar, Naagarabhaavi, Bengaluru, Karnataka 560091
        </p>
        <p className="mt-1 text-[0.65rem] tracking-wider text-white/50">
          © {new Date().getFullYear()} MakeMyTechnology
        </p>
      </div>
    </footer>
  );
}
