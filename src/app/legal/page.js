import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LegalHero } from "../components/legal-layout";
import { legalDocuments } from "../components/legal-content";

export const metadata = pageMetadata({
  title: "Legal",
  description: "Privacy Policy and Terms of Use for the website of Dr. Marios Zisis.",
  path: "/legal",
});

export default function LegalPage() {
  return (
    <main className="min-h-screen w-full bg-[#f8f8f6] text-stone-950 selection:bg-cyan-100 selection:text-cyan-950">
      <LegalHero title="Legal" accent="information.">
        <p className="mt-6 max-w-xl border-l border-white/20 pl-5 text-sm leading-7 text-stone-300 sm:pl-6 sm:text-base">
          Transparency and trust matter to me. Please review the policies
          below.
        </p>
      </LegalHero>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-20 lg:py-28">
        <div className="border-t border-stone-300">
          {legalDocuments.map((doc, index) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group grid grid-cols-[32px_1fr_auto] items-center gap-4 border-b border-stone-300 py-7 sm:grid-cols-[64px_1fr_auto] sm:gap-8 sm:py-10"
            >
              <span className="text-[11px] font-medium tabular-nums text-cyan-800">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] transition duration-300 group-hover:text-cyan-800 sm:text-4xl lg:text-5xl">
                  {doc.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-stone-500 sm:mt-3 sm:text-base">
                  {doc.description}
                </p>
              </div>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition duration-500 group-hover:border-cyan-800 group-hover:bg-cyan-800 group-hover:text-white sm:h-14 sm:w-14">
                <ArrowUpRight size={18} strokeWidth={1.7} />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
          Effective November 25, 2026
        </p>
      </section>
    </main>
  );
}
