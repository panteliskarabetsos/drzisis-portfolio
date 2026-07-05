"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease },
};

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
  return (
    <main className="overflow-hidden bg-[#f8f8f6] text-stone-950 selection:bg-cyan-100 selection:text-cyan-950">
      {/* HERO */}
      <section className="relative min-h-[94svh] bg-white">
        <div className="mx-auto grid min-h-[94svh] max-w-[1800px] lg:grid-cols-[1fr_0.93fr]">
          {/* CONTENT */}
          <div className="relative order-2 flex items-center px-6 py-20 sm:px-10 lg:order-1 lg:px-16 xl:px-24 2xl:px-32">
            <div
              aria-hidden="true"
              className="absolute left-[12%] top-[14%] h-72 w-72 rounded-full bg-cyan-100/60 blur-[100px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease,
              }}
              className="relative w-full max-w-2xl"
            >
              <div className="mb-10 flex items-center gap-4">
                <span className="h-px w-10 bg-cyan-700" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-800">
                  Aspiring Cardiologist
                </span>
              </div>

             <h1 className="text-[clamp(3.8rem,7vw,8rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-stone-950">
              <span className="block">Dr. Marios</span>
              <span className="block text-stone-300">Zisis.</span>
            </h1>

              <div className="mt-10 max-w-lg border-l border-stone-300 pl-6">
                <p className="text-lg leading-8 tracking-[-0.015em] text-stone-600 sm:text-xl">
                  Aspiring Cardiologist
                  <span className="mx-2 text-stone-300">—</span>
                  driven by{" "}
                  <span className="font-medium text-stone-950">
                    compassion.
                  </span>
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
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
              </div>

              <div className="mt-20 flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                <span>Medicine</span>
                <span className="h-1 w-1 rounded-full bg-cyan-600" />
                <span>Cardiology</span>
                <span className="h-1 w-1 rounded-full bg-cyan-600" />
                <span>Prevention</span>
              </div>
            </motion.div>
          </div>

          {/* IMAGE */}
          <div className="relative order-1 min-h-[58svh] overflow-hidden lg:order-2 lg:min-h-full">
            <motion.div
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("/hero-bg.jpg")',
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />

            <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-white to-transparent lg:block" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease,
              }}
              className="absolute bottom-8 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10"
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

                <span className="hidden h-2 w-2 rounded-full bg-cyan-300 sm:block" />
              </div>
            </motion.div>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about"
          className="absolute bottom-7 left-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 shadow-sm transition duration-300 hover:border-stone-950 hover:bg-stone-950 hover:text-white lg:flex"
        >
          <ArrowDown size={17} />
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative px-6 py-24 sm:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
          >
            <div>
              <SectionLabel>About</SectionLabel>

              <h2 className="mt-7 max-w-lg text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Medicine with a{" "}
                <span className="text-cyan-800">human focus.</span>
              </h2>
            </div>

            <div className="lg:pt-10">
              <p className="max-w-3xl text-xl leading-[1.6] tracking-[-0.025em] text-stone-700 sm:text-2xl lg:text-[1.7rem]">
                Passionate about cardiology and preventive medicine, with a
                focus on enhancing patient outcomes through compassionate care
                and evidence-based clinical practice.
              </p>

              <div className="mt-12 grid gap-8 border-t border-stone-300 pt-9 sm:grid-cols-2 sm:gap-12">
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
                className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold"
              >
                Full Bio
                <ArrowUpRight
                  size={16}
                  className="text-cyan-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
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
            className="mt-24 border-y border-stone-300 lg:mt-32"
          >
            <div className="grid lg:grid-cols-[0.42fr_1fr]">
              <div className="flex flex-col justify-between border-b border-stone-300 py-10 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-800">
                    Clinical interests
                  </span>

                  <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">
                    Areas of
                    <span className="block text-stone-400">focus.</span>
                  </h3>
                </div>

                <span className="mt-10 text-xs text-stone-400">
                  04 focus areas
                </span>
              </div>

              <div className="lg:pl-12">
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="group grid grid-cols-[45px_1fr_auto] items-center gap-3 border-b border-stone-300 py-7 last:border-b-0 sm:grid-cols-[60px_1fr_auto] sm:py-9"
                  >
                    <span className="text-xs tabular-nums text-stone-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="max-w-2xl text-base leading-7 text-stone-700 transition-colors duration-300 group-hover:text-stone-950 sm:text-lg">
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

      {/* CORE VALUES */}
      <section className="relative overflow-hidden bg-[#11110f] px-6 py-24 text-white sm:px-10 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-600/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end"
          >
            <div>
              <SectionLabel light>Core Values</SectionLabel>

              <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-[3.8rem]">
                Principles that shape
                <span className="block text-stone-500">the way I practice.</span>
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
            className="mt-12"
          >
            <CoreValues />
          </motion.div>
        </div>
      </section>

      {/* CLINICAL PHILOSOPHY */}
      <section className="px-6 py-24 sm:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <SectionLabel>Clinical Philosophy</SectionLabel>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Clear thinking.
                <span className="block text-stone-400">
                  Better communication.
                </span>
                Earlier prevention.
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-stone-500">
                My approach to medicine blends evidence-based practice,
                patient-centered communication, and a strong commitment to
                prevention.
              </p>
            </div>
          </motion.div>

          <div className="mt-20 grid border-t border-stone-300 md:grid-cols-3">
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
                  className="group relative border-b border-stone-300 py-10 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-12"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tabular-nums text-stone-400">
                      {item.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-cyan-800 transition duration-500 group-hover:border-cyan-800 group-hover:bg-cyan-800 group-hover:text-white">
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-medium tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-stone-500">
                    {item.description}
                  </p>

                  <div className="mt-10 h-px w-8 bg-cyan-700 transition-all duration-500 group-hover:w-16" />
                </motion.article>
              );
            })}
          </div>

          <motion.div
            {...fadeUp}
            className="mt-12 flex justify-start md:justify-end"
          >
            <a
              href="/about"
              className="group inline-flex items-center gap-5 rounded-full border border-stone-300 bg-transparent px-6 py-4 text-sm font-semibold transition duration-300 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
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

      {/* ENDORSEMENTS */}
      <section className="border-t border-stone-300 bg-white px-6 py-24 sm:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
         <motion.div {...fadeUp}>
  <h2 className="text-4xl font-semibold tracking-[-0.05em] text-stone-950 sm:text-5xl lg:text-[4rem]">
    Endorsements
  </h2>
