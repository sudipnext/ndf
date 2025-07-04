"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 dotted-pattern-light opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 dotted-pattern opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="space-y-8">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1e2d] leading-tight">
                Welcome to the{" "}
                <span className="block">Digital Farm</span>
                <span className="block">where ideas grow</span>
                <span className="block">into innovation.</span>
                </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                Bring your products together to make a faster go to market,
                augment your IT team or optimize existing processes.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/#discover-us"
                className="NDF-blue text-white px-8 py-4 rounded-full font-medium hover:NDF-blue/90 transition-colors duration-200"
              >
                let's talk
              </Link>
            </div>

            {/* Client logos */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by companies and Organizations
              </p>
              <div className="flex items-center space-x-8 opacity-60">
                <Image
                  src="https://mechicampus.edu.np/front/dark-logo.png"
                  alt="Mechi Campus"
                  width={80}
                  height={40}
                  className="h-8 w-auto grayscale"
                />
                
              </div>
            </div>
          </div>

          {/* Right column - Statistics and testimonial */}
          <div className="relative">
            {/* Cover background image */}
            <Image
              src="./hero-cover-bg.png"
              alt="Decorative background"
              fill
              className="object-cover rounded-xl z-0"
              style={{ opacity: 0.9 }}
              priority
            />
            <div className="space-y-8 relative z-10">
              {/* Years in business */}
              <div className="text-center lg:text-left relative">
                {/* Dotted pattern background */}
                <div className="absolute -top-5 -left-5 z-0">
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-80"
                        style={{
                          marginBottom:
                            (i + 1) % 5 === 0 ? "0.25rem" : undefined,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                {/* Card content */}
                <div className="inline-block bg-white rounded-xl shadow-lg border p-6 relative z-10">
                  <div>
                    <div className="text-3xl font-bold text-[#0a1e2d]">
                      +6 <span className="font-normal">years</span>
                    </div>
                    <div className="text-md text-gray-700">in business</div>
                  </div>
                </div>
              </div>

              {/* Happy clients stat */}
              <div className="text-center flex justify-end relative">
                {/* Dotted pattern background */}
                {/* Card content */}
                <div className="relative">
                <div className="absolute -top-5 -left-5 z-0">
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-80"
                        style={{
                          marginBottom:
                            (i + 1) % 5 === 0 ? "0.25rem" : undefined,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                  <div className="inline-block bg-white rounded-xl shadow-lg border p-6 relative z-10">
                    <div className="text-3xl font-bold text-[#0a1e2d]">
                      +30 <span className="font-normal">Happy</span>
                    </div>
                    <div className="text-md text-gray-700">Clients</div>
                  </div>
                </div>
              </div>

              {/* Testimonial quote */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <p className="text-gray-700 italic mb-4">
                  "They are a great team to work with. Their expertise in
                  software development has helped us scale our operations
                  significantly. They are responsive, professional, and always
                  deliver on time."
                </p>
                <div className="flex items-center">
                  <Image
                    src="./logo_org.png"
                    alt="Roche"
                    width={60}
                    height={30}
                    className="h-6 w-auto opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
