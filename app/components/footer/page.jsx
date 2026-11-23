"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronUp,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

// ⚠️ Apni real details yahan update kar lein
const CONTACT = {
  phone: "+92 300 0000000",
  phoneHref: "tel:+923000000000",
  whatsappHref: "https://wa.me/923000000000",
  email: "info@idealhajjumrah.com",
  address: "Office address, City, Pakistan",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
};

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.2 22 12 22 12s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z",
  },
  {
    label: "TikTok",
    href: "#",
    path: "M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2h-3.3v13.2a2.8 2.8 0 1 1-2-2.7V9.6a6.1 6.1 0 1 0 5.3 6.1V9.1a8 8 0 0 0 3.8 1.2V7a4.8 4.8 0 0 1 0-.3z",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Hajj 2027", href: "#" },
  { label: "Contact", href: "/contact" },
];

const umrahLinks = [
  { label: "Umrah Packages", href: "#" },
  { label: "Ramadan Umrah", href: "#" },
  { label: "Family Umrah", href: "#" },
  { label: "Group Umrah", href: "#" },
];

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors duration-200 hover:text-[#EEC84E]"
  >
    <span className="h-px w-0 bg-[#EEC84E] transition-all duration-200 group-hover:w-3" />
    {children}
  </Link>
);

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#012918] text-white ">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#EEC84E]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#012F1C] blur-3xl" />

      {/* CTA Banner */}
      

      {/* Main Footer */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 xl:px-10 ">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Ideal Hajj and Umrah homepage"
              className="inline-block"
            >
              <Image
                src="/pics/logo.png"
                alt="Ideal Hajj & Umrah logo"
                width={180}
                height={64}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Ideal Hajj & Umrah is your trusted partner for a spiritual,
              comfortable and well-organized pilgrimage — guiding you at every
              step of the journey.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EEC84E] hover:bg-[#EEC84E] hover:text-[#012918]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[18px] w-[18px]"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#EEC84E]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Umrah */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#EEC84E]">
              Umrah
            </h3>
            <ul className="space-y-3">
              {umrahLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#EEC84E]">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="group flex items-start gap-3 text-white/60 transition-colors hover:text-[#EEC84E]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEC84E]/10 text-[#EEC84E]">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-start gap-3 text-white/60 transition-colors hover:text-[#EEC84E]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEC84E]/10 text-[#EEC84E]">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="break-all pt-1.5">{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEC84E]/10 text-[#EEC84E]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-1.5">{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEC84E]/10 text-[#EEC84E]">
                  <Clock className="h-4 w-4" />
                </span>
                <span className="pt-1.5">{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-[#012F1C]/60">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8 xl:px-10">
          <p className="text-xs text-white/45">
            © {year} Ideal Hajj & Umrah. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-white/45">
            <Link href="#" className="transition-colors hover:text-[#EEC84E]">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-[#EEC84E]">
              Terms & Conditions
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-xl border border-[#EEC84E]/30 px-3.5 py-2 text-xs font-bold text-[#EEC84E] transition-all duration-300 hover:bg-[#EEC84E] hover:text-[#012918]"
          >
            Back to top
            <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}