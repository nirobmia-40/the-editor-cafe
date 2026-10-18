"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "fallback";

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [emailDraft, setEmailDraft] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent("Website inquiry from " + name);
    const body = encodeURIComponent(["Name: " + name, "Email: " + email, "", message].join(String.fromCharCode(10)));
    const draft = "https://mail.google.com/mail/?view=cm&fs=1&to=nirobmia2026%40gmail.com&su=" + subject + "&body=" + body;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) {
        setEmailDraft(draft);
        setStatus("fallback");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setEmailDraft(draft);
      setStatus("fallback");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>Your email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>A little about your idea<textarea name="message" rows={3} required maxLength={5000} /></label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send your note"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" aria-live="polite">
        {status === "sent" && "Thanks for the note. We’ll be in touch soon."}
        {status === "fallback" && <>Your note could not be saved on the website. <a href={emailDraft} target="_blank" rel="noreferrer">Open Gmail to send it</a>.</>}
      </p>
    </form>
  );
}
