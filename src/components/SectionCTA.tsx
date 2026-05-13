import { ButtonLink } from "./Button";

export function SectionCTA({
  headline,
  buttonLabel = "Get in touch",
  href = "/contact",
}: {
  headline: string;
  buttonLabel?: string;
  href?: string;
}) {
  const external = href.startsWith("mailto:") || href.startsWith("http");
  return (
    <section className="bg-coral">
      <div className="container-x py-20 md:py-24 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
          {headline}
        </h2>
        <div className="mt-8 flex justify-center">
          <ButtonLink
            href={href}
            external={external}
            variant="ghost"
            size="lg"
            className="bg-white text-coral hover:bg-white/90"
          >
            {buttonLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
