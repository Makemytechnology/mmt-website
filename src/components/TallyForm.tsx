"use client";

import { useEffect } from "react";

const TALLY_EMBED_SRC =
  "https://tally.so/embed/RGgxVd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_SCRIPT_SRC = "https://tally.so/widgets/embed.js";

type TallyWindow = Window & {
  Tally?: { loadEmbeds: () => void };
};

/**
 * Inline Tally form embed for the contact page. Tally hosts the form and
 * emails submissions to us, so there's no backend / SMTP to maintain.
 *
 * The widget script (embed.js) handles dynamic iframe height. If it fails to
 * load for any reason, we fall back to setting the iframe src directly so the
 * form still renders.
 */
export function TallyForm() {
  useEffect(() => {
    const w = window as TallyWindow;

    const loadEmbeds = () => {
      if (typeof w.Tally !== "undefined") {
        w.Tally.loadEmbeds();
        return;
      }
      // Fallback: script unavailable — populate iframe src manually.
      document
        .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
        .forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc ?? "";
        });
    };

    if (document.querySelector(`script[src="${TALLY_SCRIPT_SRC}"]`)) {
      loadEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.src = TALLY_SCRIPT_SRC;
    script.onload = loadEmbeds;
    script.onerror = loadEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      data-tally-src={TALLY_EMBED_SRC}
      loading="lazy"
      width="100%"
      height="500"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Contact MakeMyTechnology"
    />
  );
}
