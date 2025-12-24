import Link from "next/link";
import { CONTACT, ADDRESS } from "@/src/constants/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-[#1E4BB8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{ADDRESS.COMPANY}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Your trusted partner for professional Canadian tax filing and accounting services. We simplify complex tax laws into practical solutions.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all duration-200">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-blue-100">
                  {ADDRESS.STREET}<br />
                  {ADDRESS.CITY}, {ADDRESS.PROVINCE} {ADDRESS.POSTAL_CODE}
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={CONTACT.PHONE_HREF} className="text-blue-100 hover:text-white transition-colors duration-200">
                  {CONTACT.PHONE}
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${CONTACT.EMAIL}`} className="text-blue-100 hover:text-white transition-colors duration-200">
                  {CONTACT.EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <p className="text-blue-100 text-sm text-center">
            © {currentYear} {ADDRESS.COMPANY}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}