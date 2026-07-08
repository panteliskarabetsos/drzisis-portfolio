"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";

const year = new Date().getFullYear();

const explore = [
  { href: "/about", label: "About", number: "01" },
  { href: "/research", label: "Research", number: "02" },
  { href: "/contact", label: "Contact", number: "03" },
];

const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/legal", label: "Legal" },
];

const socials = [
  {
    href: "https://www.linkedin.com/in/marioszisis/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/marioszisis/",
    label: "Instagram",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#11110f] text-white">
      {/* AMBIENT GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.09] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 -top-40 h-[560px] w-[560px] rounded-full border border-white/[0.05]"
      />

      <div className="relative mx-auto w-full max-w-[1800px] px-5 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pt-28 xl:px-16">
        {/* ===============================================
            TOP — STATEMENT + CTA
        =============================================== */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:pb-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-cyan-400" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Get in Touch
              </p>
            </div>

            <h2 className="mt-8 max-w-2xl text-[2.6rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[4.2rem]">
              Let&apos;s advance
              <span className="block text-stone-500">
                cardiovascular care.
              </span>
            </h2>

            <a
              href="mailto:contact@drzisis.com"
              className="group mt-10 inline-flex h-14 w-full items-center justify-between rounded-full bg-white pl-7 pr-2 text-sm font-semibold text-stone-950 transition duration-500 hover:bg-cyan-50 min-[420px]:w-fit min-[420px]:gap-10"
            >
              contact@drzisis.com
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-950 text-white transition-transform duration-500 group-hover:rotate-45">
                <Mail size={16} strokeWidth={1.8} />
              </span>
            </a>
          </div>

          {/* NAV COLUMNS */}
          <div className="grid grid-cols-2 gap-10 lg:justify-items-end lg:pt-2">
            {/* EXPLORE */}
            <div className="w-full lg:max-w-[220px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Explore
              </p>

              <nav className="mt-6 border-t border-white/10">
                {explore.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between border-b border-white/10 py-4"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-[9px] tabular-nums text-stone-600 transition-colors group-hover:text-cyan-300">
                        {item.number}
                      </span>
                      <span className="text-base font-medium tracking-[-0.02em] text-stone-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                        {item.label}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="text-stone-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* LEGAL */}
            <div className="w-full lg:max-w-[220px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Legal
              </p>

              <nav className="mt-6 border-t border-white/10">
                {legal.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between border-b border-white/10 py-4"
                  >
                    <span className="text-sm text-stone-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                      {item.label}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-cyan-400" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* ===============================================
            META ROW — IDENTITY + SOCIAL
        =============================================== */}
        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-20">
          <div className="flex items-center gap-4">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.04]">
              <Image
                src="/circle-palm.gif"
                alt=""
                fill
                sizes="48px"
                className="object-contain"
              />
            </span>

            <div>
              <p className="text-sm font-semibold tracking-[-0.02em] text-white">
                Dr. Marios Zisis
              </p>
              <p className="mt-1 max-w-xs text-xs leading-5 text-stone-500">
                Aspiring cardiologist — evidence, prevention and
                patient-centered care.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:justify-end lg:justify-end">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-stone-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400 hover:text-stone-950"
                >
                  <Icon size={17} strokeWidth={1.7} />
                </a>
              );
            })}
          </div>
        </div>

        {/* ===============================================
            OVERSIZED WORDMARK
        =============================================== */}
        <div className="pointer-events-none select-none pt-14 sm:pt-16 lg:pt-20">
          <p className="bg-gradient-to-b from-white/[0.13] to-white/[0.02] bg-clip-text text-[clamp(3.6rem,15.5vw,15rem)] font-semibold leading-[0.72] tracking-[-0.07em] text-transparent">
            Zisis.
          </p>
        </div>
      </div>

      {/* ===============================================
          BOTTOM BAR
      =============================================== */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-3 px-5 py-6 text-[11px] text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 xl:px-16">
          <p>
            © {year} Dr. Marios Zisis.{" "}
            <span className="text-stone-600">All rights reserved.</span>
          </p>

          <p className="flex items-center gap-2">
            <span className="text-stone-600">Designed &amp; built by</span>
            <a
              href="http://panteliskarabetsos.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-stone-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-cyan-300 hover:decoration-cyan-300"
            >
              Pantelis
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
