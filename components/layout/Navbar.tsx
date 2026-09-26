"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavPage = (typeof NAV_LINKS)[number]["label"];

export default function Navbar({ currentPage = "Home" }: { currentPage?: NavPage }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-[#431F0F]">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8 md:h-[84px] lg:px-10">
        <Link href="/" className="shrink-0">
          <img
            src="/assets/logo-horizontal-gold.png"
            alt="Before Forbes"
            className="h-10 w-auto md:h-[52px]"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-[#F2B35B]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.label === currentPage ? "page" : undefined}
                  className="pb-1 border-b-2 border-transparent transition-colors hover:border-[#F2B35B] aria-[current=page]:border-[#F2B35B]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/#waitlist"
          className="hidden rounded font-semibold text-[#431F0F] bg-[#F2B35B] px-6 py-2.5 text-sm hover:bg-[#F2C372] md:inline-block"
        >
          Join the waitlist
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-[#F2B35B] transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#F2B35B] transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#F2B35B] transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#F2B35B]/20 bg-[#431F0F] px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-4 text-base font-medium text-[#F2B35B]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded bg-[#F2B35B] px-6 py-3 text-center text-sm font-semibold text-[#431F0F]"
          >
            Join the waitlist
          </Link>
        </div>
      )}
    </header>
  );
}
