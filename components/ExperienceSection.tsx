import React from 'react';
import Image from 'next/image';

const ExperienceSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - CEO photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gray-200 rounded-3xl overflow-hidden">
                <Image
                  src="./team/Yuyutshu Banjara.jpg"
                  alt="Mateusz Stanuszek - CEO at NDF"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-6">
                Benefit from our experience
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Benefit from our extensive experience in the industry. We understand the challenges you face and are here to help you overcome them. We provide Training and Development services to help you build the skills you need to succeed in today's fast-paced digital landscape. Our team of experts is dedicated to delivering high-quality training programs that are tailored to your specific needs.
              </p>

              <div className="mb-6">
                <p className="text-gray-700 font-medium">
                  <span className="font-bold">Er. Yuyutshu Banjara</span> - Cheif Executive Farmer at NDF
                </p>
              </div>

              <a
                href="/approach"
                className="inline-block NDF-blue text-white px-8 py-4 rounded-full font-medium hover:NDF-blue/90 transition-colors duration-200"
              >
                see our approach
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
