'use client';

import React from 'react';
import { CheckCircle, Users, Code, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Innovate with you",
      description: "Focusing on hearing you and bringing to life new concepts helping to grasp market opportunities by building proof of concepts or minimum valuable product."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Deliver full scope of work",
      description: "Full-stack, self managed teams that can build a custom, enterprise-grade solution. From high-load systems to proof-of-concepts."
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Agile development",
      description: "We can help you build from scratch, upgrade, modernize platforms and applications for high performance, better user experience, scale, and security."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      title: "Modernize legacy technology",
      description: "Re-architecting legacy technology with a data migration plan for better user experience to support digital transformation."
    }
  ];

  return (
    <section className="bg-white py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 dotted-pattern-light opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 dotted-pattern opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-6">
            Supercharge your company{' '}
            <span className="text-primary">growth</span> with our custom approach
          </h2>

          {/* Stats */}
          
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              {/* Icon */}
              <div className="w-16 h-16 NDF-blue/10 rounded-2xl flex items-center justify-center">
                {service.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-[#0a1e2d] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gray-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#0a1e2d] mb-6">
              We will bring your company to the next level.
            </h3>
            <a
              href="how-we-work"
              className="inline-block NDF-blue text-white px-8 py-4 rounded-full font-medium hover:NDF-blue/90 transition-colors duration-200"
            >
              see how we work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
