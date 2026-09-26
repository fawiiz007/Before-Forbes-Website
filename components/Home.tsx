"use client";
/**
 * Before Forbes — Home page
 * ---------------------------------------------------------------------------
 * Requires Tailwind CSS in the host project.
 * Fonts: Poppins (body/UI) + Al Zaina (display/founder & historical names).
 *   Add both via <link> or next/font, then set them as CSS variables:
 *   --font-poppins, --font-al-zaina (see className usage below).
 *
 * ASSET PLACEHOLDERS — replace the paths in the ASSETS object with real files.
 * Nothing else in this file needs to change when you swap assets.
 * ---------------------------------------------------------------------------
 */

import { useState, type FormEvent } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const ASSETS = {
  logoHorizontal: "/logo.png", // Before Forbes primary logo
  logoMark: "/assets/logo-mark-gold.png", // standalone "B" mark, gold-on-transparent, used large in the hero
  pattern: "/assets/brand-pattern.svg", // tileable geometric brand pattern
  bookCover: "/assets/book-cover.png", // Before Forbes book cover artwork
  series1: "/assets/series-1.jpg",
  series2: "/assets/series-2.jpg",
  series3: "/assets/series-3.jpg",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact" },
];

const SERIES_PREVIEW = [
  {
    image: ASSETS.series1,
    tag: "Series",
    title: "Series title one",
    description: "Short description of the series goes here.",
  },
  {
    image: ASSETS.series2,
    tag: "Series",
    title: "Series title two",
    description: "Short description of the series goes here.",
  },
  {
    image: ASSETS.series3,
    tag: "Series",
    title: "Series title three",
    description: "Short description of the series goes here.",
  },
];

function PlayIcon() {
  return (
    <span className="grid h-14 w-14 place-items-center rounded-full bg-[#F2B35B]">
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
        <path d="M1 1.5v15l14-7.5-14-7.5Z" fill="#431F0F" />
      </svg>
    </span>
  );
}

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
    <section className="relative overflow-hidden bg-[#431F0F] py-16 md:py-28 lg:py-32">
      <PatternOverlay />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-14 lg:px-10">
        <div>
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C27E37]">
            Faith · Business · Legacy
          </p>
          <h1 className="text-[38px] font-bold leading-[1.1] text-[#F2B35B] sm:text-5xl md:text-6xl">
            Success, as the first generations understood it.
          </h1>
          <p className="mt-6 max-w-lg text-base text-[#F2B35B]/90 sm:text-lg">
            Timeless principles for building wealth, leadership and legacy,
            drawn from the Prophet (PBUH), his Companions and the early
            Muslims.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/watch"
              className="rounded bg-[#F2B35B] px-8 py-3.5 text-center text-[15px] font-semibold text-[#431F0F] hover:bg-[#F2C372]"
            >
              Watch
            </a>
            <a
              href="/#waitlist"
              className="rounded border border-[#F2B35B] px-8 py-3.5 text-center text-[15px] font-semibold text-[#F2B35B] hover:bg-[#F2B35B]/10"
            >
              Join the waitlist
            </a>
          </div>
        </div>

        <div className="justify-self-center">
          {/* PLACEHOLDER: standalone logomark */}
          <img
            src={ASSETS.logoMark}
            alt=""
            aria-hidden="true"
            className="h-auto max-h-[280px] w-auto max-w-full md:max-h-[380px]"
          />
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="bg-[#F2B35B] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-14 lg:px-10">
        <div>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#431F0F]/70">
            Our story
          </p>
          <h2 className="text-[28px] font-bold leading-tight text-[#431F0F] sm:text-3xl md:text-4xl">
            Ambition and purpose were never meant to be separated.
          </h2>
        </div>
        <div>
          <p className="text-base text-[#431F0F]/90 sm:text-lg">
            Before Forbes is a faith-driven educational brand redefining
            success for Muslims through the lens of Islam, equipping
            entrepreneurs, professionals and ambitious individuals to build
            wealth without compromising their faith.
          </p>
          <a
            href="/about"
            className="mt-5 inline-block border-b-2 border-[#431F0F] pb-0.5 font-semibold text-[#431F0F]"
          >
            About Before Forbes →
          </a>
        </div>
      </div>
    </section>
  );
}

