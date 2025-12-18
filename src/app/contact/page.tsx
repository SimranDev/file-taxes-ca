"use client";

import { useState } from "react";
import { CONTACT, ADDRESS } from "@/src/constants/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  field: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FormErrors[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors([]);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        setErrorMessage(data.message || "Failed to send message. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setStatus("error");
    }
  };

  const getFieldError = (fieldName: string) => {
    return fieldErrors.find((err) => err.field === fieldName)?.message;
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
        <section className="bg-linear-to-br from-blue-50 to-indigo-50 py-16 px-4">
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
                <p className="text-gray-700">{CONTACT.EMAIL}</p>
                <a href={CONTACT.PHONE_HREF} className="text-blue-600 hover:text-blue-700 transition-colors block">
                  {CONTACT.PHONE}
                </a>
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

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                  <p className="text-green-700 text-sm mt-1">Thank you for contacting us. We&apos;ll get back to you soon.</p>
                </div>
              )}

              {status === "error" && errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">Failed to send message</p>
                  <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      getFieldError("name") ? "border-red-300 bg-red-50" : "border-gray-200"
                    }`}
                    required
                    disabled={status === "submitting"}
                  />
                  {getFieldError("name") && <p className="mt-1 text-sm text-red-600">{getFieldError("name")}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      getFieldError("email") ? "border-red-300 bg-red-50" : "border-gray-200"
                    }`}
                    required
                    disabled={status === "submitting"}
                  />
                  {getFieldError("email") && <p className="mt-1 text-sm text-red-600">{getFieldError("email")}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={status === "submitting"}
                    >
                      <option>+1</option>
                      <option>+44</option>
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        getFieldError("phone") ? "border-red-300 bg-red-50" : "border-gray-200"
                      }`}
                      disabled={status === "submitting"}
                    />
                  </div>
                  {getFieldError("phone") && <p className="mt-1 text-sm text-red-600">{getFieldError("phone")}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      getFieldError("message") ? "border-red-300 bg-red-50" : "border-gray-200"
                    }`}
                    required
                    disabled={status === "submitting"}
                  ></textarea>
                  {getFieldError("message") && <p className="mt-1 text-sm text-red-600">{getFieldError("message")}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Submit"}
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
              <div className="space-y-2">
                <p className="text-gray-900 font-semibold">{ADDRESS.COMPANY}</p>
                <p className="text-gray-700">{ADDRESS.STREET}</p>
                <p className="text-gray-700">
                  {ADDRESS.CITY}, {ADDRESS.PROVINCE} {ADDRESS.POSTAL_CODE}
                </p>
                <p className="text-gray-700">{ADDRESS.COUNTRY}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
