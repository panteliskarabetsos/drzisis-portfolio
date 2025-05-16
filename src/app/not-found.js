'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-white text-center text-gray-800 user-select-none">
      <div className="max-w-xl user-select-none">
        
        <img
          src="/heart-icon.svg"
          alt="Heart icon"
          className="w-20 h-20 mx-auto mb-6 animate-pulse-slow"
        />

       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-8 mx-auto mb-6 text-red-600"
          viewBox="0 0 200 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M0 20 H40 L50 5 L60 35 L70 20 H100 M100 20 H200" />
        </svg>

        <h1 className="text-4xl font-semibold text-red-700 mb-4">Looks like you are lost.</h1>
        <p className="text-gray-600 text-base mb-6">
            The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
        >
          Return to Home Page
        </Link>
      </div>

      {/* Custom animation for heartbeat */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse-heart 1.8s ease-in-out infinite;
        }

        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
      `}</style>
    </main>
  );
}
