"use client";
import {
  DocumentTextIcon,
  AcademicCapIcon,
  BeakerIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

export default function ResearchPage() {
  return (
    <main className="bg-white text-stone-800 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 text-center"
        style={{ backgroundImage: 'url("/lab-img.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/50 sm:bg-black/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            My Research & Publications
          </h1>
          <p className="text-stone-100 mt-4 text-sm sm:text-lg leading-relaxed">
            Dedicated to advancing cardiovascular medicine through innovative, cutting-edge research.
          </p>
        </div>
      </section>

      {/* RESEARCH INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Exploring New Frontiers in Cardiology</h2>
          <p className="text-stone-600 mb-6 text-sm sm:text-lg leading-relaxed">
            My research interests focus on improving patient outcomes through innovation and technology in cardiovascular medicine.
          </p>
        </div>
      </section>

      {/* RESEARCH HIGHLIGHTS */}
      <section className="bg-stone-50 py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Key Research Contributions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ResearchCard
              icon={<DocumentTextIcon className="h-8 w-8 text-stone-700 mx-auto" />}
              title="AI & Cardiology"
              description="Investigating AI-assisted diagnostics for early detection of heart diseases."
            />
            <ResearchCard
              icon={<AcademicCapIcon className="h-8 w-8 text-stone-700 mx-auto" />}
              title="Clinical Trials"
              description="Participating in groundbreaking clinical trials for novel heart treatments."
            />
            <ResearchCard
              icon={<BeakerIcon className="h-8 w-8 text-stone-700 mx-auto" />}
              title="Genomics & Cardiac Risk"
              description="Exploring genetic markers linked to cardiovascular risk factors."
            />
          </div>
        </div>
      </section>

   {/* RESEARCH PUBLICATIONS  */}
{/* RESEARCH PUBLICATIONS (LIST STYLE WITHOUT ICONS) */}
<section id="publications" className="bg-stone-40 py-16 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="text-3xl font-bold mb-10">Research Publications</h2>

    <ul className="space-y-8 max-w-3xl mx-auto">
    

      <li className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg text-left">
        <h3 className="text-xl font-semibold text-stone-800">Linking Cardiovascular Disease and Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD): The Role of Cardiometabolic Drugs in MASLD Treatment</h3>
        <p className="text-sm text-stone-500">Biomolecules, 2025</p>
        <a 
          href="https://www.mdpi.com/2218-273X/15/3/324" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-medium text-cyan-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          View Publication &rarr;
        </a>
      </li>

      <li className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg text-left">
        <h3 className="text-xl font-semibold text-stone-800">Acute Ischemic Stroke during Extracorporeal Membrane Oxygenation (ECMO): A Narrative Review of the Literature
        </h3>
        <p className="text-sm text-stone-500 mb-2">Journal of Clinical Medicine, 2024</p>
        <a 
          href="https://www.mdpi.com/2077-0383/13/19/6014" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-medium text-cyan-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          View Publication &rarr;
        </a>
      </li>

    </ul>
  </div>
</section>

      {/* CTA SECTION */}
      <section className="py-12 sm:py-16 px-6 text-center bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Interested in Research Collaboration?</h2>
          <p className="text-stone-600 mb-6 max-w-xl mx-auto text-sm sm:text-lg">
            If you are interested in collaborating on research or discussing ideas, let&apos;s connect.
          </p>
          <a href="/contact" className="inline-block rounded-md bg-stone-800 px-6 py-2 sm:px-6 sm:py-3 text-white hover:bg-stone-700 transition">
            Contact Me
          </a>
        </div>
      </section>

    </main>
  );
}

/* COMPONENTS */
function ResearchCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md">
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-stone-800">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
}

function PublicationEntry({ title, journal, year, link }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-lg sm:text-xl font-semibold text-stone-800">{title}</h3>
      <p className="text-stone-600 text-sm sm:text-base">
        <span className="font-medium">{journal}</span> • {year}
      </p>
      <a href={link} className="mt-2 inline-block text-cyan-700 font-medium hover:underline">
        Read More &rarr;
      </a>
    </div>
  );
}
