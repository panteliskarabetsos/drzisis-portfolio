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

<section
  className="
    relative
    h-[60vh]    /* Adjust height as needed */
    flex
    items-center
    justify-center
    bg-cover
    bg-center
    bg-no-repeat
    py-20
    px-4
    text-center
  "
  style={{
    backgroundImage: 'url("/hero-bg.jpg")', // or an external URL
  }}
>
  {/* OPTIONAL: Add a semi-transparent overlay for better text readability */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Hero Content Container: position above overlay */}
  <div className="relative z-10 max-w-2xl mx-auto">
  <h1
  className="
    text-4xl
    sm:text-5xl
    font-bold
    mb-4
    text-white
    cursor-pointer
    transition
    duration-300
    transform
    hover:-translate-y-1
    hover:text-cyan-300
  "
>
Dr. Marios Zisis
</h1>


    <p className="text-stone-100 mb-8 leading-relaxed">
    Recent Medical Graduate • Aspiring Cardiologist • Driven by 
    <span className="text-cyan-700 font-semibold"> Compassion</span>.
    </p>
    <a
      href="/about"
      className="
        inline-block
        rounded-md
        bg-stone-100
        px-8
        py-3
        text-stone-800
        hover:bg-stone-200
        transition-colors
        duration-200
        font-medium
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
            className="font-medium text-stone-800 underline underline-offset-4 hover:text-stone-600 transition-colors duration-200"
          >
            Full Bio &rarr;
          </a>
        </div>
      </section>

     {/* ACADEMIC HIGHLIGHTS */}
     <section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-2">Academic Highlights</h2>
          <p className="text-stone-600 mb-10 max-w-xl mx-auto">
            Though my journey is just beginning, these milestones reflect my dedication 
            to patient care, research, and community service.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <StatBox
              icon={<AcademicCapIcon className="h-8 w-8 text-stone-700 mx-auto" />}
              number="MD"
              label="Medical Degree Earned with Distinction"
            />
            <StatBox
              icon={<DocumentTextIcon className="h-8 w-8 text-stone-700 mx-auto" />}
              number="6"
              label="Research Publications"
            />
            <StatBox
              icon={<CheckBadgeIcon className="h-8 w-8 text-stone-700 mx-auto" />}
              number="1"
              label="Clinical Excellence Award"
            />
            <StatBox
              icon={<HandThumbUpIcon className="h-8 w-8 text-stone-700 mx-auto" />}
              number="100+"
              label="Volunteer Hours"
            />
          </div>
        </div>
      </section>



      {/* CLINICAL FOCUS SECTION */}
{/* CLINICAL FOCUS SECTION */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-white">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-3xl font-bold mb-8">Clinical Interests & Experience</h2>
    <p className="text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
      As a recent medical graduate with a passion for cardiology, I’ve had the 
      opportunity to explore diverse specialties and hone my clinical skills.
      Below are some areas I’m especially focused on.
    </p>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
      <FocusAreaCard
        icon={<HeartIcon className="h-8 w-8 text-red-500 mx-auto" />}
        title="Cardiology Rotation"
        description="Hands-on exposure to diagnosing and managing cardiovascular conditions. Eager to continue research and refine patient care skills in this specialty."
      />
      <FocusAreaCard
        icon={<ClipboardDocumentListIcon className="h-8 w-8 text-stone-700 mx-auto" />}
        title="Internal Medicine"
        description="Comprehensive approach to adult diseases, encompassing clinical diagnosis, treatment planning, and patient follow-up."
      />
      <FocusAreaCard
        icon={<UserGroupIcon className="h-8 w-8 text-stone-700 mx-auto" />}
        title="Patient-Centered Care"
        description="Focus on empathetic communication, collaborative decision-making, and holistic patient support to foster trust and better outcomes."
      />
      <FocusAreaCard
        icon={<BeakerIcon className="h-8 w-8 text-stone-700 mx-auto" />}
        title="Research & Evidence-Based Practice"
        description="Driven by the latest clinical findings, integrating up-to-date research into day-to-day practice to enhance patient outcomes."
      />
    </div>
  </div>
</section>



      {/* RECOMMENDATIONS SECTION */}
<section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-3xl font-bold mb-10">Endorsements & Recommendations</h2>
    <p className="text-stone-600 mb-8 max-w-xl mx-auto leading-relaxed">
      I’m grateful to have worked alongside exceptional mentors and peers. 
      Here’s what a few of them have to say about my work ethic, clinical approach, 
      and commitment to patient care.
    </p>

    {/* Replace with a flexible container for endorsements */}
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center max-w-4xl mx-auto">
      <Recommendation
        name="Dr. Alexandros P."
        title="Professor of Cardiology, Athens Medical School"
        text="Marios consistently demonstrated an eagerness to learn, remarkable 
        empathy for patients, and a strong aptitude for clinical research. 
        He will be an asset to any residency program."
      />
      <Recommendation
        name="Dr. Georgia K"
        title="Internal Medicine Attending"
        text="It’s rare to see someone so early in their career combine 
        compassion and professionalism so effectively. Marios is an outstanding 
        team member and an attentive clinician."
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

/* ----------------------------------------------------------------- */
/*  Reusable Components Below: Stats Box, Service Card, Testimonial  */
/* ----------------------------------------------------------------- */

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
        flex
        flex-col
        items-center
        bg-white
        p-6
        rounded-lg
        shadow-sm
        transform
        transition-transform
        duration-300
        ease-out
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-md
      "
    >
      {/* Icon container */}
      {icon && (
        <div className="h-12 w-12 rounded-full bg-stone-100 flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <div className="text-4xl font-bold text-stone-800 mb-1">{number}</div>
      <div className="text-stone-600">{label}</div>
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
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        p-6
        bg-white
        rounded-lg
        shadow-sm
        transform
        transition-transform
        duration-300
        ease-out
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-md
      "
    >
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-stone-800">{title}</h3>
      <p className="text-stone-600">{description}</p>
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
