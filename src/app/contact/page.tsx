"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <main className="pt-20">
        {/* Hero Section with Contact Form */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-gray-600 mb-8">
                Email, call, or complete the form to learn how
                <br />
                FileTaxes.ca can solve your tax filing needs.
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700">info@filetaxes.ca</p>
                <p className="text-gray-700">1-800-TAX-FILE</p>
              </div>

              {/* Info Cards */}
              <div className="space-y-6 mt-12">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
                  <p className="text-sm text-gray-600">
                    Our support team is available around the clock to address any concerns or queries you may have.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-6">You can reach us anytime</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />

                <div className="flex gap-2">
                  <select className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>+1</option>
                    <option>+44</option>
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>

                <p className="text-xs text-center text-gray-500">
                  By contacting us, you agree to our{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">FileTaxes.ca</p>
                  <p className="text-sm text-gray-600">Your Tax Solutions Partner</p>
                  <p className="text-sm text-gray-500 mt-2">Toronto, Ontario, Canada</p>
                  <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">Open Google Maps →</button>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Our Location</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Connecting Near and Far</h3>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Headquarters</h4>
                <p className="text-gray-700">FileTaxes.ca</p>
                <p className="text-gray-700">Toronto, Canada</p>
                <p className="text-gray-700">123 Bay Street, Suite 456</p>
                <p className="text-gray-700">Toronto, ON M5H 2Y4</p>
                <p className="text-gray-700">Canada</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
