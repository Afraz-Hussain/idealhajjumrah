"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Plane,
  MapPin,
  Clock,
  BadgeCheck,
  Star,
  ArrowRight,
  Quote,
} from "lucide-react";

/* ─── Reasons ─────────────────────────────────────────── */
const reasons = [
  {
    icon: ShieldCheck,
    title: "ATOL & IATA Certified",
    desc: "Fully licensed and regulated — your money and journey are protected.",
  },
  {
    icon: Clock,
    title: "Nearly a Decade of Experience",
    desc: "Since 2015 we have guided thousands of pilgrims with care and trust.",
  },
  {
    icon: MapPin,
    title: "Strong On-Ground Network",
    desc: "Trusted partners in Saudi Arabia and Israel for seamless Zyaraat.",
  },
  {
    icon: Plane,
    title: "Best Airline Deals",
    desc: "Exclusive fares — affordable, comfortable, no compromise.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Packages",
    desc: "Tailored to your dates, budget and spiritual needs.",
  },
  {
    icon: BadgeCheck,
    title: "5,000+ Happy Pilgrims",
    desc: "Our glowing reviews speak for themselves — your satisfaction is our priority.",
  },
];

/* ─── Stats ───────────────────────────────────────────── */
const stats = [
  { value: "10+", label: "Years Serving" },
  { value: "5K+", label: "Pilgrims Guided" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

/* ─── Testimonials ────────────────────────────────────── */
const testimonials = [
  {
    name: "Sister Fatima R.",
    location: "London",
    stars: 5,
    text: "Alhamdulillah, the entire Umrah experience was flawless. The hotel in Makkah was steps from the Haram and the team supported us every step of the way.",
  },
  {
    name: "Brother Tariq M.",
    location: "Birmingham",
    stars: 5,
    text: "I have travelled with three different agencies and Ideal Hajj & Umrah is by far the best. Transparent pricing, beautiful hotels and genuinely caring staff.",
  },
  {
    name: "Sister Ayesha K.",
    location: "Manchester",
    stars: 5,
    text: "From the booking form to landing back home, everything was seamless. The Madinah hotel was stunning and so close to Masjid-e-Nabawi.",
  },
  {
    name: "Brother Imran H.",
    location: "Leeds",
    stars: 5,
    text: "Our family of six had a perfect journey. The personalised package suited our budget perfectly. Highly recommended to every family.",
  },
  {
    name: "Sister Zainab A.",
    location: "Glasgow",
    stars: 5,
    text: "The Al-Aqsa Zyaraat was a dream come true. Ideal Hajj & Umrah arranged everything — visa, flights, hotels. Truly a blessed experience.",
  },
];

/* ─── Star row ────────────────────────────────────────── */
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#EEC74C] text-[#EEC74C]" />
      ))}
    </div>
  );
}

/* ═══ MAIN EXPORT ════════════════════════════════════════ */
export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setActive(i);
    startTimer();
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════
          PART 1 — WHY CHOOSE US
      ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-28">

        {/* fixed background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pics/hajj4.jpg"
          alt=""
          aria-hidden
          style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover", zIndex: -2 }}
        />
        {/* dark green overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg,rgba(0,41,25,0.93) 0%,rgba(0,60,36,0.88) 50%,rgba(0,41,25,0.93) 100%)",
            zIndex: -1,
          }}
        />

        {/* gold top line */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#EEC74C] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          {/* Header */}
          <div className="mb-14 text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#EEC74C]/40 bg-[#EEC74C]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#EEC74C]">
              <Star className="h-3.5 w-3.5 fill-[#EEC74C] text-[#EEC74C]" />
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Your Journey Deserves{" "}
              <span className="bg-gradient-to-r from-[#EEC74C] to-[#f5d070] bg-clip-text italic font-serif text-transparent">
                the Best Care
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              We are not just a travel agency — we are your dedicated partner in
              one of life's most sacred experiences.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#EEC74C] to-transparent" />
          </div>

          {/* Stats row */}
          <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-sm"
              >
                <span className="bg-gradient-to-r from-[#EEC74C] to-[#f5d070] bg-clip-text text-3xl font-extrabold text-transparent">
                  {value}
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/50">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Reason cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#EEC74C]/40 hover:bg-white/10"
              >
                <span aria-hidden className="absolute right-4 top-2 select-none text-6xl font-black leading-none text-white/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#006B43] to-[#EEC74C] transition-all duration-500 group-hover:w-full" />
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEC74C]/15 ring-1 ring-[#EEC74C]/30">
                  <Icon className="h-6 w-6 text-[#EEC74C]" />
                </span>
                <h3 className="mb-2 text-sm font-bold text-white sm:text-base">{title}</h3>
                <p className="text-xs leading-relaxed text-white/60 sm:text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-xl bg-[#EEC74C] px-7 py-3.5 text-sm font-bold text-gray-900 shadow-lg shadow-[#EEC74C]/20 transition-all hover:bg-[#f5d070] hover:shadow-xl"
            >
              Explore Our Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* gold bottom line */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#EEC74C] to-transparent" />
      </section>

      {/* ══════════════════════════════════════════════════
          PART 2 — TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#FDFBF5] py-20 lg:py-24">

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L33 27 L60 30 L33 33 L30 60 L27 33 L0 30 L27 27 Z' fill='%23006B43'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none text-[180px] font-serif font-black leading-none text-[#006B43]/5"
        >
          "
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          {/* Header */}
          <div className="mb-12 text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#EEC74C]/40 bg-[#EEC74C]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#006B43]">
              <Star className="h-3.5 w-3.5 fill-[#EEC74C] text-[#EEC74C]" />
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our{" "}
              <span className="bg-gradient-to-r from-[#006B43] to-[#00a86b] bg-clip-text italic font-serif text-transparent">
                Pilgrims Say
              </span>
            </h2>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#EEC74C] to-transparent" />
          </div>

          {/* Testimonial card */}
          <div className="relative mx-auto max-w-3xl">
            <div
              key={active}
              className="rounded-3xl border border-[#E9E4D6] bg-white p-8 shadow-xl sm:p-10"
              style={{ animation: "fadeSlideUp 0.5s ease both" }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006B43]">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                <Stars count={testimonials[active].stars} />
              </div>
              <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
                "{testimonials[active].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#006B43] to-[#00a86b] text-lg font-bold text-white shadow-md">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonials[active].name}</p>
                  <p className="text-sm text-gray-400">{testimonials[active].location}, UK</p>
                </div>
                <div className="ml-auto rounded-xl bg-[#006B43]/8 px-3 py-1">
                  <p className="text-xs font-semibold text-[#006B43]">Verified Pilgrim ✓</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-3 top-8 h-16 w-1 rounded-full bg-gradient-to-b from-[#EEC74C] to-transparent" />
            <div className="absolute -right-3 bottom-8 h-16 w-1 rounded-full bg-gradient-to-t from-[#EEC74C] to-transparent" />
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "h-2.5 w-8 bg-[#006B43]"
                    : "h-2.5 w-2.5 bg-[#006B43]/25 hover:bg-[#006B43]/50"
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mx-auto mt-5 h-0.5 max-w-xs overflow-hidden rounded-full bg-[#006B43]/10">
            <div
              key={active}
              className="h-full rounded-full bg-[#006B43]"
              style={{ animation: "progressBar 4s linear forwards" }}
            />
          </div>

        </div>

        <style>{`
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes progressBar {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
      </section>
    </>
  );
}