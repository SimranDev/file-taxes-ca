import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/src/components/BackButton";

export const metadata: Metadata = {
  title: "Services - FileTaxes.ca",
  description: "Professional Canadian tax filing and accounting services",
};

const services = [
  {
    id: "tax-preparation",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 16h20M14 24h20M14 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="36" r="8" fill="#1E4BB8" />
        <path d="M33 36l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Tax Preparation",
    subtitle: "For Businesses & Individuals",
    description:
      "Expert tax preparation services tailored for both businesses and individuals. We ensure maximum deductions while keeping you fully compliant with CRA regulations.",
  },
  {
    id: "accounting",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M6 16h36" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="30" r="8" stroke="#1E4BB8" strokeWidth="2" fill="none" />
        <path d="M24 26v8M20 30h8" stroke="#1E4BB8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Accounting",
    subtitle: "Full-Service Solutions",
    description:
      "Comprehensive accounting services to help you make informed financial decisions. From financial statements to strategic planning, we've got you covered.",
  },
  {
    id: "bookkeeping",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10h28a2 2 0 012 2v28a2 2 0 01-2 2H8V10z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 10V6a2 2 0 012-2h24a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 18h16M14 26h16M14 34h10" stroke="#1E4BB8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Bookkeeping",
    subtitle: "Accurate & Organized",
    description:
      "Keep your financial records accurate and up-to-date. Our meticulous bookkeeping services ensure you always have a clear picture of your business finances.",
  },
  {
    id: "cra-audits",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M29 29l10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 20l3 3 6-6" stroke="#1E4BB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "CRA Audits",
    subtitle: "Expert Representation",
    description:
      "Facing a CRA audit? Don't worry. Our experienced team will guide you through the process and represent your interests to achieve the best possible outcome.",
  },
];

const features = [
  {
    title: "Professional",
    description:
      "Our team of certified accountants brings years of experience and expertise to handle all your tax and accounting needs with precision.",
  },
  {
    title: "Reliable",
    description:
      "We meet deadlines consistently and ensure your financial matters are handled with the utmost care and attention to detail.",
  },
  {
    title: "Transparent",
    description: "No hidden fees or surprises. We provide clear pricing and keep you informed every step of the way.",
  },
  {
    title: "Personalized",
    description: "Every client is unique. We tailor our services to meet your specific needs and financial goals.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-white to-blue-50 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Illustration */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-linear-to-br from-[#1E4BB8]/10 to-blue-100 rounded-3xl p-8 lg:p-12">
                <svg className="w-full max-w-md mx-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Person */}
                  <circle cx="150" cy="80" r="35" fill="#FFE4C4" />
                  <path d="M115 80c0-19.33 15.67-35 35-35s35 15.67 35 35" fill="#2D2D2D" />
                  <circle cx="140" cy="75" r="4" fill="#2D2D2D" />
                  <circle cx="160" cy="75" r="4" fill="#2D2D2D" />
                  <path d="M145 90c5 5 10 5 15 0" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" />

                  {/* Body */}
                  <path d="M120 120c0 0 10 80 30 80s30-80 30-80" fill="#1E4BB8" />
                  <path d="M100 130l20-10v30l-20 10z" fill="#1E4BB8" />

                  {/* Document/Clipboard */}
                  <rect x="220" y="60" width="120" height="160" rx="8" fill="white" stroke="#1E4BB8" strokeWidth="3" />
                  <rect x="250" y="50" width="60" height="20" rx="4" fill="#1E4BB8" />
                  <path d="M240 100h80M240 130h80M240 160h60" stroke="#E5E7EB" strokeWidth="8" strokeLinecap="round" />

                  {/* Checkmark */}
                  <circle cx="320" cy="180" r="25" fill="#22C55E" />
                  <path d="M308 180l8 8 16-16" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Calculator */}
                  <rect x="60" y="180" width="70" height="90" rx="6" fill="#F3F4F6" stroke="#1E4BB8" strokeWidth="2" />
                  <rect x="70" y="190" width="50" height="20" rx="2" fill="#1E4BB8" />
                  <circle cx="80" cy="225" r="6" fill="#D1D5DB" />
                  <circle cx="95" cy="225" r="6" fill="#D1D5DB" />
                  <circle cx="110" cy="225" r="6" fill="#D1D5DB" />
                  <circle cx="80" cy="245" r="6" fill="#D1D5DB" />
                  <circle cx="95" cy="245" r="6" fill="#D1D5DB" />
                  <circle cx="110" cy="245" r="6" fill="#22C55E" />

                  {/* Floating elements */}
                  <circle cx="50" cy="100" r="8" fill="#1E4BB8" opacity="0.3" />
                  <circle cx="350" cy="250" r="12" fill="#1E4BB8" opacity="0.2" />
                  <path d="M370 80l10-10M380 80l-10-10" stroke="#1E4BB8" strokeWidth="2" opacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[#1E4BB8] font-semibold text-sm uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Tax & Accounting Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of experienced professionals is here to help you navigate Canadian tax laws with confidence. From
                personal tax returns to complex business accounting, we provide comprehensive solutions tailored to your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#1E4BB8] text-white font-semibold rounded-full hover:bg-[#1a3f9e] transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial services designed to help Canadian businesses and individuals achieve their financial goals
              while staying compliant with tax regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-[#1E4BB8]/20 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-gray-700 group-hover:bg-[#1E4BB8]/10 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                    <span className="inline-block text-[#1E4BB8] text-sm font-medium mb-3">{service.subtitle}</span>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-[#1E4BB8] to-[#1a3f9e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Illustration */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
                <svg className="w-full max-w-sm mx-auto" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Two people discussing */}
                  <circle cx="100" cy="80" r="30" fill="#FFE4C4" />
                  <path d="M70 80c0-16.57 13.43-30 30-30s30 13.43 30 30" fill="#2D2D2D" />
                  <circle cx="90" cy="75" r="3" fill="#2D2D2D" />
                  <circle cx="110" cy="75" r="3" fill="#2D2D2D" />
                  <path d="M95 88c3 3 7 3 10 0" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" />
                  <path d="M70 115h60v85c0 5.5-4.5 10-10 10H80c-5.5 0-10-4.5-10-10v-85z" fill="#22C55E" />

                  <circle cx="200" cy="90" r="28" fill="#FFE4C4" />
                  <path d="M172 90c0-15.46 12.54-28 28-28s28 12.54 28 28" fill="#4A3728" />
                  <circle cx="192" cy="86" r="3" fill="#2D2D2D" />
                  <circle cx="208" cy="86" r="3" fill="#2D2D2D" />
                  <path d="M195 98c3 3 7 3 10 0" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" />
                  <path d="M175 125h50v75c0 5.5-4.5 10-10 10h-30c-5.5 0-10-4.5-10-10v-75z" fill="white" />

                  {/* Document between them */}
                  <rect x="130" y="140" width="40" height="50" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M138 155h24M138 165h24M138 175h16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />

                  {/* Decorative elements */}
                  <circle cx="50" cy="180" r="15" fill="white" opacity="0.1" />
                  <circle cx="260" cy="60" r="20" fill="white" opacity="0.1" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Relax, You&apos;re in Good Hands</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                With years of experience serving Canadian businesses and individuals, we understand the complexities of Canadian
                tax laws and are committed to providing exceptional service.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Let us show you how our expert team can help simplify your tax and
            accounting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1E4BB8] text-white font-semibold rounded-full hover:bg-[#1a3f9e] transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E4BB8] font-semibold rounded-full border-2 border-[#1E4BB8] hover:bg-[#1E4BB8] hover:text-white transition-colors"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
