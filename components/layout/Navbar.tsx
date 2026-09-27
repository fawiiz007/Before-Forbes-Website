"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const WAITLIST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0AgU2jZW-5ZSKVYgOnUcU5QmNsVlcVUmscB53o0g0zIGeBg/viewform";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavPage = (typeof NAV_LINKS)[number]["label"];

export default function Navbar({ currentPage = "Home" }: { currentPage?: NavPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#431F0F] backdrop-blur-sm">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
        >
          <Link href="/" className="flex shrink-0 items-center gap-3" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Before Forbes logo"
              width={120}
              height={40}
              className="h-10 w-auto md:h-11"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = link.label === currentPage;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative pb-1 text-[15px] font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-[#F2B35B] after:transition-transform after:duration-300 ${
                      isActive
                        ? "text-[#F2B35B] after:scale-x-100"
                        : "text-[#F2B35B]/85 after:scale-x-0 hover:text-[#F2B35B] hover:after:scale-x-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="hidden rounded bg-[#F2B35B] px-5 py-2.5 text-sm font-semibold text-[#431F0F] transition-colors hover:bg-[#F2C372] lg:inline-flex"
            >
              Join the waitlist
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#F2B35B] transition-colors hover:bg-[#F2B35B]/10 lg:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#431F0F]/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-x-0 bottom-0 top-[70px] z-50 flex flex-col bg-[#431F0F] transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-1 flex-col px-5 pt-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = link.label === currentPage;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-lg px-4 py-4 text-lg font-semibold transition-colors ${
                      isActive
                        ? "bg-[#F2B35B]/10 text-[#F2B35B]"
                        : "text-[#F2B35B]/90 hover:bg-[#F2B35B]/8 hover:text-[#F2B35B]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="h-2.5 w-2.5 rounded-full bg-[#F2B35B]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-8 inline-flex items-center justify-center rounded bg-[#F2B35B] px-5 py-4 text-sm font-semibold text-[#431F0F] transition-colors hover:bg-[#F2C372]"
          >
            Join the waitlist
          </Link>
        </nav>
      </div>
    </>
  );
}
