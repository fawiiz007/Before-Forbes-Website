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
import Footer from "./layout/Footer";
import Image from "next/image";
import founderPhoto from "../public/assets/founderPhoto.jpg"; // import the founder photo
import lanternIcon from "../public/assets/lanternIcon.png"; // import the lantern icon

const ASSETS = {
  logoHorizontal: "/assets/logo-horizontal-gold.png", // wordmark + mark, gold-on-transparent, for dark backgrounds
  logoMark: "/assets/logo-mark-gold.png", // standalone "B" mark, gold-on-transparent
  pattern: "../public/assets/brand-pattern_1.png", // tileable geometric brand pattern
  founderPhoto: "../public/assets/founderPhoto.jpg", // portrait of the founder, Sadiya Mukhtar
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact" },
];

const VALUES = [
  { number: "01", title: "Tawhid-Centered Purpose" },
  { number: "02", title: "Excellence (Ihsan)" },
  { number: "03", title: "Authenticity" },
  { number: "04", title: "Knowledge Before Action" },
  { number: "05", title: "Integrity in Commerce" },
  { number: "06", title: "Legacy Over Luxury" },
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
          <p className="mt-6 text-base text-[#FBF3E4]/80 sm:text-lg">
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
        <div className="rounded-lg p-8 md:p-11">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#431F0F]/80">
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
        <div className="rounded-lg p-8 md:p-11">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#431F0F]/80">
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

function LanternPlaceholder() {
  return (
    <Image
      src={lanternIcon}
      alt=""
      className="mx-auto h-20 w-20"
      aria-hidden="true"
      />
  );
}

function Values() {
  return (
    <section className="bg-[#F8F1E6] pt-15 pb-25 md:pt-15 md:pb-25">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          <LanternPlaceholder />
          <h2 className="mt-5 text-center font-sans-serif font-bold text-xl leading-none text-[#45291D] sm:text-2xl">
            Our Values
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 gap-x-15 gap-y-15 sm:gap-y-9 md:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.number} className="text-center md:text-left">
              <div className="mb-2 text-[16px] font-normal tracking-[0.02em] text-[#BB8A3D]">
                {value.number}
              </div>
              <h3 className="font-sans-serif text-xl leading-[1.1] text-[#45291D] sm:text-2xl md:leading-[1.15]">
                {value.title}
              </h3>
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
        <div className="aspect-[3/3] w-full overflow-hidden rounded-lg">
          
              <Image
                src={founderPhoto}
                alt=""
                priority
                style={{ objectFit: "cover", width: "auto", height: "100%" }}
                aria-hidden="true"
                className="mx-auto mb-3 w-16"
              />
        </div>

        <div>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#431F0F]/70">
            The founder
          </p>
          {/* Use the Al Zaina display font for the founder's name, per brand guidelines */}
          <h2 className="font-serif text-[40px] font-bold italic leading-tight text-[#431F0F] sm:text-5xl">
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
            className="mt-7 inline-block rounded bg-[#431F0F] px-7 py-3 text-[15px] font-semibold text-[#FFFF] hover:bg-[#5a2c17]"
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
            className="w-full rounded bg-[#431F0F] px-7 py-3.5 text-center text-[15px] font-semibold text-[#FFFF] hover:bg-[#5a2c17] sm:w-auto"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
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
