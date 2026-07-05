"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const navLinks = [
  {
    number: "01",
    href: "/about",
    label: "About",
    description: "Background, training and clinical journey.",
  },
  {
    number: "02",
    href: "/research",
    label: "Research",
    description: "Research interests and academic publications.",
  },
  {
    number: "03",
    href: "/contact",
    label: "Contact",
    description: "Professional inquiries and collaboration.",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showName, setShowName] = useState(pathname !== "/");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 20);

      if (pathname === "/") {
        setShowName(scrollPosition > 420);
      } else {
        setShowName(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "border-stone-200/80 bg-white/95 shadow-[0_8px_35px_-28px_rgba(28,25,23,0.45)] backdrop-blur-xl"
            : "border-stone-200/60 bg-white/85 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-10 xl:px-16">
          <div className="relative flex h-[72px] items-center justify-between">
            {/* BRAND */}
            <Link
              href="/"
              aria-label="Dr. Marios Zisis — Home"
              className="group relative z-10 flex min-w-0 items-center"
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-stone-200 bg-white transition duration-500 group-hover:border-cyan-200">
                <Image
                  src="/circle-palm.gif"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </span>

              <AnimatePresence initial={false}>
                {(showName || isMenuOpen) && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -8,
                      width: 0,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      width: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      x: -6,
                      width: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 whitespace-nowrap">
                      <p className="text-sm font-semibold tracking-[-0.025em] text-stone-950 sm:text-[15px]">
                        Dr. Marios Zisis
                      </p>

                      <p className="mt-0.5 hidden text-[8px] font-semibold uppercase tracking-[0.21em] text-stone-400 sm:block">
                        Medicine · Research
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav
              aria-label="Primary navigation"
              className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex"
            >
              <div className="flex items-center rounded-full border border-stone-200/80 bg-stone-50/70 p-1">
                {navLinks
                  .filter((link) => link.href !== "/contact")
                  .map((link) => (
                    <DesktopNavLink
                      key={link.href}
                      href={link.href}
                      isActive={pathname === link.href}
                    >
                      {link.label}
                    </DesktopNavLink>
                  ))}
              </div>
            </nav>

            {/* DESKTOP CONTACT */}
            <div className="relative z-10 hidden md:block">
              <Link
                href="/contact"
                className={`group inline-flex h-11 items-center gap-5 rounded-full pl-5 pr-1.5 text-xs font-semibold transition duration-500 ${
                  pathname === "/contact"
                    ? "bg-cyan-800 text-white"
                    : "bg-stone-950 text-white hover:bg-cyan-800"
                }`}
              >
                Contact

                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${
                    pathname === "/contact"
                      ? "bg-white text-cyan-800"
                      : "bg-white text-stone-950"
                  }`}
                >
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                  />
                </span>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen((current) => !current);
              }}
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="relative z-10 flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-stone-200 bg-white text-stone-950 transition duration-300 active:scale-95 md:hidden"
            >
              <AnimatePresence
                initial={false}
                mode="wait"
              >
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -45,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 45,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <X
                      size={19}
                      strokeWidth={1.7}
                    />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 45,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -45,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <Menu
                      size={19}
                      strokeWidth={1.7}
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.4,
              ease,
            }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-[#f8f8f6] md:hidden"
          >
            <div className="flex min-h-full flex-col px-5 pb-7 pt-10 sm:px-8">
              {/* MENU LABEL */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.08,
                  ease,
                }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-7 bg-cyan-700" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-cyan-800">
                  Navigation
                </p>
              </motion.div>

              {/* LINKS */}
              <div className="mt-9 border-t border-stone-300">
                {navLinks.map((link, index) => {
                  const isActive =
                    pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.12 + index * 0.07,
                        ease,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                        className="group grid grid-cols-[32px_1fr_42px] items-center gap-4 border-b border-stone-300 py-7"
                      >
                        <span
                          className={`text-[9px] font-medium tabular-nums transition-colors ${
                            isActive
                              ? "text-cyan-800"
                              : "text-stone-400"
                          }`}
                        >
                          {link.number}
                        </span>

                        <div>
                          <p
                            className={`text-[2rem] font-medium leading-none tracking-[-0.05em] transition-colors ${
                              isActive
                                ? "text-cyan-800"
                                : "text-stone-950"
                            }`}
                          >
                            {link.label}
                          </p>

                          <p className="mt-3 max-w-[15rem] text-xs leading-5 text-stone-500">
                            {link.description}
                          </p>
                        </div>

                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                            isActive
                              ? "rotate-45 border-cyan-800 bg-cyan-800 text-white"
                              : "border-stone-300 text-stone-500 group-hover:rotate-45 group-hover:border-cyan-800 group-hover:bg-cyan-800 group-hover:text-white"
                          }`}
                        >
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.7}
                          />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* MOBILE FOOTER */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
                className="mt-auto pt-12"
              >
                <div className="flex items-end justify-between border-t border-stone-300 pt-6">
                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                      Dr. Marios Zisis
                    </p>

                    <p className="mt-2 max-w-[13rem] text-xs leading-5 text-stone-500">
                      Medicine, cardiovascular research and patient-centered
                      care.
                    </p>
                  </div>

                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-700" />
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function DesktopNavLink({
  href,
  children,
  isActive,
}) {
  return (
    <Link
      href={href}
      className={`relative flex h-9 min-w-[94px] items-center justify-center rounded-full px-5 text-xs font-semibold transition-colors duration-300 ${
        isActive
          ? "text-stone-950"
          : "text-stone-500 hover:text-stone-950"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="desktop-navigation-active"
          transition={{
            duration: 0.4,
            ease,
          }}
          className="absolute inset-0 rounded-full border border-stone-200 bg-white shadow-[0_5px_18px_-12px_rgba(28,25,23,0.4)]"
        />
      )}

      <span className="relative z-10">
        {children}
      </span>
    </Link>
  );
}