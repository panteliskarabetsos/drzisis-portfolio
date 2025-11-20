"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        if (window.scrollY > 460) {
          setShowName(true);
        } else {
          setShowName(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowName(true);
    }
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="relative sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand (UNCHANGED) */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10">
                <Image
                  src="/circle-palm.gif"
                  alt="Portfolio Logo GIF"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  priority
                />
              </div>

              <span
                className={`ml-2 inline-block text-xl font-bold text-stone-800 transition-opacity ease-in-out duration-500 ${
                  showName ? "opacity-100" : "opacity-0"
                }`}
              >
                Dr. Marios Zisis
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <AnimatedUnderlineLink
                key={link.href}
                href={link.href}
                isActive={pathname === link.href}
              >
                {link.label}
              </AnimatedUnderlineLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full md:hidden border-b border-stone-200 bg-white/80 backdrop-blur-md transform transition-all duration-300 ease-in-out origin-top ${
          isMenuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <AnimatedUnderlineLink
              key={link.href}
              href={link.href}
              mobile
              isActive={pathname === link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </AnimatedUnderlineLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

/**
 * Reusable link component
 */
function AnimatedUnderlineLink({
  href,
  children,
  mobile = false,
  isActive = false,
  ...props
}) {
  const baseClasses = mobile
    ? "block w-full px-3 py-2 text-base font-medium"
    : "pb-1 font-medium tracking-wide";

  const colorClasses = isActive
    ? "text-stone-900"
    : "text-stone-600 hover:text-stone-900";

  const underlineClasses = mobile
    ? ""
    : `relative before:absolute before:bottom-0 before:left-0 before:h-[2px]
        before:w-0 before:bg-stone-600 before:transition-all before:duration-300
        hover:before:w-full hover:before:bg-stone-900 ${
          isActive ? "before:w-full before:bg-stone-900" : ""
        }`;

  return (
    <Link
      href={href}
      className={`${baseClasses} ${colorClasses} ${underlineClasses} transition-colors duration-200`}
      {...props}
    >
      {children}
    </Link>
  );
}
