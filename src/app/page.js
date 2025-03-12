"use client";
// At the top of page.js
import {
  AcademicCapIcon,
  DocumentTextIcon,
  CheckBadgeIcon, // renamed from BadgeCheckIcon
  HandThumbUpIcon,
  HeartIcon,
  BeakerIcon,
  UserGroupIcon,
  BarChartIcon,
  NewspaperIcon,
  PuzzleIcon,
  SunIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

export default function HomePage() {
  return (
    <main className="bg-white text-stone-800 min-h-screen">

{/* HERO SECTION */}
<section
  className="
    relative h-[80vh] sm:h-[70vh] flex flex-col items-center justify-center text-center px-6 sm:px-12
    bg-cover bg-center bg-no-repeat
  "
  style={{
    backgroundImage: 'url("/hero-bg.jpg")',
  }}
>
  {/* Lighter Gradient Overlay for Better Readability */}
  <div className="absolute inset-0 bg-black/50 sm:bg-black/30" />

  {/* Hero Content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <h1
      className="
        text-4xl sm:text-5xl font-bold text-white mb-4
        drop-shadow-md sm:drop-shadow-lg transition-all duration-500 animate-fadeIn
      "
    >
      Dr. Marios Zisis
    </h1>

    <p
      className="
        text-lg sm:text-xl text-white leading-relaxed mb-6
        drop-shadow-md transition-all duration-700 animate-fadeIn delay-100
      "
    >
      Recent Medical Graduate • Aspiring Cardiologist • Driven by{" "}
      <span className="text-cyan-400 font-semibold">Compassion</span>.
    </p>

    {/* Call-to-Action Button */}
    <a
      href="/about"
      className="
        inline-block bg-cyan-600 text-white font-medium text-lg px-8 py-3
        rounded-md transition-all duration-300 transform hover:-translate-y-1
        hover:bg-cyan-700 hover:shadow-lg focus:ring-4 focus:ring-cyan-300
      "
    >
      Learn More
    </a>
  </div>
</section>


      {/* ABOUT SECTION (TEXT-ONLY) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            I’m a board-certified cardiologist specializing in preventive care,
            comprehensive diagnostics, and patient education. My mission is to empower
            you to take charge of your cardiovascular health with confidence.
          </p>
          <a
            href="/about"
            className="font-medium text-stone-800 underline underline-offset-4 hover:text-stone-400 transition-colors duration-200"
          >
            Full Bio &rarr;
          </a>
        </div>
      </section>

     {/* ACADEMIC HIGHLIGHTS */}
<section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-3xl font-bold mb-4 text-stone-900">Academic Highlights</h2>
    <p className="text-stone-600 mb-10 max-w-xl mx-auto leading-relaxed">
      My journey is just beginning, but these milestones reflect my dedication 
      to patient care, research, and community service.
    </p>

    {/* Responsive Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      <StatBox
        icon={<AcademicCapIcon className="h-10 w-10 text-cyan-600 mx-auto" />}
        number="MD"
        label="Medical Degree Earned"
      />
      <StatBox
        icon={<DocumentTextIcon className="h-10 w-10 text-blue-600 mx-auto" />}
        number="6"
        label="Research Publications"
      />
      <StatBox
        icon={<CheckBadgeIcon className="h-10 w-10 text-green-600 mx-auto" />}
        number="1"
        label="Clinical Excellence Award"
      />
      <StatBox
        icon={<HandThumbUpIcon className="h-10 w-10 text-yellow-500 mx-auto" />}
        number="100+"
        label="Volunteer Hours"
      />
    </div>
  </div>
</section>




{/* CLINICAL FOCUS SECTION */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-white">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-3xl font-bold mb-8 text-stone-900">
      Clinical Interests & Experience
    </h2>
    <p className="text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
      As a recent medical graduate with a passion for cardiology, I’ve had the 
      opportunity to explore diverse specialties and hone my clinical skills.
      Below are some areas I’m especially focused on.
    </p>

    {/* Responsive Grid */}
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
      <FocusAreaCard
        icon={<HeartIcon className="h-10 w-10 text-red-500 mx-auto" />}
        title="Cardiology Rotation"
        description="Hands-on exposure to diagnosing and managing cardiovascular conditions. Eager to continue research and refine patient care skills in this specialty."
      />
      <FocusAreaCard
        icon={<ClipboardDocumentListIcon className="h-10 w-10 text-stone-700 mx-auto" />}
        title="Internal Medicine"
        description="Comprehensive approach to adult diseases, encompassing clinical diagnosis, treatment planning, and patient follow-up."
      />
      <FocusAreaCard
        icon={<UserGroupIcon className="h-10 w-10 text-cyan-600 mx-auto" />}
        title="Patient-Centered Care"
        description="Focus on empathetic communication, collaborative decision-making, and holistic patient support to foster trust and better outcomes."
      />
      <FocusAreaCard
        icon={<BeakerIcon className="h-10 w-10 text-stone-700 mx-auto" />}
        title="Research & Evidence-Based Practice"
        description="Driven by the latest clinical findings, integrating up-to-date research into day-to-day practice to enhance patient outcomes."
      />
    </div>

    {/* Centered "Learn More" Button */}
    <div className="mt-10 flex justify-center">
      <a
        href="/research"
        className="font-medium text-stone-800 underline underline-offset-4 hover:text-stone-400 transition-colors duration-200 text-lg"
      >
        Learn More &rarr;
      </a>
    </div>

  </div>
</section>



{/* RECOMMENDATIONS SECTION */}
<section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-3xl font-bold mb-10 text-stone-900">
      Endorsements & Recommendations
    </h2>
    <p className="text-stone-600 mb-12 max-w-xl mx-auto leading-relaxed">
      I’m grateful to have worked alongside exceptional mentors and peers. 
      Here’s what a few of them have to say about my work ethic, clinical approach, 
      and commitment to patient care.
    </p>

    {/* Recommendations Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <RecommendationCard
        name="Dr. Alexandros P."
        title="Professor of Cardiology, Athens Medical School"
        text="Marios consistently demonstrated an eagerness to learn, remarkable 
        empathy for patients, and a strong aptitude for clinical research. 
        He will be an asset to any residency program."
      />
      <RecommendationCard
  name="Dr. Georgia K"
  title="Internal Medicine Attending"
  text="Marios consistently demonstrated an eagerness to learn, remarkable empathy for patients, and a strong aptitude for clinical research. He will be an asset to any &quot;residency&quot; program."
/>

    </div>
  </div>
</section>


     {/* LET’S CONNECT SECTION */}
<section className="py-16 text-center px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
      Let’s Stay Connected
    </h2>
    <p className="text-stone-600 mb-8 max-w-xl mx-auto leading-relaxed">
      If you’re interested in discussing residency opportunities, research 
      collaborations, or simply want to share insights on medical practice, 
      I’d love to hear from you.
    </p>
    <a
      href="/contact"
      className="inline-block rounded-md bg-stone-800 px-6 py-3 text-white hover:bg-stone-700 transition-colors duration-200"
    >
      Contact Me
    </a>
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

/**
 * Testimonial box with text only.
 */
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
 * for a new graduate. Includes a reference's name, title, and quote.
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
