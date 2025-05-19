'use client';

import Link from 'next/link';
import { HeartPulse } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-white via-stone-50 to-white text-center text-gray-800">
      <div className="max-w-md w-full space-y-6">

        {/* Heart Icon with Glow */}
        <div className="relative flex justify-center">
          <div className="absolute w-24 h-24 rounded-full bg-red-100 blur-2xl opacity-60 animate-ping-slow" />
          <HeartPulse className="w-20 h-20 text-red-500 animate-beat" />
        </div>

        {/* Stylized SVG divider */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-44 h-10 mx-auto text-red-500"
          viewBox="0 0 200 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M0 20 H40 L50 5 L60 35 L70 20 H100 M100 20 H200" />
        </svg>

        <h1 className="text-3xl sm:text-4xl font-bold text-red-700">Oops, this page doesn't exist.</h1>

        <p className="text-stone-600 text-base leading-relaxed">
          We couldn't find what you were looking for. It may have been removed or relocated.
        </p>

        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition"
        >
          Back to Safety
        </Link>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-beat {
          animation: beat 1.5s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </main>
  );
}
