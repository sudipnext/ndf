import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WorkWeLoveSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
        

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-4">
            Work we <span className="text-primary">love</span>
          </h2>
          <p className="text-xl text-gray-600">
            Success stories from all over the world
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Alpha Case Study */}
          <Link href="/clients/alpha" className="group">
            <div className="bg-black rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
              {/* Geometric pattern background */}
              <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-2 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-white/20"></div>
            ))}
          </div>
              </div>
              <div className="text-white text-4xl font-bold relative z-10">
          Alpha
              </div>
            </div>
          </Link>

          {/* Beta Case Study */}
          <Link href="/clients/beta" className="group">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 h-80 flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
              {/* Decorative dots */}
              <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 left-4 w-20 h-20 dotted-pattern opacity-20"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 dotted-pattern opacity-20"></div>
              </div>
              <Image
          src="https://via.placeholder.com/120x60"
          alt="Beta"
          width={120}
          height={60}
          className="h-12 w-auto relative z-10"
              />
            </div>
          </Link>

          {/* Gamma Case Study */}
          <Link href="/clients/gamma" className="group">
            <div className="bg-[#0a1e2d] rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
              {/* Tech pattern background */}
              <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-6 gap-4 h-full">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-2 h-2 NDF-blue rounded-full"></div>
              </div>
            ))}
          </div>
              </div>
              <div className="text-white text-2xl font-bold relative z-10 text-center">
          <div className="mb-2">Gamma</div>
          <div className="text-sm font-normal opacity-80">INNOVATION SIMPLIFIED</div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/success-stories"
            className="NDF-blue text-white px-8 py-4 rounded-full font-medium hover:NDF-blue/90 transition-colors duration-200"
          >
            see all success stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkWeLoveSection;
