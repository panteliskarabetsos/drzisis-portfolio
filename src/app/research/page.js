"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
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
  Brain,
  ExternalLink,
  Heart,
  Microscope,
  Pill,
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

const marqueeItems = [
  "Valvular Heart Disease",
  "Cardiometabolic Health",
  "ECMO & Stroke",
  "Cardiac Imaging",
  "Clinical Trials",
  "Translational Research",
];

const researchTopics = [
  {
    number: "01",
    title: "Valvular Heart Disease",
    shortTitle: "Valvular Disease",
    category: "Cardiac Imaging",
    description:
      "3D-TEE implementation on the anatomic description of mitral valve regurgitation phenotypes.",
    detail:
      "Exploring advanced echocardiographic imaging as a tool for more precise anatomical characterization and improved understanding of mitral valve pathology.",
    image: "/vhd.jpeg",
    icon: Heart,
  },
  {
    number: "02",
    title: "Cardiometabolic Health",
    shortTitle: "Cardiometabolic Health",
    category: "Metabolic Medicine",
    description:
      "Reviewing conventional and novel cardiometabolic drug therapies on MASLD.",
    detail:
      "Investigating the complex relationship between cardiovascular disease, metabolic dysfunction and emerging therapeutic strategies in MASLD.",
    image: "/lab-img.jpg",
    icon: Pill,
  },
  {
    number: "03",
    title: "ECMO & Stroke",
    shortTitle: "ECMO & Stroke",
    category: "Critical Care",
    description:
      "Exploring the role of ECMO in acute ischemic stroke management.",
    detail:
      "Examining neurological complications and clinical challenges associated with extracorporeal life support in critically ill patients.",
    image: "/ECMO.jpg",
    icon: Brain,
  },
];

const publications = [
  {
    title:
      "Linking Cardiovascular Disease and Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD): The Role of Cardiometabolic Drugs in MASLD Treatment",
    journal: "Biomolecules",
    year: "2025",
    type: "Narrative Review",
    link: "https://www.mdpi.com/2218-273X/15/3/324",
  },
  {
    title:
      "Acute Ischemic Stroke during Extracorporeal Membrane Oxygenation (ECMO): A Narrative Review of the Literature",
    journal: "Journal of Clinical Medicine",
    year: "2024",
    type: "Narrative Review",
    link: "https://www.mdpi.com/2077-0383/13/19/6014",
  },
];

const collaborationAreas = [
  {
    number: "01",
    title: "Clinical Research",
    description: "Clinical and observational studies.",
    icon: Heart,
  },
  {
    number: "02",
    title: "Academic Writing",
    description: "Narrative reviews and scientific writing.",
    icon: Pill,
  },
  {
    number: "03",
    title: "Medical Education",
    description: "Teaching and educational projects.",
    icon: Brain,
  },
];

