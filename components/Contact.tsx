"use client";

import { useState, FormEvent } from "react";

const serviceOptions = [
  "Select a Service",
  "Outdoor Contractor",
  "Sprinkler Install",
  "Sprinkler Repair / Maintenance",
  "Landscape Design & Install",
  "Landscape Maintenance",
  "Drainage Solutions",
  "Outdoor Lighting",
  "Hardscape",
  "Multiple Services",
  "Other / Not Sure",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with real form handler (Netlify, Formspree, etc.)
    await new Promise((res) => setTimeout(res, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready for a free estimate? Fill out the form below and we&apos;ll get back to you fast — usually within a few hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Phone */}
            <div className="bg-green-primary rounded-2xl p-7 text-white">
              <div className="text-sm font-semibold tracking-widest uppercase text-green-300 mb-3">
                Fastest Way to Reach Us
              </div>
              <a
                href="tel:2143330000"
                className="flex items-center gap-3 text-2xl font-bold hover:text-green-200 transition-colors mb-1"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                214.333.xxxx
              </a>
              <p className="text-white/70 text-sm">Mon–Sat, 7am–7pm</p>
            </div>

            {/* Email */}
            <div className="bg-offwhite rounded-2xl p-7">
              <div className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">
                Email Us
              </div>
              <a
                href="mailto:info@dfwrainman.com"
                className="flex items-center gap-2 text-green-primary font-semibold hover:text-green-dark transition-colors text-lg"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@dfwrainman.com
              </a>
            </div>

            {/* What to expect */}
            <div className="border border-gray-200 rounded-2xl p-7">
              <h4 className="font-bold text-charcoal mb-4">What to Expect</h4>
              <ul className="space-y-3">
                {[
                  "Fast response — usually same day",
                  "Free, no-obligation estimate",
                  "Clear pricing before any work begins",
                  "Licensed & insured team",
                  "Satisfaction guaranteed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-green-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center py-16">
                <div className="w-16 h-16 rounded-full bg-green-primary/10 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">Message Received!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thanks for reaching out. We&apos;ll review your request and get back to you shortly — usually within a few hours.
                </p>
                <p className="mt-4 text-green-primary font-semibold">
                  Or call us directly: <a href="tel:2143330000" className="underline">214.333.xxxx</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="214.555.1234"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="service">
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent transition"
                  >
                    <option value="" disabled>Select a Service</option>
                    {serviceOptions.slice(1).map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2" htmlFor="message">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Describe your project, any issues you're having, and the best time to reach you..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-primary hover:bg-green-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message — Get a Free Estimate
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Or call us directly:{" "}
                  <a href="tel:2143330000" className="text-green-primary font-semibold hover:underline">
                    214.333.xxxx
                  </a>
                  {" "}— we pick up!
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
