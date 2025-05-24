"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";

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
    <main className="bg-gradient-to-b from-stone-100 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-stone-900 mb-6">Contact</h1>
        <p className="text-stone-600 mb-16 max-w-xl mx-auto">
          Whether you&apos;re reaching out for collaborations, research opportunities or general inquiries, I&apos;d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          <div className="flex flex-col items-center">
            <Mail size={32} className="text-cyan-600 mb-3" />
            <h4 className="text-stone-800 font-semibold mb-1">Email</h4>
            <a href="mailto:contact@drzisis.com" className="text-stone-600 hover:text-cyan-600 transition">
              contact@drzisis.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <MapPin size={32} className="text-cyan-600 mb-3" />
            <h4 className="text-stone-800 font-semibold mb-1">Location</h4>
            <p className="text-stone-600">Athens, Greece</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone size={32} className="text-cyan-600 mb-3" />
            <h4 className="text-stone-800 font-semibold mb-1">Phone</h4>
            <p className="text-stone-600">Available upon request</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-6 mx-auto max-w-2xl text-left"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-stone-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg px-4 py-3 focus:ring-cyan-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-stone-700 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg px-4 py-3 focus:ring-cyan-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-stone-700 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-lg px-4 py-3 focus:ring-cyan-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-full transition duration-300 ${
              isSubmitting && "opacity-60 cursor-wait"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
         <p className="text-[10px] sm:text-[11px] text-stone-400 italic text-center w-full mt-2">
            By clicking “Send Message”, you agree to our{" "}
            <a
              href="/legal"
              className="underline underline-offset-2 hover:text-cyan-600 transition-colors"
            >
              legal terms
            </a>.
          </p>


          {isSuccess && (
            <div className="mt-6 flex items-center justify-center text-green-600 animate-fadeIn">
              <CheckCircle size={24} className="mr-2" />
              <p>Your message has been sent!</p>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