export default function ResearchPage() {
  const [activeTopic, setActiveTopic] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(heroProgress, [0, 1], ["0%", "14%"]);
  const heroContentY = useTransform(heroProgress, [0, 1], ["0px", "60px"]);
  const heroContentOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const selectedTopic = researchTopics[activeTopic];

  return (
  <main className="relative min-h-screen w-full max-w-none overflow-hidden bg-[#f8f8f6] text-stone-950 selection:bg-cyan-100 selection:text-cyan-950">
      <ScrollProgress />

      <Grain />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[92svh] overflow-hidden bg-stone-950"
      >
        <motion.div
          style={
            shouldReduceMotion
              ? undefined
              : { y: heroImageY }
          }
          className="absolute -inset-y-[8%] inset-x-0"
        >
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { scale: 1.1 }
            }
            animate={{ scale: 1.02 }}
            transition={{
              duration: 1.8,
              ease,
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/lab-img.jpg")',
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-stone-950/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/10" />

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
          className="absolute left-[5%] top-[14%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]"
        />

        <div className="relative mx-auto grid min-h-[92svh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:grid-cols-[1fr_0.35fr] lg:pb-24">
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: heroContentY,
                    opacity: heroContentOpacity,
                  }
            }
            className="max-w-5xl"
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
                <span className="h-px w-10 bg-cyan-400" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Research & Publications
                </p>

                <PulseDot dot="bg-cyan-300" ping="bg-cyan-300" />
              </motion.div>

              <h1 className="mt-8 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-white">
                <span className="block overflow-hidden pb-[0.04em]">
                  <motion.span
                    variants={lineReveal}
                    className="block"
                  >
                    Research shaped
                  </motion.span>
                </span>

                <span className="block overflow-hidden pb-[0.04em]">
                  <motion.span
                    variants={lineReveal}
                    className="block text-white/30"
                  >
                    by clinical questions.
                  </motion.span>
                </span>
              </h1>

              <motion.p
                variants={heroItem}
                className="mt-10 max-w-2xl border-l border-white/25 pl-6 text-base leading-8 text-stone-300 sm:text-lg"
              >
                Clinical and translational research focused on cardiovascular
                medicine, metabolic disease and complex challenges in critical
                care.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={heroStagger}
            initial={shouldReduceMotion ? false : "initial"}
            animate="animate"
            className="mt-16 hidden border-l border-white/15 pl-8 lg:block"
          >
            <motion.p
              variants={heroItem}
              className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40"
            >
              Current themes
            </motion.p>

            <div className="mt-7 space-y-5">
              {researchTopics.map((topic) => (
                <motion.p
                  key={topic.title}
                  variants={heroItem}
                  className="text-sm text-white/70"
                >
                  {topic.shortTitle}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        <a
          href="#research-intro"
          aria-label="Explore research"
          className="absolute bottom-7 left-1/2 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white/70 transition duration-300 hover:border-white hover:bg-white hover:text-stone-950 lg:flex"
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

      {/* KINETIC MARQUEE */}
      <Marquee reduceMotion={shouldReduceMotion} />

      {/* RESEARCH INTRODUCTION */}
      <section
        id="research-intro"
        className="px-6 py-24 sm:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24"
          >
            <div>
              <SectionLabel>Research</SectionLabel>

              <h2 className="mt-7 max-w-lg text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                From bedside
                <span className="block text-cyan-800">
                  to evidence.
                </span>
              </h2>
            </div>

            <div className="lg:pt-9">
              <p className="max-w-3xl text-xl leading-[1.6] tracking-[-0.025em] text-stone-700 sm:text-2xl lg:text-[1.7rem]">
                My research interests are shaped by questions that emerge from
                clinical practice and the need to better understand complex
                cardiovascular conditions.
              </p>

              <div className="mt-12 grid gap-8 border-t border-stone-300 pt-9 sm:grid-cols-2 sm:gap-12">
                <p className="text-sm leading-7 text-stone-500">
                  I am particularly interested in cardiovascular imaging,
                  cardiometabolic disease and the intersection between critical
                  illness and neurological outcomes.
                </p>

                <p className="text-sm leading-7 text-stone-500">
                  My goal is to contribute to research that connects scientific
                  evidence with meaningful clinical decisions and improved
                  patient care.
                </p>
              </div>
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
            className="mt-24 grid border-y border-stone-300 sm:grid-cols-3 lg:mt-32"
          >
            <ResearchStat
              value={3}
              label="Core research themes"
            />

            <ResearchStat
              value={publications.length}
              label="Peer-reviewed publications"
            />

            <ResearchStat
              value="Clinical"
              label="Research perspective"
              compact
            />
          </motion.div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="relative overflow-hidden bg-[#11110f] px-6 py-24 text-white sm:px-10 lg:py-36">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-[160px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"
          >
            <SectionLabel light>Research Areas</SectionLabel>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Areas I am
                <span className="block text-stone-500">
                  currently exploring.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-stone-400">
                Research themes connected by a common interest in improving
                cardiovascular understanding and clinical decision-making.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="mt-20 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16"
          >
            {/* RESEARCH INDEX */}
            <div className="border-t border-white/10">
              {researchTopics.map((topic, index) => {
                const Icon = topic.icon;
                const isActive = index === activeTopic;

                return (
                  <button
                    key={topic.title}
                    type="button"
                    onClick={() => setActiveTopic(index)}
                    onMouseEnter={() => setActiveTopic(index)}
                    onFocus={() => setActiveTopic(index)}
                    className="group w-full border-b border-white/10 py-7 text-left sm:py-9"
                  >
                    <div className="grid grid-cols-[36px_1fr_auto] items-center gap-4 sm:grid-cols-[52px_1fr_auto]">
                      <span
                        className={`text-[10px] font-medium tabular-nums transition-colors duration-300 ${
                          isActive
                            ? "text-cyan-300"
                            : "text-stone-600"
                        }`}
                      >
                        {topic.number}
                      </span>

                      <div>
                        <p
                          className={`text-[9px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${
                            isActive
                              ? "text-cyan-300"
                              : "text-stone-600"
                          }`}
                        >
                          {topic.category}
                        </p>

                        <h3
                          className={`mt-2 text-xl font-medium tracking-[-0.035em] transition-all duration-500 sm:text-2xl ${
                            isActive
                              ? "translate-x-2 text-white"
                              : "text-stone-500 group-hover:translate-x-1 group-hover:text-stone-300"
                          }`}
                        >
                          {topic.title}
                        </h3>
                      </div>

                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                          isActive
                            ? "rotate-45 border-cyan-400 bg-cyan-400 text-stone-950"
                            : "border-white/15 text-stone-500 group-hover:border-white/30 group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <div
                      className={`grid transition-all duration-500 ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="ml-[36px] mt-5 max-w-lg text-sm leading-7 text-stone-400 sm:ml-[52px]">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* TOPIC VISUAL */}
            <div className="relative min-h-[500px] overflow-hidden sm:min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTopic.image}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.65,
                    ease,
                  }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${selectedTopic.image}")`,
                  }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              <div className="absolute inset-0 border border-white/10" />

              <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={selectedTopic.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md"
                  >
                    <selectedTopic.icon
                      size={19}
                      strokeWidth={1.7}
                    />
                  </motion.span>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTopic.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.5,
                    ease,
                  }}
                  className="absolute bottom-0 left-0 right-0 p-7 sm:p-10"
                >
                  <div className="border-t border-white/25 pt-7">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                      {selectedTopic.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                      {selectedTopic.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-stone-300">
                      {selectedTopic.detail}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section
        id="publications"
        className="bg-white px-6 py-24 sm:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"
          >
            <SectionLabel>Publications</SectionLabel>

            <div>
              <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Selected
                <span className="block text-stone-400">
                  publications.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-stone-500">
                Peer-reviewed academic work across cardiometabolic medicine and
                neurological complications of extracorporeal life support.
              </p>
            </div>
          </motion.div>

          <div className="mt-20 border-t border-stone-300">
            {publications.map((publication, index) => (
              <motion.article
                key={publication.title}
                {...fadeUp}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
                className="group grid gap-8 border-b border-stone-300 py-10 transition-colors duration-500 hover:bg-stone-50/60 sm:py-12 lg:grid-cols-[90px_1fr_200px] lg:items-center lg:gap-14 lg:py-16"
              >
                <div className="flex items-center justify-between lg:block">
                  <span className="text-xs tabular-nums text-stone-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs font-medium text-stone-400 lg:mt-10 lg:block">
                    {publication.year}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-800">
                      {publication.journal}
                    </p>

                    <span className="h-1 w-1 rounded-full bg-stone-300" />

                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                      {publication.type}
                    </p>
                  </div>

                  <h3 className="mt-5 max-w-4xl text-xl font-medium leading-[1.55] tracking-[-0.025em] text-stone-700 transition-colors duration-300 group-hover:text-stone-950 sm:text-2xl">
                    {publication.title}
                  </h3>
                </div>

                <div className="lg:flex lg:justify-end">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-5 text-sm font-semibold text-stone-950"
                  >
                    View publication

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-cyan-800 transition duration-500 group-hover/link:rotate-45 group-hover/link:border-cyan-800 group-hover/link:bg-cyan-800 group-hover/link:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="mt-8 flex items-center gap-3"
          >
            <ExternalLink
              size={14}
              className="text-stone-400"
            />

            <p className="text-xs text-stone-400">
              Links open on the respective journal website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH DIRECTION */}
      <section className="border-y border-stone-300 px-6 py-24 sm:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]"
          >
            <div>
              <SectionLabel>Perspective</SectionLabel>
            </div>

            <div>
              <Microscope
                size={36}
                strokeWidth={1.3}
                className="text-cyan-800"
              />

              <p className="mt-10 max-w-5xl text-3xl font-medium leading-[1.4] tracking-[-0.045em] text-stone-800 sm:text-4xl lg:text-[3.2rem]">
                “Research becomes meaningful when clinical questions are
                translated into evidence that can{" "}
                <span className="text-stone-400">
                  improve the way we understand and care for patients.
                </span>
                ”
              </p>

              <div className="mt-12 flex items-center gap-4">
                <span className="h-px w-10 bg-cyan-800" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-stone-500">
                  Research perspective
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COLLABORATION CTA */}
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

          <div className="relative grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-cyan-200">
                Research Collaboration
              </p>

              <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem]">
               Let&apos;s collaborate

              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-cyan-100/75">
                I am open to collaborating with clinicians, researchers and
                students on projects aiming to improve cardiovascular care,
                scientific understanding and medical education.
              </p>
            </div>

            <div className="lg:border-l lg:border-white/15 lg:pl-12">
              <div className="border-t border-white/15 lg:border-t-0">
                {collaborationAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <div
                      key={area.title}
                      className="group grid grid-cols-[32px_42px_1fr] items-center gap-4 border-b border-white/15 py-6"
                    >
                      <span className="text-[9px] tabular-nums text-cyan-200/50">
                        {area.number}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-cyan-200 transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-cyan-800">
                        <Icon
                          size={16}
                          strokeWidth={1.7}
                        />
                      </span>

                      <div>
                        <p className="text-sm font-medium text-white">
                          {area.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-cyan-100/60">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="/contact"
                className="group mt-10 inline-flex h-14 items-center gap-8 rounded-full bg-white pl-7 pr-2 text-sm font-semibold text-stone-950 transition duration-500 hover:bg-cyan-50"
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

function ResearchStat({
  value,
  label,
  compact = false,
}) {
  const isNumber = typeof value === "number";

  return (
    <div className="border-b border-stone-300 py-9 last:border-b-0 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0 lg:px-12 lg:py-10">
      <p
        className={`font-semibold tracking-[-0.055em] text-stone-950 tabular-nums ${
          compact
            ? "text-3xl sm:text-4xl lg:text-5xl"
            : "text-5xl lg:text-6xl"
        }`}
      >
        {isNumber ? (
          <CountUp
            value={value}
            format={(v) => String(Math.round(v)).padStart(2, "0")}
          />
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
