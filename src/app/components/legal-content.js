import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

// Server-rendered building blocks for the legal pages' section content.

export const legalDocuments = [
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "How personal information sent through this website is collected, used and protected.",
  },
  {
    href: "/terms-of-use",
    title: "Terms of Use",
    description:
      "The rules and responsibilities that apply when you use this website.",
  },
];

export function LegalContactCard() {
  return (
    <a
      href="mailto:contact@drzisis.com"
      className="group mt-7 flex items-center gap-4 rounded-3xl bg-[#11110f] p-5 text-white transition duration-500 hover:bg-stone-900 sm:gap-5 sm:p-7"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-cyan-300 transition duration-500 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-stone-950">
        <Mail size={18} strokeWidth={1.7} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
          Email
        </p>
        <p className="mt-1 truncate text-base font-medium sm:text-lg">
          contact@drzisis.com
        </p>
      </div>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-stone-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
      />
    </a>
  );
}

export function LegalList({ items }) {
  return (
    <ul className="space-y-2 sm:space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-4">
          <span
            aria-hidden="true"
            className="mt-[0.8em] h-px w-3 shrink-0 bg-cyan-700 sm:mt-[1em]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalNote({ children }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-stone-700 sm:px-5 sm:py-4">
      {children}
    </div>
  );
}

export function LegalLink({ href, children, external }) {
  const className =
    "font-medium text-cyan-800 underline decoration-cyan-800/30 underline-offset-4 transition hover:decoration-cyan-800";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
