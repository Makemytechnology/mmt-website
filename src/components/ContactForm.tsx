"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "ok" | "error";

const verticals = [
  { value: "", label: "Select a vertical (optional)" },
  { value: "5g-6g", label: "5G / 6G Studio" },
  { value: "iot", label: "IoT Fabric" },
  { value: "ai", label: "Cognify (AI)" },
  { value: "drone-corridor", label: "SkyShield · DroneWay (Robotics)" },
  { value: "quantum", label: "QGuard (Quantum)" },
  { value: "other", label: "Other / not sure" },
];

export function ContactForm() {
  const params = useSearchParams();
  const initialVertical = params?.get("vertical") ?? "";
  const initialPackage = params?.get("package") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [vertical, setVertical] = useState(initialVertical);
  const [message, setMessage] = useState(
    initialPackage
      ? `I'm interested in the ${initialPackage.replace(/-/g, " ")} package. `
      : "",
  );
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, vertical, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? `Server responded with ${res.status}`);
      }
      setStatus("ok");
      setName("");
      setEmail("");
      setCompany("");
      setVertical("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "ok") {
    return (
      <div
        role="status"
        className="rounded-2xl bg-bgAlt ring-1 ring-line p-8 text-center"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-coral text-white">
          <CheckCircle2 size={28} aria-hidden />
        </div>
        <h2 className="mt-5 font-display text-2xl font-semibold text-navy">
          Thanks — message received.
        </h2>
        <p className="mt-3 text-ink2 leading-relaxed max-w-md mx-auto">
          We&rsquo;ll route this to the right vertical lead and get back to you within a
          working day or two.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-coral hover:underline focus-ring rounded"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Name"
          name="name"
          value={name}
          onChange={setName}
          required
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          autoComplete="email"
        />
      </div>

      <Field
        label="Company / organisation"
        name="company"
        value={company}
        onChange={setCompany}
        autoComplete="organization"
      />

      <div>
        <label
          htmlFor="vertical"
          className="block text-xs uppercase tracking-wider font-semibold text-muted mb-2"
        >
          Which vertical interests you?
        </label>
        <select
          id="vertical"
          name="vertical"
          value={vertical}
          onChange={(e) => setVertical(e.target.value)}
          className="w-full rounded-lg bg-white ring-1 ring-line px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-bg"
        >
          {verticals.map((v) => (
            <option key={v.value} value={v.value}>
              {v.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-wider font-semibold text-muted mb-2"
        >
          Message <span className="text-coral">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A few lines about your project, timeline, and what you'd like to discuss."
          className="w-full rounded-lg bg-white ring-1 ring-line px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-bg resize-y"
        />
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg bg-coralLight ring-1 ring-coral/30 px-4 py-3 text-sm text-navy"
        >
          <AlertCircle size={18} className="text-coral mt-0.5 shrink-0" aria-hidden />
          <span>
            <span className="font-semibold">Couldn&rsquo;t send:</span> {errorMsg || "Please try again."}
          </span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-coral text-white font-semibold px-7 py-3.5 text-base hover:bg-coral/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:pointer-events-none transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <Send size={16} aria-hidden />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  required,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-wider font-semibold text-muted mb-2"
      >
        {label} {required ? <span className="text-coral">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg bg-white ring-1 ring-line px-4 py-3 text-sm text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-bg"
      />
    </div>
  );
}