</motion.div>

          <div className="mt-16 border-t border-stone-300">
            {endorsements.map((endorsement, index) => (
              <motion.article
                key={endorsement.name}
                {...fadeUp}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
                className="group grid gap-10 border-b border-stone-300 py-12 lg:grid-cols-[0.16fr_1fr_0.42fr] lg:gap-12 lg:py-16"
              >
                <div>
                  <Quote
                    size={34}
                    strokeWidth={1.2}
                    className="text-cyan-700"
                  />
                </div>

                <blockquote className="max-w-3xl text-xl leading-[1.65] tracking-[-0.025em] text-stone-700 sm:text-2xl lg:text-[1.7rem]">
                  “{endorsement.quote}”
                </blockquote>

                <div className="lg:border-l lg:border-stone-300 lg:pl-10">
                  <p className="font-semibold text-stone-950">
                    {endorsement.name}
                  </p>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-stone-500">
                    {endorsement.role}
                  </p>

                  <span className="mt-8 block h-px w-8 bg-cyan-700 transition-all duration-500 group-hover:w-14" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`h-px w-8 ${
          light ? "bg-cyan-400" : "bg-cyan-700"
        }`}
      />

      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${
          light ? "text-cyan-300" : "text-cyan-800"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function CoreValues() {
  const [index, setIndex] = useState(0);
  const total = coreValues.length;

  const goTo = (newIndex) => {
    setIndex(((newIndex % total) + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 5500);

    return () => clearInterval(interval);
  }, [total]);

  const activeValue = coreValues[index];
  const Icon = activeValue.icon;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
      {/* ACTIVE VALUE */}
      <div className="relative min-h-[330px] border-b border-white/10 pb-10 lg:min-h-[390px] lg:border-b-0 lg:border-r lg:pb-0 lg:pr-20">
        <div className="flex items-start justify-between">
          <motion.div
            key={`icon-${activeValue.title}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-stone-950"
          >
            <Icon size={21} strokeWidth={1.7} />
          </motion.div>

          <span className="text-xs tabular-nums text-stone-500">
            {String(index + 1).padStart(2, "0")}
            <span className="mx-2 text-stone-700">/</span>
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <motion.div
          key={activeValue.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="mt-20"
        >
          <h3 className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {activeValue.title}
          </h3>

          <p className="mt-6 max-w-xl text-base leading-8 text-stone-400">
            {activeValue.description}
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 hidden gap-2 lg:flex">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous core value"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-stone-400 transition duration-300 hover:border-white hover:bg-white hover:text-stone-950"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next core value"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-stone-400 transition duration-300 hover:border-white hover:bg-white hover:text-stone-950"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* VALUE NAVIGATION */}
      <div className="flex flex-col justify-center">
        {coreValues.map((value, valueIndex) => {
          const isActive = valueIndex === index;

          return (
            <button
              key={value.title}
              type="button"
              onClick={() => goTo(valueIndex)}
              className="group flex w-full items-center gap-5 border-b border-white/10 py-4 text-left first:pt-0 last:border-b-0"
            >
              <span
                className={`text-[10px] tabular-nums transition-colors ${
                  isActive ? "text-cyan-300" : "text-stone-600"
                }`}
              >
                {String(valueIndex + 1).padStart(2, "0")}
              </span>

              <span
                className={`text-base transition-all duration-300 ${
                  isActive
                    ? "translate-x-2 font-medium text-white"
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
        })}

        <div className="mt-8 flex gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous core value"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-stone-400"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next core value"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-stone-400"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}