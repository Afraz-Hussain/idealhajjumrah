"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from "lucide-react";

// ⚠️ Apna real WhatsApp number yahan likhein (country code ke saath, + ya spaces ke baghair)
const WHATSAPP_NUMBER = "441234567890";
const WHATSAPP_MESSAGE = "Assalamu Alaikum, I would like to know more about Hajj & Umrah packages.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const umrahLinks = [
  { label: "Umrah Packages", href: "#" },
  { label: "Ramadan Umrah", href: "#" },
  { label: "Family Umrah", href: "#" },
  { label: "Group Umrah", href: "#" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Hajj 2027", href: "#" },
  { label: "Umrah", href: "#", dropdown: umrahLinks },
  { label: "Contact", href: "#" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [umrahOpen, setUmrahOpen] = useState(false);
  const [mobileUmrah, setMobileUmrah] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  // Escape key + close on desktop resize
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
        setUmrahOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeAll = () => {
    setSidebarOpen(false);
    setMobileUmrah(false);
  };

  const isActive = (href) => href !== "#" && pathname === href;

  const handleHash = (e, href) => {
    if (href === "#") e.preventDefault();
  };

  return (
    <>
      {/* ══════════════════ HEADER BAR ══════════════════ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#012918]/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-gradient-to-b from-[#012F1C]/95 via-[#012F1C]/60 to-transparent backdrop-blur-[2px]"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-10 xl:px-14 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center"
            aria-label="Ideal Hajj and Umrah homepage"
          >
            <Image
              src="/pics/logo.png"
              alt="Ideal Hajj & Umrah"
              width={260}
              height={90}
              priority
              className={`w-auto object-contain transition-all duration-300 group-hover:opacity-85 ${
                scrolled ? "h-12 sm:h-14 lg:h-14" : "h-14 sm:h-16 lg:h-[72px]"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-2 xl:gap-4 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setUmrahOpen(true)}
                  onMouseLeave={() => setUmrahOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setUmrahOpen((p) => !p)}
                    onFocus={() => setUmrahOpen(true)}
                    aria-expanded={umrahOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold tracking-wide transition-all duration-200 xl:px-6 ${
                      umrahOpen
                        ? "bg-[#EEC84E]/10 text-[#EEC84E]"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        umrahOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      umrahOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl bg-[#012918] p-2 shadow-2xl shadow-black/50">
                      <div className="mb-1 flex items-center gap-2 px-3 py-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#EEC84E]" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EEC84E]">
                          Explore Umrah
                        </p>
                      </div>
                      {umrahLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => {
                            handleHash(e, sub.href);
                            setUmrahOpen(false);
                          }}
                          className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white/65 transition-all hover:bg-[#012F1C] hover:pl-4 hover:text-[#EEC84E]"
                        >
                          {sub.label}
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleHash(e, link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative rounded-xl px-5 py-3 text-[15px] font-semibold tracking-wide transition-all duration-200 xl:px-6 ${
                    isActive(link.href)
                      ? "bg-[#EEC84E]/10 text-[#EEC84E]"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden shrink-0 lg:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/35"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <WhatsAppIcon className="relative h-5 w-5" />
              <span className="relative">WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile: WhatsApp quick icon + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-[#25D366]/25 transition-transform active:scale-95"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              aria-expanded={sidebarOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-200 hover:bg-[#EEC84E]/15 hover:text-[#EEC84E]"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════ MOBILE SIDEBAR ══════════════════ */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeAll}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[320px] max-w-[88vw] flex-col bg-[#012918] shadow-2xl transition-transform duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${
          sidebarOpen ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#EEC84E]/10 blur-3xl" />

        {/* Sidebar header */}
        <div className="relative flex items-center justify-between px-5 py-5">
          <Image
            src="/pics/logo.png"
            alt="Ideal Hajj & Umrah"
            width={200}
            height={72}
            className="h-14 w-auto object-contain"
          />
          <button
            type="button"
            onClick={closeAll}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition hover:bg-[#EEC84E]/15 hover:text-[#EEC84E]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="relative flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={() => setMobileUmrah((p) => !p)}
                  aria-expanded={mobileUmrah}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-4 text-base font-semibold transition-all ${
                    mobileUmrah
                      ? "bg-[#EEC84E]/10 text-[#EEC84E]"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileUmrah ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    mobileUmrah ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-4 mt-1 space-y-1 py-1 pl-3">
                      {umrahLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => {
                            handleHash(e, sub.href);
                            closeAll();
                          }}
                          className="block rounded-lg px-3 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-[#EEC84E]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleHash(e, link.href);
                  closeAll();
                }}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-xl px-4 py-4 text-base font-semibold transition-all ${
                  isActive(link.href)
                    ? "bg-[#EEC84E]/10 text-[#EEC84E]"
                    : "text-white/75 hover:bg-white/5 hover:text-[#EEC84E]"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Bottom CTA */}
        <div className="relative flex flex-col gap-3 px-4 py-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeAll}
            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] py-3.5 text-sm font-black text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>

          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#EEC84E]/10 py-3.5 text-sm font-bold text-[#EEC84E] transition-all hover:bg-[#EEC84E]/20"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>

          <p className="text-center text-[10px] text-white/30">
            Your trusted partner for Hajj &amp; Umrah
          </p>
        </div>
      </aside>
    </>
  );
}