"use client";

import Link from "next/link";
import { Phone, ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export default function CTASection() {
  const whatsappNumber = "447700000000"; // apna number yahan daal do
  const whatsappMessage = "Assalamu Alaikum! I would like to enquire about your Hajj & Umrah packages.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">

      {/* Fixed background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/pics/hajj4.jpg"
        alt=""
        aria-hidden
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover", zIndex: -2 }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg,rgba(0,30,18,0.92) 0%,rgba(0,60,36,0.85) 50%,rgba(0,30,18,0.92) 100%)", zIndex: -1 }}
      />

      {/* Glow blobs */}
      <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#EEC74C]/10 blur-3xl" />
      <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#EEC74C]/10 blur-3xl" />

      {/* Gold lines */}
      <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[#EEC74C]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[#EEC74C]/60 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">

        {/* Badge */}
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#EEC74C]/40 bg-[#EEC74C]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#EEC74C]">
          <Sparkles className="h-3.5 w-3.5" />
          Book Your Sacred Journey
        </span>

        {/* Heading */}
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Begin Your{" "}
          <span className="bg-gradient-to-r from-[#EEC74C] to-[#f5d070] bg-clip-text font-serif italic text-transparent">
            Spiritual Journey?
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
          Speak to our expert team today — we'll guide you through every step
          from booking to returning home, insha'Allah.
        </p>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#EEC74C] to-transparent" />

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#1ebe59] hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5 sm:w-auto"
          >
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>

          {/* Packages */}
          <Link
            href="/packages"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#EEC74C] px-8 py-4 text-sm font-bold text-gray-900 shadow-lg shadow-[#EEC74C]/20 transition-all duration-300 hover:bg-[#f5d070] hover:shadow-xl hover:-translate-y-0.5 sm:w-auto"
          >
            View Our Packages
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Call */}
          <a
            href="tel:+447700000000"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Call Us Now
          </a>

        </div>

        {/* Trust note */}
        <p className="mt-8 text-xs text-white/40">
          🔒 ATOL &amp; IATA certified &nbsp;·&nbsp; No hidden fees &nbsp;·&nbsp; Free consultation
        </p>

      </div>
    </section>
  );
}