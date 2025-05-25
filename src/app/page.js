"use client";
// At the top of page.js
import {
  AcademicCapIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  PuzzleIcon,
  HeartIcon,
  BeakerIcon,
  UserGroupIcon,
  BarChartIcon,
  NewspaperIcon,
  SunIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Puzzle, Sun, Users, FlaskConical, BarChart3, MessageSquare,Leaf,Quote, ChevronDown, ChevronLeft , ChevronRight } from "lucide-react";


export default function HomePage() {
  return (
    <main className="bg-white text-stone-800 min-h-screen">

                  {/*  HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-white via-stone-100 to-white lg:bg-none">
              {/* Background Image */}
              <div
                className="absolute inset-0 hidden lg:block w-1/2 bg-cover bg-center"
                style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
              >
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Mobile Background Image */}
              <div
                className="absolute inset-0 block lg:hidden bg-cover bg-center"
                style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-12 max-w-2xl ml-0 lg:ml-auto lg:w-1/2 animate-fadeIn">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white lg:text-stone-900 mb-4 sm:mb-6 leading-tight drop-shadow-md">
                  Dr. Marios Zisis
                </h1>
                <p className="text-base sm:text-lg text-stone-200 lg:text-stone-600 mb-8 max-w-lg leading-relaxed">
                  Aspiring Cardiologist • Driven by{" "}
                  <span className="text-cyan-400 lg:text-cyan-600 font-semibold">
                    Compassion
                  </span>{" "}
                </p>
                <a
                  href="/about"
                  className="inline-block rounded-full bg-cyan-600 text-white font-semibold text-base sm:text-lg px-8 py-3 hover:bg-cyan-700 hover:shadow-xl transition-all duration-300 animate-bounceIn"
                >
                  Learn More
                </a>
              </div>

              {/* Chevron Icon */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <ChevronDown size={32} className="text-cyan-400 lg:text-cyan-600" />
              </div>
            </section>


        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-stone-900">About Me</h2>
            <p className="text-stone-700 mb-8 max-w-2xl mx-auto">
             Passionate about cardiology and preventive medicine, with a focus on enhancing patient outcomes through compassionate care and evidence-based clinical practice. Dedicated to promoting cardiovascular health by integrating precision medicine, early intervention and a patient-centered approach.
            </p>
            <a
              href="/about"
              className="text-stone-800 underline underline-offset-4 hover:text-cyan-700 font-medium transition-colors duration-200"
            >
              Full Bio →
            </a>
          </div>
        </section>

          {/* CORE VALUES SECTION */}
     <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-stone-900">Core Values</h2>
          <p className="text-stone-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            As an aspiring cardiologist, these values define my approach to patient care, research, and lifelong learning.
          </p>
          <RotatingCoreValues />
        </div>
      </section>


        {/* CLINICAL PHILOSOPHY SECTION */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-bold text-stone-900 mb-12">
              Clinical Philosophy
            </h2>
            <p className="text-stone-700 mb-16 max-w-2xl mx-auto">
              My approach to medicine blends evidence-based practice, patient-centered communication, and a strong commitment to prevention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Item 1 */}
              <div className="flex flex-col items-center text-center px-6">
                <FlaskConical size={48} className="text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold text-stone-800 mb-2">Evidence-Based Care</h3>
                <p className="text-stone-600">
                  Grounding clinical decisions in the latest scientific research to ensure optimal patient outcomes.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center text-center px-6">
                <MessageSquare size={48} className="text-stone-700 mb-4" />
                <h3 className="text-xl font-semibold text-stone-800 mb-2">Patient Communication</h3>
                <p className="text-stone-600">
                  Prioritizing open, empathetic dialogue to empower patients and build lasting trust.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center text-center px-6">
                <Leaf size={48} className="text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-stone-800 mb-2">Preventive Focus</h3>
                <p className="text-stone-600">
                  Advocating for lifestyle interventions and early screening to minimize disease risk before it starts.
                </p>
              </div>
            </div>

            {/* More About me */}
            <div className="mt-16">
              <a
                href="/about"
                className="inline-block bg-cyan-600 text-white rounded-full px-8 py-3 text-lg hover:bg-cyan-700 transition-colors duration-300"
              >
                Learn More About Me
              </a>
            </div>

          </div>
        </section>

        {/* DIVIDER */}
        <div className="w-full px-4 sm:px-6">
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400/0 via-cyan-500 to-cyan-400/0 my-12" />
      </div>

      {/* RECOMMENDATIONS SECTION */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">
            Endorsements
          </h2>
          <p className="text-stone-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Insights from mentors and colleagues on my work ethic, clinical dedication, and passion for patient-centered care.
          </p>

          {/* Modern Testimonials */}
          <div className="grid gap-12 sm:grid-cols-2 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="relative bg-stone-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Quote size={40} className="absolute -top-6 left-6 text-cyan-600" />
              <p className="text-stone-700 italic mb-6">
              &quot; Marios Zisis demonstrates exceptional dedication, medical knowledge and initiative. He consistently excelles in clinical skills, diagnosis and teamwork. His positive attitude and collaborative spirit make him a valued team member.&quot;
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-stone-800"> — Dr. Alexandros Briasoulis</h4>
                <p className="text-stone-500 text-sm"> Assistant Professor, National and Kapodistrian University of Athens & University of Iowa</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-stone-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Quote size={40} className="absolute -top-6 left-6 text-cyan-600" />
              <p className="text-stone-700 italic mb-6">
              &quot;Marios stood out during his clinical training for his enthusiasm, meticulous work and strong clinical reasoning. Highly respected by colleagues for his collaborative spirit and clarity of thought. I recommend him without reservation.&quot;
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-stone-800"> — Dr. Andreas Goules</h4>
                <p className="text-stone-500 text-sm"> Assistant Professor, University of Athens</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}

/* -------------------------------------------------------------------------------- */
/*  Reusable Components Below: Stats Box, Service Card, Testimonial,Recommendation  */
/* -------------------------------------------------------------------------------- */



function RotatingCoreValues() {
  const values = [
    {
      title: "Compassion",
      description:
        "Placing patient needs, comfort, and dignity at the center of every decision.",
      icon: <Heart size={36} className="text-red-500" />,
    },
    {
      title: "Critical Thinking",
      description:
        "Integrating clinical knowledge with evidence-based research for better outcomes.",
      icon: <Puzzle size={36} className="text-blue-600" />,
    },
    {
      title: "Integrity",
      description:
        "Practicing medicine with honesty, accountability and unwavering ethical standards.",
      icon: <Sun size={36} className="text-yellow-500" />,
    },
    {
      title: "Collaboration",
      description:
        "Building strong partnerships with patients, families and interdisciplinary teams.",
      icon: <Users size={36} className="text-cyan-600" />,
    },
    {
      title: "Curiosity",
      description:
        "Embracing continuous learning to stay at the forefront of medical innovation.",
      icon: <FlaskConical size={36} className="text-purple-500" />,
    },
    {
      title: "Excellence",
      description:
        "Striving for the highest standards in clinical practice, research and education.",
      icon: <BarChart3 size={36} className="text-green-600" />,
    },
  ];

  const [index, setIndex] = useState(0);
  const total = values.length;

  const goTo = (newIndex) => {
    setIndex((newIndex + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => goTo(index + 1), 4000);
    return () => clearInterval(interval);
  }, [index]);

  const getItem = (offset) => values[(index + offset + total) % total];

 const renderCard = (item, position) => {
  const isCenter = position === 0;
  return (
    <motion.div
      key={item.title}
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: isCenter ? 1 : 0.6,
        scale: isCenter ? 1 : 0.92,
        y: 0,
        filter: isCenter ? "blur(0px)" : "blur(2px)",
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`
        bg-white rounded-3xl shadow-xl px-6 py-8 w-full max-w-[18rem] 
        text-center flex-shrink-0 mx-auto
        ${isCenter ? "z-20" : "z-10"}
      `}

    >
      <div className="flex flex-col items-center">
        <div className="mb-4">{item.icon}</div>
        <h3 className="text-lg font-semibold text-stone-900 mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-stone-600">{item.description}</p>
      </div>
    </motion.div>
  );
};


return (
  <div className="w-full overflow-x-hidden px-4 sm:px-6 lg:px-8 pb-12">
    <div className="relative flex flex-col items-center w-full">
      {/* Arrows */}
      <div className="flex justify-between w-full max-w-4xl px-4 mb-8">
        <button
          onClick={() => goTo(index - 1)}
          className="text-cyan-600 hover:text-cyan-800 transition"
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={() => goTo(index + 1)}
          className="text-cyan-600 hover:text-cyan-800 transition"
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Carousel */}
      <div className="flex justify-center gap-6 items-center transition-transform duration-500 w-full">
        {[-1, 0, 1].map((offset) =>
          renderCard(getItem(offset), offset)
        )}
      </div>
    </div>
  </div>
);

}

