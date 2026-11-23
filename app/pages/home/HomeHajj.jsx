"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Star, Shield, ChevronDown } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */
const packages = [
  {
    id: 1,
    tierLabel: "ECONOMY TIER",
    title: "Budget Hajj Package",
    subtitle: "with Quality Services",
    highlight: false,
    image: "/pics/hajj4.jpg",
    makkahHotel: "Anjum Hotel",
    makkahNights: "08 Nights Stay",
    azizia: "Manarat al Mashaer",
    aziziaInfo: "5/6 Days",
    aziziaStay: "03 Nights & 02 Nights Stay",
    hajjInfo: "Mina · Arafat · Muzdalifah",
    madinahHotel: "Emaar Royal Hotel",
    madinahNights: "03 Nights Stay",
    transport: "Private Buses",
    includes: ["Return Flights", "Visa Included", "Group Leader", "Meals Included"],
  },
  {
    id: 2,
    tierLabel: "PREMIUM TIER",
    title: "Elite Hajj Package",
    subtitle: "with Private Transport",
    highlight: true,
    image: "/pics/hajj6.jpg",
    makkahHotel: "Fairmont Clock Tower",
    makkahNights: "03 Nights Stay",
    azizia: "Manarat al Mashaer",
    aziziaInfo: "5/6 Days",
    aziziaStay: "03 Nights & 02 Nights Stay",
    hajjInfo: "Mina · Arafat · Muzdalifah",
    madinahHotel: "Emaar Royal Hotel",
    madinahNights: "03 Nights Stay",
    transport: "Private Buses",
    includes: ["Return Flights", "Visa Included", "Group Leader", "24/7 Concierge"],
  },
];

