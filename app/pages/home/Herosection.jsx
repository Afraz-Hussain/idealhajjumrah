"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Plane,
  PlaneTakeoff,
  CalendarDays,
  Phone,
  Mail,
  Moon,
  MoonStar,
  BedDouble,
  Hotel,
  Headphones,
  ShieldCheck,
  CheckCircle2,
  Minus,
  Plus,
  Star,
  Sparkles,
} from "lucide-react";

const AUTOPLAY_MS = 5000;

const slides = [
  {
    id: 1,
    image: "/pics/hajj4.jpg",
    subtitle: "Your Spiritual Journey Begins Here",
    title: "Experience the Beauty of",
    highlight: "Umrah",
    description:
      "Embark on a peaceful and memorable Umrah journey with carefully planned packages, comfortable stays and dedicated support.",
  },
  {
    id: 2,
    image: "/pics/hajj6.jpg",
    subtitle: "A Journey of Faith & Peace",
    title: "Find Peace in the",
    highlight: "Holy Cities",
    description:
      "Visit the blessed cities of Makkah and Madinah with thoughtfully arranged travel, accommodation and personal assistance.",
  },
  {
    id: 3,
    image: "/pics/slider1.jpg",
    subtitle: "Make Your Dream Journey a Reality",
    title: "Your Sacred Journey,",
    highlight: "Our Care",
    description:
      "From your departure to your return, let our team help make your pilgrimage comfortable, meaningful and stress-free.",
  },
];

const features = [
  { icon: Plane, label: "Tailored Packages" },
  { icon: Hotel, label: "Comfortable Stays" },
  { icon: Headphones, label: "Dedicated Support" },
];

const airports = [
  "London Heathrow",
  "London Gatwick",
  "Manchester",
  "Birmingham",
  "Leeds Bradford",
  "Newcastle",
  "Glasgow",
  "Edinburgh",
];
const hotelOptions = [3, 4, 5];

const initialForm = {
  airport: "",
  date: "",
  phone: "",
  email: "",
  makkahNights: 7,
  madinahNights: 5,
  hotel: "",
  rooms: 1,
  adults: 1,
  children: 0,
  infants: 0,
};

const patternSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23EEC74C' stroke-width='0.6'%3E%3Crect x='20' y='20' width='40' height='40'/%3E%3Crect x='20' y='20' width='40' height='40' transform='rotate(45 40 40)'/%3E%3Ccircle cx='40' cy='40' r='5'/%3E%3C/g%3E%3C/svg%3E")`;

const pad = (n) => String(n).padStart(2, "0");

/* ── shared field styles ── */
const boxClass =
  "relative rounded-xl border border-[#E8E2D4]/90 bg-white px-3.5 py-2.5 transition-all duration-200 hover:border-[#006B43]/35 hover:shadow-sm focus-within:border-[#006B43] focus-within:ring-[3px] focus-within:ring-[#006B43]/10";

const inputClass =
  "mt-0.5 w-full bg-transparent text-[13.5px] font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-400";

function FieldLabel({ icon: Icon, children }) {
  return (
    <span className="flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#006B43]/75">
      {Icon && <Icon size={11} strokeWidth={2.5} />}
      {children}
    </span>
  );
}

function TextField({ icon, label, value, ...props }) {
  return (
    <label className={`${boxClass} block cursor-text`}>
      <FieldLabel icon={icon}>{label}</FieldLabel>
      <input
        {...props}
        value={value}
        className={`${inputClass} [color-scheme:light] [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-50 ${
          value ? "" : "!text-gray-400"
        }`}
      />
    </label>
  );
}

