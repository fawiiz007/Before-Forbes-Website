"use client";

import { useState, type FormEvent } from "react";

const ASSETS = {
  logoHorizontal: "/logo.png",
  pattern: "/assets/brand-pattern.svg",
};

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("newsletter subscribe", email);
  }

  return (
    <footer className="relative overflow-hidden bg-[#431F0F] pb-8 pt-16 text-[#F2B35B] md:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[length:520px] bg-right opacity-[0.08]"
        style={{
          backgroundImage: `url(${ASSETS.pattern})`,
          WebkitMaskImage: "linear-gradient(90deg, transparent 30%, #000 75%)",
          maskImage: "linear-gradient(90deg, transparent 30%, #000 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div>
            <img
              src={ASSETS.logoHorizontal}
              alt="Before Forbes"
              className="mb-5 h-12 w-auto"
            />
            <p className="max-w-sm text-[#F2B35B]/85">
              Business, wealth and leadership, through the lens of Islamic history.
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
