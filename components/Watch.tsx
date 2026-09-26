"use client";
/**
 * Before Forbes — Watch page
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
  series1: "/assets/series-1.jpg",
  series2: "/assets/series-2.jpg",
  series3: "/assets/series-3.jpg",
  series4: "/assets/series-4.jpg",
  series5: "/assets/series-5.jpg",
  series6: "/assets/series-6.jpg",
  workshopMain: "/assets/workshop-1.jpg", // large highlight — e.g. venue / event wide shot
  workshopSecondary1: "/assets/workshop-2.jpg",
  workshopSecondary2: "/assets/workshop-3.jpg",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact" },
];

const SERIES = [
  { image: ASSETS.series1, title: "Series title one" },
  { image: ASSETS.series2, title: "Series title two" },
  { image: ASSETS.series3, title: "Series title three" },
  { image: ASSETS.series4, title: "Series title four" },
  { image: ASSETS.series5, title: "Series title five" },
  { image: ASSETS.series6, title: "Series title six" },
].map((s) => ({
  ...s,
  tag: "Series",
  description: "Short description of the series goes here.",
}));

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
    <section className="relative overflow-hidden bg-[#431F0F] py-16 md:py-24">
      <PatternOverlay />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C27E37]">
            Watch
          </p>
          <h1 className="text-[30px] font-bold leading-tight text-[#F2B35B] sm:text-4xl md:text-5xl">
            Stories of the ones who traded before the world kept score.
          </h1>
        </div>
      </div>
    </section>
  );
}

function AllSeries() {
  return (
    <section className="bg-[#FBF3E4] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div>
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C27E37]">
              The series
            </p>
            <h2 className="text-2xl font-bold text-[#431F0F] sm:text-3xl md:text-4xl">
              All series
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {SERIES.map((item) => (
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

function WorkshopHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#431F0F] py-16 md:py-24">
      <PatternOverlay />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C27E37]">
          Workshop
        </p>
        <h2 className="text-2xl font-bold text-[#F2B35B] sm:text-3xl md:text-4xl">
          Highlights from our previous workshop
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div
            className="min-h-[260px] rounded-lg bg-cover bg-center md:min-h-[400px]"
            style={{ backgroundImage: `url(${ASSETS.workshopMain})` }}
            role="img"
            aria-label="Wide shot from the previous Before Forbes workshop"
          >
            <div className="grid h-full w-full place-items-center">
              <PlayIcon />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-5">
            <div
              className="min-h-[170px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${ASSETS.workshopSecondary1})` }}
              role="img"
              aria-label="Photo from the previous Before Forbes workshop"
            />
            <div
              className="min-h-[170px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${ASSETS.workshopSecondary2})` }}
              role="img"
              aria-label="Photo from the previous Before Forbes workshop"
            >
              <div className="grid h-full w-full place-items-center">
                <PlayIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoreComing() {
  return (
    <section className="bg-[#F2B35B] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start gap-6 rounded-xl bg-[#431F0F] p-8 sm:flex-row sm:items-center sm:justify-between md:p-12">
          <div>
            <h2 className="text-2xl font-bold text-[#F2B35B] sm:text-3xl">
              More is coming.
            </h2>
            <p className="mt-2 max-w-md text-[#F2B35B]/85">
              New series, more workshops and the Before Forbes book.
            </p>
          </div>
          <a
            href="/#waitlist"
            className="w-full rounded bg-[#F2B35B] px-7 py-3.5 text-center text-[15px] font-semibold text-[#431F0F] hover:bg-[#F2C372] sm:w-auto"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#431F0F]">
      <Navbar currentPage="Watch" />
      <main>
        <Hero />
        <AllSeries />
        <WorkshopHighlights />
        <MoreComing />
      </main>
      <Footer />
    </div>
  );
}
