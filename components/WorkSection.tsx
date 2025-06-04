"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const WorkSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-4">
            Work we <span className="text-primary">love</span>
          </h2>
          <p className="text-lg text-gray-600">
            Success stories from all over the world
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Uber Case Study */}
          <div className="bg-black rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[400px] flex items-end">
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <Image
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/uber.svg"
                alt="Uber"
                width={80}
                height={40}
                className="h-12 w-auto mb-6 filter invert"
              />
            </div>
          </div>

          {/* Lexly Case Study */}
          <div className="bg-[#0a1e2d] rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[400px] flex items-center justify-center">
            {/* Tech Pattern Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 gap-2 h-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div
                    key={i}
                    className="NDF-blue w-1 h-1 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="relative z-10 text-center">
              <div className="text-white text-2xl font-bold mb-2">LEXLY</div>
              <div className="text-primary text-sm">LAW MADE EASY</div>
            </div>
          </div>
        </div>

        {/* Roche Case Study - Full Width */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[300px] flex items-center justify-between">
            {/* Dotted Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <div className="grid grid-cols-8 gap-2">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 NDF-blue rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="relative z-10">
                <Image
                  src="https://ext.same-assets.com/1028798745/778648712.svg"
                  alt="Roche"
                  width={120}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/success-stories"
            className="inline-block NDF-blue text-white px-8 py-4 rounded-full font-medium hover:NDF-blue/90 transition-colors duration-200"
          >
            see all success stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
