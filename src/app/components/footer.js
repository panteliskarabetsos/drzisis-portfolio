export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 text-stone-800 py-8 sm:py-10 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">

          {/* Branding */}
          <div>
            <h2 className="text-lg font-bold text-stone-900">Dr. Marios Zisis</h2>
            <p className="text-sm text-stone-600 mt-1">
              Recent medical graduate passionate about cardiology and patient-centered care.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-md font-semibold text-stone-900">Explore</h3>
            <nav className="mt-2 space-y-1 text-sm">
              <a href="/about" className="block hover:text-cyan-600 transition">About</a>
              <a href="/contact" className="block hover:text-cyan-600 transition">Contact</a>
              <a href="/research" className="block hover:text-cyan-600 transition">Research</a>
            </nav>
          </div>

          {/* Privacy Policy Section */}
          <div>
            <h3 className="text-md font-semibold text-stone-900">Legal</h3>
            <nav className="mt-2 space-y-1 text-sm">
              <a href="/privacy-policy" className="block hover:text-cyan-600 transition">
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-md font-semibold text-stone-900">Get in Touch</h3>
            <div className="mt-2 space-y-1 text-sm">
              <a href="mailto:contact@drzisis.com" className="hover:text-cyan-600 transition">contact@drzisis.com</a>
            </div>

            <div className="flex justify-center sm:justify-start space-x-4 mt-3">
              <a href="#" className="text-stone-500 hover:text-cyan-600 transition" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.75 3A1.75 1.75 0 003 4.75v14.5A1.75 1.75 0 004.75 21h14.5A1.75 1.75 0 0021 19.25V4.75A1.75 1.75 0 0019.25 3H4.75zM8 10h2v6H8v-6zm1-2a1 1 0 11-2 0 1 1 0 012 0zm4 2h2v1h.025a2.25 2.25 0 011.975-1c1.325 0 2.325.974 2.325 2.7V16h-2v-3.25c0-.825-.375-1.25-1.05-1.25-.65 0-1.05.425-1.05 1.25V16h-2v-6z" />
                </svg>
              </a>
              <a href="#" className="text-stone-500 hover:text-cyan-600 transition" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.5 0-.175 0-.35-.013-.525A8.192 8.192 0 0022 5.3a8.385 8.385 0 01-2.356.625 4.06 4.06 0 001.8-2.3 8.12 8.12 0 01-2.6 1 4.072 4.072 0 00-6.95 3.7 11.6 11.6 0 01-8.425-4.25 4.072 4.072 0 001.25 5.45A3.78 3.78 0 012 8.725v.05A4.07 4.07 0 004.06 13a4.066 4.066 0 01-1.8.05A4.074 4.074 0 006.5 16a8.194 8.194 0 01-6 1.675A11.616 11.616 0 008.29 20z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-stone-200 pt-4 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Dr. Marios Zisis. All rights reserved. Created By{' '}
          <a href="http://panteliskarabetsos.com/" target="_blank" rel="noopener noreferrer"  className="hover:text-cyan-600 transition  underline underline-offset-2 hover:no-underline">
            Pantelis.dev
          </a>
        </div>
      </div>
    </footer>
  );
}  


