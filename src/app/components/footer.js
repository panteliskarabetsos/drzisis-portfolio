import { InstagramIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 text-stone-800 py-8 sm:py-10 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">

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

          {/* Privacy Policy */}
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
            <div className="mt-2 text-sm">
              <a href="mailto:contact@drzisis.com" className="hover:text-cyan-600 transition-colors">
                contact@drzisis.com
              </a>
            </div>

            <div className="flex justify-center sm:justify-start mt-4 space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/marioszisis/"
                aria-label="LinkedIn"
                className="text-stone-500 hover:text-cyan-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/maioszisis/"
                aria-label="Instagram"
                className="text-stone-500 hover:text-cyan-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-stone-200 pt-4 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Dr. Marios Zisis. All rights reserved. Created by{' '}
          <a
            href="http://panteliskarabetsos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition underline underline-offset-2 hover:no-underline"
          >
            Pantelis
          </a>
        </div>
      </div>
    </footer>
  );
}
