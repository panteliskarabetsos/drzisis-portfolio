"use client";

import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import {
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

const patientCare = [
  {
    number: "01",
    title: "Meeting the Person First",
    description:
      "Taking time to understand each patient's story, concerns and goals, not just their symptoms. Building trust from the very first encounter.",
    icon: UsersIcon,
  },
  {
    number: "02",
    title: "Thoughtful, Evidence-Based Decisions",
    description:
      "Combining up-to-date guidelines with clinical judgment, while clearly explaining options so decisions are genuinely shared with patients.",
    icon: CheckCircleIcon,
  },
  {
    number: "03",
    title: "Clear Communication & Continuity",
    description:
      "Using clear, jargon-free language, aligning plans with the patient's life and emphasizing follow-up to support long-term heart health.",
    icon: LightBulbIcon,
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
  return (
    <main className="overflow-hidden bg-[#f8f8f6] text-stone-950 selection:bg-cyan-100 selection:text-cyan-950">
      {/* HERO */}
      <section className="relative min-h-[78svh] overflow-hidden bg-stone-950">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.6,
            ease,
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/about-img.jpg")',
          }}
        />

        <div className="absolute inset-0 bg-stone-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/55 to-stone-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />

        <div
          aria-hidden="true"
          className="absolute left-[5%] top-[15%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]"
        />

        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease,
            }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-cyan-400" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                About Dr. Marios Zisis
              </p>
            </div>

            <h1 className="mt-8 max-w-4xl text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
              A journey toward
              <span className="block text-white/35">cardiac care.</span>
            </h1>

            <p className="mt-9 max-w-2xl border-l border-white/25 pl-6 text-base leading-8 text-stone-300 sm:text-lg">
              From the first day of medical school to a dedicated future in
              cardiology, my path has been guided by curiosity, compassion and
              evidence-based medicine.
            </p>
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
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 sm:px-10 lg:py-36">
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
          <div className="relative">
            {/* vertical line */}
            <div className="absolute bottom-0 left-[23px] top-0 w-px bg-stone-200 sm:left-[27px]" />

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
                              <span className="rounded-full bg-cyan-50 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-800">
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
        </div>
      </div>
    </section>

      {/* PATIENT CARE */}
      <section className="relative overflow-hidden bg-[#11110f] px-6 py-24 text-white sm:px-10 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-[480px] w-[480px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-600/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <SectionLabel light>Patient Care</SectionLabel>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Approach to
                <span className="block text-stone-500">patient care.</span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-stone-400">
                How I aim to show up for patients in everyday clinical
                practice—beyond diagnoses and test results.
              </p>
            </div>
          </motion.div>

          <div className="mt-20 grid border-t border-white/10 md:grid-cols-3">
            {patientCare.map((item, index) => {
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
                  className="group relative border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-12"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tabular-nums text-stone-600">
                      {item.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cyan-300 transition duration-500 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-stone-950">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-16 max-w-xs text-2xl font-medium tracking-[-0.035em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-stone-400">
                    {item.description}
                  </p>

                  <div className="mt-10 h-px w-8 bg-cyan-400 transition-all duration-500 group-hover:w-16" />
                </motion.article>
              );
            })}
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
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-40 h-[500px] w-[500px] rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-cyan-200">
                Contact
              </p>

              <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem]">
                Let's connect and
                <span className="block text-cyan-200/55">
                  exchange ideas.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-cyan-100/75">
                If you're interested in collaborating, discussing research
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