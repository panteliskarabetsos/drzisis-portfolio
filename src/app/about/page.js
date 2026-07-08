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
  BadgeCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Quote,
  Stethoscope,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.7,
    ease,
  },
};

const heroStagger = {
  animate: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
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

const quickFacts = [
  {
    value: 2019,
    format: (v) => String(Math.round(v)),
    label: "In medicine since",
  },
  {
    value: 5,
    format: (v) => String(Math.round(v)).padStart(2, "0"),
    label: "Career milestones",
  },
  {
    value: 2,
    format: (v) => String(Math.round(v)).padStart(2, "0"),
    label: "Peer-reviewed publications",
  },
  {
    value: "Athens",
    format: null,
    label: "Based in Greece",
  },
];

const timeline = [
  {
    year: "Oct 2025 — Present",
    title: "MSc in Clinical Trials",
    description:
      'Currently pursuing the MSc "Clinical Trials: Design and Conduct" at the Medical School of the National and Kapodistrian University of Athens, with expected graduation in November 2026.',
    icon: FlaskConical,
    current: true,
  },
  {
    year: "2025",
    title: "Medical School Graduation",
    description:
      "Graduated from medical school and continued developing my clinical and academic path towards advanced cardiovascular care.",
    icon: BadgeCheck,
  },
  {
    year: "2023",
    title: "Starting Medical Research",
    description:
      "Focusing on mitral valve disease, extracorporeal membrane oxygenation (ECMO) and MASLD.",
    icon: FlaskConical,
  },
  {
    year: "2022",
    title: "Starting Clinical Rotations",
    description:
      "Gained hands-on experience treating patients in multiple specialties, including cardiology and internal medicine.",
    icon: Stethoscope,
  },
  {
    year: "2019",
    title: "Medical School Begins",
    description:
      "Entered Athens School of Medicine with a vision to provide holistic, evidence-based and patient-centered medical care.",
    icon: GraduationCap,
  },
];

const endorsements = [
  {
    name: "Dr. Alexandros Briasoulis",
    role: "Assistant Professor, National and Kapodistrian University of Athens & University of Iowa",
    quote:
      "Marios Zisis demonstrates exceptional dedication, medical knowledge and initiative. He consistently excels in clinical skills, diagnosis and teamwork. His positive attitude and collaborative spirit make him a valued team member.",
  },
  {
    name: "Dr. Andreas Goules",
    role: "Assistant Professor, University of Athens",
    quote:
      "Marios stood out during his clinical training for his enthusiasm, meticulous work and strong clinical reasoning. Highly respected by colleagues for his collaborative spirit and clarity of thought. I recommend him without reservation.",
  },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(heroProgress, [0, 1], ["0%", "14%"]);
  const heroContentY = useTransform(heroProgress, [0, 1], ["0px", "60px"]);
  const heroContentOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative overflow-hidden bg-[#f8f8f6] text-stone-950 selection:bg-cyan-100 selection:text-cyan-950">
      <ScrollProgress />

      <Grain />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[78svh] overflow-hidden bg-stone-950"
      >
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
                : { scale: 1.08 }
            }
            animate={{ scale: 1.02 }}
            transition={{
              duration: 1.8,
              ease,
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/about-img.jpg")',
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-stone-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/55 to-stone-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />

        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[15%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]"
        />

        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:pb-24">
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: heroContentY,
                    opacity: heroContentOpacity,
                  }
            }
            className="max-w-4xl"
          >
            <motion.div
              variants={heroStagger}
              initial={shouldReduceMotion ? false : "initial"}
              animate="animate"
            >
              <motion.div
                variants={heroItem}
                className="flex items-center gap-4"
              >
             
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  About Dr. Marios Zisis
                </p>

                <PulseDot dot="bg-cyan-300" ping="bg-cyan-300" />
              </motion.div>

              <h1 className="mt-8 max-w-4xl text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
                <span className="block overflow-hidden pb-[0.04em]">
                  <motion.span
                    variants={lineReveal}
                    className="block"
                  >
                    A journey toward
                  </motion.span>
                </span>

                <span className="block overflow-hidden pb-[0.04em]">
                  <motion.span
                    variants={lineReveal}
                    className="block text-white/35"
                  >
                    cardiac care.
                  </motion.span>
                </span>
              </h1>

              <motion.p
                variants={heroItem}
                className="mt-9 max-w-2xl border-l border-white/25 pl-6 text-base leading-8 text-stone-300 sm:text-lg"
              >
                From the first day of medical school to a dedicated future in
                cardiology, my path has been guided by curiosity, compassion and
                evidence-based medicine.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-7 right-6 hidden text-right sm:right-10 lg:block">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
            Medicine
          </p>
          <p className="mt-2 text-sm text-white/75">
            Athens · Cardiology · Research
          </p>
        </div>

        {/* SCROLL CUE */}
        <a
          href="#intro"
          aria-label="Scroll to introduction"
          className="absolute bottom-7 left-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white/70 transition duration-300 hover:border-white hover:bg-white hover:text-stone-950 lg:flex"
        >
          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, 4, 0] }
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

      {/* INTRO */}
      <section id="intro" className="px-6 py-24 sm:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
          >
            <div>
              <SectionLabel>My Path</SectionLabel>

              <h2 className="mt-7 max-w-lg text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Shaped by
                <span className="block text-cyan-800">
                  curiosity and care.
                </span>
              </h2>
            </div>

            <div className="lg:pt-9">
              <p className="max-w-3xl text-xl leading-[1.6] tracking-[-0.025em] text-stone-700 sm:text-2xl lg:text-[1.7rem]">
                My medical training has strengthened my interest in
                cardiovascular medicine and the connection between scientific
                evidence, careful clinical reasoning and meaningful patient
                relationships.
              </p>

              <div className="mt-12 grid gap-8 border-t border-stone-300 pt-9 sm:grid-cols-2 sm:gap-12">
                <p className="text-sm leading-7 text-stone-500">
                  Clinical rotations provided exposure to a broad range of
                  specialties and reinforced the importance of understanding
                  each patient beyond a single diagnosis.
                </p>

                <p className="text-sm leading-7 text-stone-500">
                  Research has further encouraged me to question established
                  practices, examine emerging evidence and continuously develop
                  my clinical thinking.
                </p>
              </div>
            </div>
          </motion.div>

          {/* QUICK FACTS */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="mt-20 grid border-y border-stone-300 sm:mt-28 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4"
          >
            {quickFacts.map((fact) => (
              <Stat
                key={fact.label}
                value={fact.value}
                format={fact.format}
                label={fact.label}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* JOURNEY */}
    <section className="border-y border-stone-300 bg-white px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.55fr_1fr] lg:gap-24">
          {/* LEFT */}
          <motion.div
            {...fadeUp}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <SectionLabel>Journey</SectionLabel>

            <h2 className="mt-7 max-w-md text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
              Journey in
              <span className="block text-stone-400">medicine.</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-stone-500">
              A chronology of the clinical, academic and research experiences that
              continue to shape my path towards cardiology.
            </p>


          </motion.div>

          {/* TIMELINE */}
          <Timeline shouldReduceMotion={shouldReduceMotion} />
        </div>
      </div>
    </section>

      {/* ENDORSEMENTS */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:py-36">
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

      {/* RESUME */}
      <section className="border-t border-stone-300 px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end"
          >
            <div>
              <SectionLabel>Curriculum Vitae</SectionLabel>

              <h2 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Academic, clinical
                <span className="block text-stone-400">
                  and research experience.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-md text-sm leading-7 text-stone-500">
                View a comprehensive overview of my academic journey, clinical
                training and research experience.
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex h-14 items-center gap-8 rounded-full bg-stone-950 pl-7 pr-2 text-sm font-medium text-white transition duration-500 hover:bg-cyan-800"
              >
                View Resume
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-950 transition-transform duration-500 group-hover:rotate-45">
                  <FileText size={17} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
    <section className="w-full bg-cyan-800">
      <motion.div
        {...fadeUp}
        className="relative w-full overflow-hidden bg-cyan-800 px-6 py-20 text-white sm:px-10 lg:px-20 lg:py-24"
      >
        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: 360 }
          }
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-20 -top-40 h-[500px] w-[500px] rounded-full border border-white/10"
        />

        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: -360 }
          }
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-cyan-200">
                Contact
              </p>

              <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem]">
               Let&apos;s connect and
                <span className="block text-cyan-200/55">
                  exchange ideas.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-cyan-100/75">
              If you&apos;re interested in collaborating, discussing research
              initiatives, or sharing insights on patient care, I would be glad
              to hear from you.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex h-14 w-fit items-center gap-8 rounded-full bg-white pl-7 pr-2 text-sm font-semibold text-stone-950 transition duration-500 hover:bg-cyan-50"
            >
              Contact Me

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 text-white transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
    </main>
  );
}

