"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const resumeUrl = "https://sites.google.com/view/gvirk/resume";

export function ResumeModalTrigger({children, className}:{children:ReactNode; className?:string}) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const company = String(form.get("company") || "").trim();

    if (!email && !phone) {
      setError("Please add an email address or phone number so I can follow up.");
      return;
    }

    setError("");
    const subject = encodeURIComponent("Resume request — " + name + " (" + company + ")");
    const body = encodeURIComponent(
      "Hi Simar,\n\nI’d like to request your resume.\n\nName: " + name +
      "\nEmail: " + (email || "Not provided") +
      "\nPhone: " + (phone || "Not provided") +
      "\nCompany: " + company +
      "\n\nSent from simarvirk.com."
    );
    window.location.href = "mailto:gursimvirk3@gmail.com?subject=" + subject + "&body=" + body;
  }

  return <>
    <button className={className} type="button" onClick={() => setOpen(true)}>{children}</button>
    {open && (
      <div
        className="resume-modal-backdrop"
        onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
      >
        <section className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
          <button className="resume-modal-close" type="button" aria-label="Close resume request" onClick={() => setOpen(false)}>×</button>
          <p className="eyebrow">RESUME REQUEST</p>
          <h2 id="resume-modal-title">Open my resume.</h2>
          <p>You can open the current resume directly, or leave a note if you need a tailored copy.</p>
          <a className="button-light resume-submit" href={resumeUrl} target="_blank" rel="noreferrer">OPEN RESUME ↗</a>
          <form onSubmit={submitRequest}>
            <label>Name<input name="name" autoComplete="name" required /></label>
            <label>Email <span>(or phone below)</span><input name="email" type="email" autoComplete="email" /></label>
            <label>Phone <span>(email or phone required)</span><input name="phone" type="tel" autoComplete="tel" /></label>
            <label>Company<input name="company" autoComplete="organization" required /></label>
            {error && <p className="resume-form-error" role="alert">{error}</p>}
            <button className="button-light resume-submit" type="submit">REQUEST RESUME ↗</button>
            <small>Submitting opens an email draft addressed to me with your details, so you can send the request.</small>
          </form>
        </section>
      </div>
    )}
  </>;
}
