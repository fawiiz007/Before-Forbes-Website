"use client";
/**
 * Before Forbes — Contact page
 * ---------------------------------------------------------------------------
 * Requires Tailwind CSS in the host project.
 * Fonts: Poppins (body/UI) + Al Zaina (display/founder & historical names).
 *
 * ASSET PLACEHOLDERS — replace the paths in the ASSETS object with real files.
 * ---------------------------------------------------------------------------
 */

import { useState, type FormEvent } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const ASSETS = {
  logoHorizontal: "/logo.png",
  pattern: "/assets/brand-pattern.svg",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact" },
];

const CONTACT_DETAILS = [
  { label: "Email", value: "beforeforbes@gmail.com", href: "mailto:beforeforbes@gmail.com" },
  { label: "Phone / WhatsApp", value: "07039156642", href: "tel:07039156642" },
  { label: "Instagram", value: "@beforeforbes_", href: "https://instagram.com/beforeforbes_" },
  { label: "Location", value: "Online only (to be confirmed)", href: undefined },
];

function PatternOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-[length:520px] bg-right opacity-[0.14] ${className}`}
      style={{
        backgroundImage: `url(${ASSETS.pattern})`,
        WebkitMaskImage: "linear-gradient(90deg, transparent 30%, #000 75%)",
        maskImage: "linear-gradient(90deg, transparent 30%, #000 75%)",
      }}
    />
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#431F0F] py-16 md:py-24">
      <PatternOverlay />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C27E37]">
            Contact
          </p>
          <h1 className="text-[38px] font-bold leading-tight text-[#F2B35B] sm:text-5xl md:text-6xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 text-base text-[#F2B35B]/90 sm:text-lg">
            Send us a message and we&apos;ll get back to you.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactFormAndDetails() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to your contact form endpoint (e.g. Formspree, API route, etc.)
    console.log("contact form submission", form);
  }

  return (
    <section className="bg-[#F2C372] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-14 lg:px-10">
        <div className="rounded-lg bg-white p-7 sm:p-10">
          <h3 className="mb-6 text-xl font-semibold text-[#431F0F]">
            Send a message
          </h3>
          <form onSubmit={handleSubmit} className="grid gap-3.5">
            <input
              type="text"
              required
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded border border-[#E5CFA5] px-4.5 py-3.5 text-[15px] text-[#431F0F] placeholder:text-[#8a6a4a] focus:outline-none focus:ring-2 focus:ring-[#C27E37]"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded border border-[#E5CFA5] px-4.5 py-3.5 text-[15px] text-[#431F0F] placeholder:text-[#8a6a4a] focus:outline-none focus:ring-2 focus:ring-[#C27E37]"
            />
            <textarea
              required
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded border border-[#E5CFA5] px-4.5 py-3.5 text-[15px] text-[#431F0F] placeholder:text-[#8a6a4a] focus:outline-none focus:ring-2 focus:ring-[#C27E37]"
            />
            <button
              type="submit"
              className="rounded bg-[#431F0F] px-8 py-3.5 text-center text-[15px] font-semibold text-[#F2B35B] hover:bg-[#5a2c17]"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="grid gap-5">
          {CONTACT_DETAILS.map((detail) => {
            const content = (
              <div className="rounded-md bg-[#431F0F] px-6 py-5 text-[#F2B35B]">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-[#C27E37]">
                  {detail.label}
                </span>
                <span className="text-[15px]">{detail.value}</span>
              </div>
            );
            return detail.href ? (
              <a key={detail.label} href={detail.href}>
                {content}
              </a>
            ) : (
              <div key={detail.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#431F0F]">
      <Navbar currentPage="Contact" />
      <main>
        <Hero />
        <ContactFormAndDetails />
      </main>
      <Footer />
    </div>
  );
}
