"use client";
// At the top of page.js
import {
  AcademicCapIcon,
  DocumentTextIcon,
  CheckBadgeIcon, // renamed from BadgeCheckIcon
<<<<<<< HEAD
  HandThumbUpIcon,
=======
  PuzzleIcon,
>>>>>>> 806809b (Fix nested repository issue)
  HeartIcon,
  BeakerIcon,
  UserGroupIcon,
  BarChartIcon,
  NewspaperIcon,
<<<<<<< HEAD
  PuzzleIcon,
  SunIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
=======
  SunIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
import { Heart, Puzzle, Sun, Users, FlaskConical, BarChart3, MessageSquare,Leaf,Quote, ChevronDown } from "lucide-react";

>>>>>>> 806809b (Fix nested repository issue)

export default function HomePage() {
  return (
    <main className="bg-white text-stone-800 min-h-screen">
<<<<<<< HEAD

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
  {/* Background Overlay */}
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
          Passionate about cardiology and preventive medicine, dedicated to enhancing patient care through clinical excellence. Committed to continuous learning, research and compassionate practice.
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
      to patient care, research and community service.
    </p>

    {/* Responsive Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      <StatBox
        icon={<AcademicCapIcon className="h-10 w-10 text-cyan-600 mx-auto" />}
        number="MD"
        label="Medical Degree Earned with distinction"
      />
      <StatBox
        icon={<DocumentTextIcon className="h-10 w-10 text-blue-600 mx-auto" />}
        number="2"
        label="Research Publications"
        href="/research"
      />
      <StatBox
        icon={<CheckBadgeIcon className="h-10 w-10 text-green-600 mx-auto" />}
        number="1"
        label="Clinical Excellence Award"
      />
      <StatBox
        icon={<HandThumbUpIcon className="h-10 w-10 text-yellow-500 mx-auto" />}
        number="50+"
        label="Volunteer Hours"
=======
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
          <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden">
         
            <div
              className="absolute inset-0 w-1/2 hidden lg:block bg-cover bg-center"
              style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>

         
            <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 sm:px-12 max-w-2xl ml-auto lg:w-1/2">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-stone-900 mb-6 leading-tight">
                Dr. Marios Zisis
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-lg">
                Recent Medical Graduate • Aspiring Cardiologist • Driven by <span className="text-cyan-600 font-semibold">Compassion</span> and Clinical Excellence.
              </p>
              <a
                href="/about"
                className="inline-block rounded-full bg-cyan-600 text-white font-semibold text-lg px-8 py-3 hover:bg-cyan-700 hover:shadow-xl transition-all duration-300"
              >
                Learn More
              </a>
            </div>

          
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-cyan-600" />
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
>>>>>>> 806809b (Fix nested repository issue)
      />
    </div>
  </div>
</section>
<<<<<<< HEAD




{/* CLINICAL FOCUS SECTION */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-30 to-white">
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

    <div className="mt-10 flex justify-center">
      <a
        href="/research"
        className="font-medium text-stone-800 underline underline-offset-4 hover:text-stone-400 transition-colors duration-200 text-lg"
      >
        Learn More &rarr;
=======
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
>>>>>>> 806809b (Fix nested repository issue)
      </a>
    </div>

  </div>
</section>



<<<<<<< HEAD
{/* RECOMMENDATIONS SECTION */}
<section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-3xl font-bold mb-10 text-stone-900">
      Endorsements & Recommendations
    </h2>
    <p className="text-stone-600 mb-12 max-w-xl mx-auto leading-relaxed">
      I’m grateful to have worked alongside exceptional mentors and peers. 
      Here’s what a few of them have to say about my work ethic, clinical approach 
      and commitment to patient care.
    </p>

    {/* Recommendations Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <RecommendationCard
        name="Dr. Nikolaos P."
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

=======

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
          "Marios consistently demonstrated eagerness to learn, remarkable empathy for patients, and strong research skills. He will be an asset to any residency program."
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
          "Marios impressed us with his clinical acumen, compassionate demeanor, and dedication to advancing patient care through research and collaboration."
        </p>
        <div className="border-t pt-4">
          <h4 className="font-semibold text-stone-800">Dr. Georgia K.</h4>
          <p className="text-stone-500 text-sm">Internal Medicine Attending</p>
        </div>
      </div>
>>>>>>> 806809b (Fix nested repository issue)
    </div>
  </div>
</section>


<<<<<<< HEAD
     {/* LET’S CONNECT SECTION */}
<section className="py-16 text-center px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
      Let’s Stay Connected
    </h2>
    <p className="text-stone-600 mb-8 max-w-xl mx-auto leading-relaxed">
      If you’re interested in discussing residency opportunities, research 
      collaborations or simply want to share insights on medical practice, 
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

=======
>>>>>>> 806809b (Fix nested repository issue)
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
<<<<<<< HEAD






=======
>>>>>>> 806809b (Fix nested repository issue)
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
<<<<<<< HEAD

/**
 * Testimonial box with text only.
 */
=======
>>>>>>> 806809b (Fix nested repository issue)
function Testimonial({ name, text }) {
  return (
    <div className="max-w-md mx-auto">
      <p className="italic text-stone-600 mb-4">&ldquo;{text}&rdquo;</p>
      <div className="font-bold text-stone-800">— {name}</div>
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 806809b (Fix nested repository issue)
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
