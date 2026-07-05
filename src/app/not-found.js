"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-[calc(100svh-72px)] w-full overflow-hidden bg-[#11110f] text-white">
      {/* AMBIENT LIGHT */}
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-48 h-[520px] w-[520px] rounded-full bg-cyan-500/[0.08] blur-[150px]"
      />

      {/* LARGE BACKGROUND INDEX */}
      <motion.span
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.96,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-[0.06em] bottom-[-0.1em] hidden select-none text-[clamp(20rem,42vw,46rem)] font-semibold leading-[0.7] tracking-[-0.1em] text-white/[0.025] lg:block"
      >
        404
      </motion.span>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 32,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease,
          }}
          className="w-full"
        >
          {/* LABEL */}
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-cyan-300">
              Error 404
            </p>
          </div>

          {/* MAIN COMPOSITION */}
          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[0.52fr_1fr] lg:items-end lg:gap-20">
            {/* NUMBER */}
            <div>
              <span className="block text-[clamp(7.5rem,34vw,13rem)] font-semibold leading-[0.68] tracking-[-0.09em] text-white">
                404
              </span>

              <div className="mt-8 flex items-center gap-4">
         
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-stone-600">
                  Page unavailable
                </span>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-white">
                Nothing to
                <span className="block text-stone-600">
                  see here.
                </span>
              </h1>

              <div className="mt-8 max-w-lg border-l border-white/20 pl-5 sm:mt-10 sm:pl-6">
                <p className="text-sm leading-7 text-stone-400 sm:text-base sm:leading-8">
                  The page you are looking for is unavailable or may have moved.
                  Return to the portfolio and continue exploring.
                </p>
              </div>

              <Link
                href="/"
                className="group mt-10 inline-flex h-14 w-full items-center justify-between rounded-full bg-white pl-6 pr-2 text-sm font-semibold text-stone-950 transition duration-500 hover:bg-cyan-50 min-[420px]:w-fit min-[420px]:gap-10 sm:mt-12"
              >
                Return to portfolio

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-950 text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                  />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.07]">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-stone-700">
            Dr. Marios Zisis
          </p>

          <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-stone-700">
            Medical Portfolio
          </p>
        </div>
      </div>
    </main>
  );
}