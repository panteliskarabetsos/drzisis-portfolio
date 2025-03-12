"use client";
import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false); // reset success state on new submission

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
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-stone-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Title & Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-stone-600 leading-relaxed">
            Whether you’re interested in discussing residency opportunities, research collaborations, or simply want to share insights on medical practice, I would love to connect.
          </p>
        </div>

        {/* Responsive Grid: stacks on mobile, two-column on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col space-y-8 justify-center">
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-stone-600" />
              <div>
                <p className="text-sm text-stone-500">Email</p>
                <a
                  href="mailto:mzisis@example.com"
                  className="text-stone-800 font-medium hover:underline underline-offset-2"
                >
                  mzisis01@gmail.com
                </a>
              </div>
            </div>
            {/* <div className="flex items-center space-x-4">
              <PhoneIcon className="h-6 w-6 text-stone-600" />
              <div>
                <p className="text-sm text-stone-500">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-stone-800 font-medium hover:underline underline-offset-2"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div> */}
            <div className="flex items-center space-x-4">
              <MapPinIcon className="h-6 w-6 text-stone-600" />
              <div>
                <p className="text-sm text-stone-500">Location</p>
                <p className="text-stone-800 font-medium">Athens, Greece</p>
              </div>
            </div>
           
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-xl shadow-lg transition-all duration-300"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  onInvalid={(e) => e.target.setCustomValidity("Please enter your Name.")}
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="
                    mt-1 block w-full rounded-md border border-stone-300 py-2 px-4 shadow-sm
                    focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500
                    text-sm placeholder-stone-400 transition-colors duration-200
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onInvalid={(e) => e.target.setCustomValidity("Please enter a valid Email address.")}
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="
                    mt-1 block w-full rounded-md border border-stone-300 py-2 px-4 shadow-sm
                    focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500
                    text-sm placeholder-stone-400 transition-colors duration-200
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  onInvalid={(e) => e.target.setCustomValidity("Please enter your Message.")}
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="
                    mt-1 block w-full rounded-md border border-stone-300 py-2 px-4 shadow-sm
                    focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500
                    text-sm placeholder-stone-400 transition-colors duration-200
                  "
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  inline-block w-full rounded-md bg-cyan-600 py-2 px-4 text-sm font-medium text-white
                  transition-all duration-200 transform hover:-translate-y-[1px] hover:bg-red-900 hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                  ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}
                `}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Success Message */}
            {isSuccess && (
              <div className="mt-6 flex flex-col items-center justify-center p-4 border border-green-300 bg-green-50 rounded-md text-green-800">
                <CheckCircleIcon className="h-8 w-8 mb-2 text-green-500" />
                <p className="font-semibold">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
