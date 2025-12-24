import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "tax-preparation",
    title: "Tax Preparation",
    description: "Expert tax preparation for businesses and individuals, ensuring maximum refunds and full CRA compliance.",
  },
  {
    id: "accounting",
    title: "Accounting",
    description: "Comprehensive accounting solutions from financial statements to strategic business planning.",
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    description: "Accurate record-keeping services to maintain a clear picture of your business finances.",
  },
  {
    id: "cra-audits",
    title: "CRA Audit Support",
    description: "Professional representation and guidance through CRA audits for the best possible outcome.",
  },
];

const stats = [
  { number: "500+", label: "Tax Returns Filed", icon: "📋" },
  { number: "98%", label: "Client Satisfaction", icon: "⭐" },
  { number: "15+", label: "Years Experience", icon: "🏆" },
  { number: "24h", label: "Response Time", icon: "⏰" },
];

const checklistItems = [
  "Personal & Business Tax Returns",
  "Tax Planning & Strategy",
  "Bookkeeping & Virtual CFO",
  "CRA Audit Representation",
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#FDF8F3] via-white to-[#F0E6FF] pt-20 pb-8 lg:pt-24 lg:pb-12">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#F59E0B] rounded-full opacity-60" />
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-[#1E4BB8] rounded-full opacity-40" />
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-[#1E4BB8] rounded-full opacity-30" />

        {/* Decorative star shapes */}
        <svg className="absolute top-32 right-10 w-8 h-8 text-[#F59E0B] opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
        </svg>
        <svg className="absolute bottom-40 right-1/3 w-6 h-6 text-[#1E4BB8] opacity-40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                We Are Here To{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#1E4BB8]">Help You</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8c40-6 80-6 120-2s60 4 76 2" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                On Tax Consultation.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                We listen and effectively respond to your needs and those of your business. We are experts at translating complex
                Canadian tax laws into simple solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] text-white font-semibold rounded-full hover:bg-[#D97706] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-200 hover:border-[#1E4BB8] hover:text-[#1E4BB8] transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main image container with decorative background */}
                <div className="relative">
                  {/* Decorative blob behind image */}
                  <div className="absolute -top-4 -right-4 w-full h-full bg-linear-to-br from-[#1E4BB8]/20 to-[#F59E0B]/20 rounded-3xl transform rotate-3" />

                  <div className="relative bg-linear-to-br from-[#F0E6FF] to-[#FDF8F3] rounded-3xl overflow-hidden">
                    <Image
                      src="/hero-img.avif"
                      alt="Professional tax consultant"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>

                  {/* Floating badge - Tax Expert */}
                  <div className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">CRA Certified</p>
                      <p className="text-sm text-gray-500">Tax Experts</p>
                    </div>
                  </div>

                  {/* Floating badge - Calculator */}
                  <div className="absolute -right-2 bottom-1/4 bg-white rounded-2xl shadow-xl p-4">
                    <div className="w-12 h-12 bg-[#1E4BB8]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1E4BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white relative">
        {/* Decorative diamond */}
        <svg className="absolute top-10 right-10 w-8 h-8 text-[#1E4BB8] opacity-20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Team Image */}
            <div className="relative">
              <div className="relative">
                {/* Background shape */}
                <div className="absolute -inset-4 bg-linear-to-br from-[#1E4BB8]/5 to-[#F59E0B]/5 rounded-3xl transform -rotate-2" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop"
                    alt="Our professional team"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#1E4BB8] text-white rounded-2xl p-6 shadow-xl">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-[#F59E0B]/10 text-[#D97706] font-semibold text-sm rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                We&apos;re{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#1E4BB8]">Experienced</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#F59E0B]/30 -z-0" />
                </span>{" "}
                In Tax Preparation, Business And Financial Services.
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We, here at FileTaxes.ca, are a team of highly qualified professionals who have diversified experience in
                different fields including Tax Preparation, Corporate Tax Planning, Financial Accounting, and CRA Audit
                Representation.
              </p>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="shrink-0 w-6 h-6 bg-[#1E4BB8]/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#1E4BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-[#1E4BB8] transition-all duration-300"
              >
                Explore More About Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#E9DFFF] via-[#F0E6FF] to-[#E9DFFF] relative overflow-hidden">
        {/* Decorative elements */}
        <svg className="absolute top-4 right-8 w-10 h-10 text-[#1E4BB8] opacity-30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l1.5 4.5H18l-3.5 2.7 1.3 4.3L12 10.8l-3.8 2.7 1.3-4.3L6 6.5h4.5z" />
        </svg>
        <div className="absolute bottom-4 left-8 w-4 h-4 border-2 border-[#F59E0B] rounded-full opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index === 1 ? "border-2 border-[#F59E0B]" : ""
                }`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.number}</p>
                <p className="text-gray-600 text-sm lg:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1E4BB8]/10 text-[#1E4BB8] font-semibold text-sm rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Tax & Financial Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From individual tax returns to complex business accounting, we offer a full suite of services tailored to Canadian
              tax regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-[#1E4BB8]/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Service number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-[#1E4BB8]/10 transition-colors">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-linear-to-br from-[#1E4BB8] to-[#1a3f9e] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.id === "tax-preparation" && (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    )}
                    {service.id === "accounting" && (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {service.id === "bookkeeping" && (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    )}
                    {service.id === "cra-audits" && (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E4BB8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

                  <Link
                    href="/services"
                    className="inline-flex items-center text-[#1E4BB8] font-semibold group-hover:text-[#F59E0B] transition-colors"
                  >
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-[#1E4BB8] to-[#152d6e] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#F59E0B] rounded-full opacity-60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Simplify Your Taxes?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a free consultation with our expert team. Let us handle the complexity while you focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] text-white font-semibold rounded-full hover:bg-[#D97706] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white hover:text-[#1E4BB8] transition-all duration-300"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
