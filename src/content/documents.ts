export type DocEntry = {
  slug: string;
  title: string;
  subtitle: string;
  file: string; // path under /public
  type: "pdf" | "docx";
  backHref: string; // related product page
  backLabel: string;
};

// Absolute site origin — used by the Microsoft Office online viewer, which must
// fetch the .docx from a publicly reachable URL (works in production).
export const SITE_ORIGIN = "https://makemytechnology.com";

export const documents: DocEntry[] = [
  {
    slug: "gnb-specifications",
    title: "MMT gNB — Specifications",
    subtitle: "Portable 5G Standalone base station · full RF & system spec sheet",
    file: "/docs/mmt-gnb-specifications.pdf",
    type: "pdf",
    backHref: "/5g-6g/studio-gnb",
    backLabel: "Back to Studio gNB",
  },
  {
    slug: "studio-5g-manual",
    title: "MMT Studio 5G — Manual",
    subtitle: "The complete MMT 5G/6G Studio manual",
    file: "/docs/mmt-studio-5g-manual.docx",
    type: "docx",
    backHref: "/5g-6g/studio-core",
    backLabel: "Back to Studio Core",
  },
  {
    slug: "5g-system-engineering-syllabus",
    title: "5G System Engineering — Syllabus",
    subtitle: "Studio Academy · the 8-module MMT-5G-SE course syllabus",
    file: "/docs/5g-system-engineering-syllabus.docx",
    type: "docx",
    backHref: "/5g-6g/studio-academy",
    backLabel: "Back to Studio Academy",
  },
];

export function getDocument(slug: string): DocEntry | undefined {
  return documents.find((d) => d.slug === slug);
}