/* ─── Card Content ─────────────────────────────────────── */
function CardContent({ pkg, visible }) {
  return (
    <div
      className="relative h-screen w-full overflow-hidden"
    >
      {/* BG image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={pkg.image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: visible ? "scale(1)" : "scale(1.05)",
          transition: "transform 1.2s cubic-bezier(.22,1,.36,1)",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: pkg.highlight
            ? "linear-gradient(135deg,rgba(10,6,0,0.80) 0%,rgba(30,18,0,0.72) 50%,rgba(10,6,0,0.86) 100%)"
            : "linear-gradient(135deg,rgba(0,18,10,0.82) 0%,rgba(0,38,22,0.72) 50%,rgba(0,18,10,0.88) 100%)",
        }}
      />

      {/* Grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(238,199,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(238,199,76,1) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Big watermark number */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-black"
        style={{ fontSize: "clamp(140px,20vw,260px)", lineHeight: 1, color: "rgba(255,255,255,0.04)" }}
      >
        {String(pkg.id).padStart(2, "0")}
      </span>

      {/* Content */}
      <div
        className="relative mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-16"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left */}
          <div>
            {/* Tier badges */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em]"
                style={{
                  background: pkg.highlight ? "#EEC74C" : "rgba(0,107,67,0.9)",
                  color: pkg.highlight ? "#1a0a00" : "white",
                }}
              >
                {pkg.tierLabel}
              </span>
              {pkg.highlight && (
                <span className="flex items-center gap-1.5 rounded-full border border-[#EEC74C]/40 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-[#EEC74C] text-[#EEC74C]" />
                  <span className="text-[10px] font-bold text-[#EEC74C]">MOST POPULAR</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {pkg.title.split(" ")[0]}{" "}
              <span
                className="font-serif italic"
                style={{
                  background: `linear-gradient(135deg,${pkg.highlight ? "#EEC74C,#f5d070" : "#4ade80,#22c55e"})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {pkg.title.split(" ").slice(1, 3).join(" ")}
              </span>
              {pkg.title.split(" ").length > 3 && (
                <><br /><span className="text-white/80">{pkg.title.split(" ").slice(3).join(" ")}</span></>
              )}
            </h3>
            <p className="mt-2 text-base text-white/40">{pkg.subtitle}</p>

            <div
              className="mt-5 h-0.5 w-20"
              style={{ background: `linear-gradient(to right,${pkg.highlight ? "#EEC74C" : "#006B43"},transparent)` }}
            />

            {/* Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {pkg.includes.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"
                  style={{
                    borderColor: pkg.highlight ? "rgba(238,199,76,0.25)" : "rgba(0,107,67,0.4)",
                    color: pkg.highlight ? "#EEC74C" : "#4ade80",
                    background: pkg.highlight ? "rgba(238,199,76,0.08)" : "rgba(0,107,67,0.12)",
                  }}
                >
                  <CheckCircle2 className="h-3 w-3" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-2xl px-7 py-4 text-sm font-black transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: pkg.highlight ? "linear-gradient(135deg,#EEC74C,#f5d070)" : "linear-gradient(135deg,#006B43,#009960)",
                  color: pkg.highlight ? "#1a0a00" : "white",
                  boxShadow: pkg.highlight ? "0 10px 30px rgba(238,199,76,0.25)" : "0 10px 30px rgba(0,107,67,0.3)",
                }}
              >
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="border-l border-white/10 pl-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/25">Price</p>
                <p className="text-xl font-black text-white">POA</p>
              </div>
            </div>
          </div>

          {/* Right: Itinerary */}
          <div
            className="rounded-3xl border p-6 backdrop-blur-xl sm:p-7"
            style={{
              borderColor: pkg.highlight ? "rgba(238,199,76,0.2)" : "rgba(255,255,255,0.08)",
              background: "rgba(0,0,0,0.5)",
            }}
          >
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">Your Itinerary</p>
            {[
              { step: "Makkah Al Mukarramah", detail: pkg.makkahHotel, sub: pkg.makkahNights },
              { step: "Azizia", detail: pkg.azizia, sub: `${pkg.aziziaInfo} · ${pkg.aziziaStay}` },
              { step: "Hajj 5 Days", detail: pkg.hajjInfo, sub: "Mina · Arafat · Muzdalifah" },
              { step: "Madinah Al Munawwarah", detail: pkg.madinahHotel, sub: `${pkg.madinahNights} · ${pkg.transport}` },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-black"
                    style={{ background: pkg.highlight ? "#EEC74C" : "#006B43", color: pkg.highlight ? "#1a0a00" : "white" }}
                  >
                    {i + 1}
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      className="my-1 w-px"
                      style={{
                        minHeight: "24px",
                        background: `linear-gradient(to bottom,${pkg.highlight ? "rgba(238,199,76,0.4)" : "rgba(0,107,67,0.5)"},transparent)`,
                      }}
                    />
                  )}
                </div>
                <div className="pb-4 pt-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: pkg.highlight ? "rgba(238,199,76,0.5)" : "rgba(74,222,128,0.5)" }}>
                    {item.step}
                  </p>
                  <p className="mt-0.5 font-bold text-white">{item.detail}</p>
                  <p className="text-xs text-white/35">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══ MAIN EXPORT ════════════════════════════════════════ */
export default function HajjPackages() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // 0 = pkg1, 1 = pkg2

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top; // how far we've scrolled into the section
      const vh = window.innerHeight;

      // Each "slide" is one viewport height
      // slide 0 = pkg1  (scrolled < vh)
      // slide 1 = pkg2  (vh <= scrolled)
      if (scrolled < vh * 0.5) {
        setActiveIndex(0);
      } else {
        setActiveIndex(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Scroll container: 2 screens tall (pkg1 + pkg2) ── */}
      <div ref={sectionRef} style={{ height: "250vh" }} className="relative">

        {/* Fixed viewport — stays in place while user scrolls */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#080f0a]">

          {/* Grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03] z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(238,199,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(238,199,76,1) 1px,transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%,rgba(0,107,67,0.12),transparent)" }} />

          {/* ── Sticky top bar ── */}
          <div className="absolute top-0 left-0 right-0 z-20 border-b border-white/5 bg-[#080f0a]/80 backdrop-blur-xl px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#EEC74C]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EEC74C]">Hajj Packages 2025</span>
            </div>
            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {["Intro", "Budget", "Elite"].map((label, i) => (
                <div
                  key={label}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: (activeIndex === i - 1) ? "24px" : "6px",
                    height: "6px",
                    background: (activeIndex === i - 1) ? "#EEC74C" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── INTRO SLIDE ── */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              perspective: "1200px",
              pointerEvents: activeIndex === -1 ? "auto" : "none",
              opacity: activeIndex === -1 ? 1 : 0,
              transform: activeIndex === -1
                ? "rotateX(0deg) translateY(0px)"
                : "rotateX(25deg) translateY(-80px)",
              transition: "transform 0.8s cubic-bezier(.22,1,.36,1), opacity 0.5s ease",
            }}
          >
            <div className="text-center px-5">
              <div className="mb-3 flex items-center justify-center gap-2">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#EEC74C]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EEC74C]">Sacred Journey</span>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#EEC74C]" />
              </div>
              <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                Your{" "}
                <span className="bg-gradient-to-r from-[#EEC74C] via-[#f5d070] to-[#EEC74C] bg-clip-text font-serif italic text-transparent">
                  Pilgrimage
                </span>{" "}
                Awaits
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-sm text-white/35">
                Scroll to explore our Hajj packages
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex flex-col items-center gap-1 text-white/20">
                  <ChevronDown className="h-5 w-5 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* ── PACKAGE 1 ── */}
          <div
            className="absolute inset-0"
            style={{
              perspective: "1200px",
              pointerEvents: activeIndex === 0 ? "auto" : "none",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transition: "transform 0.8s cubic-bezier(.22,1,.36,1), opacity 0.5s ease",
                transformStyle: "preserve-3d",
                opacity: activeIndex === 0 ? 1 : 0,
                transform: activeIndex === 0
                  ? "rotateX(0deg) translateY(0px)"
                  : activeIndex < 0
                  ? "rotateX(-25deg) translateY(80px)"
                  : "rotateX(25deg) translateY(-80px)",
              }}
            >
              <CardContent pkg={packages[0]} visible={activeIndex === 0} />
            </div>
          </div>

          {/* ── PACKAGE 2 ── */}
          <div
            className="absolute inset-0"
            style={{
              perspective: "1200px",
              pointerEvents: activeIndex === 1 ? "auto" : "none",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transition: "transform 0.8s cubic-bezier(.22,1,.36,1), opacity 0.5s ease",
                transformStyle: "preserve-3d",
                opacity: activeIndex === 1 ? 1 : 0,
                transform: activeIndex === 1
                  ? "rotateX(0deg) translateY(0px)"
                  : activeIndex < 1
                  ? "rotateX(-25deg) translateY(80px)"
                  : "rotateX(25deg) translateY(-80px)",
              }}
            >
              <CardContent pkg={packages[1]} visible={activeIndex === 1} />
            </div>
          </div>

        </div>
      </div>

      {/* ── Trust strip (after scroll section) ── */}
      <div className="bg-[#080f0a] border-t border-white/5 py-10">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-8 px-5 sm:gap-14">
          {[
            { icon: Shield, text: "ATOL Protected" },
            { icon: CheckCircle2, text: "IATA Accredited" },
            { icon: Star, text: "5,000+ Pilgrims" },
            { icon: Sparkles, text: "Est. 2015" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/25">
              <Icon className="h-4 w-4 text-[#EEC74C]/40" />
              <span className="text-xs font-bold uppercase tracking-widest">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}