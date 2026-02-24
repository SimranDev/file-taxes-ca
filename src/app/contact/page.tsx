"use client";

import { useState } from "react";
import { CONTACT, TEAM } from "@/src/constants/contact";
import BackButton from "@/src/components/BackButton";

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
        <section className="bg-linear-to-br from-orange-50 to-teal-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <BackButton />

            <div className="grid md:grid-cols-2 gap-12">
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
                  <a href={CONTACT.PHONE_HREF} className="text-orange-600 hover:text-orange-700 transition-colors block">
                    {CONTACT.PHONE}
                  </a>
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
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
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
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
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
                        className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                        className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
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
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none ${
                        getFieldError("message") ? "border-red-300 bg-red-50" : "border-gray-200"
                      }`}
                      disabled={status === "submitting"}
                    ></textarea>
                    {getFieldError("message") && <p className="mt-1 text-sm text-red-600">{getFieldError("message")}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Submit"}
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    By contacting us, you agree to our{" "}
                    <a href="#" className="text-orange-600 underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-orange-600 underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Team Member Cards */}
              {TEAM.map((member) => (
                <div key={member.name} className="bg-gray-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <a href={member.phoneHref} className="text-gray-600 hover:text-orange-600 transition-colors">
                    {member.phone}
                  </a>
                </div>
              ))}

              {/* Email Card */}
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <a href={`mailto:${CONTACT.EMAIL}`} className="text-gray-600 hover:text-orange-600 transition-colors">
                  {CONTACT.EMAIL}
                </a>
              </div>
            </div>

            {/* Service Info Bar */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{CONTACT.SERVICE_AREA}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{CONTACT.BUSINESS_HOURS}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
