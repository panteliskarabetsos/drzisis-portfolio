"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        "An error occurred while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-100 via-white to-stone-50 px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center rounded-full bg-stone-100 px-4 py-1 text-xs font-medium tracking-[0.16em] uppercase text-stone-600">
            Contact
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-stone-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Whether you&apos;re reaching out for collaborations, research
            opportunities or general inquiries, I&apos;d be glad to hear from
            you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          {/* Contact info / text */}
          <section className="space-y-8">
            <div className="rounded-2xl bg-white/90 p-6 shadow-md ring-1 ring-stone-200">
              <h2 className="text-lg font-semibold text-stone-900 mb-2">
                How to Reach Me
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                The easiest way to contact me is via email using the form.
                I&apos;m open to discussions about cardiology, research,
                collaborations or mentorship.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50">
                  <Mail className="h-5 w-5 text-cyan-700" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900 mb-1">
                  Email
                </h3>
                <a
                  href="mailto:contact@drzisis.com"
                  className="text-sm text-stone-600 hover:text-cyan-600 underline underline-offset-4 transition-colors"
                >
                  contact@drzisis.com
                </a>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50">
                  <MapPin className="h-5 w-5 text-cyan-700" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900 mb-1">
                  Location
                </h3>
                <p className="text-sm text-stone-600">Athens, Greece</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50">
                  <Phone className="h-5 w-5 text-cyan-700" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900 mb-1">
                  Phone
                </h3>
                <p className="text-sm text-stone-600">Available upon request</p>
              </div>
            </div>

            <p className="text-xs text-stone-500 leading-relaxed">
              Please avoid sharing sensitive personal health information in this
              form. If needed, I can provide a more appropriate channel for
              clinical details.
            </p>
          </section>

          {/* Form */}
          <section>
            <form
              onSubmit={handleSubmit}
              className="bg-white/95 p-8 rounded-2xl shadow-xl ring-1 ring-stone-200 space-y-6 text-left"
            >
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-stone-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 focus:outline-none"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-stone-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 focus:outline-none"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-stone-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-cyan-600 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/25 transition hover:bg-cyan-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-[10px] sm:text-[11px] text-stone-400 italic text-center w-full mt-2">
                By clicking &quot;Send Message&quot;, you agree to our{" "}
                <a
                  href="/legal"
                  className="underline underline-offset-2 hover:text-cyan-600 transition-colors"
                >
                  legal terms
                </a>
                .
              </p>

              {isSuccess && (
                <div className="mt-4 flex items-center justify-center rounded-lg bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <p>Your message has been sent successfully.</p>
                </div>
              )}

              {error && (
                <div className="mt-2 rounded-lg bg-rose-50 px-4 py-2 text-xs text-rose-700 text-center">
                  {error}
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
