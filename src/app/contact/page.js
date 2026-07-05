"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: {
    duration: 0.7,
    ease,
  },
};

const contactDetails = [
  {
    number: "01",
    label: "Email",
    value: "contact@drzisis.com",
    href: "mailto:contact@drzisis.com",
    icon: Mail,
  },
  {
    number: "02",
    label: "Location",
    value: "Athens, Greece",
    icon: MapPin,
  },
  {
    number: "03",
    label: "Phone",
    value: "Available upon request",
    icon: Phone,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (isSuccess) {
      setIsSuccess(false);
    }

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setIsSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Unable to send message");
      }

      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (submissionError) {
      console.error("Error submitting contact form:", submissionError);

      setError(
        "Your message could not be sent. Please try again or contact me directly by email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen w-full max-w-none overflow-hidden bg-[#f8f8f6] text-stone-950 selection:bg-cyan-100 selection:text-cyan-950">
      {/* HERO */}
     {/* HERO */}
<section className="relative min-h-[48svh] w-full overflow-hidden bg-[#11110f] text-white">
  <div
    aria-hidden="true"
    className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]"
  />

  <div
    aria-hidden="true"
    className="absolute -right-56 -top-72 h-[620px] w-[620px] rounded-full border border-white/[0.06]"
  />

  <div
    aria-hidden="true"
    className="absolute -right-28 -top-56 h-[620px] w-[620px] rounded-full border border-white/[0.06]"
  />

  <div className="relative mx-auto flex min-h-[48svh] max-w-7xl items-end px-6 pb-14 pt-28 sm:px-10 sm:pb-16 lg:pb-20">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease,
      }}
      className="w-full"
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-cyan-400" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Contact
        </p>
      </div>

      <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.52fr] lg:items-end">
        <h1 className="max-w-4xl text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-white">
          Get in
          <span className="block text-white/30">
            touch.
          </span>
        </h1>

        <div className="border-l border-white/20 pl-6">
          <p className="max-w-md text-sm leading-7 text-stone-300 sm:text-base">
            For research collaborations, academic opportunities or professional
            inquiries, I would be glad to hear from you.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="w-full px-6 py-24 sm:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-28">
            {/* CONTACT INFORMATION */}
            <motion.div
              {...fadeUp}
              className="lg:sticky lg:top-28 lg:h-fit"
            >
              <SectionLabel>Get in Touch</SectionLabel>

              <h2 className="mt-7 max-w-lg text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Open to meaningful
                <span className="block text-cyan-800">
                  conversations.
                </span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-stone-500">
                The easiest way to reach me is through the contact form or
                directly by email. I welcome discussions around cardiology,
                clinical research and academic collaboration.
              </p>

              <div className="mt-14 border-t border-stone-300">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  const content = (
                    <div className="group grid grid-cols-[34px_42px_1fr_auto] items-center gap-4 border-b border-stone-300 py-6">
                      <span className="text-[9px] font-medium tabular-nums text-stone-400">
                        {detail.number}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-cyan-800 transition duration-500 group-hover:border-cyan-800 group-hover:bg-cyan-800 group-hover:text-white">
                        <Icon size={16} strokeWidth={1.7} />
                      </span>

                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                          {detail.label}
                        </p>

                        <p className="mt-1 truncate text-sm font-medium text-stone-800">
                          {detail.value}
                        </p>
                      </div>

                      {detail.href && (
                        <ArrowUpRight
                          size={15}
                          className="text-stone-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-800"
                        />
                      )}
                    </div>
                  );

                  if (detail.href) {
                    return (
                      <a
                        key={detail.label}
                        href={detail.href}
                        className="block"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={detail.label}>
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex gap-4 border-l border-stone-300 pl-5">
                <ShieldCheck
                  size={18}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-cyan-800"
                />

                <p className="max-w-sm text-xs leading-6 text-stone-500">
                  Please avoid sharing sensitive personal health information
                  through this form. A more appropriate communication channel
                  can be arranged when necessary.
                </p>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              {...fadeUp}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease,
              }}
            >
              <div className="border-t border-stone-300">
                <div className="flex items-center justify-between border-b border-stone-300 py-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-stone-500">
                    Send a message
                  </p>

                  <span className="h-2 w-2 rounded-full bg-cyan-700" />
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="pt-4"
                >
                  {/* NAME */}
                  <FormField
                    number="01"
                    label="Full Name"
                    htmlFor="name"
                  >
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-0 bg-transparent p-0 text-lg font-medium tracking-[-0.02em] text-stone-950 outline-none placeholder:text-stone-300 focus:ring-0 sm:text-xl"
                    />
                  </FormField>

                  {/* EMAIL */}
                  <FormField
                    number="02"
                    label="Email Address"
                    htmlFor="email"
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-0 bg-transparent p-0 text-lg font-medium tracking-[-0.02em] text-stone-950 outline-none placeholder:text-stone-300 focus:ring-0 sm:text-xl"
                    />
                  </FormField>

                  {/* MESSAGE */}
                  <FormField
                    number="03"
                    label="Your Message"
                    htmlFor="message"
                    large
                  >
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me what you would like to discuss..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none border-0 bg-transparent p-0 text-lg font-medium leading-8 tracking-[-0.02em] text-stone-950 outline-none placeholder:text-stone-300 focus:ring-0 sm:text-xl"
                    />
                  </FormField>

                  {/* STATUS */}
                  <AnimatePresence mode="wait">
                    {isSuccess && (
                      <motion.div
                        key="success"
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -5,
                        }}
                        transition={{
                          duration: 0.35,
                          ease,
                        }}
                        className="mt-8 flex items-start gap-4 border-l-2 border-emerald-600 bg-emerald-50/70 px-5 py-4"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-emerald-700"
                        />

                        <div>
                          <p className="text-sm font-semibold text-emerald-900">
                            Message sent successfully.
                          </p>

                          <p className="mt-1 text-xs leading-5 text-emerald-700">
                            Thank you for reaching out. Your message has been
                            received.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {error && (
                      <motion.div
                        key="error"
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -5,
                        }}
                        transition={{
                          duration: 0.35,
                          ease,
                        }}
                        className="mt-8 border-l-2 border-rose-600 bg-rose-50/70 px-5 py-4"
                      >
                        <p className="text-sm leading-6 text-rose-800">
                          {error}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* SUBMIT */}
                  <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-[10px] leading-5 text-stone-400">
                      By sending this message, you acknowledge the{" "}
                      <a
                        href="/legal"
                        className="text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-cyan-800"
                      >
                        legal terms
                      </a>
                      .
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex h-14 w-fit items-center gap-8 rounded-full bg-stone-950 pl-7 pr-2 text-sm font-medium text-white transition duration-500 hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span>
                        {isSubmitting
                          ? "Sending..."
                          : "Send Message"}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-950 transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight size={17} />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLOSING STRIP */}
      <section className="w-full border-t border-stone-300 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
          <motion.div
            {...fadeUp}
            className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-800">
              Dr. Marios Zisis
            </p>

            <p className="max-w-4xl text-2xl font-medium leading-[1.4] tracking-[-0.04em] text-stone-700 sm:text-3xl lg:text-4xl">
              Interested in clinical research, cardiovascular medicine and{" "}
              <span className="text-stone-400">
                meaningful academic collaboration.
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({
  children,
  light = false,
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`h-px w-8 ${
          light ? "bg-cyan-400" : "bg-cyan-700"
        }`}
      />

      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${
          light
            ? "text-cyan-300"
            : "text-cyan-800"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function FormField({
  number,
  label,
  htmlFor,
  children,
  large = false,
}) {
  return (
    <div
      className={`group grid gap-5 border-b border-stone-300 py-8 transition-colors duration-300 focus-within:border-cyan-700 sm:grid-cols-[58px_180px_1fr] sm:gap-6 ${
        large
          ? "sm:items-start sm:py-10"
          : "sm:items-center"
      }`}
    >
      <span className="text-[9px] font-medium tabular-nums text-stone-400 transition-colors duration-300 group-focus-within:text-cyan-800">
        {number}
      </span>

      <label
        htmlFor={htmlFor}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 transition-colors duration-300 group-focus-within:text-cyan-800"
      >
        {label}
      </label>

      <div>{children}</div>
    </div>
  );
}