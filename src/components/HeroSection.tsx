"use client";

import Link from "next/link";
import { motion, type Easing } from "framer-motion";

const bulletPoints = ["Personal & Corporate Tax Filing", "Fleet & Driver Tax Solutions", "Free Consultation Available"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as Easing,
    },
  },
};

const floatingAnimation = {
  y: [-3, 3, -3],
  transition: {
    duration: 8,
    ease: "easeInOut" as Easing,
    repeat: Infinity,
  },
};

const pulseGlowAnimation = {
  scale: [1, 1.01, 1],
  boxShadow: ["0 0 0 0 rgba(249, 115, 22, 0.2)", "0 0 0 6px rgba(249, 115, 22, 0)", "0 0 0 0 rgba(249, 115, 22, 0)"],
  transition: {
    duration: 4,
    ease: "easeInOut" as Easing,
    repeat: Infinity,
  },
};

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-[#FFF7ED] via-white to-[#F0FDFA] pt-20 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
      {/* Decorative Elements */}

      <motion.div
        className="absolute top-40 right-20 w-6 h-6 border-2 border-teal-600 rounded-full"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div className="absolute bottom-20 left-1/4 w-3 h-3 bg-teal-600 rounded-full" animate={floatingAnimation} />

      {/* Star shapes */}
      <motion.svg
        className="absolute top-32 right-10 w-8 h-8 text-[#F59E0B] opacity-60"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
      </motion.svg>
      <motion.svg
        className="absolute bottom-40 right-1/3 w-6 h-6 text-teal-600 opacity-40"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z" />
      </motion.svg>

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 16,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.05, 1, 1.05],
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-400/10 rounded-full mb-6"
            >
              <motion.span
                className="w-2 h-2 bg-orange-500 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <span className="text-[#D97706] font-semibold text-sm">Accounting Simplified</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl"
            >
              <span className="text-gray-900">Maximize Your </span>
              <motion.span
                className="text-orange-500 inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{
                  background: "linear-gradient(90deg, #f97316, #ea580c, #f97316)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                Tax Refund
              </motion.span>
              <br />
              <motion.span
                className="text-amber-500 inline-block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Every Dollar Counts
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base lg:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
              Canada&apos;s trusted tax filing experts for individuals, businesses, and owner-operators. We find deductions others
              miss.
            </motion.p>

            {/* Bullet Points */}
            <motion.div variants={itemVariants} className="space-y-3 mb-6">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.6 + index * 0.15,
                    duration: 0.5,
                  }}
                  whileHover={{ x: 5 }}
                >
                  <motion.svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.7 + index * 0.15,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </motion.svg>
                  <span className="text-gray-800 font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Phone CTA */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-gray-500">Or call directly:</span>
              <motion.a
                href="tel:3653555775"
                className="text-orange-500 font-bold text-lg"
                whileHover={{
                  scale: 1.05,
                  color: "#ea580c",
                }}
                whileTap={{ scale: 0.95 }}
              >
                (365) 355-5775
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated CTA */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div animate={pulseGlowAnimation} className="rounded-full">
              <Link href="/contact">
                <motion.div
                  className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-10 sm:py-5 bg-orange-500 text-white font-bold text-base sm:text-lg rounded-full shadow-xl cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ea580c",
                    boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>Get a Free Consultation</span>
                  <motion.svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      x: [0, 2, 0],
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