function StatBox({ icon, number, label }) {
  return (
    <div
      className="
        flex flex-col items-center bg-white p-6 rounded-lg shadow-md 
        transform transition-transform duration-300 ease-out 
        hover:-translate-y-1 hover:scale-105 hover:shadow-lg
      "
    >
      {/* Icon container */}
      <div className="h-14 w-14 rounded-full bg-stone-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-stone-800 mb-1">{number}</div>
      <div className="text-stone-600 text-sm text-center">{label}</div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-stone-800">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
}
function Testimonial({ name, text }) {
  return (
    <div className="max-w-md mx-auto">
      <p className="italic text-stone-600 mb-4">&ldquo;{text}&rdquo;</p>
      <div className="font-bold text-stone-800">— {name}</div>
    </div>
  );
}
/**
 * Card component for clinical/academic focus areas.
 * Displays an icon, a title and a short description.
 */
function FocusAreaCard({ icon, title, description }) {
  return (
    <div className="
      flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md
      transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-600 text-sm">{description}</p>
    </div>
  );
}

/**
 * A "recommendation" or "endorsement" component more suited 
 * for a new graduate. Includes a references name, title  and quote.
 */
function Recommendation({ name, title, text }) {
  return (
    <div className="max-w-md mx-auto">
      <p className="italic text-stone-600 mb-4">&ldquo;{text}&rdquo;</p>
      <div className="font-bold text-stone-800">— {name}</div>
      <div className="text-sm text-stone-500">{title}</div>
    </div>
  );
}

function RecommendationCard({ name, title, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="italic text-stone-700 mb-4 leading-relaxed">&quot;{text}&quot;</p>
      <div className="border-t border-stone-200 pt-4">
        <h4 className="font-semibold text-stone-800">{name}</h4>
        <p className="text-sm text-stone-500">{title}</p>
      </div>
    </div>
  );
}
