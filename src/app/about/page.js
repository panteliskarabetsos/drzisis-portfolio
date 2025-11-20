"use client";

import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import {
  GraduationCap,
  Stethoscope,
  FlaskConical,
  BadgeCheck,
  Quote,
  FileText,
} from "lucide-react";

export default function AboutPage() {
  const timeline = [
    {
      year: "2019",
      title: "Medical School Begins",
      description:
        "Entered Athens School of Medicine with a vision to provide holistic, evidence-based and patient-centered medical care.",
      icon: <GraduationCap className="w-8 h-8 text-cyan-500" />,
    },
    {
      year: "2022",
      title: "Starting Clinical Rotations",
      description:
        "Gained hands-on experience treating patients in multiple specialties, including cardiology and internal medicine.",
      icon: <Stethoscope className="w-8 h-8 text-rose-500" />,
    },
    {
      year: "2023",
      title: "Starting Medical Research",
      description:
        "Focusing on mitral valve disease, extracorporeal membrane oxygenation (ECMO) and MASLD.",
      icon: <FlaskConical className="w-8 h-8 text-amber-500" />,
    },
    {
      year: "2025",
      title: "Graduation & Beyond",
      description:
        "Now seeking to specialize in advanced cardiac care, continuing my passion for patient-centered medicine.",
      icon: <BadgeCheck className="w-8 h-8 text-emerald-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-100 via-white to-stone-50 text-stone-900">
      {/* HERO SECTION – minimal + background image */}
      <section className="relative overflow-hidden min-h-[65vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pb-24">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/about-img.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />
        </div>

        {/* Subtle ambient shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-14 h-52 w-52 rounded-full bg-rose-400/25 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-[0.16em] uppercase text-cyan-50 backdrop-blur">
              About • Dr. Marios Zisis
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              A Journey Toward{" "}
              <span className="text-cyan-300">Cardiac Care</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              From the first day of medical school to a dedicated future in
              cardiology, my path has been guided by curiosity, compassion and
              evidence-based medicine.
            </p>

            <div className="mt-8 flex justify-center">
              <span className="h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Journey in Medicine
            </h2>
            <p className="mt-3 text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Milestones that shaped my path towards cardiology, research and
              patient-centered clinical practice.
            </p>
          </div>

          <div className="relative">
            {/* vertical line desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-cyan-300 to-emerald-300" />

            <div className="flex flex-col space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  viewport={{ once: true, margin: "-120px" }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* mobile layout */}
                  <div className="flex flex-col items-center text-center md:hidden space-y-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-cyan-400 shadow-md">
                      {item.icon}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-semibold text-cyan-700">
                      {item.title}
                    </h4>
                    <p className="text-stone-600 text-sm max-w-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* desktop alternating */}
                  {index % 2 === 0 ? (
                    <>
                      {/* left column */}
                      <div className="hidden md:flex w-1/2 justify-end pr-10 text-right">
                        <div className="max-w-xs">
                          <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                            {item.year}
                          </span>
                          <h4 className="mt-3 text-lg font-semibold text-cyan-700">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* center icon */}
                      <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-cyan-400 shadow-md z-10">
                        {item.icon}
                      </div>

                      {/* right spacer */}
                      <div className="hidden md:flex w-1/2" />
                    </>
                  ) : (
                    <>
                      {/* left spacer */}
                      <div className="hidden md:flex w-1/2" />

                      {/* center icon */}
                      <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-cyan-400 shadow-md z-10">
                        {item.icon}
                      </div>

                      {/* right column */}
                      <div className="hidden md:flex w-1/2 justify-start pl-10 text-left">
                        <div className="max-w-xs">
                          <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                            {item.year}
                          </span>
                          <h4 className="mt-3 text-lg font-semibold text-cyan-700">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH TO PATIENT CARE (replaces Core Values) */}
      <section className="bg-gradient-to-b from-stone-50 via-white to-stone-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
              Approach to Patient Care
            </h2>
            <p className="mt-3 text-stone-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              How I aim to show up for patients in everyday clinical practice —
              beyond diagnoses and test results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1: First encounter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-2xl bg-white/90 p-8 text-center shadow-md ring-1 ring-stone-200 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-cyan-100/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50">
                  <UsersIcon className="h-6 w-6 text-cyan-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  Meeting the Person First
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Taking time to understand each patient&apos;s story, concerns
                  and goals, not just their symptoms. Building trust from the
                  very first encounter.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Decision-making */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-2xl bg-white/90 p-8 text-center shadow-md ring-1 ring-stone-200 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-cyan-100/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-stone-100">
                  <CheckCircleIcon className="h-6 w-6 text-cyan-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  Thoughtful, Evidence Based Decisions
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Combining up-to-date guidelines with clinical judgment, while
                  clearly explaining options so that decisions are truly shared
                  with patients.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Communication & continuity */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.16 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-2xl bg-white/90 p-8 text-center shadow-md ring-1 ring-stone-200 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-cyan-100/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-stone-100">
                  <LightBulbIcon className="h-6 w-6 text-cyan-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  Clear Communication & Continuity
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Using clear, jargon-free language, aligning plans with the
                  patient&apos;s life and emphasizing follow-up to support
                  long-term heart health.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
              What Others Say
            </h2>
            <p className="mt-3 text-stone-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Reflections from mentors and colleagues on my clinical dedication,
              mindset and approach to patient care.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                name: "— Dr. Alexandros Briasoulis",
                role: "Assistant Professor, National and Kapodistrian University of Athens & University of Iowa",
                quote:
                  "Marios Zisis demonstrates exceptional dedication, medical knowledge and initiative. He consistently excels in clinical skills, diagnosis and teamwork. His positive attitude and collaborative spirit make him a valued team member.",
              },
              {
                name: "— Dr. Andreas Goules",
                role: "Assistant Professor, University of Athens",
                quote:
                  "Marios stood out during his clinical training for his enthusiasm, meticulous work and strong clinical reasoning. Highly respected by colleagues for his collaborative spirit and clarity of thought. I recommend him without reservation.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="relative overflow-hidden rounded-3xl bg-white/95 p-8 text-left shadow-md ring-1 ring-stone-200 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-50 via-transparent to-emerald-50 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                    <Quote className="mr-2 h-3 w-3" />
                    Mentor Endorsement
                  </div>
                  <p className="text-stone-700 italic mb-6 leading-relaxed">
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="border-t border-stone-200 pt-4">
                    <h4 className="font-semibold text-stone-900">
                      {item.name}
                    </h4>
                    <p className="text-sm text-cyan-700 mt-1">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4">
            See My Resume
          </h2>
          <p className="text-stone-600 mb-8 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            For a comprehensive overview of my academic journey, clinical
            training and research experience, you can view my full resume.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-cyan-600/30 transition hover:bg-cyan-700"
          >
            <FileText className="h-5 w-5" />
            View Resume (PDF)
          </a>
        </div>
      </section>

      {/* CTA - CONTACT */}
      <section className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-500 text-white py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Let&apos;s Connect
          </h2>
          <p className="text-base sm:text-lg mt-3 max-w-xl mx-auto text-cyan-50 leading-relaxed">
            If you&apos;re interested in collaborating, discussing research
            initiatives, or sharing insights on patient care, I would be glad to
            hear from you.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm sm:text-base font-semibold text-cyan-700 shadow-md transition hover:bg-stone-50"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
