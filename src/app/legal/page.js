// app/legal/page.jsx

"use client";

import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="bg-gradient-to-b from-stone-100 to-white py-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-stone-900 mb-6">Legal</h1>
        <p className="text-stone-600 mb-12 max-w-xl mx-auto">
          Transparency and trust are important to us. Please review our policies below.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/privacy-policy" className="block rounded-xl border border-stone-200 p-6 bg-white shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-stone-800 mb-2">Privacy Policy</h2>
            <p className="text-sm text-stone-600">
              Learn how we collect, use and protect your personal information.
            </p>
          </Link>

          <Link href="/terms-of-use" className="block rounded-xl border border-stone-200 p-6 bg-white shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-stone-800 mb-2">Terms of Use</h2>
            <p className="text-sm text-stone-600">
              Understand the rules and responsibilities for using this site and services.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
