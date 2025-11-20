"use client";

import { useState } from "react";
import { Brain, Pill, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const researchTopics = [
  {
    icon: <Heart size={36} className="text-cyan-600" />,
    title: "Valvular Heart Disease",
    description:
      "3D-TEE implementation on the anatomic description of mitral valve regurgitation phenotypes.",
    background: "/vhd.jpeg",
  },
  {
    icon: <Pill size={36} className="text-cyan-600" />,
    title: "Cardiometabolic Health",
    description:
      "Reviewing conventional and novel cardiometabolic drug therapies on MASLD.",
    background: "/lab-img.jpg",
  },
  {
    icon: <Brain size={36} className="text-cyan-600" />,
    title: "ECMO & Stroke",
    description:
      "Exploring the role of ECMO in acute ischemic stroke management.",
    background: "/ECMO.jpg",
  },
];

const publications = [
  {
    title:
      "Linking Cardiovascular Disease and Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD): The Role of Cardiometabolic Drugs in MASLD Treatment",
    journal: "Biomolecules",
    year: "2025",
    link: "https://www.mdpi.com/2218-273X/15/3/324",
  },
  {
    title:
      "Acute Ischemic Stroke during Extracorporeal Membrane Oxygenation (ECMO): A Narrative Review of the Literature",
    journal: "Journal of Clinical Medicine",
    year: "2024",
    link: "https://www.mdpi.com/2077-0383/13/19/6014",
  },
];

export default function ResearchPage() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  return (
    <main className="bg-white text-stone-800 min-h-screen">
      {/* HERO SECTION (unchanged) */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/lab-img.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />
        </div>

        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-emerald-400/25 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-[0.16em] uppercase text-cyan-50 backdrop-blur"
          >
            Research & Publications
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Advancing{" "}
            <span className="text-cyan-300">Cardiovascular Medicine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
          >
            Clinical and translational research focused on valvular disease,
            cardiometabolic health and life-saving interventions in critical
            care.
          </motion.p>
        </div>
      </section>

      {/* RESEARCH INTRO */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
              Exploring New Frontiers in Cardiology
            </h2>
            <p className="text-stone-600 mb-4 text-sm sm:text-lg leading-relaxed">
              My research aims to bridge everyday clinical practice with
              emerging evidence — focusing on better diagnostics, smarter
              therapies and improved outcomes for patients with cardiovascular
              disease.
            </p>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
              Current themes include valvular heart disease, cardiometabolic
              risk and advanced circulatory support in critically ill patients.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium text-stone-700">
                Valvular heart disease
              </span>
              <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium text-stone-700">
                Cardiometabolic health
              </span>
              <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium text-stone-700">
                ECMO & neurovascular outcomes
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-white shadow-md ring-1 ring-stone-200 p-6 sm:p-7">
            <h3 className="text-sm font-semibold text-stone-900 mb-3">
              At a glance
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center justify-between">
                <span>Core research themes</span>
                <span className="font-semibold text-stone-900">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Peer-reviewed publications</span>
                <span className="font-semibold text-stone-900">
                  {publications.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Focus</span>
                <span className="font-semibold text-stone-900">
                  Clinical & translational
                </span>
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-stone-50 px-4 py-3 text-[11px] sm:text-xs text-stone-600 leading-relaxed">
              I&apos;m particularly interested in questions that arise directly
              at the bedside and can be translated into meaningful changes in
              patient care.
            </div>
          </div>
        </div>
      </section>

      {/* MAIN RESEARCH TOPICS */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : "none",
            opacity: backgroundImage ? 0.22 : 0,
            transform: backgroundImage ? "scale(1.05)" : "scale(1)",
            filter: backgroundImage ? "blur(2px) brightness(0.9)" : "none",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3"
            >
              Main Research Topics
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed"
            >
              Themes that currently guide my academic work, each grounded in
              daily clinical questions and long-term cardiovascular outcomes.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
            {researchTopics.map((topic, index) => (
              <ResearchCard
                key={topic.title}
                icon={topic.icon}
                title={topic.title}
                description={topic.description}
                onHover={() => setBackgroundImage(topic.background)}
                onLeave={() => setBackgroundImage(null)}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH PUBLICATION */}
      <section
        id="publications"
        className="relative bg-stone-50 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Research Publications
            </h2>
            <p className="mt-3 text-stone-600 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
              Selected peer-reviewed articles in cardiometabolic medicine and
              critical care neurology.
            </p>
          </div>

          <ol className="space-y-10 max-w-4xl mx-auto list-none">
            {publications.map((pub, index) => (
              <motion.li
                key={pub.title}
                className="group relative bg-white p-8 sm:p-10 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-cyan-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
              >
                {/* Number badge */}
                <div className="absolute -top-4 left-6">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-xs font-semibold text-white shadow-md">
                    {index + 1}
                  </div>
                </div>

                <div className="mt-2 flex flex-col gap-3">
                  <h3 className="text-lg sm:text-2xl font-semibold text-stone-900 leading-snug group-hover:text-cyan-800 transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-stone-500">
                    <span className="font-medium">{pub.journal}</span>,{" "}
                    {pub.year}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="inline-flex items-center rounded-full bg-stone-50 px-3 py-1 text-[11px] font-medium text-stone-600">
                    Indexed journal
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center font-medium text-cyan-600 transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 group-hover:after:w-full group-focus:after:w-full">
                      View Publication
                    </span>
                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-focus:translate-x-1"
                    />
                  </a>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* COLLABORATION SECTION*/}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white/5 border border-white/15 px-6 sm:px-10 py-10 sm:py-12 shadow-lg backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center">
              Interested in Research Collaboration?
            </h2>
            <p className="text-sm sm:text-lg mb-8 max-w-2xl mx-auto text-cyan-50 leading-relaxed text-center">
              I&apos;m open to collaborating with clinicians, researchers and
              students on projects that aim to improve cardiovascular
              care-whether through data-driven studies, narrative reviews or
              educational initiatives.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Heart className="h-4 w-4" />
                </div>
                <p>Clinical & observational studies</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Pill className="h-4 w-4" />
                </div>
                <p>Academic writing & reviews</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Brain className="h-4 w-4" />
                </div>
                <p>Teaching & educational projects</p>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm sm:text-base font-semibold text-cyan-700 shadow-md transition hover:bg-stone-50"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTS */

function ResearchCard({
  icon,
  title,
  description,
  onHover,
  onLeave,
  delay = 0,
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl bg-white/95 p-7 sm:p-8 text-left shadow-md ring-1 ring-stone-200 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-50 via-transparent to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
              {icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">
                Research Theme
              </h3>
              <p className="text-base sm:text-lg font-semibold text-stone-900">
                {title}
              </p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-stone-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
