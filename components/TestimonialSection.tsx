'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      company: "Trace One",
      logo: "https://ext.same-assets.com/1028798745/3407926425.svg",
      rating: 5,
      review: "Based on development velocity and quality, NDF is a top-level vendor, on-par with the client's internal resources. Communication is smooth and efficient, mirroring the ease of working with in-house developers. NDF' work spurs few customer issues, which is evidence of their commitment.",
      link: "/clients/e-sourcing"
    },
    {
      company: "Roche",
      logo: "https://ext.same-assets.com/1028798745/778648712.svg",
      rating: 5,
      review: "The app was successfully launched, garnering at least 25% of its target users, and is still live. The schedule of the project was communicated well, and the team was very supportive, providing mockups that could be tested with users, and bringing both design and development expertize to the table.",
      link: "/clients/roche"
    },
    {
      company: "Uber",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/uber.svg",
      rating: 5,
      review: "NDF has a team of skilled problem solvers. They've delivered high-quality work so far. The team is committed to the project and works quickly. They follow a scrum methodology and they meet with their partners weekly. They're strong collaborators and provide weekly demonstrations.",
      link: "/clients/uber"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left side - Header and Tabs */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-2">
                Clients <span className="text-primary">testimonials</span>
              </h2>
              <p className="text-gray-600 text-base mt-2">
                Hear what our partners say about working with us.
              </p>
            </div>
            {/* Company tabs */}
            <div className="flex flex-col gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 w-full text-left border ${
                    activeTab === index
                      ? 'bg-white shadow-md border-blue-200'
                      : 'bg-transparent hover:bg-white/60 border-transparent'
                  }`}
                  aria-selected={activeTab === index}
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.company}
                      width={48}
                      height={24}
                      className="h-8 w-auto max-w-[48px]"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0a1e2d] text-lg">{testimonial.company}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Testimonial content */}
          <div className="lg:col-span-2 flex items-center">
            <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-lg w-full">
              {/* Rating stars */}
              <div className="flex mb-6">
                {Array.from({ length: testimonials[activeTab].rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                “{testimonials[activeTab].review}”
              </blockquote>

              {/* CTA */}
              <a
                href={testimonials[activeTab].link}
                className="inline-block bg-[#0a1e2d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0a1e2d]/90 transition-colors duration-200 shadow"
              >
                Read client review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
