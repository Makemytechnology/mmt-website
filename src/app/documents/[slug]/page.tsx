import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { documents, getDocument, SITE_ORIGIN } from "@/content/documents";

export function generateStaticParams() {
  return documents.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocument(slug);
  if (!doc) return { title: "Document not found" };
  return {
    title: `${doc.title} — MakeMyTechnology`,
    description: doc.subtitle,
    alternates: { canonical: `/documents/${doc.slug}` },
  };
}

export default async function DocumentViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDocument(slug);
  if (!doc) notFound();

  // PDFs render in the browser's native viewer. DOCX files can't be rendered
  // natively, so we embed the Microsoft Office online viewer, which fetches the
  // file from its public URL.
  const viewerSrc =
    doc.type === "pdf"
      ? `${doc.file}#view=FitH`
      : doc.type === "html"
        ? doc.file
        : `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
            `${SITE_ORIGIN}${doc.file}`,
          )}`;

  return (
    <>
      {/* Header + actions */}
      <section className="bg-navyDeep text-white">
        <div className="container-x pt-6 pb-6 md:pt-8 md:pb-8">
          <Link
            href={doc.backHref}
            className="inline-flex items-center gap-2 text-xs text-skyLight/70 hover:text-coral focus-ring rounded mb-4"
          >
            <ArrowLeft size={14} aria-hidden="true" /> {doc.backLabel}
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="eyebrow mb-2 inline-flex items-center gap-2">
                <FileText size={14} aria-hidden="true" /> Document
              </p>
              <h1 className="font-display font-bold tracking-tight text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
                {doc.title}
              </h1>
              <p className="mt-2 text-sm md:text-base text-skyLight/80">{doc.subtitle}</p>
            </div>
            <a
              href={doc.file}
              download
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-coral text-white font-semibold px-6 py-3 text-sm hover:bg-coral/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-navyDeep transition-colors"
            >
              <Download size={16} aria-hidden="true" /> Download document
            </a>
          </div>
        </div>
      </section>

      {/* Embedded viewer */}
      <section className="bg-bgAlt">
        <div className="container-x py-8 md:py-10">
          <div className="rounded-2xl overflow-hidden ring-1 ring-line bg-white shadow-md">
            <iframe
              src={viewerSrc}
              title={doc.title}
              className="w-full h-[78vh] min-h-[560px] block border-0"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            Trouble viewing?{" "}
            <a
              href={doc.file}
              download
              className="text-coral font-semibold hover:underline"
            >
              Download the document
            </a>{" "}
            to open it locally.
          </p>
        </div>
      </section>
    </>
  );
}
