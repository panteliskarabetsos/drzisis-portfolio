"use client";
// At the top of page.js
import {
  AcademicCapIcon,
  DocumentTextIcon,
  CheckBadgeIcon, // renamed from BadgeCheckIcon
  PuzzleIcon,
  HeartIcon,
  BeakerIcon,
  UserGroupIcon,
  BarChartIcon,
  NewspaperIcon,
  SunIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
import { Heart, Puzzle, Sun, Users, FlaskConical, BarChart3, MessageSquare,Leaf,Quote, ChevronDown } from "lucide-react";


export default function HomePage() {
  return (
    <main className="bg-white text-stone-800 min-h-screen">
        {/* HERO SECTION */}
        {/* <section
          className="
            relative h-[85vh] sm:h-[75vh] flex flex-col items-center justify-center text-center px-6 sm:px-12
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: 'url("/hero-bg.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50 sm:bg-black/30" />
          <div className="relative z-10 max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 drop-shadow-xl">
              Dr. Marios Zisis
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8 font-light">
              Recent Medical Graduate • Aspiring Cardiologist • Driven by <span className="text-cyan-400 font-semibold">Compassion</span>.
            </p>
            <a
              href="/about"
              className="
                inline-block bg-cyan-600 text-white font-semibold text-lg px-8 py-3
                rounded-full hover:bg-cyan-700 hover:shadow-2xl transition-all duration-300
              "
            >
              Learn More
            </a>
          </div>
        </section> */}

                  {/* NEW HERO SECTION */}
                  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white lg:bg-transparent">
  {/* Background Image: Mobile full width, Desktop half width */}
  <div
    className="absolute inset-0 bg-cover bg-center lg:w-1/2 lg:left-0 lg:block hidden"
    style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
  >
    <div className="absolute inset-0 bg-black/30" />
  </div>

  {/* Mobile background (different from lg) */}
  <div
    className="absolute inset-0 bg-cover bg-center lg:hidden"
    style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
  >
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 sm:px-12 max-w-2xl ml-0 lg:ml-auto lg:w-1/2">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-white lg:text-stone-900 mb-6 leading-tight">
      Dr. Marios Zisis
    </h1>
    <p className="text-base sm:text-lg text-stone-200 lg:text-stone-600 mb-8 max-w-lg">
      Recent Medical Graduate • Aspiring Cardiologist • Driven by{" "}
      <span className="text-cyan-400 lg:text-cyan-600 font-semibold">
        Compassion
      </span>{" "}
      and Clinical Excellence.
    </p>
    <a
      href="/about"
      className="inline-block rounded-full bg-cyan-600 text-white font-semibold text-base sm:text-lg px-8 py-3 hover:bg-cyan-700 hover:shadow-xl transition-all duration-300"
    >
      Learn More
    </a>
  </div>

  {/* Chevron Down Icon */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
    <ChevronDown size={32} className="text-cyan-400 lg:text-cyan-600" />
  </div>
</section>


        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-stone-900">About Me</h2>
            <p className="text-stone-700 mb-8 max-w-2xl mx-auto">
              Passionate about cardiology and preventive medicine, dedicated to enhancing patient care through clinical excellence. Committed to continuous learning, research, and compassionate practice.
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
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-4xl font-bold mb-8 text-stone-900">Core Values</h2>
    <p className="text-stone-700 mb-12 max-w-2xl mx-auto leading-relaxed">
      As an aspiring cardiologist, these values define my approach to patient care, research, and lifelong learning.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <FocusAreaCard
        icon={<Heart size={40} className="text-red-500 mx-auto" />}
        title="Compassion"
        description="Placing patient needs, comfort, and dignity at the center of every decision."
      />
      <FocusAreaCard
        icon={<Puzzle size={40} className="text-blue-600 mx-auto" />}
        title="Critical Thinking"
        description="Integrating clinical knowledge with evidence-based research for better outcomes."
      />
      <FocusAreaCard
        icon={<Sun size={40} className="text-yellow-500 mx-auto" />}
        title="Integrity"
        description="Practicing medicine with honesty, accountability, and unwavering ethical standards."
      />
      <FocusAreaCard
        icon={<Users size={40} className="text-cyan-600 mx-auto" />}
        title="Collaboration"
        description="Building strong partnerships with patients, families, and interdisciplinary teams."
      />
      <FocusAreaCard
        icon={<FlaskConical size={40} className="text-purple-500 mx-auto" />}
        title="Curiosity"
        description="Embracing continuous learning to stay at the forefront of medical innovation."
      />
      <FocusAreaCard
        icon={<BarChart3 size={40} className="text-green-600 mx-auto" />}
        title="Excellence"
        description="Striving for the highest standards in clinical practice, research, and education."
      />
    </div>
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

    {/* Optional CTA */}
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




{/* RECOMMENDATIONS SECTION */}
<section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
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
        &quot;Marios consistently demonstrated eagerness to learn, remarkable empathy for patients, and strong research skills. He will be an asset to any residency program.&quot;
        </p>
        <div className="border-t pt-4">
          <h4 className="font-semibold text-stone-800">Dr. Nikolaos P.</h4>
          <p className="text-stone-500 text-sm">Professor of Cardiology, Athens Medical School</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative bg-stone-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <Quote size={40} className="absolute -top-6 left-6 text-cyan-600" />
        <p className="text-stone-700 italic mb-6">
        &quot;Marios impressed us with his clinical acumen, compassionate demeanor, and dedication to advancing patient care through research and collaboration.&quot;
        </p>
        <div className="border-t pt-4">
          <h4 className="font-semibold text-stone-800">Dr. Georgia K.</h4>
          <p className="text-stone-500 text-sm">Internal Medicine Attending</p>
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

/**
 * Stats/achievements card: displays a number and label.
 */
/**
 * Stats/achievements card with an optional icon, a bold number, and a label.
 * Features a circular background behind the icon for a modern look.
 */
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
/**
 * Service card with an optional emoji icon.
 */
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
 * Displays an icon, a title, and a short description.
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
 * for a new graduate. Includes a references name, title, and quote.
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
