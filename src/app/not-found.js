'use client';

import Link from 'next/link';
import { HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-stone-100 to-stone-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-12 text-center border border-stone-200"
      >
        {/* Heart + Glow Ring */}
        <div className="relative mb-6 flex justify-center">
          <div className="absolute w-28 h-28 rounded-full bg-red-200/30 blur-2xl opacity-50 animate-ping-slow" />
          <HeartPulse className="w-16 h-16 text-red-600 animate-beat z-10" />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">
          You seem a bit off-track...
        </h1>

        {/* Subtitle */}
        <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Return button */}
        <Link
          href="/"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-full shadow hover:bg-red-700 hover:shadow-lg transition duration-300"
        >
          Return to Home
        </Link>

        {/* Optional quote */}
        <p className="text-sm text-stone-500 mt-6 italic">
          “Even a detour can lead to something meaningful.”
        </p>
      </motion.div>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-beat {
          animation: beat 1.6s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping 3.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </main>
  );
}