function SelectBox({ icon, label, placeholder, options, value, ...props }) {
  return (
    <label className={`${boxClass} block cursor-pointer`}>
      <FieldLabel icon={icon}>{label}</FieldLabel>
      <select
        {...props}
        value={value}
        className={`${inputClass} cursor-pointer appearance-none pr-6 ${
          value ? "" : "!text-gray-400 font-normal"
        }`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-gray-900">{o}</option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute bottom-3 right-3.5 text-gray-400"
      />
    </label>
  );
}

function StepButton({ children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#006B43]/20 text-[#006B43]/70 transition-all duration-150 hover:border-[#006B43] hover:bg-[#006B43] hover:text-white active:scale-90 disabled:pointer-events-none disabled:opacity-25"
    >
      {children}
    </button>
  );
}

function Counter({ icon, label, hint, value, min = 0, max = 20, onChange }) {
  return (
    <div className={`${boxClass} flex items-center justify-between gap-2`}>
      <FieldLabel icon={icon}>
        {label}
        {hint && (
          <span className="font-medium normal-case tracking-normal text-gray-400 ml-0.5">
            {hint}
          </span>
        )}
      </FieldLabel>
      <div className="flex items-center gap-2">
        <StepButton
          aria-label={`Decrease ${label}`}
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          <Minus size={11} strokeWidth={2.5} />
        </StepButton>
        <span
          aria-live="polite"
          className="w-5 text-center text-[14px] font-semibold tabular-nums text-gray-900"
        >
          {value}
        </span>
        <StepButton
          aria-label={`Increase ${label}`}
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
        >
          <Plus size={11} strokeWidth={2.5} />
        </StepButton>
      </div>
    </div>
  );
}

/* ────────────────────────────
   Booking Form
──────────────────────────── */
function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const setValue = (name) => (val) => setForm((f) => ({ ...f, [name]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <div className="relative w-full">
      {/* Outer glow border */}
      <div className="pointer-events-none absolute -inset-[1.5px] rounded-[26px] bg-gradient-to-b from-[#EEC74C]/70 via-[#EEC74C]/25 to-[#EEC74C]/10" />

      <div className="relative overflow-hidden rounded-[24px] bg-[#FDFBF7] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.65)]">

        {/* ── Form header ── */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#007A4D] via-[#006642] to-[#004D30] px-5 py-5">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.13]"
            style={{ backgroundImage: patternSvg }}
          />
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#EEC74C]/20 blur-2xl" />

          <div className="relative flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#EEC74C]" />
                <span className="text-[9.5px] font-semibold uppercase tracking-[0.25em] text-[#EEC74C]">
                  Quick Enquiry
                </span>
              </div>
              <h2 className="mt-1 text-[22px] font-bold leading-tight text-white">
                Start Your{" "}
                <span className="font-serif font-medium italic text-[#F6DE8D]">
                  Booking
                </span>
              </h2>
              <p className="mt-0.5 text-[12px] leading-relaxed text-white/65">
                Share your plans — we'll craft the perfect package.
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#EEC74C]/30 bg-white/10 text-[#EEC74C]">
              <Plane size={20} />
            </span>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-[2.5px] bg-gradient-to-r from-[#C8941E] via-[#F6DE8D] to-[#C8941E]" />

        {/* ── Form body ── */}
        <div className="px-4 pb-5 pt-4">
          {status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#006B43]/10 text-[#006B43] ring-1 ring-[#006B43]/20">
                <CheckCircle2 size={28} />
              </span>
              <h3 className="mt-4 text-[18px] font-semibold text-gray-900">
                Request received!
              </h3>
              <p className="mt-1.5 max-w-[240px] text-[13px] leading-relaxed text-gray-500">
                Our team will contact you shortly to confirm your journey details.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-5 rounded-full border border-[#006B43]/30 px-5 py-2 text-[13px] font-semibold text-[#006B43] transition-all hover:bg-[#006B43] hover:text-white"
              >
                Make another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">

              {/* Row 1: Airport + Date */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <SelectBox
                  icon={PlaneTakeoff}
                  label="Flying From"
                  placeholder="Select airport"
                  name="airport"
                  value={form.airport}
                  onChange={update}
                  options={airports}
                  required
                />
                <TextField
                  icon={CalendarDays}
                  label="Departure"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={update}
                  required
                />
              </div>

              {/* Row 2: Phone + Email */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <TextField
                  icon={Phone}
                  label="Phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+44 7700 900000"
                  value={form.phone}
                  onChange={update}
                  required
                />
                <TextField
                  icon={Mail}
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update}
                  required
                />
              </div>

              {/* Row 3: Nights */}
              <div className="grid grid-cols-2 gap-2">
                <Counter
                  icon={Moon}
                  label="Makkah Nights"
                  value={form.makkahNights}
                  min={1}
                  max={30}
                  onChange={setValue("makkahNights")}
                />
                <Counter
                  icon={MoonStar}
                  label="Madinah Nights"
                  value={form.madinahNights}
                  min={0}
                  max={30}
                  onChange={setValue("madinahNights")}
                />
              </div>

              {/* Row 4: Hotel rating + Rooms */}
              <div className="grid grid-cols-2 gap-2">
                <div className={boxClass}>
                  <FieldLabel icon={Hotel}>Hotel Rating</FieldLabel>
                  <div className="mt-1.5 flex gap-1" role="group" aria-label="Hotel rating">
                    {hotelOptions.map((stars) => {
                      const val = `${stars} Star`;
                      const active = form.hotel === val;
                      return (
                        <button
                          key={stars}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setValue("hotel")(active ? "" : val)}
                          className={`flex h-7 flex-1 items-center justify-center gap-0.5 rounded-lg border text-[11px] font-semibold transition-all duration-150 ${
                            active
                              ? "border-[#006B43] bg-[#006B43] text-[#EEC74C]"
                              : "border-gray-200 text-gray-500 hover:border-[#006B43]/40 hover:text-[#006B43]"
                          }`}
                        >
                          {stars}
                          <Star size={8} className="fill-current" />
                        </button>
                      );
                    })}
                  </div>
                </div>
                <Counter
                  icon={BedDouble}
                  label="Rooms"
                  value={form.rooms}
                  min={1}
                  max={10}
                  onChange={setValue("rooms")}
                />
              </div>

              {/* Row 5: Travellers */}
              <div className="grid grid-cols-3 gap-2">
                <Counter
                  label="Adults"
                  hint=" 12+"
                  value={form.adults}
                  min={1}
                  max={20}
                  onChange={setValue("adults")}
                />
                <Counter
                  label="Children"
                  hint=" 2-11"
                  value={form.children}
                  max={10}
                  onChange={setValue("children")}
                />
                <Counter
                  label="Infants"
                  hint=" 0-2"
                  value={form.infants}
                  max={6}
                  onChange={setValue("infants")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative !mt-3.5 flex h-12 w-full items-center justify-between overflow-hidden rounded-xl bg-gradient-to-r from-[#007A4D] to-[#005536] pl-5 pr-1.5 text-[13.5px] font-semibold text-white shadow-[0_14px_32px_-10px_rgba(0,107,67,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-8px_rgba(0,107,67,0.9)] disabled:opacity-80"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">
                  {status === "sending" ? "Sending…" : "Submit Booking Request"}
                </span>
                <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEC74C] text-[#00452B] shadow-inner">
                  {status === "sending" ? (
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#00452B]/30 border-t-[#00452B]" />
                  ) : (
                    <ArrowRight size={15} />
                  )}
                </span>
              </button>

              <p className="flex items-center justify-center gap-1.5 pt-0.5 text-[11.5px] text-gray-500">
                <ShieldCheck size={12} className="text-[#006B43]" />
                No payment needed to enquire
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────
   Hero Section
──────────────────────────── */
export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => setMounted(true), []);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [current, next]);

  const slide = slides[current];

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured journeys"
      className="relative w-full overflow-hidden bg-[#001F16] pt-16 lg:pt-0"
    >
      {/* ── Slide images ── */}
      {slides.map((s, i) => {
        const active = i === current;
        return (
          <div
            key={s.id}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 will-change-transform ${
                active && mounted
                  ? "scale-110 transition-transform duration-[6000ms] ease-out"
                  : "scale-100 transition-transform duration-0 delay-[1400ms]"
              }`}
            >
              <Image
                src={s.image}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        );
      })}

      {/* ── Overlays ── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#001F16]/97 via-[#001F16]/80 to-[#001F16]/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: patternSvg,
          maskImage: "linear-gradient(to right, black, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[600px] w-[600px] rounded-full bg-[#EEC74C]/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[#006B43]/35 blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EEC74C]/70 to-transparent" />

      {/* ── Main grid ── */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-8 sm:py-20 lg:min-h-[780px] lg:grid-cols-[1fr_440px] lg:gap-14 lg:px-12 lg:py-16">

        {/* Left — text content */}
        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div key={current} className="max-w-2xl">

            <div className="hero-fade mb-5 flex items-center gap-3">
              <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-[#EEC74C] sm:block" />
              <span className="inline-flex items-center gap-2 rounded-full border border-[#EEC74C]/30 bg-[#EEC74C]/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#EEC74C] backdrop-blur-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 rotate-45 bg-[#EEC74C]" />
                {slide.subtitle}
              </span>
            </div>

            <h1
              className="hero-fade text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]"
              style={{ animationDelay: "100ms" }}
            >
              {slide.title}{" "}
              <span className="relative inline-block pr-1 font-serif font-medium italic">
                <span className="bg-gradient-to-r from-[#F8E3A0] via-[#EEC74C] to-[#D4A72C] bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full"
                >
                  <path
                    d="M2 9 C 50 2, 150 2, 198 8"
                    stroke="#EEC74C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.8"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="hero-fade mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-[17px]"
              style={{ animationDelay: "220ms" }}
            >
              {slide.description}
            </p>

            <div
              className="hero-fade mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "340ms" }}
            >
              <Link
                href="/umrah"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#F3D266] to-[#E2B53A] py-2 pl-5 pr-1.5 text-[14px] font-bold text-[#00452B] shadow-[0_12px_30px_-10px_rgba(238,199,76,0.8)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Explore Packages</span>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#006B43] text-[#EEC74C]">
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-5 py-2.5 text-[14px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EEC74C]/70 hover:bg-white/10 hover:text-[#EEC74C]"
              >
                Contact Us
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Features */}
          <ul className="mt-10 hidden flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:flex">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EEC74C]/25 bg-[#EEC74C]/10 text-[#EEC74C]">
                  <Icon size={14} />
                </span>
                <span className="text-[14px] text-white/80">{label}</span>
              </li>
            ))}
          </ul>

          {/* Slide controls */}
          <div className="mt-8 flex items-center gap-5">
            <div className="flex items-baseline gap-1.5 font-serif">
              <span className="text-[26px] italic text-[#EEC74C] sm:text-3xl">
                {pad(current + 1)}
              </span>
              <span className="text-xs tracking-widest text-white/45">
                / {pad(slides.length)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {slides.map((s, i) => {
                const active = i === current;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={active ? "true" : undefined}
                    className="group py-3"
                  >
                    <span
                      className={`relative block h-[3px] overflow-hidden rounded-full bg-white/25 transition-all duration-500 ${
                        active ? "w-12" : "w-5 group-hover:bg-white/50"
                      }`}
                    >
                      {active && (
                        <span
                          key={current}
                          className="hero-progress absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#EEC74C] to-[#F6DE8D]"
                          style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="ml-auto flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-[#EEC74C] hover:bg-[#EEC74C] hover:text-[#006B43]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-[#EEC74C] hover:bg-[#EEC74C] hover:text-[#006B43]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right — booking form */}
        <div
          id="booking"
          className="hero-fade mx-auto w-full max-w-[420px] lg:max-w-none"
          style={{ animationDelay: "280ms" }}
        >
          <BookingForm />
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); filter: blur(4px); }
          to   { opacity: 1; transform: none; filter: none; }
        }
        @keyframes heroProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .hero-fade {
          animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero-progress {
          animation-name: heroProgress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade { animation: none; }
        }
      `}</style>
    </section>
  );
}