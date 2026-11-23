"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/* ─── Stats ─────────────────────────────────────────── */
const stats = [
  { value: "10+", label: "Years of Service" },
  { value: "5000+", label: "Happy Pilgrims" },
  { value: "50+", label: "Packages Available" },
  { value: "98%", label: "Satisfaction Rate" },
];

/* ─── Bullet points ──────────────────────────────────── */
const highlights = [
  "Hajj & Umrah packages for all budgets",
  "Masjid Al-Aqsa tours with expert guides",
  "Hand-picked hotels near the Haram",
  "Dedicated 24 / 7 support throughout your journey",
  "Transparent pricing — no hidden fees",
];

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF5] py-20 lg:py-28">
      {/* ── subtle background pattern ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L33 27 L60 30 L33 33 L30 60 L27 33 L0 30 L27 27 Z' fill='%23006B43'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── gold top accent line ── */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#EEC74C] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ═══ SECTION HEADER ════════════════════════════════ */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#EEC74C]/40 bg-[#EEC74C]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#006B43]">
            <Star className="h-3.5 w-3.5 fill-[#EEC74C] text-[#EEC74C]" />
            About Ideal Hajj &amp; Umrah
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Your Trusted Partner for{" "}
            <span
              className="bg-gradient-to-r from-[#006B43] to-[#00a86b] bg-clip-text italic font-serif text-transparent"
            >
              Sacred Journeys
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            For nearly a decade, we have been guiding pilgrims with care,
            integrity and deep expertise — making every journey to the Holy
            Lands truly unforgettable.
          </p>
        </div>

        {/* ═══ MAIN CONTENT GRID ═════════════════════════════ */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT: Image collage ── */}
          <div className="relative">
            {/* Large image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="aspect-[4/3] w-full">
                <Image
                  src="/pics/hajj4.jpg"
                  alt="Pilgrims at the Kaaba, Makkah"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                {/* green tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#006B43]/60 via-transparent to-transparent" />
              </div>

              {/* floating badge bottom-left */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006B43]">
                  <Users className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Happy Pilgrims</p>
                  <p className="text-xl font-bold text-gray-900">5,000+</p>
                </div>
              </div>
            </div>

            {/* small floating image */}
            <div className="absolute -bottom-6 -right-4 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-right-8">
              <div className="relative h-36 w-48 lg:h-44 lg:w-60">
                <Image
                  src="/pics/hajj6.jpg"
                  alt="Madinah Al-Munawwarah"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
            </div>

            {/* gold accent circle */}
            <div
              aria-hidden
              className="absolute -left-6 -top-6 h-28 w-28 rounded-full border-[6px] border-[#EEC74C]/30"
            />
          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="pb-6 lg:pb-0">
            {/* intro paragraph */}
            <p className="mb-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              <span className="font-semibold text-[#006B43]">Alhamdulillah</span> as a reliable Hajj &amp;
              Umrah travel agency, we have been serving pilgrims for nearly a
              decade. We offer Hajj &amp; Umrah packages along with{" "}
              <span className="font-medium text-gray-800">Masjid Al-Aqsa tours</span>. Our clients
              consistently praise our services, and thanks to our strong
              connections in Israel and Saudi Arabia we provide reliable
              accommodations, transportation, and Zyaraat.
            </p>

            {/* highlight bullets */}
            <ul className="mb-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#006B43]" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-[#006B43] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#005535] hover:shadow-lg"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[#006B43] px-6 py-3 text-sm font-semibold text-[#006B43] transition-all hover:bg-[#006B43]/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ═══ STATS ROW ════════════════════════════════════ */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[#E9E4D6] bg-[#E9E4D6] shadow-lg sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center bg-white px-6 py-8 text-center transition-colors hover:bg-[#006B43]/5"
            >
              <span
                className="bg-gradient-to-r from-[#006B43] to-[#EEC74C] bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl"
              >
                {value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-500">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* ── gold bottom accent line ── */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#EEC74C] to-transparent" />
    </section>
  );
}