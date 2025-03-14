"use client";
import { useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="bg-gradient-to-b from-stone-100 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Get in Touch</h1>
          <p className="text-stone-600">
            Let&apos;s discuss opportunities, collaborate on research or connect professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">

            {/* EMAIL CLASS */}
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="h-7 w-7 text-cyan-600" />
              <div>
                <p className="text-stone-600">Email</p>
                <a href="mailto:contact@drzisis.com" className="text-stone-800 hover:text-cyan-600 transition">
                  contact@drzisis.com
                </a>
              </div>

              {/* PHONE CLASS */}
              
            </div>
              <div className="flex items-center space-x-4">
              <PhoneIcon className="h-6 w-6 text-stone-600" />
              <div>
                <p className="text-sm text-stone-500">Phone</p>
                {/* <a
                  href="tel:+1234567890"
                  className="text-stone-800 font-medium hover:underline underline-offset-2"
                >
                  +1 (234) 567-890
                </a> */}
              </div>
            </div> 

            {/* MAP CLASS */}
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-7 w-7 text-cyan-600" />
              <div>
                <p className="text-stone-600">Location</p>
                <p className="text-stone-800">Athens, Greece</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-5"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:ring-cyan-500"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-cyan-600 hover:bg-red-900 text-white font-semibold py-3 rounded-lg transition duration-200 ${
                isSubmitting && "opacity-60 cursor-wait"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {isSuccess && (
              <div className="mt-4 flex items-center justify-center text-green-600">
                <CheckCircleIcon className="h-6 w-6 mr-2" />
                <p>Your message was sent successfully!</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}