"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { legalDocuments } from "./legal-content";

const ease = [0.22, 1, 0.36, 1];

export function LegalHero({ eyebrow = "Legal", title, accent, meta, children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#11110f] text-white">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-56 -top-72 h-[560px] w-[560px] rounded-full border border-white/[0.06]"
      />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="relative mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-10 sm:pb-16 sm:pt-36 lg:pb-20"
      >
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-cyan-400" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
            {eyebrow}
          </p>
        </div>

        <h1 className="mt-5 text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] sm:mt-7">
          {title}
          {accent && <span className="block text-white/30">{accent}</span>}
        </h1>

        {meta && (
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400 sm:mt-9">
            {meta}
          </p>
        )}

        {children}
      </motion.div>
    </section>
  );
}

export default function LegalLayout({ title, accent, effectiveDate, intro, sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="min-h-screen w-full bg-[#f8f8f6] text-stone-950 selection:bg-cyan-100 selection:text-cyan-950">
      <LegalHero
        title={title}
        accent={accent}
        meta={`Effective ${effectiveDate}`}
      >
        {intro && (
          <p className="mt-4 max-w-xl border-l border-white/20 pl-5 text-sm leading-6 text-stone-300 sm:mt-6 sm:pl-6 sm:text-base sm:leading-7">
            {intro}
          </p>
        )}
      </LegalHero>

      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-20 lg:py-28">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[240px_1fr] lg:gap-24">
          {/* Contents */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <details className="group rounded-2xl border border-stone-300 bg-white/60 lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500 [&::-webkit-details-marker]:hidden">
                On this page
                <ChevronDown
                  size={16}
                  className="text-stone-400 transition duration-300 group-open:rotate-180"
                />
              </summary>
              <TableOfContents sections={sections} className="px-5 pb-4" />
            </details>

            <div className="hidden lg:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                On this page
              </p>
              <TableOfContents
                sections={sections}
                activeId={activeId}
                className="mt-5 border-l border-stone-300"
              />
              <OtherDocuments />
            </div>
          </aside>

          {/* Sections */}
          <article className="min-w-0 max-w-3xl">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-t border-stone-300 py-7 first:border-t-0 first:pt-0 sm:py-12"
              >
                <div className="grid gap-3 sm:grid-cols-[56px_1fr] sm:gap-6">
                  <span className="hidden pt-1 text-[11px] font-medium tabular-nums text-cyan-800 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-[1.4rem] font-semibold leading-tight tracking-[-0.03em] text-stone-950 sm:text-[2rem]">
                      <span className="mr-3 align-middle text-[11px] font-medium tracking-normal tabular-nums text-cyan-800 sm:hidden">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </h2>
                    <div className="mt-3 space-y-3 text-sm leading-[1.65] text-stone-600 sm:mt-5 sm:space-y-4 sm:text-base sm:leading-8 [&_strong]:font-semibold [&_strong]:text-stone-900">
                      {section.content}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}

function TableOfContents({ sections, activeId, className = "" }) {
  return (
    <nav aria-label="Table of contents" className={className}>
      <ol className="space-y-1">
        {sections.map((section, index) => {
          const isActive = section.id === activeId;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`-ml-px flex gap-3 border-l py-1.5 pl-4 text-sm transition duration-300 ${
                  isActive
                    ? "border-cyan-700 text-stone-950"
                    : "border-transparent text-stone-500 hover:text-stone-900"
                }`}
              >
                <span className="tabular-nums text-stone-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{section.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function OtherDocuments() {
  const pathname = usePathname();
  const others = legalDocuments.filter((doc) => doc.href !== pathname);

  if (others.length === 0) return null;

  return (
    <div className="mt-12 border-t border-stone-300 pt-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
        Also read
      </p>
      {others.map((doc) => (
        <Link
          key={doc.href}
          href={doc.href}
          className="group mt-4 flex items-center justify-between text-sm font-medium text-stone-800 transition hover:text-cyan-800"
        >
          {doc.title}
          <ArrowUpRight
            size={15}
            className="text-stone-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-800"
          />
        </Link>
      ))}
    </div>
  );
}
