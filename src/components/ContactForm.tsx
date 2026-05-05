"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "./Button";
import { verticals } from "@/content/verticals";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const params = useSearchParams();
  const initialVertical = params.get("vertical") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [interest, setInterest] = useState<string[]>(initialVertical ? [initialVertical] : []);

  useEffect(() => {
    if (initialVertical && !interest.includes(initialVertical)) {
      setInterest([initialVertical]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialVertical]);

  const validSlugs = useMemo(() => verticals.map((v) => v.slug), []);

  function toggleInterest(slug: string) {
    setInterest((cur) => (cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      organisation: String(fd.get("organisation") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      interest: interest.filter((s) => validSlugs.includes(s)),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
      e.currentTarget.reset();
      setInterest([]);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-coralLight ring-1 ring-coral/30 p-8 text-navy">
        <h2 className="display-h3">Thank you — we&rsquo;ll be in touch shortly.</h2>
        <p className="mt-3 text-ink2">
          Your message has reached the MMT team. We typically respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center text-sm font-semibold text-coral hover:underline focus-ring rounded"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Organisation" name="organisation" required />

      <fieldset>
        <legend className="block text-sm font-semibold text-navy">I&rsquo;m interested in</legend>
        <p className="text-xs text-muted mt-1">Select all that apply.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {verticals.map((v) => {
            const on = interest.includes(v.slug);
            return (
              <button
                type="button"
                key={v.slug}
                onClick={() => toggleInterest(v.slug)}
                aria-pressed={on}
                className={`px-3.5 py-2 rounded-full text-sm font-medium ring-1 transition focus-ring ${
                  on
                    ? "bg-coral text-white ring-coral"
                    : "bg-white text-navy ring-line hover:ring-coral hover:text-coral"
                }`}
              >
                {v.name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-ink focus-ring focus:border-coral"
          placeholder="Tell us about your project, timelines, or questions."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-coral">
          {errorMsg ?? "Something went wrong. Please try again."}
        </p>
      )}

      <div className="flex items-center gap-3">
        <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <p className="text-xs text-muted">We&rsquo;ll never share your details.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-navy">
        {label} {required && <span className="text-coral" aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-ink focus-ring focus:border-coral"
      />
    </div>
  );
}
