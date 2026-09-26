"use client";
/**
 * Before Forbes — About page
 * ---------------------------------------------------------------------------
 * Requires Tailwind CSS in the host project.
 * Fonts: Poppins (body/UI) + Al Zaina (display/founder & historical names).
 *
 * ASSET PLACEHOLDERS — replace the paths in the ASSETS object with real files.
 * ---------------------------------------------------------------------------
 */

import { useState, type FormEvent } from "react";
import Navbar from "./layout/Navbar";

const ASSETS = {
  logoHorizontal: "/assets/logo-horizontal-gold.png", // wordmark + mark, gold-on-transparent, for dark backgrounds
  logoMark: "/assets/logo-mark-gold.png", // standalone "B" mark, gold-on-transparent
  pattern: "/assets/brand-pattern.svg", // tileable geometric brand pattern
  founderPhoto: "/assets/founder-photo.jpg", // portrait of the founder, Sadiya Mukhtar
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact" },
];

const VALUES = [
  "Tawhid-Centered Purpose",
  "Excellence (Ihsan)",
  "Authenticity",
  "Knowledge Before Action",
  "Integrity in Commerce",
  "Legacy Over Luxury",
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
            About
          </p>
          <h1 className="text-[32px] font-bold leading-tight text-[#F2B35B] sm:text-4xl md:text-5xl">
            Before the Forbes lists, there were the caravans.
          </h1>
          <p className="mt-6 text-base text-[#F2B35B]/90 sm:text-lg">
            We teach business, wealth-building and leadership through Islamic
            history and Prophetic guidance.
          </p>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="bg-[#F2B35B] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-2 md:gap-10 lg:px-10">
        <div className="rounded-lg bg-white p-8 md:p-11">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#C27E37]">
            Vision
          </p>
          <h3 className="text-xl font-semibold leading-snug text-[#431F0F] sm:text-2xl">
            To become the leading global reference for Islamic
            entrepreneurship and faith-centered success.
          </h3>
          <p className="mt-4 text-[#431F0F]/80">
            Cultivating a generation who view business as an act of worship
            and build legacies for this world and the Hereafter.
          </p>
        </div>
        <div className="rounded-lg bg-white p-8 md:p-11">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#C27E37]">
            Mission
          </p>
          <h3 className="text-xl font-semibold leading-snug text-[#431F0F] sm:text-2xl">
            To revive the Islamic model of entrepreneurship by educating and
            inspiring Muslims.
          </h3>
          <p className="mt-4 text-[#431F0F]/80">
            Building ethical businesses, creating lasting wealth and pursuing
            excellence, all in seeking the pleasure of Allah.
          </p>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-[#FBF3E4] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C27E37]">
          What we stand for
        </p>
        <h2 className="text-2xl font-bold text-[#431F0F] sm:text-3xl md:text-4xl">
          Our values
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, i) => (
            <div
              key={value}
              className="flex items-center gap-4 rounded-md bg-[#431F0F] px-6 py-6 text-[#F2B35B]"
            >
              <span className="text-xs font-semibold tracking-[0.14em] text-[#C27E37]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[17px] font-semibold">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="bg-[#F2C372] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-10">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#C27E37] to-[#F2C372]">
          {/* PLACEHOLDER: founder photo — swap for <img src={ASSETS.founderPhoto} className="h-full w-full object-cover" alt="Sadiya Mukhtar" /> */}
          <div className="grid h-full w-full place-items-center p-8 text-center text-sm font-medium text-[#431F0F]">
            <div>
              <img
                src={ASSETS.logoMark}
                alt=""
                aria-hidden="true"
                className="mx-auto mb-3 w-16 opacity-70"
              />
              Founder photo
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#431F0F]/70">
            The founder
          </p>
          {/* Use the Al Zaina display font for the founder's name, per brand guidelines */}
          <h2 className="font-serif text-[40px] italic leading-tight text-[#431F0F] sm:text-5xl">
            Sadiya Mukhtar
          </h2>
          <p className="mt-4 text-[#431F0F]/90">
            Founder, Before Forbes. Founder bio and personal note go here — a
            short story of why Before Forbes began and who it is for.
          </p>
          <p className="mt-4 text-[#431F0F]/80">
            &ldquo;Personal note in the founder&apos;s own words.&rdquo;{" "}
            <span className="text-sm">(content to be provided)</span>
          </p>
          <a
            href="/contact"
            className="mt-7 inline-block rounded bg-[#431F0F] px-7 py-3 text-[15px] font-semibold text-[#F2B35B] hover:bg-[#5a2c17]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="relative overflow-hidden bg-[#431F0F] py-16 md:py-20">
      <PatternOverlay />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start gap-6 rounded-xl bg-[#F2B35B] p-8 sm:flex-row sm:items-center sm:justify-between md:p-12">
          <div>
            <h2 className="text-2xl font-bold text-[#431F0F] sm:text-3xl">
              How to reach us
            </h2>
            <p className="mt-2 max-w-md text-[#431F0F]/85">
              Questions, collaborations or workshop enquiries. We&apos;d love
              to hear from you.
            </p>
          </div>
          <a
            href="/contact"
            className="w-full rounded bg-[#431F0F] px-7 py-3.5 text-center text-[15px] font-semibold text-[#F2B35B] hover:bg-[#5a2c17] sm:w-auto"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to your newsletter provider.
    console.log("newsletter subscribe", email);
  }

  return (
    <footer className="relative overflow-hidden bg-[#431F0F] pb-8 pt-16 text-[#F2B35B] md:pt-20">
      <PatternOverlay className="opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div>
            <img
              src={ASSETS.logoHorizontal}
              alt="Before Forbes"
              className="mb-5 h-12 w-auto"
            />
            <p className="max-w-sm text-[#F2B35B]/85">
              Business, wealth and leadership, through the lens of Islamic
              history.
            </p>
            <p className="mt-5 text-sm text-[#F2B35B]/75">
              Home · About · Watch · Contact
              <br />
              Instagram @beforeforbes_
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Join the newsletter</h3>
            <p className="mb-4 text-sm text-[#F2B35B]/80">
              Lessons from the past, delivered to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2.5 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-h-[52px] flex-1 rounded border border-[#F2B35B]/50 bg-white/[0.06] px-4.5 text-[15px] text-[#F2B35B] placeholder:text-[#F2B35B]/60 focus:outline-none focus:ring-2 focus:ring-[#F2B35B]"
              />
              <button
                type="submit"
                className="min-h-[52px] rounded bg-[#F2B35B] px-6 text-sm font-semibold text-[#431F0F] hover:bg-[#F2C372] sm:text-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <small className="relative mt-16 block border-t border-[#F2B35B]/30 pt-6 text-[13px] text-[#F2B35B]/80">
          © {new Date().getFullYear()} Before Forbes · beforeforbes@gmail.com
        </small>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#431F0F]">
      <Navbar currentPage="About" />
      <main>
        <Hero />
        <VisionMission />
        <Values />
        <Founder />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
