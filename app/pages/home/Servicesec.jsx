"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Moon, BedDouble, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

/* ─── Package Data ───────────────────────────────────── */
const packages = [
  {
    id: 1,
    title: "7 Nights 3-Star Umrah Package",
    image: "/pics/hajj4.jpg",
    stars: 3,
    price: 599,
    badge: "Economy",
    badgeColor: "bg-[#006B43]",
    makkah: { nights: 4, hotel: "Al Kiswa Towers Hotel" },
    madinah: { nights: 3, hotel: "Grand Zowar Hotel" },
    href: "/packages/7-nights-3-star",
  },
  {
    id: 2,
    title: "10 Nights 3-Star Umrah Package",
    image: "/pics/hajj6.jpg",
    stars: 3,
    price: 665,
    badge: "Popular",
    badgeColor: "bg-[#EEC74C]",
    badgeTextColor: "text-gray-900",
    makkah: { nights: 6, hotel: "Al Kiswa Towers Hotel" },
    madinah: { nights: 4, hotel: "Grand Zowar Hotel" },
    href: "/packages/10-nights-3-star",
  },
  {
    id: 3,
    title: "7 Nights 4-Star Umrah Package",
    image: "/pics/slider1.jpg",
    stars: 4,
    price: 640,
    badge: "Best Value",
    badgeColor: "bg-[#006B43]",
    makkah: { nights: 4, hotel: "Emaar Andalusia Hotel" },
    madinah: { nights: 3, hotel: "ODST Madinah Hotel" },
    href: "/packages/7-nights-4-star",
  },
  {
    id: 4,
    title: "10 Nights 4-Star Umrah Package",
    image: "/pics/hajj4.jpg",
    stars: 4,
    price: 749,
    badge: "Comfort",
    badgeColor: "bg-[#006B43]",
    makkah: { nights: 6, hotel: "Emaar Andalusia Hotel" },
    madinah: { nights: 4, hotel: "ODST Madinah Hotel" },
    href: "/packages/10-nights-4-star",
  },
  {
    id: 5,
    title: "7 Nights 5-Star Umrah Package",
    image: "/pics/hajj6.jpg",
    stars: 5,
    price: 899,
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-[#EEC74C] to-[#f5a623]",
    badgeTextColor: "text-gray-900",
    makkah: { nights: 4, hotel: "Swissôtel Makkah" },
    madinah: { nights: 3, hotel: "Anwar Al Madinah Mövenpick" },
    href: "/packages/7-nights-5-star",
  },
  {
    id: 6,
    title: "14 Nights 5-Star Umrah Package",
    image: "/pics/slider1.jpg",
    stars: 5,
    price: 1199,
    badge: "Luxury",
    badgeColor: "bg-gradient-to-r from-[#EEC74C] to-[#f5a623]",
    badgeTextColor: "text-gray-900",
    makkah: { nights: 8, hotel: "Swissôtel Makkah" },
    madinah: { nights: 6, hotel: "Anwar Al Madinah Mövenpick" },
    href: "/packages/14-nights-5-star",
  },
];

/* ─── Star renderer ───────────────────────────────────── */
function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < count ? "fill-[#EEC74C] text-[#EEC74C]" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

/* ─── Single Package Card ────────────────────────────── */
function PackageCard({ pkg }) {
  const totalNights = pkg.makkah.nights + pkg.madinah.nights;
  const badgeText = pkg.badgeTextColor ?? "text-white";

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E9E4D6] bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* badge */}
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold tracking-wide shadow ${pkg.badgeColor} ${badgeText}`}>
          {pkg.badge}
        </span>

        {/* price */}
        <div className="absolute bottom-4 right-4 rounded-2xl bg-[#006B43] px-3 py-1.5 shadow-lg">
          <span className="text-lg font-extrabold text-white">£{pkg.price}</span>
          <span className="ml-0.5 text-[10px] font-medium text-green-200">/pp</span>
        </div>

        {/* stars */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-xl bg-black/40 px-2.5 py-1.5 backdrop-blur-sm">
          <StarRating count={pkg.stars} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-4 text-base font-bold leading-snug text-gray-900 sm:text-lg">
          {pkg.title}
        </h3>

        {/* nights pill */}
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-[#006B43]/6 px-3 py-2">
          <Moon className="h-4 w-4 shrink-0 text-[#006B43]" />
          <span className="text-xs font-semibold text-[#006B43]">{totalNights} Nights Total</span>
          <span className="ml-auto text-xs text-gray-400">
            {pkg.makkah.nights}N Makkah + {pkg.madinah.nights}N Madinah
          </span>
        </div>

        {/* hotels */}
        <div className="mb-5 space-y-2.5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#006B43]/10">
              <svg viewBox="0 0 20 20" className="h-4 w-4 fill-[#006B43]">
                <rect x="4" y="6" width="12" height="10" rx="1" />
                <rect x="8" y="12" width="4" height="4" rx="0.5" fill="white" />
                <rect x="7" y="4" width="6" height="3" rx="1" />
              </svg>
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#006B43]">
                Makkah — {pkg.makkah.nights} Nights
              </p>
              <p className="text-xs text-gray-500">{pkg.makkah.hotel}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEC74C]/15">
              <BedDouble className="h-4 w-4 text-[#b8902a]" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#b8902a]">
                Madinah — {pkg.madinah.nights} Nights
              </p>
              <p className="text-xs text-gray-500">{pkg.madinah.hotel}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={pkg.href}
          className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-[#006B43] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#005535] hover:shadow-md group/btn"
        >
          Book Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

/* ═══ MAIN SECTION ════════════════════════════════════ */
export default function PackagesSection() {
  // On desktop show 3 at a time, on mobile 1 at a time
  // We track by "page" index (0-based)
  const DESKTOP_VISIBLE = 3;
  const MOBILE_VISIBLE = 1;

  const [current, setCurrent] = useState(0);
  const totalPages = {
    desktop: packages.length - DESKTOP_VISIBLE + 1, // 0..3
    mobile: packages.length,                         // 0..5
  };

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(packages.length - 1, c + 1));

  // Desktop: show packages[current], [current+1], [current+2]
  const desktopPackages = packages.slice(current, current + DESKTOP_VISIBLE);
  // Mobile: show packages[current] only
  const mobilePackage = packages[current];

  const canPrev = current > 0;
  const canNextDesktop = current < packages.length - DESKTOP_VISIBLE;
  const canNextMobile = current < packages.length - 1;

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">

      {/* subtle bg pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L33 27 L60 30 L33 33 L30 60 L27 33 L0 30 L27 27 Z' fill='%23006B43'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ── Header row: title left, arrows right ── */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#EEC74C]/40 bg-[#EEC74C]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#006B43]">
              <Sparkles className="h-3.5 w-3.5 text-[#EEC74C]" />
              Ideal Hajj &amp; Umrah Services
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-r from-[#006B43] to-[#00a86b] bg-clip-text italic font-serif text-transparent">
                Umrah Packages
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-500">
              Economy to luxury — every package designed around your comfort and devotion.
            </p>
          </div>

          {/* Arrow controls — top right */}
          <div className="flex items-center gap-3">
            {/* counter */}
            <span className="text-sm font-medium text-gray-400">
              <span className="font-bold text-[#006B43]">{String(current + 1).padStart(2, "0")}</span>
              {" / "}
              {String(packages.length).padStart(2, "0")}
            </span>
            <button
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous packages"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E9E4D6] bg-white shadow-sm transition-all hover:border-[#006B43] hover:bg-[#006B43] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 [&:not(:disabled)]:text-[#006B43]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={typeof window !== "undefined" && window.innerWidth < 768 ? !canNextMobile : !canNextDesktop}
              aria-label="Next packages"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#006B43] bg-[#006B43] text-white shadow-sm transition-all hover:bg-[#005535] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── Desktop: 3 cards ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.slice(current, current + DESKTOP_VISIBLE).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* ── Mobile: 1 card ── */}
        <div className="sm:hidden">
          <PackageCard pkg={packages[current]} />
          {/* dot indicators */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to package ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "w-6 bg-[#006B43]"
                    : "w-2 bg-[#006B43]/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center">
          <p className="mb-4 text-sm text-gray-500">
            Looking for a custom package? We tailor every journey to your needs.
          </p>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#006B43] px-7 py-3 text-sm font-bold text-[#006B43] transition-all hover:bg-[#006B43] hover:text-white"
          >
            View All Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}