function Timeline({ shouldReduceMotion }) {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 55%"],
  });

  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <div ref={timelineRef} className="relative">
      {/* base line */}
      <div className="absolute bottom-0 left-[23px] top-0 w-px bg-stone-200 sm:left-[27px]" />

      {/* animated progress line */}
      <motion.div
        aria-hidden="true"
        style={
          shouldReduceMotion
            ? { scaleY: 1 }
            : { scaleY: lineScaleY }
        }
        className="absolute bottom-0 left-[23px] top-0 w-px origin-top bg-gradient-to-b from-cyan-600 via-cyan-500 to-cyan-400 sm:left-[27px]"
      />

      <div>
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease,
              }}
              className="group relative grid grid-cols-[48px_1fr] gap-6 border-b border-stone-200 py-10 first:pt-0 sm:grid-cols-[56px_1fr] sm:gap-8 lg:py-14"
            >
              {/* MARKER */}
              <div className="relative z-10">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border bg-white transition-all duration-500 sm:h-14 sm:w-14 ${
                   item.current
                      ? "border-cyan-700 bg-cyan-700 text-white"
                      : "border-stone-300 text-cyan-800 group-hover:border-cyan-700 group-hover:bg-cyan-700 group-hover:text-white"
                  }`}
                >
                  <Icon size={19} strokeWidth={1.7} />
                </span>
              </div>

              {/* CONTENT */}
              <div className="relative min-w-0">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-sm font-semibold tabular-nums ${
                        item.current
                            ? "text-cyan-800"
                            : "text-stone-400"
                        }`}
                      >
                        {item.year}
                      </span>

                      {item.current && (
                        <span className="flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-800">
                          <PulseDot dot="bg-cyan-600" ping="bg-cyan-500" />
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 max-w-xl text-2xl font-medium tracking-[-0.035em] text-stone-950 sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>

                  <span className="hidden text-[11px] font-medium tabular-nums text-stone-300 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-stone-500">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span
                    className={`h-px transition-all duration-500 ${
                      item.current
                        ? "w-12 bg-cyan-700"
                        : "w-7 bg-stone-300 group-hover:w-12 group-hover:bg-cyan-700"
                    }`}
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                    {item.current ? "Present direction" : "Milestone"}
                  </span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
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

function Stat({ value, format, label }) {
  const isNumber = typeof value === "number" && format;

  return (
    <div className="border-b border-stone-300 py-9 last:border-b-0 sm:border-b-0 sm:px-8 sm:first:pl-0 lg:border-r lg:px-10 lg:py-10 lg:first:pl-0 lg:last:border-r-0">
      <p className="text-4xl font-semibold tracking-[-0.055em] text-stone-950 tabular-nums sm:text-5xl lg:text-6xl">
        {isNumber ? (
          <CountUp value={value} format={format} />
        ) : (
          value
        )}
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