function WatchPreview() {
  return (
    <section className="bg-[#FBF3E4] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div>
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C27E37]">
              Watch
            </p>
            <h2 className="text-2xl font-bold text-[#431F0F] sm:text-3xl md:text-4xl">
              Learn business the halal way
            </h2>
          </div>
          <a
            href="/watch"
            className="inline-block border-b-2 border-[#C27E37] pb-0.5 font-semibold text-[#431F0F]"
          >
            See everything →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {SERIES_PREVIEW.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_2px_0_rgba(67,31,15,0.08)]"
            >
              <div
                className="relative h-[190px] bg-cover bg-center sm:h-[210px]"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 grid place-items-center">
                  <PlayIcon />
                </div>
              </div>
              <div className="p-6">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#C27E37]">
                  {item.tag}
                </p>
                <h3 className="text-lg font-semibold text-[#431F0F]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#431F0F]/75">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookAndWaitlist() {
  const [form, setForm] = useState({ name: "", email: "", note: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to your waitlist endpoint / email provider.
    console.log("waitlist submission", form);
  }

  return (
    <section id="waitlist" className="relative overflow-hidden bg-[#431F0F] py-16 md:py-24">
      <PatternOverlay />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-10">
        <div className="mx-auto w-full max-w-[280px] -rotate-3">
          <div
            className="flex aspect-[280/390] flex-col justify-end rounded-r-lg rounded-l-[4px] bg-[#431F0F] bg-cover bg-center p-7 shadow-[-14px_18px_0_rgba(0,0,0,0.25)]"
            style={{ backgroundImage: `url(${ASSETS.pattern})`, backgroundSize: "300px" }}
          >
            {/* PLACEHOLDER: book cover artwork; swap this whole block for <img src={ASSETS.bookCover} .../> once available */}
            <img
              src={ASSETS.logoHorizontal}
              alt="The Before Forbes Book"
              className="w-[65%]"
            />
            <p className="mt-4 font-serif text-xl italic text-[#F2B35B]">
              The Before Forbes Book
            </p>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            <span className="h-2 w-6 rounded-full bg-[#F2B35B]" />
            <span className="h-2 w-2 rounded-full bg-[#C27E37]" />
            <span className="h-2 w-2 rounded-full bg-[#C27E37]" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#F2B35B] sm:text-3xl md:text-4xl">
            Be first to read it.
          </h2>
          <p className="mt-3 max-w-md text-[#F2B35B]/85">
            Join the waitlist and get notified the day the book is released.
          </p>
          {/*
            NOTE: once the book is live, replace this form with a direct
            purchase flow via your payment gateway (e.g. Stripe/Paystack).
          */}
          <form onSubmit={handleSubmit} className="mt-7 grid gap-3.5">
            <input
              type="text"
              required
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded border border-[#F2B35B]/50 bg-white/[0.06] px-4.5 py-3.5 text-[15px] text-[#F2B35B] placeholder:text-[#F2B35B]/60 focus:outline-none focus:ring-2 focus:ring-[#F2B35B]"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded border border-[#F2B35B]/50 bg-white/[0.06] px-4.5 py-3.5 text-[15px] text-[#F2B35B] placeholder:text-[#F2B35B]/60 focus:outline-none focus:ring-2 focus:ring-[#F2B35B]"
            />
            <textarea
              placeholder="Anything else you'd like us to know"
              rows={3}
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              className="w-full resize-none rounded border border-[#F2B35B]/50 bg-white/[0.06] px-4.5 py-3.5 text-[15px] text-[#F2B35B] placeholder:text-[#F2B35B]/60 focus:outline-none focus:ring-2 focus:ring-[#F2B35B]"
            />
            <button
              type="submit"
              className="rounded bg-[#F2B35B] px-8 py-3.5 text-center text-[15px] font-semibold text-[#431F0F] hover:bg-[#F2C372]"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#431F0F]">
      <Navbar currentPage="Home" />
      <main>
        <Hero />
        <OurStory />
        <WatchPreview />
        <BookAndWaitlist />
      </main>
      <Footer />
    </div>
  );
}
