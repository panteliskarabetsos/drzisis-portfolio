"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  animate,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Heart,
  Leaf,
  MessageSquare,
  Puzzle,
  Quote,
  Sun,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.12,
  },
  transition: {
    duration: 0.65,
    ease,
  },
};

// Hero orchestration
const heroStagger = {
  animate: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const lineReveal = {
  initial: { y: "120%" },
  animate: {
    y: 0,
    transition: {
      duration: 0.95,
      ease,
    },
  },
};

const heroItem = {
  initial: { opacity: 0, y: 22 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const marqueeItems = [
  "Cardiology",
  "Preventive Medicine",
  "Clinical Research",
  "Patient-Centered Care",
  "Evidence-Based",
  "Cardiovascular Health",
];

const stats = [
  {
    value: 2,
    format: (v) => String(Math.round(v)).padStart(2, "0"),
    label: "Peer-reviewed publications",
  },
  {
    value: 3,
    format: (v) => String(Math.round(v)).padStart(2, "0"),
    label: "Core research themes",
  },
  {
    value: 2025,
    format: (v) => String(Math.round(v)),
    label: "Medical graduate",
  },
  {
    value: 2026,
    format: (v) => String(Math.round(v)),
    label: "MSc — expected",
  },
];

const focusAreas = [
  "Preventive cardiology & cardiovascular risk assessment",
  "Patient education and shared decision-making",
  "Integrating clinical experience with current guidelines",
  "Collaborative, interdisciplinary care for complex cases",
];

const clinicalPhilosophy = [
  {
    number: "01",
    title: "Evidence-Based Care",
    description:
      "Grounding clinical decisions in the latest scientific research and guidelines to ensure safe, effective care.",
    icon: FlaskConical,
  },
  {
    number: "02",
    title: "Patient Communication",
    description:
      "Prioritizing open, empathetic dialogue to empower patients and build lasting trust.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Preventive Focus",
    description:
      "Advocating for lifestyle interventions and early screening to minimize disease risk before it starts.",
    icon: Leaf,
  },
];

const coreValues = [
  {
    title: "Compassion",
    description:
      "Placing patient needs, comfort, and dignity at the center of every decision.",
    icon: Heart,
  },
  {
    title: "Critical Thinking",
    description:
      "Integrating clinical knowledge with evidence-based research for better outcomes.",
    icon: Puzzle,
  },
  {
    title: "Integrity",
    description:
      "Practicing medicine with honesty, accountability and unwavering ethical standards.",
    icon: Sun,
  },
  {
    title: "Collaboration",
    description:
      "Building strong partnerships with patients, families and interdisciplinary teams.",
    icon: Users,
  },
  {
    title: "Curiosity",
    description:
      "Embracing continuous learning to stay at the forefront of medical innovation.",
    icon: FlaskConical,
  },
  {
    title: "Excellence",
    description:
      "Striving for the highest standards in clinical practice, research and education.",
    icon: BarChart3,
  },
];

const endorsements = [
  {
    quote:
      "Marios Zisis demonstrates exceptional dedication, medical knowledge and initiative. He consistently excels in clinical skills, diagnosis and teamwork. His positive attitude and collaborative spirit make him a valued team member.",
    name: "Dr. Alexandros Briasoulis",
    role: "Assistant Professor, National and Kapodistrian University of Athens & University of Iowa",
  },
  {
    quote:
      "Marios stood out during his clinical training for his enthusiasm, meticulous work and strong clinical reasoning. Highly respected by colleagues for his collaborative spirit and clarity of thought. I recommend him without reservation.",
    name: "Dr. Andreas Goules",
    role: "Assistant Professor, University of Athens",
  },
];

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(heroProgress, [0, 1], ["0%", "12%"]);
  const heroContentY = useTransform(heroProgress, [0, 1], ["0px", "64px"]);
  const heroContentOpacity = useTransform(heroProgress, [0, 0.75], [1, 0]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#f8f8f6] text-stone-950 selection:bg-cyan-100 selection:text-cyan-950">
      <ScrollProgress />

      <Grain />

      {/* ======================================================
          HERO
      ====================================================== */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden bg-white lg:min-h-[94svh]"
      >
        {/* ==================================================
            MOBILE HERO — BLURRED BACKGROUND
        ================================================== */}
        <div className="relative min-h-[88svh] w-full overflow-hidden bg-stone-950 lg:hidden">
          {/* MOBILE BACKGROUND IMAGE */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    scale: 1.13,
                  }
            }
            animate={{
              scale: 1.08,
            }}
            transition={{
              duration: 1.6,
              ease,
            }}
            className="absolute -inset-5 bg-cover bg-[center_24%] blur-[4px]"
            style={{
              backgroundImage: 'url("/hero-bg.jpg")',
            }}
          />

          {/* MOBILE OVERLAYS */}
          <div className="absolute inset-0 bg-stone-950/20" />

          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/25 via-stone-950/5 to-stone-950/95" />

          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/30 via-transparent to-transparent" />

          {/* MOBILE AMBIENT GLOW */}
          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.12, 1],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-24 top-[38%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
          />

          {/* MOBILE TOP LABEL */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -10,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease,
            }}
            className="absolute left-5 right-5 top-7 z-10 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-cyan-300" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                Aspiring Cardiologist
              </span>
            </div>

            <PulseDot dot="bg-cyan-300" ping="bg-cyan-300" />
          </motion.div>

          {/* MOBILE CONTENT */}
          <div className="relative z-10 flex min-h-[88svh] items-end px-5 pb-7 pt-28">
            <motion.div
              variants={heroStagger}
              initial={shouldReduceMotion ? false : "initial"}
              animate="animate"
              className="w-full"
            >
              <motion.p
                variants={heroItem}
                className="mb-4 text-[9px] font-medium uppercase tracking-[0.2em] text-white/50"
              >
                Medicine · Cardiology · Prevention
              </motion.p>

              <h1 className="text-[clamp(3.35rem,16vw,5.2rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-white">
                <span className="block overflow-hidden pb-[0.04em]">
                  <motion.span
                    variants={lineReveal}
                    className="block whitespace-nowrap"
                  >
                    Dr. Marios
                  </motion.span>
                </span>

                <span className="block overflow-hidden pb-[0.04em]">
                  <motion.span
                    variants={lineReveal}
                    className="block text-white/35"
                  >
                    Zisis.
                  </motion.span>
                </span>
              </h1>

              <motion.div
                variants={heroItem}
                className="mt-6 max-w-sm border-l border-white/30 pl-4"
              >
                <p className="text-[15px] leading-7 tracking-[-0.015em] text-white/75">
                  Aspiring Cardiologist
                  <span className="mx-2 text-white/30">
                    —
                  </span>
                  driven by{" "}
                  <span className="font-medium text-white">
                    compassion.
                  </span>
                </p>
              </motion.div>

              {/* MOBILE ACTIONS */}
              <motion.div
                variants={heroItem}
                className="mt-8 flex items-center gap-3"
              >
                <a
                  href="/about"
                  className="group inline-flex h-[52px] flex-1 touch-manipulation items-center justify-between rounded-full bg-white pl-6 pr-2 text-sm font-semibold text-stone-950 transition duration-500 active:scale-[0.98]"
                >
                  Learn more

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-950 text-white transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </a>

                <a
                  href="#about"
                  aria-label="Explore profile"
                  className="flex h-[52px] w-[52px] shrink-0 touch-manipulation items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition active:scale-95"
                >
                  <ArrowDown size={17} />
                </a>
              </motion.div>

              {/* MOBILE META */}
              <motion.div
                variants={heroItem}
                className="mt-7 flex items-end justify-between border-t border-white/20 pt-5"
              >
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    Clinical outlook
                  </p>

                  <p className="mt-2 max-w-[15rem] text-xs leading-5 text-white/65">
                    Evidence, prevention and patient-centered care.
                  </p>
                </div>

                <PulseDot dot="bg-cyan-300" ping="bg-cyan-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ==================================================
            DESKTOP HERO — NO BLUR
        ================================================== */}
        <div className="hidden min-h-[94svh] w-full lg:grid lg:grid-cols-[1fr_0.93fr]">
          {/* DESKTOP CONTENT */}
          <div className="relative flex items-center px-16 py-20 xl:px-24 2xl:px-32">
            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: [0.55, 0.85, 0.55],
                      scale: [1, 1.1, 1],
                    }
              }
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[12%] top-[14%] h-72 w-72 rounded-full bg-cyan-100/60 blur-[100px]"
            />

            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: heroContentY,
                      opacity: heroContentOpacity,
                    }
              }
              className="relative w-full max-w-2xl"
            >
              <motion.div
                variants={heroStagger}
                initial={shouldReduceMotion ? false : "initial"}
                animate="animate"
              >
                <motion.div
                  variants={heroItem}
                  className="mb-10 flex items-center gap-4"
                >
                  <span className="h-px w-10 bg-cyan-700" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-800">
                    Aspiring Cardiologist
                  </span>

                  <PulseDot dot="bg-cyan-600" ping="bg-cyan-500" />
                </motion.div>

                <h1 className="text-[clamp(4rem,7vw,8rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-stone-950">
                  <span className="block overflow-hidden pb-[0.04em]">
                    <motion.span
                      variants={lineReveal}
                      className="block whitespace-nowrap"
                    >
                      Dr. Marios
                    </motion.span>
                  </span>

                  <span className="block overflow-hidden pb-[0.04em]">
                    <motion.span
                      variants={lineReveal}
                      className="block text-stone-300"
                    >
                      Zisis.
                    </motion.span>
                  </span>
                </h1>

                <motion.div
                  variants={heroItem}
                  className="mt-10 max-w-lg border-l border-stone-300 pl-6"
                >
                  <p className="text-xl leading-8 tracking-[-0.015em] text-stone-600">
                    Aspiring Cardiologist
                    <span className="mx-2 text-stone-300">
                      —
                    </span>
                    driven by{" "}
                    <span className="font-medium text-stone-950">
                      compassion.
                    </span>
                  </p>
                </motion.div>

                <motion.div
                  variants={heroItem}
                  className="mt-12 flex items-center gap-6"
                >
                  <a
                    href="/about"
                    className="group inline-flex h-14 items-center gap-8 rounded-full bg-stone-950 pl-7 pr-2 text-sm font-medium text-white transition duration-500 hover:bg-cyan-800"
                  >
                    Learn more

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-950 transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={17} />
                    </span>
                  </a>

                  <a
                    href="#about"
                    className="group inline-flex items-center gap-3 text-sm font-medium text-stone-500 transition-colors hover:text-stone-950"
                  >
                    Explore profile

                    <span className="h-px w-7 bg-stone-300 transition-all duration-500 group-hover:w-12 group-hover:bg-cyan-700" />
                  </a>
                </motion.div>

                <motion.div
                  variants={heroItem}
                  className="mt-20 flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400"
                >
                  <span>Medicine</span>

                  <span className="h-1 w-1 rounded-full bg-cyan-600" />

                  <span>Cardiology</span>

                  <span className="h-1 w-1 rounded-full bg-cyan-600" />

                  <span>Prevention</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* DESKTOP IMAGE — NO BLUR */}
          <div className="relative min-h-full overflow-hidden">
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: heroImageY,
                    }
              }
              className="absolute -inset-y-[8%] inset-x-0"
            >
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        scale: 1.1,
                      }
                }
                animate={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 1.8,
                  ease,
                }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/hero-bg.jpg")',
                }}
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 20,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease,
              }}
              className="absolute bottom-10 left-10 right-10"
            >
              <div className="flex items-end justify-between border-t border-white/30 pt-5 text-white">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    Clinical outlook
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/90">
                    Evidence, prevention and patient-centered care.
                  </p>
                </div>

                <PulseDot dot="bg-cyan-300" ping="bg-cyan-300" size="h-2 w-2" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* DESKTOP SCROLL BUTTON */}
        <a
          href="#about"
          aria-label="Scroll to about"
          className="absolute bottom-7 left-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 shadow-sm transition duration-300 hover:border-stone-950 hover:bg-stone-950 hover:text-white lg:flex"
        >
          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 4, 0],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={17} />
          </motion.span>
        </a>
      </section>

      {/* ======================================================
          KINETIC MARQUEE
      ====================================================== */}
      <Marquee reduceMotion={shouldReduceMotion} />

      {/* ======================================================
          ABOUT
      ====================================================== */}
      <section
        id="about"
        className="relative w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-9 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
          >
            <div>
              <SectionLabel>About</SectionLabel>

              <h2 className="mt-6 max-w-lg text-[2.6rem] font-semibold leading-[1] tracking-[-0.05em] sm:mt-7 sm:text-5xl lg:text-[4rem]">
                Medicine with a{" "}
                <span className="text-cyan-800">
                  human focus.
                </span>
              </h2>
            </div>

            <div className="lg:pt-10">
              <p className="max-w-3xl text-lg leading-8 tracking-[-0.02em] text-stone-700 sm:text-2xl sm:leading-[1.6] lg:text-[1.7rem]">
                Passionate about cardiology and preventive medicine, with a
                focus on enhancing patient outcomes through compassionate care
                and evidence-based clinical practice.
              </p>

              <div className="mt-9 grid gap-6 border-t border-stone-300 pt-8 sm:mt-12 sm:grid-cols-2 sm:gap-12 sm:pt-9">
                <p className="text-sm leading-7 text-stone-500">
                  Dedicated to promoting cardiovascular health by integrating
                  precision medicine, early intervention and a patient-centered
                  approach.
                </p>

                <p className="text-sm leading-7 text-stone-500">
                  My training has shaped a holistic view of cardiovascular
                  disease: from risk-factor modification and lifestyle
                  counseling to careful diagnostic reasoning and long-term
                  follow-up.
                </p>
              </div>

              <a
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold sm:mt-10"
              >
                Full Bio

                <ArrowUpRight
                  size={16}
                  className="text-cyan-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>

          {/* STATS */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="mt-16 sm:mt-24 lg:mt-32"
          >
            <SectionLabel>By the numbers</SectionLabel>

            <h3 className="mt-6 max-w-xl text-[1.7rem] font-medium leading-[1.05] tracking-[-0.04em] sm:text-3xl">
              A path measured in{" "}
              <span className="text-cyan-800">
                evidence.
              </span>
            </h3>

            <div className="mt-9 grid border-t border-stone-300 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <HomeStat
                  key={stat.label}
                  value={stat.value}
                  format={stat.format}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>

          {/* FOCUS AREAS */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="mt-16 border-y border-stone-300 sm:mt-24 lg:mt-32"
          >
            <div className="grid lg:grid-cols-[0.42fr_1fr]">
              <div className="flex flex-col justify-between border-b border-stone-300 py-8 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-800 sm:text-[10px] sm:tracking-[0.25em]">
                    Clinical interests
                  </span>

                  <h3 className="mt-4 text-[2rem] font-medium leading-none tracking-[-0.04em] sm:mt-5 sm:text-3xl">
                    Areas of
                    <span className="block text-stone-400">
                      focus.
                    </span>
                  </h3>
                </div>

                <span className="mt-6 text-[11px] text-stone-400 sm:mt-10 sm:text-xs">
                  04 focus areas
                </span>
              </div>

              <div className="lg:pl-12">
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="group grid grid-cols-[32px_1fr_32px] items-center gap-3 border-b border-stone-300 py-6 last:border-b-0 sm:grid-cols-[60px_1fr_auto] sm:py-9"
                  >
                    <span className="text-[10px] tabular-nums text-stone-400 sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-stone-700 transition-colors duration-300 group-hover:text-stone-950 sm:max-w-2xl sm:text-lg sm:leading-7">
                      {area}
                    </p>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-stone-400 transition duration-300 group-hover:border-cyan-700 group-hover:bg-cyan-700 group-hover:text-white">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          CORE VALUES
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-[#11110f] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-7 border-b border-white/10 pb-8 sm:gap-8 sm:pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end"
          >
            <div>
              <SectionLabel light>
                Core Values
              </SectionLabel>

              <h2 className="mt-6 max-w-2xl text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[3.8rem]">
                Principles that shape
                <span className="block text-stone-500">
                  the way I practice.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-stone-400 lg:justify-self-end">
              Values defining my approach to patient care, clinical reasoning
              and continuous learning.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="mt-9 sm:mt-12"
          >
            <CoreValues />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          CLINICAL PHILOSOPHY
      ====================================================== */}
      <section className="w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <SectionLabel>
              Clinical Philosophy
            </SectionLabel>

            <div>
              <h2 className="max-w-4xl text-[2.55rem] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Clear thinking.

                <span className="block text-stone-400">
                  Better communication.
                </span>

                Earlier prevention.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-stone-500 sm:mt-8 sm:text-base sm:leading-8">
                My approach to medicine blends evidence-based practice,
                patient-centered communication, and a strong commitment to
                prevention.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 border-t border-stone-300 sm:mt-20 md:grid md:grid-cols-3">
            {clinicalPhilosophy.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="group relative border-b border-stone-300 py-8 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-12"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tabular-nums text-stone-400 sm:text-xs">
                      {item.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-cyan-800 transition duration-500 group-hover:border-cyan-800 group-hover:bg-cyan-800 group-hover:text-white sm:h-11 sm:w-11">
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3 className="mt-10 text-[1.4rem] font-medium tracking-[-0.035em] sm:mt-16 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-stone-500 sm:mt-5">
                    {item.description}
                  </p>

                  <div className="mt-7 h-px w-8 bg-cyan-700 transition-all duration-500 group-hover:w-16 sm:mt-10" />
                </motion.article>
              );
            })}
          </div>

          <motion.div
            {...fadeUp}
            className="mt-9 flex sm:mt-12 md:justify-end"
          >
            <a
              href="/about"
              className="group inline-flex w-full items-center justify-between gap-5 rounded-full border border-stone-300 bg-transparent px-6 py-4 text-sm font-semibold transition duration-300 hover:border-stone-950 hover:bg-stone-950 hover:text-white min-[420px]:w-fit"
            >
              Learn More About Me

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          ENDORSEMENTS
      ====================================================== */}
      <section className="w-full border-t border-stone-300 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp}>
            <h2 className="text-[2.6rem] font-semibold tracking-[-0.05em] text-stone-950 sm:text-5xl lg:text-[4rem]">
              Endorsements
            </h2>
          </motion.div>

          <div className="mt-10 border-t border-stone-300 sm:mt-16">
            {endorsements.map((endorsement, index) => (
              <motion.article
                key={endorsement.name}
                {...fadeUp}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
                className="group grid gap-6 border-b border-stone-300 py-9 sm:gap-8 sm:py-12 lg:grid-cols-[0.16fr_1fr_0.42fr] lg:gap-12 lg:py-16"
              >
                <div>
                  <Quote
                    size={28}
                    strokeWidth={1.2}
                    className="text-cyan-700 sm:h-[34px] sm:w-[34px]"
                  />
                </div>

                <blockquote className="max-w-3xl text-lg leading-8 tracking-[-0.02em] text-stone-700 sm:text-2xl sm:leading-[1.65] lg:text-[1.7rem]">
                  “{endorsement.quote}”
                </blockquote>

                <div className="border-t border-stone-200 pt-6 lg:border-l lg:border-t-0 lg:border-stone-300 lg:pl-10 lg:pt-0">
                  <p className="font-semibold text-stone-950">
                    {endorsement.name}
                  </p>

                  <p className="mt-2 max-w-sm text-xs leading-6 text-stone-500 sm:mt-3 sm:text-sm">
                    {endorsement.role}
                  </p>

                  <span className="mt-6 block h-px w-8 bg-cyan-700 transition-all duration-500 group-hover:w-14 sm:mt-8" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"
    />
  );
}

function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[45] opacity-[0.04]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

function PulseDot({
  dot = "bg-cyan-300",
  ping = "bg-cyan-400",
  size = "h-1.5 w-1.5",
}) {
  return (
    <span className={`relative flex ${size}`}>
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${ping} opacity-75`}
      />

      <span
        className={`relative inline-flex rounded-full ${size} ${dot}`}
      />
    </span>
  );
}

function Marquee({ reduceMotion }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span
          key={item}
          className="flex items-center"
        >
          <span className="whitespace-nowrap px-6 text-2xl font-medium tracking-[-0.03em] text-white sm:px-10 sm:text-4xl">
            {item}
          </span>

          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-hidden="true"
      className="relative flex overflow-hidden border-y border-white/10 bg-[#11110f] py-6 sm:py-8"
    >
      {reduceMotion ? (
        <div className="flex px-6">{row}</div>
      ) : (
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {row}
          {row}
        </motion.div>
      )}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#11110f] to-transparent sm:w-28" />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#11110f] to-transparent sm:w-28" />
    </section>
  );
}

function HomeStat({ value, format, label }) {
  return (
    <div className="border-b border-stone-300 py-8 last:border-b-0 sm:py-9 lg:border-b-0 lg:border-r lg:px-10 lg:py-10 lg:first:pl-0 lg:last:border-r-0">
      <p className="text-5xl font-semibold tracking-[-0.055em] text-stone-950 tabular-nums lg:text-6xl">
        <CountUp value={value} format={format} />
      </p>

      <p className="mt-4 text-xs leading-6 text-stone-500">
        {label}
      </p>
    </div>
  );
}

function CountUp({
  value,
  format = (v) => String(Math.round(v)),
  duration = 1.5,
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const [display, setDisplay] = useState(() => format(0));

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(format(value));
      return undefined;
    }

    if (!inView) {
      return undefined;
    }

    const controls = animate(0, value, {
      duration,
      ease,
      onUpdate: (latest) => {
        setDisplay(format(latest));
      },
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, shouldReduceMotion]);

  return <span ref={ref}>{display}</span>;
}

function SectionLabel({
  children,
  light = false,
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span
        className={`h-px w-7 sm:w-8 ${
          light
            ? "bg-cyan-400"
            : "bg-cyan-700"
        }`}
      />

      <p
        className={`text-[9px] font-semibold uppercase tracking-[0.22em] sm:text-[10px] sm:tracking-[0.25em] ${
          light
            ? "text-cyan-300"
            : "text-cyan-800"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function CoreValues() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const total = coreValues.length;
  const activeValue = coreValues[index];
  const Icon = activeValue.icon;

  const goTo = (newIndex) => {
    setIndex(
      ((newIndex % total) + total) % total
    );
  };

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const interval = setInterval(() => {
      setIndex(
        (current) => (current + 1) % total
      );
    }, 5500);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, total]);

  return (
    <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
      {/* ACTIVE VALUE */}
      <div className="relative border-b border-white/10 pb-8 sm:min-h-[340px] sm:pb-10 lg:min-h-[390px] lg:border-b-0 lg:border-r lg:pb-0 lg:pr-20">
        <div className="flex items-start justify-between">
          <motion.div
            key={`icon-${activeValue.title}`}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.85,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
              ease,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-stone-950 sm:h-14 sm:w-14"
          >
            <Icon
              size={20}
              strokeWidth={1.7}
            />
          </motion.div>

          <span className="text-[10px] tabular-nums text-stone-500 sm:text-xs">
            {String(index + 1).padStart(2, "0")}

            <span className="mx-2 text-stone-700">
              /
            </span>

            {String(total).padStart(2, "0")}
          </span>
        </div>

        <motion.div
          key={activeValue.title}
          initial={
            shouldReduceMotion
              ? false
              : {
                    opacity: 0,
                    y: 16,
                  }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <h3 className="break-words text-[2.5rem] font-medium leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {activeValue.title}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-400 sm:mt-6 sm:text-base sm:leading-8">
            {activeValue.description}
          </p>
        </motion.div>

        <div className="mt-8 flex gap-2 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous core value"
            className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/15 text-stone-400 transition duration-300 hover:border-white hover:bg-white hover:text-stone-950 active:scale-95"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next core value"
            className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/15 text-stone-400 transition duration-300 hover:border-white hover:bg-white hover:text-stone-950 active:scale-95"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* VALUE NAVIGATION */}
      <div className="flex flex-col justify-center">
        {coreValues.map(
          (value, valueIndex) => {
            const isActive =
              valueIndex === index;

            return (
              <button
                key={value.title}
                type="button"
                onClick={() =>
                  goTo(valueIndex)
                }
                className="group flex min-h-12 w-full touch-manipulation items-center gap-4 border-b border-white/10 py-3.5 text-left last:border-b-0 sm:gap-5 sm:py-4"
              >
                <span
                  className={`text-[9px] tabular-nums transition-colors sm:text-[10px] ${
                    isActive
                      ? "text-cyan-300"
                      : "text-stone-600"
                  }`}
                >
                  {String(
                    valueIndex + 1
                  ).padStart(2, "0")}
                </span>

                <span
                  className={`text-sm transition-all duration-300 sm:text-base ${
                    isActive
                      ? "translate-x-1 font-medium text-white sm:translate-x-2"
                      : "text-stone-500 group-hover:translate-x-1 group-hover:text-stone-300"
                  }`}
                >
                  {value.title}
                </span>

                <span
                  className={`ml-auto h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-100 bg-cyan-400"
                      : "scale-0 bg-transparent"
                  }`}
                />
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}
